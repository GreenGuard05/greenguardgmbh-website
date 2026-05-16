"use client";

import { createContext, useContext, type PointerEvent, type ReactNode } from "react";
import { ChipCheckIcon } from "@/components/chip-check-icon";
import { googleReviewCount } from "@/lib/reviews";
import { servicesForHomeGridFrom, type ServiceDetail } from "@/lib/services";
import { site } from "@/lib/site";
import { mietenHomeCardWithMedia, servicesWithMedia } from "@/lib/site-media-resolve";
import type { ResolvedSiteMedia, SiteMediaKey } from "@/lib/site-media-defaults";

export type WorkbenchTab = "home" | "ueber" | "leistungen";

/** Statische Texte wie auf der Live-Startseite (Hero-Footer) */
const HERO_STATS = [
  { label: "Jahre Erfahrung", value: "15+" },
  { label: "Kunden", value: "200+" },
  { label: "Google", value: "5.0★" },
  { label: "Winterdienst", value: "24/7" },
] as const;

const HERO_CHIPS = ["Grünanlagenpflege", "Hausmeisterservice", "Winterdienst", "Gebäudereinigung"] as const;

function previewSrc(url: string): string {
  const t = url.trim();
  if (!t) return "";
  if (t.startsWith("/")) return t;
  return t;
}

/** Bricht Browser-Cache für Admin-Vorschau (z. B. nach Speichern, gleiche URL). */
const WorkbenchPreviewRevContext = createContext(0);
const WorkbenchSelectContext = createContext<(key: SiteMediaKey) => void>(scrollFieldIntoView);

function useWorkbenchPreviewRev(): number {
  return useContext(WorkbenchPreviewRevContext);
}

function useWorkbenchSelect(): (key: SiteMediaKey) => void {
  return useContext(WorkbenchSelectContext);
}

function workbenchImageUrl(raw: string, rev: number): string {
  const s = previewSrc(raw);
  if (!s) return "";
  if (rev <= 0) return s;
  return `${s}${s.includes("?") ? "&" : "?"}_ggv=${rev}`;
}

function scrollFieldIntoView(key: SiteMediaKey) {
  document.getElementById(key)?.scrollIntoView({ behavior: "smooth", block: "center" });
}

