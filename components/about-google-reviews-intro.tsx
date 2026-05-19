"use client";

import { useEffect, useId, useRef, useState } from "react";
import {
  ExternalLinkIcon,
  GoogleReviewRequestCard,
  StarRow,
} from "@/components/google-business-reviews-link";
import { GoogleReviewCard } from "@/components/google-review-card";
import { HomeSectionAmbient } from "@/components/home-section-ambient";
import {
  googleReviewCount,
  googleReviews,
  heroGoogleReviews,
  type GoogleReview,
} from "@/lib/reviews";
import { site } from "@/lib/site";

const teaserReviews = heroGoogleReviews.slice(0, 2);
const teaserNames = new Set(teaserReviews.map((r) => r.name));
const moreReviews = googleReviews.filter((r) => !teaserNames.has(r.name));
const moreReviewCount = moreReviews.length;

function excerpt(text: string, max = 118) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trimEnd()}…`;
}

function ReviewSpeechBubble({
  review,
  align,
  onOpen,
}: {
  review: GoogleReview;
  align: "left" | "right";
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={[
        "gg-about-speech-bubble group w-full cursor-pointer text-left",
        align === "right" ? "gg-about-speech-bubble--right" : "gg-about-speech-bubble--left",
      ].join(" ")}
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <StarRow size="sm" />
        <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-900 ring-1 ring-emerald-200/80">
          Google
        </span>
      </div>
      <p className="text-sm leading-relaxed text-zinc-800 sm:text-[15px]">
        &bdquo;{excerpt(review.text)}&ldquo;
      </p>
      <p className="mt-2.5 text-xs font-semibold text-zinc-600">
        {review.name}
        <span className="font-normal text-zinc-400"> · {review.date}</span>
      </p>
      <span className="mt-2 inline-flex text-[11px] font-medium text-emerald-800 opacity-0 transition group-hover:opacity-100">
        Weitere Bewertungen anzeigen ↓
      </span>
    </button>
  );
}

export function AboutGoogleReviewsIntro() {
  const rootRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const [visible, setVisible] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const openPanel = () => {
    setOpen(true);
    requestAnimationFrame(() => {
      document.getElementById("google-bewertungen-panel")?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    });
  };

  return (
    <div
      ref={rootRef}
      id="google-bewertungen"
      className="relative mt-10 scroll-mt-28 border-t border-emerald-900/10 pt-10 sm:mt-12 sm:pt-12"
      aria-labelledby="about-reviews-intro-heading"
    >
      <div className="pointer-events-none absolute -left-6 top-8 h-32 w-32 rounded-full bg-[#70a340]/10 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-4 bottom-0 h-28 w-28 rounded-full bg-amber-400/10 blur-3xl" aria-hidden />

      <div>
          <p className="inline-flex rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
            Google-Bewertungen
          </p>
          <h3
            id="about-reviews-intro-heading"
            className="mt-3 text-xl font-bold tracking-tight text-zinc-900 sm:text-2xl"
          >
            Was Kunden über uns sagen
          </h3>
        <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-5">
          <p className="min-w-0 flex-1 text-sm leading-relaxed text-zinc-600 sm:max-w-md">
            Zwei Stimmen als Vorgeschmack – per Klick alle {googleReviewCount} Google-Rezensionen
            einblenden.
          </p>
          <GoogleReviewRequestCard
            size="compact"
            className="ml-auto w-full max-w-[18.5rem] shrink-0 sm:w-[18.5rem]"
          />
        </div>
      </div>

      <div className="relative mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5">
        {teaserReviews.map((review, index) => (
          <article
            key={review.name}
            className={[
              "gg-about-review-bubble",
              visible ? "gg-about-review-bubble--visible" : "",
              index === 1 ? "sm:mt-4" : "sm:-mt-1",
            ]
              .filter(Boolean)
              .join(" ")}
            style={{ transitionDelay: visible ? `${120 + index * 140}ms` : "0ms" }}
          >
            <ReviewSpeechBubble
              review={review}
              align={index === 0 ? "left" : "right"}
              onOpen={openPanel}
            />
          </article>
        ))}
      </div>

      <div
        className={[
          "mt-6 sm:mt-8",
          visible ? "gg-about-review-bubble--visible" : "gg-about-review-bubble opacity-0",
        ].join(" ")}
        style={{ transitionDelay: visible ? "380ms" : "0ms" }}
      >
        <div
          className={[
            "gg-reviews-dropdown-shimmer",
            open ? "gg-reviews-dropdown-shimmer--open" : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          <button
            type="button"
            id="google-bewertungen-toggle"
            aria-expanded={open}
            aria-controls={panelId}
            onClick={() => setOpen((value) => !value)}
            className="gg-about-reviews-dropdown-trigger group flex items-center gap-4 px-4 py-4 text-left shadow-lg shadow-emerald-900/6 transition hover:shadow-xl sm:px-5 sm:py-4.5"
          >
          <span
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-50 to-white ring-1 ring-emerald-200/80"
            aria-hidden
          >
            <svg width="22" height="22" viewBox="0 0 48 48" className="h-[22px] w-[22px]">
              <path
                fill="#FFC107"
                d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
              />
              <path
                fill="#FF3D00"
                d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
              />
              <path
                fill="#4CAF50"
                d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238a11.91 11.91 0 01-3.219 1.43A12 12 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
              />
              <path
                fill="#1976D2"
                d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
              />
            </svg>
          </span>
          <span className="min-w-0 flex-1">
            <span className="flex flex-wrap items-center gap-2">
              <StarRow size="sm" />
              <span className="text-base font-bold tabular-nums text-zinc-900 sm:text-lg">5,0</span>
              {moreReviewCount > 0 ? (
                <span className="rounded-full bg-emerald-600 px-2.5 py-0.5 text-[11px] font-bold text-white">
                  +{moreReviewCount} weitere
                </span>
              ) : null}
            </span>
            <span className="mt-1 block text-sm font-semibold text-zinc-900 sm:text-base">
              {open
                ? "Weitere Bewertungen ausblenden"
                : `Alle weiteren Google-Bewertungen anzeigen (${moreReviewCount})`}
            </span>
            <span className="mt-0.5 block text-xs text-zinc-500 sm:text-sm">
              {open
                ? "Klicken zum Schließen"
                : "Vollständige Rezensionen im Karten-Layout"}
            </span>
          </span>
          <span
            className={[
              "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-lg text-white shadow-md transition group-hover:bg-emerald-700 motion-reduce:transition-none",
              open ? "rotate-180" : "",
            ].join(" ")}
            aria-hidden
          >
            ↓
          </span>
          </button>
        </div>

        <div
          id={panelId}
          className={[
            "gg-about-reviews-dropdown-panel grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none",
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
          ].join(" ")}
        >
          <div id="google-bewertungen-panel" className="min-h-0 overflow-hidden">
            <div className="relative mt-5 overflow-hidden rounded-2xl border border-emerald-900/10 bg-gradient-to-b from-white via-zinc-50/90 to-[#eef4eb]/80 p-4 sm:mt-6 sm:p-6">
              <HomeSectionAmbient scene="reviews" />
              <div className="relative z-10">
                <p className="mb-5 max-w-lg text-sm text-zinc-600 sm:mb-6">
                  Echte Stimmen von Google – für uns ein Maßstab, für Sie eine Entscheidungshilfe.
                </p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                  {moreReviews.map((review) => (
                    <GoogleReviewCard key={review.name} {...review} />
                  ))}
                </div>
                <p className="mt-6 flex justify-center sm:mt-8">
                  <a
                    href={site.googleBusinessProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 underline decoration-zinc-300 underline-offset-4 transition hover:text-zinc-900"
                  >
                    Alle Rezensionen auf Google ansehen
                    <ExternalLinkIcon className="opacity-70" />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
