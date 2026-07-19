import Link from "next/link";
import { HeroStatsBar } from "@/components/hero-stats-bar";
import { googleReviewCount, heroGoogleReviews } from "@/lib/reviews";
import { site } from "@/lib/site";

function Stars() {
  return (
    <span className="flex shrink-0 gap-px text-amber-400" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.3l-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z" />
        </svg>
      ))}
    </span>
  );
}

/**
 * Trust-Bereich direkt unter dem Hero: ruhige Bewertungen + Kennzahlen.
 */
export function HomeTrustBand() {
  const reviews = heroGoogleReviews
    .filter((review) => review.name !== "Google-Nutzer" && !review.ratingOnly)
    .slice(0, 3);

  return (
    <section
      className="relative border-t border-[#70a340]/20 bg-zinc-950 text-white"
      aria-label="Kundenstimmen und Kennzahlen"
    >
      {reviews.length > 0 ? (
        <div className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-4 py-3 sm:flex sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#a8e055]/90 sm:text-[11px] sm:tracking-[0.16em]">
              Google · {googleReviewCount}+ Bewertungen
            </p>
            <ul className="mt-2.5 flex gap-2 overflow-x-auto pb-0.5 [-ms-overflow-style:none] [scrollbar-width:none] sm:mt-0 sm:flex-wrap sm:justify-end sm:overflow-visible [&::-webkit-scrollbar]:hidden">
              {reviews.map((review) => (
                <li key={review.name} className="shrink-0">
                  <Link
                    href={site.googleBusinessProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/12 bg-white/[0.04] px-2.5 py-1.5 transition hover:border-[#70a340]/40 hover:bg-white/[0.07] sm:gap-2 sm:px-3"
                  >
                    <Stars />
                    <span className="text-[11px] font-semibold text-zinc-100 sm:text-xs">
                      {review.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}

      <HeroStatsBar />
    </section>
  );
}