function scrollSectionIntoView(tab: WorkbenchTab) {
  const id =
    tab === "home" ? "section-home" : tab === "ueber" ? "section-ueber" : "section-leistungen";
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

type MockSlotProps = {
  mediaKey: SiteMediaKey;
  previews: ResolvedSiteMedia;
  activeKey: SiteMediaKey | null;
  onHover: (key: SiteMediaKey | null) => void;
  className?: string;
  children?: ReactNode;
  /** Baukasten: gestrichelter Rahmen + Baustein-Leiste */
  baukasten?: boolean;
  /** `chip`: Galerie-Kacheln – kleines Label, kein gestrichelter Rahmen. `frameless`: große Panorama-Zeile wie live, Chip oben rechts. */
  baukastenVariant?: "bar" | "chip" | "frameless";
};

function MockSlot({
  mediaKey,
  previews,
  activeKey,
  onHover,
  className = "",
  children,
  baukasten = false,
  baukastenVariant = "bar",
}: MockSlotProps) {
  const active = activeKey === mediaKey;
  const rev = useWorkbenchPreviewRev();
  const selectMediaField = useWorkbenchSelect();
  const src = workbenchImageUrl(previews[mediaKey], rev);
  const handleSelect = () => selectMediaField(mediaKey);

  const shell = (() => {
    if (!baukasten) {
      return `rounded-md ${active ? "z-[1] ring-2 ring-emerald-500 ring-offset-1" : "ring-1 ring-zinc-900/15"}`;
    }
    if (baukastenVariant === "bar") {
      return `rounded-lg border-2 border-dashed ${
        active
          ? "border-emerald-500 bg-emerald-50/40 shadow-[0_0_0_3px_rgba(16,185,129,0.25)]"
          : "border-emerald-700/35 bg-white/80"
      }`;
    }
    /* chip + frameless: kein gestrichelter Kasten / kein weißes Plättchen – Foto wie auf der Website */
    return active
      ? "rounded-2xl border-0 bg-transparent ring-2 ring-inset ring-emerald-500/70"
      : "rounded-2xl border-0 bg-transparent";
  })();

  const showCornerChip = baukasten && (baukastenVariant === "chip" || baukastenVariant === "frameless");
  const chipOnRight = baukastenVariant === "frameless";

  return (
    <div
      role="button"
      tabIndex={0}
      data-media-key={mediaKey}
      className={`relative flex cursor-pointer flex-col overflow-hidden border-0 p-0 text-left outline-none ${shell} ${className}`}
      onMouseEnter={() => onHover(mediaKey)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(mediaKey)}
      onBlur={() => onHover(null)}
      onPointerUp={handleSelect}
      onClick={handleSelect}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleSelect();
        }
      }}
      title="URL-Feld auswählen"
    >
      {showCornerChip ? (
        <span
          className={`pointer-events-none absolute z-[6] max-w-[min(100%,calc(100%-8px))] truncate rounded-md bg-emerald-950/90 px-1 py-0.5 font-mono text-[6px] font-medium leading-tight text-emerald-100 shadow-sm ring-1 ring-white/25 sm:px-1.5 sm:text-[7px] ${
            chipOnRight ? "right-2 top-2 left-auto sm:right-2.5 sm:top-2.5" : "left-1 top-1 sm:left-1.5 sm:top-1.5"
          }`}
        >
          {mediaKey}
        </span>
      ) : null}
      {baukasten && baukastenVariant === "bar" ? (
        <span className="pointer-events-none absolute inset-x-0 top-0 z-[2] flex items-center justify-between gap-1 border-b border-emerald-800/20 bg-emerald-900/92 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-white sm:text-[9px]">
          <span className="flex items-center gap-0.5 opacity-90" aria-hidden>
            <span className="text-[10px] leading-none">▢</span>
            <span>Baustein</span>
          </span>
          <span className="max-w-[55%] truncate font-mono text-[7px] font-medium normal-case tracking-normal text-emerald-100 sm:text-[8px]">
            {mediaKey}
          </span>
        </span>
      ) : null}
      <div className={baukasten ? "relative flex min-h-0 flex-1 flex-col" : "relative h-full w-full"}>
        {children ?? (
          <>
            {src ? (
              /* eslint-disable-next-line @next/next/no-img-element -- Admin-Mockup */
              <img
                key={`${mediaKey}-${previews[mediaKey]}-${rev}`}
                src={src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                draggable={false}
              />
            ) : (
              <div className="absolute inset-0 bg-zinc-200" aria-hidden />
            )}
          </>
        )}
      </div>
      {!baukasten ? (
        <span className="pointer-events-none absolute bottom-0.5 left-0.5 right-0.5 truncate rounded bg-black/75 px-0.5 py-px text-center font-mono text-[7px] font-medium leading-tight text-white sm:text-[8px]">
          {mediaKey}
        </span>
      ) : null}
    </div>
  );
}

function BrowserChrome({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="rounded-xl border-2 border-zinc-500/80 bg-zinc-200/95 p-2 shadow-lg">
      <div className="mb-2 flex items-center gap-2 px-0.5">
        <span className="inline-flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/95" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/95" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/95" />
        </span>
        <span className="min-w-0 flex-1 truncate rounded-md bg-white px-2.5 py-1 font-mono text-[10px] text-zinc-700 ring-1 ring-zinc-300/90 sm:text-[11px]">
          {url}
        </span>
      </div>
      <div className="overflow-hidden rounded-lg border border-zinc-400 bg-white shadow-inner">{children}</div>
    </div>
  );
}

/** Raster-Hintergrund wie eine Bauplatte */
function BaukastenPlate({ children, onSelect }: { children: ReactNode; onSelect: (key: SiteMediaKey) => void }) {
  function handleCapture(event: PointerEvent<HTMLDivElement>) {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const slot = target.closest<HTMLElement>("[data-media-key]");
    const key = slot?.dataset.mediaKey as SiteMediaKey | undefined;
    if (key) onSelect(key);
  }

  return (
    <div
      onPointerDownCapture={handleCapture}
      className="rounded-lg p-3 sm:p-4"
      style={{
        backgroundColor: "#e4e4e7",
        backgroundImage: `
          linear-gradient(to right, rgb(161 161 170 / 0.35) 1px, transparent 1px),
          linear-gradient(to bottom, rgb(161 161 170 / 0.35) 1px, transparent 1px)
        `,
        backgroundSize: "12px 12px",
      }}
    >
      {children}
    </div>
  );
}

/**
 * Zoom: Canvas wirkt wie „echte“ Seitenbreite, optisch verkleinert (Chrome unterstützt `zoom`).
 * Fallback ohne zoom: normale Breite.
 */
