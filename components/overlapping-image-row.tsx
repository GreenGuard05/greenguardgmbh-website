"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export type OverlappingImageItem = {
  id: string;
  src: string;
  alt: string;
  serviceTitle: string;
  serviceHref: string;
};

const ROTATIONS = [-8, -3, 3, 8];
const MAX_IMAGES = 4;
/** Nach Öffnen kurz kein Schließen bei Scroll (scrollIntoView / Layout-Shift auf Mobil) */
const CLOSE_GUARD_MS = 700;

type OverlappingImageRowProps = {
  images: OverlappingImageItem[];
  className?: string;
  /** Kompaktere Darstellung unter dem Hero-Text auf Mobil */
  compact?: boolean;
};

export function OverlappingImageRow({
  images,
  className = "",
  compact = false,
}: OverlappingImageRowProps) {
  const gallery = useMemo(
    () => images.filter((image) => image.src.trim() !== "").slice(0, MAX_IMAGES),
    [images],
  );
  const rootRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeGuardUntilRef = useRef(0);

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const activeId = hoveredId ?? (expanded ? highlightedId : null);

  const armCloseGuard = useCallback(() => {
    closeGuardUntilRef.current = Date.now() + CLOSE_GUARD_MS;
  }, []);

  const closePanel = useCallback(() => {
    setExpanded(false);
    setHighlightedId(null);
    setHoveredId(null);
  }, []);

  const openPanel = useCallback(
    (id: string) => {
      armCloseGuard();
      setExpanded(true);
      setHighlightedId(id);
    },
    [armCloseGuard],
  );

  useEffect(() => {
    if (!expanded) return;

    const onPointerDown = (event: PointerEvent) => {
      if (Date.now() < closeGuardUntilRef.current) return;
      const root = rootRef.current;
      if (!root?.contains(event.target as Node)) {
        closePanel();
      }
    };

    const onScroll = () => {
      if (Date.now() < closeGuardUntilRef.current) return;
      closePanel();
    };

    document.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("scroll", onScroll);
    };
  }, [expanded, closePanel]);

  useEffect(() => {
    if (!expanded || !highlightedId) return;

    const panel = panelRef.current;
    const row = panel?.querySelector<HTMLElement>(`[data-service-id="${highlightedId}"]`);
    if (!panel || !row) return;

    armCloseGuard();
    row.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }, [expanded, highlightedId, armCloseGuard]);

  const handleImageClick = useCallback(
    (id: string) => {
      if (expanded && highlightedId === id) {
        closePanel();
        return;
      }
      openPanel(id);
    },
    [expanded, highlightedId, closePanel, openPanel],
  );

  if (gallery.length === 0) return null;

  /** Feste Proportionen – kein schmales Hochformat, das Fotos „quetscht“ */
  const cardSize = compact
    ? "h-[10.25rem] w-[7.75rem] max-sm:h-auto max-sm:w-[min(23vw,5.65rem)] max-sm:aspect-[3/4] sm:h-[8.5rem] sm:w-[6.25rem] sm:aspect-auto"
    : "h-[11.5rem] w-[8.25rem] sm:h-[13rem] sm:w-[9.5rem] lg:h-[14.25rem] lg:w-[10.5rem]";
  const overlap = compact ? "-ml-6 max-sm:-ml-5 sm:-ml-6" : "-ml-8 sm:-ml-9 lg:-ml-10";
  /** Mind. ~2–3× Kartenbreite für scharfe Darstellung auf Retina-Handys */
  const imageSizes = compact
    ? "(max-width: 639px) 384px, 200px"
    : "(max-width: 1024px) 320px, 400px";

  return (
    <div
      ref={rootRef}
      className={`relative flex w-full min-w-0 flex-col items-center overflow-visible max-sm:py-1 sm:py-2 ${className}`}
      onMouseLeave={() => setHoveredId(null)}
    >
      <div
        className="flex w-full max-w-full flex-nowrap items-end justify-center overflow-visible"
        role="group"
        aria-label="Leistungsbilder – antippen, um unsere Dienstleistungen anzuzeigen"
      >
        {gallery.map((image, index) => {
          const isActive = activeId === image.id;
          const isDimmed = activeId != null && !isActive;
          const rotation = ROTATIONS[index] ?? 0;
          const showCardLabel = isActive && !expanded;

          return (
            <button
              key={image.id}
              type="button"
              aria-expanded={expanded && highlightedId === image.id}
              aria-label={`${image.serviceTitle}: Leistungen anzeigen`}
              className={`relative shrink-0 touch-manipulation ${cardSize} ${index === 0 ? "" : overlap} cursor-pointer overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl ring-2 transition-[transform,opacity,box-shadow] duration-300 ease-out [backface-visibility:hidden] [transform-style:preserve-3d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a8e055] motion-reduce:transition-none ${
                isActive
                  ? "ring-[#a8e055]/90 shadow-[0_28px_50px_-12px_rgba(112,163,64,0.55)]"
                  : "ring-white/25 hover:ring-white/60"
              } ${isDimmed ? "opacity-60" : "opacity-100"}`}
              style={{
                zIndex: isActive ? 40 : 10 + index,
                transform: isActive
                  ? expanded
                    ? "translate3d(0,0,0) scale(1.05) rotate(0deg)"
                    : compact
                      ? "translate3d(0,-0.35rem,0) scale(1.05) rotate(0deg)"
                      : "translate3d(0,-0.75rem,0) scale(1.08) rotate(0deg)"
                  : `translate3d(0,0,0) scale(${isDimmed ? 0.92 : 1}) rotate(${rotation}deg)`,
              }}
              onMouseEnter={() => setHoveredId(image.id)}
              onFocus={() => setHoveredId(image.id)}
              onBlur={() => setHoveredId(null)}
              onClick={() => handleImageClick(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={75}
                priority={compact && index < 2}
                className="object-cover object-center [transform:translateZ(0)]"
                sizes={imageSizes}
                draggable={false}
              />
              <span
                className={`pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-1.5 pb-1.5 pt-6 text-center text-[7.5px] font-semibold leading-[1.15] text-white/95 transition-opacity duration-300 max-sm:text-[8px] sm:px-2 sm:pb-2 sm:pt-7 sm:text-[9px] ${
                  showCardLabel ? "opacity-100" : "opacity-0"
                }`}
                aria-hidden={!showCardLabel}
              >
                <span className="line-clamp-2 break-words">{image.serviceTitle}</span>
              </span>
              <span
                className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent transition-opacity duration-300 ${
                  isActive ? "opacity-90" : "opacity-30"
                }`}
                aria-hidden
              />
            </button>
          );
        })}
      </div>

      {expanded ? (
        <div
          ref={panelRef}
          className="relative z-20 mx-auto mt-3 w-full max-w-[min(100%,20rem)] max-h-[min(52vh,17rem)] overflow-y-auto overscroll-contain sm:max-w-[22rem] lg:max-w-[24rem]"
          role="region"
          aria-label="Unsere Leistungen"
        >
          <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-[#a8e055]">
            Unsere Leistungen
          </p>
          <ul
            className="flex flex-col gap-2 sm:gap-2.5"
            role="list"
            aria-label="Dienstleistungen von Green Guard GmbH"
          >
            {gallery.map((item, index) => {
              const isHighlighted = highlightedId === item.id;
              const floatClass =
                index % 2 === 0 ? "gg-service-float" : "gg-service-float-alt";

              return (
                <li
                  key={item.id}
                  data-service-id={item.id}
                  className="gg-service-pop-in"
                  style={{ animationDelay: `${index * 70}ms` }}
                >
                  <Link
                    href={item.serviceHref}
                    className={`group block rounded-xl border px-4 py-2.5 text-center text-sm font-semibold shadow-lg backdrop-blur-md transition-[border-color,background-color,transform,box-shadow] duration-300 motion-reduce:transition-none sm:px-5 sm:py-3 sm:text-base ${
                      isHighlighted
                        ? "border-[#a8e055]/80 bg-[#70a340]/95 text-white shadow-[0_12px_32px_-8px_rgba(112,163,64,0.55)]"
                        : "border-white/25 bg-zinc-950/88 text-white hover:border-[#70a340]/50 hover:bg-zinc-900/95"
                    } ${floatClass}`}
                    style={{ animationDelay: `${index * 0.35}s` }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="block leading-snug">{item.serviceTitle}</span>
                    <span
                      className={`mt-0.5 block text-[10px] font-medium uppercase tracking-wider transition-opacity ${
                        isHighlighted ? "text-[#e8ffdc]/90" : "text-zinc-400 group-hover:text-zinc-300"
                      }`}
                    >
                      Mehr erfahren →
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      {!expanded ? (
        <p className="mt-2 max-sm:mt-2.5 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400/95 max-sm:text-[11px] max-sm:tracking-[0.22em]">
          Antippen für Leistungen
        </p>
      ) : null}
    </div>
  );
}
