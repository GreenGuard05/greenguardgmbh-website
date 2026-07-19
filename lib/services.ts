import { SITE_MEDIA_DEFAULTS } from "@/lib/site-media-defaults";

export type ServiceDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  intro: string;
  tags: string[];
  href: string;
  image: string;
  imageBadge?: string;
};

/** Fallback für Meta / JSON-LD, wenn kein dynamischer Kontext (sollte mit getResolvedSiteMedia überschrieben werden) */
export const heroSideImage = SITE_MEDIA_DEFAULTS.heroSide;

export const aboutCollageImages = {
  hedge: SITE_MEDIA_DEFAULTS["about.hedge"],
  lawn: SITE_MEDIA_DEFAULTS["about.lawn"],
  mower: SITE_MEDIA_DEFAULTS["about.mower"],
} as const;

export const services: ServiceDetail[] = [
  {
    slug: "solarparkpflege",
    title: "Solarparkpflege",
    eyebrow: "PV-Flächen · Grünunterhalt",
    intro:
      "Grünunterhalt auf PV-Freiflächen mit durchdachter Profi-Technik – von der ferngesteuerten Mähraupe über Hochgrasmäher bis zum Aufsitzmäher, passend zur jeweiligen Anlage.",
    tags: [
      "Grünflächen unter Modulen",
      "Hochgrasmäher & Aufsitzmäher",
      "Ferngesteuerte Mähraupe",
      "Wartungsverträge",
    ],
    href: "/dienstleistungen/solarparkpflege",
    image: SITE_MEDIA_DEFAULTS["service.solarparkpflege"],
    imageBadge: "PV & Grün",
  },
  {
    slug: "boeschungspflege",
    title: "Böschungs- & Hangpflege",
    eyebrow: "Böschungen · Hänge · Infrastruktur",
    intro:
      "Böschungsmähen und Hangpflege dort, wo Freischneider an Standfestigkeit stoßen – mit ferngesteuerter Mähraupe, Hochgrasmäher und Profi-Flotte für schwer zugängliche Flächen.",
    tags: [
      "Böschungsmähen",
      "Hangpflege",
      "Schwer zugängliche Flächen",
      "Grünpflege Infrastruktur",
    ],
    href: "/dienstleistungen/boeschungspflege",
    image: SITE_MEDIA_DEFAULTS["service.boeschungspflege"],
    imageBadge: "Bahn · Strasse · Hang",
  },
  {
    slug: "gruenanlage",
    title: "Grünanlagenpflege",
    eyebrow: "Rasen · Hecken · Bäume",
    intro:
      "Rasenmäharbeiten, Baumpflege, Formschnitt, Beetpflege sowie Laub- und Grünschnittentsorgung für gepflegte Außenanlagen.",
    tags: [
      "Rasenmäharbeiten",
      "Gehölzpflege",
      "Formschnitt",
    ],
    href: "/dienstleistungen/gruenanlage",
    image: SITE_MEDIA_DEFAULTS["service.gruenanlage"],
  },
  {
    slug: "hausmeisterservice",
    title: "Hausmeisterservice",
    eyebrow: "Komplett-Betreuung",
    intro:
      "Rundumbetreuung für Immobilien: Objektkontrolle, Kleinreparaturen, Reinigung, Müllplatzpflege und Handwerkerkoordination.",
    tags: ["Kleinreparaturen", "Objektkontrolle", "Rundumbetreuung"],
    href: "/dienstleistungen/hausmeisterservice",
    image: SITE_MEDIA_DEFAULTS["service.hausmeisterservice"],
  },
  {
    slug: "winterdienst",
    title: "Winterdienst",
    eyebrow: "Winterdienst · 24/7",
    intro:
      "Räum- und Streudienst für Gehwege, Parkplätze und Zufahrten – zuverlässig und pünktlich, auch am frühen Morgen.",
    tags: [
      "Schneeräumung",
      "Streudienst",
      "Verkehrssicherung",
      "Routenplanung",
    ],
    href: "/dienstleistungen/winterdienst",
    image: SITE_MEDIA_DEFAULTS["service.winterdienst"],
    imageBadge: "24/7 Bereitschaft",
  },
  {
    slug: "reinigung",
    title: "Gebäudereinigung",
    eyebrow: "Innen & Außen",
    intro:
      "Unterhalts- und Grundreinigung für Büros, Treppenhäuser und Außenanlagen. Für Sauberkeit, die man sofort sieht.",
    tags: [
      "Treppenhausreinigung",
      "Fassadenreinigung",
      "Grundreinigung",
      "Unterhaltsreinigung",
    ],
    href: "/dienstleistungen/reinigung",
    image: SITE_MEDIA_DEFAULTS["service.reinigung"],
    imageBadge: "Innen & Außen",
  },
  {
    slug: "strauchpflege",
    title: "Strauch- & Buschpflege",
    eyebrow: "Strauch- & Buschpflege",
    intro:
      "Formschnitt, Rückschnitt, Wildwuchs-Entfernung, Rosenpflege und Grünschnittentsorgung für gepflegte Grundstücke.",
    tags: ["Formschnitt", "Rückschnitt", "Auslichten", "Grünschnittentsorgung"],
    href: "/dienstleistungen/strauchpflege",
    image: SITE_MEDIA_DEFAULTS["service.strauchpflege"],
    imageBadge: "Form & Funktion",
  },
];

export const mietenHomeCard = {
  title: "Gerätemietservice",
  eyebrow: "Profi-Equipment",
  intro:
    "Professionelle Geräte zum Mieten: Häcksler, Leitern, Mäher und Reinigungsmaschinen.",
  tags: ["Häcksler", "Leitern", "Mäher", "Reinigungsmaschinen"],
  href: "/mieten",
  image: SITE_MEDIA_DEFAULTS["mieten.card"],
} as const;

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export type HomeServicesGrid = {
  gruen: ServiceDetail;
  haus: ServiceDetail;
  solarpark: ServiceDetail;
  boeschung: ServiceDetail;
  rowClassic: ServiceDetail[];
  strauch: ServiceDetail;
};

function pickHomeServicesGrid(list: ServiceDetail[]): HomeServicesGrid {
  const find = (slug: string) => {
    const service = list.find((s) => s.slug === slug);
    if (!service) throw new Error(`Service "${slug}" fehlt für Startseiten-Grid.`);
    return service;
  };
  return {
    gruen: find("gruenanlage"),
    haus: find("hausmeisterservice"),
    solarpark: find("solarparkpflege"),
    boeschung: find("boeschungspflege"),
    rowClassic: [find("winterdienst"), find("reinigung")],
    strauch: find("strauchpflege"),
  };
}

/** Reihenfolge Startseiten-Grid: Grünanlage + Hausmeister, dann Solarpark & Böschung, dann Klassiker */
export function servicesForHomeGrid(): HomeServicesGrid {
  return pickHomeServicesGrid(services);
}

/** Gleiche Raster-Logik mit bereits aufgelösten Bild-URLs (z. B. nach getResolvedSiteMedia) */
export function servicesForHomeGridFrom(list: ServiceDetail[]): HomeServicesGrid {
  return pickHomeServicesGrid(list);
}
