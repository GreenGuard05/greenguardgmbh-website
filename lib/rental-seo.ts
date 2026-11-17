import type { RentalDevice } from "@/lib/rental-devices";
import { siteUrl } from "@/lib/seo";

export function rentalDeviceHref(device: Pick<RentalDevice, "id">) {
  return `/mieten/${device.id}`;
}

export function rentalContactHref(deviceName: string) {
  const params = new URLSearchParams({
    leistung: "Gerätemietservice",
    geraet: deviceName,
  });
  return `/kontakt?${params.toString()}#angebot-formular`;
}

export function absoluteImageUrl(src: string) {
  if (!src) return undefined;
  if (src.startsWith("http://") || src.startsWith("https://")) return src;
  return `${siteUrl}${src.startsWith("/") ? src : `/${src}`}`;
}

export function rentalSeoDescription(devices: RentalDevice[]) {
  if (!devices.length) {
    return "Geräte mieten bei Green Guard GmbH in Gerbstedt: gepflegte Mietgeräte für Garten, Objektpflege, Reinigung und Außenflächen.";
  }
  const hasPuzzi = devices.some((device) => device.id === puzziRentalId);
  const names = devices
    .filter((device) => device.id !== puzziRentalId)
    .slice(0, 3)
    .map((device) => device.name)
    .join(", ");
  if (hasPuzzi) {
    return `Polsterreiniger und Waschsauger mieten in Gerbstedt, dazu ${names}. Preise, Kaution und Anfrage bei Green Guard GmbH in Mansfeld-Südharz.`;
  }
  return `Mietgeräte in Gerbstedt mieten: ${names}. Preise, Kaution, Bilder und Anfrage direkt online bei Green Guard GmbH in Mansfeld-Südharz.`;
}

/** Kanonische Mietseite des Kärcher Puzzi 10/1 */
export const puzziRentalId = "polsterreiniger-teppichreiniger-waschsauger";

export const puzziImageAlt =
  "Polsterreiniger und Teppichreiniger Kärcher Puzzi 10/1 mieten – Sofa, Teppiche, Matratzen und Autositze reinigen bei Green Guard GmbH.";

/** Gerätespezifische Meta-Titel (sonst generischer Fallback) */
export const rentalDeviceSeoTitles: Record<string, string> = {
  [puzziRentalId]: "Polsterreiniger & Teppichreiniger mieten ab 39 €",
  "benzin-holzhaecksler": "Holzhäcksler mieten ab 90 € · Gerbstedt",
  "dreibeinleiter-plattform": "Dreibeinleiter mieten ab 30 € · Gerbstedt",
  "as-hochgrasmaeher": "Hochgrasmäher mieten ab 59 € · Gerbstedt",
  "rasentraktor-frontmaeher": "Rasentraktor & Frontmäher mieten ab 140 €",
  "akku-scheuersaugmaschine": "Scheuersaugmaschine mieten ab 95 €",
  "ferrari-rc-70hy-maehraupe": "Mähraupe mieten · Ferngesteuerter Hangmäher",
};

/** Eindeutige Meta-Descriptions je Mietgerät (~150–160 Zeichen) */
export const rentalDeviceSeoDescriptions: Record<string, string> = {
  [puzziRentalId]:
    "Polsterreiniger, Waschsauger & Teppichreiniger mieten! Kärcher Puzzi 10/1 für Sofa, Autositze, Teppiche und Matratzen. Nur 39 € pro Tag. Regional in Mansfeld-Südharz.",
  "benzin-holzhaecksler":
    "Holzhäcksler mieten in Gerbstedt: Benzin-Häcksler mit Antrieb, Äste bis 10 cm. Ab 90 €/24h, Wochenende 160 €. Green Guard GmbH, Mansfeld-Südharz.",
  "dreibeinleiter-plattform":
    "Dreibeinleiter mieten in Gerbstedt: verstellbare Leiter mit Plattform für unebenen Boden und Treppen. 30 €/24h. Green Guard GmbH, Mansfeld-Südharz.",
  "as-hochgrasmaeher":
    "Hochgrasmäher mieten in Gerbstedt: AS Mäher für Gras bis 90 cm, Wiesen und Brachflächen. 59 €/24h, Abholung in Augsdorf. Mansfeld-Südharz.",
  "rasentraktor-frontmaeher":
    "Rasentraktor mieten in Gerbstedt: Frontmäher mit 100 cm Schnittbreite für große Rasenflächen. 140 €/24h. Abholung in Augsdorf, Mansfeld-Südharz.",
  "akku-scheuersaugmaschine":
    "Scheuersaugmaschine mieten in Gerbstedt: Akku-Bodenreiniger bis 2.200 m²/h für Hallen, Lager und Gewerbe. 95 €/24h. Mansfeld-Südharz.",
  "ferrari-rc-70hy-maehraupe":
    "Mähraupe mieten in Gerbstedt: ferngesteuerter Hangmäher bis 45°, 70 cm Schnittbreite. 150 €/Tag. Abholung in Augsdorf, Mansfeld-Südharz.",
};

