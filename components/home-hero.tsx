"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CtaPrimary } from "@/components/cta-primary";
import { HeroBrandQuote } from "@/components/hero-brand-quote";
import { HeroBrandEyebrow } from "@/components/hero-top-strip";
import { site } from "@/lib/site";

/** Nach so vielen Pixeln Scroll ist der Scroll-Hinweis ausgeblendet */
const SCROLL_HINT_HIDE_AFTER_PX = 120;

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M6.6 10.8c1.6 3 4.6 5.9 7.6 7.6l2.5-2.5c.4-.4 1-.5 1.4-.2 1.2.6 2.5.9 3.9.9.8 0 1.4.6 1.4 1.4V20c0 .8-.6 1.4-1.4 1.4C9.9 21.4 2.6 14.1 2.6 4.4 2.6 3.6 3.2 3 4 3h2.5c.8 0 1.4.6 1.4 1.4 0 1.4.3 2.7.9 3.9.2.4.1 1-.2 1.4L6.6 10.8z"
      />
    </svg>
  );
}

function useScrollHint() {
  const [hintOpacity, setHintOpacity] = useState(1);
  const [hintLift, setHintLift] = useState(0);

  useEffect(() => {
    const update = () => {
      const fade = Math.min(1, window.scrollY / SCROLL_HINT_HIDE_AFTER_PX);
      setHintOpacity(Math.max(0, 1 - fade));
      setHintLift(8 * fade);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return { hintOpacity, hintLift };
}

/**
 * Schlanker Hero: Marke, Headline, Slogan, SEO-Satz, CTAs, Vollbild-Hintergrund.
 * Mobil: kompakt von oben, ohne große Leerräume durch vertikales Zentrieren.
 */
export function HomeHero({ heroSideSrc }: { heroSideSrc: string }) {
  const { hintOpacity, hintLift } = useScrollHint();

  return (
    <section className="relative flex flex-col bg-black text-white max-sm:min-h-[100svh] sm:min-h-[100svh]">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src={heroSideSrc}
          alt=""
          fill
          className="object-cover object-[center_35%] sm:object-center"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/50 max-sm:bg-black/55" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/85 sm:from-black/70 sm:via-black/35 sm:to-black/80 lg:bg-gradient-to-r lg:from-black/80 lg:via-black/45 lg:to-black/30"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 z-[1] max-sm:hidden" aria-hidden>
          <div className="absolute left-[6%] top-[22%] h-[min(70vw,22rem)] w-[min(70vw,22rem)] rounded-full bg-[#70a340]/18 blur-3xl" />
          <div className="absolute bottom-[18%] right-[8%] h-[min(60vw,18rem)] w-[min(60vw,18rem)] rounded-full bg-[#a8e055]/12 blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 flex flex-1 flex-col px-4 pb-3 pt-[4.25rem] max-sm:justify-start sm:justify-center sm:px-6 sm:pb-16 sm:pt-28 lg:px-8 lg:pt-32">
        <div className="mx-auto w-full max-w-3xl max-sm:pt-3 lg:mx-0 lg:max-w-2xl xl:max-w-3xl">
          <HeroBrandEyebrow />

          <h1 className="mt-2.5 max-w-xl text-[1.55rem] font-bold leading-[1.1] tracking-tight sm:mt-7 sm:text-5xl sm:leading-[1.08] lg:text-[3.35rem] lg:leading-[1.05]">
            <span className="gg-text-hero-white">Professionelles</span>
            <br />
            <span className="gg-text-green-brand">Facility</span>{" "}
            <span className="gg-text-hero-white">Management</span>
          </h1>

          <HeroBrandQuote
            className="relative z-20 mt-2.5 w-full sm:mt-6 lg:mt-7"
            showRegionLine={false}
          />

          <p className="gg-text-hero-muted mt-3 max-w-xl text-[13px] leading-snug sm:mt-7 sm:text-lg sm:leading-relaxed">
            <span className="sm:hidden">
              {site.name} – Grünanlagenpflege, Solarparkpflege, Böschungspflege, Hausmeisterservice
              & Winterdienst in Sachsen-Anhalt.
            </span>
            <span className="hidden sm:inline">
              {site.name} – Grünanlagenpflege, Solarparkpflege, Böschungs- & Hangpflege,
              Hausmeisterservice, Winterdienst und mehr in ganz Sachsen-Anhalt.
            </span>
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-10 sm:flex sm:flex-wrap sm:items-center sm:gap-3">
            <CtaPrimary
              href="/kontakt#angebot-formular"
              className="w-full justify-center px-3 py-3 text-[13px] sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
            >
              <span className="sm:hidden">Angebot holen</span>
              <span className="hidden sm:inline">Kostenloses Angebot</span>
            </CtaPrimary>
            <a
              href={`tel:${site.phoneTel}`}
              aria-label={`${site.phone} anrufen`}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-full border border-[#70a340]/55 bg-black/40 px-3 py-3 text-[13px] font-semibold text-white backdrop-blur-sm transition hover:border-[#a8e055] hover:bg-white/5 sm:w-auto sm:gap-2 sm:px-6 sm:py-3.5 sm:text-sm"
            >
              <PhoneIcon className="text-[#a8e055]" />
              <span className="sm:hidden">Anrufen</span>
              <span className="hidden sm:inline">Rufen Sie uns an</span>
            </a>
          </div>

          <a
            href="/dienstleistungen"
            className="mt-3 inline-flex text-[13px] font-semibold text-[#a8e055] transition hover:text-[#d4f5a8] sm:mt-5 sm:text-sm"
          >
            Alle Leistungen ansehen →
          </a>
        </div>

        <p
          className="pointer-events-none relative z-10 mx-auto mt-auto flex items-center gap-1.5 pb-2 pt-4 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400/90 transition-[opacity,transform] duration-300 ease-out sm:mt-10 sm:pb-0 sm:pt-0 sm:text-xs sm:normal-case sm:tracking-normal"
          style={{
            opacity: hintOpacity,
            transform: `translate3d(0, -${hintLift}px, 0)`,
          }}
          aria-hidden={hintOpacity < 0.03}
        >
          <span className="sm:hidden">Weiter</span>
          <span className="hidden sm:inline">Leistungen entdecken</span>
          <span
            className="inline-flex text-[#a8e055]/90 motion-safe:animate-bounce motion-reduce:animate-none"
            aria-hidden
          >
            ↓
          </span>
        </p>
      </div>
    </section>
  );
}
