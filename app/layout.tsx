import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { OrganizationJsonLd } from "@/components/organization-json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
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

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#70a340" },
    { media: "(prefers-color-scheme: dark)", color: "#2b2b2b" },
  ],
};

export async function generateMetadata(): Promise<Metadata> {
  const googleVerification = process.env.GOOGLE_SITE_VERIFICATION?.trim();

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
        { url: "/branding/green-guard-favicon.svg", type: "image/svg+xml" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: [{ url: "/branding/green-guard-favicon.svg", type: "image/svg+xml" }],
    },
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
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
      /* Vorschaubild: app/opengraph-image.tsx (selbst gehostet – WhatsApp/Facebook laden keine Pexels-URLs zuverlässig) */
    },
    twitter: {
      card: "summary_large_image",
      title: `${site.name} | ${site.tagline}`,
      description: homeDescription,
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
        <main
          id="main-content"
          className="overflow-x-hidden overflow-y-clip [&>:last-child]:mb-0"
          tabIndex={-1}
        >
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
