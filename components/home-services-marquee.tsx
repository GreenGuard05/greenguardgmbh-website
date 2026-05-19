"use client";

import Link from "next/link";

export type HeroServiceMarqueeItem = {
  title: string;
  href: string;
};

type HomeServicesMarqueeProps = {
  services: HeroServiceMarqueeItem[];
  className?: string;
  /** Kompakter auf schmalen Viewports */
  compact?: boolean;
  /** Volle Bildschirmbreite auf Mobil (Rand zu Rand) */
  fullBleed?: boolean;
};

function ServicePill({
  service,
  compact,
}: {
  service: HeroServiceMarqueeItem;
  compact?: boolean;
}) {
  return (
    <Link
      href={service.href}
      className={`inline-flex max-w-[min(72vw,16rem)] shrink-0 items-center justify-center rounded-full border border-white/20 bg-zinc-950/75 text-center font-semibold leading-snug text-white backdrop-blur-md transition hover:border-[#70a340]/55 hover:bg-zinc-900/90 sm:max-w-none ${
        compact
          ? "px-3 py-2 text-[10px] sm:px-3.5 sm:py-2 sm:text-xs"
          : "px-4 py-2.5 text-sm sm:px-5 sm:py-3 sm:text-base"
      }`}
    >
      <span className="min-w-0 truncate">{service.title}</span>
    </Link>
  );
}

export function HomeServicesMarquee({
  services,
  className = "",
  compact = false,
  fullBleed = false,
}: HomeServicesMarqueeProps) {
  if (services.length === 0) return null;

  const loop = [...services, ...services, ...services];

  return (
    <div
      className={`w-full min-w-0 ${fullBleed ? "relative left-1/2 w-[100vw] max-w-[100vw] -translate-x-1/2 sm:static sm:w-full sm:max-w-none sm:translate-x-0" : ""} ${className}`}
    >
      <p
        className={`font-semibold uppercase tracking-[0.16em] text-[#a8e055]/90 ${
          compact ? "mb-1.5 max-sm:mb-1 px-4 text-[9px] sm:mb-2 sm:px-0" : "mb-2 text-[10px] sm:text-[11px]"
        }`}
      >
        Unsere Leistungen
      </p>

      <div className="group/marquee gg-marquee-mask relative overflow-hidden motion-reduce:hidden">
        <div
          className={`gg-marquee-ltr flex w-max py-0.5 ${compact ? "gap-2.5" : "gap-3 sm:gap-4"} ${fullBleed ? "px-4 sm:px-0" : ""}`}
        >
          {loop.map((service, index) => (
            <ServicePill
              key={`${service.href}-${index}`}
              service={service}
              compact={compact}
            />
          ))}
        </div>
      </div>

      <div
        className={`hidden flex-wrap justify-center gap-2 motion-reduce:flex sm:gap-3 ${fullBleed ? "px-4 sm:px-0" : ""}`}
      >
        {services.map((service) => (
          <ServicePill key={service.href} service={service} compact={compact} />
        ))}
      </div>
    </div>
  );
}
