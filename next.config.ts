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
      {
        source: "/index.html",
        destination: "/",
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
