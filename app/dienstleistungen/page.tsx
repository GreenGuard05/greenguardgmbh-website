import type { Metadata } from "next";
import { CtaPrimary } from "@/components/cta-primary";
import { FaqStartpageTeaser } from "@/components/faq-startpage-teaser";
import { PageBreadcrumbs } from "@/components/page-breadcrumbs";
import { InnerPageBand, InnerPageHero, InnerPagePhoneLink, InnerPageRoot } from "@/components/inner-page-hero";
import { LocalAreasSection } from "@/components/local-areas-section";
import { ServicesOverviewGrid } from "@/components/services-overview-grid";
import { ContactCtaBackdrop } from "@/components/contact-cta-backdrop";
import { ServiceTrustStats } from "@/components/service-trust-stats";
import { coreLocalSeoKeywords } from "@/lib/local-seo";
import { buildBreadcrumbJsonLd, createPageMetadata, focusKeywords, pageDescriptions, siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";
import { getResolvedSiteMedia } from "@/lib/site-media.server";
import { servicesWithMedia } from "@/lib/site-media-resolve";

const overviewAudiences = [
  {
    title: "Private Eigentümer",
    description: "Für Grundstücke, Gärten und Außenbereiche, die gepflegt bleiben sollen, ohne alles selbst zu organisieren.",
  },
  {
    title: "Hausverwaltungen",
    description: "Für Wohnanlagen, Gemeinschaftsflächen und verlässliche Dienstleister mit klaren Absprachen.",
  },
  {
    title: "Gewerbe & Objekte",
    description: "Für Flächen, die täglich sichtbar sind und einen ordentlichen Eindruck bei Kunden und Mitarbeitern machen.",
  },
];

const overviewSteps = [
  "Anfrage stellen und Bedarf kurz beschreiben",
  "Objekt, Fläche oder Route gemeinsam abstimmen",
  "Leistungsumfang und Rhythmus transparent festlegen",
  "Zuverlässige Umsetzung durch Green Guard GmbH",
];

export async function generateMetadata(): Promise<Metadata> {
  const media = await getResolvedSiteMedia();
  return createPageMetadata({
    title: "Dienstleistungen",
    description: pageDescriptions.dienstleistungen,
    path: "/dienstleistungen",
    keywords: focusKeywords(coreLocalSeoKeywords, [
      "Böschungsmähen Sachsen-Anhalt",
      "Solarparkpflege Sachsen-Anhalt",
      "Grünanlagenpflege Hettstedt",
      "Hausmeisterservice Gerbstedt",
      "Winterdienst Eisleben",
    ]),
    ogImage: media["service.gruenanlage"],
    ogImageAlt: "Green Guard GmbH Leistungen – Grünanlagenpflege",
  });
}

export default async function DienstleistungenPage() {
  const media = await getResolvedSiteMedia();
  const services = servicesWithMedia(media);

  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Startseite", item: siteUrl },
    { name: "Dienstleistungen", item: `${siteUrl}/dienstleistungen` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <InnerPageRoot>
        <PageBreadcrumbs
          variant="dark"
          className="mx-auto max-w-6xl px-4 pb-2 pt-1 sm:px-6"
          items={[
            { label: "Startseite", href: "/" },
            { label: "Dienstleistungen" },
          ]}
        />
        <InnerPageHero
        eyebrow="Facility Management Sachsen-Anhalt"
        heroTitle={{
          accent: "Alle Leistungen",
          suffix: "aus einer Hand.",
        }}
        description={
          <>
            {site.name} betreut Ihre Immobilien in Gerbstedt und ganz Sachsen-Anhalt zuverlässig,
            termingerecht und mit Leidenschaft für Details.
          </>
        }
        tone="dark"
        actions={
          <>
            <CtaPrimary href="/kontakt">Kostenloses Angebot</CtaPrimary>
            <InnerPagePhoneLink variant="dark" />
          </>
        }
      />

      <section className="relative overflow-hidden border-t border-emerald-950/10 py-14 sm:py-16 md:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-zinc-50/50 to-[#f0f4ee]/90"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#70a340]/20 to-transparent"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-8 max-w-2xl">
            <p className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
              Facility Management Sachsen-Anhalt
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl">
              <span className="gg-text-heading-section">Alle </span>
              <span className="gg-heading-accent gg-heading-motion">Leistungen</span>
              <br />
              <span className="font-semibold text-zinc-600">für Ihr </span>
              <span className="gg-heading-accent gg-heading-motion font-semibold">Objekt.</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
              Von Grünanlagenpflege über Hausmeisterservice bis Winterdienst: Green Guard GmbH betreut
              Immobilien in Gerbstedt und ganz Sachsen-Anhalt zuverlässig und termingerecht.
            </p>
          </div>
          <ServicesOverviewGrid services={services} />
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-emerald-950/10 py-16 sm:py-20 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f4f8f1] via-white to-zinc-50"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-20 top-16 h-72 w-72 rounded-full bg-[#70a340]/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#a8e055]/12 blur-3xl"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
            <div>
              <p className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
                Ein Ansprechpartner
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.5rem]">
                <span className="gg-text-heading-section">Wenn </span>
                <span className="gg-heading-accent gg-heading-motion">Objektpflege</span>
                <span className="gg-text-heading-section"> einfach funktionieren muss.</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-zinc-600 sm:text-base">
                Die meisten Besucher informieren sich mobil und wollen schnell wissen: Passt Green Guard GmbH zu meinem
                Objekt? Verwaltungen brauchen zusätzlich Struktur, Erreichbarkeit und verlässliche Abläufe. Genau dafür
                bündeln wir Grünpflege, Hausmeisterservice, Winterdienst und Reinigung unter einem Dach.
              </p>
            </div>
            <div className="grid min-w-0 gap-4 sm:grid-cols-3 lg:grid-cols-3">
              {overviewAudiences.map((item) => (
                <article
                  key={item.title}
                  className="gg-surface-card rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-md shadow-zinc-900/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transform-none sm:p-6"
                >
                  <h3 className="text-base font-bold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 via-[#10180f] to-[#213018] p-5 text-white shadow-2xl shadow-emerald-950/35 ring-1 ring-[#a8e055]/10 sm:p-7 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c8e6a0]">
                  Ablauf
                </p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Schnell verständlich, <span className="gg-heading-accent gg-heading-motion">sauber abgestimmt.</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                  Für kleine Anfragen genauso wie für größere Verwaltungen: Der Weg zum Angebot bleibt klar.
                </p>
              </div>
              <ol className="grid gap-3 sm:grid-cols-2">
                {overviewSteps.map((step, index) => (
                  <li key={step} className="flex min-w-0 items-start gap-3 rounded-2xl bg-white/[0.07] p-4 ring-1 ring-white/10">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#70a340] text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="min-w-0 text-sm font-medium leading-relaxed text-zinc-100">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <InnerPageBand>
        <p className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
          Warum Green Guard GmbH?
        </p>
        <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.5rem]">
          <span className="gg-text-heading-section">Ihr verlässlicher Dienstleister</span>
          <br />
          <span className="gg-text-heading-section">für </span>
          <span className="gg-text-green-forest">Immobilienbetreuung</span>
        </h2>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
          Wir betreuen Objekte jeder Größe – von der privaten Immobilie bis zum großen Gewerbekomplex in
          Sachsen-Anhalt.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
          {[
            "Über 15 Jahre Erfahrung in Sachsen-Anhalt",
            "Persönlicher Ansprechpartner für Ihr Objekt",
            "Schnelle Reaktionszeiten & flexible Termine",
            "Moderne Profi-Geräte",
            "Transparente Festpreisangebote",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-zinc-700 sm:text-base">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 max-w-2xl">
          <FaqStartpageTeaser />
        </div>
        <p className="mt-6 text-sm text-zinc-500">Einsatzgebiet: Gerbstedt und ganz Sachsen-Anhalt</p>
      </InnerPageBand>

      <InnerPageBand className="border-t border-zinc-200/70">
        <LocalAreasSection />
      </InnerPageBand>

      <section className="gg-section-to-footer gg-section-to-footer--light relative z-[1] mb-0 overflow-hidden border-t border-zinc-200/60 bg-gradient-to-b from-zinc-50/95 via-white to-white py-20 text-center sm:py-24 md:py-24 md:pb-[calc(1.5rem+var(--gg-footer-seam-light))]">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#70a340]/20 to-transparent"
          aria-hidden
        />
        <ContactCtaBackdrop variant="light" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
          <p className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
            Jetzt anfragen
          </p>
          <h2 className="mx-auto mt-6 max-w-2xl text-pretty text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.5rem]">
            <span className="gg-text-heading-section">Bereit für professionelle</span>{" "}
            <span className="gg-text-green-forest">Betreuung?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            Fordern Sie jetzt Ihr unverbindliches Angebot an – wir melden uns innerhalb von 24 Stunden.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10">
            <CtaPrimary href="/kontakt">Jetzt anfragen</CtaPrimary>
            <InnerPagePhoneLink />
          </div>
        </div>
        <div className="relative z-10 mx-auto mt-12 max-w-6xl px-4 sm:mt-14 sm:px-6">
          <ServiceTrustStats />
        </div>
      </section>
      </InnerPageRoot>
    </>
  );
}