function BaukastenCanvas({ children }: { children: ReactNode }) {
  return (
    <div className="max-h-[min(78vh,52rem)] overflow-auto rounded-lg ring-1 ring-zinc-400/60">
      <div className="min-w-[min(100%,920px)] origin-top p-2 sm:p-3 [zoom:0.72] sm:[zoom:0.78] lg:[zoom:0.82]">{children}</div>
    </div>
  );
}

function cardPills(tags: readonly string[]) {
  return tags.slice(0, 3);
}

function ServiceLeistungSlot({
  mediaKey,
  service,
  previews,
  activeKey,
  onHover,
  variant,
  className = "",
}: {
  mediaKey: SiteMediaKey;
  service: ServiceDetail;
  previews: ResolvedSiteMedia;
  activeKey: SiteMediaKey | null;
  onHover: (key: SiteMediaKey | null) => void;
  variant: "featured" | "standard";
  className?: string;
}) {
  const rev = useWorkbenchPreviewRev();
  const src = workbenchImageUrl(previews[mediaKey], rev);
  const pills = cardPills(service.tags);
  const featuredIntro =
    service.slug === "gruenanlage"
      ? "Professionelle Pflege von Grünflächen, Rasenmähen, Heckenschnitt und Baumpflege für Wohn- und Gewerbeobjekte."
      : service.intro;

  if (variant === "standard") {
    return (
      <MockSlot
        mediaKey={mediaKey}
        previews={previews}
        activeKey={activeKey}
        onHover={onHover}
        baukasten
        className={`group flex min-w-0 flex-col overflow-hidden !rounded-2xl border border-zinc-200/80 bg-white shadow-md shadow-zinc-900/5 ring-1 ring-white ${className}`.trim()}
      >
        <div className="relative h-44 shrink-0 sm:h-48">
          {src ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img
              key={`${mediaKey}-${previews[mediaKey]}-${rev}`}
              src={src}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
          ) : (
            <div className="absolute inset-0 bg-zinc-200" aria-hidden />
          )}
          {service.imageBadge ? (
            <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
              {service.imageBadge}
            </span>
          ) : null}
        </div>
        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-bold text-zinc-900">{service.title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{service.intro}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {pills.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700"
              >
                {tag}
              </li>
            ))}
          </ul>
          <span className="mt-4 text-sm font-semibold text-[#70a340]">Mehr erfahren →</span>
        </div>
      </MockSlot>
    );
  }

  return (
    <MockSlot
      mediaKey={mediaKey}
      previews={previews}
      activeKey={activeKey}
      onHover={onHover}
      baukasten
      className={`group relative col-span-1 min-h-[380px] overflow-hidden !rounded-2xl shadow-2xl shadow-zinc-900/15 ring-1 ring-white/15 lg:col-span-2 lg:min-h-[420px] ${className}`.trim()}
    >
      <div className="relative min-h-0 flex-1">
        {src ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={`${mediaKey}-${previews[mediaKey]}-${rev}`}
            src={src}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
          />
        ) : (
          <div className="absolute inset-0 bg-zinc-300" aria-hidden />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a8e055]">{service.eyebrow}</p>
          <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{service.title}</h3>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">{featuredIntro}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {pills.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/10 backdrop-blur-sm"
              >
                {tag}
              </li>
            ))}
          </ul>
          <span className="mt-5 inline-flex items-center text-sm font-semibold text-[#a8e055]">Mehr erfahren →</span>
        </div>
      </div>
    </MockSlot>
  );
}

