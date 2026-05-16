import type { MetadataRoute } from "next";
import { localAreas } from "@/lib/local-seo";
import { getRentalDevices } from "@/lib/rental-devices.server";
import { services } from "@/lib/services";
import { siteUrl } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const rentalDevices = await getRentalDevices();

  const staticPaths = [
    "",
    "/dienstleistungen",
    "/kontakt",
    "/ueber-uns",
    "/mieten",
    "/einsatzgebiet",
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

  for (const area of localAreas) {
    entries.push({
      url: `${siteUrl}/einsatzgebiet/${area.slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.78,
    });
  }

  for (const device of rentalDevices) {
    entries.push({
      url: `${siteUrl}/mieten/${device.id}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.72,
    });
  }

  return entries;
}
