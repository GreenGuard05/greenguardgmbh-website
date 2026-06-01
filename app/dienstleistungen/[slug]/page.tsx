import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaPrimary } from "@/components/cta-primary";
import { PageBreadcrumbs } from "@/components/page-breadcrumbs";
import { InnerPageBand, InnerPageHero, InnerPagePhoneLink, InnerPageRoot } from "@/components/inner-page-hero";
import { LocalAreasSection } from "@/components/local-areas-section";
import { ServiceCtaBand } from "@/components/service-cta-band";
import { ServiceFaqSection } from "@/components/service-faq-section";
import { ServiceScopeSection } from "@/components/service-scope-section";
import { ServiceStorySection } from "@/components/service-story-section";
import { germanUppercase } from "@/lib/german-text";
import { getServicePageContent } from "@/lib/service-pages";
import { serviceFaqs } from "@/lib/service-faqs";
import { getService, services } from "@/lib/services";
import {
  buildFaqJsonLd,
  buildServiceBreadcrumbJsonLd,
  buildServiceJsonLd,
  createPageMetadata,
  focusKeywords,
  serviceSeoDescriptions,
  siteUrl,
} from "@/lib/seo";
import { site } from "@/lib/site";
import type { ResolvedSiteMedia } from "@/lib/site-media-defaults";
import { getResolvedSiteMedia } from "@/lib/site-media.server";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Leistung" };
  const media = await getResolvedSiteMedia();
  const key = `service.${slug}` as keyof ResolvedSiteMedia;
  const ogImage = media[key];
  const path = `/dienstleistungen/${slug}`;
  const fallback = `${service.title} in Gerbstedt & Sachsen-Anhalt. ${service.intro} Jetzt Angebot von ${site.name}.`;
  const clipped = fallback.length <= 160 ? fallback : `${fallback.slice(0, 157).trimEnd()}…`;
  const description = serviceSeoDescriptions[slug] ?? clipped;

  return createPageMetadata({
    title: `${service.title} · Gerbstedt`,
    description,
    path,
    keywords: focusKeywords(
      [service.title, `${service.title} Gerbstedt`, `${service.title} Sachsen-Anhalt`],
      [...service.tags],
    ),
    ogImage,
    ogImageWidth: 1600,
    ogImageHeight: 1066,
    ogImageAlt: `${service.title} – Green Guard GmbH`,
  });
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const base = getService(slug);
  if (!base) notFound();
  const page = getServicePageContent(slug);
  if (!page) notFound();

  const media = await getResolvedSiteMedia();
  const key = `service.${slug}` as keyof ResolvedSiteMedia;
  const service = { ...base, image: media[key] };

  const pageUrl = `${siteUrl}/dienstleistungen/${slug}`;
  const breadcrumbLd = buildServiceBreadcrumbJsonLd(service.title, pageUrl);
  const faqs = serviceFaqs[slug] ?? [];
  const serviceJsonLd = buildServiceJsonLd({
    slug,
    title: service.title,
    description: page.seoBlock.text,
    image: service.image,
    offers: page.scope.columns.flat(),
  });
  const faqJsonLd = buildFaqJsonLd(faqs);
  const heroPrimaryLabel = page.heroPrimaryLabel ?? "Kostenloses Angebot";

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      {faqs.length ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      ) : null}
      <InnerPageRoot>
        <PageBreadcrumbs
          variant="dark"
          className="mx-auto max-w-6xl px-4 pb-2 pt-1 sm:px-6"
          items={[
            { label: "Startseite", href: "/" },
            { label: "Dienstleistungen", href: "/dienstleistungen" },
            { label: service.title },
          ]}
        />
        <InnerPageHero
          eyebrow={service.eyebrow}
          heroTitle={page.heroTitle}
          description={page.heroDescription}
          tone="dark"
          actions={
            <>
              <CtaPrimary href="/kontakt">{heroPrimaryLabel}</CtaPrimary>
              <InnerPagePhoneLink variant="dark" />
            </>
          }
          aside={
            <div className="relative h-56 w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/15 transition duration-300 ease-out group-hover:shadow-[0_24px_48px_-12px_rgba(0,0,0,0.55)] sm:h-64 lg:aspect-[5/4] lg:h-auto">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                sizes="(max-width: 1024px) 100vw, 42vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" aria-hidden />
              {service.imageBadge ? (
                <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[10px] font-semibold tracking-wide text-white backdrop-blur-sm">
                  {germanUppercase(service.imageBadge)}
                </span>
              ) : null}
            </div>
          }
        />

        <ServiceStorySection
          story={page.story}
          audiences={page.audiences}
          process={page.process}
          seoBlock={page.seoBlock}
        />
        <ServiceScopeSection scope={page.scope} />
        <InnerPageBand>
          <ServiceFaqSection title={service.title} faqs={faqs} />
          {slug === "solarparkpflege" ? (
            <p className="mt-6 text-center text-sm text-zinc-600">
              Technik im Einsatz:{" "}
              <Link
                href="/mieten/ferrari-rc-70hy-maehraupe"
                className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-950"
              >
                Ferrari RC-70HY Pro Mähraupe mieten
              </Link>
            </p>
          ) : null}
        </InnerPageBand>
        <InnerPageBand className="border-t border-zinc-200/70">
          <LocalAreasSection />
        </InnerPageBand>
        <ServiceCtaBand cta={page.cta} />
      </InnerPageRoot>
    </>
  );
}
