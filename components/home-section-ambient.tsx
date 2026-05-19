"use client";

import { useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import {
  LeistungenHousePaths,
  LeistungenLawnMowerPaths,
  LeistungenSnowflakePaths,
  LeistungenTeamPaths,
} from "@/components/leistungen-ambient-icons";

export type HomeAmbientScene =
  | "services"
  | "greensCare"
  | "cleaning"
  | "winter"
  | "caretaker"
  | "shrubCare"
  | "about"
  | "values"
  | "reviews"
  | "faq"
  | "region";

type GlyphProps = {
  className: string;
  delaySec: number;
  children: ReactNode;
  motion?: "breathe" | "drift";
  durationSec?: number;
};

function AmbientGlyph({
  className,
  delaySec,
  children,
  motion = "breathe",
  durationSec = motion === "drift" ? 9 : 6.5,
}: GlyphProps) {
  const anim =
    motion === "drift"
      ? "motion-safe:animate-gg-ambient-drift motion-reduce:animate-none"
      : "motion-safe:animate-gg-ambient-breathe motion-reduce:animate-none";

  return (
    <svg
      className={`absolute ${anim} ${className}`}
      style={{ animationDelay: `${delaySec}s`, animationDuration: `${durationSec}s` }}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.35"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );
}

/** Rasenmäher, Heckenschere, Blatt & Strauch – Grünpflege */
function SceneGreensCare({ tone }: { tone: "light" | "dark" }) {
  const t = tone === "dark" ? "text-[#a8e055]/[0.28]" : "text-emerald-800/[0.36]";
  return (
    <div className={`relative h-full w-full ${t}`}>
      <AmbientGlyph
        motion="drift"
        durationSec={10}
        className="right-[-6%] top-[2%] h-[min(46vw,15rem)] w-[min(46vw,15rem)] -rotate-6 sm:right-[-2%] sm:top-[4%] sm:h-56 sm:w-56"
        delaySec={0}
      >
        <path d="M2 10h1.2l.9-2.2h15.8l.9 2.2H22" />
        <path d="M8 10V7.2h8V10" />
        <path d="M12 4.5V7.2" />
        <path d="M10 4.5h4" />
        <circle cx="6.2" cy="14.2" r="2.2" />
        <circle cx="17.8" cy="14.2" r="2.2" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={8.5}
        className="bottom-[4%] left-[-8%] h-[min(40vw,11rem)] w-[min(40vw,11rem)] -rotate-10 sm:bottom-[8%] sm:left-[-4%] sm:h-52 sm:w-52"
        delaySec={1.4}
      >
        <path d="M5 15c-1.8-3.2-1.8-7.2 0-10.5" />
        <path d="M19 15c1.8-3.2 1.8-7.2 0-10.5" />
        <path d="M7.2 11.8 16.8 21.2" />
        <path d="M16.8 11.8 7.2 21.2" />
        <circle cx="5" cy="15" r="1.2" fill="currentColor" stroke="none" />
        <circle cx="19" cy="15" r="1.2" fill="currentColor" stroke="none" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={9.5}
        className="left-[34%] top-[38%] h-32 w-32 -rotate-12 opacity-90 sm:left-[38%] sm:top-[40%] sm:h-40 sm:w-40"
        delaySec={2.6}
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 17 3a2.41 2.41 0 0 0-1.33-2.14C11.3.5 5.67 4.41 4.27 10.2" />
        <path d="M11 20a7 7 0 0 0 6.18-3.82" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={11}
        className="right-[18%] top-[52%] h-28 w-28 rotate-6 opacity-80 max-sm:right-[4%] max-sm:top-[58%] sm:h-32 sm:w-32"
        delaySec={0.8}
      >
        <path d="M7 8h10l1.2 12H5.8L7 8Z" />
        <path d="M9.5 8V5h5v3" />
        <path d="M9 15c4.2-.4 6.2-2.8 7-6-4 .3-6.2 2.5-7 6Z" />
        <path d="M9 15c1.8-1.7 3.7-2.7 6-3.3" />
      </AmbientGlyph>
    </div>
  );
}

/** Besen, Schwamm mit Schaum, Sprühflasche – Gebäudereinigung */
function SceneCleaning({ tone }: { tone: "light" | "dark" }) {
  const t = tone === "dark" ? "text-sky-200/[0.3]" : "text-sky-800/[0.34]";
  return (
    <div className={`relative h-full w-full ${t}`}>
      <AmbientGlyph
        motion="drift"
        durationSec={10}
        className="right-[-4%] top-[2%] h-[min(44vw,14rem)] w-[min(44vw,14rem)] rotate-12 sm:right-[0%] sm:top-[6%] sm:h-52 sm:w-52"
        delaySec={0}
      >
        <path d="M12 3v11" />
        <path d="M8 14h8l1.5 6h-11L8 14Z" />
        <path d="M9 20v-3M12 20v-3M15 20v-3" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={9}
        className="bottom-[6%] left-[-6%] h-[min(38vw,11rem)] w-[min(38vw,11rem)] -rotate-8 sm:bottom-[10%] sm:left-[-2%] sm:h-48 sm:w-48"
        delaySec={1.3}
      >
        <path d="M4 20h16" />
        <path d="M6 20l1-9h10l1 9" />
        <path d="M9 11V6h6v5" />
        <path d="M8 6h8M10 15h4" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={8.5}
        className="left-[32%] top-[42%] h-32 w-32 -rotate-6 sm:left-[36%] sm:top-[38%] sm:h-36 sm:w-36"
        delaySec={2.4}
      >
        <rect x="5" y="4" width="14" height="16" rx="1.5" />
        <path d="M5 10h14M12 4v16" />
        <path d="M8 7h1M15 7h1M8 14h1M15 14h1" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={11}
        className="right-[14%] top-[55%] h-24 w-24 rotate-[-18deg] opacity-85 sm:h-28 sm:w-28"
        delaySec={0.7}
      >
        <path d="M4 7h16v3H4z" />
        <path d="M7 10v7a3 3 0 0 0 6 0v-1" />
        <path d="M17 10v10M14 17h6" />
      </AmbientGlyph>
    </div>
  );
}

/** Schneeflocke, Schneeschaufel, Streuer – Winterdienst */
function SceneWinter({ tone }: { tone: "light" | "dark" }) {
  const t = tone === "dark" ? "text-sky-100/[0.32]" : "text-sky-900/[0.32]";
  return (
    <div className={`relative h-full w-full ${t}`}>
      <AmbientGlyph
        motion="drift"
        durationSec={9.5}
        className="right-[-2%] top-[4%] h-[min(42vw,13rem)] w-[min(42vw,13rem)] sm:right-[4%] sm:top-[8%] sm:h-52 sm:w-52"
        delaySec={0.2}
      >
        <path d="M12 2v20M12 2l2.5 4.5M12 2 9.5 4.5" />
        <path d="M4.5 12h15M4.5 12l4 2.5M4.5 12l4-2.5" />
        <path d="M6.8 6.8l10.4 10.4M6.8 17.2 17.2 6.8" />
        <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={10}
        className="bottom-[8%] left-[-6%] h-[min(40vw,11rem)] w-[min(40vw,11rem)] -rotate-12 sm:bottom-[12%] sm:left-0 sm:h-48 sm:w-48"
        delaySec={1.5}
      >
        <path d="M4 6h16v3H4z" />
        <path d="M12 9v11" />
        <path d="M8.5 20h7" strokeWidth="1.6" />
        <path d="M6 9h12" strokeOpacity={0.45} />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={8}
        className="left-[34%] top-[40%] h-32 w-32 rotate-6 sm:h-36 sm:w-36"
        delaySec={2.8}
      >
        <path d="M8 9h8l2 11H6L8 9Z" />
        <path d="M10 9V5h4v4" />
        <path d="M9 14h.01M12 16h.01M15 14h.01" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={11}
        className="right-[12%] top-[58%] h-24 w-24 opacity-80 sm:h-28 sm:w-28"
        delaySec={0.9}
      >
        <path d="M12 3.5 18.5 6v5.2c0 4.1-2.4 7-6.5 9.3-4.1-2.3-6.5-5.2-6.5-9.3V6L12 3.5Z" />
        <path d="m8.8 12 2.1 2.1 4.4-4.6" />
      </AmbientGlyph>
    </div>
  );
}

/** Schlüssel, Schraubenschlüssel, Haus – Hausmeisterservice */
function SceneCaretaker({ tone }: { tone: "light" | "dark" }) {
  const t = tone === "dark" ? "text-amber-100/[0.28]" : "text-amber-900/[0.32]";
  return (
    <div className={`relative h-full w-full ${t}`}>
      <AmbientGlyph
        motion="drift"
        durationSec={9}
        className="right-[-4%] top-[6%] h-[min(42vw,13rem)] w-[min(42vw,13rem)] rotate-[-8deg] sm:right-[2%] sm:h-52 sm:w-52"
        delaySec={0}
      >
        <path d="M8 4h8l2 2v14H6V6l2-2Z" />
        <path d="M9 11h4M9 15h3" />
        <path d="M14 16.5l1.4 1.4 3-3.3" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={10.5}
        className="bottom-[10%] left-[-5%] h-[min(38vw,11rem)] w-[min(38vw,11rem)] sm:bottom-[14%] sm:left-[2%] sm:h-48 sm:w-48"
        delaySec={1.4}
      >
        <path d="M4.5 20V9.5L12 4l7.5 5.5V20" />
        <path d="M9 20v-6h6v6" />
        <path d="M7 11.5h2.5M14.5 11.5H17" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={8.5}
        className="left-[30%] top-[38%] h-32 w-32 rotate-12 sm:h-36 sm:w-36"
        delaySec={2.5}
      >
        <circle cx="7" cy="7" r="2.4" />
        <circle cx="17" cy="17" r="2.4" />
        <path d="M9 9 15 15M16 6h3v3M19 6l-5.2 5.2" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={9.5}
        className="right-[16%] top-[52%] h-24 w-24 opacity-85 sm:h-28 sm:w-28"
        delaySec={0.8}
      >
        <path d="M6 8h5l1 12H7L6 8ZM13 8h5l-1 12h-5l1-12Z" />
        <path d="M5 8h14M8 5h8" />
      </AmbientGlyph>
    </div>
  );
}

/** Heckenschere, Ast, Gartenschere – Strauch- & Buschpflege */
function SceneShrubCare({ tone }: { tone: "light" | "dark" }) {
  const t = tone === "dark" ? "text-[#a8e055]/[0.28]" : "text-emerald-800/[0.36]";
  return (
    <div className={`relative h-full w-full ${t}`}>
      <AmbientGlyph
        motion="drift"
        durationSec={10}
        className="right-[-5%] top-[4%] h-[min(44vw,14rem)] w-[min(44vw,14rem)] -rotate-4 sm:right-0 sm:h-52 sm:w-52"
        delaySec={0.1}
      >
        <path d="M4 15c-2-3.5-2-7.5 0-11" />
        <path d="M20 15c2-3.5 2-7.5 0-11" />
        <path d="M7 12.5 17 21.5M17 12.5 7 21.5" />
        <circle cx="4" cy="15" r="1.3" fill="currentColor" stroke="none" />
        <circle cx="20" cy="15" r="1.3" fill="currentColor" stroke="none" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={9}
        className="bottom-[6%] left-[-7%] h-[min(40vw,11rem)] w-[min(40vw,11rem)] -rotate-10 sm:bottom-[10%] sm:left-[-2%] sm:h-48 sm:w-48"
        delaySec={1.6}
      >
        <path d="M6 20V9M12 20V5M18 20V10" />
        <path d="M4 14c4-.8 6-3 8-9M20 15c-4-.5-6.5-2.5-8-10" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={8.5}
        className="left-[36%] top-[36%] h-32 w-32 -rotate-6 sm:h-36 sm:w-36"
        delaySec={2.7}
      >
        <path d="M12 20V9" />
        <path d="M8 8c1.6-3 3-4 4-4s2.4 1 4 4c-1.5 1.5-3 2.2-4 2.2S9.5 9.5 8 8Z" />
        <path d="M12 15c-2.5-.2-4.4-1.6-5.5-4 2.8 0 4.7 1.4 5.5 4ZM12 16c2.4-.2 4.2-1.5 5.2-3.8-2.6 0-4.4 1.3-5.2 3.8Z" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={11}
        className="right-[12%] top-[56%] h-24 w-24 rotate-8 opacity-80 sm:h-28 sm:w-28"
        delaySec={0.6}
      >
        <path d="M12 20V10" />
        <path d="M12 11c-3.5-.2-5.8-2.2-6.5-6 3.8.3 6 2.4 6.5 6ZM12 14c3.4-.2 5.5-2 6.2-5.4-3.5.2-5.6 2-6.2 5.4Z" />
        <path d="M17 17.5h3M18.5 16v3" />
      </AmbientGlyph>
    </div>
  );
}

/** Leistungen – Rasenmäher, Haus, Schneeflocke, Team */
function SceneServices({ tone }: { tone: "light" | "dark" }) {
  const t = tone === "dark" ? "text-emerald-200/[0.28]" : "text-emerald-800/[0.34]";
  return (
    <div className={`relative h-full w-full ${t}`}>
      <AmbientGlyph
        motion="drift"
        durationSec={10}
        className="right-[-10%] top-[-6%] h-[min(48vw,16rem)] w-[min(48vw,16rem)] -rotate-6 sm:right-[-4%] sm:top-[-2%] sm:h-56 sm:w-56"
        delaySec={0}
      >
        <LeistungenLawnMowerPaths />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={9.5}
        className="bottom-[-8%] left-[-10%] h-[min(44vw,14rem)] w-[min(44vw,14rem)] rotate-3 sm:bottom-[-4%] sm:left-[-5%] sm:h-52 sm:w-52"
        delaySec={1.1}
      >
        <LeistungenHousePaths />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={9}
        className="left-[-6%] top-[14%] h-[min(40vw,13rem)] w-[min(40vw,13rem)] sm:left-[0%] sm:top-[18%] sm:h-48 sm:w-48"
        delaySec={2.2}
      >
        <LeistungenSnowflakePaths />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={10.5}
        className="right-[-6%] bottom-[-4%] h-[min(38vw,12rem)] w-[min(38vw,12rem)] sm:right-[2%] sm:bottom-[2%] sm:h-44 sm:w-44"
        delaySec={0.7}
      >
        <LeistungenTeamPaths />
      </AmbientGlyph>
    </div>
  );
}

/** Medaille, Blatt, Schild, Team – Unsere Werte */
function SceneValues({ tone }: { tone: "light" | "dark" }) {
  const t = tone === "dark" ? "text-[#a8e055]/[0.34]" : "text-emerald-800/[0.32]";
  return (
    <div className={`relative h-full w-full ${t}`}>
      <AmbientGlyph
        motion="drift"
        durationSec={10}
        className="right-[-2%] top-[4%] h-[min(42vw,13rem)] w-[min(42vw,13rem)] sm:right-[4%] sm:top-[8%] sm:h-52 sm:w-52"
        delaySec={0.2}
      >
        <circle cx="12" cy="8.5" r="4.5" />
        <path d="M8.2 13.8 7 20l5-2.5L17 20l-1.2-6.2" />
        <path d="M9.5 13.8h5" strokeOpacity={0.55} />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={9}
        className="bottom-[8%] left-[-6%] h-[min(38vw,11rem)] w-[min(38vw,11rem)] -rotate-8 sm:bottom-[12%] sm:left-0 sm:h-48 sm:w-48"
        delaySec={1.4}
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 17 3a2.41 2.41 0 0 0-1.33-2.14C11.3.5 5.67 4.41 4.27 10.2" />
        <path d="M11 20a7 7 0 0 0 6.18-3.82" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={8.5}
        className="left-[30%] top-[38%] h-32 w-32 rotate-6 sm:h-36 sm:w-36"
        delaySec={2.6}
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={11}
        className="right-[10%] top-[54%] h-28 w-28 opacity-85 sm:h-32 sm:w-32"
        delaySec={0.8}
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="3.5" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={9.5}
        className="left-[6%] top-[12%] h-24 w-24 -rotate-12 opacity-75 sm:h-28 sm:w-28"
        delaySec={1.9}
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="2.8" />
      </AmbientGlyph>
    </div>
  );
}

function SceneAbout({ tone }: { tone: "light" | "dark" }) {
  const t = tone === "dark" ? "text-emerald-200/[0.26]" : "text-emerald-800/[0.34]";
  return (
    <div className={`relative h-full w-full ${t}`}>
      <AmbientGlyph className="right-[6%] top-[10%] h-48 w-48 rotate-6 sm:h-56 sm:w-56" delaySec={0.3}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </AmbientGlyph>
      <AmbientGlyph className="bottom-[12%] left-[-2%] h-40 w-40 -rotate-3 sm:h-48 sm:w-48" delaySec={1.5}>
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 16v-4M12 8h.01" />
      </AmbientGlyph>
      <AmbientGlyph className="left-[32%] top-[48%] h-28 w-28 rotate-12 opacity-90" delaySec={2.7}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </AmbientGlyph>
    </div>
  );
}

function SceneReviews({ tone }: { tone: "light" | "dark" }) {
  const t = tone === "dark" ? "text-amber-200/[0.26]" : "text-amber-800/[0.34]";
  return (
    <div className={`relative h-full w-full ${t}`}>
      <AmbientGlyph className="right-[-2%] top-[14%] h-44 w-44 -rotate-6 sm:h-52 sm:w-52" delaySec={0}>
        <path d="M12 17.3l-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z" />
      </AmbientGlyph>
      <AmbientGlyph className="bottom-[18%] left-[4%] h-36 w-36 rotate-3 sm:h-44 sm:w-44" delaySec={1.1}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </AmbientGlyph>
      <AmbientGlyph className="left-[40%] top-[8%] h-24 w-24 opacity-90" delaySec={2.2}>
        <path d="M12 17.3l-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z" />
      </AmbientGlyph>
    </div>
  );
}

function SceneFaq({ tone }: { tone: "light" | "dark" }) {
  const t = tone === "dark" ? "text-emerald-200/[0.26]" : "text-emerald-800/[0.34]";
  return (
    <div className={`relative h-full w-full ${t}`}>
      <AmbientGlyph
        motion="drift"
        durationSec={10}
        className="right-[-6%] top-[8%] h-[min(44vw,14rem)] w-[min(44vw,14rem)] sm:right-[2%] sm:top-[12%] sm:h-52 sm:w-52"
        delaySec={0.3}
      >
        <path d="M5 6h12a2.5 2.5 0 0 1 2.5 2.5v7.5A2.5 2.5 0 0 1 17 18.5H10l-3.5 3.5V18.5H5A2.5 2.5 0 0 1 2.5 16V8.5A2.5 2.5 0 0 1 5 6z" />
        <path d="M7.5 10h7M7.5 12h5M7.5 14h6M7.5 16h4" />
        <path d="M15 11h12a2.5 2.5 0 0 1 2.5 2.5v7.5a2.5 2.5 0 0 1-2.5 2.5h-7l-3.5 3.5V23.5H15a2.5 2.5 0 0 1-2.5-2.5v-7.5A2.5 2.5 0 0 1 15 11z" />
        <path d="M21.5 15.5a2 2 0 1 0-2.6 1.9c.9.5 1.6 1.3 1.6 2.4" />
        <circle cx="21.5" cy="22" r="0.95" fill="currentColor" stroke="none" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={9}
        className="bottom-[6%] left-[-8%] h-36 w-36 rotate-6 opacity-80 sm:bottom-[10%] sm:left-[-2%] sm:h-44 sm:w-44"
        delaySec={1.6}
      >
        <path d="M15 11h12a2.5 2.5 0 0 1 2.5 2.5v7.5a2.5 2.5 0 0 1-2.5 2.5h-7l-3.5 3.5V23.5H15a2.5 2.5 0 0 1-2.5-2.5v-7.5A2.5 2.5 0 0 1 15 11z" />
        <path d="M21.5 15.5a2 2 0 1 0-2.6 1.9c.9.5 1.6 1.3 1.6 2.4" />
        <circle cx="21.5" cy="22" r="0.95" fill="currentColor" stroke="none" />
      </AmbientGlyph>
      <AmbientGlyph
        motion="drift"
        durationSec={11}
        className="left-[8%] top-[42%] h-28 w-28 -rotate-6 opacity-75 sm:h-32 sm:w-32"
        delaySec={2.7}
      >
        <path d="M5 6h12a2.5 2.5 0 0 1 2.5 2.5v7.5A2.5 2.5 0 0 1 17 18.5H10l-3.5 3.5V18.5H5A2.5 2.5 0 0 1 2.5 16V8.5A2.5 2.5 0 0 1 5 6z" />
        <path d="M7.5 10h7M7.5 12h5M7.5 14h6M7.5 16h4" />
      </AmbientGlyph>
    </div>
  );
}

function SceneRegion({ tone }: { tone: "light" | "dark" }) {
  const t = tone === "dark" ? "text-[#a8e055]/[0.28]" : "text-emerald-800/[0.2] sm:text-emerald-800/[0.34]";
  return (
    <div className={`relative h-full w-full ${t}`}>
      <AmbientGlyph
        className="right-[-14%] top-0 h-28 w-28 sm:right-[2%] sm:top-[8%] sm:h-48 sm:w-56"
        delaySec={0.2}
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </AmbientGlyph>
      <AmbientGlyph
        className="bottom-[10%] left-[-4%] h-28 w-28 -rotate-6 max-sm:bottom-[6%] max-sm:opacity-80 sm:bottom-[14%] sm:left-[6%] sm:h-40 sm:w-48"
        delaySec={1.4}
      >
        <path d="M3 6h18M3 12h18M3 18h18" />
        <path d="M6 6v12M12 6v12M18 6v12" strokeOpacity={0.4} />
      </AmbientGlyph>
      <AmbientGlyph
        className="left-auto right-[2%] top-[58%] h-24 w-24 rotate-12 max-sm:top-[56%] max-sm:h-20 max-sm:w-20 max-sm:opacity-75 sm:left-[36%] sm:right-auto sm:top-[22%] sm:h-32 sm:w-32 sm:opacity-90"
        delaySec={2.6}
      >
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </AmbientGlyph>
    </div>
  );
}

function SceneBody({ scene, tone }: { scene: HomeAmbientScene; tone: "light" | "dark" }) {
  switch (scene) {
    case "services":
      return <SceneServices tone={tone} />;
    case "greensCare":
      return <SceneGreensCare tone={tone} />;
    case "cleaning":
      return <SceneCleaning tone={tone} />;
    case "winter":
      return <SceneWinter tone={tone} />;
    case "caretaker":
      return <SceneCaretaker tone={tone} />;
    case "shrubCare":
      return <SceneShrubCare tone={tone} />;
    case "about":
      return <SceneAbout tone={tone} />;
    case "values":
      return <SceneValues tone={tone} />;
    case "reviews":
      return <SceneReviews tone={tone} />;
    case "faq":
      return <SceneFaq tone={tone} />;
    case "region":
      return <SceneRegion tone={tone} />;
  }
}

function AmbientOrbs({ style, tone }: { style: CSSProperties; tone: "light" | "dark" }) {
  const opacity =
    tone === "dark"
      ? "opacity-15 will-change-transform motion-reduce:transform-none sm:opacity-30 md:opacity-45"
      : "opacity-25 will-change-transform motion-reduce:transform-none sm:opacity-50 md:opacity-100";

  return (
    <div
      className={`absolute inset-[-18%] ${opacity}`}
      style={style}
      aria-hidden
    >
      <div className="absolute -left-[8%] top-[12%] h-[min(55vw,18rem)] w-[min(55vw,18rem)] rounded-full bg-[#70a340]/30 blur-3xl max-sm:h-[min(40vw,11rem)] max-sm:w-[min(40vw,11rem)] max-sm:bg-[#70a340]/22" />
      <div className="absolute bottom-[8%] right-[-6%] h-[min(48vw,16rem)] w-[min(48vw,16rem)] rounded-full bg-[#a8e055]/35 blur-3xl max-sm:h-[min(36vw,10rem)] max-sm:w-[min(36vw,10rem)] max-sm:bg-[#a8e055]/25" />
      <div className="absolute left-[42%] top-[38%] h-56 w-56 -translate-x-1/2 rounded-full bg-emerald-600/25 blur-3xl sm:h-72 sm:w-72 max-sm:top-[55%] max-sm:h-40 max-sm:w-40 max-sm:bg-emerald-600/18" />
    </div>
  );
}

/**
 * Bereichsbezogene Hintergrund-Motive + weiche Lichtwolken.
 * Deckkraft und Parallax reagieren auf Scroll (Sichtanteil); Puls über CSS-Animation.
 */
export type HomeAmbientBleed = "none" | "vertical";

export function HomeSectionAmbient({
  scene,
  tone = "light",
  bleed = "vertical",
}: {
  scene: HomeAmbientScene;
  tone?: "light" | "dark";
  /** Icons über Sektionsgrenzen hinaus – nicht am Rand abschneiden */
  bleed?: HomeAmbientBleed;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef(0);
  const [orbStyle, setOrbStyle] = useState<CSSProperties>({ transform: "translate3d(0,0,0)" });
  const [glyphPack, setGlyphPack] = useState<CSSProperties>({
    opacity: 0.16,
    transform: "translate3d(0,0,0)",
  });

  useLayoutEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const tick = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const visible = Math.max(0, Math.min(r.bottom, vh) - Math.max(r.top, 0));
      const ratio = Math.min(1, visible / (vh * 0.52));
      const reduceMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const center = r.top + r.height / 2 - vh / 2;
      const scrollY = window.scrollY;
      const sway = reduceMotion ? 0 : Math.sin(scrollY * 0.0014 + r.top * 0.008) * 22;

      const w = typeof window !== "undefined" ? window.innerWidth : 1024;
      const mobile = w < 640;
      const compact = w < 400;

      let glyphOpacity: number;
      if (compact) {
        glyphOpacity = 0.055 + ratio * 0.08;
      } else if (mobile) {
        glyphOpacity = 0.085 + ratio * 0.12;
      } else {
        glyphOpacity = 0.26 + ratio * 0.34;
      }

      if (tone === "dark") {
        glyphOpacity *= mobile ? 0.75 : 0.58;
      }

      const parallaxScale = mobile ? 0.32 : 1;
      const parallaxY = reduceMotion ? 0 : center * -0.078 * parallaxScale;
      const parallaxX = reduceMotion ? 0 : (center * -0.018 + sway * 0.35) * parallaxScale;

      const orbShiftX = reduceMotion ? 0 : sway * (mobile ? 0.45 : 1);
      const orbShiftY = reduceMotion ? 0 : parallaxY * -0.55 * (mobile ? 0.5 : 1);

      setGlyphPack({
        opacity: glyphOpacity,
        transform: `translate3d(${parallaxX}px,${parallaxY}px,0)`,
      });
      setOrbStyle({
        transform: `translate3d(${orbShiftX}px,${orbShiftY}px,0)`,
      });
    };

    const schedule = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = 0;
        tick();
      });
    };

    tick();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tone]);

  const bleedY = bleed === "vertical" ? "28%" : "0%";

  return (
    <div
      ref={rootRef}
      className={[
        "pointer-events-none absolute inset-x-0 z-[2]",
        bleed === "vertical" ? "overflow-visible" : "overflow-hidden",
      ].join(" ")}
      style={{
        top: bleed === "vertical" ? `calc(-1 * ${bleedY})` : 0,
        bottom: bleed === "vertical" ? `calc(-1 * ${bleedY})` : 0,
      }}
      aria-hidden
    >
      <AmbientOrbs style={orbStyle} tone={tone} />
      <div
        className={[
          "absolute inset-x-0 will-change-[opacity,transform] motion-reduce:will-change-auto motion-reduce:transform-none",
          bleed === "vertical" ? "inset-y-[-24%] max-sm:scale-[0.9]" : "inset-[-16%] max-sm:scale-[0.88]",
        ].join(" ")}
        style={glyphPack}
      >
        <SceneBody scene={scene} tone={tone} />
      </div>
    </div>
  );
}
