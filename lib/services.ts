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

/** Reihenfolge Startseiten-Grid: großes Kachel zuerst, dann Hausmeister, dann Rest */
export function servicesForHomeGrid() {
  const gruen = services.find((s) => s.slug === "gruenanlage")!;
  const haus = services.find((s) => s.slug === "hausmeisterservice")!;
  const rest = services.filter(
    (s) => s.slug !== "gruenanlage" && s.slug !== "hausmeisterservice",
  );
  const strauch = rest.find((s) => s.slug === "strauchpflege")!;
  const row2a = rest.filter((s) => s.slug !== "strauchpflege");
  return { gruen, haus, row2a, strauch };
}

/** Gleiche Raster-Logik mit bereits aufgelösten Bild-URLs (z. B. nach getResolvedSiteMedia) */
export function servicesForHomeGridFrom(list: ServiceDetail[]) {
  const gruen = list.find((s) => s.slug === "gruenanlage")!;
  const haus = list.find((s) => s.slug === "hausmeisterservice")!;
  const rest = list.filter((s) => s.slug !== "gruenanlage" && s.slug !== "hausmeisterservice");
  const strauch = rest.find((s) => s.slug === "strauchpflege")!;
  const row2a = rest.filter((s) => s.slug !== "strauchpflege");
  return { gruen, haus, row2a, strauch };
}
