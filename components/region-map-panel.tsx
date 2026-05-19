"use client";

import { useState } from "react";
import { RegionCitiesList } from "@/components/region-cities-list";
import { SachsenAnhaltRegionMap } from "@/components/sachsen-anhalt-region-map";

/** Karte + Ortsliste mit gemeinsamem Hover-Status */
export function RegionMapPanel() {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  return (
    <div className="gg-region-map-panel mt-6 rounded-2xl border border-emerald-800/12 bg-white/50 p-3 shadow-xl shadow-emerald-950/8 ring-1 ring-white/80 backdrop-blur-sm sm:mt-8 sm:p-4 lg:p-5">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,min(100%,22rem))_minmax(0,1fr)] lg:items-stretch lg:gap-6 xl:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] xl:gap-8">
        <RegionCitiesList activeCity={activeCity} className="order-2 lg:order-1" />
        <div className="order-1 flex min-h-[min(72vw,20rem)] w-full min-w-0 sm:min-h-[22rem] lg:order-2 lg:h-full lg:min-h-0">
          <SachsenAnhaltRegionMap
            activeCity={activeCity}
            onCityChange={setActiveCity}
            compact
            fillHeight
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
