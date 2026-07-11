import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { CtaPrimary } from "@/components/cta-primary";
import { FaqStartpageTeaser } from "@/components/faq-startpage-teaser";
import { InnerPageBand, InnerPageHero, InnerPagePhoneLink, InnerPageRoot } from "@/components/inner-page-hero";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { PageBreadcrumbs } from "@/components/page-breadcrumbs";
import { buildContactPageJsonLd, createPageMetadata, pageDescriptions } from "@/lib/seo";
import { mailtoHref, site, siteLocationLines } from "@/lib/site";
import { getResolvedSiteMedia } from "@/lib/site-media.server";

export async function generateMetadata(): Promise<Metadata> {
  const media = await getResolvedSiteMedia();
  return createPageMetadata({
    title: "Kontakt & Angebot",
    description: pageDescriptions.kontakt,
    path: "/kontakt",
    ogImage: media["heroSide"],
    ogImageAlt: "Kontakt Green Guard GmbH – Objekt- und Grünpflege",
  });
}

const benefits = [
  "Kostenlose Erstberatung",
  "Antwort in der Regel innerhalb von 24 Stunden",
  "Unverbindliches Festpreisangebot",
];

const contactCards = [
  {
    title: "Anrufen",
    text: "Für schnelle Rückfragen, Termine oder dringende Einsätze.",
    href: `tel:${site.phoneTel}`,
    label: site.phone,
  },
  {
    title: "E-Mail schreiben",
    text: "Für Bilder, Objektinfos oder ausführlichere Anfragen.",
    href: mailtoHref(),
    label: site.email,
  },
  {
    title: "Anfrage senden",
    text: "Ideal für Angebote zu Pflege, Reinigung, Winterdienst oder Mietgeräten.",
    href: "#angebot-formular",
    label: "Zum Formular",
  },
] as const;

const processSteps = [
  "Sie senden uns kurz Ihr Anliegen.",
  "Wir prüfen Objekt, Zeitraum und passende Leistung.",
  "Sie erhalten eine persönliche Rückmeldung mit den nächsten Schritten.",
] as const;

type KontaktPageProps = {
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
};

function firstParam(value: string | string[] | undefined): string {
  if (Array.isArray(value)) return value[0] ?? "";
  return value ?? "";
}