function HomeWorkbenchBody({
  previews,
  activeKey,
  onHover,
}: {
  previews: ResolvedSiteMedia;
  activeKey: SiteMediaKey | null;
  onHover: (key: SiteMediaKey | null) => void;
}) {
  const rev = useWorkbenchPreviewRev();
  const resolved = servicesWithMedia(previews);
  const { row2a, strauch, gruen, haus } = servicesForHomeGridFrom(resolved);
  const mietenCard = mietenHomeCardWithMedia(previews);
  const mietenSrc = workbenchImageUrl(previews["mieten.card"], rev);

  return (
    <BrowserChrome url="https://greenguard-msh.de/">
      <MockSlot
        mediaKey="heroSide"
        previews={previews}
        activeKey={activeKey}
        onHover={onHover}
        baukasten
        className="w-full min-h-[min(100svh,560px)]"
      >
        <div className="relative flex min-h-[min(100svh,560px)] flex-1 flex-col bg-black text-white">
          <div className="pointer-events-none absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              key={`heroSide-${previews.heroSide}-${rev}`}
              src={workbenchImageUrl(previews.heroSide, rev)}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/48 via-black/18 to-black/38 lg:bg-gradient-to-r lg:from-black/72 lg:via-black/22 lg:to-black/14" />
          </div>

          <div className="relative z-10 grid min-h-[min(100svh,560px)] flex-1 lg:grid-cols-2">
            <div className="relative z-10 flex flex-col justify-center px-4 pb-44 pt-28 sm:px-6 sm:pb-48 sm:pt-32 lg:pb-44 lg:pl-8 lg:pr-10 xl:pb-48">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#70a340]/20 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#e8ffdc] ring-1 ring-[#70a340]/45">
                  <span className="text-[#a8e055]" aria-hidden>
                    ●
                  </span>
                  {site.regionBadge.toUpperCase()}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-800/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white ring-1 ring-white/10">
                  <span className="text-amber-400" aria-hidden>
                    ★★★★★
                  </span>
                  <span className="pl-0.5 normal-case tracking-normal">
                    5.0 · {googleReviewCount} Bewertungen
                  </span>
                </span>
              </div>

              <h1 className="mt-8 max-w-xl text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.25rem]">
                <span className="gg-text-hero-white">Professionelles</span>
                <br />
                <span className="gg-text-green-brand">Facility</span>{" "}
                <span className="gg-text-hero-white">Management</span>
              </h1>

              <p className="gg-text-hero-muted mt-6 max-w-lg text-base leading-relaxed sm:text-lg">
                {site.name} – Ihr verlässlicher Partner für Grünanlagenpflege, Hausmeisterservice und Winterdienst in ganz
                Sachsen-Anhalt.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {HERO_CHIPS.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center gap-2 rounded-full border border-zinc-600/55 bg-zinc-900/85 px-3.5 py-2 text-xs text-zinc-100 shadow-sm backdrop-blur-sm"
                  >
                    <ChipCheckIcon className="h-4 w-4 shrink-0 text-[#28a745]" />
                    <span className="font-medium text-zinc-100">{chip}</span>
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3 pb-2 sm:pb-4">
                <span className="gg-btn-primary pointer-events-none inline-flex px-6 py-3.5 text-sm">
                  <span className="gg-btn-primary-inner">
                    <span className="gg-btn-primary-label">Kostenloses Angebot</span>
                    <span className="gg-btn-primary-arrow" aria-hidden>
                      →
                    </span>
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#70a340]/55 bg-black/40 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm">
                  <span className="text-[#a8e055]" aria-hidden>
                    ☎
                  </span>
                  {site.phone}
                </span>
              </div>
            </div>

            <div className="relative hidden min-h-[40vh] lg:block" aria-hidden />
          </div>

          <div className="relative z-30 mt-auto border-t border-white/10 bg-zinc-950/75 shadow-[0_-12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md supports-[backdrop-filter]:bg-zinc-950/55">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-6 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/10 sm:px-6 sm:py-7">
              {HERO_STATS.map((s) => (
                <div key={s.label} className="text-center sm:px-4 sm:text-left">
                  <p className="gg-text-stat-value text-2xl font-bold sm:text-3xl">{s.value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MockSlot>

      <section className="relative overflow-hidden border-t border-zinc-200/70 py-20 sm:py-24 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-100/95 via-white to-zinc-50/90"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#70a340]/25 to-transparent" aria-hidden />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
            <div className="max-w-2xl">
              <p className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
                Facility Management Sachsen-Anhalt
              </p>
              <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight text-zinc-900 sm:text-4xl md:text-[2.5rem]">
                Alle Leistungen
                <br />
                <span className="font-semibold text-zinc-500">aus einer Hand.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-zinc-600 lg:max-w-sm lg:text-right lg:text-base">
              Von Gerbstedt bis Halle (Saale) – wir betreuen Ihre Immobilien zuverlässig, termingerecht und mit klarer
              Ansprechpartner-Struktur.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-6">
            <ServiceLeistungSlot
              mediaKey="service.gruenanlage"
              service={gruen}
              previews={previews}
              activeKey={activeKey}
              onHover={onHover}
              variant="featured"
              className=""
            />
            <ServiceLeistungSlot
              mediaKey="service.hausmeisterservice"
              service={haus}
              previews={previews}
              activeKey={activeKey}
              onHover={onHover}
              variant="standard"
              className=""
            />
          </div>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3 lg:gap-6">
            {row2a.map((s) => {
              const k = `service.${s.slug}` as SiteMediaKey;
              return (
                <ServiceLeistungSlot
                  key={s.slug}
                  mediaKey={k}
                  service={s}
                  previews={previews}
                  activeKey={activeKey}
                  onHover={onHover}
                  variant="standard"
                  className=""
                />
              );
            })}
            <ServiceLeistungSlot
              mediaKey={`service.${strauch.slug}` as SiteMediaKey}
              service={strauch}
              previews={previews}
              activeKey={activeKey}
              onHover={onHover}
              variant="standard"
              className=""
            />
            <MockSlot
              mediaKey="mieten.card"
              previews={previews}
              activeKey={activeKey}
              onHover={onHover}
              baukasten
              className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-md shadow-zinc-900/5 ring-1 ring-white lg:col-span-3 lg:max-w-md lg:justify-self-start"
            >
              <div className="relative h-44 shrink-0 sm:h-48">
                {mietenSrc ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={`mieten.card-${previews["mieten.card"]}-${rev}`}
                    src={mietenSrc}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable={false}
                  />
                ) : (
                  <div className="absolute inset-0 bg-zinc-200" aria-hidden />
                )}
                <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                  {mietenCard.eyebrow}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-lg font-bold text-zinc-900">{mietenCard.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{mietenCard.intro}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {mietenCard.tags.slice(0, 3).map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 text-sm font-semibold text-[#70a340]">Mehr erfahren →</span>
              </div>
            </MockSlot>
          </div>

          <div className="mt-10 flex justify-center sm:mt-12">
            <span className="gg-btn-outline-light pointer-events-none inline-flex">
              <span>Alle Dienstleistungen ansehen</span>
              <span className="gg-btn-outline-light-arrow" aria-hidden>
                →
              </span>
            </span>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-emerald-900/10 py-20 sm:py-24 md:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-zinc-100 via-[#eef4eb] to-[#dfe8d8]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-[#70a340]/8 blur-3xl"
          aria-hidden
        />
        <div className="relative z-10 mx-auto grid max-w-6xl gap-12 px-4 sm:gap-16 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <MockSlot
              mediaKey="about.hedge"
              previews={previews}
              activeKey={activeKey}
              onHover={onHover}
              baukasten
              className="relative col-span-2 aspect-[21/9] min-h-[11rem] overflow-hidden !rounded-2xl shadow-xl ring-1 ring-zinc-900/10 sm:min-h-[14rem]"
            />
            <MockSlot
              mediaKey="about.lawn"
              previews={previews}
              activeKey={activeKey}
              onHover={onHover}
              baukasten
              className="relative aspect-square min-h-[10rem] overflow-hidden !rounded-2xl shadow-lg ring-1 ring-zinc-900/10 sm:min-h-[12rem]"
            />
            <MockSlot
              mediaKey="about.mower"
              previews={previews}
              activeKey={activeKey}
              onHover={onHover}
              baukasten
              className="relative aspect-square min-h-[10rem] overflow-hidden !rounded-2xl shadow-lg ring-1 ring-zinc-900/10 sm:min-h-[12rem]"
            >
              <div className="relative min-h-0 flex-1">
                {workbenchImageUrl(previews["about.mower"], rev) ? (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img
                    key={`about.mower-${previews["about.mower"]}-${rev}`}
                    src={workbenchImageUrl(previews["about.mower"], rev)}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable={false}
                  />
                ) : (
                  <div className="absolute inset-0 bg-zinc-200" aria-hidden />
                )}
                <div className="absolute bottom-3 left-3 right-3 rounded-lg bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <span className="flex text-amber-400" aria-hidden>
                      ★★★★★
                    </span>
                    <span className="text-xs font-semibold text-zinc-800">
                      5.0 · {googleReviewCount} Bewertungen
                    </span>
                  </div>
                </div>
              </div>
            </MockSlot>
          </div>

          <div className="lg:pl-2">
            <p className="inline-flex rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
              Über uns
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.5rem]">
              <span className="gg-text-heading-section">Ihr verlässlicher Partner für</span>
              <br />
              <span className="gg-text-green-forest">Immobilienbetreuung</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-zinc-600 sm:text-base">
              {site.name} steht für professionelles Facility Management in Gerbstedt und ganz Sachsen-Anhalt. Wir kümmern
              uns um Ihre Immobilien – zuverlässig, termingerecht und mit Leidenschaft für Details.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Über 15 Jahre Erfahrung in Sachsen-Anhalt",
                "Persönlicher Ansprechpartner für Ihr Objekt",
                "Schnelle Reaktionszeiten & flexible Termine",
                "Moderne Profi-Geräte",
                "Transparente Festpreisangebote",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <ChipCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-[#28a745]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/90 bg-white/90 px-4 py-2.5 text-sm font-medium text-zinc-800 shadow-sm">
                <span className="text-[#70a340]" aria-hidden>
                  🌿
                </span>
                Umweltfreundlich
              </span>
              <span className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/90 bg-white/90 px-4 py-2.5 text-sm font-medium text-zinc-800 shadow-sm">
                <span className="text-[#70a340]" aria-hidden>
                  ⏱
                </span>
                Zuverlässig
              </span>
            </div>
            <span className="gg-btn-black-solid pointer-events-none mt-10 inline-flex">
              Mehr über uns<span aria-hidden>→</span>
            </span>
          </div>
        </div>
      </section>
    </BrowserChrome>
  );
}

function UeberUnsWorkbenchBody({
  previews,
  activeKey,
  onHover,
}: {
  previews: ResolvedSiteMedia;
  activeKey: SiteMediaKey | null;
  onHover: (key: SiteMediaKey | null) => void;
}) {
  return (
    <BrowserChrome url="https://greenguard-msh.de/ueber-uns">
      <div className="bg-background pt-24">
        <section className="relative overflow-hidden border-b border-zinc-200/60 pb-14 pt-8 sm:pb-16 sm:pt-10">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-50/95 via-white to-[#eef4ec]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#70a340]/10 blur-3xl"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
              <div className="min-w-0">
                <p className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
                  Über uns
                </p>
                <h1 className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight text-zinc-900 sm:text-4xl md:text-[2.65rem]">
                  <span className="gg-text-heading-section">Ihr Partner für</span>{" "}
                  <span className="gg-text-green-forest">Immobilienbetreuung</span>
                </h1>
                <p className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                  Zuverlässig, termingerecht und mit Leidenschaft für Details – in Gerbstedt und ganz Sachsen-Anhalt.
                </p>
              </div>
              <MockSlot
                mediaKey="about.hero"
                previews={previews}
                activeKey={activeKey}
                onHover={onHover}
                baukasten
                className="relative aspect-[4/3] min-h-[12rem] overflow-hidden !rounded-2xl shadow-xl ring-1 ring-zinc-900/10 lg:aspect-[5/4] lg:min-h-[17rem]"
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-zinc-200/60 py-14 sm:py-16 md:py-20">
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-zinc-50/40 to-[#f0f4ee]/80"
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-900/10 bg-gradient-to-br from-zinc-50/95 via-white to-[#e4efe0] py-8 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] ring-1 ring-zinc-900/[0.04] sm:py-10 md:py-12">
              <div className="pointer-events-none absolute inset-0 gg-about-dots opacity-[0.55]" aria-hidden />
              <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#70a340]/12 blur-3xl" aria-hidden />
              <div className="pointer-events-none absolute -right-16 bottom-1/3 h-64 w-64 rounded-full bg-[#a8e055]/15 blur-3xl" aria-hidden />

              <div className="relative z-10 mx-auto max-w-6xl space-y-14 px-1 sm:space-y-16 sm:px-2 md:space-y-20">
                <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="relative col-span-2 aspect-[21/9] min-h-[10rem] overflow-hidden rounded-2xl shadow-lg ring-1 ring-zinc-900/10 sm:min-h-[12rem]">
                      <MockSlot
                        mediaKey="about.hedge"
                        previews={previews}
                        activeKey={activeKey}
                        onHover={onHover}
                        baukasten
                        className="absolute inset-0 h-full w-full !rounded-none border-0"
                      />
                      <span className="pointer-events-none absolute left-3 top-3 z-[1] rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm sm:left-4 sm:top-4">
                        Vor Ort
                      </span>
                    </div>
                    <MockSlot
                      mediaKey="about.lawn"
                      previews={previews}
                      activeKey={activeKey}
                      onHover={onHover}
                      baukasten
                      className="relative aspect-square min-h-[9rem] overflow-hidden !rounded-2xl shadow-md ring-1 ring-zinc-900/10 sm:min-h-[11rem]"
                    />
                    <MockSlot
                      mediaKey="about.mower"
                      previews={previews}
                      activeKey={activeKey}
                      onHover={onHover}
                      baukasten
                      className="relative aspect-square min-h-[9rem] overflow-hidden !rounded-2xl shadow-md ring-1 ring-zinc-900/10 sm:min-h-[11rem]"
                    />
                  </div>

                  <div className="min-w-0 space-y-10 lg:pl-1">
                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
                        <span className="text-[#70a340]" aria-hidden>
                          ❋
                        </span>
                        Kapitel 1
                      </span>
                      <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">Aus der Region – fest im Gelände</h2>
                      <p className="mt-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
                        Bei {site.name} fing alles mit echter Handarbeit an: Gehwege freimachen, Rasen sauber schneiden, Hecken
                        wieder in Form bringen. Was als verlässliche Hilfe vor Ort begann, ist heute ein eingetragenes
                        Facility-Management-Unternehmen – weiterhin mit derselben Handschrift: persönlich, pünktlich, gründlich.
                      </p>
                    </div>

                    <div>
                      <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
                        <span className="text-[#70a340]" aria-hidden>
                          ☀
                        </span>
                        Kapitel 2
                      </span>
                      <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">Warum wir jeden Morgen starten</h2>
                      <p className="mt-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
                        Grünflächen und Gebäude sind das erste, was Besucher sehen. Wir wollen, dass Sie stolz sind – und dass
                        Mieter, Kundinnen und Gäste sofort merken: Hier wird wertgeschätzt. Dafür kombinieren wir Planbarkeit
                        (feste Termine, klare Absprachen) mit dem Blick fürs Detail, den man nur hat, wenn man selbst noch mit
                        auf der Fläche steht.
                      </p>
                    </div>

                    <blockquote className="relative overflow-hidden rounded-2xl bg-zinc-950 px-6 py-8 text-white shadow-xl ring-1 ring-white/10 sm:px-8 sm:py-10">
                      <p className="relative text-lg font-medium leading-relaxed text-zinc-100 sm:text-xl">
                        Qualität ist kein Zufall – sie entsteht, wenn man das gleiche Objekt Woche für Woche so betreut, als
                        wäre es das eigene.
                      </p>
                      <footer className="relative mt-5 text-sm text-[#d4f5a8]/95">— {site.name}, Gerbstedt</footer>
                    </blockquote>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>
      </div>
    </BrowserChrome>
  );
}

function LeistungenWorkbenchBody({
  previews,
  activeKey,
  onHover,
}: {
  previews: ResolvedSiteMedia;
  activeKey: SiteMediaKey | null;
  onHover: (key: SiteMediaKey | null) => void;
}) {
  const rev = useWorkbenchPreviewRev();
  const resolved = servicesWithMedia(previews);
  return (
    <div className="space-y-4">
      {resolved.map((s) => {
        const k = `service.${s.slug}` as SiteMediaKey;
        const src = workbenchImageUrl(previews[k], rev);
        return (
          <BrowserChrome key={s.slug} url={`https://greenguard-msh.de/dienstleistungen/${s.slug}`}>
            <div className="bg-background pt-24">
              <section className="relative overflow-hidden border-b border-white/10 bg-[#1a1f1a] pb-14 pt-8 sm:pb-16 sm:pt-10">
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#121612] via-[#1e281e] to-[#243024]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#70a340]/14 blur-3xl"
                  aria-hidden
                />
                <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                  <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
                    <div className="min-w-0">
                      <p className="inline-flex rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#c8e6a0] shadow-sm backdrop-blur-sm">
                        {s.eyebrow}
                      </p>
                      <h1 className="mt-5 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl md:text-[2.5rem] md:leading-[1.08]">
                        <span>{s.title}</span>
                      </h1>
                      <div className="mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">{s.intro}</div>
                      <div className="mt-8 flex flex-wrap gap-3 pb-1 sm:pb-2">
                        <span className="gg-btn-primary pointer-events-none inline-flex px-6 py-3.5 text-sm">
                          <span className="gg-btn-primary-inner">
                            <span className="gg-btn-primary-label">Kostenloses Angebot</span>
                            <span className="gg-btn-primary-arrow" aria-hidden>
                              →
                            </span>
                          </span>
                        </span>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-black/25">
                          <svg className="text-[#a8e055]" width="18" height="18" viewBox="0 0 24 24" aria-hidden>
                            <path
                              fill="currentColor"
                              d="M6.6 10.8c1.6 3 4.6 5.9 7.6 7.6l2.5-2.5c.4-.4 1-.5 1.4-.2 1.2.6 2.5.9 3.9.9.8 0 1.4.6 1.4 1.4V20c0 .8-.6 1.4-1.4 1.4C9.9 21.4 2.6 14.1 2.6 4.4 2.6 3.6 3.2 3 4 3h2.5c.8 0 1.4.6 1.4 1.4 0 1.4.3 2.7.9 3.9.2.4.1 1-.2 1.4L6.6 10.8z"
                            />
                          </svg>
                          {site.phone}
                        </span>
                      </div>
                    </div>
                    <div className="relative min-h-[12rem] w-full min-w-0 lg:min-h-[17rem]">
                      <MockSlot
                        mediaKey={k}
                        previews={previews}
                        activeKey={activeKey}
                        onHover={onHover}
                        baukasten
                        className="relative aspect-[4/3] w-full overflow-hidden !rounded-2xl shadow-2xl shadow-black/40 ring-1 ring-white/15 lg:aspect-[5/4]"
                      >
                        <div className="relative min-h-[12rem] w-full flex-1 lg:min-h-[17rem]">
                          {src ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              key={`${k}-${previews[k]}-${rev}`}
                              src={src}
                              alt=""
                              className="absolute inset-0 h-full w-full object-cover"
                              draggable={false}
                            />
                          ) : (
                            <div className="absolute inset-0 bg-zinc-200" aria-hidden />
                          )}
                          {s.imageBadge ? (
                            <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                              {s.imageBadge}
                            </span>
                          ) : null}
                        </div>
                      </MockSlot>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </BrowserChrome>
        );
      })}
    </div>
  );
}

const TABS: { id: WorkbenchTab; label: string; hint: string }[] = [
  { id: "home", label: "Startseite", hint: "Hero, Leistungskacheln, Grün-Block" },
  { id: "ueber", label: "Über uns", hint: "Collage und Texte wie auf /ueber-uns" },
  { id: "leistungen", label: "Leistungen", hint: "Je eine Leistungsseite (Kopfbild rechts)" },
];

/**
 * Zentrale Werkbank: aktueller Seitenaufbau als Baukasten, Umschalten wie auf der echten Site.
 */
export function MediaWorkbench({
  tab,
  onTabChange,
  onSelect,
  previews,
  activeKey,
  onHover,
  cacheGeneration = 0,
}: {
  tab: WorkbenchTab;
  onTabChange: (t: WorkbenchTab) => void;
  onSelect: (key: SiteMediaKey) => void;
  previews: ResolvedSiteMedia;
  activeKey: SiteMediaKey | null;
  onHover: (key: SiteMediaKey | null) => void;
  /** Erhöhen nach Server-Reload / Speichern, damit gleiche Bild-URLs im Mockup neu geladen werden. */
  cacheGeneration?: number;
}) {
  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-wider text-zinc-500">Seiten-Werkbank</h2>
          <p className="mt-0.5 max-w-xl text-sm text-zinc-600">
            So ist die Website im Aufbau gemeint – jeder gestrichelte Baustein ist ein Bildfeld. Klick scrollt zum URL-Feld
            rechts.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 rounded-xl border border-zinc-200 bg-zinc-100/90 p-1.5 shadow-inner">
        {TABS.map((t) => (
          <button
            key={t.id}
            type="button"
            onClick={() => {
              onTabChange(t.id);
              scrollSectionIntoView(t.id);
            }}
            className={`rounded-lg px-3 py-2 text-left text-sm font-semibold transition ${
              tab === t.id ? "bg-white text-emerald-950 shadow ring-1 ring-emerald-200" : "text-zinc-600 hover:bg-white/70"
            }`}
          >
            <span className="block">{t.label}</span>
            <span className="mt-0.5 block text-[10px] font-normal text-zinc-500">{t.hint}</span>
          </button>
        ))}
      </div>

      <BaukastenPlate onSelect={onSelect}>
        <BaukastenCanvas>
          <WorkbenchSelectContext.Provider value={onSelect}>
            <WorkbenchPreviewRevContext.Provider value={cacheGeneration}>
              {tab === "home" ? (
                <HomeWorkbenchBody previews={previews} activeKey={activeKey} onHover={onHover} />
              ) : null}
              {tab === "ueber" ? (
                <UeberUnsWorkbenchBody previews={previews} activeKey={activeKey} onHover={onHover} />
              ) : null}
              {tab === "leistungen" ? (
                <LeistungenWorkbenchBody previews={previews} activeKey={activeKey} onHover={onHover} />
              ) : null}
            </WorkbenchPreviewRevContext.Provider>
          </WorkbenchSelectContext.Provider>
        </BaukastenCanvas>
      </BaukastenPlate>
    </div>
  );
}
