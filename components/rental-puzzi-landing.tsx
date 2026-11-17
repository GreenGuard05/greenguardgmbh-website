import Link from "next/link";
import { InnerPageBand } from "@/components/inner-page-hero";
import {
  RentalAreaSentence,
  RentalBulletList,
  RentalDeviceShell,
} from "@/components/rental-device-layout";
import type { RentalDevice } from "@/lib/rental-devices";
import type { RentalFaq } from "@/lib/rental-faqs";
import { puzziImageAlt } from "@/lib/rental-seo";

type JsonLd = object;

type Props = {
  device: RentalDevice;
  productJsonLd: JsonLd;
  breadcrumbLd: JsonLd;
  faqs: RentalFaq[];
  faqJsonLd: JsonLd | null;
};

const useCases = [
  {
    title: "Sofa, Couch und Polstermöbel reinigen",
    text: "Alltägliche Gebrauchsspuren, Staub in den Fasern und viele Flecken sitzen tiefer, als ein normaler Staubsauger sie erreicht. Mit der Polsterdüse bringen Sie die Reinigungslösung ins Gewebe und saugen den gelösten Schmutz wieder ab. So frischen Sie textile Sofas, Ecksofas, Sessel, Polsterstühle, Sitzbänke und andere Wohnmöbel selbst auf. Vorher an einer verdeckten Stelle prüfen, ob der Bezug Farbe und Feuchtigkeit verträgt.",
    items: ["Sofas und Couchgarnituren", "Ecksofas", "Sessel", "Polsterstühle", "Sitzbänke", "Textile Wohnmöbel"],
  },
  {
    title: "Autositze und Fahrzeuginnenräume reinigen",
    text: "Für die private Fahrzeugaufbereitung reicht oft ein Tag. Stoffsitze, textile Tür- und Kofferraumverkleidungen, Fahrzeugteppiche und Fußmatten lassen sich mit der Polsterdüse gezielt behandeln. Auch Sitzpolster von Transportern mit Stoffbezug gehören dazu. Ledersitze nicht mit diesem Verfahren reinigen. Wenig Flüssigkeit verwenden und Elektronik, Gurte und Schalter nicht durchnässen.",
    items: [
      "Autositze aus Stoff",
      "Textile Türverkleidungen",
      "Textile Kofferraumverkleidungen",
      "Fahrzeugteppiche",
      "Fußmatten",
      "Sitzpolster von Transportern",
    ],
  },
  {
    title: "Teppiche und Teppichböden reinigen",
    text: "Mit der Teppichbodendüse arbeiten Sie über Wohnzimmerteppiche, Läufer und textile Bodenbeläge. Die Sprühextraktion löst den Schmutz aus dem Flor und saugt ihn ab, statt ihn nur an der Oberfläche zu verschieben. Die Flächenleistung von etwa 20 bis 25 m² pro Stunde passt zu kleineren und mittleren Teppichflächen.",
    items: ["Wohnzimmerteppiche", "Läufer", "Teppichböden", "Textile Bodenbeläge", "Kleinere und mittlere Teppichflächen"],
  },
  {
    title: "Matratzen und textile Schlafoberflächen reinigen",
    text: "Geeignete textile Matratzenoberflächen können Sie auffrischen, wenn der Bezug feucht gereinigt werden darf. Arbeiten Sie sparsam und saugen Sie die Flüssigkeit gründlich zurück. Anschließend muss die Matratze vollständig trocknen und gelüftet werden, bevor sie wieder bezogen wird. Ein wasserempfindlicher Kern oder ein dichter Bezug, der Feuchtigkeit einschließt, ist dafür nicht geeignet.",
    items: ["Textile Matratzenoberflächen", "Bezüge, die Feuchtreinigung vertragen", "Gründliche Trocknung danach"],
  },
] as const;

const moreUses = [
  "Bürostühle",
  "Polsterstühle",
  "Sitzmöbel",
  "Wohnmobilpolster",
  "Wohnwagensitze",
  "Textile Sitzflächen",
  "Weitere geeignete Textiloberflächen",
];

const steps = [
  {
    title: "Reinigungslösung aufbringen",
    text: "Das Sprühextraktionsgerät bringt eine geeignete, schaumarme Lösung direkt auf die textile Oberfläche.",
  },
  {
    title: "Schmutz aus den Fasern lösen",
    text: "Die Flüssigkeit wirkt im Gewebe und löst tief sitzende Verschmutzungen, Gebrauchsspuren und viele Flecken.",
  },
  {
    title: "Zusammen mit dem Schmutz absaugen",
    text: "Anschließend wird die Flüssigkeit samt gelöstem Schmutz wieder abgesaugt. Das ist eine Tiefenreinigung, kein normales Staubsaugen.",
  },
];

