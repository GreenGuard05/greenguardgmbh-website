/**
 * Einfache Admin-Session: Cookie-Wert = fester Hash aus ADMIN_MEDIA_SECRET.
 * Kein Node-crypto nötig – Middleware nutzt dieselbe Ableitung (Web Crypto).
 */
const COOKIE_NAME = "gg_media_admin";
const PEPPER = "gg-site-media-admin-v1";

export { COOKIE_NAME };

export async function adminSessionCookieValue(secret: string): Promise<string> {
  const msg = new TextEncoder().encode(`${PEPPER}:${secret}`);
  const digest = await crypto.subtle.digest("SHA-256", msg);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function verifyAdminCookie(cookieValue: string | undefined, secret: string | undefined) {
  if (!secret || !cookieValue) return false;
  const expected = await adminSessionCookieValue(secret);
  return expected.length === cookieValue.length && timingSafeEqual(cookieValue, expected);
}

function timingSafeEqual(a: string, b: string) {
  if (a.length !== b.length) return false;
  let out = 0;
  for (let i = 0; i < a.length; i++) {
    out |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return out === 0;
}
