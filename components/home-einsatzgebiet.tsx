import { HomeSectionAmbient } from "@/components/home-section-ambient";
import { RegionMapPanel } from "@/components/region-map-panel";

function PinSm({ className }: { className?: string }) {
  return (
    <svg className={className} width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
    </svg>
  );
}

export function HomeEinsatzgebiet() {
  return (
    <section className="relative isolate overflow-hidden border-t border-zinc-200/60 py-14 sm:py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-zinc-50/95 via-white to-zinc-100/85"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/4 z-0 h-64 w-64 rounded-full bg-[#70a340]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-1/4 z-0 h-72 w-72 rounded-full bg-[#a8e055]/8 blur-3xl"
        aria-hidden
      />
      <HomeSectionAmbient scene="region" bleed="none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
            Einsatzgebiet
          </p>
          <h2 className="mt-4 text-xl font-bold leading-[1.15] tracking-tight text-zinc-900 sm:text-2xl md:text-[1.75rem]">
            Facility Management in ganz Sachsen-Anhalt
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            Von unserem Standort in Gerbstedt aus betreuen wir Kunden im gesamten Landkreis
            Mansfeld-Südharz und darüber hinaus. Schnelle Anfahrtszeiten und lokale Expertise
            zeichnen uns aus.
          </p>
          <p className="mt-3 flex items-center gap-2 text-xs font-medium text-zinc-500">
            <PinSm className="shrink-0 text-emerald-700" />
            Gerbstedt, Sachsen-Anhalt, Deutschland
          </p>
        </div>

        <RegionMapPanel />

      </div>
    </section>
  );
}
