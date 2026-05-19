import Link from "next/link";
import type { ReactNode } from "react";
import { googleReviewCount } from "@/lib/reviews";
import { site } from "@/lib/site";

function TrustStatCard({
  children,
  className = "",
  accent = false,
  floating = false,
}: {
  children: ReactNode;
  className?: string;
  accent?: boolean;
  /** Leichtes Vor-/Zurück-Wippen (Zufriedenheits-Kennzahl) */
  floating?: boolean;
}) {
  return (
    <div
      className={[
        "gg-surface-card relative flex h-full min-h-0 flex-col justify-center rounded-xl border text-left",
        "px-4 py-3.5 sm:px-5 sm:py-4",
        "max-sm:rounded-lg max-sm:px-2.5 max-sm:py-2",
        floating ? "overflow-visible" : "overflow-hidden",
        "before:absolute before:inset-y-2.5 before:left-0 before:w-[3px] before:rounded-full max-sm:before:inset-y-2",
        accent
          ? "border-[#70a340]/35 bg-[#70a340]/10 before:bg-[#a8e055] shadow-inner shadow-black/15"
          : "border-white/10 bg-[#161a16] before:bg-[#70a340] shadow-inner shadow-black/25",
        floating ? "gg-trust-accent-float z-[1] origin-center" : "",
        className,
      ].join(" ")}
    >
      <div className="relative min-w-0 pl-2.5 max-sm:pl-2 sm:pl-3">{children}</div>
    </div>
  );
}

function GoogleStars({ compact }: { compact?: boolean }) {
  const size = compact ? 9 : 14;
  return (
    <span className="flex shrink-0 gap-px text-amber-400 max-sm:gap-0" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.3l-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z" />
        </svg>
      ))}
    </span>
  );
}

const statLabelClass =
  "mt-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-400 sm:tracking-[0.14em]";

const statLabelCompactClass =
  "mt-0.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-zinc-400 max-sm:text-[7px] max-sm:leading-tight max-sm:tracking-[0.14em]";

/** Vier Kennzahlen-Karten wie im Hero (dunkel, grüner Akzentstreifen) */
export function TrustStatsCards({
  className = "",
  compactHero = false,
}: {
  className?: string;
  /** Kompakte Darstellung im Hero auf dem Handy */
  compactHero?: boolean;
}) {
  const valueClass = compactHero
    ? "text-base font-bold tracking-tight text-white max-sm:text-[1rem] max-sm:leading-none sm:text-[1.65rem]"
    : "text-xl font-bold tracking-tight text-white max-sm:text-[1.35rem] sm:text-[1.65rem]";

  const labelClass = compactHero ? statLabelCompactClass : statLabelClass;
  const googleSpanClass = compactHero ? "" : "max-sm:col-span-2";
  const satisfactionWrapClass = compactHero
    ? ""
    : "max-sm:col-span-2 sm:col-span-1 lg:col-span-1";

  return (
    <div
      className={[
        "grid grid-cols-2 items-stretch gap-2 sm:gap-3 lg:grid-cols-4",
        compactHero ? "max-sm:gap-1.5 max-sm:overflow-visible" : "max-sm:gap-2",
        "overflow-visible",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      role="group"
      aria-label="Kennzahlen und Vertrauenssignale"
    >
      <TrustStatCard>
        <p className={valueClass}>15+</p>
        <p className={labelClass}>Jahre Erfahrung</p>
        <p className={compactHero ? "sr-only" : "mt-1.5 text-[11px] text-zinc-500"}>
          in Sachsen-Anhalt
        </p>
      </TrustStatCard>

      <TrustStatCard>
        <p className={valueClass}>200+</p>
        <p className={labelClass}>Kunden</p>
        <p
          className={
            compactHero
              ? "mt-1 text-[10px] font-medium leading-tight text-zinc-400 max-sm:mt-0.5 max-sm:text-[8px] max-sm:leading-snug"
              : "mt-1.5 text-[11px] text-zinc-500"
          }
        >
          {compactHero ? (
            <>
              <span className="max-sm:block">Privat- &</span>
              <span className="max-sm:block">Geschäftskunden</span>
            </>
          ) : (
            "Privat- & Geschäftskunden"
          )}
        </p>
      </TrustStatCard>

      <TrustStatCard className={googleSpanClass}>
        <Link
          href={site.googleBusinessProfileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block min-w-0 transition hover:opacity-90"
        >
          <div className="flex items-center gap-1 sm:gap-2">
            <span className={valueClass}>5,0</span>
            <GoogleStars compact={compactHero} />
          </div>
          <p className={labelClass}>Google Bewertungen</p>
          <p
            className={
              compactHero
                ? "mt-0.5 text-[9px] font-medium leading-tight text-[#a8e055] max-sm:truncate sm:mt-1.5 sm:text-[11px]"
                : "mt-1.5 text-[11px] font-medium text-[#a8e055]"
            }
          >
            {compactHero
              ? `${googleReviewCount} Rezensionen →`
              : `${googleReviewCount} verifizierte Rezensionen →`}
          </p>
        </Link>
      </TrustStatCard>

      <div className={`gg-trust-accent-perspective h-full min-h-0 ${satisfactionWrapClass}`}>
        <TrustStatCard accent floating className="h-full w-full">
          <p className="text-base font-bold leading-snug text-white max-sm:text-[10px] max-sm:leading-tight sm:text-lg">
            {compactHero ? (
              <>
                <span className="max-sm:block">Ihre</span>
                <span className="max-sm:block">Zufriedenheit</span>
              </>
            ) : (
              "Ihre Zufriedenheit"
            )}
          </p>
          <p className="mt-0.5 text-sm font-semibold leading-snug text-[#a8e055] max-sm:mt-0.5 max-sm:text-[9px] max-sm:leading-tight sm:text-base">
            liegt uns am Herzen
          </p>
          <p className={compactHero ? "sr-only" : "mt-2 text-[11px] leading-snug text-zinc-400"}>
            Qualität, die man bei jeder Objektbetreuung spürt.
          </p>
        </TrustStatCard>
      </div>
    </div>
  );
}
