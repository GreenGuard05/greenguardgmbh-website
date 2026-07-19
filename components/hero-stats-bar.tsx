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

/** Trust-Bereich: Vorteile + Kennzahlen (unter dem Hero, nicht im ersten Viewport) */
export function HeroStatsBar() {
  return (
    <div className="bg-zinc-950/95">
      <div className="mx-auto max-w-6xl px-3 py-3 sm:px-6 sm:py-6">
        <ul
          className="m-0 hidden list-none sm:grid sm:grid-cols-3 sm:gap-3"
          aria-label="Unsere Vorteile"
        >
          {trustHighlights.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
            >
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#70a340]/25 text-[#a8e055] ring-1 ring-[#70a340]/40">
                <CheckIcon className="h-3.5 w-3.5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-bold leading-tight text-white">
                  {item.title}
                </span>
                <span className="mt-0.5 block text-[11px] leading-snug text-zinc-400">
                  {item.text}
                </span>
              </span>
            </li>
          ))}
        </ul>

        <div
          className="my-4 hidden h-px bg-gradient-to-r from-transparent via-[#70a340]/35 to-transparent sm:block"
          aria-hidden
        />

        <TrustStatsCards compactHero />
      </div>
    </div>
  );
}
