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
  const names = devices.slice(0, 5).map((device) => device.name).join(", ");
  return `Mietgeräte in Gerbstedt mieten: ${names}. Preise, Kaution, Bilder und Anfrage direkt online bei Green Guard GmbH in Mansfeld-Südharz.`;
}

export function rentalDeviceSeoDescription(device: RentalDevice) {
  const facts = device.facts?.slice(0, 3).join(", ");
  return `${device.name} in Gerbstedt mieten bei Green Guard GmbH. ${facts ? `${facts}. ` : ""}Mit Bild, Preis, Kaution und Anfrage für Mansfeld-Südharz.`;
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
    description: [device.description, device.details].filter(Boolean).join(" "),
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
