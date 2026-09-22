export type GoogleReview = {
  name: string;
  initial: string;
  avatarClass: string;
  date: string;
  text: string;
  /** Nur Sterne auf Google, ohne geschriebenen Kommentar */
  ratingOnly?: boolean;
};

export function googleReviewDisplayText(review: GoogleReview): string {
  if (review.ratingOnly) {
    return "5 von 5 Sternen auf Google – ohne geschriebenen Kommentar.";
  }
  return review.text;
}

/** Alle 12 Rezensionen laut Google-Unternehmensprofil (Stand September 2026) */
export const googleReviews: GoogleReview[] = [
  {
    name: "TJ",
    initial: "T",
    avatarClass: "bg-blue-600",
    date: "vor kurzem",
    text: "Unsere Anlagen rund um den Betriebssitz werden seit langer Zeit gepflegt. Die Arbeiten werden immer sehr sauber und ordentlich ausgeführt. Der Kontakt ist immer sehr nett und freundlich. Eine Empfehlung geben wir immer wieder gerne ab.",
  },
  {
    name: "Jens Schwarz",
    initial: "J",
    avatarClass: "bg-emerald-700",
    date: "vor kurzem",
    text: "Als Immobilienverwaltung in Halle (Saale) sind wir mit der Qualität der Dienstleistungen der Firma GreenGuard sehr zufrieden. Objektbezogene Wünsche werden berücksichtigt, zeitnah und sehr ordentlich erledigt. Ein großes DANKESCHÖN und auf eine weiterhin erfolgreiche Zusammenarbeit!",
  },
  {
    name: "Anonym",
    initial: "A",
    avatarClass: "bg-zinc-600",
    date: "vor 3 Monaten",
    text: "Wir sind sehr zufrieden mit der Arbeit. Die Hecke und der Rasen wurden sauber, ordentlich und schnell geschnitten. Sehr zuverlässiger und freundlicher Kontakt.",
  },
  {
    name: "Dagmar Ludwig",
    initial: "D",
    avatarClass: "bg-orange-500",
    date: "vor einem Jahr",
    text: "Schnell, zuverlässig, freundlich und die Kommunikation stimmt! Was für ein Fund. Wir haben telefoniert, das Team ist aufgetaucht und hat geliefert. Super Arbeit und ich kann das Team nur empfehlen!",
  },
  {
    name: "Bianca Schnall",
    initial: "B",
    avatarClass: "bg-violet-600",
    date: "vor einem Jahr",
    text: "Immer freundliche Mitarbeiter… zuverlässiges Team… immer zur Stelle… verdienen eigentlich 10 Sterne. Die Nummer 1 zum Weiterempfehlen.",
  },
  {
    name: "Nico Angermann",
    initial: "N",
    avatarClass: "bg-slate-500",
    date: "vor einem Jahr",
    text: "Danke fürs Hecke schneiden. Super Arbeit schnell ausgeführt und ohne lange Wartezeit. TOP LEISTUNG",
  },
  {
    name: "MarsMensch",
    initial: "M",
    avatarClass: "bg-lime-600",
    date: "vor einem Jahr",
    text: "Wir freuen uns sehr, dass wir von einem Bekannten dieses zuverlässige und freundliche Team empfohlen bekommen haben. Alle Arbeiten im Garten, von Rasenschnitt bis zur Pflege, wurden perfekt erledigt.",
  },
  {
    name: "Andrea Henschel",
    initial: "A",
    avatarClass: "bg-rose-600",
    date: "vor einem Jahr",
    text: "",
    ratingOnly: true,
  },
  {
    name: "Danny Thamm",
    initial: "D",
    avatarClass: "bg-teal-600",
    date: "vor einem Jahr",
    text: "Das Team arbeitet zuverlässig, ist immer pünktlich und erledigt alle Aufgaben mit großer Sorgfalt. Besonders schätze ich die schnelle Reaktionszeit.",
  },
  {
    name: "Philipp Boiko",
    initial: "P",
    avatarClass: "bg-sky-600",
    date: "vor einem Jahr",
    text: "Ich bin seit langer Zeit Anwohner und muss sagen, dass die Arbeit von Green Guard GmbH wirklich herausragend ist. Die Grünanlagen in unserer Umgebung sind immer top gepflegt.",
  },
  {
    name: "Stefan",
    initial: "S",
    avatarClass: "bg-amber-500",
    date: "vor einem Jahr",
    text: "Unschlagbar bei Angelegenheiten rund um die Grünpflege. Unkomplizierte Kommunikation, professionelle, saubere Arbeit.",
  },
  {
    name: "Julia Rothmann",
    initial: "J",
    avatarClass: "bg-pink-600",
    date: "vor einem Jahr",
    text: "Für mich das beste Unternehmen für Grünpflege im Umkreis. Man merkt, dass hier die Arbeit nicht nur Beruf sondern auch Berufung ist.",
  },
];

/**
 * Anzahl für Hero, Footer und Google-Badge – entspricht `googleReviews.length`
 * (neues Zitat = neuer Eintrag, dann bleibt alles konsistent).
 */
export const googleReviewCount = googleReviews.length;

/**
 * Für JSON-LD (aggregateRating) – muss zu den auf der Website gezeigten Google-Bewertungen passen.
 * Bei Abweichung vom Google-Unternehmensprofil Werte dort anpassen.
 */
export const googleAggregateRating = {
  ratingValue: 5,
  bestRating: 5,
  worstRating: 1,
  reviewCount: googleReviewCount,
} as const;

/** Hero: Karussell & Marquee ohne interne Test-Einträge */
export const heroGoogleReviews = googleReviews.filter((r) => r.name !== "Philipp Boiko");

export const regionCities = [
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
] as const;

/** Spalten wie im Screenshot (links / rechts) */
export const regionCitiesColumns: [readonly string[], readonly string[]] = [
  ["Gerbstedt", "Sangerhausen", "Lutherstadt Eisleben", "Bernburg", "Quedlinburg"],
  ["Hettstedt", "Mansfeld", "Aschersleben", "Halberstadt", "Halle (Saale)"],
];
