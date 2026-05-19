import type { Metadata } from "next";
import { localAreaNames } from "@/lib/local-seo";
import { googleAggregateRating } from "@/lib/reviews";
import { site } from "@/lib/site";

/** Meta-Keywords auf das Wesentliche begrenzen (Google wertet sie kaum, hält HTML schlank) */
export function focusKeywords(...groups: readonly (readonly string[])[]): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const group of groups) {
    for (const kw of group) {
      const key = kw.trim();
      if (!key || seen.has(key)) continue;
      seen.add(key);
      out.push(key);
      if (out.length >= 12) return out;
    }
  }
  return out;
}

/**
 * Kanonische Basis-URL (metadataBase, Sitemap, JSON-LD).
 * Sollte exakt der bevorzugten Live-Domain entsprechen (mit/ohne www – eine Variante per Redirect bündeln).
 */
export const siteUrl = "https://greenguard-msh.de" as const;

/** Öffentliches Marken-Icon für strukturierte Daten */
export const siteIconUrl = `${siteUrl}/branding/green-guard-favicon.svg` as const;

/** Standard-Meta-Description für die Startseite / Fallback (~155 Zeichen, snippet-tauglich) */
export const homeDescription =
  "Ihr Grün in besten Händen: Green Guard GmbH Gerbstedt – Facility Management & Grünpflege in Sachsen-Anhalt. Hausmeister, Winterdienst, Reinigung, Strauchpflege, Gerätemiete.";

/**
 * Einzigartige Meta-Descriptions (ca. 150–165 Zeichen).
 * Einstieg jeweils anders formuliert, damit Google nicht überall dieselbe Fußzeile als Snippet nimmt.
 */
export const pageDescriptions = {
  dienstleistungen:
    "Dienstleistungen von Green Guard GmbH Gerbstedt: Grünanlagenpflege, Hausmeister, Winterdienst, Reinigung & Strauchpflege – ein Ansprechpartner für Mansfeld-Südharz.",
  kontakt:
    "Kostenlose Erstberatung in Gerbstedt: Grünpflege, Winterdienst, Objektbetreuung oder Reinigung – schreiben Sie Green Guard GmbH, wir melden uns zeitnah.",
  ueberUns:
    "Team & Geschichte: Green Guard GmbH betreut Immobilien und Außenanlagen seit über 15 Jahren in Sachsen-Anhalt – Werte, Arbeitsweise und Einblicke in unsere Arbeit vor Ort.",
  mieten:
    "Geräte mieten bei Green Guard GmbH in Gerbstedt: Häcksler, Leitern, Mäher und Reinigungsmaschinen – geprüftes Equipment, Einweisung und faire Miettage.",
  impressum:
    "Impressum der Green Guard GmbH, Gerbstedt: Angaben nach TMG, HRB 35595 (Amtsgericht Stendal), Vertretung und Verantwortlicher für den Inhalt dieser Website.",
  datenschutz:
    "Datenschutz auf greenguard-msh.de: Zwecke der Datenverarbeitung, Kontaktformular, Server-Logs, Speicherdauer und Ihre Rechte nach DSGVO – transparent erklärt.",
} as const;

/** Handgeschriebene Snippets je Leistungsseite (eindeutig für Sitelinks & organische Ergebnisse) */
export const serviceSeoDescriptions: Record<string, string> = {
  gruenanlage:
    "Grünanlagenpflege in Gerbstedt & Sachsen-Anhalt: Rasen, Hecken, Bäume und Gehölze für Wohn- und Gewerbeobjekte – Green Guard GmbH plant verlässliche Pflegeintervalle.",
  hausmeisterservice:
    "Hausmeisterservice Gerbstedt: Objektbetreuung, Kleinreparaturen und Objektkontrolle für Immobilien in Mansfeld-Südharz – ein fester Ansprechpartner bei der Green Guard GmbH.",
  winterdienst:
    "Winterdienst Halle (Saale), Gerbstedt & Mansfeld-Südharz: Schneeräumung, Räumdienst und Streudienst für Wege, Zufahrten, Parkflächen und Objekte.",
  reinigung:
    "Gebäudereinigung in Sachsen-Anhalt: Unterhalts- und Grundreinigung für Treppenhäuser, Büros und Außenanlagen – sauber und termingerecht von Green Guard GmbH.",
  strauchpflege:
    "Strauch- und Buschpflege in Sachsen-Anhalt: Formschnitt, Rückschnitt und fachgerechte Entsorgung – Green Guard GmbH formt Gehölze passend zum Grundstück.",
};

