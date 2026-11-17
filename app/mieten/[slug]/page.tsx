import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { StandardRentalPage } from "@/components/rental-device-layout";
import { PuzziRentalPage } from "@/components/rental-puzzi-landing";
import { getRentalDevices } from "@/lib/rental-devices.server";
import { rentalFaqs } from "@/lib/rental-faqs";
import { rentalPageCopy } from "@/lib/rental-page-copy";
import {
  absoluteImageUrl,
  buildPuzziProductJsonLd,
  buildRentalProductJsonLd,
  puzziImageAlt,
  puzziRentalId,
  rentalDeviceKeywordList,
  rentalDeviceSeoDescription,
  rentalDeviceSeoTitle,
} from "@/lib/rental-seo";
import { buildBreadcrumbJsonLd, buildFaqJsonLd, createPageMetadata, focusKeywords, siteUrl } from "@/lib/seo";

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
  const isPuzzi = device.id === puzziRentalId;
  const copy = rentalPageCopy[device.id];

  return createPageMetadata({
    title: rentalDeviceSeoTitle(device),
    description: rentalDeviceSeoDescription(device),
    path: `/mieten/${device.id}`,
    keywords: focusKeywords(rentalDeviceKeywordList(device, devices)),
    ogImage: absoluteImageUrl(device.image),
    ogImageAlt: isPuzzi
      ? puzziImageAlt
      : (copy?.imageAlt ?? `${device.name} mieten bei Green Guard GmbH – Gerbstedt & Mansfeld-Südharz`),
    ...(isPuzzi ? { ogImageWidth: 1024, ogImageHeight: 682 } : {}),
  });
}

export default async function RentalDevicePage({ params }: Props) {
  const { slug } = await params;
  const device = await getDevice(slug);
  if (!device) notFound();

  const isPuzzi = device.id === puzziRentalId;
  const productJsonLd = isPuzzi ? buildPuzziProductJsonLd(device) : buildRentalProductJsonLd(device);
  const faqs = rentalFaqs[device.id] ?? [];
  const faqJsonLd = faqs.length ? buildFaqJsonLd(faqs) : null;
  const pageUrl = `${siteUrl}/mieten/${device.id}`;
  const breadcrumbLd = buildBreadcrumbJsonLd([
    { name: "Startseite", item: siteUrl },
    { name: "Geräte mieten", item: `${siteUrl}/mieten` },
    { name: isPuzzi ? "Polsterreiniger & Teppichreiniger" : (rentalPageCopy[device.id]?.breadcrumb ?? device.name), item: pageUrl },
  ]);

  if (isPuzzi) {
    return (
      <PuzziRentalPage
        device={device}
        productJsonLd={productJsonLd}
        breadcrumbLd={breadcrumbLd}
        faqs={faqs}
        faqJsonLd={faqJsonLd}
      />
    );
  }

  return (
    <StandardRentalPage
      device={device}
      productJsonLd={productJsonLd}
      breadcrumbLd={breadcrumbLd}
      faqs={faqs}
      faqJsonLd={faqJsonLd}
    />
  );
}
