import Link from "next/link";
import { redirect } from "next/navigation";
import { loginAdminDirect } from "@/app/admin/bilder/actions";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin – Anmeldung",
  robots: { index: false, follow: false },
};

type Props = { searchParams: { error?: string } };

export default function AdminLoginPage({ searchParams }: Props) {
  const sp = searchParams;
  if (!process.env.ADMIN_MEDIA_SECRET?.trim()) {
    redirect("/admin/bilder");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-100 px-4">
      <div className="w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-8 shadow-lg">
        <h1 className="text-lg font-bold text-zinc-900">Bilder-Dashboard</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Optional: Wert aus ADMIN_MEDIA_SECRET in .env.local (gleicher Wert wie hier im Formular). Ohne Variable ist das Dashboard direkt unter /admin/bilder erreichbar.
        </p>
        {sp.error ? (
          <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-800 ring-1 ring-red-200">Passwort ungültig.</p>
        ) : null}
        <form action={loginAdminDirect} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-zinc-800" htmlFor="password">
              Passwort
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none ring-[#70a340]/30 focus:ring-2"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-full bg-zinc-900 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-zinc-800"
          >
            Anmelden
          </button>
        </form>
        <p className="mt-6 text-center text-sm">
          <Link href="/" className="text-emerald-800 underline decoration-emerald-200 underline-offset-2 hover:text-emerald-950">
            Zur Startseite
          </Link>
        </p>
      </div>
    </div>
  );
}
