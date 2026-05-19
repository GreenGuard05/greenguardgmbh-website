import { TrustStatsCards } from "@/components/trust-stats-cards";
import { trustHighlights } from "@/lib/trust-highlights";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M9.55 17.35 4.1 11.9l1.4-1.42 4.05 4.05 9.45-9.45 1.42 1.42z"
      />
    </svg>
  );
}

/** Fester Trust-Bereich unten im Hero: Vorteile + Kennzahlen */
export function HeroStatsBar() {
  return (
    <div className="absolute inset-x-0 bottom-0 z-30 border-t border-[#70a340]/25 bg-zinc-950/92 shadow-[0_-16px_48px_rgba(0,0,0,0.45)] backdrop-blur-md supports-[backdrop-filter]:bg-zinc-950/82">
      <div className="mx-auto max-w-6xl px-4 py-2.5 max-sm:px-3 max-sm:py-1.5 sm:px-6 sm:py-5">
        <ul
          className="m-0 hidden list-none sm:grid sm:grid-cols-3 sm:gap-3"
          aria-label="Unsere Vorteile"
        >
          {trustHighlights.map((item, index) => (
            <li
              key={item.title}
              className={[
                "flex items-center gap-2.5 sm:items-start sm:rounded-xl sm:border sm:border-white/10 sm:bg-white/[0.04] sm:px-4 sm:py-3",
                "max-sm:px-3 max-sm:py-2.5",
                index === 0 ? "max-sm:pt-3" : "",
                index === trustHighlights.length - 1 ? "max-sm:pb-3" : "",
              ].join(" ")}
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#70a340]/25 text-[#a8e055] ring-1 ring-[#70a340]/40 sm:mt-0.5 sm:h-7 sm:w-7">
                <CheckIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-bold leading-tight text-white sm:text-sm">
                  {item.title}
                </span>
                <span className="mt-0.5 block text-[10px] leading-snug text-zinc-400 sm:text-[11px]">
                  {item.text}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <div
          className="my-2 hidden h-px bg-gradient-to-r from-transparent via-[#70a340]/35 to-transparent sm:my-4 sm:block"
          aria-hidden
        />

        <TrustStatsCards compactHero />
      </div>
    </div>
  );
}
