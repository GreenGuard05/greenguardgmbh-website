"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChipCheckIcon } from "@/components/chip-check-icon";
import { CtaPrimary } from "@/components/cta-primary";
import { googleReviewCount } from "@/lib/reviews";
import { site } from "@/lib/site";

const stats = [
  { label: "Jahre Erfahrung", value: "15+" },
  { label: "Kunden", value: "200+" },
  { label: "Google", value: "5.0★" },
  { label: "Winterdienst", value: "24/7" },
];

/** Scroll-Distanz (px), nach der der Vorhang vollständig offen ist */
const VEIL_SCROLL_RANGE = 460;

/** Nach so vielen Pixeln Scroll ist der Scroll-Hinweis (Symbol) ausgeblendet */
const SCROLL_HINT_HIDE_AFTER_PX = 160;

/** Max. Öffnungswinkel: Spalte oben zur Spitze, nach unten deutlich breiter */
const MAX_VEIL_SWING_DEG = 34;

function smoothstep(t: number) {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

/**
 * Drehung um die obere Mitte (V-Spalt: oben geschlossen, unten öffnet sich der Spalt).
 * Easing legt den Schwerpunkt der Bewegung ins untere Drittel des Scrolls → Öffnung wirkt
 * stärker „nach unten“.
 */
function curtainTransform(progress: number, side: "left" | "right") {
  const p = smoothstep(Math.min(1, Math.max(0, progress)));
  const spread = 1 - (1 - p) ** 2.35;
  const deg = MAX_VEIL_SWING_DEG * spread;
  const shift = 26 * spread;
  const overlap = side === "left" ? 1.5 - shift : -1.5 + shift;
  return side === "left"
    ? `translate3d(${overlap}px,${spread * -10}px,0) rotate(${-deg}deg)`
    : `translate3d(${overlap}px,${spread * -10}px,0) rotate(${deg}deg)`;
}

/** Dunkler Schleier; horizontal zur Mitte etwas weicher, vertikal oben am dichtesten (Spitze) */
function veilPanelLayers(progress: number, side: "left" | "right") {
  const p = Math.min(1, Math.max(0, progress));
  const u = 1 - p;
  const strength = 0.18 + 0.78 * u ** 0.82;
  const inner = strength * 0.38;
  const mid = strength * 0.26;
  const outer = strength * 0.1;
  const hGrad =
    side === "left"
      ? `linear-gradient(90deg,rgba(0,2,1,${strength}) 0%,rgba(0,0,0,${mid}) 48%,rgba(0,0,0,${inner}) 76%,rgba(0,0,0,${outer}) 100%)`
      : `linear-gradient(270deg,rgba(0,2,1,${strength}) 0%,rgba(0,0,0,${mid}) 48%,rgba(0,0,0,${inner}) 76%,rgba(0,0,0,${outer}) 100%)`;
  const vGrad = `linear-gradient(to bottom,rgba(0,0,0,${0.42 * u}) 0%,rgba(0,0,0,${0.12 * u}) 42%,transparent 72%)`;
  const inset =
    side === "left"
      ? `inset -8px 0 22px rgba(0,0,0,${0.32 * u})`
      : `inset 8px 0 22px rgba(0,0,0,${0.32 * u})`;
  return { background: `${vGrad},${hGrad}`, boxShadow: inset };
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"
      />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M6.6 10.8c1.6 3 4.6 5.9 7.6 7.6l2.5-2.5c.4-.4 1-.5 1.4-.2 1.2.6 2.5.9 3.9.9.8 0 1.4.6 1.4 1.4V20c0 .8-.6 1.4-1.4 1.4C9.9 21.4 2.6 14.1 2.6 4.4 2.6 3.6 3.2 3 4 3h2.5c.8 0 1.4.6 1.4 1.4 0 1.4.3 2.7.9 3.9.2.4.1 1-.2 1.4L6.6 10.8z"
      />
    </svg>
  );
}

function Stars() {
  return (
    <span className="flex gap-0.5 text-amber-400" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.3l-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z" />
        </svg>
      ))}
    </span>
  );
}

function useHeroVeilProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      const t = window.setTimeout(() => setProgress(1), 0);
      return () => window.clearTimeout(t);
    }

    const update = () => {
      const y = window.scrollY;
      const p = Math.min(1, Math.max(0, y / VEIL_SCROLL_RANGE));
      setProgress(p);
    };

    const id = requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}

