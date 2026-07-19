import type { ResolvedSiteMedia } from "@/lib/site-media-defaults";
import { SITE_MEDIA_DEFAULTS } from "@/lib/site-media-defaults";
import type { ServiceDetail } from "@/lib/services";
import { mietenHomeCard as staticMietenCard, services as staticServices } from "@/lib/services";

export function servicesWithMedia(urls: ResolvedSiteMedia): ServiceDetail[] {
  return staticServices.map((s) => {
    const k = `service.${s.slug}` as keyof ResolvedSiteMedia;
    const fromMedia = typeof urls[k] === "string" ? urls[k].trim() : "";
    return { ...s, image: fromMedia || s.image };
  });
}

export function mietenHomeCardWithMedia(urls: ResolvedSiteMedia) {
  const image =
    typeof urls["mieten.card"] === "string" && urls["mieten.card"].trim() !== ""
      ? urls["mieten.card"].trim()
      : staticMietenCard.image;
  return {
    ...staticMietenCard,
    image,
    tags: [...staticMietenCard.tags],
  };
}

export function aboutCollageWithMedia(urls: ResolvedSiteMedia) {
  const pick = (key: "about.hedge" | "about.lawn" | "about.mower") => {
    const value = urls[key];
    return typeof value === "string" && value.trim() !== ""
      ? value.trim()
      : SITE_MEDIA_DEFAULTS[key];
  };
  return {
    hedge: pick("about.hedge"),
    lawn: pick("about.lawn"),
    mower: pick("about.mower"),
  };
}
