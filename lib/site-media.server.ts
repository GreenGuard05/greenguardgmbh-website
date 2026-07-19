import "server-only";

import { promises as fs } from "fs";
import path from "path";
import { unstable_cache } from "next/cache";
import {
  SITE_MEDIA_DEFAULTS,
  SITE_MEDIA_KEYS,
  type ResolvedSiteMedia,
  type SiteMediaKey,
} from "@/lib/site-media-defaults";

const FILE = path.join(process.cwd(), "content", "site-media.json");

function parseOverrides(raw: string): Partial<Record<SiteMediaKey, string>> {
  try {
    const data = JSON.parse(raw) as unknown;
    if (!data || typeof data !== "object" || Array.isArray(data)) return {};
    const out: Partial<Record<SiteMediaKey, string>> = {};
    for (const key of SITE_MEDIA_KEYS) {
      const v = (data as Record<string, unknown>)[key];
      if (typeof v === "string" && v.trim() !== "") out[key] = v.trim();
    }
    return out;
  } catch {
    return {};
  }
}

async function readMergedMedia(): Promise<ResolvedSiteMedia> {
  const base: ResolvedSiteMedia = { ...SITE_MEDIA_DEFAULTS };
  let raw = "{}";
  try {
    raw = await fs.readFile(FILE, "utf8");
  } catch {
    /* erste Installation */
  }
  const overrides = parseOverrides(raw);
  return { ...base, ...overrides };
}

/**
 * Stellt sicher, dass nach Cache-Hits alle aktuellen Keys gesetzt sind
 * (ältere Cache-Einträge können neue Slots noch nicht enthalten).
 */
function withDefaultGapsFilled(media: ResolvedSiteMedia): ResolvedSiteMedia {
  const out = { ...SITE_MEDIA_DEFAULTS };
  for (const key of SITE_MEDIA_KEYS) {
    const value = media[key];
    if (typeof value === "string" && value.trim() !== "") {
      out[key] = value.trim();
    }
  }
  return out;
}

const getCachedSiteMedia = unstable_cache(
  async (): Promise<ResolvedSiteMedia> => readMergedMedia(),
  /** v3: lokale Solar-/Böschungsbilder + Lückenfüllung nach Key-Erweiterung */
  ["site-media-v3"],
  { tags: ["site-media"] },
);

/** Für Seiten & Meta: zusammengeführte URLs (Defaults + content/site-media.json) */
export async function getResolvedSiteMedia(): Promise<ResolvedSiteMedia> {
  return withDefaultGapsFilled(await getCachedSiteMedia());
}

export async function writeSiteMediaFile(next: ResolvedSiteMedia): Promise<void> {
  await fs.mkdir(path.dirname(FILE), { recursive: true });
  const ordered: Partial<Record<SiteMediaKey, string>> = {};
  for (const key of SITE_MEDIA_KEYS) {
    if (next[key] !== SITE_MEDIA_DEFAULTS[key]) ordered[key] = next[key];
  }
  const body = Object.keys(ordered).length === 0 ? "{}\n" : JSON.stringify(ordered, null, 2) + "\n";
  await fs.writeFile(FILE, body, "utf8");
}
