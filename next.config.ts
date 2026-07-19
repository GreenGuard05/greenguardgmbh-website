import type { NextConfig } from "next";

/**
 * Lokaler Dev-Port: `package.json` → `next dev -p 3001` (öffentliche Webseite).
 * Eine andere App (z. B. internes Tool) kann parallel auf Port 3000 laufen.
 * Produktion (Vercel o. Ä.): Port kommt von der Plattform, nicht aus dieser Datei.
 */
const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  async redirects() {
    return [
      /** Viele Browser fragen /favicon.ico automatisch an → gleiches Marken-PNG wie im Tab (48px) */
      {
        source: "/favicon.ico",
        destination: "/branding/green-guard-favicon-48.png",
        permanent: false,
      },
      /** www → kanonische Domain ohne www (HTTPS setzt i. d. R. das Hosting) */
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.greenguard-msh.de" }],
        destination: "https://greenguard-msh.de/:path*",
        permanent: true,
      },
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      /** Alte URL ohne „ue“ (häufig von Vorgänger-Website / externen Links) */
      {
        source: "/uber-uns",
        destination: "/ueber-uns",
        permanent: true,
      },
      {
        source: "/ueber-uns.html",
        destination: "/ueber-uns",
        permanent: true,
      },
      {
        source: "/impressum.html",
        destination: "/impressum",
        permanent: true,
      },
      {
        source: "/datenschutz.html",
        destination: "/datenschutz",
        permanent: true,
      },
    ];
  },
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
