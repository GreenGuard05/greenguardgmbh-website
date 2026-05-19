"use client";

import { Caveat } from "next/font/google";
import { useEffect, useMemo, useState } from "react";
import { site } from "@/lib/site";

const handwriting = Caveat({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-gg-handwriting",
});

const SLOGAN_SEGMENTS = [
  { text: "„Ihr ", accent: false },
  { text: "Grün", accent: true },
  { text: " in besten Händen\u201C", accent: false },
] as const;

const FULL_SLOGAN = SLOGAN_SEGMENTS.map((s) => s.text).join("");

/** Verzögerung pro Zeichen (Schreib-Animation) – Handy & Desktop */
const CHAR_MS = 95;

type CharToken = { char: string; accent: boolean };

function buildTokens(): CharToken[] {
  return SLOGAN_SEGMENTS.flatMap((segment) =>
    [...segment.text].map((char) => ({ char, accent: segment.accent })),
  );
}

function HeroSloganHandwriting() {
  const tokens = useMemo(() => buildTokens(), []);
  const [visibleCount, setVisibleCount] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyMotion = () => {
      const reduced = mq.matches;
      setReduceMotion(reduced);
      if (reduced) {
        setVisibleCount(tokens.length);
        setDone(true);
      }
    };
    applyMotion();
    mq.addEventListener("change", applyMotion);
    return () => mq.removeEventListener("change", applyMotion);
  }, [tokens.length]);

  useEffect(() => {
    if (reduceMotion) return;
    if (visibleCount >= tokens.length) {
      setDone(true);
      return;
    }
    const id = window.setTimeout(() => {
      setVisibleCount((n) => n + 1);
    }, CHAR_MS);
    return () => window.clearTimeout(id);
  }, [visibleCount, tokens.length, reduceMotion]);

  return (
    <blockquote
      className={`gg-hero-slogan-quote relative w-full ${handwriting.className}`}
      aria-label={`${FULL_SLOGAN} — ${site.managingDirector}, ${site.managingDirectorTitle}`}
    >
      <span className="gg-hero-slogan-inner text-left" aria-hidden>
        {tokens.slice(0, visibleCount).map((token, index) =>
          token.char === " " ? (
            <span key={`${index}-sp`} className="gg-hero-slogan-space" aria-hidden>
              &nbsp;
            </span>
          ) : (
            <span
              key={`${index}-${token.char}`}
              className={
                token.accent
                  ? "gg-hero-slogan-accent gg-hero-slogan-char"
                  : "gg-hero-slogan-char text-white/95"
              }
            >
              {token.char}
            </span>
          ),
        )}
        {!done && !reduceMotion ? (
          <span className="gg-hero-slogan-cursor ml-0.5 text-[#a8e055]" aria-hidden>
            |
          </span>
        ) : null}
      </span>
    </blockquote>
  );
}

/** Marken-Slogan im Hero – Handschrift mit Schreib-Animation */
export function HeroBrandQuote({
  className = "",
  showRegionLine = true,
}: {
  className?: string;
  showRegionLine?: boolean;
}) {
  return (
    <figure
      className={`${handwriting.variable} w-full min-w-0 overflow-visible text-left ${className}`}
    >
      {showRegionLine ? (
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a8e055]/90">
          Vor Ort in Sachsen-Anhalt
        </p>
      ) : null}

      <div className={showRegionLine ? "mt-4 w-full overflow-visible sm:mt-5" : "w-full overflow-visible"}>
        <HeroSloganHandwriting />
      </div>

      <figcaption className="relative mt-1 sm:mt-1">
        <div className="flex items-center gap-1.5">
          <span
            className="h-px w-4 shrink-0 bg-gradient-to-r from-[#70a340]/80 to-transparent"
            aria-hidden
          />
          <div>
            <cite className="not-italic text-[7px] font-semibold leading-none tracking-tight text-white/95 sm:text-[8px]">
              {site.managingDirector}
            </cite>
            <p className="mt-px text-[5px] font-bold uppercase leading-none tracking-[0.14em] text-[#c8e6a0]/85 sm:text-[6px]">
              {site.managingDirectorTitle}
            </p>
          </div>
        </div>
      </figcaption>

      {showRegionLine ? (
        <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-300/95 sm:mt-6">
          Grünpflege, Winterdienst, Hausmeister und Reinigung – aus einer Hand für Wohn- und
          Gewerbeobjekte.
        </p>
      ) : null}
    </figure>
  );
}
