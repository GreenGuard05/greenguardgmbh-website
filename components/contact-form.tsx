"use client";

import { useActionState, useRef, useState } from "react";
import { sendContactRequest, type ContactFormState } from "@/app/kontakt/actions";

const services = [
  "Grünanlagenpflege",
  "Strauch- & Buschpflege",
  "Hausmeisterservice",
  "Winterdienst",
  "Gebäudereinigung",
  "Gerätemietservice",
  "Sonstiges",
];

const fieldClass =
  "mt-1 w-full rounded-xl border border-zinc-200 bg-zinc-50/50 px-3.5 py-2.5 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-emerald-500/40 focus:bg-white focus:ring-2 focus:ring-[#70a340]/30";

const initialFormState: ContactFormState = { ok: true, message: "" };

export function ContactForm({
  initialService = "",
  initialDevice = "",
  initialMessage = "",
}: {
  initialService?: string;
  initialDevice?: string;
  initialMessage?: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLParagraphElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [service, setService] = useState(initialService);
  const [device, setDevice] = useState(initialDevice);
  const [formStartedAt, setFormStartedAt] = useState(() => Date.now());
  const [message, setMessage] = useState(
    initialMessage ||
      (initialDevice
        ? `Ich interessiere mich für folgendes Mietgerät: ${initialDevice}\n\nGewünschter Zeitraum:\nEinsatzort:\n`
        : ""),
  );
  const [state, formAction, pending] = useActionState(async (prev: ContactFormState, formData: FormData) => {
    const result = await sendContactRequest(prev, formData);

    if (result.ok && result.message) {
      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setService("");
      setDevice("");
      setMessage("");
      setFormStartedAt(Date.now());
      formRef.current?.reset();
      window.requestAnimationFrame(() => {
        statusRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      });
    }

    return result;
  }, initialFormState);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-xl shadow-emerald-950/10 ring-1 ring-white"
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-[#f4faef] via-white to-[#e3efd8] px-6 py-6 text-zinc-900 sm:px-8">
        <div className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#70a340]/20 blur-3xl" aria-hidden />
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-800">Direkte Anfrage</p>
        <h2 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">Erzählen Sie uns kurz, worum es geht</h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-600">
          Wir lesen jede Anfrage persönlich und melden uns mit Rückfragen oder einem passenden Vorschlag zurück.
        </p>
      </div>

      <div className="space-y-4 p-6 sm:p-8">
        <p className="rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-950 ring-1 ring-emerald-100">
          Pflichtfelder sind mit * markiert. Ihre Anfrage wird per E-Mail direkt an Green Guard GmbH übermittelt.
        </p>
        {state.message ? (
          <p
            ref={statusRef}
            className={`rounded-2xl px-4 py-3 text-sm ${state.ok ? "bg-emerald-50 text-emerald-950 ring-1 ring-emerald-100" : "bg-red-50 text-red-900 ring-1 ring-red-200"}`}
            role="status"
            aria-live="polite"
          >
            {state.message}
          </p>
        ) : null}
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
        <input type="hidden" name="formStartedAt" value={formStartedAt} />
        <div>
          <label className="text-sm font-medium text-zinc-800" htmlFor="name">
            Name *
          </label>
          <input
            id="name"
            name="name"
            required
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            className={fieldClass}
            autoComplete="name"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-zinc-800" htmlFor="email">
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
            className={fieldClass}
            autoComplete="email"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-zinc-800" htmlFor="phone">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            value={phone}
            onChange={(ev) => setPhone(ev.target.value)}
            className={fieldClass}
            autoComplete="tel"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-zinc-800" htmlFor="company">
            Firma (optional)
          </label>
          <input
            id="company"
            name="company"
            value={company}
            onChange={(ev) => setCompany(ev.target.value)}
            className={fieldClass}
            autoComplete="organization"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-zinc-800" htmlFor="service">
            Gewünschte Leistung
          </label>
          <select
            id="service"
            name="service"
            value={service}
            onChange={(ev) => {
              const nextService = ev.target.value;
              setService(nextService);
              if (nextService !== "Gerätemietservice") {
                setDevice("");
              }
            }}
            className={`${fieldClass} cursor-pointer`}
          >
            <option value="">Bitte wählen…</option>
            {services.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        {service === "Gerätemietservice" ? (
          <div>
            <label className="text-sm font-medium text-zinc-800" htmlFor="device">
              Gewünschtes Mietgerät
            </label>
            <input
              id="device"
              name="device"
              value={device}
              onChange={(ev) => setDevice(ev.target.value)}
              className={fieldClass}
              placeholder="z. B. Benzin-Häcksler"
            />
          </div>
        ) : null}
        <div>
          <label className="text-sm font-medium text-zinc-800" htmlFor="message">
            Ihre Nachricht *
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            value={message}
            onChange={(ev) => setMessage(ev.target.value)}
            className={fieldClass}
          />
        </div>

        <label className="flex gap-3 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4 text-sm leading-relaxed text-zinc-700">
          <input
            type="checkbox"
            name="privacy"
            required
            className="mt-1 h-4 w-4 shrink-0 rounded border-zinc-300 text-emerald-700 focus:ring-[#70a340]/30"
          />
          <span>
            Ich habe die{" "}
            <a className="font-medium text-emerald-800 underline decoration-emerald-200 underline-offset-2 hover:text-emerald-950" href="/datenschutz">
              Datenschutzerklärung
            </a>{" "}
            gelesen und bin damit einverstanden, dass meine Angaben zur Bearbeitung der Anfrage per E-Mail an
            Green Guard GmbH übermittelt und verarbeitet werden.
          </span>
        </label>

        <button
          type="submit"
          disabled={pending}
          className="gg-btn-primary mt-2 flex w-full items-center justify-center px-6 py-3.5 text-sm"
        >
          <span className="gg-btn-primary-inner">
            <span className="gg-btn-primary-label">{pending ? "Anfrage wird gesendet..." : "Anfrage absenden"}</span>
            <span className="gg-btn-primary-arrow" aria-hidden>
              →
            </span>
          </span>
        </button>

        <p className="text-center text-xs text-zinc-500">
          Die Anfrage wird nicht öffentlich gespeichert, sondern an unser Postfach gesendet.{" "}
          <a className="font-medium text-emerald-800 underline decoration-emerald-200 underline-offset-2 hover:text-emerald-950" href="/datenschutz">
            Datenschutzerklärung
          </a>
        </p>
      </div>
    </form>
  );
}
