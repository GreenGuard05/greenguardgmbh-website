export type GoogleReview = {
  name: string;
  initial: string;
  avatarClass: string;
  date: string;
  text: string;
};

export const googleReviews: GoogleReview[] = [
  {
    name: "Dagmar Ludwig",
    initial: "D",
    avatarClass: "bg-orange-500",
    date: "vor 9 Monaten",
    text: "Schnell, zuverlässig, freundlich und die Kommunikation stimmt! Was für ein Fund. Super Arbeit und ich kann das Team nur empfehlen!",
  },
  {
    name: "Philipp Boiko",
    initial: "P",
    avatarClass: "bg-sky-600",
    date: "vor einem Jahr",
    text: "Ich bin seit langer Zeit Anwohner und muss sagen, dass die Arbeit von Green Guard GmbH wirklich herausragend ist. Die Grünanlagen in unserer Umgebung sind immer top gepflegt.",
  },
  {
    name: "Julia Rothmann",
    initial: "J",
    avatarClass: "bg-pink-600",
    date: "vor einem Jahr",
    text: "Für mich das beste Unternehmen für Grünpflege im Umkreis. Man merkt, dass hier die Arbeit nicht nur Beruf sondern auch Berufung ist.",
  },
  {
    name: "Danny Thamm",
    initial: "D",
    avatarClass: "bg-teal-600",
    date: "vor 11 Monaten",
    text: "Das Team arbeitet zuverlässig, ist immer pünktlich und erledigt alle Aufgaben mit großer Sorgfalt. Besonders schätze ich die schnelle Reaktionszeit.",
  },
  {
    name: "Nico Angermann",
    initial: "N",
    avatarClass: "bg-slate-500",
    date: "vor 9 Monaten",
    text: "Danke fürs Hecke schneiden. Super Arbeit schnell ausgeführt und ohne lange Wartezeit. TOP LEISTUNG",
  },
  {
    name: "Bianca Schnall",
    initial: "B",
    avatarClass: "bg-violet-600",
    date: "vor 9 Monaten",
    text: "Immer freundliche Mitarbeiter… zuverlässiges Team… immer zur Stelle… verdienen eigentlich 10 Sterne. Die Nummer 1 zum Weiterempfehlen.",
  },
  {
    name: "MarsMensch",
    initial: "M",
    avatarClass: "bg-lime-600",
    date: "vor 10 Monaten",
    text: "Wir freuen uns sehr, dass wir von einem Bekannten dieses zuverlässige und freundliche Team empfohlen bekommen haben. Alle Arbeiten im Garten wurden perfekt erledigt.",
  },
  {
    name: "Stefan",
    initial: "S",
    avatarClass: "bg-amber-500",
    date: "vor einem Jahr",
    text: "Unschlagbar bei Angelegenheiten rund um die Grünpflege. Unkomplizierte Kommunikation, professionelle, saubere Arbeit.",
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
