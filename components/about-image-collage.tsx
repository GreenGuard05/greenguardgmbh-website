"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type GreenScopePillConfig = {
  id: string;
  label: string;
  hint: string;
  href: string;
  position: string;
  floatClass: string;
  rotate: string;
  enterDelay: number;
  accent?: boolean;
};

const greenScopePills: GreenScopePillConfig[] = [
  {
    id: "gruenanlagen",
    label: "Grünanlagenpflege",
    hint: "Pflege & Erhalt",
    href: "/dienstleistungen/gruenanlage",
    position: "left-[5%] top-[10%] sm:left-[8%] sm:top-[12%]",
    floatClass: "gg-about-green-pill-wrap--float-a",
    rotate: "-rotate-2",
    enterDelay: 0,
  },
  {
    id: "parks",
    label: "Parks",
    hint: "öffentlich & privat",
    href: "/dienstleistungen/gruenanlage",
    position: "right-[4%] top-[36%] sm:right-[7%] sm:top-[38%]",
    floatClass: "gg-about-green-pill-wrap--float-b",
    rotate: "rotate-2",
    enterDelay: 140,
  },
  {
    id: "hangflaechen",
    label: "Hangflächen",
    hint: "auch schwer erreichbar",
    href: "/dienstleistungen/gruenanlage",
    position: "left-[6%] bottom-[30%] sm:left-[10%] sm:bottom-[32%]",
    floatClass: "gg-about-green-pill-wrap--float-c",
    rotate: "-rotate-1",
    enterDelay: 280,
  },
  {
    id: "alles-gruen",
    label: "Alles rund ums Grün",
    hint: "mehr als Immobilienbetreuung",
    href: "/dienstleistungen",
    position: "right-[5%] bottom-[8%] sm:right-[9%] sm:bottom-[10%]",
    floatClass: "gg-about-green-pill-wrap--float-d",
    rotate: "rotate-1",
    enterDelay: 420,
    accent: true,
  },
];

function GreenScopePill({
  label,
  hint,
  href,
  position,
  floatClass,
  rotate,
  accent = false,
  visible,
  enterDelay,
}: GreenScopePillConfig & { visible: boolean }) {
  return (
    <div
      className={[
        "pointer-events-none absolute max-w-[min(46vw,11.5rem)] sm:max-w-[12.5rem]",
        position,
        floatClass,
        rotate,
      ].join(" ")}
    >
      <Link
        href={href}
        className={[
          "gg-about-green-pill pointer-events-auto block",
          visible ? "gg-about-green-pill--visible" : "",
          accent ? "gg-about-green-pill--accent" : "",
        ].join(" ")}
        style={{ transitionDelay: visible ? `${enterDelay}ms` : "0ms" }}
      >
        <span
          className={[
            "block text-[11px] font-bold leading-tight sm:text-xs",
            accent ? "text-white" : "text-emerald-950",
          ].join(" ")}
        >
          {label}
        </span>
        <span
          className={[
            "mt-0.5 block text-[10px] font-medium leading-snug sm:text-[11px]",
            accent ? "text-white/90" : "text-emerald-800/85",
          ].join(" ")}
        >
          {hint}
        </span>
      </Link>
    </div>
  );
}

export function AboutImageCollage({
  collage,
}: {
  collage: { hedge: string; lawn: string; mower: string };
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -6% 0px" },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="relative" aria-label="Impressionen aus unserer Arbeit">
      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        <figure className="gg-about-card-tilt relative col-span-2 aspect-[21/9] min-h-[11rem] rounded-2xl shadow-xl ring-1 ring-zinc-900/10 sm:min-h-[14rem]">
          <Image
            src={collage.hedge}
            alt="Gepflegte Hecke und Weg"
            fill
            className="gg-about-card-tilt-media object-cover motion-reduce:transform-none"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </figure>
        <figure className="gg-about-card-tilt relative aspect-square min-h-[10rem] rounded-2xl shadow-lg ring-1 ring-zinc-900/10 sm:min-h-[12rem]">
          <Image
            src={collage.lawn}
            alt="Rasenfläche"
            fill
            className="gg-about-card-tilt-media object-cover motion-reduce:transform-none"
            sizes="(max-width: 1024px) 50vw, 25vw"
          />
        </figure>
        <figure className="gg-about-card-tilt relative aspect-square min-h-[10rem] rounded-2xl shadow-lg ring-1 ring-zinc-900/10 sm:min-h-[12rem]">
          <Image
            src={collage.mower}
            alt="Rasenmäher im Einsatz"
            fill
            className="gg-about-card-tilt-media object-cover motion-reduce:transform-none"
            sizes="(max-width: 1024px) 50vw, 25vw"
          />
        </figure>
      </div>

      <div
        className="pointer-events-none absolute inset-0 z-10"
        aria-label="Leistungsschwerpunkte im Grünbereich"
      >
        {greenScopePills.map((pill) => (
          <GreenScopePill key={pill.id} {...pill} visible={visible} />
        ))}
      </div>
    </div>
  );
}
