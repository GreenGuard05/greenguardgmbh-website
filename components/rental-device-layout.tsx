import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CtaOutlineLink } from "@/components/cta-outline-link";
import { CtaPrimary } from "@/components/cta-primary";
import { InnerPageBand, InnerPageHero, InnerPagePhoneLink, InnerPageRoot } from "@/components/inner-page-hero";
import { LocalAreasSection } from "@/components/local-areas-section";
import { PageBreadcrumbs } from "@/components/page-breadcrumbs";
import { ServiceFaqSection } from "@/components/service-faq-section";
import type { RentalDevice } from "@/lib/rental-devices";
import type { RentalFaq } from "@/lib/rental-faqs";
import { rentalPageCopy } from "@/lib/rental-page-copy";
import { rentalContactHref } from "@/lib/rental-seo";

type JsonLd = object;

export type RentalMoney = {
  headline: string;
  note: string;
  compact: boolean;
};

const rentalSteps = [
  {
    title: "Gerät und Zeitraum nennen",
    text: "Sie sagen uns, welches Gerät benötigt wird, wo es eingesetzt wird und für welchen Zeitraum.",
  },
  {
    title: "Verfügbarkeit prüfen",
    text: "Wir prüfen den Bestand, beraten zum passenden Gerät und klären Zubehör oder Alternativen.",
  },
  {
    title: "Übergabe mit Einweisung",
    text: "Das Gerät wird gepflegt übergeben. Sie erhalten eine kurze, verständliche Einweisung zur Nutzung.",
  },
  {
    title: "Rückgabe und Kontrolle",
    text: "Nach der Nutzung prüfen wir Zustand und Zubehör. Bei Folgeeinsätzen planen wir direkt weiter.",
  },
];

export function rentalMoney(value: string | undefined, fallback: string): RentalMoney {
  if (!value?.trim()) return { headline: fallback, note: "", compact: false };
  const match = value.match(/(\d+(?:[.,]\d+)?)/);
  if (!match || value.length > 36) return { headline: value, note: "", compact: true };
  const normalized = match[1].replace(".", ",");
  const [whole, frac = "00"] = normalized.split(",");
  const note = value
    .replace(match[1], "")
    .replace(/EUR/gi, "")
    .replace(/€/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^[,·\-–/]+/, "")
    .trim();
  return {
    headline: `${whole},${frac.padEnd(2, "0").slice(0, 2)} €`,
    note,
    compact: false,
  };
}

export function RentalInquiryActions({
  deviceName,
  onDark = false,
  primaryLabel,
  reserveLabel,
}: {
  deviceName: string;
  onDark?: boolean;
  primaryLabel: string;
  reserveLabel: string;
}) {
  const href = rentalContactHref(deviceName);
  return (
    <>
      <CtaPrimary href={href}>{primaryLabel}</CtaPrimary>
      {onDark ? (
        <Link
          href={href}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/15"
        >
          {reserveLabel}
        </Link>
      ) : (
        <CtaOutlineLink href={href}>{reserveLabel}</CtaOutlineLink>
      )}
      <Link
        href={href}
        className={
          onDark
            ? "inline-flex items-center justify-center rounded-full px-2 py-3 text-sm font-bold text-[#c8e6a0] underline decoration-[#c8e6a0]/40 underline-offset-4"
            : "inline-flex items-center justify-center rounded-full px-2 py-3 text-sm font-bold text-emerald-900 underline decoration-emerald-300 underline-offset-4"
        }
      >
        Verfügbarkeit anfragen
      </Link>
    </>
  );
}

function MoneyCard({
  label,
  money,
  tone,
}: {
  label: string;
  money: RentalMoney;
  tone: "green" | "glass" | "muted";
}) {
  const toneClass =
    tone === "green"
      ? "bg-[#70a340] text-white shadow-lg shadow-black/20"
      : tone === "glass"
        ? "border border-white/15 bg-white/10 text-white"
        : "bg-white/10 text-white ring-1 ring-white/15";
  const labelClass = tone === "green" ? "text-white/80" : "text-white/70";
  return (
    <div className={`rounded-2xl px-4 py-3 ${toneClass}`}>
      <p className={`text-[10px] font-bold uppercase tracking-[0.16em] ${labelClass}`}>{label}</p>
      <p className={money.compact ? "mt-1 text-sm font-bold leading-snug" : "mt-1 text-2xl font-bold leading-none"}>
        {money.headline}
      </p>
      {money.note ? <p className={`mt-1 text-xs ${labelClass}`}>{money.note}</p> : null}
    </div>
  );
}

