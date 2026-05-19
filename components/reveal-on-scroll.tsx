"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  emphasis?: boolean;
};

/**
 * Blendet Inhalte beim Scrollen weich ein. Oberhalb der Falz bleibt alles sofort sichtbar;
 * nur weiter unten wird nach Hydration kurz „pending“ gesetzt (kein leerer Screen).
 */
export function RevealOnScroll({
  children,
  className = "",
  delayMs = 0,
  emphasis = false,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      el.classList.remove("gg-reveal--pending");
      el.classList.add("gg-reveal--visible");
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" },
    );

    const belowFold = el.getBoundingClientRect().top > window.innerHeight * 0.88;
    if (belowFold) {
      el.classList.add("gg-reveal--pending");
    } else {
      reveal();
    }

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const style = { "--reveal-delay": `${delayMs}ms` } as CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={[
        "gg-reveal w-full",
        emphasis ? "gg-reveal--emphasis" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </div>
  );
}
