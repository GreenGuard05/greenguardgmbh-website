import type { Metadata } from "next";
import Image from "next/image";
import { CtaPrimary } from "@/components/cta-primary";
import { FaqStartpageTeaser } from "@/components/faq-startpage-teaser";
import { InnerPageBand, InnerPageHero, InnerPagePhoneLink, InnerPageRoot } from "@/components/inner-page-hero";
import type { RentalDevice } from "@/lib/rental-devices";
import { getRentalDevices } from "@/lib/rental-devices.server";
import { createPageMetadata, pageDescriptions, siteUrl } from "@/lib/seo";
import { getResolvedSiteMedia } from "@/lib/site-media.server";

const rentalSteps = [
  {
    title: "Gerät & Zeitraum nennen",
    description: "Sie sagen uns, welches Gerät benötigt wird, wo es eingesetzt wird und für welchen Zeitraum.",
  },
  {
    title: "Verfügbarkeit prüfen",
    description: "Wir prüfen den Bestand, beraten zum passenden Gerät und klären Zubehör oder Alternativen.",
  },
  {
    title: "Übergabe mit Einweisung",
    description: "Das Gerät wird gepflegt übergeben. Sie erhalten eine kurze, verständliche Einweisung zur Nutzung.",
  },
  {
    title: "Rückgabe & Kontrolle",
    description: "Nach der Nutzung prüfen wir Zustand und Zubehör. Bei Folgeeinsätzen planen wir direkt weiter.",
  },
];

const rentalAudiences = [
  "Private Eigentümer mit Garten, Hof oder Außenanlage",
  "Hausverwaltungen mit kurzfristigem Bedarf am Objekt",
  "Gewerbekunden, die einzelne Geräte nur zeitweise benötigen",
  "Kunden, die vorab Beratung zur passenden Maschine wünschen",
];

function rentalContactHref(deviceName: string) {
  const params = new URLSearchParams({
    leistung: "Gerätemietservice",
    geraet: deviceName,
  });
  return `/kontakt?${params.toString()}#angebot-formular`;
}

function absoluteImageUrl(src: string) {
  if (!src) return undefined;
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return `${siteUrl}${src.startsWith("/") ? src : `/${src}`}`;
}

function rentalSeoDescription(devices: RentalDevice[]) {
  if (!devices.length) return pageDescriptions.mieten;
  const names = devices.slice(0, 5).map((device) => device.name).join(", ");
  return `Mietgeräte in Gerbstedt mieten: ${names}. Preise, Kaution, Bilder und Anfrage direkt online bei Green Guard GmbH in Mansfeld-Südharz.`;
}

function rentalSeoKeywords(devices: RentalDevice[]) {
  const base = [
    "Geräte mieten Gerbstedt",
    "Mietgeräte Mansfeld-Südharz",
    "Gerätemietservice Sachsen-Anhalt",
    "Green Guard GmbH Mietgeräte",
  ];
  return [...base, ...devices.flatMap((device) => [device.name, `${device.name} mieten`])];
}

function priceNumber(price: string | undefined) {
  if (!price) return undefined;
  const match = price.match(/\d+(?:[,.]\d+)?/);
  return match?.[0]?.replace(",", ".");
}

function buildRentalDevicesJsonLd(devices: RentalDevice[]) {
  const pageUrl = `${siteUrl}/mieten`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#webpage`,
        url: pageUrl,
        name: "Geräte mieten bei Green Guard GmbH",
        description: rentalSeoDescription(devices),
        mainEntity: { "@id": `${pageUrl}#mietgeraete` },
      },
      {
        "@type": "ItemList",
        "@id": `${pageUrl}#mietgeraete`,
        name: "Mietgeräte von Green Guard GmbH",
        itemListElement: devices.map((device, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: { "@id": `${pageUrl}#${device.id}` },
        })),
      },
      ...devices.map((device) => ({
        "@type": "Product",
        "@id": `${pageUrl}#${device.id}`,
        name: device.name,
        image: absoluteImageUrl(device.image),
        description: [device.description, device.details].filter(Boolean).join(" "),
        category: "Mietgerät",
        brand: {
          "@type": "Brand",
          name: "Green Guard GmbH",
        },
        offers: {
          "@type": "Offer",
          url: `${siteUrl}${rentalContactHref(device.name)}`,
          priceCurrency: "EUR",
          ...(priceNumber(device.price) ? { price: priceNumber(device.price) } : {}),
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/UsedCondition",
          businessFunction: "https://schema.org/LeaseOut",
        },
      })),
    ],
  };
}

