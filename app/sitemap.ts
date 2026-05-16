import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPaths = [
    "",
    "/dienstleistungen",
    "/kontakt",
    "/ueber-uns",
    "/mieten",
    "/impressum",
    "/datenschutz",
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path, i) => ({
    url: `${siteUrl}${path || "/"}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : i < 3 ? 0.9 : 0.6,
  }));

  for (const s of services) {
    entries.push({
      url: `${siteUrl}/dienstleistungen/${s.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  return entries;
}
