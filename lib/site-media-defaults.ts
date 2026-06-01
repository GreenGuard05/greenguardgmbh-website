/** Alle steuerbaren Bild-Slots (Schlüssel = Eintrag in content/site-media.json) */
export const SITE_MEDIA_KEYS = [
  "heroSide",
  "about.hero",
  "about.hedge",
  "about.lawn",
  "about.mower",
  "service.gruenanlage",
  "service.solarparkpflege",
  "service.boeschungspflege",
  "service.hausmeisterservice",
  "service.winterdienst",
  "service.reinigung",
  "service.strauchpflege",
  "mieten.card",
] as const;

export type SiteMediaKey = (typeof SITE_MEDIA_KEYS)[number];

/** Nach Zusammenführung mit content/site-media.json */
export type ResolvedSiteMedia = Record<SiteMediaKey, string>;

/** Gruppierung im Bilder-Dashboard (Reihenfolge der Bearbeitung) */
export const SITE_MEDIA_EDITOR_GROUPS: { title: string; keys: readonly SiteMediaKey[] }[] = [
  {
    title: "Startseite",
    keys: ["heroSide", "mieten.card"],
  },
  {
    title: "Über uns",
    keys: ["about.hero", "about.hedge", "about.lawn", "about.mower"],
  },
  {
    title: "Leistungsseiten",
    keys: [
      "service.gruenanlage",
      "service.solarparkpflege",
      "service.boeschungspflege",
      "service.hausmeisterservice",
      "service.winterdienst",
      "service.reinigung",
      "service.strauchpflege",
    ],
  },
];

/** Kurz, wo das Bild auf der Website erscheint (Dashboard-Hilfe) */
export const SITE_MEDIA_HINTS: Record<SiteMediaKey, string> = {
  heroSide:
    "Startseite, ganz oben: großes Foto rechts neben Text und CTAs (hoch, hinter dem grünen Vorhang).",
  "about.hero":
    "Seite „Über uns“: großes Kopfbild rechts neben Überschrift und CTAs (Immobilie / Gebäude).",
  "about.hedge":
    "Kachel „Hecke“ im Grün-Block – gleiche Kachel auf Startseite und Seite „Über uns“.",
  "about.lawn":
    "Kachel „Rasen“ im Grün-Block – Startseite und „Über uns“.",
  "about.mower":
    "Kachel „Rasenmäher“ im Grün-Block – Startseite und „Über uns“.",
  "service.gruenanlage": "Leistungsseite „Grünanlagenpflege“: großes Kopfbild.",
  "service.solarparkpflege": "Leistungsseite „Solarparkpflege“: großes Kopfbild.",
  "service.boeschungspflege": "Leistungsseite „Böschungs- & Hangpflege“: großes Kopfbild.",
  "service.hausmeisterservice": "Leistungsseite „Hausmeisterservice“: großes Kopfbild.",
  "service.winterdienst": "Leistungsseite „Winterdienst“: großes Kopfbild.",
  "service.reinigung": "Leistungsseite „Gebäudereinigung“: großes Kopfbild.",
  "service.strauchpflege": "Leistungsseite „Strauchpflege“: großes Kopfbild.",
  "mieten.card": "Startseite: Kachel zum Thema Gerätemietservice / Mieten.",
};

/** Vorschau-Rahmen im Admin (näher am echten Seitenverhältnis) */
export type SiteMediaPreviewFrame = "heroTall" | "tile" | "serviceHero" | "card";

export const SITE_MEDIA_PREVIEW_FRAME: Record<SiteMediaKey, SiteMediaPreviewFrame> = {
  heroSide: "heroTall",
  "about.hero": "serviceHero",
  "about.hedge": "tile",
  "about.lawn": "tile",
  "about.mower": "tile",
  "service.gruenanlage": "serviceHero",
  "service.solarparkpflege": "serviceHero",
  "service.boeschungspflege": "serviceHero",
  "service.hausmeisterservice": "serviceHero",
  "service.winterdienst": "serviceHero",
  "service.reinigung": "serviceHero",
  "service.strauchpflege": "serviceHero",
  "mieten.card": "card",
};

/** Lesbare Bezeichnungen im Dashboard */
export const SITE_MEDIA_LABELS: Record<SiteMediaKey, string> = {
  heroSide: "Startseite – großes Seitenbild (Hero)",
  "about.hero": "Über uns – Kopfbild (Hero)",
  "about.hedge": "Über uns – Kachel Hecke",
  "about.lawn": "Über uns – Kachel Rasen",
  "about.mower": "Über uns – Kachel Rasenmäher",
  "service.gruenanlage": "Leistung – Grünanlagenpflege",
  "service.solarparkpflege": "Leistung – Solarparkpflege",
  "service.boeschungspflege": "Leistung – Böschungs- & Hangpflege",
  "service.hausmeisterservice": "Leistung – Hausmeisterservice",
  "service.winterdienst": "Leistung – Winterdienst",
  "service.reinigung": "Leistung – Gebäudereinigung",
  "service.strauchpflege": "Leistung – Strauchpflege",
  "mieten.card": "Startseite – Kachel Gerätemietservice",
};

/** Standard-URLs (Pexels/Unsplash wie bisher) */
export const SITE_MEDIA_DEFAULTS: Record<SiteMediaKey, string> = {
  heroSide:
    "https://images.pexels.com/photos/5163430/pexels-photo-5163430.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "about.hero": "/images/about-hero-immobilie.jpg",
  "about.hedge":
    "https://images.pexels.com/photos/36713694/pexels-photo-36713694.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "about.lawn":
    "https://images.pexels.com/photos/16630712/pexels-photo-16630712.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "about.mower":
    "https://images.pexels.com/photos/4503267/pexels-photo-4503267.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "service.gruenanlage":
    "https://images.pexels.com/photos/5163430/pexels-photo-5163430.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "service.solarparkpflege":
    "https://images.pexels.com/photos/15751134/pexels-photo-15751134.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "service.boeschungspflege":
    "https://images.pexels.com/photos/2086037/pexels-photo-2086037.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "service.hausmeisterservice":
    "https://images.pexels.com/photos/20077008/pexels-photo-20077008.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "service.winterdienst":
    "https://images.pexels.com/photos/14811036/pexels-photo-14811036.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "service.reinigung":
    "https://images.pexels.com/photos/7747511/pexels-photo-7747511.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "service.strauchpflege":
    "https://images.pexels.com/photos/36713694/pexels-photo-36713694.jpeg?auto=compress&cs=tinysrgb&w=1600",
  "mieten.card":
    "https://images.pexels.com/photos/914913/pexels-photo-914913.jpeg?auto=compress&cs=tinysrgb&w=1600",
};
