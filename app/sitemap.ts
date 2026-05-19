import type { MetadataRoute } from "next";
import { localAreas } from "@/lib/local-seo";
import { getRentalDevices } from "@/lib/rental-devices.server";
import { services } from "@/lib/services";
import { siteUrl } from "@/lib/seo";
import { sitemapDates } from "@/lib/sitemap-last-modified";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const rentalDevices = await getRentalDevices();

  const staticPaths: {
    path: string;
    lastModified: Date;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }[] = [
    { path: "", lastModified: sitemapDates.home, changeFrequency: "weekly", priority: 1 },
    {
      path: "/dienstleistungen",
      lastModified: sitemapDates.dienstleistungen,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      path: "/kontakt",
      lastModified: sitemapDates.staticPages,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      path: "/ueber-uns",
      lastModified: sitemapDates.staticPages,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      path: "/mieten",
      lastModified: sitemapDates.mietenHub,
      changeFrequency: "weekly",
      priority: 0.88,
    },
    {
      path: "/einsatzgebiet",
      lastModified: sitemapDates.einsatzgebietHub,
      changeFrequency: "monthly",
      priority: 0.88,
    },
    {
      path: "/impressum",
      lastModified: sitemapDates.legal,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      path: "/datenschutz",
      lastModified: sitemapDates.legal,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map(({ path, ...rest }) => ({
    url: `${siteUrl}${path || "/"}`,
    ...rest,
  }));

  for (const s of services) {
    entries.push({
      url: `${siteUrl}/dienstleistungen/${s.slug}`,
      lastModified: sitemapDates.service(s.slug),
      changeFrequency: "monthly",
      priority: 0.75,
    });
  }

  for (const area of localAreas) {
    entries.push({
      url: `${siteUrl}/einsatzgebiet/${area.slug}`,
      lastModified: sitemapDates.einsatzgebiet(area.slug),
      changeFrequency: "monthly",
      priority: 0.78,
    });
  }

  const deviceLastModified = sitemapDates.mietenDevice();
  for (const device of rentalDevices) {
    entries.push({
      url: `${siteUrl}/mieten/${device.id}`,
      lastModified: deviceLastModified,
      changeFrequency: "monthly",
      priority: 0.72,
    });
  }

  return entries;
}
