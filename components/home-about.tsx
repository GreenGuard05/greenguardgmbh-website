import Image from "next/image";
import Link from "next/link";
import { ChipCheckIcon } from "@/components/chip-check-icon";
import { HomeSectionAmbient } from "@/components/home-section-ambient";
import { googleReviewCount } from "@/lib/reviews";
import { site } from "@/lib/site";

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M12 8v4.25l3 1.75"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HomeAbout({
  collage,
}: {
  collage: { hedge: string; lawn: string; mower: string };
}) {
  return (
    <section className="relative overflow-hidden border-y border-emerald-900/10 py-20 sm:py-24 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-zinc-100 via-[#eef4eb] to-[#dfe8d8]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#70a340]/8 blur-3xl"
        aria-hidden
      />
      <HomeSectionAmbient scene="about" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="gg-about-card-tilt relative col-span-2 aspect-[21/9] min-h-[11rem] rounded-2xl shadow-xl ring-1 ring-zinc-900/10 sm:min-h-[14rem]">
            <Image
              src={collage.hedge}
              alt="Gepflegte Hecke und Weg"
              fill
              className="gg-about-card-tilt-media object-cover motion-reduce:transform-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="gg-about-card-tilt relative aspect-square min-h-[10rem] rounded-2xl shadow-lg ring-1 ring-zinc-900/10 sm:min-h-[12rem]">
            <Image
              src={collage.lawn}
              alt="Rasenfläche"
              fill
              className="gg-about-card-tilt-media object-cover motion-reduce:transform-none"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
          </div>
          <div className="gg-about-card-tilt relative aspect-square min-h-[10rem] rounded-2xl shadow-lg ring-1 ring-zinc-900/10 sm:min-h-[12rem]">
            <Image
              src={collage.mower}
              alt="Rasenmäher im Einsatz"
              fill
              className="gg-about-card-tilt-media object-cover motion-reduce:transform-none"
              sizes="(max-width: 1024px) 50vw, 25vw"
            />
            <div className="pointer-events-none absolute inset-x-3 bottom-3 z-10 rounded-lg bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span className="flex text-amber-400" aria-hidden>
                  {"★★★★★"}
                </span>
                <span className="text-xs font-semibold text-zinc-800">
                  5.0 · {googleReviewCount} Bewertungen
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pl-2">
          <p className="inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
            Über uns
          </p>
          <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.5rem]">
            <span className="gg-text-heading-section">Ihr verlässlicher Partner</span>
            <br />
            <span className="gg-text-heading-section">für </span>
            <span className="gg-text-green-forest">Immobilienbetreuung</span>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-zinc-600 sm:text-base">
            {site.name} steht für professionelles Facility Management in Gerbstedt und ganz
            Sachsen-Anhalt. Wir kümmern uns um Ihre Immobilien – zuverlässig, termingerecht
            und mit Leidenschaft für Details.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Über 15 Jahre Erfahrung in Sachsen-Anhalt",
              "Persönlicher Ansprechpartner für Ihr Objekt",
              "Schnelle Reaktionszeiten & flexible Termine",
              "Moderne Profi-Geräte",
              "Transparente Festpreisangebote",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                <ChipCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#28a745]" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/90 bg-white/90 px-4 py-2.5 text-sm font-medium text-zinc-800 shadow-sm">
              <span className="text-[#70a340]" aria-hidden>
                🌿
              </span>
              Umweltfreundlich
            </span>
            <span className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/90 bg-white/90 px-4 py-2.5 text-sm font-medium text-zinc-800 shadow-sm">
              <ClockIcon className="shrink-0 text-[#70a340]" />
              Zuverlässig
            </span>
          </div>
          <Link href="/ueber-uns" className="gg-btn-black-solid mt-10">
            Mehr über uns
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