/** Konsistente Meta-Tags inkl. Open Graph & Twitter (metadataBase ergänzt kanonische URLs) */
export function createPageMetadata(opts: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogImage?: string;
  ogImageWidth?: number;
  ogImageHeight?: number;
  ogImageAlt?: string;
}): Metadata {
  const path = opts.path.startsWith("/") ? opts.path : `/${opts.path}`;
  const absoluteUrl = `${siteUrl}${path === "/" ? "" : path}`;
  const pageUrl = path === "/" ? siteUrl : absoluteUrl;
  const ogTitle = `${opts.title} | ${site.name}`;
  const images =
    opts.ogImage != null && opts.ogImage !== ""
      ? [
          {
            url: opts.ogImage,
            width: opts.ogImageWidth ?? 1200,
            height: opts.ogImageHeight ?? 630,
            alt: opts.ogImageAlt ?? opts.title,
          },
        ]
      : undefined;

  return {
    title: opts.title,
    description: opts.description,
    ...(opts.keywords?.length ? { keywords: opts.keywords } : {}),
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: pageUrl,
      siteName: site.name,
      title: ogTitle,
      description: opts.description,
      ...(images ? { images } : {}),
    },
    twitter: {
      card: images ? "summary_large_image" : "summary",
      title: ogTitle,
      description: opts.description,
      ...(opts.ogImage ? { images: [opts.ogImage] } : {}),
    },
    robots: { index: true, follow: true },
  };
}

export function buildLocalBusinessJsonLd(heroImageUrl: string) {
  const [street, cityLine] = site.addressLines;
  const postalMatch = /^(\d{5})\s+(.+)$/.exec(cityLine ?? "");
  const postalCode = postalMatch?.[1] ?? "06347";
  const addressLocality = postalMatch?.[2] ?? "Gerbstedt";

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteUrl}/#localbusiness`,
    name: site.name,
    description: homeDescription,
    url: siteUrl,
    logo: siteIconUrl,
    telephone: site.phoneTel,
    email: site.email,
    image: heroImageUrl,
    address: {
      "@type": "PostalAddress",
      streetAddress: street,
      postalCode,
      addressLocality,
      addressRegion: "Sachsen-Anhalt",
      addressCountry: "DE",
    },
    areaServed: [
      {
        "@type": "State",
        name: "Sachsen-Anhalt",
      },
      ...localAreaNames.map((name) => ({
        "@type": "Place",
        name,
      })),
    ],
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: site.googleBusinessProfileUrl,
    openingHoursSpecification: site.openingHours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [...slot.dayOfWeek],
      opens: slot.opens,
      closes: slot.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: googleAggregateRating.ratingValue,
      bestRating: googleAggregateRating.bestRating,
      worstRating: googleAggregateRating.worstRating,
      ratingCount: googleAggregateRating.reviewCount,
    },
    priceRange: "$$",
    sameAs: [site.googleBusinessProfileUrl, site.instagramUrl],
  } as const;
}

export type BreadcrumbJsonLdItem = { name: string; item?: string };

/** BreadcrumbList für Unterseiten (HTML + JSON-LD) */
export function buildBreadcrumbJsonLd(items: BreadcrumbJsonLdItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      ...(entry.item ? { item: entry.item } : {}),
    })),
  } as const;
}

/** Kontaktseite als ContactPage verknüpft mit LocalBusiness */
export function buildContactPageJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/kontakt#webpage`,
    url: `${siteUrl}/kontakt`,
    name: `Kontakt – ${site.name}`,
    description: pageDescriptions.kontakt,
    inLanguage: "de-DE",
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#localbusiness` },
    mainEntity: { "@id": `${siteUrl}/#localbusiness` },
  } as const;
}

/** LocalBusiness + WebSite als @graph (Rich Results / Knowledge Panel) */
export function buildStructuredDataGraph(heroImageUrl: string) {
  const business = buildLocalBusinessJsonLd(heroImageUrl);
  const entity = Object.fromEntries(Object.entries(business).filter(([key]) => key !== "@context"));
  return {
    "@context": "https://schema.org",
    "@graph": [
      entity,
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: site.name,
        description: homeDescription,
        inLanguage: "de-DE",
        publisher: { "@id": `${siteUrl}/#localbusiness` },
      },
    ],
  };
}

/** BreadcrumbList für Leistungsunterseiten */
export function buildServiceBreadcrumbJsonLd(serviceTitle: string, pageUrl: string) {
  return buildBreadcrumbJsonLd([
    { name: "Startseite", item: siteUrl },
    { name: "Dienstleistungen", item: `${siteUrl}/dienstleistungen` },
    { name: serviceTitle, item: pageUrl },
  ]);
}

export function buildServiceJsonLd(opts: {
  slug: string;
  title: string;
  description: string;
  image?: string;
  offers: string[];
}) {
  const pageUrl = `${siteUrl}/dienstleistungen/${opts.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `${opts.title} von ${site.name}`,
    serviceType: opts.title,
    description: opts.description,
    url: pageUrl,
    image: opts.image,
    provider: { "@id": `${siteUrl}/#localbusiness` },
    areaServed: localAreaNames.map((name) => ({
      "@type": "Place",
      name,
    })),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${siteUrl}/kontakt`,
      servicePhone: site.phoneTel,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${opts.title} Leistungen`,
      itemListElement: opts.offers.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
        },
      })),
    },
  } as const;
}

export function buildFaqJsonLd(faqs: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } as const;
}
