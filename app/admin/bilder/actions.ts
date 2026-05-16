"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { adminSessionCookieValue, COOKIE_NAME, verifyAdminCookie } from "@/lib/admin-session";
import {
  SITE_MEDIA_DEFAULTS,
  SITE_MEDIA_KEYS,
  type ResolvedSiteMedia,
} from "@/lib/site-media-defaults";
import { services } from "@/lib/services";
import { getResolvedSiteMedia, writeSiteMediaFile } from "@/lib/site-media.server";

export type SaveMediaState = { ok: boolean; message: string };

function mergeFromForm(formData: FormData): ResolvedSiteMedia {
  const next: ResolvedSiteMedia = { ...SITE_MEDIA_DEFAULTS };
  for (const key of SITE_MEDIA_KEYS) {
    const raw = formData.get(key);
    if (typeof raw === "string") {
      const t = raw.trim();
      next[key] = t === "" ? SITE_MEDIA_DEFAULTS[key] : t;
    }
  }
  return next;
}

async function assertAdmin(): Promise<boolean> {
  const secret = process.env.ADMIN_MEDIA_SECRET?.trim();
  if (!secret) return true;
  const cookieStore = await cookies();
  const cookie = cookieStore.get(COOKIE_NAME)?.value;
  return verifyAdminCookie(cookie, secret);
}

export async function loginAdminDirect(formData: FormData) {
  const secret = process.env.ADMIN_MEDIA_SECRET?.trim();
  if (!secret) {
    redirect("/admin/bilder");
  }
  const pw = String(formData.get("password") ?? "");
  if (pw !== secret) {
    redirect("/admin/bilder/login?error=1");
  }
  const token = await adminSessionCookieValue(secret);
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/admin",
    maxAge: 60 * 60 * 24 * 14,
  });
  redirect("/admin/bilder");
}

export async function logoutAdmin() {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, "", { path: "/admin", maxAge: 0 });
  redirect("/admin/bilder/login");
}

export async function saveSiteMedia(prev: SaveMediaState, formData: FormData): Promise<SaveMediaState> {
  void prev;
  if (!(await assertAdmin())) {
    return { ok: false, message: "Nicht angemeldet. Bitte neu einloggen." };
  }
  if (process.env.VERCEL) {
    return {
      ok: false,
      message:
        "Auf Vercel ist das Schreiben nicht dauerhaft. Bitte lokal mit npm run dev speichern und content/site-media.json committen.",
    };
  }
  try {
    const next = mergeFromForm(formData);
    await writeSiteMediaFile(next);
    revalidateTag("site-media", "max");
    revalidatePath("/", "layout");
    revalidatePath("/ueber-uns");
    revalidatePath("/dienstleistungen");
    for (const s of services) {
      revalidatePath(`/dienstleistungen/${s.slug}`);
    }
    return { ok: true, message: "Gespeichert. Seite neu laden, falls die Vorschau noch alt ist." };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unbekannter Fehler";
    return { ok: false, message: msg };
  }
}

export async function loadMediaForAdmin(): Promise<ResolvedSiteMedia> {
  return getResolvedSiteMedia();
}
