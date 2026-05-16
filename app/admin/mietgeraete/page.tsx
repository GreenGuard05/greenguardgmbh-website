import Link from "next/link";
import { loadRentalDevicesForAdmin } from "@/app/admin/mietgeraete/actions";
import { RentalDevicesEditor } from "@/app/admin/mietgeraete/rental-devices-editor";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Mietgeräte verwalten",
  robots: { index: false, follow: false },
};

export default async function AdminMietgeraetePage() {
  const devices = await loadRentalDevicesForAdmin();

  return (
    <div className="min-h-screen bg-zinc-100 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">Admin</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight text-zinc-900">Mietgeräte</h1>
            <p className="mt-2 text-sm text-zinc-600">
              Geräte anlegen, Bilder hinterlegen, Beschreibung schreiben und Anfragen verknüpfen.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/admin/bilder"
              className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50"
            >
              Bilder verwalten
            </Link>
            <Link
              href="/mieten"
              className="rounded-full border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-800 shadow-sm hover:bg-zinc-50"
            >
              Mietseite öffnen
            </Link>
          </div>
        </header>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-md sm:p-8">
          <RentalDevicesEditor initial={devices} />
        </div>
      </div>
    </div>
  );
}
