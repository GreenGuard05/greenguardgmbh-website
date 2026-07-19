import { HeroStatsBar } from "@/components/hero-stats-bar";

/** Trust-Bereich unter dem Hero: Kennzahlen (inkl. Google-Bewertung). */
export function HomeTrustBand() {
  return (
    <section
      className="relative border-t border-[#70a340]/20 bg-zinc-950 text-white"
      aria-label="Kennzahlen und Vertrauenssignale"
    >
      <HeroStatsBar />
    </section>
  );
}
