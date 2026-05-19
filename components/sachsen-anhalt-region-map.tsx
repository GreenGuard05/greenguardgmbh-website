"use client";

import { useState } from "react";
import {
  REGION_MAP_OUTLINE,
  REGION_MAP_VIEWBOX_DISPLAY,
  regionMapCities,
  regionMapHq,
  type RegionMapCity,
} from "@/lib/region-map";

function CityMarkerDot({
  city,
  index,
  isHq,
  isActive,
  dimmed,
  onEnter,
  onLeave,
}: {
  city: RegionMapCity;
  index: number;
  isHq: boolean;
  isActive: boolean;
  dimmed: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const href = city.slug ? `/einsatzgebiet/${city.slug}` : "/einsatzgebiet";
  const opacity = isHq ? 1 : dimmed ? 0.35 : 1;
  const delay = `${0.2 + index * 0.08}s`;
  const rOuter = isHq ? 11 : isActive ? 9 : 8;
  const rInner = isHq ? 6.5 : isActive ? 5.5 : 5;

  const dot = (
    <g
      className="gg-region-map-marker"
      style={{ animationDelay: delay, opacity }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
    >
      <circle
        cx={city.x}
        cy={city.y}
        r={rOuter + 4}
        className="gg-region-map-pulse fill-[#70a340]/18"
        style={{ animationDelay: `${index * 0.4}s` }}
      />
      <circle
        cx={city.x}
        cy={city.y}
        r={rOuter}
        className={
          isHq
            ? "fill-[#70a340] stroke-white"
            : isActive
              ? "fill-[#70a340] stroke-white"
              : "fill-white stroke-emerald-600"
        }
        strokeWidth={isHq ? 2.5 : 2.25}
      />
      <circle
        cx={city.x}
        cy={city.y}
        r={rInner}
        className={isHq || isActive ? "fill-white/90" : "fill-[#70a340]/35"}
      />
      <title>{city.name}</title>
    </g>
  );

  return (
    <a href={href} className="cursor-pointer outline-none" aria-label={`Einsatzgebiet ${city.name}`}>
      {dot}
    </a>
  );
}

function RegionMapSvg({
  className,
  activeCity,
  onCityChange,
}: {
  className: string;
  activeCity: string | null;
  onCityChange: (name: string | null) => void;
}) {
  const display = REGION_MAP_VIEWBOX_DISPLAY;

  return (
    <svg
      viewBox={`${display.x} ${display.y} ${display.width} ${display.height}`}
      className={className}
      preserveAspectRatio="xMidYMid meet"
      overflow="visible"
      role="img"
      aria-label="Karte Sachsen-Anhalt – Orte mit bestehender Tätigkeit von Green Guard"
    >
      <defs>
        <linearGradient id="gg-st-fill" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#eef6e6" />
          <stop offset="55%" stopColor="#e2efd6" />
          <stop offset="100%" stopColor="#d4e8c4" />
        </linearGradient>
        <radialGradient id="gg-st-glow" cx="40%" cy="68%" r="45%">
          <stop offset="0%" stopColor="#a8e055" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#70a340" stopOpacity="0" />
        </radialGradient>
      </defs>

      <path d={REGION_MAP_OUTLINE} fill="url(#gg-st-fill)" />
      <path d={REGION_MAP_OUTLINE} fill="url(#gg-st-glow)" className="pointer-events-none" />
      <path
        d={REGION_MAP_OUTLINE}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-[#70a340]/55"
      />

      <g className="gg-region-map-markers">
        {regionMapCities.map((city, index) => {
          const isHq = city.name === regionMapHq.name;
          const isActive = activeCity === city.name;
          const dimmed = activeCity != null && activeCity !== city.name;

          return (
            <CityMarkerDot
              key={city.name}
              city={city}
              index={index}
              isHq={isHq}
              isActive={isActive}
              dimmed={dimmed && !isHq}
              onEnter={() => onCityChange(city.name)}
              onLeave={() => onCityChange(null)}
            />
          );
        })}
      </g>
    </svg>
  );
}

/** Hinweis auf der Karte – erklärt die Marker */
function RegionMapActiveHint() {
  return (
    <div
      className="pointer-events-none absolute inset-x-2 top-2 z-10 flex justify-center sm:inset-x-3 sm:top-3"
      aria-hidden
    >
      <p className="gg-region-map-hint inline-flex max-w-[min(100%,20rem)] items-center gap-2 rounded-full border border-[#70a340]/35 bg-white/92 px-3 py-1.5 text-center text-[10px] font-semibold leading-snug text-emerald-900 shadow-md shadow-emerald-950/10 ring-1 ring-white/90 backdrop-blur-sm sm:max-w-md sm:px-4 sm:py-2 sm:text-[11px]">
        <span className="relative flex h-2 w-2 shrink-0" aria-hidden>
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#70a340]/50 motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-[#70a340]" />
        </span>
        <span>
          Grüne Markierungen: <span className="text-[#386622]">Orte, an denen wir bereits tätig sind</span>
        </span>
      </p>
    </div>
  );
}

export function SachsenAnhaltRegionMap({
  className = "",
  compact = false,
  fillHeight = false,
  activeCity: activeCityProp,
  onCityChange,
}: {
  className?: string;
  compact?: boolean;
  fillHeight?: boolean;
  activeCity?: string | null;
  onCityChange?: (name: string | null) => void;
}) {
  const [activeCityInternal, setActiveCityInternal] = useState<string | null>(null);
  const isControlled = activeCityProp !== undefined && onCityChange != null;
  const activeCity = isControlled ? activeCityProp : activeCityInternal;
  const setActiveCity = isControlled ? onCityChange : setActiveCityInternal;
  const stretch = compact && fillHeight;

  return (
    <figure
      className={[
        "relative flex w-full flex-col overflow-visible rounded-xl border border-emerald-800/15 bg-gradient-to-b from-white/90 via-[#f4f9ef] to-[#e8f2df] shadow-lg shadow-emerald-950/10 ring-1 ring-white/80",
        stretch
          ? "h-full min-h-[min(72vw,20rem)] p-2 sm:min-h-[22rem] lg:min-h-0 lg:p-3"
          : compact
            ? "min-h-[min(65vw,18rem)] w-full p-2 sm:min-h-[20rem] lg:p-3"
            : "p-2 sm:p-3",
        className,
      ].join(" ")}
    >
      <div
        className={
          stretch
            ? "relative min-h-0 flex-1 overflow-visible px-1 py-1"
            : "relative w-full flex-1 overflow-visible px-1 py-1"
        }
      >
        <RegionMapActiveHint />
        <RegionMapSvg
          activeCity={activeCity}
          onCityChange={setActiveCity}
          className="absolute inset-0 h-full w-full overflow-visible text-emerald-800/25"
        />
      </div>

      <figcaption className="shrink-0 px-1 pt-2 text-center sm:pt-2.5">
        <p className="text-[10px] leading-snug text-zinc-500 sm:text-[11px]">
          Fahren Sie mit der Maus über einen Punkt – der zugehörige Ort wird links in der Liste hervorgehoben.
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[9px] text-zinc-600 sm:text-[10px]">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#70a340] ring-2 ring-white" aria-hidden />
            Firmensitz Gerbstedt
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full border-2 border-emerald-600 bg-white" aria-hidden />
            Bereits aktive Einsatzorte
          </span>
        </div>
        <p className="mt-2 text-[9px] leading-snug text-zinc-500 sm:text-[10px]">
          Kartenumriss u. a.{" "}
          <a
            href="https://www.openstreetmap.org/copyright"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-emerald-800 underline decoration-emerald-200 underline-offset-2 hover:text-emerald-950"
          >
            © OpenStreetMap
          </a>{" "}
          (ODbL) · schematische Darstellung
        </p>
      </figcaption>
    </figure>
  );
}
