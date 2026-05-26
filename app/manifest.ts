import type { MetadataRoute } from "next";
import { homeDescription } from "@/lib/seo";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: "Green Guard",
    description: homeDescription,
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    lang: "de",
    dir: "ltr",
    background_color: "#f6faf7",
    theme_color: "#70a340",
    categories: ["business", "utilities"],
    icons: [
      {
        src: "/branding/green-guard-favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: "/branding/green-guard-favicon-48.png",
        sizes: "48x48",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/branding/green-guard-pwa-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
