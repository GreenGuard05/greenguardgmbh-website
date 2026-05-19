import type { Metadata } from "next";
import Image from "next/image";
import { ContactCtaBand } from "@/components/contact-cta-band";
import { CtaPrimary } from "@/components/cta-primary";
import { InnerPageBand, InnerPageHero, InnerPagePhoneLink, InnerPageRoot } from "@/components/inner-page-hero";
import { UeberUnsStory } from "@/components/ueber-uns-story";
import { UeberUnsValues } from "@/components/ueber-uns-values";
import { createPageMetadata, pageDescriptions } from "@/lib/seo";
import { site } from "@/lib/site";
import { getResolvedSiteMedia } from "@/lib/site-media.server";
import { aboutCollageWithMedia } from "@/lib/site-media-resolve";

export async function generateMetadata(): Promise<Metadata> {
  const media = await getResolvedSiteMedia();
  return createPageMetadata({
    title: "Über uns",
    description: pageDescriptions.ueberUns,
    path: "/ueber-uns",
    ogImage: media["about.hero"],
    ogImageAlt: "Green Guard GmbH – Außenanlagen und Team",
  });
}

export default async function UeberUnsPage() {
  const media = await getResolvedSiteMedia();

  return (
    <InnerPageRoot>
      <InnerPageHero
        eyebrow="Über uns"
        heroTitle={{
          prefix: "Ihr Dienstleister für",
          accent: "Immobilienbetreuung",
        }}
        description="Zuverlässig, termingerecht und mit Leidenschaft für Details – in Gerbstedt und ganz Sachsen-Anhalt."
        tone="dark"
        actions={
          <>
            <CtaPrimary href="/kontakt">Kostenloses Angebot</CtaPrimary>
            <InnerPagePhoneLink variant="dark" />
          </>
        }
        aside={
          <div className="relative h-56 w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/15 transition duration-300 ease-out group-hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.55)] sm:h-64 lg:aspect-[5/4] lg:h-auto">
            <Image
              src={media["about.hero"]}
              alt={`${site.name} – Außenanlagen und Objektbetreuung in Sachsen-Anhalt`}
              fill
              className="object-cover transition duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" aria-hidden />
            <span className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/15 bg-zinc-950/90 px-4 py-3 text-sm font-medium text-white shadow-lg shadow-black/30 backdrop-blur-md sm:left-auto sm:right-4 sm:max-w-[14rem]">
              <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-[#a8e055]">
                {site.region}
              </span>
              <span className="mt-0.5 block text-xs leading-snug text-zinc-400">
                Über 15 Jahre Erfahrung vor Ort
              </span>
            </span>
          </div>
        }
      />

      <InnerPageBand>
        <UeberUnsStory aboutCollage={aboutCollageWithMedia(media)} />
      </InnerPageBand>

      <UeberUnsValues />

      <ContactCtaBand />
    </InnerPageRoot>
  );
}
