"use client";

import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { ServiceCard } from "@/components/service-card";
import type { ServiceDetail } from "@/lib/services";

function gridItemClass(index: number, total: number) {
  const base = "min-w-0 lg:col-span-2";
  if (total <= 4) return base;
  if (index >= 3) return `${base} lg:col-span-3`;
  return base;
}

export function ServicesOverviewGrid({ services }: { services: ServiceDetail[] }) {
  return (
    <ul className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-6 lg:gap-5">
      {services.map((service, index) => (
        <li key={service.slug} className={gridItemClass(index, services.length)}>
          <RevealOnScroll delayMs={index * 55}>
            <ServiceCard service={service} />
          </RevealOnScroll>
        </li>
      ))}
    </ul>
  );
}
