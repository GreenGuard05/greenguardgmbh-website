"use server";

import { headers } from "next/headers";
import nodemailer from "nodemailer";
import { site } from "@/lib/site";

export type ContactFormState = {
  ok: boolean;
  message: string;
};

const MAX_FIELD_LENGTH = 300;
const MAX_MESSAGE_LENGTH = 4000;
const MIN_FORM_SECONDS = 3;
const MAX_LINKS = 2;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;
const RATE_LIMIT_MAX = 3;
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function requiredText(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function trimField(value: string, max = MAX_FIELD_LENGTH) {
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, max);
}

function trimMessage(value: string) {
  return value.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim().slice(0, MAX_MESSAGE_LENGTH);
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) && !/[\r\n]/.test(value);
}

function linkCount(value: string) {
  return (value.match(/https?:\/\//gi) ?? []).length + (value.match(/\bwww\./gi) ?? []).length;
}

function clientIp(headerStore: Headers) {
  return (
    headerStore.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    headerStore.get("x-real-ip")?.trim() ||
    "unknown"
  );
}

function checkRateLimit(key: string) {
  const now = Date.now();
  const current = rateLimit.get(key);
  if (!current || current.resetAt <= now) {
    rateLimit.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (current.count >= RATE_LIMIT_MAX) return false;
  current.count += 1;
  return true;
}

function originAllowed(headerStore: Headers) {
  const origin = headerStore.get("origin");
  const host = headerStore.get("host");
  if (!origin || !host) return true;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

function formWasOpenLongEnough(formData: FormData) {
  const raw = requiredText(formData, "formStartedAt");
  const startedAt = Number(raw);
  return Number.isFinite(startedAt) && Date.now() - startedAt >= MIN_FORM_SECONDS * 1000;
}

function smtpPort() {
  const raw = process.env.SMTP_PORT?.trim();
  if (!raw) return 587;
  const parsed = Number(raw);
  return Number.isFinite(parsed) ? parsed : 587;
}

function configuredFromAddress() {
  return process.env.SMTP_FROM?.trim() || `${site.name} <${site.email}>`;
}

function configuredRecipient() {
  return process.env.CONTACT_MAIL_TO?.trim() || site.email;
}

function assertSmtpConfig() {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();

  if (!host || !user || !pass) {
    throw new Error("SMTP ist noch nicht konfiguriert. Bitte SMTP_HOST, SMTP_USER und SMTP_PASS in .env.local setzen.");
  }

  return { host, user, pass };
}

export async function sendContactRequest(
  prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  void prev;
  const headerStore = await headers();

  const honeypot = requiredText(formData, "website");
  if (honeypot) {
    return { ok: true, message: "Vielen Dank. Ihre Anfrage wurde übermittelt." };
  }

  if (!originAllowed(headerStore)) {
    return { ok: false, message: "Die Anfrage wurde aus Sicherheitsgründen blockiert." };
  }

  if (!checkRateLimit(clientIp(headerStore))) {
    return { ok: false, message: "Bitte warten Sie kurz, bevor Sie eine weitere Anfrage senden." };
  }

  if (!formWasOpenLongEnough(formData)) {
    return { ok: false, message: "Bitte prüfen Sie Ihre Eingaben und senden Sie das Formular erneut." };
  }

  const name = trimField(requiredText(formData, "name"));
  const email = trimField(requiredText(formData, "email"));
  const phone = trimField(requiredText(formData, "phone"));
  const company = trimField(requiredText(formData, "company"));
  const service = trimField(requiredText(formData, "service"));
  const device = trimField(requiredText(formData, "device"));
  const message = trimMessage(requiredText(formData, "message"));
  const privacyAccepted = formData.get("privacy") === "on";

  if (!name || !email || !message) {
    return { ok: false, message: "Bitte Name, E-Mail und Nachricht ausfüllen." };
  }

  if (!isValidEmail(email)) {
    return { ok: false, message: "Bitte eine gültige E-Mail-Adresse eingeben." };
  }

  if (linkCount([name, email, phone, company, service, device, message].join(" ")) > MAX_LINKS) {
    return { ok: false, message: "Die Anfrage enthält zu viele Links und wurde aus Sicherheitsgründen blockiert." };
  }

  if (!privacyAccepted) {
    return { ok: false, message: "Bitte bestätigen Sie den Datenschutzhinweis." };
  }

  try {
    const smtp = assertSmtpConfig();
    const port = smtpPort();
    const transporter = nodemailer.createTransport({
      host: smtp.host,
      port,
      secure: port === 465,
      auth: {
        user: smtp.user,
        pass: smtp.pass,
      },
    });

    const subject = `Neue Anfrage über greenguard-msh.de – ${name}`;
    const body = [
      "Neue Anfrage über das Kontaktformular",
      "",
      `Name: ${name}`,
      `E-Mail: ${email}`,
      `Telefon: ${phone || "-"}`,
      `Firma: ${company || "-"}`,
      `Gewünschte Leistung: ${service || "-"}`,
      `Gewünschtes Mietgerät: ${device || "-"}`,
      "",
      "Nachricht:",
      message,
      "",
      "Datenschutz:",
      "Der Absender hat den Datenschutzhinweis im Formular bestätigt.",
    ].join("\n");

    await transporter.sendMail({
      from: configuredFromAddress(),
      to: configuredRecipient(),
      replyTo: email,
      subject,
      text: body,
    });

    return { ok: true, message: "Vielen Dank. Ihre Anfrage wurde per E-Mail an Green Guard GmbH übermittelt." };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Die Anfrage konnte nicht gesendet werden.";
    return { ok: false, message };
  }
}
