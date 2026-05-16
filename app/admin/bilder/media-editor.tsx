"use client";

import { useActionState, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { saveSiteMedia, type SaveMediaState } from "@/app/admin/bilder/actions";
import { MediaWorkbench, type WorkbenchTab } from "@/app/admin/bilder/media-mockups";
import {
  SITE_MEDIA_EDITOR_GROUPS,
  SITE_MEDIA_HINTS,
  SITE_MEDIA_LABELS,
  type ResolvedSiteMedia,
  type SiteMediaKey,
} from "@/lib/site-media-defaults";

const initialSave: SaveMediaState = { ok: true, message: "" };

function previewSrc(url: string): string {
  const t = url.trim();
  if (!t) return "";
  if (t.startsWith("/")) return t;
  return t;
}

/** Gleiche Cache-Logik wie in der Werkbank (`media-mockups.tsx`). */
function thumbSrc(url: string, rev: number): string {
  const s = previewSrc(url);
  if (!s) return "";
  if (rev <= 0) return s;
  return `${s}${s.includes("?") ? "&" : "?"}_ggv=${rev}`;
}

function groupSectionId(title: string): string {
  if (title === "Startseite") return "section-home";
  if (title === "Über uns") return "section-ueber";
  return "section-leistungen";
}

function tabForKey(key: SiteMediaKey): WorkbenchTab {
  if (key.startsWith("about.")) return "ueber";
  if (key.startsWith("service.")) return "leistungen";
  return "home";
}

export function MediaEditor({ initial }: { initial: ResolvedSiteMedia }) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const fieldsPanelRef = useRef<HTMLElement>(null);
  const [state, formAction, pending] = useActionState(saveSiteMedia, initialSave);
  const [previews, setPreviews] = useState<ResolvedSiteMedia>(() => ({ ...initial }));
  const previewRev = 0;
  const [loadError, setLoadError] = useState<Partial<Record<SiteMediaKey, boolean>>>({});
  const [mockupHoverKey, setMockupHoverKey] = useState<SiteMediaKey | null>(null);
  const [selectedKey, setSelectedKey] = useState<SiteMediaKey | null>(null);
  const [workbenchTab, setWorkbenchTab] = useState<WorkbenchTab>("home");
  const initialSnapshot = useMemo(() => JSON.stringify(initial), [initial]);
  const previewSnapshot = useMemo(() => JSON.stringify(previews), [previews]);
  const hasUnsavedChanges = initialSnapshot !== previewSnapshot;

  useEffect(() => {
    if (state.ok && state.message.startsWith("Gespeichert")) {
      router.refresh();
    }
  }, [router, state.message, state.ok]);

  useEffect(() => {
    if (!hasUnsavedChanges || pending) return;
    const timer = window.setTimeout(() => {
      formRef.current?.requestSubmit();
    }, 700);
    return () => window.clearTimeout(timer);
  }, [hasUnsavedChanges, pending, previewSnapshot]);

  function selectMediaField(key: SiteMediaKey) {
    setSelectedKey(key);
    setMockupHoverKey(key);
    setWorkbenchTab(tabForKey(key));
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        const quickField = document.getElementById(`quick-${key}`);
        if (quickField instanceof HTMLInputElement) {
          quickField.focus({ preventScroll: true });
          quickField.select();
        }

        const row = document.querySelector<HTMLElement>(`[data-media-row="${key}"]`);
        const field = document.getElementById(key);
        row?.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });

        if (row && fieldsPanelRef.current) {
          fieldsPanelRef.current.scrollTo({
            top: row.offsetTop - fieldsPanelRef.current.clientHeight / 2 + row.clientHeight / 2,
            behavior: "smooth",
          });
        }

        if (!quickField && field instanceof HTMLInputElement) {
          field.focus({ preventScroll: true });
          field.select();
        }
      });
    });
  }

  return (
    <form ref={formRef} action={formAction} className="space-y-8">
      <p className="text-sm text-zinc-600">
        Links die <strong className="font-semibold text-zinc-800">Werkbank</strong> (aktueller Seitenaufbau als Baukasten). Rechts die URL-Felder – Eingaben
        aktualisieren die Bausteine sofort und werden nach kurzer Pause automatisch gespeichert. Speichern schreibt{" "}
        <span className="font-mono text-xs">content/site-media.json</span>. Pfade ab Root wie{" "}
        <span className="font-mono text-zinc-500">/images/…</span> sind erlaubt; externe Domains in{" "}
        <span className="font-mono text-xs">next.config.ts</span>.
      </p>
      <p
        className={`rounded-lg px-3 py-2 text-sm ${
          pending
            ? "bg-amber-50 text-amber-900 ring-1 ring-amber-200"
            : hasUnsavedChanges
              ? "bg-blue-50 text-blue-900 ring-1 ring-blue-200"
              : "bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200"
        }`}
        role="status"
        aria-live="polite"
      >
        {pending
          ? "Änderungen werden automatisch gespeichert…"
          : hasUnsavedChanges
            ? "Änderung erkannt – wird gleich automatisch gespeichert."
            : "Alle Bild-URLs sind gespeichert."}
      </p>
      {state.message ? (
        <p
          className={`rounded-lg px-3 py-2 text-sm ${state.ok ? "bg-emerald-50 text-emerald-900 ring-1 ring-emerald-200" : "bg-red-50 text-red-900 ring-1 ring-red-200"}`}
          role="status"
        >
          {state.message}
        </p>
      ) : null}
      {selectedKey ? (
        <div className="sticky top-3 z-20 rounded-2xl border border-emerald-300 bg-white/95 p-4 shadow-xl shadow-emerald-950/10 backdrop-blur">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">Ausgewähltes Bildfeld</p>
              <label className="mt-1 block text-sm font-semibold text-zinc-900" htmlFor={`quick-${selectedKey}`}>
                {SITE_MEDIA_LABELS[selectedKey]}
              </label>
              <p className="mt-0.5 font-mono text-[10px] text-zinc-400">{selectedKey}</p>
            </div>
            <button
              type="button"
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs font-semibold text-zinc-700 hover:bg-zinc-100"
              onClick={() => setSelectedKey(null)}
            >
              Schließen
            </button>
          </div>
          <div className="relative mt-3">
            <input
              id={`quick-${selectedKey}`}
              type="text"
              inputMode="url"
              autoComplete="off"
              value={previews[selectedKey] ?? ""}
              className="w-full rounded-lg border border-emerald-300 bg-white px-3 py-2 text-sm outline-none ring-[#70a340]/25 focus:ring-2"
              placeholder="https://… oder /images/…"
              onChange={(e) => {
                const v = e.target.value;
                setPreviews((p) => ({ ...p, [selectedKey]: v }));
                setLoadError((err) => ({ ...err, [selectedKey]: false }));
              }}
            />
          </div>
          <p className="mt-2 text-xs text-zinc-500">Änderungen werden automatisch gespeichert.</p>
        </div>
      ) : null}

      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_min(100%,22rem)] xl:items-start xl:gap-10">
        <div className="min-w-0 space-y-4">
          <MediaWorkbench
            tab={workbenchTab}
            onTabChange={setWorkbenchTab}
            onSelect={selectMediaField}
            previews={previews}
            activeKey={selectedKey ?? mockupHoverKey}
            onHover={setMockupHoverKey}
            cacheGeneration={previewRev}
          />
        </div>

        <aside
          ref={fieldsPanelRef}
          className="min-w-0 space-y-6 xl:sticky xl:top-4 xl:max-h-[calc(100vh-2rem)] xl:overflow-y-auto xl:rounded-xl xl:border xl:border-zinc-200/80 xl:bg-white/90 xl:p-4 xl:shadow-sm"
        >
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-500">URL-Felder</p>
          <p className="text-xs text-zinc-500">Mit der Werkbank oben abgleichen; Klick auf einen Baustein springt hierher.</p>
          <div className="space-y-8">
            {SITE_MEDIA_EDITOR_GROUPS.map((group) => (
              <section key={group.title} id={groupSectionId(group.title)} className="scroll-mt-24 space-y-4">
                <div className="border-b border-zinc-200 pb-2">
                  <h2 className="text-sm font-bold text-zinc-900">{group.title}</h2>
                </div>
                <ul className="space-y-4">
                  {group.keys.map((key) => {
                    const broken = Boolean(loadError[key]);
                    const rowActive = (selectedKey ?? mockupHoverKey) === key;
                    return (
                      <li
                        key={key}
                        data-media-row={key}
                        onMouseEnter={() => setMockupHoverKey(key)}
                        onMouseLeave={() => setMockupHoverKey(null)}
                        className={`rounded-xl border bg-zinc-50/90 p-4 shadow-sm transition-shadow ${rowActive ? "border-emerald-400 ring-2 ring-emerald-500/30" : "border-zinc-200 ring-1 ring-zinc-100"}`}
                      >
                        <label className="text-sm font-semibold text-zinc-900" htmlFor={key}>
                          {SITE_MEDIA_LABELS[key]}
                        </label>
                        {rowActive ? (
                          <p className="mt-1 rounded-md bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-950">
                            Ausgewähltes Bildfeld – diesen Link jetzt bearbeiten.
                          </p>
                        ) : null}
                        <p className="mt-1 text-xs leading-relaxed text-zinc-600">{SITE_MEDIA_HINTS[key]}</p>
                        <p className="mt-0.5 font-mono text-[10px] text-zinc-400">{key}</p>
                        <div className="relative mt-2">
                          <input
                            id={key}
                            name={key}
                            type="text"
                            inputMode="url"
                            autoComplete="off"
                            value={previews[key] ?? ""}
                            className={`w-full rounded-lg border border-zinc-300 bg-white py-2 pl-3 text-sm outline-none ring-[#70a340]/25 focus:ring-2 ${previewSrc(previews[key]) && !broken ? "pr-10" : "pr-3"}`}
                            placeholder="https://… oder /images/…"
                            onChange={(e) => {
                              const v = e.target.value;
                              setPreviews((p) => ({ ...p, [key]: v }));
                              setLoadError((err) => ({ ...err, [key]: false }));
                            }}
                          />
                          {previewSrc(previews[key]) && !broken ? (
                            <div className="pointer-events-none absolute right-2 top-1/2 h-7 w-7 -translate-y-1/2 overflow-hidden rounded border border-zinc-200 bg-zinc-100 shadow-sm">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img
                                key={`${key}-${previewRev}-${previews[key]}`}
                                src={thumbSrc(previews[key], previewRev)}
                                alt=""
                                className="h-full w-full object-cover"
                                onError={() => setLoadError((e) => ({ ...e, [key]: true }))}
                              />
                            </div>
                          ) : null}
                        </div>
                        {broken ? (
                          <p className="mt-1.5 text-xs text-amber-800">Vorschau lädt nicht – URL oder Domain prüfen.</p>
                        ) : null}
                      </li>
                    );
                  })}
                </ul>
              </section>
            ))}
          </div>
        </aside>
      </div>

      <div className="flex flex-wrap gap-3 border-t border-zinc-200 pt-6">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-zinc-800 disabled:opacity-60"
        >
          {pending ? "Speichern…" : "Alle Änderungen speichern"}
        </button>
      </div>
    </form>
  );
}
