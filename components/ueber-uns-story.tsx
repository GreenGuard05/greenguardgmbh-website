"use client";

import Image from "next/image";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { site } from "@/lib/site";

const checklist = [
  "Über 15 Jahre Erfahrung in Sachsen-Anhalt",
  "Persönlicher Ansprechpartner für Ihr Objekt",
  "Schnelle Reaktionszeiten und flexible Termine",
  "Moderne Profi-Geräte – gepflegt und einsatzbereit",
  "Transparente Festpreisangebote ohne Überraschungen",
];

function StoryBullet() {
  return (
    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" aria-hidden />
  );
}

function ChapterPill({ n }: { n: string }) {
  return (
    <span className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
      Kapitel {n}
    </span>
  );
}

const steps = [
  {
    title: "Kurz anrufen oder schreiben",
    body: "Wir klären Umfang, Dringlichkeit und den besten Termin für einen Vor-Ort-Termin.",
  },
  {
    title: "Besichtigung vor Ort",
    body: "Wir hören zu, messen mit und dokumentieren, was Ihr Objekt wirklich braucht.",
  },
  {
    title: "Festpreisangebot",
    body: "Transparent, nachvollziehbar, ohne versteckte Posten.",
  },
  {
    title: "Umsetzung und Feedback",
    body: "Wir bleiben erreichbar und passen Rhythmus und Leistung an Ihre Saison an.",
  },
] as const;

export type UeberUnsStoryMediaProps = {
  aboutCollage: { hedge: string; lawn: string; mower: string };
};