/** Zusätzliche Suchbegriffe je Gerät */
export const rentalDeviceSeoKeywords: Record<string, string[]> = {
  "benzin-holzhaecksler": [
    "Holzhäcksler mieten",
    "Häcksler leihen",
    "Asthäcksler mieten",
    "Gartenhäcksler mieten",
    "Holzhäcksler mieten Gerbstedt",
    "Häcksler mieten Hettstedt",
    "Benzin Häcksler mieten",
    "Holzhäcksler Mansfeld-Südharz",
    "Äste häckseln Gerät mieten",
    "Baumschnitt häckseln",
    "Häcksler mieten Sachsen-Anhalt",
    "Holzhäcksler mieten Eisleben",
  ],
  "dreibeinleiter-plattform": [
    "Dreibeinleiter mieten",
    "Leiter mieten Gerbstedt",
    "Obstbaumleiter mieten",
    "Leiter für unebenen Boden",
    "Dreibeinleiter leihen",
    "Leiter mit Plattform mieten",
    "Leiter mieten Hettstedt",
    "Gartenleiter mieten",
    "Dreibeinleiter Mansfeld-Südharz",
    "Leiter mieten Sachsen-Anhalt",
    "Leiter Treppen mieten",
    "Dreibeinleiter mieten Eisleben",
  ],
  "as-hochgrasmaeher": [
    "Hochgrasmäher mieten",
    "Wiesenmäher mieten",
    "Mäher für hohes Gras",
    "Hochgrasmäher leihen",
    "Hochgrasmäher mieten Gerbstedt",
    "Wiesenmäher Hettstedt",
    "AS Hochgrasmäher mieten",
    "Brachfläche mähen Gerät",
    "Hochgrasmäher Mansfeld-Südharz",
    "Hochgrasmäher Sachsen-Anhalt",
    "Hangmäher zu Fuß mieten",
    "Hochgrasmäher mieten Eisleben",
  ],
  "rasentraktor-frontmaeher": [
    "Rasentraktor mieten",
    "Aufsitzmäher mieten",
    "Frontmäher mieten",
    "Rasentraktor leihen",
    "Rasentraktor mieten Gerbstedt",
    "Aufsitzmäher Hettstedt",
    "Rasenmäher Traktor große Fläche",
    "Frontmäher Mansfeld-Südharz",
    "Aufsitzmäher Sachsen-Anhalt",
    "Rasentraktor mieten Eisleben",
    "Großflächenmäher mieten",
    "Rasentraktor Wochenende mieten",
  ],
  "akku-scheuersaugmaschine": [
    "Scheuersaugmaschine mieten",
    "Bodenreinigungsmaschine mieten",
    "Scheuersauger leihen",
    "Scheuersaugmaschine Gerbstedt",
    "Bodenreiniger mieten Hettstedt",
    "Lagerboden reinigen mieten",
    "Akku Scheuersaugmaschine mieten",
    "Industrieboden reinigen Gerät",
    "Scheuersaugmaschine Mansfeld-Südharz",
    "Bodenreiniger Sachsen-Anhalt",
    "Scheuersaugmaschine mieten Eisleben",
    "Gewerbeboden reinigen mieten",
  ],
  [puzziRentalId]: [
    "Polsterreiniger mieten",
    "Polsterreiniger leihen",
    "Teppichreiniger mieten",
    "Waschsauger mieten",
    "Waschsauger leihen",
    "Kärcher Waschsauger mieten",
    "Kärcher Puzzi 10/1 mieten",
    "Sprühextraktionsgerät mieten",
    "Polsterreiniger mieten Gerbstedt",
    "Waschsauger mieten Hettstedt",
    "Teppichreiniger mieten Eisleben",
    "Sofa reinigen Gerät mieten",
  ],
  "ferrari-rc-70hy-maehraupe": [
    "Mähraupe mieten",
    "Hangmäher mieten",
    "Raupenmäher mieten",
    "ferngesteuerter Mäher mieten",
    "Mähraupe mieten Gerbstedt",
    "Hangmäher mieten Hettstedt",
    "Ferrari Mähraupe mieten",
    "Böschung mähen Gerät mieten",
    "Mähraupe Mansfeld-Südharz",
    "Steilhang mähen mieten",
    "Raupenmäher Sachsen-Anhalt",
    "Mähraupe mieten Eisleben",
  ],
};

