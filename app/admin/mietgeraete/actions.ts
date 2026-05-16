"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { adminSessionCookieValue, COOKIE_NAME, verifyAdminCookie } from "@/lib/admin-session";
import { slugifyRentalDeviceName, type RentalDevice } from "@/lib/rental-devices";
import { getRentalDevices, writeRentalDevices } from "@/lib/rental-devices.server";

export type SaveRentalDevicesState = { ok: boolean; message: string };

async function assertAdmin(): Promise<boolean> {
  const secret = process.env.ADMIN_MEDIA_SECRET?.trim();
  if (!secret) return true;
  const cookieStore = await cookies();
  const cookie = cookieStore.get(COOKIE_NAME)?.value;
  return verifyAdminCookie(cookie, secret);
}

export async function loginRentalAdminDirect(formData: FormData) {
  const secret = process.env.ADMIN_MEDIA_SECRET?.trim();
  if (!secret) {
    redirect("/admin/mietgeraete");
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
  redirect("/admin/mietgeraete");
}

function readDevicesFromForm(formData: FormData): RentalDevice[] {
  const names = formData.getAll("name");
  const images = formData.getAll("image");
  const descriptions = formData.getAll("description");
  const details = formData.getAll("details");

  return names
    .map((rawName, index) => {
      const name = typeof rawName === "string" ? rawName.trim() : "";
      if (!name) return null;
      const image = typeof images[index] === "string" ? images[index].trim() : "";
      const description = typeof descriptions[index] === "string" ? descriptions[index].trim() : "";
      const detail = typeof details[index] === "string" ? details[index].trim() : "";
      return {
        id: slugifyRentalDeviceName(name),
        name,
        image,
        description,
        details: detail,
      };
    })
    .filter((device): device is RentalDevice => Boolean(device));
}

export async function saveRentalDevices(
  prev: SaveRentalDevicesState,
  formData: FormData,
): Promise<SaveRentalDevicesState> {
  void prev;
  if (!(await assertAdmin())) {
    return { ok: false, message: "Nicht angemeldet. Bitte neu einloggen." };
  }
  if (process.env.VERCEL) {
    return {
      ok: false,
      message:
        "Auf Vercel ist das Schreiben nicht dauerhaft. Bitte lokal speichern und content/rental-devices.json committen.",
    };
  }

  try {
    const devices = readDevicesFromForm(formData);
    await writeRentalDevices(devices);
    revalidateTag("rental-devices", "max");
    revalidatePath("/mieten");
    revalidatePath("/kontakt");
    return { ok: true, message: "Mietgeräte gespeichert." };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Unbekannter Fehler";
    return { ok: false, message: msg };
  }
}

export async function loadRentalDevicesForAdmin(): Promise<RentalDevice[]> {
  return getRentalDevices();
}