export function RentalBulletList({ items }: { items: readonly string[] }) {
  if (!items.length) return null;
  return (
    <ul className="mt-4 grid gap-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2 text-sm leading-relaxed text-zinc-700">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#70a340]" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function RentalAreaSentence() {
  const linkClass = "font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4";
  return (
    <>
      Das Angebot richtet sich an Privatpersonen und Gewerbekunden aus{" "}
      <Link href="/einsatzgebiet/gerbstedt" className={linkClass}>
        Gerbstedt
      </Link>
      ,{" "}
      <Link href="/einsatzgebiet/hettstedt" className={linkClass}>
        Hettstedt
      </Link>
      ,{" "}
      <Link href="/einsatzgebiet/eisleben" className={linkClass}>
        Lutherstadt Eisleben
      </Link>
      ,{" "}
      <Link href="/einsatzgebiet/mansfeld" className={linkClass}>
        Mansfeld
      </Link>
      , Helbra, Klostermansfeld und der umliegenden Region{" "}
      <Link href="/einsatzgebiet/mansfeld-suedharz" className={linkClass}>
        Mansfeld-Südharz
      </Link>
      . Eine Filiale in diesen Orten gibt es nicht. Sie holen das Gerät in Gerbstedt ab oder fragen eine Anlieferung
      zum gewünschten Termin an.
    </>
  );
}

type ShellProps = {
  device: RentalDevice;
  productJsonLd: JsonLd;
  breadcrumbLd: JsonLd;
  faqs: RentalFaq[];
  faqJsonLd: JsonLd | null;
  breadcrumbLabel: string;
  eyebrow: string;
  title: string;
  description: ReactNode;
  imageAlt: string;
  imageFrameClass?: string;
  imageClassName?: string;
  primaryLabel: string;
  reserveLabel: string;
  price: RentalMoney;
  deposit: RentalMoney;
  priceBandText: ReactNode;
  faqTitle: string;
  region: ReactNode;
  children: ReactNode;
};

export function RentalDeviceShell({
  device,
  productJsonLd,
  breadcrumbLd,
  faqs,
  faqJsonLd,
  breadcrumbLabel,
  eyebrow,
  title,
  description,
  imageAlt,
  imageFrameClass = "bg-white",
  imageClassName = "object-contain p-3",
  primaryLabel,
  reserveLabel,
  price,
  deposit,
  priceBandText,
  faqTitle,
  region,
  children,
}: ShellProps) {
  const depositCard: RentalMoney = { ...deposit, note: "" };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {faqJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      ) : null}
      <InnerPageRoot>
        <PageBreadcrumbs
          className="mx-auto max-w-6xl px-4 pb-2 pt-1 sm:px-6"
          items={[
            { label: "Startseite", href: "/" },
            { label: "Geräte mieten", href: "/mieten" },
            { label: breadcrumbLabel },
          ]}
        />
        <InnerPageHero
          eyebrow={eyebrow}
          title={title}
          description={description}
          tone="dark"
          actions={
            <div className="flex flex-col gap-5">
              <div className="flex flex-wrap gap-3">
                <MoneyCard label="Mietpreis" money={price} tone="green" />
                <MoneyCard label="Kaution" money={depositCard} tone="glass" />
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <RentalInquiryActions
                  deviceName={device.name}
                  onDark
                  primaryLabel={primaryLabel}
                  reserveLabel={reserveLabel}
                />
                <InnerPagePhoneLink variant="dark" />
              </div>
            </div>
          }
          aside={
            device.image ? (
              <a
                href={device.image}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative block h-64 w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/15 sm:h-72 lg:aspect-[3/2] lg:h-auto ${imageFrameClass}`}
              >
                <Image
                  src={device.image}
                  alt={imageAlt}
                  fill
                  className={imageClassName}
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
                <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-zinc-900 shadow-sm">
                  Bild öffnen
                </span>
              </a>
            ) : null
          }
        />

        {children}

        <InnerPageBand className="border-t border-zinc-200/70">
          <div className="grid gap-8 rounded-3xl bg-gradient-to-br from-[#1a1f1a] to-[#243024] p-6 text-white shadow-xl sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold leading-tight">Mietpreis und Kaution</h2>
              <div className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300 sm:text-base">{priceBandText}</div>
              <div className="mt-6 flex flex-wrap gap-3">
                <CtaPrimary href={rentalContactHref(device.name)}>{primaryLabel}</CtaPrimary>
                <InnerPagePhoneLink variant="dark" />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:w-80 lg:grid-cols-1">
              <div className="rounded-2xl bg-[#70a340] p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">Mietpreis</p>
                <p className={price.compact ? "mt-1 text-base font-bold leading-snug" : "mt-1 text-3xl font-bold"}>
                  {price.headline}
                </p>
                {price.note ? <p className="mt-1 text-sm text-white/80">{price.note}</p> : null}
              </div>
              <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/70">Kaution</p>
                <p className={deposit.compact ? "mt-1 text-base font-bold leading-snug" : "mt-1 text-3xl font-bold"}>
                  {deposit.headline}
                </p>
                {depositCard.note ? <p className="mt-1 text-sm text-white/70">{depositCard.note}</p> : null}
              </div>
            </div>
          </div>
        </InnerPageBand>

        {faqs.length ? (
          <InnerPageBand className="border-t border-zinc-200/70">
            <ServiceFaqSection title={faqTitle} faqs={faqs} />
          </InnerPageBand>
        ) : null}

        <InnerPageBand className="border-t border-zinc-200/70">
          <div className="max-w-3xl">
            {region}
            <div className="mt-7 flex flex-wrap gap-3">
              <CtaPrimary href={rentalContactHref(device.name)}>Verfügbarkeit anfragen</CtaPrimary>
              <CtaOutlineLink href="/mieten">Alle Mietgeräte</CtaOutlineLink>
            </div>
          </div>
        </InnerPageBand>

        <InnerPageBand footerBlend className="border-t border-zinc-200/70">
          <LocalAreasSection />
        </InnerPageBand>
      </InnerPageRoot>
    </>
  );
}

export function StandardRentalPage({
  device,
  productJsonLd,
  breadcrumbLd,
  faqs,
  faqJsonLd,
}: {
  device: RentalDevice;
  productJsonLd: JsonLd;
  breadcrumbLd: JsonLd;
  faqs: RentalFaq[];
  faqJsonLd: JsonLd | null;
}) {
  const copy = rentalPageCopy[device.id];
  const price = rentalMoney(device.price, "auf Anfrage");
  const deposit = rentalMoney(device.deposit, "auf Anfrage");
  const facts = device.facts ?? [];
  const suitable = device.suitableFor ?? [];
  const unsuitable = device.notSuitableFor ?? [];
  const specs = [
    ["Mietpreis", device.price || "auf Anfrage"],
    ["Kaution", device.deposit || "auf Anfrage"],
    ["Kraftstoff / Energie", device.fuel || "siehe Übergabe"],
    ...facts.map((fact) => ["Merkmal", fact] as [string, string]),
  ];

  return (
    <RentalDeviceShell
      device={device}
      productJsonLd={productJsonLd}
      breadcrumbLd={breadcrumbLd}
      faqs={faqs}
      faqJsonLd={faqJsonLd}
      breadcrumbLabel={copy?.breadcrumb ?? device.name}
      eyebrow={copy?.eyebrow ?? "Mietgerät · Gerbstedt"}
      title={copy?.h1 ?? `${device.name} mieten`}
      description={
        copy?.hero ||
        device.description ||
        "Professionelles Mietgerät von Green Guard GmbH für Einsätze in Gerbstedt, Mansfeld-Südharz und Umgebung."
      }
      imageAlt={copy?.imageAlt ?? `${device.name} mieten bei Green Guard GmbH in Gerbstedt`}
      primaryLabel="Jetzt Gerät mieten"
      reserveLabel="Gerät reservieren"
      price={price}
      deposit={deposit}
      faqTitle={copy?.faqTitle ?? device.name}
      priceBandText={
        <p>
          {device.price ? <>Mietpreis: {device.price}. </> : null}
          {device.deposit ? <>Die Kaution beträgt {deposit.compact ? device.deposit : deposit.headline}. </> : null}
          {device.fuel ? <>Betrieb: {device.fuel}. </> : null}
          Die Miete gilt nach bestätigter Verfügbarkeit. Weitere Gebühren nennen wir nur, wenn wir sie vorher mit
          Ihnen vereinbaren.
        </p>
      }
      region={
        <>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
            {copy?.regionTitle ?? `${device.name} in Ihrer Nähe mieten`}
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
            <p>
              {copy?.regionLead ??
                `Sie suchen dieses Mietgerät in Ihrer Nähe? Die Green Guard GmbH stellt ${device.name} in Gerbstedt OT Augsdorf zur Miete bereit.`}
            </p>
            <p>
              <RentalAreaSentence />
            </p>
            <p>Kontaktieren Sie uns und nennen Sie den gewünschten Mietzeitraum. Wir prüfen, ob das Gerät frei ist.</p>
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
            {copy ? (
              <>
                {copy.introTitle} <span className="gg-heading-accent gg-heading-motion">{copy.introAccent}</span>
              </>
            ) : (
              <>
                {device.name} für Einsätze in{" "}
                <span className="gg-heading-accent gg-heading-motion">Gerbstedt und Mansfeld-Südharz.</span>
              </>
            )}
          </h2>
          <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
            {copy ? (
              copy.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)
            ) : (
              <>
                {device.description ? <p>{device.description}</p> : null}
                {device.details ? <p>{device.details}</p> : null}
              </>
            )}
            {copy?.related?.map((link) => (
              <p key={link.href}>
                {link.before}
                <Link
                  href={link.href}
                  className="font-semibold text-emerald-800 underline decoration-emerald-300 underline-offset-4 hover:text-emerald-950"
                >
                  {link.label}
                </Link>
                {link.after}
              </p>
            ))}
          </div>
        </div>
      </InnerPageBand>

      {suitable.length || unsuitable.length ? (
        <InnerPageBand className="border-t border-zinc-200/70">
          <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
            {copy?.useTitle ?? (
              <>
                Wofür Sie <span className="gg-heading-accent gg-heading-motion">das Gerät</span> einsetzen
              </>
            )}
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            {copy?.useLead ??
              "Prüfen Sie vor dem Einsatz, ob Fläche und Material zum Gerät passen. Bei der Abholung gehen wir die Nutzung kurz mit Ihnen durch."}
          </p>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {suitable.length ? (
              <article className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-md shadow-zinc-900/5">
                <h3 className="text-xl font-bold leading-snug text-zinc-900">Geeignet für</h3>
                <RentalBulletList items={suitable} />
              </article>
            ) : null}
            {unsuitable.length ? (
              <article className="rounded-3xl border border-zinc-200/80 bg-white p-6 shadow-md shadow-zinc-900/5">
                <h3 className="text-xl font-bold leading-snug text-zinc-900">Nicht geeignet für</h3>
                <RentalBulletList items={unsuitable} />
              </article>
            ) : null}
          </div>
        </InnerPageBand>
      ) : null}

      <InnerPageBand className="border-t border-zinc-200/70">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
              So läuft die Miete ab
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
              Der Ablauf ist bei allen Mietgeräten gleich. Sie müssen keine lange Liste ausfüllen. Wir melden uns
              persönlich, ob das Gerät zum Einsatz passt.
            </p>
          </div>
          <ol className="grid gap-4">
            {rentalSteps.map((step, index) => (
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

      {facts.length ? (
        <InnerPageBand className="border-t border-zinc-200/70">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
            Das ist an diesem Gerät wichtig
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {facts.map((fact) => (
              <li
                key={fact}
                className="flex items-start gap-3 rounded-2xl border border-emerald-100 bg-[#f4faef] px-4 py-3 text-sm font-semibold text-emerald-950"
              >
                <span className="mt-0.5 text-[#2f6f1f]" aria-hidden>
                  ✓
                </span>
                {fact}
              </li>
            ))}
          </ul>
        </InnerPageBand>
      ) : null}

      <InnerPageBand className="border-t border-zinc-200/70">
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-4xl">
          Mietkonditionen und Angaben
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base">
          Preise und Kaution gelten für dieses Mietgerät. Die Verfügbarkeit bestätigen wir nach Ihrer Anfrage.
        </p>
        <dl className="mt-8 grid overflow-hidden rounded-3xl border border-zinc-200 bg-white sm:grid-cols-2">
          {specs.map(([label, value], index) => (
            <div
              key={`${label}-${value}-${index}`}
              className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-3 border-b border-zinc-100 px-4 py-3 last:border-b-0 sm:[&:nth-last-child(-n+2)]:border-b-0"
            >
              <dt className="text-sm font-semibold text-zinc-500">{label}</dt>
              <dd className="text-sm font-bold text-zinc-900">{value}</dd>
            </div>
          ))}
        </dl>
      </InnerPageBand>
    </RentalDeviceShell>
  );
}
