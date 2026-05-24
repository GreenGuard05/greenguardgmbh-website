"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { googleReviewCount, heroGoogleReviews, type GoogleReview } from "@/lib/reviews";
import { site } from "@/lib/site";

const SHOW_AFTER_MS = 600;

function truncateQuote(text: string, max = 64) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

function Stars() {
  return (
    <span className="flex shrink-0 gap-px text-amber-400/80" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.3l-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z" />
        </svg>
      ))}
    </span>
  );
}

function ReviewChip({ review }: { review: GoogleReview }) {
  return (
    <Link
      href={site.googleBusinessProfileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="pointer-events-auto flex shrink-0 items-center gap-2.5 rounded-full border border-white/15 bg-black/45 px-3.5 py-2 backdrop-blur-sm transition hover:border-[#70a340]/35 hover:bg-black/55 sm:gap-3 sm:px-4 sm:py-2.5"
    >
      <Stars />
      <span className="whitespace-nowrap text-[11px] font-semibold text-zinc-100 sm:text-xs">
        {review.name}
      </span>
      <span className="hidden h-3 w-px bg-white/20 sm:block" aria-hidden />
      <span className="max-w-[11rem] truncate text-[10px] text-zinc-300/95 sm:max-w-[14rem] sm:text-[11px]">
        {review.ratingOnly ? (
          "5 von 5 Sternen"
        ) : (
          <>„{truncateQuote(review.text)}“</>
        )}
      </span>
    </Link>
  );
}

export function HeroReviewsMarquee({ className = "" }: { className?: string }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), SHOW_AFTER_MS);
    return () => window.clearTimeout(timer);
  }, []);

  if (heroGoogleReviews.length === 0) return null;

  const loop = [...heroGoogleReviews, ...heroGoogleReviews];

  return (
    <div
      className={`pointer-events-none z-[6] transition-opacity duration-700 ease-out ${visible ? "opacity-[0.62] hover:opacity-[0.78]" : "opacity-0"} ${className}`}
      aria-label="Google Bewertungen"
    >
      <div className="relative left-1/2 w-[100vw] -translate-x-1/2">
        <div className="group/marquee gg-marquee-mask relative overflow-hidden border-b border-white/[0.08] bg-black/30 py-2.5 backdrop-blur-sm motion-reduce:hidden sm:py-3">
          <div className="gg-marquee-ltr gg-marquee-reviews flex w-max items-center gap-3 px-2 sm:gap-4">
            {loop.map((review, index) => (
              <ReviewChip key={`${review.name}-${index}`} review={review} />
            ))}
          </div>
        </div>

        <div className="hidden flex-wrap items-center justify-center gap-2 border-b border-white/[0.08] bg-black/30 px-4 py-2.5 backdrop-blur-sm motion-reduce:flex">
          {heroGoogleReviews.map((review) => (
            <ReviewChip key={review.name} review={review} />
          ))}
        </div>

        <p className="pointer-events-none absolute right-4 top-1/2 hidden -translate-y-1/2 text-[9px] font-semibold uppercase tracking-[0.14em] text-zinc-400 sm:right-8 md:block">
          {googleReviewCount} · Google · 5,0
        </p>
      </div>
    </div>
  );
}
