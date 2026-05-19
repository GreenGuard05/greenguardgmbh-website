"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CtaPrimary } from "@/components/cta-primary";
import { HeroMobileContactCta } from "@/components/hero-mobile-contact-cta";
import { HeroBottomBand } from "@/components/hero-bottom-band";
import { HeroStatsBar } from "@/components/hero-stats-bar";
import { HeroReviewsMarquee } from "@/components/hero-reviews-marquee";
import { HeroBrandQuote } from "@/components/hero-brand-quote";
import { HeroBrandEyebrow } from "@/components/hero-top-strip";
import { HomeHeroVisual } from "@/components/home-hero-visual";
import type { HeroServiceMarqueeItem } from "@/components/home-services-marquee";
import type { OverlappingImageItem } from "@/components/overlapping-image-row";
import { site } from "@/lib/site";

/** Nach so vielen Pixeln Scroll ist der Scroll-Hinweis ausgeblendet */
const SCROLL_HINT_HIDE_AFTER_PX = 160;

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

function useScrollHint() {
  const [hintOpacity, setHintOpacity] = useState(1);
  const [hintLift, setHintLift] = useState(0);

  useEffect(() => {
    const update = () => {
      const fade = Math.min(1, window.scrollY / SCROLL_HINT_HIDE_AFTER_PX);
      setHintOpacity(Math.max(0, 1 - fade));
      setHintLift(10 * fade);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return { hintOpacity, hintLift };
}

export function HomeHero({
  heroSideSrc,
  heroServices,
  galleryImages,
}: {
  heroSideSrc: string;
  heroServices: HeroServiceMarqueeItem[];
  galleryImages: OverlappingImageItem[];
}) {
  const { hintOpacity, hintLift } = useScrollHint();

  return (
    <section className="relative max-sm:min-h-0 min-h-[100svh] overflow-x-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0 z-0">
        <Image
          src={heroSideSrc}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Feste Abdunkelung – kein scrollgesteuerter Vorhang */}
        <div
          className="absolute inset-0 bg-black/45"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70 lg:bg-gradient-to-r lg:from-black/75 lg:via-black/35 lg:to-black/25"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 z-[1]" aria-hidden>
          <div className="absolute left-[4%] top-[18%] h-[min(70vw,20rem)] w-[min(70vw,20rem)] rounded-full bg-[#70a340]/20 blur-3xl" />
          <div className="absolute bottom-[22%] right-[6%] h-[min(65vw,18rem)] w-[min(65vw,18rem)] rounded-full bg-[#a8e055]/14 blur-3xl" />
        </div>
      </div>

      <HeroReviewsMarquee className="absolute inset-x-0 top-[3.75rem] sm:top-[4.25rem]" />

      <div className="pointer-events-none relative z-10 flex min-h-[100svh] max-sm:min-h-[100svh] flex-col pt-10 max-sm:pt-10 sm:pt-12">
        <div className="grid flex-1 max-sm:flex max-sm:min-h-0 max-sm:flex-1 max-sm:flex-col lg:grid-cols-2">
          <div className="pointer-events-auto relative z-10 flex min-w-0 flex-col justify-center max-sm:min-h-0 max-sm:flex-1 max-sm:justify-start px-4 pt-20 pb-[19rem] max-sm:pb-0 max-sm:pt-[calc(4.25rem+2cm)] sm:px-6 sm:pb-6 sm:pt-28 lg:pl-8 lg:pr-10 lg:pt-28">
            <HeroBrandEyebrow />

            <h1 className="mt-4 max-w-xl text-4xl font-bold leading-[1.05] tracking-tight max-sm:mt-3 max-sm:text-[1.65rem] max-sm:leading-[1.08] sm:mt-8 sm:text-5xl lg:text-[3.25rem]">
              <span className="gg-text-hero-white">Professionelles</span>
              <br />
              <span className="gg-text-green-brand">Facility</span>{" "}
              <span className="gg-text-hero-white">Management</span>
            </h1>

            <HeroBrandQuote
              className="relative z-20 mt-3 w-full max-sm:mt-2 max-sm:scale-[0.92] max-sm:origin-top-left sm:mt-6 lg:mt-7 lg:max-w-[min(100%,58rem)]"
              showRegionLine={false}
            />

            <p className="gg-text-hero-muted mt-3 max-w-lg text-base leading-relaxed max-sm:hidden sm:mt-6 sm:text-lg">
              {site.name} – Ihr verlässlicher Dienstleister für Grünanlagenpflege,
              Hausmeisterservice und Winterdienst in ganz Sachsen-Anhalt.
            </p>

            <div className="mt-5 hidden flex-wrap gap-2.5 pb-0 sm:flex sm:mt-10 sm:gap-3 sm:pb-4">
              <CtaPrimary href="/kontakt">Kostenloses Angebot</CtaPrimary>
              <a
                href={`tel:${site.phoneTel}`}
                aria-label={`${site.phone} anrufen`}
                className="inline-flex items-center gap-2 rounded-full border border-[#70a340]/55 bg-black/40 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-[#a8e055] hover:bg-white/5"
              >
                <PhoneIcon className="text-[#a8e055]" />
                Rufen Sie uns an
              </a>
            </div>

            <HomeHeroVisual
              galleryImages={galleryImages}
              services={heroServices}
              layout="mobile"
            />

            <HeroMobileContactCta />
          </div>

          <div className="pointer-events-auto hidden flex-col justify-center px-4 lg:flex lg:pr-8">
            <HomeHeroVisual
              galleryImages={galleryImages}
              services={heroServices}
              layout="desktop"
            />
          </div>
        </div>

        <HeroBottomBand scrollHintOpacity={hintOpacity} scrollHintLift={hintLift} />
      </div>

      <HeroStatsBar />
    </section>
  );
}
