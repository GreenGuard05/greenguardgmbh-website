import Link from "next/link";
import { logoutAdmin, loadMediaForAdmin } from "@/app/admin/bilder/actions";
import { MediaEditor } from "@/app/admin/bilder/media-editor";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Bilder verwalten",
  robots: { index: false, follow: false },
};

export default async function AdminMedienPage() {
  const media = await loadMediaForAdmin();
  const authLocked = Boolean(process.env.ADMIN_MEDIA_SECRET?.trim());

  return (
    <div className="min-h-screen bg-zinc-100 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-[92rem]">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">Admin</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900">Website-Bilder</h1>
            <p className="mt-2 text-sm text-zinc-600">
              URLs bearbeiten, speichern, fertig. Ohne Code-Editor.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/admin/mietgeraete"
              className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50"
            >
              Mietgeräte
            </Link>
            <Link
              href="/"
              className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50"
            >
              Zur Website
            </Link>
            {authLocked ? (
              <form action={logoutAdmin}>
                <button
                  type="submit"
                  className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50"
                >
                  Abmelden
                </button>
              </form>
            ) : null}
          </div>
        </header>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-md sm:p-8">
          <MediaEditor key={JSON.stringify(media)} initial={media} />
        </div>
      </div>
    </div>
  );
}
