export const site = {
  name: "Green Guard GmbH",
  /** Claim wie auf dem Logo (einheitlich für UI, Alt-Texte, Meta) */
  brandSlogan: "Ihr Grün in besten Händen.",
  managingDirector: "Justin Zweidorf",
  managingDirectorTitle: "Geschäftsführer",
  tagline: "Facility Management Gerbstedt & Sachsen-Anhalt",
  phone: "01573 2633670",
  phoneTel: "+4915732633670",
  email: "info@greenguard-msh.de",
  addressLines: ["Alte Dorfstraße 8", "06347 Gerbstedt", "Sachsen-Anhalt"],
  /** Standort für Karten & Schema.org (Geokoordinaten Firmensitz) */
  geo: { latitude: 51.8083, longitude: 11.4972 },
  /**
   * Grobe Erreichbarkeit für strukturierte Daten – bitte an reale Öffnungszeiten anpassen.
   * Mo–Fr 7–17 Uhr als Orientierung; Winterdienst/Einsätze können abweichen.
   */
  openingHours: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] as const,
      opens: "07:00",
      closes: "17:00",
    },
  ],
  region: "Gerbstedt · Sachsen-Anhalt",
  /** Uppercase line for hero badge (matches live wording) */
  regionBadge: "Gerbstedt · Sachsen-Anhalt",
  /** Google Business / Rezensionen (Share-Link vom Unternehmen) */
  googleReviewsUrl: "https://share.google/DfAIzqdAb53kPx1NI",
  /** Google Maps / Unternehmensprofil (Rezensionen & Infos) */
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Green+Guard+GmbH+Alte+Dorfstraße+8+06347+Gerbstedt",
  /** Offizieller Instagram-Kanal */
  instagramUrl:
    "https://www.instagram.com/greenguard_msh?igsh=YnUzZG9jNHVjZXB2",
} as const;

export function mailtoHref(query = "") {
  const recipient = encodeURIComponent(`${site.name} <${site.email}>`);
  return `mailto:${recipient}${query}`;
}

export const siteLocationLines = [site.name, ...site.addressLines] as const;

export type NavItem = { href: string; label: string };

export const mainNav: NavItem[] = [
  { href: "/", label: "Startseite" },
  { href: "/dienstleistungen", label: "Dienstleistungen" },
  { href: "/einsatzgebiet", label: "Einsatzgebiet" },
  { href: "/mieten", label: "Geräte mieten" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/kontakt", label: "Kontakt" },
];

/** Order wie auf der Live-Seite im Dropdown */
export const serviceLinks: NavItem[] = [
  { href: "/dienstleistungen/gruenanlage", label: "Grünanlagenpflege" },
  { href: "/dienstleistungen/solarparkpflege", label: "Solarparkpflege" },
  { href: "/dienstleistungen/strauchpflege", label: "Strauch- & Buschpflege" },
  { href: "/dienstleistungen/hausmeisterservice", label: "Hausmeisterservice" },
  { href: "/dienstleistungen/winterdienst", label: "Winterdienst" },
  { href: "/dienstleistungen/reinigung", label: "Gebäudereinigung" },
];

export const cities = [
  "Gerbstedt",
  "Hettstedt",
  "Sangerhausen",
  "Mansfeld",
  "Lutherstadt Eisleben",
  "Aschersleben",
  "Bernburg",
  "Halberstadt",
  "Quedlinburg",
  "Halle (Saale)",
];