export default async function KontaktPage({ searchParams }: KontaktPageProps) {
  const params = (await searchParams) ?? {};
  const initialService = firstParam(params.leistung);
  const initialDevice = firstParam(params.geraet);
  const initialMessage = firstParam(params.nachricht);

  const contactJsonLd = buildContactPageJsonLd();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <InnerPageRoot>
        <PageBreadcrumbs
          className="mx-auto max-w-6xl px-4 pb-2 pt-1 sm:px-6"
          items={[
            { label: "Startseite", href: "/" },
            { label: "Kontakt" },
          ]}
        />
        <InnerPageHero
        eyebrow="Persönlicher Kontakt"
        heroTitle={{
          prefix: "Lassen Sie uns",
          accent: "gemeinsam klären",
          suffix: "was Ihr Objekt gerade braucht.",
        }}
        description={
          <>
            Ob Grünanlage, Winterdienst, Reinigung, Hausmeisterservice oder Mietgerät: Schreiben Sie uns kurz,
            was ansteht. Wir melden uns persönlich, verständlich und ohne Umwege.
          </>
        }
        actions={
          <>
            <InnerPagePhoneLink />
            <CtaPrimary href="#angebot-formular" arrow="↓">
              Zum Formular
            </CtaPrimary>
          </>
        }
      />

      <InnerPageBand>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="min-w-0 space-y-8">
            <RevealOnScroll emphasis>
              <p className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
                Kontakt
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
                <span className="gg-text-heading-section">Sie fragen an, </span>
                <span className="gg-heading-accent gg-heading-motion">wir kümmern uns.</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
                Jede Anfrage landet direkt bei Green Guard GmbH. Kein anonymes Ticketsystem, kein komplizierter Ablauf:
                Ein paar Informationen reichen, damit wir einschätzen können, wie wir am besten helfen.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delayMs={100}>
              <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {contactCards.map((card) => (
                  <a
                    key={card.title}
                    href={card.href}
                    aria-label={
                      card.title === "Anrufen" ? `Jetzt Green Guard GmbH unter ${site.phone} anrufen` : undefined
                    }
                    className="gg-surface-card group min-w-0 rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-md shadow-zinc-900/5 ring-1 ring-white transition hover:-translate-y-0.5 hover:border-emerald-200 hover:shadow-lg sm:p-6"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef6e6] text-lg text-[#70a340] ring-1 ring-emerald-100">
                      {card.title === "Anrufen" ? "☎" : card.title === "E-Mail schreiben" ? "✉" : "↘"}
                    </span>
                    <h3 className="mt-4 text-base font-bold text-zinc-900">{card.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">{card.text}</p>
                    <span className="mt-3 block break-words text-sm font-semibold text-emerald-800 group-hover:text-emerald-950">
                      {card.label}
                    </span>
                  </a>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={130}>
              <div className="rounded-3xl border border-emerald-900/10 bg-white/90 p-6 shadow-md shadow-zinc-900/5 ring-1 ring-white sm:p-7">
                <h3 className="text-lg font-bold text-zinc-900">So geht es weiter</h3>
                <ol className="mt-5 space-y-3">
                  {processSteps.map((step, index) => (
                    <li key={step} className="flex gap-3 text-sm leading-relaxed text-zinc-700">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#70a340] text-xs font-bold text-white">
                        {index + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={160}>
              <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-md shadow-zinc-900/5 sm:p-7">
                <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-zinc-500">Standort</h3>
                <p className="mt-3 text-base leading-relaxed text-zinc-800">
                  {siteLocationLines.map((l) => (
                    <span key={l} className="block">
                      {l}
                    </span>
                  ))}
                </p>
                <div className="mt-6 grid gap-3 border-t border-zinc-200/80 pt-6 sm:grid-cols-2">
                  <div className="rounded-xl bg-zinc-50 p-3 ring-1 ring-zinc-100">
                    <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">Telefon</p>
                    <a
                      className="mt-1 block font-semibold text-emerald-800 underline decoration-emerald-200 underline-offset-2 hover:text-emerald-950"
                      href={`tel:${site.phoneTel}`}
                      aria-label={`Jetzt Green Guard GmbH unter ${site.phone} anrufen`}
                    >
                      {site.phone}
                    </a>
                  </div>
                  <div className="rounded-xl bg-zinc-50 p-3 ring-1 ring-zinc-100">
                    <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">E-Mail</p>
                    <a
                      className="mt-1 block break-words font-semibold text-emerald-800 underline decoration-emerald-200 underline-offset-2 hover:text-emerald-950"
                      href={mailtoHref()}
                    >
                      {site.email}
                    </a>
                  </div>
                  <div className="rounded-xl bg-zinc-50 p-3 ring-1 ring-zinc-100 sm:col-span-2">
                    <p className="text-xs font-bold uppercase tracking-wide text-zinc-500">
                      USt-IdNr.
                    </p>
                    <p className="mt-1 font-semibold text-zinc-800">{site.vatId}</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delayMs={190}>
              <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 text-sm text-zinc-700 shadow-sm ring-1 ring-zinc-200/70 sm:text-base">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>

            <RevealOnScroll delayMs={220}>
              <FaqStartpageTeaser />
            </RevealOnScroll>
          </div>

          <div id="angebot-formular" className="min-w-0 scroll-mt-28">
            <RevealOnScroll emphasis delayMs={60}>
              <ContactForm
                initialService={initialService}
                initialDevice={initialDevice}
                initialMessage={initialMessage}
              />
            </RevealOnScroll>
          </div>
        </div>
      </InnerPageBand>
      </InnerPageRoot>
    </>
  );
}
