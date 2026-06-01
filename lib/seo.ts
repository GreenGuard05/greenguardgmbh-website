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

/** Statisches OG-Bild (WhatsApp/Meta – echte Datei, kein dynamisches Render) */
export const SOCIAL_PREVIEW_IMAGE_PATH = "/branding/green-guard-og-preview.png" as const;
export const socialPreviewImageSize = { width: 1024, height: 1024 } as const;

/**
 * WhatsApp/Meta laden viele externe Bild-URLs (Pexels, Unsplash, …) für Link-Vorschauen nicht zuverlässig.
 * Nur greenguard-msh.de oder relative Pfade → unverändert; sonst Fallback auf selbst gehostetes Marken-PNG.
 */
export function socialPreviewOgImageUrl(ogImage?: string): string | undefined {
  if (ogImage == null || ogImage.trim() === "") return undefined;
  const u = ogImage.trim();
  if (u.startsWith("/")) return u;
  if (u.startsWith(siteUrl)) return u;
  if (/^https?:\/\//i.test(u)) return SOCIAL_PREVIEW_IMAGE_PATH;
  return u;
}

/** Öffentliches Marken-Icon (JSON-LD logo) – Vektor-Favicon, scharf in jeder Größe */
export const siteIconUrl = `${siteUrl}/branding/green-guard-favicon.svg` as const;

/** Standard-Meta-Description für die Startseite / Fallback (~155 Zeichen, snippet-tauglich) */
export const homeDescription =
  "Green Guard GmbH Gerbstedt: Grünpflege, Solarparkpflege, Böschungs- & Hangpflege, Hausmeister, Winterdienst, Reinigung, Strauchpflege & Gerätemiete in Sachsen-Anhalt.";

/**
 * Einzigartige Meta-Descriptions (ca. 150–165 Zeichen).
 * Einstieg jeweils anders formuliert, damit Google nicht überall dieselbe Fußzeile als Snippet nimmt.
 */
export const pageDescriptions = {
  dienstleistungen:
    "Dienstleistungen von Green Guard GmbH Gerbstedt: Grünanlagenpflege, Solarparkpflege, Böschungs- & Hangpflege, Hausmeister, Winterdienst, Reinigung & Strauchpflege.",
  mieten:
    "Geräte mieten bei Green Guard GmbH in Gerbstedt: Ferrari Mähraupe, Häcksler, Leitern, Mäher und Reinigungsmaschinen – geprüftes Equipment mit Einweisung.",
  kontakt:
    "Kostenlose Erstberatung in Gerbstedt: Grünpflege, Solarparkpflege, Winterdienst, Objektbetreuung oder Reinigung – Green Guard GmbH meldet sich zeitnah.",
  ueberUns:
    "Team & Geschichte: Green Guard GmbH betreut Immobilien und Außenanlagen seit über 15 Jahren in Sachsen-Anhalt – Werte, Arbeitsweise und Einblicke in unsere Arbeit vor Ort.",
  impressum:
    "Impressum der Green Guard GmbH, Gerbstedt: Angaben nach TMG, HRB 35595 (Amtsgericht Stendal), Vertretung und Verantwortlicher für den Inhalt dieser Website.",
  datenschutz:
    "Datenschutz auf greenguard-msh.de: Zwecke der Datenverarbeitung, Kontaktformular, Server-Logs, Speicherdauer und Ihre Rechte nach DSGVO – transparent erklärt.",
} as const;

/** Handgeschriebene Snippets je Leistungsseite (eindeutig für Sitelinks & organische Ergebnisse) */
export const serviceSeoDescriptions: Record<string, string> = {
  solarparkpflege:
    "Solarparkpflege in Sachsen-Anhalt: Grünunterhalt unter PV-Modulen mit Mähraupe, Hochgrasmäher & Aufsitzmäher – Gerbstedt, Halle (Saale), Mansfeld-Südharz & Region.",
  boeschungspflege:
    "Böschungsmähen & Hangpflege in Gerbstedt, Halle (Saale) & Mansfeld-Südharz: Steilhänge, Bahn, Straße, Brücken, Rückhalte- & Überlaufbecken – Mähraupe statt Freischneider.",
  gruenanlage:
    "Grünanlagenpflege in Gerbstedt, Halle (Saale) & Mansfeld-Südharz: Rasen, Hecken, Bäume und Gehölze – planbare Pflegeintervalle von Green Guard GmbH.",
  hausmeisterservice:
    "Hausmeisterservice in Gerbstedt, Halle (Saale) & Region: Objektbetreuung, Kleinreparaturen und Kontrolle – ein Ansprechpartner von Green Guard GmbH.",
  winterdienst:
    "Winterdienst in Halle (Saale), Gerbstedt & Mansfeld-Südharz: Schnee räumen, streuen, dokumentieren – für Wege, Zufahrten und Parkflächen.",
  reinigung:
    "Gebäudereinigung in Gerbstedt, Halle (Saale) & Sachsen-Anhalt: Unterhalts- und Grundreinigung für Treppenhäuser, Büros und Gewerbe.",
  strauchpflege:
    "Strauch- & Buschpflege in Gerbstedt, Mansfeld-Südharz & Region: Formschnitt, Rückschnitt und Grünschnittentsorgung von Green Guard GmbH.",
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
  const resolvedOg = socialPreviewOgImageUrl(opts.ogImage);
  const useBrandedFallback = resolvedOg === SOCIAL_PREVIEW_IMAGE_PATH;
  const images =
    resolvedOg != null && resolvedOg !== ""
      ? [
          {
            url: resolvedOg,
            width: useBrandedFallback ? socialPreviewImageSize.width : (opts.ogImageWidth ?? 1200),
            height: useBrandedFallback ? socialPreviewImageSize.height : (opts.ogImageHeight ?? 630),
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
      ...(resolvedOg ? { images: [resolvedOg] } : {}),
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
