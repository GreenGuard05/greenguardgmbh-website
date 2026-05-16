import type { ReactNode } from "react";
import { HomeSectionAmbient, type HomeAmbientScene } from "@/components/home-section-ambient";
import { site } from "@/lib/site";

export type ServiceHeroTitle = {
  prefix?: string;
  accent: string;
  suffix?: string;
};

export function InnerPageRoot({ children }: { children: ReactNode }) {
  return <div className="bg-background pt-24">{children}</div>;
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M6.6 10.8c1.6 3 4.6 5.9 7.6 7.6l2.5-2.5c.4-.4 1-.5 1.4-.2 1.2.6 2.5.9 3.9.9.8 0 1.4.6 1.4 1.4V20c0 .8-.6 1.4-1.4 1.4C9.9 21.4 2.6 14.1 2.6 4.4 2.6 3.6 3.2 3 4 3h2.5c.8 0 1.4.6 1.4 1.4 0 1.4.3 2.7.9 3.9.2.4.1 1-.2 1.4L6.6 10.8z"
      />
    </svg>
  );
}

/** Sekundär-CTA wie auf der Startseite (weiße Pill, grünes Icon) */
export function InnerPagePhoneLink({
  className = "",
  variant = "light",
}: {
  className?: string;
  variant?: "light" | "dark";
}) {
  const styles =
    variant === "dark"
      ? "border-white/15 bg-white/[0.08] text-white shadow-md shadow-black/25 hover:border-white/25 hover:bg-white/[0.12]"
      : "border-zinc-200/90 bg-white text-zinc-900 shadow-md shadow-zinc-900/5 hover:border-emerald-900/15 hover:shadow-lg";

  return (
    <a
      href={`tel:${site.phoneTel}`}
      aria-label={`Jetzt Green Guard GmbH unter ${site.phone} anrufen`}
      className={`inline-flex items-center gap-2 rounded-full border px-6 py-3.5 text-sm font-semibold transition ${styles} ${className}`.trim()}
    >
      <PhoneIcon className={variant === "dark" ? "text-[#a8e055]" : "text-[#70a340]"} />
      {site.phone}
    </a>
  );
}

type InnerPageHeroProps = {
  eyebrow: string;
  title?: ReactNode;
  heroTitle?: ServiceHeroTitle;
  description?: ReactNode;
  actions?: ReactNode;
  aside?: ReactNode;
  ambientScene?: HomeAmbientScene;
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
  ambientScene = "services",
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
      <HomeSectionAmbient scene={ambientScene} tone={tone} />
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
  ambientScene?: HomeAmbientScene;
};

/** Heller Inhalts-Bereich mit oberem Rand wie Startseiten-Sektionen */
export function InnerPageBand({
  children,
  className = "",
  ambientScene,
}: InnerPageBandProps) {
  return (
    <section
      className={`relative overflow-hidden border-t border-zinc-200/60 py-14 sm:py-16 md:py-20 ${className}`.trim()}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-zinc-50/40 to-[#f0f4ee]/80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#70a340]/15 to-transparent"
        aria-hidden
      />
      {ambientScene ? <HomeSectionAmbient scene={ambientScene} /> : null}
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  );
}
