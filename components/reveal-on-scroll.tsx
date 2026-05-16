"use client";

import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** Zusätzliche Klassen am Wrapper (z. B. margin) */
  className?: string;
  /** Gestaffeltes Einblenden nach Eintritt ins Viewport (ms) */
  delayMs?: number;
  /** Etwas stärkere vertikale Bewegung */
  emphasis?: boolean;
};

/**
 * Wrapper fuer Inhaltsbereiche.
 * Animationen bleiben deaktiviert, damit Seiten nie leer wirken, falls Browser/Observer nicht feuern.
 */
export function RevealOnScroll({ children, className = "" }: Props) {
  return (
    <div className={["w-full", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}
