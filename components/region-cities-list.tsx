import Link from "next/link";
import { LocationPinIcon } from "@/components/location-pin-icon";
import { PhonePillLink, PillLink } from "@/components/phone-pill-link";
import { getLocalAreaByName } from "@/lib/local-seo";
import { regionOtherLocationContactHref } from "@/lib/region-contact";
import { regionCities } from "@/lib/reviews";

/** Abwechselnd kurze/lange Namen – füllt die Chip-Wolke gleichmäßiger */
const REGION_CITIES_CLOUD = [
  "Hettstedt",
  "Lutherstadt Eisleben",
  "Mansfeld",
  "Sangerhausen",
  "Aschersleben",
  "Bernburg",
  "Halberstadt",
  "Quedlinburg",
  "Halle (Saale)",
] as const;

const HQ_CITY = "Gerbstedt";

function RegionCityChip({
  city,
  index,
  isActive,
  isDimmed,
}: {
  city: string;
  index: number;
  isActive: boolean;
  isDimmed: boolean;
}) {
  const area = getLocalAreaByName(city);

  return (
    <Link
      href={area ? `/einsatzgebiet/${area.slug}` : "/einsatzgebiet"}
      className={[
        "gg-region-city-chip group flex w-full items-center gap-3 rounded-2xl border px-3 py-3.5 text-left shadow-md backdrop-blur-sm transition duration-200 hover:border-[#70a340]/35 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#70a340] motion-reduce:hover:translate-y-0 sm:gap-4 sm:px-4 sm:py-4",
        isActive
          ? "z-[1] scale-[1.02] border-[#70a340] bg-gradient-to-br from-[#eef6e6] via-white to-[#d8edc8] shadow-lg shadow-[#70a340]/20 ring-2 ring-[#70a340]/45"
          : isDimmed
            ? "opacity-45 saturate-50"
            : index % 2 === 0
              ? "border-emerald-700/15 bg-gradient-to-br from-white via-white to-emerald-50/80 shadow-emerald-950/[0.06]"
              : "border-emerald-600/12 bg-gradient-to-br from-emerald-50/90 via-white to-[#f4f9f0] shadow-emerald-900/[0.05]",
      ].join(" ")}
    >
      <span
        className="gg-region-pin-float flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#70a340] to-[#4d7d28] text-white shadow-sm ring-1 ring-white/30 sm:h-10 sm:w-10"
        style={{ animationDelay: `${index * 0.28}s` }}
        aria-hidden
      >
        <LocationPinIcon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
      </span>
      <span className="min-w-0 flex-1 text-base font-semibold leading-snug text-zinc-900 sm:text-lg">
        {city}
      </span>
    </Link>
  );
}

export function RegionCitiesList({
  className = "",
  activeCity = null,
}: {
  className?: string;
  /** Von der Karte per Hover gesetzt – hebt den passenden Ort in der Liste hervor */
  activeCity?: string | null;
}) {
  const hqArea = getLocalAreaByName(HQ_CITY);
  const hqActive = activeCity === HQ_CITY;
  const listDimmed = activeCity != null && !hqActive;

  return (
    <div
      className={`flex h-full flex-col rounded-xl border border-emerald-700/15 bg-gradient-to-b from-emerald-50/70 via-white to-white p-3 shadow-inner shadow-emerald-900/[0.04] ring-1 ring-white/90 sm:p-4 lg:min-h-0 ${className}`}
    >
      <div className="mb-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-emerald-900 sm:text-[10px]">
            Aktuelle Einsatzorte
          </p>
          <span className="rounded-full bg-[#70a340] px-1.5 py-px text-[9px] font-bold tabular-nums text-white sm:text-[10px]">
            {regionCities.length}
          </span>
        </div>
        <p className="mt-1.5 text-xs leading-relaxed text-zinc-600">
          Grünpflege, Hausmeisterdienst, Winterdienst und Reinigung – aktuell in diesen Orten.
        </p>
      </div>

      <div className="min-w-0 flex-1 space-y-3">
        <Link
          href={hqArea ? `/einsatzgebiet/${hqArea.slug}` : "/einsatzgebiet"}
          className={[
            "gg-region-city-hq flex w-full items-center justify-center gap-2.5 rounded-2xl border px-4 py-3.5 text-sm font-semibold text-white shadow-md transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#70a340] sm:py-4",
            hqActive
              ? "z-[1] scale-[1.02] border-[#a8e055]/60 bg-gradient-to-r from-[#7cb342] to-[#629b38] shadow-lg shadow-[#386622]/35 ring-2 ring-[#a8e055]/50"
              : listDimmed
                ? "border-[#5a9234]/40 bg-gradient-to-r from-[#70a340] to-[#5a9234] opacity-50 shadow-[#386622]/20 hover:from-[#7cb342] hover:to-[#629b38]"
                : "border-[#5a9234]/40 bg-gradient-to-r from-[#70a340] to-[#5a9234] shadow-[#386622]/20 hover:from-[#7cb342] hover:to-[#629b38]",
          ].join(" ")}
        >
          <span className="rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ring-1 ring-white/25">
            HQ
          </span>
          {HQ_CITY}
          <span className="text-white/80">· Firmensitz</span>
        </Link>

        <ul className="gg-region-cities-list m-0 flex list-none flex-col gap-3 p-0 sm:gap-3.5">
          {REGION_CITIES_CLOUD.map((city, index) => (
            <li key={city} className="w-full">
              <RegionCityChip
                city={city}
                index={index}
                isActive={activeCity === city}
                isDimmed={activeCity != null && activeCity !== city}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 space-y-2 border-t border-emerald-900/10 pt-4">
        <p className="text-[11px] leading-snug text-zinc-500">
          Ort nicht dabei? Wir prüfen die Machbarkeit gerne.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
          <PhonePillLink size="compact" className="w-full sm:w-auto sm:shrink-0" />
          <PillLink
            href={regionOtherLocationContactHref()}
            size="compact"
            className="w-full sm:w-auto sm:shrink-0"
          >
            Anderen Ort anfragen
            <span aria-hidden>→</span>
          </PillLink>
        </div>
      </div>
    </div>
  );
}
