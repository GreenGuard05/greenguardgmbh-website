"use client";

import { RevealOnScroll } from "@/components/reveal-on-scroll";

const values = [
  {
    title: "Zuverlässigkeit",
    description: "Pünktlichkeit und Verlässlichkeit sind unser Markenzeichen – bei jedem Einsatz.",
  },
  {
    title: "Qualität",
    description: "Modernste Gerätschaften, umweltbewusstes Handeln und schonende Methoden – für Ergebnisse, die überzeugen.",
  },
  {
    title: "Transparenz",
    description: "Klare Festpreisangebote, faire Konditionen und offene Kommunikation.",
  },
  {
    title: "Regionalität",
    description: "Als lokales Unternehmen aus Gerbstedt kennen wir die Region und ihre Besonderheiten.",
  },
] as const;

export function UeberUnsValues() {
  return (
    <section className="relative overflow-hidden border-t border-zinc-200/70 py-20 sm:py-24 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-zinc-50/60 to-[#eef4ec]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#70a340]/25 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-[18%] h-64 w-64 rounded-full bg-[#70a340]/8 blur-3xl"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <p className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
            Unsere Werte
          </p>
          <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight text-zinc-900 sm:text-4xl md:text-[2.5rem]">
            <span className="gg-text-heading-section">Worauf Sie sich</span>
            <br />
            <span className="gg-text-green-forest">verlassen können</span>
          </h2>
        </RevealOnScroll>

        <ul className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {values.map((item, index) => (
            <RevealOnScroll key={item.title} delayMs={index * 70}>
              <li className="gg-surface-card group flex h-full min-w-0 flex-col rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-md shadow-zinc-900/5 ring-1 ring-white transition duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-900/15 hover:shadow-lg motion-reduce:transform-none motion-reduce:hover:translate-y-0 sm:p-6">
                <h3 className="text-base font-bold text-zinc-900 sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.description}</p>
              </li>
            </RevealOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
}