const benefits = [
  "Professionelle Kärcher-Qualität",
  "Geeignet für Polster und Teppiche",
  "Tiefenreinigung durch Sprühextraktion",
  "Separate Polster- und Teppichbodendüse",
  "10 Liter Frischwassertank",
  "9 Liter Schmutzwassertank",
  "Kompakte und mobile Bauweise",
  "Einfacher Transport, ca. 10,5 kg",
  "Elektrischer Betrieb, kein Kraftstoff",
  "Günstige Alternative zur professionellen Reinigung",
];

const specs = [
  ["Hersteller", "Kärcher Professional"],
  ["Modell", "Puzzi 10/1"],
  ["Gerätetyp", "Sprühextraktionsgerät"],
  ["Turbinenleistung", "1.250 Watt"],
  ["Pumpenleistung", "40 Watt"],
  ["Frischwassertank", "10 Liter"],
  ["Schmutzwassertank", "9 Liter"],
  ["Sprühdruck", "1 bar"],
  ["Sprühmenge", "1 Liter pro Minute"],
  ["Luftmenge", "74 l/s"],
  ["Unterdruck", "254 mbar"],
  ["Max. Flächenleistung", "20–25 m²/h"],
  ["Spannung", "220–240 V"],
  ["Kabellänge", "7,5 Meter"],
  ["Sprüh-/Saugschlauch", "2,5 Meter"],
  ["Gewicht ohne Zubehör", "ca. 10,5 kg"],
  ["Abmessungen", "690 × 325 × 440 mm"],
  ["Düsen im Mietumfang", "Teppichbodendüse und Polsterdüse"],
];