export function UeberUnsStory({ aboutCollage }: UeberUnsStoryMediaProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-emerald-900/10 bg-gradient-to-br from-zinc-50/95 via-white to-[#e4efe0] py-8 shadow-[0_1px_0_rgba(255,255,255,0.8)_inset] ring-1 ring-zinc-900/[0.04] sm:py-10 md:py-12">
      <div className="pointer-events-none absolute inset-0 gg-about-dots opacity-[0.55]" aria-hidden />
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-[#70a340]/12 blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-1/3 h-64 w-64 rounded-full bg-[#a8e055]/15 blur-3xl" aria-hidden />
      <div className="relative z-10 mx-auto max-w-6xl space-y-14 px-1 sm:space-y-16 md:space-y-20 sm:px-2">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <RevealOnScroll className="col-span-2" delayMs={0}>
              <div className="gg-about-card-tilt relative aspect-[21/9] min-h-[10rem] rounded-2xl shadow-lg ring-1 ring-zinc-900/10 sm:min-h-[12rem]">
                <Image
                  src={aboutCollage.hedge}
                  alt="Gepflegte Hecke und Weg"
                  fill
                  className="gg-about-card-tilt-media object-cover motion-reduce:transform-none"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <span className="pointer-events-none absolute left-3 top-3 z-10 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm sm:left-4 sm:top-4">
                  Vor Ort
                </span>
              </div>
            </RevealOnScroll>
            <RevealOnScroll delayMs={90}>
              <div className="gg-about-card-tilt relative aspect-square min-h-[9rem] rounded-2xl shadow-md ring-1 ring-zinc-900/10 sm:min-h-[11rem]">
                <Image
                  src={aboutCollage.lawn}
                  alt="Rasenfläche"
                  fill
                  className="gg-about-card-tilt-media object-cover motion-reduce:transform-none"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delayMs={180}>
              <div className="gg-about-card-tilt relative aspect-square min-h-[9rem] rounded-2xl shadow-md ring-1 ring-zinc-900/10 sm:min-h-[11rem]">
                <Image
                  src={aboutCollage.mower}
                  alt="Rasenmäher im Einsatz"
                  fill
                  className="gg-about-card-tilt-media object-cover motion-reduce:transform-none"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </RevealOnScroll>
          </div>

          <div className="min-w-0 space-y-10 lg:pl-1">
            <RevealOnScroll emphasis>
              <ChapterPill n="1" />
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">Aus der Region – fest im Gelände</h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
                Bei {site.name} fing alles mit echter Handarbeit an: Gehwege freimachen, Rasen sauber schneiden, Hecken
                wieder in Form bringen. Was als verlässliche Hilfe vor Ort begann, ist heute ein eingetragenes
                Facility-Management-Unternehmen – weiterhin mit derselben Handschrift: persönlich, pünktlich, gründlich.
              </p>
            </RevealOnScroll>

            <RevealOnScroll emphasis delayMs={120}>
              <ChapterPill n="2" />
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">Warum wir jeden Morgen starten</h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
                Grünflächen und Gebäude sind das erste, was Besucher sehen. Wir wollen, dass Sie stolz sind – und dass
                Mieter, Kundinnen und Gäste sofort merken: Hier wird wertgeschätzt. Dafür kombinieren wir Planbarkeit
                (feste Termine, klare Absprachen) mit dem Blick fürs Detail, den man nur hat, wenn man selbst noch mit
                auf der Fläche steht.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delayMs={200}>
              <blockquote className="relative overflow-hidden rounded-2xl bg-zinc-950 px-6 py-8 text-white shadow-xl ring-1 ring-white/10 sm:px-8 sm:py-10">
                <span
                  className="pointer-events-none absolute -right-4 -top-6 text-[7rem] font-serif leading-none text-white/[0.07] gg-float-soft"
                  aria-hidden
                >
                  “
                </span>
                <p className="relative text-lg font-medium leading-relaxed text-zinc-100 sm:text-xl">
                  Qualität ist kein Zufall – sie entsteht, wenn man das gleiche Objekt Woche für Woche so betreut, als
                  wäre es das eigene.
                </p>
                <footer className="relative mt-5 text-sm text-[#d4f5a8]/95">
                  — Justin Zweidorf, Geschäftsführer
                </footer>
              </blockquote>
            </RevealOnScroll>
          </div>
        </div>

        <RevealOnScroll emphasis>
          <div className="grid gap-6 rounded-2xl border border-zinc-200/80 bg-white/90 p-6 shadow-md shadow-zinc-900/5 backdrop-blur-[2px] sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-zinc-200/80 sm:p-8">
            {[
              { k: "15+", v: "Jahre Erfahrung", s: "in Sachsen-Anhalt" },
              { k: "24 h", v: "Rückmeldung", s: "auf Ihre Anfrage" },
              { k: "1", v: "Ansprechpartner", s: "vom Ersttermin bis zur Rechnung" },
            ].map((item) => (
              <div key={item.k} className="flex flex-col items-center text-center sm:px-4">
                <p className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">{item.k}</p>
                <p className="mt-1 text-sm font-semibold text-emerald-800">{item.v}</p>
                <p className="mt-0.5 text-xs text-zinc-500">{item.s}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll emphasis delayMs={80}>
          <div className="rounded-2xl border border-zinc-200/70 bg-white/80 p-6 shadow-md ring-1 ring-zinc-100 sm:p-8">
            <ChapterPill n="3" />
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">So läuft die Zusammenarbeit mit uns</h2>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4 rounded-xl border border-zinc-100 bg-zinc-50/60 p-4 ring-1 ring-zinc-100/80">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#70a340] text-sm font-bold text-white shadow-sm">
                    {i + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-400">Schritt {i + 1}</span>
                    <span className="mt-1 block font-semibold text-zinc-900">{step.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-zinc-600">{step.body}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delayMs={100}>
          <div className="rounded-2xl border border-zinc-200/80 bg-gradient-to-br from-white to-emerald-50/30 p-6 shadow-md shadow-zinc-900/5 sm:p-8">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900 sm:text-xl">Das können Sie von uns erwarten</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-xl bg-white/70 px-3 py-2.5 text-sm text-zinc-700 ring-1 ring-zinc-100 sm:text-base">
                  <StoryBullet />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
