"use client";

import {
  HomeServicesMarquee,
  type HeroServiceMarqueeItem,
} from "@/components/home-services-marquee";
import {
  OverlappingImageRow,
  type OverlappingImageItem,
} from "@/components/overlapping-image-row";

type HomeHeroVisualProps = {
  galleryImages: OverlappingImageItem[];
  services: HeroServiceMarqueeItem[];
  /** Mobil unter dem Text; Desktop in der rechten Spalte */
  layout: "mobile" | "desktop";
};

export function HomeHeroVisual({
  galleryImages,
  services,
  layout,
}: HomeHeroVisualProps) {
  const isMobile = layout === "mobile";

  if (galleryImages.length === 0 && services.length === 0) return null;

  return (
    <div
      className={
        isMobile
          ? "mt-5 w-full min-w-0 max-sm:mt-3 max-sm:pb-0 pb-2 lg:hidden"
          : "pointer-events-auto hidden w-full min-w-0 max-w-lg flex-col justify-center overflow-visible lg:flex xl:max-w-2xl"
      }
    >
      {galleryImages.length > 0 ? (
        <OverlappingImageRow
          images={galleryImages}
          compact={isMobile}
          className={`mx-auto w-full ${isMobile ? "max-w-full" : "max-w-md"}`}
        />
      ) : null}

      {services.length > 0 ? (
        <HomeServicesMarquee
          services={services}
          compact={isMobile}
          fullBleed={isMobile}
          className={galleryImages.length > 0 ? (isMobile ? "mt-2.5 max-sm:mt-2 sm:mt-6" : "mt-6 sm:mt-8") : ""}
        />
      ) : null}
    </div>
  );
}
