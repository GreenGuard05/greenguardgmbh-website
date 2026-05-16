"use client";

import { HomeSectionAmbient } from "@/components/home-section-ambient";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
function IconAward({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8.5" r="4.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M8.2 13.8 7 20l5-2.5L17 20l-1.2-6.2M9.5 13.8h5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconLeaf({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21c-5.5-7.5-5.5-14 0-17 5.5 3 5.5 9.5 0 17"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 21V6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconShield({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconUsers({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="9" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

const values = [
  {
    title: "Zuverlässigkeit",
    description: "Pünktlichkeit und Verlässlichkeit sind unser Markenzeichen – bei jedem Einsatz.",
    Icon: IconAward,
  },
  {
    title: "Qualität",
    description: "Modernste Gerätschaften, umweltbewusstes Handeln und schonende Methoden – für Ergebnisse, die überzeugen.",
    Icon: IconLeaf,
  },
  {
    title: "Transparenz",
    description: "Klare Festpreisangebote, faire Konditionen und offene Kommunikation.",
    Icon: IconShield,
  },
  {
    title: "Regionalität",
    description: `Als lokales Unternehmen aus Gerbstedt kennen wir die Region und ihre Besonderheiten.`,
    Icon: IconUsers,
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
      <HomeSectionAmbient scene="values" />
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
              <li className="group flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-md shadow-zinc-900/5 ring-1 ring-white transition duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-900/15 hover:shadow-lg motion-reduce:transform-none motion-reduce:hover:translate-y-0 sm:p-6">
                <span
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#eef6e6] text-[#70a340] ring-1 ring-emerald-100 transition group-hover:bg-[#e2f0d4]"
                  aria-hidden
                >
                  <item.Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-zinc-900 sm:text-lg">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.description}</p>
              </li>
            </RevealOnScroll>
          ))}
        </ul>
      </div>
    </section>
  );
}
