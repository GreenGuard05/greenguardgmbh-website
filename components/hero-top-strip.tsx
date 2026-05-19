import Link from "next/link";
import { site } from "@/lib/site";

/** Firmenzeile oben im Hero – Schriftzug + Standort */
export function HeroBrandEyebrow() {
  return (
    <div className="mb-4 flex flex-col gap-1.5 max-sm:mb-2.5 sm:mb-5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-x-3 sm:gap-y-1">
      <Link
        href="/ueber-uns"
        aria-label={`${site.name} – Über uns`}
        className="text-[13px] font-bold leading-snug tracking-tight text-white transition-opacity hover:opacity-85 max-sm:text-xs"
      >
        Green Guard <span className="text-[#a8e055]">GmbH</span>
      </Link>
      <p className="text-[11px] font-medium leading-snug text-zinc-400 sm:border-l sm:border-white/12 sm:pl-3">
        <span className="text-zinc-500">Facility Management</span>
        <span className="mx-1.5 text-zinc-600" aria-hidden>
          ·
        </span>
        <span className="text-[#c8e6a0]/90">Gerbstedt & Umgebung</span>
      </p>
    </div>
  );
}

/** Desktop rechts: Kontext über der Bildreihe */
export function HeroDesktopIntro() {
  return (
    <div className="pointer-events-auto mb-5 w-full lg:mb-6">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#a8e055]/90">
        Vor Ort in Sachsen-Anhalt
      </p>
      <p className="mt-1 max-w-md text-sm leading-relaxed text-zinc-300">
        Grünpflege, Winterdienst, Hausmeister und Reinigung – aus einer Hand für Wohn- und
        Gewerbeobjekte.
      </p>
    </div>
  );
}
