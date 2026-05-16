import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaPrimary } from "@/components/cta-primary";
import { InnerPageBand, InnerPageHero, InnerPagePhoneLink, InnerPageRoot } from "@/components/inner-page-hero";
import { buildAreaKeywords, getLocalArea, localAreas } from "@/lib/local-seo";
import { services } from "@/lib/services";
import { buildFaqJsonLd, createPageMetadata, siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return localAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getLocalArea(slug);
  if (!area) return { title: "Einsatzgebiet" };

  return createPageMetadata({
    title: `Einsatzgebiet ${area.name}`,
    description: area.metaDescription,
    path: `/einsatzgebiet/${area.slug}`,
    keywords: [
      ...buildAreaKeywords(area.name),
      ...services.flatMap((service) => [`${service.title} ${area.name}`, `${service.title} in ${area.name}`]),
    ],
  });
}

function buildAreaJsonLd(area: NonNullable<ReturnType<typeof getLocalArea>>) {
  const pageUrl = `${siteUrl}/einsatzgebiet/${area.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: `${site.name} Einsatzgebiet ${area.name}`,
    description: area.metaDescription,
    about: {
      "@id": `${siteUrl}/#localbusiness`,
    },
    areaServed: {
      "@type": "Place",
      name: area.name,
    },
    mainEntity: {
      "@type": "ItemList",
      name: `Leistungen in ${area.name}`,
      itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Service",
          name: `${service.title} ${area.name}`,
          url: `${siteUrl}${service.href}`,
          provider: { "@id": `${siteUrl}/#localbusiness` },
          areaServed: { "@type": "Place", name: area.name },
        },
      })),
    },
  } as const;
}

export default async function EinsatzgebietDetailPage({ params }: Props) {
  const { slug } = await params;
  const area = getLocalArea(slug);
  if (!area) notFound();

  const areaJsonLd = buildAreaJsonLd(area);
  const faqJsonLd = buildFaqJsonLd(area.faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(areaJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <InnerPageRoot>
        <InnerPageHero
          eyebrow={`Einsatzgebiet · ${area.name}`}
          heroTitle={{
            prefix: "Green Guard GmbH",
            accent: area.name,
            suffix: area.heroSuffix,
          }}
          description={area.lead}
          tone="dark"
          ambientScene="services"
          actions={
            <>
              <CtaPrimary href="/kontakt">Anfrage für diesen Ort stellen</CtaPrimary>
              <InnerPagePhoneLink variant="dark" />
            </>
          }
        />

        <InnerPageBand ambientScene="services">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
            <div>
              <Link
                href="/einsatzgebiet"
                className="text-sm font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-4 transition hover:text-emerald-950"
              >
                Zurück zu allen Einsatzgebieten
              </Link>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-zinc-900">
                Leistungen in <span className="gg-heading-accent gg-heading-motion">{area.name}</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">{area.text}</p>
              <ul className="mt-6 grid gap-3">
                {area.focus.map((item) => (
                  <li key={item} className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-700 shadow-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-6 shadow-lg shadow-zinc-900/5 ring-1 ring-white sm:p-7">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-500">Geeignet für</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {area.customers.map((customer) => (
                  <div key={customer} className="rounded-2xl bg-[#f4faef] p-4 text-sm font-bold text-emerald-950 ring-1 ring-emerald-100">
                    {customer}
                  </div>
                ))}
              </div>
              <div className="mt-7 rounded-2xl bg-zinc-50 p-4 ring-1 ring-zinc-200">
                <h3 className="text-base font-bold text-zinc-900">Persönlich abstimmen</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  Ob regelmäßige Betreuung oder einzelner Einsatz: Wir prüfen Einsatzort, Umfang und Terminfenster und
                  melden uns mit einer passenden Empfehlung zurück.
                </p>
              </div>
            </div>
          </div>
        </InnerPageBand>

        <InnerPageBand ambientScene="caretaker" className="border-t border-zinc-200/70">
          <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-6 shadow-lg shadow-zinc-900/5 ring-1 ring-white sm:p-8">
            <p className="inline-flex rounded-full bg-[#eef6e6] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 ring-1 ring-emerald-200/80">
              Leistungen
            </p>
            <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
              Alles Wichtige für <span className="gg-heading-accent gg-heading-motion">{area.name}</span> auf einen Blick.
            </h2>
            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={service.href}
                  className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white hover:shadow-md motion-reduce:hover:translate-y-0"
                >
                  <span className="text-base font-bold text-zinc-900">
                    {service.title} {area.name}
                  </span>
                  <span className="mt-2 block text-sm leading-relaxed text-zinc-600">{service.intro}</span>
                </Link>
              ))}
            </div>
          </div>
        </InnerPageBand>

        <InnerPageBand ambientScene="services" className="border-t border-zinc-200/70">
          <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-6 shadow-lg shadow-zinc-900/5 ring-1 ring-white sm:p-8">
            <p className="inline-flex rounded-full bg-[#eef6e6] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 ring-1 ring-emerald-200/80">
              FAQ
            </p>
            <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
              Häufige Fragen zum Einsatzgebiet <span className="gg-heading-accent gg-heading-motion">{area.name}</span>
            </h2>
            <div className="mt-7 grid gap-3">
              {area.faqs.map((faq) => (
                <details key={faq.question} className="group rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 open:bg-white open:shadow-sm">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-zinc-900">
                    {faq.question}
                    <span className="rounded-full bg-white px-2 py-1 text-xs text-zinc-500 ring-1 ring-zinc-200 transition group-open:rotate-180">
                      ↓
                    </span>
                  </summary>
                  <p className="mt-3 border-t border-zinc-200 pt-3 text-sm leading-relaxed text-zinc-600">{faq.answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaPrimary href="/kontakt">Anfrage stellen</CtaPrimary>
              <InnerPagePhoneLink />
            </div>
          </div>
        </InnerPageBand>
      </InnerPageRoot>
    </>
  );
}