export function HomeHero({ heroSideSrc }: { heroSideSrc: string }) {
  const progress = useHeroVeilProgress();
  const u = 1 - progress;

  const scrollPx = progress * VEIL_SCROLL_RANGE;
  const hintFade = Math.min(1, scrollPx / SCROLL_HINT_HIDE_AFTER_PX);
  const hintOpacity = Math.max(0, 1 - hintFade);
  const hintLift = 10 * hintFade;

  /** Text lesbar halten; etwas dunkler passend zum stärkeren Schleier */
  const textScrimOpacity = 0.5 * u ** 0.62 + 0.2;
  const imageScale = 1.04 + progress * 0.055;
  const imageShiftY = progress * -34;
  const imageShiftX = progress * 18;

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-black text-white">
      {/* Vollflächiges Hero-Foto + dynamischer Schleier (oben geschlossen, unten öffnend) */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={heroSideSrc}
          alt=""
          fill
          className="object-cover will-change-transform"
          sizes="100vw"
          priority
          style={{
            transform: `translate3d(${imageShiftX}px, ${imageShiftY}px, 0) scale(${imageScale})`,
            transition: "transform 120ms linear",
          }}
        />
        <div
          className="absolute inset-0 isolate bg-gradient-to-b from-black/48 via-black/18 to-black/38 lg:bg-gradient-to-r lg:from-black/72 lg:via-black/22 lg:to-black/14"
          style={{ opacity: textScrimOpacity }}
        />
        <div className="pointer-events-none absolute inset-0 flex">
          <div
            className="h-full w-1/2 origin-top-right will-change-transform backface-hidden"
            style={{
              transform: curtainTransform(progress, "left"),
              ...veilPanelLayers(progress, "left"),
            }}
          />
          <div
            className="h-full w-1/2 origin-top-left will-change-transform backface-hidden"
            style={{
              transform: curtainTransform(progress, "right"),
              ...veilPanelLayers(progress, "right"),
            }}
          />
        </div>
        {/* Leichte Grün-Nebel + Parallax zum Scroll-Vorhang – bleibt unter Text (z-10) */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          aria-hidden
          style={{
            opacity: 0.26 + progress * 0.62,
            transform: `translate3d(${progress * 46}px, ${progress * -58}px, 0) scale(${1 + progress * 0.08})`,
            transition: "opacity 120ms linear, transform 120ms linear",
          }}
        >
          <div className="absolute left-[4%] top-[18%] h-[min(70vw,20rem)] w-[min(70vw,20rem)] rounded-full bg-[#70a340]/25 blur-3xl" />
          <div className="absolute bottom-[22%] right-[6%] h-[min(65vw,18rem)] w-[min(65vw,18rem)] rounded-full bg-[#a8e055]/18 blur-3xl" />
          <div className="absolute left-[58%] top-[36%] h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-400/14 blur-3xl sm:h-72 sm:w-72" />
        </div>
      </div>

      <div className="pointer-events-none relative z-10 grid min-h-[100svh] lg:grid-cols-2">
        <div className="pointer-events-auto relative z-10 flex flex-col justify-center px-4 pb-44 pt-28 sm:px-6 sm:pb-48 sm:pt-32 lg:pb-44 lg:pl-8 lg:pr-10 xl:pb-48">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#70a340]/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#e8ffdc] ring-1 ring-[#70a340]/45">
              <PinIcon className="text-[#a8e055]" />
              {site.regionBadge.toUpperCase()}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-800/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white ring-1 ring-white/10">
              <Stars />
              <span className="pl-0.5 normal-case tracking-normal">
                5.0 · {googleReviewCount} Bewertungen
              </span>
            </span>
          </div>

          <h1 className="mt-8 max-w-xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem]">
            <span className="gg-text-hero-white">Professionelles</span>
            <br />
            <span className="gg-text-green-brand">Facility</span>{" "}
            <span className="gg-text-hero-white">Management</span>
          </h1>

          <p className="gg-text-hero-muted mt-6 max-w-lg text-base leading-relaxed sm:text-lg">
            {site.name} – Ihr verlässlicher Partner für Grünanlagenpflege,
            Hausmeisterservice und Winterdienst in ganz Sachsen-Anhalt.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Grünanlagenpflege",
              "Hausmeisterservice",
              "Winterdienst",
              "Gebäudereinigung",
            ].map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-2 rounded-full border border-zinc-600/55 bg-zinc-900/85 px-3.5 py-2 text-xs text-zinc-100 shadow-sm backdrop-blur-sm"
              >
                <ChipCheckIcon className="h-4 w-4 shrink-0 text-[#28a745]" />
                <span className="font-medium text-zinc-100">{chip}</span>
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3 pb-2 sm:pb-4">
            <CtaPrimary href="/kontakt">Kostenloses Angebot</CtaPrimary>
            <a
              href={`tel:${site.phoneTel}`}
              className="inline-flex items-center gap-2 rounded-full border border-[#70a340]/55 bg-black/40 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#a8e055] hover:bg-white/5"
            >
              <PhoneIcon className="text-[#a8e055]" />
              {site.phone}
            </a>
          </div>
        </div>

        <div className="relative hidden min-h-[40vh] lg:block" aria-hidden />
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-32 z-20 flex justify-center transition-[opacity,transform] duration-300 ease-out will-change-[opacity,transform] sm:bottom-36 lg:bottom-40"
        style={{
          opacity: hintOpacity,
          transform: `translate3d(0, -${hintLift}px, 0)`,
        }}
        aria-hidden={hintOpacity < 0.03}
      >
        <div className="flex flex-col items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-zinc-500">
          <span>Scroll</span>
          <span className="flex h-9 w-5 justify-center rounded-full border border-zinc-600 pt-1.5">
            <span className="h-2 w-1 animate-bounce rounded-full bg-[#a8e055] shadow-[0_0_10px_rgba(112,163,64,0.65)]" />
          </span>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-30 border-t border-white/10 bg-zinc-950/75 shadow-[0_-12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md supports-[backdrop-filter]:bg-zinc-950/55">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-6 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/10 sm:px-6 sm:py-7">
          {stats.map((s) => (
            <div key={s.label} className="text-center sm:px-4 sm:text-left">
              <p className="gg-text-stat-value text-2xl font-bold sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
