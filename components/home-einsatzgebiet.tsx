import { ChipCheckIcon } from "@/components/chip-check-icon";
import { HomeSectionAmbient } from "@/components/home-section-ambient";
import { regionCitiesColumns } from "@/lib/reviews";

function PinSm({ className }: { className?: string }) {
  return (
    <svg className={className} width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
    </svg>
  );
}

/** Dezente Routen-Linie mit zwei Pins – wie Navigations-Icon im Hintergrund */
function RegionRouteBackdrop() {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden max-md:opacity-60"
      aria-hidden
    >
      <svg
        className="gg-region-route absolute left-1/2 top-[42%] h-[min(88%,26rem)] w-[min(130%,48rem)] -translate-x-1/2 -translate-y-1/2 text-emerald-800/[0.16] sm:text-emerald-800/[0.22] lg:left-[54%] lg:top-[48%]"
        viewBox="0 0 960 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="gg-region-route-path"
          d="M 148 398 C 248 368, 312 292, 398 318 C 484 344, 548 228, 648 252 C 748 276, 812 168, 868 188"
          stroke="currentColor"
          strokeWidth="2.25"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="12 16"
        />
        <g transform="translate(118, 358)">
          <ellipse cx="18" cy="52" rx="20" ry="6" fill="currentColor" opacity="0.12" />
          <path
            d="M18 4c-7.2 0-13 5.8-13 13 0 10.2 13 25 13 25s13-14.8 13-25c0-7.2-5.8-13-13-13z"
            stroke="currentColor"
            strokeWidth="2.25"
            fill="none"
          />
          <circle cx="18" cy="17" r="5" stroke="currentColor" strokeWidth="1.75" fill="none" />
        </g>
        <g transform="translate(848, 148) scale(0.78)">
          <ellipse cx="18" cy="52" rx="20" ry="6" fill="currentColor" opacity="0.12" />
          <path
            d="M18 4c-7.2 0-13 5.8-13 13 0 10.2 13 25 13 25s13-14.8 13-25c0-7.2-5.8-13-13-13z"
            stroke="currentColor"
            strokeWidth="2.25"
            fill="none"
          />
          <circle cx="18" cy="17" r="5" stroke="currentColor" strokeWidth="1.75" fill="none" />
        </g>
      </svg>
    </div>
  );
}

export function HomeEinsatzgebiet() {
  const [left, right] = regionCitiesColumns;

  return (
    <section className="relative overflow-hidden border-t border-zinc-200/60 py-20 sm:py-24 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-50/95 via-white to-zinc-100/85"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-1/4 h-64 w-64 rounded-full bg-[#70a340]/10 blur-3xl"
        aria-hidden
      />
      <RegionRouteBackdrop />
      <HomeSectionAmbient scene="region" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-14 xl:gap-16">
          <div className="relative z-10 max-w-md max-sm:isolate lg:pt-0.5 lg:pl-0.5">
            <p className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
              Einsatzgebiet
            </p>
            <h2 className="mt-5 text-2xl font-bold leading-[1.15] tracking-tight text-zinc-900 sm:text-3xl md:text-[2rem]">
              Facility Management in ganz Sachsen-Anhalt
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Von unserem Standort in Gerbstedt aus betreuen wir Kunden im gesamten
              Landkreis Mansfeld-Südharz und darüber hinaus. Schnelle Anfahrtszeiten
              und lokale Expertise zeichnen uns aus.
            </p>
            <p className="mt-6 flex items-center gap-2 text-xs font-medium text-zinc-500">
              <PinSm className="shrink-0 text-emerald-700" />
              Gerbstedt, Sachsen-Anhalt, Deutschland
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {[left, right].map((col, ci) => (
              <ul key={ci} className="flex flex-col gap-3 sm:gap-3.5">
                {col.map((city) => (
                  <li
                    key={city}
                    className="flex items-center gap-2.5 rounded-xl border border-zinc-200/80 bg-white/95 px-3 py-2.5 shadow-md shadow-zinc-900/5 transition duration-200 hover:-translate-y-0.5 hover:border-emerald-900/12 hover:shadow-lg motion-reduce:hover:-translate-y-0 sm:gap-3 sm:px-3.5 sm:py-3"
                  >
                    <ChipCheckIcon className="h-5 w-5 shrink-0 text-emerald-600 sm:h-6 sm:w-6" />
                    <span className="min-w-0 text-xs font-medium text-zinc-900 sm:text-sm">{city}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <p className="mt-10 flex items-start gap-2 text-xs text-zinc-500 sm:mt-12">
          <span className="select-none font-semibold leading-none text-emerald-600" aria-hidden>
            *
          </span>
          <span>Weitere Regionen auf Anfrage</span>
        </p>
      </div>
    </section>
  );
}
