import type { ServiceDetail } from "@/lib/services";
import { buildLocalKeywordCombinations, localAreaNames } from "@/lib/local-seo";
import { focusKeywords } from "@/lib/seo";

type ServiceSeoConfig = {
  /** Meta-Titel (keyword-stärker als nur service.title) */
  title: string;
  /** Suchphrasen für Kombination mit Ortsnamen (buildLocalKeywordCombinations) */
  keywordPhrases: readonly string[];
  /** Zusätzliche Kern-Keywords für Meta-Keywords */
  coreKeywords: readonly string[];
};

const SERVICE_SEO: Record<string, ServiceSeoConfig> = {
  gruenanlage: {
    title: "Grünanlagenpflege & Gartenpflege · Sachsen-Anhalt",
    keywordPhrases: ["Grünanlagenpflege", "Gartenpflege", "Rasenpflege"],
    coreKeywords: [
      "Grünanlagenpflege Sachsen-Anhalt",
      "Gartenpflege Mansfeld-Südharz",
      "Rasenmähen Gerbstedt",
      "Heckenschnitt Halle Saale",
      "Baumpflege Sachsen-Anhalt",
    ],
  },
  hausmeisterservice: {
    title: "Hausmeisterservice & Objektbetreuung · Gerbstedt",
    keywordPhrases: ["Hausmeisterservice", "Objektbetreuung", "Objektpflege"],
    coreKeywords: [
      "Hausmeisterservice Sachsen-Anhalt",
      "Objektbetreuung Mansfeld-Südharz",
      "Hausmeister Gerbstedt",
      "Immobilienbetreuung Halle Saale",
    ],
  },
  winterdienst: {
    title: "Winterdienst & Schneeräumung · Halle & Region",
    keywordPhrases: ["Winterdienst", "Schneeräumung", "Streudienst"],
    coreKeywords: [
      "Winterdienst Halle Saale",
      "Schneeräumung Gerbstedt",
      "Räumdienst Mansfeld-Südharz",
      "Streudienst Sachsen-Anhalt",
      "Verkehrssicherungspflicht Winter",
    ],
  },
  reinigung: {
    title: "Gebäudereinigung & Treppenhausreinigung · Sachsen-Anhalt",
    keywordPhrases: ["Gebäudereinigung", "Treppenhausreinigung", "Unterhaltsreinigung"],
    coreKeywords: [
      "Gebäudereinigung Sachsen-Anhalt",
      "Treppenhausreinigung Mansfeld-Südharz",
      "Büroreinigung Gerbstedt",
      "Unterhaltsreinigung Halle Saale",
    ],
  },
  strauchpflege: {
    title: "Strauch- & Buschpflege · Formschnitt & Rückschnitt",
    keywordPhrases: ["Strauchpflege", "Buschpflege", "Heckenschnitt"],
    coreKeywords: [
      "Strauchpflege Sachsen-Anhalt",
      "Buschpflege Mansfeld-Südharz",
      "Formschnitt Gerbstedt",
      "Heckenschnitt Halle Saale",
      "Obstbaumschnitt Sachsen-Anhalt",
    ],
  },
  solarparkpflege: {
    title: "Solarparkpflege & PV-Grünunterhalt · Sachsen-Anhalt",
    keywordPhrases: ["Solarparkpflege", "PV-Grünunterhalt", "Grünflächenpflege Solarpark"],
    coreKeywords: [
      "Solarparkpflege Sachsen-Anhalt",
      "PV-Anlage Grünpflege",
      "Freiflächen-PV Pflege",
      "Grünunterhalt Photovoltaik",
    ],
  },
  boeschungspflege: {
    title: "Böschungsmähen & Hangpflege · Infrastruktur & Steilhänge",
    keywordPhrases: ["Böschungsmähen", "Böschungspflege", "Hangpflege"],
    coreKeywords: [
      "Böschungsmähen Sachsen-Anhalt",
      "Hangpflege Mansfeld-Südharz",
      "Grünpflege Infrastruktur",
      "ferngesteuerte Mähraupe",
      "Böschungspflege Bahn",
    ],
  },
};

/** Lesbarer Regionsblock für On-Page-SEO (alle Einsatzgebiete) */
export function serviceRegionListText(conjunction = "und") {
  const names = [...localAreaNames];
  if (names.length <= 1) return names[0] ?? "";
  const last = names.pop();
  return `${names.join(", ")} ${conjunction} ${last}`;
}

/** SEO-Absatz mit allen Einsatzgebieten + Leistungsdetail */
export function serviceRegionalSeoText(serviceLabel: string, detail: string) {
  return `Green Guard GmbH bietet ${serviceLabel} in ${serviceRegionListText()}. ${detail}`;
}

/** Bullet „Regional in …“ für Leistungsumfang / SEO-Block */
export function serviceRegionalBullet(suffix = "planbare Einsätze nach Absprache") {
  return `Regional in ${serviceRegionListText()} – ${suffix}`;
}

export function serviceMetadataTitle(slug: string, fallbackTitle: string) {
  return SERVICE_SEO[slug]?.title ?? `${fallbackTitle} · Gerbstedt`;
}

export function serviceMetadataKeywords(slug: string, service: ServiceDetail): string[] {
  const config = SERVICE_SEO[slug];
  const base = [service.title, `${service.title} Gerbstedt`, `${service.title} Sachsen-Anhalt`, ...service.tags];

  if (!config) {
    return focusKeywords(base, buildLocalKeywordCombinations(service.title));
  }

  return focusKeywords(
    base,
    config.coreKeywords,
    ...config.keywordPhrases.map((phrase) => buildLocalKeywordCombinations(phrase)),
  );
}

/** FAQ: Einsatzgebiete je Leistung (einheitlich für alle Services) */
export function serviceRegionalFaq(serviceLabel: string) {
  return {
    question: `In welchen Einsatzgebieten bieten Sie ${serviceLabel} an?`,
    answer: `Wir planen ${serviceLabel} in ${serviceRegionListText()} und weiteren Orten in Sachsen-Anhalt – abgestimmt auf Objekt, Umfang, Anfahrt und Kapazität.`,
  };
}

/** Kurztext für den Einsatzgebiet-Kasten auf Leistungsseiten */
export function serviceAreaSectionLead(serviceLabel: string, focus: string) {
  return `${serviceLabel} bieten wir in ${serviceRegionListText()} an. ${focus} Wählen Sie Ihr Einsatzgebiet für Details und eine unverbindliche Anfrage.`;
}
