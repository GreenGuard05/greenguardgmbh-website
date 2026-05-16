import Link from "next/link";
import { localAreas } from "@/lib/local-seo";

export function LocalAreasSection() {
  return (
    <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-6 shadow-lg shadow-zinc-900/5 ring-1 ring-white sm:p-8">
      <div className="max-w-2xl">
        <p className="inline-flex rounded-full bg-[#eef6e6] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 ring-1 ring-emerald-200/80">
          Lokale Einsatzgebiete
        </p>
        <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
          Vor Ort für{" "}
          <span className="gg-heading-accent gg-heading-motion">Gerbstedt, Hettstedt, Eisleben, Halle (Saale) und Mansfeld-Südharz.</span>
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
          Wählen Sie Ihr Einsatzgebiet aus und erfahren Sie, welche Leistungen wir dort sinnvoll planen können. Für
          größere Objekte stimmen wir Umfang, Rhythmus, Anfahrt und Ansprechpartner persönlich mit Ihnen ab.
        </p>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {localAreas.map((area) => (
          <Link
            key={area.slug}
            href={`/einsatzgebiet/${area.slug}`}
            className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5 shadow-sm shadow-zinc-900/5"
          >
            <h3 className="text-base font-bold text-zinc-900">{area.name}</h3>
            <p className="mt-1 text-sm font-semibold text-emerald-800">{area.headline}</p>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">{area.text}</p>
            <span className="mt-4 inline-flex text-sm font-bold text-emerald-800">Einsatzgebiet ansehen →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
