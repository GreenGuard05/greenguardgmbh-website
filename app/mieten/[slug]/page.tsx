import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaPrimary } from "@/components/cta-primary";
import { InnerPageBand, InnerPageHero, InnerPagePhoneLink, InnerPageRoot } from "@/components/inner-page-hero";
import { LocalAreasSection } from "@/components/local-areas-section";
import { getRentalDevices } from "@/lib/rental-devices.server";
import {
  absoluteImageUrl,
  buildRentalProductJsonLd,
  rentalContactHref,
  rentalDeviceSeoDescription,
  rentalSeoKeywords,
} from "@/lib/rental-seo";
import { PageBreadcrumbs } from "@/components/page-breadcrumbs";
import { buildBreadcrumbJsonLd, createPageMetadata, focusKeywords, siteUrl } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const devices = await getRentalDevices();
  return devices.map((device) => ({ slug: device.id }));
}

async function getDevice(slug: string) {
  const devices = await getRentalDevices();
  return devices.find((device) => device.id === slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const device = await getDevice(slug);
  if (!device) return { title: "Mietgerät" };
  const devices = await getRentalDevices();

  return createPageMetadata({
    title: `${device.name} mieten · Gerbstedt`,
    description: rentalDeviceSeoDescription(device),
    path: `/mieten/${device.id}`,
    keywords: focusKeywords(
      [
        device.name,
        `${device.name} mieten`,
        `${device.name} Gerbstedt`,
        `${device.name} Sachsen-Anhalt`,
      ],
      rentalSeoKeywords(devices).slice(0, 4),
    ),
    ogImage: absoluteImageUrl(device.image),
    ogImageAlt: `${device.name} mieten bei Green Guard GmbH`,
  });
}

function DeviceList({ title, items }: { title: string; items: string[] }) {
  if (!items.length) return null;

  return (
    <div className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5">
      <h2 className="text-base font-bold text-zinc-900">{title}</h2>
      <ul className="mt-3 grid gap-2">
        {items.map((item) => (
          <li key={item} className="flex gap-2 text-sm leading-relaxed text-zinc-700">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#70a340]" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function RentalDevicePage({ params }: Props) {
  const { slug } = await params;
  const device = await getDevice(slug);
  if (!device) notFound();

  const productJsonLd = buildRentalProductJsonLd(device);
  const pageUrl = `${siteUrl}/mieten/${device.id}`;
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Startseite", item: siteUrl },
    { name: "Geräte mieten", item: `${siteUrl}/mieten` },
    { name: device.name, item: pageUrl },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <InnerPageRoot>
        <PageBreadcrumbs
          variant="dark"
          className="mx-auto max-w-6xl px-4 pb-2 pt-1 sm:px-6"
          items={[
            { label: "Startseite", href: "/" },
            { label: "Geräte mieten", href: "/mieten" },
            { label: device.name },
          ]}
        />
        <InnerPageHero
          eyebrow="Mietgerät · Gerbstedt"
          heroTitle={{
            prefix: "Jetzt",
            accent: device.name,
            suffix: "mieten.",
          }}
          description={
            device.description ||
            "Professionelles Mietgerät von Green Guard GmbH für Einsätze in Gerbstedt, Mansfeld-Südharz und Umgebung."
          }
          tone="dark"
          actions={
            <>
              <CtaPrimary href={rentalContactHref(device.name)}>Dieses Gerät anfragen</CtaPrimary>
              <InnerPagePhoneLink variant="dark" />
            </>
          }
          aside={
            <a
              href={device.image || "#"}
              target={device.image ? "_blank" : undefined}
              rel={device.image ? "noopener noreferrer" : undefined}
              className="relative block h-56 w-full overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/40 ring-1 ring-white/15 sm:h-64 lg:aspect-[5/4] lg:h-auto"
            >
              {device.image ? (
                <Image
                  src={device.image}
                  alt={`${device.name} mieten bei Green Guard GmbH`}
                  fill
                  className="object-contain p-3 transition duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-zinc-500">Kein Bild hinterlegt</div>
              )}
              <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wide text-zinc-900 shadow-sm ring-1 ring-white/50 backdrop-blur-sm">
                Bild öffnen
              </span>
            </a>
          }
        />

        <InnerPageBand>
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
            <div>
              <Link
                href="/mieten"
                className="text-sm font-bold text-emerald-800 underline decoration-emerald-300 underline-offset-4 transition hover:text-emerald-950"
              >
                Zurück zur Mietgeräte-Übersicht
              </Link>
              <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-zinc-900">
                {device.name} für Einsätze in{" "}
                <span className="gg-heading-accent gg-heading-motion">Gerbstedt & Mansfeld-Südharz</span>.
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                {device.description ? <p>{device.description}</p> : null}
                {device.details ? <p>{device.details}</p> : null}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <CtaPrimary href={rentalContactHref(device.name)}>Mietanfrage senden</CtaPrimary>
                <InnerPagePhoneLink />
              </div>
            </div>

            <div className="grid gap-4">
              {device.price ? (
                <div className="rounded-2xl bg-gradient-to-br from-[#70a340] to-[#2f6f1f] p-5 text-white shadow-lg shadow-emerald-900/20">
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">Mietpreis</p>
                  <p className="mt-2 text-lg font-bold leading-snug">{device.price}</p>
                </div>
              ) : null}
              <div className="grid gap-3 sm:grid-cols-2">
                {device.deposit ? (
                  <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-zinc-500">Kaution</p>
                    <p className="mt-1 text-sm font-bold text-zinc-900">{device.deposit}</p>
                  </div>
                ) : null}
                {device.fuel ? (
                  <div className="rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-wide text-zinc-500">Kraftstoff / Energie</p>
                    <p className="mt-1 text-sm font-bold text-zinc-900">{device.fuel}</p>
                  </div>
                ) : null}
              </div>
              <DeviceList title="Wichtige Fakten" items={device.facts ?? []} />
              <DeviceList title="Geeignet für" items={device.suitableFor ?? []} />
              <DeviceList title="Nicht geeignet für" items={device.notSuitableFor ?? []} />
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
