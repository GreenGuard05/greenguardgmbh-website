import type { ResolvedSiteMedia } from "@/lib/site-media-defaults";
import type { ServiceDetail } from "@/lib/services";
import { mietenHomeCard as staticMietenCard, services as staticServices } from "@/lib/services";

export function servicesWithMedia(urls: ResolvedSiteMedia): ServiceDetail[] {
  return staticServices.map((s) => {
    const k = `service.${s.slug}` as keyof ResolvedSiteMedia;
    return { ...s, image: urls[k] };
  });
}

export function mietenHomeCardWithMedia(urls: ResolvedSiteMedia) {
  return {
    ...staticMietenCard,
    image: urls["mieten.card"],
    tags: [...staticMietenCard.tags],
  };
}

export function aboutCollageWithMedia(urls: ResolvedSiteMedia) {
  return {
    hedge: urls["about.hedge"],
    lawn: urls["about.lawn"],
    mower: urls["about.mower"],
  };
}
