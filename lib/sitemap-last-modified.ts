import { statSync } from "fs";
import path from "path";

const FALLBACK = new Date("2026-05-01T00:00:00.000Z");

/** Datei-Änderungszeit für Sitemap (Build-Zeit), Fallback wenn Datei fehlt */
export function lastModifiedFor(relativePath: string): Date {
  try {
    return statSync(
      path.join(/* turbopackIgnore: true */ process.cwd(), relativePath),
    ).mtime;
  } catch {
    return FALLBACK;
  }
}

/** Neuestes Datum aus mehreren Quellen (z. B. Content + Seite) */
export function latestModified(...paths: string[]): Date {
  let latest = FALLBACK.getTime();
  for (const p of paths) {
    const t = lastModifiedFor(p).getTime();
    if (t > latest) latest = t;
  }
  return new Date(latest);
}

/** Startseite & Kernseiten – gemeinsames Basis-Datum */
export const sitemapDates = {
  home: lastModifiedFor("app/page.tsx"),
  staticPages: latestModified("app/layout.tsx", "lib/site.ts"),
  dienstleistungen: latestModified("app/dienstleistungen/page.tsx", "lib/services.ts"),
  service: (slug: string) =>
    latestModified(`app/dienstleistungen/[slug]/page.tsx`, "lib/service-pages.ts", "lib/services.ts"),
  einsatzgebietHub: latestModified("app/einsatzgebiet/page.tsx", "lib/local-seo.ts"),
  einsatzgebiet: (slug: string) =>
    latestModified("app/einsatzgebiet/[slug]/page.tsx", "lib/local-seo.ts"),
  mietenHub: latestModified("app/mieten/page.tsx", "content/rental-devices.json"),
  mietenDevice: () => latestModified("content/rental-devices.json", "app/mieten/[slug]/page.tsx"),
  legal: latestModified("app/impressum/page.tsx", "app/datenschutz/page.tsx"),
} as const;
