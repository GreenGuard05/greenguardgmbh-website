import type { ReactNode } from "react";
import { site } from "@/lib/site";

export function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M6.6 10.8c1.6 3 4.6 5.9 7.6 7.6l2.5-2.5c.4-.4 1-.5 1.4-.2 1.2.6 2.5.9 3.9.9.8 0 1.4.6 1.4 1.4V20c0 .8-.6 1.4-1.4 1.4C9.9 21.4 2.6 14.1 2.6 4.4 2.6 3.6 3.2 3 4 3h2.5c.8 0 1.4.6 1.4 1.4 0 1.4.3 2.7.9 3.9.2.4.1 1-.2 1.4L6.6 10.8z"
      />
    </svg>
  );
}

const pillBase =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#70a340] focus-visible:outline-offset-2";

const pillSizes = {
  default: "px-6 py-3.5 text-sm",
  compact: "px-4 py-2.5 text-xs sm:text-sm sm:px-5 sm:py-3",
} as const;

const pillVariants = {
  light:
    "border-zinc-200/90 bg-white text-zinc-900 shadow-md shadow-zinc-900/5 hover:border-emerald-900/15 hover:shadow-lg",
  dark: "border-white/15 bg-white/[0.08] text-white shadow-md shadow-black/25 hover:border-white/25 hover:bg-white/[0.12]",
  /** Wie Hero-CTA „Rufen Sie uns an“ auf dunklem Foto */
  hero: "border-[#70a340]/55 bg-black/40 text-white shadow-md shadow-black/25 backdrop-blur-sm hover:border-[#a8e055] hover:bg-white/5",
} as const;

/** Standort-Karte im Hero (grünes Glas) */
export const heroGlassCardClasses =
  "rounded-2xl border border-[#70a340]/40 bg-[#70a340]/15 ring-1 ring-[#70a340]/35 backdrop-blur-sm";

export function getPillClasses(
  size: keyof typeof pillSizes = "default",
  variant: keyof typeof pillVariants = "light",
) {
  return `${pillBase} ${pillSizes[size]} ${pillVariants[variant]}`;
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
      />
    </svg>
  );
}

export function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"
      />
    </svg>
  );
}

/** Pill ohne Link (z. B. Standort) */
export function PillStatic({
  children,
  className = "",
  size = "default",
  variant = "light",
}: {
  children: ReactNode;
  className?: string;
  size?: keyof typeof pillSizes;
  variant?: keyof typeof pillVariants;
}) {
  return (
    <span className={`${getPillClasses(size, variant)} ${className}`.trim()}>{children}</span>
  );
}

const phonePillVisibleLabel = "Rufen Sie uns an";

/** Pill mit grünem Telefon-Icon – sichtbar immer „Rufen Sie uns an“, Nummer nur in aria-label */
export function PhonePillLink({
  className = "",
  variant = "light",
  size = "default",
}: {
  className?: string;
  variant?: keyof typeof pillVariants;
  size?: keyof typeof pillSizes;
}) {
  return (
    <a
      href={`tel:${site.phoneTel}`}
      aria-label={`Jetzt Green Guard GmbH unter ${site.phone} anrufen`}
      className={`${getPillClasses(size, variant)} ${className}`.trim()}
    >
      <PhoneIcon
        className={variant === "light" ? "text-[#70a340]" : "text-[#a8e055]"}
      />
      {phonePillVisibleLabel}
    </a>
  );
}

/** Gleiche Pill-Optik für andere Links (z. B. Kontaktformular) */
export function PillLink({
  href,
  children,
  className = "",
  size = "default",
  variant = "light",
}: {
  href: string;
  children: ReactNode;
  className?: string;
  size?: keyof typeof pillSizes;
  variant?: keyof typeof pillVariants;
}) {
  return (
    <a
      href={href}
      className={`${getPillClasses(size, variant)} ${className}`.trim()}
    >
      {children}
    </a>
  );
}
