import type { ReactNode } from "react";
import { PhonePillLink } from "@/components/phone-pill-link";

export type ServiceHeroTitle = {
  prefix?: string;
  accent: string;
  suffix?: string;
};

export function InnerPageRoot({ children }: { children: ReactNode }) {
  return <div className="bg-background pt-24">{children}</div>;
}

/** Sekundär-CTA wie auf der Startseite (weiße Pill, grünes Icon) */
export function InnerPagePhoneLink({
  className = "",
  variant = "light",
  size = "default",
}: {
  className?: string;
  variant?: "light" | "dark";
  size?: "default" | "compact";
}) {
  return <PhonePillLink className={className} variant={variant} size={size} />;
}

type InnerPageHeroProps = {
  eyebrow: string;
  title?: ReactNode;
  heroTitle?: ServiceHeroTitle;
  description?: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  tone?: "light" | "dark";
};

function HeroHeading({
  heroTitle,
  title,
  tone = "light",
}: {
  heroTitle?: ServiceHeroTitle;
  title?: ReactNode;
  tone?: "light" | "dark";
}) {
  if (heroTitle) {
    const prefixClass = tone === "dark" ? "text-white" : "gg-text-heading-section";
    const accentClass = tone === "dark" ? "text-[#a8e055]" : "gg-text-green-forest";
    const suffixClass =
      tone === "dark"
        ? "text-zinc-400"
        : "text-zinc-500";

    return (
      <h1 className="mt-5 text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-[2.65rem] md:leading-[1.06]">
        {heroTitle.prefix ? (
          <>
            <span className={prefixClass}>{heroTitle.prefix}</span>{" "}
          </>
        ) : null}
        <span className={accentClass}>{heroTitle.accent}</span>
        {heroTitle.suffix ? (
          <>
            <br />
            <span
              className={`mt-1 inline-block text-[1.35rem] font-semibold leading-tight sm:text-2xl md:text-[1.75rem] ${suffixClass}`}
            >
              {heroTitle.suffix}
            </span>
          </>
        ) : null}
      </h1>
    );
  }

  return (
    <h1
      className={`mt-5 text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.5rem] md:leading-[1.08] ${tone === "dark" ? "text-white" : "text-zinc-900"}`}
    >
      {title}
    </h1>
  );
}

/**
 * Seiten-Intro (hell oder dunkel) mit Verlauf, Pill, Ambient-Motiven und Typo.
 */
export function InnerPageHero({
  eyebrow,
  title,
  heroTitle,
  description,
  actions,
  aside,
  tone = "light",
}: InnerPageHeroProps) {
  const isDark = tone === "dark";

  return (
    <section
      className={`relative overflow-hidden border-b pb-16 pt-8 sm:pb-20 sm:pt-10 md:pb-24 ${isDark ? "border-white/10 bg-[#1a1f1a]" : "border-zinc-200/60"}`}
    >
      <div
        className={
          isDark
            ? "pointer-events-none absolute inset-0 bg-gradient-to-br from-[#121612] via-[#1e281e] to-[#243024]"
            : "pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-50/95 via-white to-[#eef4ec]"
        }
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full blur-3xl ${isDark ? "bg-[#70a340]/14" : "bg-[#70a340]/10"}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full blur-3xl ${isDark ? "bg-[#a8e055]/10" : "bg-[#a8e055]/8"}`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent ${isDark ? "via-[#70a340]/35" : "via-[#70a340]/20"} to-transparent`}
        aria-hidden
      />
      <div className="pointer-events-none relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`pointer-events-auto grid gap-10 ${aside ? "lg:grid-cols-2 lg:items-center lg:gap-14" : ""}`}
        >
          <div className="min-w-0">
            <p
              className={
                isDark
                  ? "inline-flex rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#c8e6a0] shadow-sm backdrop-blur-sm"
                  : "inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90"
              }
            >
              {eyebrow}
            </p>
            <HeroHeading heroTitle={heroTitle} title={title} tone={tone} />
            {description ? (
              <div
                className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${isDark ? "text-zinc-400" : "text-zinc-600"}`}
              >
                {description}
              </div>
            ) : null}
            {actions ? <div className="mt-8 flex flex-wrap gap-3 pb-1 sm:pb-2">{actions}</div> : null}
          </div>
          {aside ? (
            <div className="group relative w-full min-w-0">{aside}</div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

type InnerPageBandProps = {
  children: ReactNode;
  className?: string;
  /** Sanfter Übergang in den Footer (helle Seiten, z. B. Mieten, Einsatzgebiet) */
  footerBlend?: boolean;
};

/** Heller Inhalts-Bereich mit oberem Rand wie Startseiten-Sektionen */
export function InnerPageBand({
  children,
  className = "",
  footerBlend = false,
}: InnerPageBandProps) {
  return (
    <section
      className={[
        "relative isolate border-t border-zinc-200/60 py-14 sm:py-16 md:py-20",
        footerBlend
          ? "gg-section-to-footer gg-section-to-footer--light z-[1] mb-0 overflow-hidden pb-[calc(3.5rem+var(--gg-footer-seam-light))] md:pb-[calc(4rem+var(--gg-footer-seam-light))]"
          : "overflow-visible",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={
          footerBlend
            ? "pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white via-zinc-50/50 to-white"
            : "pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white via-zinc-50/40 to-[#f0f4ee]/80"
        }
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#70a340]/15 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