function CompactList({ title, items, tone }: { title: string; items: string[]; tone: "positive" | "negative" }) {
  if (!items.length) return null;
  const color =
    tone === "positive"
      ? "border-emerald-100 bg-emerald-50/80 text-emerald-950"
      : "border-zinc-200 bg-zinc-50 text-zinc-700";

  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-zinc-500">{title}</p>
      <ul className="mt-2 flex flex-wrap gap-1.5">
        {items.map((item) => (
          <li key={item} className={`rounded-full border px-2.5 py-1 text-xs font-medium ${color}`}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const media = await getResolvedSiteMedia();
  const devices = await getRentalDevices();
  return createPageMetadata({
    title: "Mietgeräte mieten · Gerbstedt",
    description: rentalSeoDescription(devices),
    path: "/mieten",
    keywords: rentalSeoKeywords(devices),
    ogImage: media["mieten.card"],
    ogImageAlt: "Gerätemietservice Green Guard GmbH",
  });
}

export default async function MietenPage() {
  const media = await getResolvedSiteMedia();
  const devices = await getRentalDevices();
  const heroImage = media["mieten.card"];
  const rentalJsonLd = buildRentalDevicesJsonLd(devices);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(rentalJsonLd) }} />
      <InnerPageRoot>
        <InnerPageHero
        eyebrow="Gerätemietservice · Gerbstedt"
        heroTitle={{
          prefix: "Professionelle",
          accent: "Geräte mieten",
          suffix: "für Garten, Objektpflege und Außenflächen.",
        }}
        description="Sie benötigen ein Gerät nur für einen bestimmten Einsatz? Green Guard GmbH stellt gepflegte Profi-Geräte bereit, erklärt die Nutzung verständlich und hilft bei der Auswahl."
        tone="dark"
        ambientScene="caretaker"
        actions={
          <>
            <CtaPrimary href="/kontakt">Mietanfrage stellen</CtaPrimary>
            <InnerPagePhoneLink variant="dark" />
          </>
        }
        aside={
          <div className="relative h-56 w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/15 sm:h-64 lg:aspect-[5/4] lg:h-auto">
            <Image
              src={heroImage}
              alt="Gerätemietservice von Green Guard GmbH"
              fill
              className="object-cover transition duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" aria-hidden />
            <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
              Verfügbarkeit auf Anfrage
            </span>
          </div>
        }
        />

        <InnerPageBand ambientScene="services">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-14">
          <div>
            <p className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
              Mietgeräte
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl">
              <span className="gg-text-heading-section">Verfügbare Geräte </span>
              <span className="gg-heading-accent gg-heading-motion">direkt anfragen.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-700 sm:text-lg">
              Diese Mietgeräte kannst du im Admin-Bereich selbst pflegen. Jede Karte führt direkt zum
              Kontaktformular und übergibt das gewünschte Gerät automatisch.
            </p>
            <div className="mt-7 rounded-2xl border border-emerald-900/10 bg-white/90 p-5 shadow-md shadow-zinc-900/5">
              <h3 className="text-base font-bold text-zinc-900">Wichtig vorab</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Nicht jedes Gerät ist jederzeit verfügbar. Bitte fragen Sie kurz an, damit wir Einsatzort,
                Mietdauer, Zubehör und Übergabe sauber abstimmen können.
              </p>
            </div>
          </div>

          <div className="grid items-start gap-5 lg:grid-cols-2">
            {devices.map((device) => (
              <article
                key={device.id}
                className="gg-card-motion flex min-w-0 flex-col self-start overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-md shadow-zinc-900/5 ring-1 ring-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transform-none"
              >
                <a
                  href={device.image || "#"}
                  target={device.image ? "_blank" : undefined}
                  rel={device.image ? "noopener noreferrer" : undefined}
                  aria-label={`Bild von ${device.name} groß öffnen`}
                  className="group/image relative block h-48 shrink-0 overflow-hidden bg-white sm:h-56"
                >
                  {device.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={device.image}
                      alt={device.name}
                      className="h-full w-full object-contain transition duration-300 group-hover/image:scale-[1.03]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center px-4 text-center text-sm text-zinc-500">
                      Kein Bild hinterlegt
                    </div>
                  )}
                  <span className="absolute left-3 top-3 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                    Mietgerät
                  </span>
                  {device.image ? (
                    <span className="absolute bottom-3 right-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-zinc-900 shadow-sm ring-1 ring-white/50 backdrop-blur-sm">
                      Bild öffnen
                    </span>
                  ) : null}
                </a>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-zinc-900">{device.name}</h3>
                  {device.price ? (
                    <div className="mt-3 rounded-2xl bg-gradient-to-br from-[#70a340] to-[#2f6f1f] p-4 text-white shadow-lg shadow-emerald-900/20">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">Mietpreis</p>
                      <p className="mt-1 text-sm font-bold leading-snug">{device.price}</p>
                    </div>
                  ) : null}
                  {device.facts?.length ? (
                    <ul className="mt-3 grid gap-2">
                      {device.facts.slice(0, 3).map((fact) => (
                        <li
                          key={fact}
                          className="flex items-center gap-2 rounded-xl border border-emerald-100 bg-[#f4faef] px-3 py-2 text-xs font-semibold text-emerald-950"
                        >
                          <span className="h-1.5 w-1.5 rounded-full bg-[#70a340]" aria-hidden />
                          {fact}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  {(device.deposit || device.fuel) ? (
                    <div className="mt-3 grid grid-cols-2 gap-2">
                      {device.deposit ? (
                        <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2">
                          <p className="text-[10px] font-bold uppercase tracking-wide text-zinc-500">Kaution</p>
                          <p className="mt-0.5 text-xs font-semibold text-zinc-900">{device.deposit}</p>
                        </div>
                      ) : null}
                      {device.fuel ? (
                        <div className="rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2">
                          <p className="text-[10px] font-bold uppercase tracking-wide text-zinc-500">Kraftstoff</p>
                          <p className="mt-0.5 text-xs font-semibold text-zinc-900">{device.fuel}</p>
                        </div>
                      ) : null}
                    </div>
                  ) : null}
                  <details className="group mt-4 rounded-2xl border border-zinc-200 bg-zinc-50/70 p-3 open:bg-white open:shadow-sm">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-sm font-bold text-emerald-900">
                      Mehr erfahren
                      <span className="rounded-full bg-white px-2 py-1 text-xs text-zinc-500 ring-1 ring-zinc-200 transition group-open:rotate-180">
                        ↓
                      </span>
                    </summary>
                    <div className="mt-3 space-y-3 border-t border-zinc-200 pt-3">
                      {device.description ? (
                        <p className="text-sm leading-relaxed text-zinc-600">{device.description}</p>
                      ) : null}
                      {device.details ? (
                        <p className="rounded-xl bg-zinc-50 p-3 text-xs leading-relaxed text-zinc-600 ring-1 ring-zinc-200">
                          {device.details}
                        </p>
                      ) : null}
                      <CompactList title="Geeignet für" items={device.suitableFor ?? []} tone="positive" />
                      <CompactList title="Nicht geeignet für" items={device.notSuitableFor ?? []} tone="negative" />
                    </div>
                  </details>
                  <div className="mt-auto pt-5">
                    <CtaPrimary href={rentalContactHref(device.name)} className="w-full justify-center">
                      Dieses Gerät anfragen
                    </CtaPrimary>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        </InnerPageBand>

        <section className="relative overflow-hidden border-t border-emerald-950/10 py-16 sm:py-20 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-zinc-950 via-[#10180f] to-[#213018]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#70a340]/14 blur-3xl"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c8e6a0]">Ablauf</p>
              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
                Schnell geklärt, sauber übergeben, <span className="text-[#a8e055]">einsatzbereit.</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-zinc-300 sm:text-base">
                Der Mietprozess soll einfach bleiben. Sie müssen keine lange Liste ausfüllen, sondern bekommen
                persönliche Rückmeldung, ob das gewünschte Gerät zum Einsatz passt.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaPrimary href="/kontakt">Jetzt Gerät anfragen</CtaPrimary>
                <InnerPagePhoneLink variant="dark" />
              </div>
            </div>
            <ol className="grid gap-4 sm:grid-cols-2">
              {rentalSteps.map((step, index) => (
                <li key={step.title} className="flex gap-3 rounded-2xl bg-white/[0.07] p-4 ring-1 ring-white/10">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#70a340] text-sm font-bold text-white shadow-md shadow-emerald-900/15">
                    {index + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-white">{step.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-zinc-300">{step.description}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
        </section>

        <InnerPageBand ambientScene="caretaker" className="border-t border-zinc-200/70">
        <div className="grid gap-8 rounded-3xl border border-zinc-200/80 bg-white/90 p-6 shadow-lg shadow-zinc-900/5 ring-1 ring-white sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
          <div>
            <p className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
              Für wen geeignet?
            </p>
            <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
              Geräte mieten für <span className="gg-heading-accent gg-heading-motion">kurzfristige Einsätze.</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
              Besonders sinnvoll ist die Miete, wenn sich ein Kauf nicht lohnt, ein Gerät nur selten gebraucht
              wird oder Sie vorab wissen möchten, welches Werkzeug wirklich zum Objekt passt.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {rentalAudiences.map((item) => (
                <li key={item} className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 text-sm font-medium text-zinc-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-[#eef6e6] via-white to-zinc-50 p-5 ring-1 ring-emerald-900/10">
            <h3 className="text-lg font-bold text-zinc-900">Sicherheit & Verantwortung</h3>
            <div className="mt-4 space-y-3 text-sm leading-relaxed text-zinc-600">
              <p>Bei motorisierten Geräten sprechen wir vorab über Erfahrung, Einsatzort und notwendiges Zubehör.</p>
              <p>Die Übergabe erfolgt mit kurzer Einweisung. Schutzkleidung, Kraftstoff, Reinigung und Rückgabe klären wir individuell.</p>
              <p>Wenn ein Gerät für den geplanten Einsatz nicht sinnvoll ist, empfehlen wir eine passende Alternative oder übernehmen die Leistung direkt als Service.</p>
            </div>
          </div>
        </div>
        </InnerPageBand>

        <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
          <div className="rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-md shadow-zinc-900/5 sm:p-8">
            <FaqStartpageTeaser />
          </div>
        </section>
      </InnerPageRoot>
    </>
  );
}