export function rentalDeviceSeoTitle(device: RentalDevice) {
  return rentalDeviceSeoTitles[device.id] ?? `${device.name} mieten · Gerbstedt`;
}

export function rentalDeviceSeoDescription(device: RentalDevice) {
  const custom = rentalDeviceSeoDescriptions[device.id];
  if (custom) return custom;
  const facts = device.facts?.slice(0, 3).join(", ");
  return `${device.name} in Gerbstedt mieten bei Green Guard GmbH. ${facts ? `${facts}. ` : ""}Mit Bild, Preis, Kaution und Anfrage für Mansfeld-Südharz.`;
}

export function rentalDeviceKeywordList(device: RentalDevice, allDevices: RentalDevice[]) {
  const specific = rentalDeviceSeoKeywords[device.id] ?? [];
  if (specific.length) return specific;
  return [
    device.name,
    `${device.name} mieten`,
    `${device.name} Gerbstedt`,
    `${device.name} Mansfeld-Südharz`,
    `${device.name} Sachsen-Anhalt`,
    ...specific,
    ...rentalSeoKeywords(allDevices).slice(0, 3),
  ];
}

export function rentalSeoKeywords(devices: RentalDevice[]) {
  const base = [
    "Geräte mieten Gerbstedt",
    "Mietgeräte Mansfeld-Südharz",
    "Gerätemietservice Sachsen-Anhalt",
    "Geräteverleih Gerbstedt",
    "Green Guard GmbH Mietgeräte",
  ];
  return [
    ...base,
    ...devices.flatMap((device) => [
      device.name,
      `${device.name} mieten`,
      `${device.name} Gerbstedt`,
      `${device.name} Mansfeld-Südharz`,
      `${device.name} Sachsen-Anhalt`,
    ]),
  ];
}

export function priceNumber(price: string | undefined) {
  if (!price) return undefined;
  const match = price.match(/\d+(?:[,.]\d+)?/);
  return match?.[0]?.replace(",", ".");
}

export function buildRentalProductJsonLd(device: RentalDevice) {
  const pageUrl = `${siteUrl}${rentalDeviceHref(device)}`;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${pageUrl}#product`,
    name: device.name,
    image: absoluteImageUrl(device.image),
    description: rentalDeviceSeoDescription(device),
    category: "Mietgerät",
    brand: {
      "@type": "Brand",
      name: "Green Guard GmbH",
    },
    offers: {
      "@type": "Offer",
      url: `${siteUrl}${rentalContactHref(device.name)}`,
      priceCurrency: "EUR",
      ...(priceNumber(device.price) ? { price: priceNumber(device.price) } : {}),
      availability: "https://schema.org/InStock",
      businessFunction: "https://schema.org/LeaseOut",
    },
  } as const;
}

/** Mietangebot für den Puzzi 10/1: Marke Kärcher, Vermieter Green Guard */
export function buildPuzziProductJsonLd(device: RentalDevice) {
  const pageUrl = `${siteUrl}${rentalDeviceHref(device)}`;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${pageUrl}#product`,
    name: "Polsterreiniger und Teppichreiniger Kärcher Puzzi 10/1",
    image: absoluteImageUrl(device.image),
    description: rentalDeviceSeoDescription(device),
    category: "Sprühextraktionsgerät zur Miete",
    brand: { "@type": "Brand", name: "Kärcher" },
    manufacturer: { "@type": "Organization", name: "Kärcher" },
    offers: {
      "@type": "Offer",
      url: `${siteUrl}${rentalContactHref(device.name)}`,
      priceCurrency: "EUR",
      price: "39.00",
      availability: "https://schema.org/LimitedAvailability",
      businessFunction: "https://schema.org/LeaseOut",
      seller: {
        "@type": "Organization",
        name: "Green Guard GmbH",
        url: siteUrl,
      },
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "39.00",
        priceCurrency: "EUR",
        unitText: "DAY",
        valueAddedTaxIncluded: true,
      },
    },
  } as const;
}
