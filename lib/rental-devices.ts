export type RentalDevice = {
  id: string;
  name: string;
  image: string;
  description: string;
  details: string;
  facts?: string[];
  price?: string;
  deposit?: string;
  fuel?: string;
  suitableFor?: string[];
  notSuitableFor?: string[];
};

export const defaultRentalDevices: RentalDevice[] = [
  {
    id: "benzin-holzhaecksler",
    name: "Mobiler Benzin-Holzhäcksler mit Antrieb",
    image: "/images/rental/benzin-holzhaecksler.png",
    description: "Mobiler Benzin-Häcksler für Grünpflege, Baumschnitt sowie Holz- und Asthäckseln.",
    details: "Saubere und gepflegte Maschine. Anlieferung nach Absprache möglich.",
    facts: ["Bis 10 cm Aststärke", "Mit Fahrantrieb", "Hackschnitzel ca. 1 cm"],
    price: "90 EUR / 24h · 160 EUR Wochenende · 300 EUR / 5 Tage",
    deposit: "200 EUR Kaution",
    fuel: "Super E5",
  },
];

export function slugifyRentalDeviceName(name: string): string {
  const slug = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ä/g, "ae")
    .replace(/ö/g, "oe")
    .replace(/ü/g, "ue")
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return slug || `geraet-${Date.now()}`;
}
