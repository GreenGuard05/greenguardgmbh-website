import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { OrganizationJsonLd } from "@/components/organization-json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { coreLocalSeoKeywords } from "@/lib/local-seo";
import { getResolvedSiteMedia } from "@/lib/site-media.server";
import { homeDescription, siteUrl } from "@/lib/seo";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const media = await getResolvedSiteMedia();
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${site.name} | ${site.tagline}`,
      template: `%s | ${site.name}`,
    },
    description: homeDescription,
    applicationName: site.name,
    authors: [{ name: site.name, url: siteUrl }],
    creator: site.name,
    publisher: site.name,
    category: "business",
    icons: {
      icon: [
        { url: "/branding/green-guard-favicon-48.png", sizes: "48x48", type: "image/png" },
        { url: "/branding/green-guard-favicon.png", type: "image/png" },
      ],
      apple: [{ url: "/branding/green-guard-apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
    keywords: [
      ...coreLocalSeoKeywords,
      "Facility Management Gerbstedt",
      "Grünanlagenpflege Sachsen-Anhalt",
      "Winterdienst Gerbstedt",
      "Hausmeisterservice Mansfeld-Südharz",
      "Green Guard GmbH",
    ],
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "de_DE",
      url: siteUrl,
      siteName: site.name,
      title: `${site.name} | ${site.tagline}`,
      description: homeDescription,
      images: [
        {
          url: media.heroSide,
          width: 1600,
          height: 1000,
          alt: `${site.name} – ${site.brandSlogan}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} | ${site.tagline}`,
      description: homeDescription,
      images: [media.heroSide],
    },
    formatDetection: {
      telephone: true,
      email: true,
      address: true,
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <a href="#main-content" className="gg-skip-link">
          Zum Hauptinhalt springen
        </a>
        <OrganizationJsonLd />
        <SiteHeader />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