export function PuzziRentalPage({ device, productJsonLd, breadcrumbLd, faqs, faqJsonLd }: Props) {
  return (
    <RentalDeviceShell
      device={device}
      productJsonLd={productJsonLd}
      breadcrumbLd={breadcrumbLd}
      faqs={faqs}
      faqJsonLd={faqJsonLd}
      breadcrumbLabel="Polsterreiniger & Teppichreiniger"
      eyebrow="Waschsauger mieten · Gerbstedt"
      title="Polsterreiniger & Teppichreiniger mieten – Kärcher Puzzi 10/1"
      description="Sie suchen einen Waschsauger zum Mieten für Sofa, Autositze, Teppich oder Matratze? Der Kärcher Puzzi 10/1 ist ein professionelles Sprühextraktionsgerät – einsetzbar als Polsterreiniger und Teppichreiniger, für 39,00 € pro Tag bei der Green Guard GmbH in Gerbstedt OT Augsdorf."
      imageAlt={puzziImageAlt}
      imageFrameClass="bg-[#121612]"
      imageClassName="object-contain"
      primaryLabel="Jetzt Polsterreiniger mieten"
      reserveLabel="Waschsauger reservieren"
      price={{ headline: "39,00 €", note: "brutto pro Tag", compact: false }}
      deposit={{ headline: "200,00 €", note: "", compact: false }}
      faqTitle="Polsterreiniger, Teppichreiniger und Waschsauger"
      priceBandText={
        <p>
          Die Tagesmiete beträgt 39,00 € brutto. Die Kaution beträgt 200,00 €. Der Betrieb ist elektrisch, Kraftstoff
          ist nicht erforderlich. Die Miete gilt nach bestätigter Verfügbarkeit. Weitere Gebühren nennen wir nur, wenn
          wir sie vorher mit Ihnen vereinbaren.
        </p>
      }
      region={
        <>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
            Polsterreiniger und Waschsauger in Ihrer Nähe mieten
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
            <p>
              Sie suchen einen professionellen Polsterreiniger, Teppichreiniger oder Waschsauger zur Miete in Ihrer
              Nähe? Die Green Guard GmbH vermietet den Kärcher Puzzi 10/1 in Gerbstedt OT Augsdorf.
            </p>
            <p>
              <RentalAreaSentence />
            </p>
            <p>Kontaktieren Sie uns und nennen Sie den gewünschten Mietzeitraum. Wir prüfen, ob der Waschsauger frei ist.</p>
          </div>
        </>
      }
    >
        <InnerPageBand>
          <div className="max-w-3xl">
            <Link
              href="/mieten"
              className="text-sm font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-4 transition hover:text-emerald-950"
            >
              Zurück zur Mietgeräte-Übersicht
            </Link>
            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
              Professionelle Polster- und Teppichreinigung{" "}
              <span className="gg-heading-accent gg-heading-motion">einfach selbst erledigen.</span>
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
              <p>
                Sie möchten Ihr Sofa reinigen, Autositze von hartnäckigen Verschmutzungen befreien oder einen Teppich
                wieder auffrischen? Mit dem Kärcher Puzzi 10/1 mieten Sie einen leistungsstarken Polsterreiniger und
                Teppichreiniger für die gründliche Tiefenreinigung textiler Oberflächen.
              </p>
              <p>
                Der professionelle Waschsauger arbeitet mit dem Sprühextraktionsverfahren. Eine geeignete
                Reinigungslösung wird in das Textil eingebracht und anschließend zusammen mit dem gelösten Schmutz
                wieder abgesaugt. So behandeln Sie tief sitzende Verschmutzungen, alltägliche Gebrauchsspuren und viele
                Flecken gezielt. Nicht jeder Fleck geht heraus, vor allem wenn er bereits fixiert ist oder der Stoff
                keine Feuchtigkeit verträgt.
              </p>
              <p>
                Ob Couch, Sofa, Sessel, Matratze, Teppichboden oder Autositze: Mit diesem Sprühextraktionsgerät
                reinigen Sie zahlreiche textile Oberflächen selbst. So sparen Sie die Kosten einer professionellen
                Polsterreinigung und erledigen die Arbeit an einem Tag. Bei der Green Guard GmbH kostet der
                Polster- und Teppichreiniger 39,00 € brutto pro Tag.
              </p>
            </div>
          </div>
        </InnerPageBand>

        <InnerPageBand className="border-t border-zinc-200/70">
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
            Wofür Sie den <span className="gg-heading-accent gg-heading-motion">Polsterreiniger</span> einsetzen
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            Die meisten suchen nicht nach der Typenbezeichnung, sondern nach einer Lösung: Couch reinigen, Flecken aus
            dem Teppich holen oder den Autoinnenraum selbst aufbereiten. Der Puzzi 10/1 deckt diese textilen Flächen ab.
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {useCases.map((useCase) => (
              <article
                key={useCase.title}
                className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-md shadow-zinc-900/5"
              >
                <h3 className="text-xl font-bold leading-snug text-zinc-900">{useCase.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{useCase.text}</p>
                <RentalBulletList items={useCase.items} />
              </article>
            ))}
          </div>
          <div className="mt-5 rounded-3xl border border-zinc-200 bg-zinc-50/80 p-6">
            <h3 className="text-xl font-bold text-zinc-900">Weitere Anwendungen</h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              Dieselbe Polsterdüse eignet sich für weitere textile Sitzflächen, solange das Material feucht gereinigt
              werden darf: Bürostühle, Wohnmobilpolster und Wohnwagensitze zum Beispiel. Hartböden reinigen Sie damit
              nicht. Dafür gibt es in unserem Verleih eine eigene{" "}
              <Link
                href="/mieten/akku-scheuersaugmaschine"
                className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-950"
              >
                Scheuersaugmaschine
              </Link>
              .
            </p>
            <RentalBulletList items={moreUses} />
          </div>
        </InnerPageBand>

        <InnerPageBand className="border-t border-zinc-200/70">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
                Wie funktioniert ein Polsterreiniger beziehungsweise Waschsauger?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                Ein Sprühextraktionsreiniger ist kein Staubsauger mit Wassertank. Er reinigt in der Faser und saugt die
                Schmutzflotte zurück. Die Rücksaugung reduziert die verbleibende Feuchtigkeit. Wie lange die Fläche
                danach trocknet, hängt vom Material, von der Flüssigkeitsmenge und von der Belüftung ab.
              </p>
            </div>
            <ol className="grid gap-4">
              {steps.map((step, index) => (
                <li key={step.title} className="flex gap-4 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#70a340] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <span>
                    <span className="block font-bold text-zinc-900">{step.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-zinc-600">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </InnerPageBand>

        <InnerPageBand className="border-t border-zinc-200/70">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
            Vorteile des Kärcher Puzzi 10/1
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-[#f4faef] px-4 py-3 text-sm font-semibold text-emerald-950"
              >
                <span className="mt-0.5 text-[#2f6f1f]" aria-hidden>
                  ✓
                </span>
                {benefit}
              </li>
            ))}
          </ul>
        </InnerPageBand>

        <InnerPageBand className="border-t border-zinc-200/70">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">Technische Daten</h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            Die Werte entsprechen den Herstellerangaben zum Kärcher Puzzi 10/1. Am Mietgerät gilt das Typenschild, falls
            eine Angabe davon abweicht.
          </p>
          <dl className="mt-8 grid overflow-hidden rounded-3xl border border-zinc-200 bg-white sm:grid-cols-2">
            {specs.map(([label, value]) => (
              <div key={label} className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-3 border-b border-zinc-100 px-4 py-3 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0">
                <dt className="text-sm font-semibold text-zinc-500">{label}</dt>
                <dd className="text-sm font-bold text-zinc-900">{value}</dd>
              </div>
            ))}
          </dl>
        </InnerPageBand>
    </RentalDeviceShell>
  );
}
