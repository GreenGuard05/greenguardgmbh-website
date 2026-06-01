import type { Metadata } from "next";
import { HomeAbout } from "@/components/home-about";
import { HomeEinsatzgebiet } from "@/components/home-einsatzgebiet";
import { HomeFaq } from "@/components/home-faq";
import { HomeHero } from "@/components/home-hero";
import { HomeLeistungenGrid } from "@/components/home-leistungen-grid";
import { HomePreFooterCta } from "@/components/home-pre-footer-cta";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { coreLocalSeoKeywords } from "@/lib/local-seo";
import { createPageMetadata, focusKeywords, homeDescription } from "@/lib/seo";
import { site } from "@/lib/site";
import { getResolvedSiteMedia } from "@/lib/site-media.server";
import {
  aboutCollageWithMedia,
  mietenHomeCardWithMedia,
  servicesWithMedia,
} from "@/lib/site-media-resolve";

export async function generateMetadata(): Promise<Metadata> {
  const media = await getResolvedSiteMedia();
  return createPageMetadata({
    title: "Facility Management, Grünpflege & Winterdienst Sachsen-Anhalt",
    description: homeDescription,
    path: "/",
    keywords: focusKeywords(coreLocalSeoKeywords, [
      "Facility Management Hettstedt",
      "Grünpflege Eisleben",
      "Objektbetreuung Mansfeld-Südharz",
    ]),
    ogImage: media.heroSide,
    ogImageWidth: 1600,
    ogImageHeight: 1000,
    ogImageAlt: `${site.name} – ${site.brandSlogan}`,
  });
}

export default async function HomePage() {
  const media = await getResolvedSiteMedia();
  const servicesResolved = servicesWithMedia(media);
  const mietenCard = mietenHomeCardWithMedia(media);
  const collage = aboutCollageWithMedia(media);

  return (
    <>
      <HomeHero
        heroSideSrc={media.heroSide}
        heroServices={servicesResolved.map((s) => ({
          title: s.title,
          href: s.href,
        }))}
        galleryImages={(
          ["gruenanlage", "solarparkpflege", "boeschungspflege", "hausmeisterservice"] as const
        ).map((slug) => {
          const service = servicesResolved.find((s) => s.slug === slug)!;
          return {
            id: slug,
            src: service.image,
            alt: service.title,
            serviceTitle: service.title,
            serviceHref: service.href,
          };
        })}
      />
      <RevealOnScroll>
        <HomeLeistungenGrid servicesResolved={servicesResolved} mietenCard={mietenCard} />
      </RevealOnScroll>
      <RevealOnScroll>
        <HomeAbout collage={collage} />
      </RevealOnScroll>
      <RevealOnScroll>
        <HomeFaq />
      </RevealOnScroll>
      <RevealOnScroll>
        <HomeEinsatzgebiet />
      </RevealOnScroll>
      <RevealOnScroll className="[&_section]:mb-0">
        <HomePreFooterCta heroSideSrc={media.heroSide} />
      </RevealOnScroll>
    </>
  );
}
