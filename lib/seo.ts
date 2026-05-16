import type { Metadata } from "next";
import { site } from "@/lib/site";

/**
 * Kanonische Basis-URL (metadataBase, Sitemap, JSON-LD).
 * Sollte exakt der bevorzugten Live-Domain entsprechen (mit/ohne www – eine Variante per Redirect bündeln).
 */
export const siteUrl = "https://greenguard-msh.de" as const;

/** Öffentliche Marken-Icons (Next.js: app/icon.svg, app/apple-icon.tsx) */
export const siteIconUrl = `${siteUrl}/icon.svg` as const;

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
    "Winterdienst für Gehwege, Parkplätze und Zufahrten: Schneeräumung und Streudienst mit Bereitschaft – Green Guard GmbH aus Gerbstedt sorgt für Verkehrssicherheit.",
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
    areaServed: {
      "@type": "State",
      name: "Sachsen-Anhalt",
    },
    priceRange: "$$",
    sameAs: [site.googleBusinessProfileUrl, site.instagramUrl],
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
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Dienstleistungen", item: `${siteUrl}/dienstleistungen` },
      { "@type": "ListItem", position: 3, name: serviceTitle, item: pageUrl },
    ],
  } as const;
}
