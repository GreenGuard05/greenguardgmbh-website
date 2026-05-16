"use client";

import Link from "next/link";
import { useActionState, useState } from "react";
import { saveRentalDevices, type SaveRentalDevicesState } from "@/app/admin/mietgeraete/actions";
import type { RentalDevice } from "@/lib/rental-devices";

const initialSave: SaveRentalDevicesState = { ok: true, message: "" };

const inputClass =
  "mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-[#70a340]/25 focus:ring-2";

function emptyDevice(): RentalDevice {
  return {
    id: `neu-${Date.now()}`,
    name: "",
    image: "",
    description: "",
    details: "",
  };
}

export function RentalDevicesEditor({ initial }: { initial: RentalDevice[] }) {
  const [state, formAction, pending] = useActionState(saveRentalDevices, initialSave);
  const [devices, setDevices] = useState<RentalDevice[]>(() => initial);

  function updateDevice(index: number, patch: Partial<RentalDevice>) {
    setDevices((current) =>
      current.map((device, itemIndex) => (itemIndex === index ? { ...device, ...patch } : device)),
    );
  }

  function removeDevice(index: number) {
    setDevices((current) => current.filter((_, itemIndex) => itemIndex !== index));
  }

  return (
    <form action={formAction} className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm text-zinc-600">
            Hier legst du Mietgeräte an. Jede Karte erscheint auf <span className="font-mono">/mieten</span> und
            bekommt automatisch einen Anfrage-Link zum Kontaktformular.
          </p>
        </div>
        <button
          type="button"
          onClick={() => setDevices((current) => [...current, emptyDevice()])}
          className="rounded-full bg-emerald-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800"
        >
          Gerät hinzufügen
        </button>
      </div>

      {state.message ? (
        <p
          className={`rounded-lg px-3 py-2 text-sm ${state.ok ? "bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200" : "bg-red-50 text-red-900 ring-1 ring-red-200"}`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5">
        {devices.map((device, index) => (
          <article key={device.id} className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 shadow-sm">
            <div className="grid gap-5 lg:grid-cols-[11rem_1fr]">
              <div className="overflow-hidden rounded-xl border border-zinc-200 bg-white">
                {device.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={device.image} alt="" className="h-44 w-full object-cover lg:h-full" />
                ) : (
                  <div className="flex h-44 items-center justify-center px-4 text-center text-xs text-zinc-500">
                    Bild-URL einfügen
                  </div>
                )}
              </div>

              <div className="grid gap-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <label className="text-sm font-semibold text-zinc-900">
                      Gerätename *
                      <input
                        name="name"
                        required
                        value={device.name}
                        onChange={(event) => updateDevice(index, { name: event.target.value })}
                        className={inputClass}
                        placeholder="z. B. Benzin-Häcksler"
                      />
                    </label>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeDevice(index)}
                    className="rounded-full border border-red-200 bg-white px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-50"
                  >
                    Entfernen
                  </button>
                </div>

                <label className="text-sm font-semibold text-zinc-900">
                  Bild-URL
                  <input
                    name="image"
                    value={device.image}
                    onChange={(event) => updateDevice(index, { image: event.target.value })}
                    className={inputClass}
                    placeholder="https://images.pexels.com/..."
                  />
                </label>

                <label className="text-sm font-semibold text-zinc-900">
                  Kurzbeschreibung
                  <textarea
                    name="description"
                    rows={3}
                    value={device.description}
                    onChange={(event) => updateDevice(index, { description: event.target.value })}
                    className={inputClass}
                    placeholder="Wofür ist das Gerät geeignet?"
                  />
                </label>

                <label className="text-sm font-semibold text-zinc-900">
                  Hinweise / Details
                  <textarea
                    name="details"
                    rows={3}
                    value={device.details}
                    onChange={(event) => updateDevice(index, { details: event.target.value })}
                    className={inputClass}
                    placeholder="Einweisung, Zubehör, Verfügbarkeit, Schutzkleidung..."
                  />
                </label>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex flex-wrap gap-3 border-t border-zinc-200 pt-6">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-zinc-800 disabled:opacity-60"
        >
          {pending ? "Speichern..." : "Mietgeräte speichern"}
        </button>
        <Link
          href="/mieten"
          className="rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 shadow-sm hover:bg-zinc-50"
        >
          Seite ansehen
        </Link>
      </div>
    </form>
  );
}
