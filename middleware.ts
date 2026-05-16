import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_NAME, verifyAdminCookie } from "@/lib/admin-session";

function isLocalAdminHost(hostname: string) {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  if (!pathname.startsWith("/admin/bilder") && !pathname.startsWith("/admin/mietgeraete")) {
    return NextResponse.next();
  }

  if (!isLocalAdminHost(request.nextUrl.hostname)) {
    return new NextResponse("Not found", { status: 404 });
  }

  if (pathname.startsWith("/admin/bilder/login")) {
    return NextResponse.next();
  }

  const secret = process.env.ADMIN_MEDIA_SECRET?.trim();
  if (!secret) {
    return NextResponse.next();
  }

  const cookie = request.cookies.get(COOKIE_NAME)?.value;
  const ok = await verifyAdminCookie(cookie, secret);
  if (!ok) {
    return NextResponse.redirect(new URL("/admin/bilder/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/bilder", "/admin/bilder/:path*", "/admin/mietgeraete", "/admin/mietgeraete/:path*"],
};
