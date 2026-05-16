"use client";

import Image from "next/image";
import { ChipCheckIcon } from "@/components/chip-check-icon";
import { HomeSectionAmbient } from "@/components/home-section-ambient";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { site } from "@/lib/site";

const checklist = [
  "Über 15 Jahre Erfahrung in Sachsen-Anhalt",
  "Persönlicher Ansprechpartner für Ihr Objekt",
  "Schnelle Reaktionszeiten und flexible Termine",
  "Moderne Profi-Geräte – gepflegt und einsatzbereit",
  "Transparente Festpreisangebote ohne Überraschungen",
];

function IconSprout({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 22v-6M12 16c-3 0-5-2-5-5 0-3 2-8 5-8s5 5 5 8c0 3-2 5-5 5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 10c-2-1-4-1-6 1M15 10c2-1 4-1 6 1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconSun({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconHandshake({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="m11 17 2 2a1.74 1.74 0 1 0 3-3l-3.27-3.27M15 11l2.29 2.29c1 1 2.71 1 3.71 0s1-2.71 0-3.71l-5.58-5.58a1 1 0 0 0-1.42 0l-6.29 6.3a1 1 0 0 0 0 1.41l2.09 2.09"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7.5 10.5 5 8M2 12l2 2M22 12l-2 2" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.44 12.44 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.44 12.44 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMapPin({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.55" />
    </svg>
  );
}

function IconFile({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

function IconRefresh({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 3v5h5M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 21v-5h-5" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCalendar({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.55" />
      <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

function IconClock({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.55" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  );
}

function IconUser({ className }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.55" />
    </svg>
  );
}

function ChapterPill({ n, icon: Icon }: { n: string; icon: typeof IconSprout }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
      <Icon className="h-4 w-4 text-[#70a340]" />
      Kapitel {n}
    </span>
  );
}

const steps = [
  {
    title: "Kurz anrufen oder schreiben",
    body: "Wir klären Umfang, Dringlichkeit und den besten Termin für einen Vor-Ort-Termin.",
    icon: IconPhone,
  },
  {
    title: "Besichtigung vor Ort",
    body: "Wir hören zu, messen mit und dokumentieren, was Ihr Objekt wirklich braucht.",
    icon: IconMapPin,
  },
  {
    title: "Festpreisangebot",
    body: "Transparent, nachvollziehbar, ohne versteckte Posten.",
    icon: IconFile,
  },
  {
    title: "Umsetzung und Feedback",
    body: "Wir bleiben erreichbar und passen Rhythmus und Leistung an Ihre Saison an.",
    icon: IconRefresh,
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
      <HomeSectionAmbient scene="about" />

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
              <ChapterPill n="1" icon={IconSprout} />
              <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">Aus der Region – fest im Gelände</h2>
              <p className="mt-4 text-base leading-relaxed text-zinc-700 sm:text-lg">
                Bei {site.name} fing alles mit echter Handarbeit an: Gehwege freimachen, Rasen sauber schneiden, Hecken
                wieder in Form bringen. Was als verlässliche Hilfe vor Ort begann, ist heute ein eingetragenes
                Facility-Management-Unternehmen – weiterhin mit derselben Handschrift: persönlich, pünktlich, gründlich.
              </p>
            </RevealOnScroll>

            <RevealOnScroll emphasis delayMs={120}>
              <ChapterPill n="2" icon={IconSun} />
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
                <footer className="relative mt-5 flex items-center gap-2 text-sm text-[#d4f5a8]/95">
                  <IconHandshake className="h-4 w-4 shrink-0 text-[#a8e055]" />
                  <span>— {site.name}, Gerbstedt</span>
                </footer>
              </blockquote>
            </RevealOnScroll>
          </div>
        </div>

        <RevealOnScroll emphasis>
          <div className="grid gap-6 rounded-2xl border border-zinc-200/80 bg-white/90 p-6 shadow-md shadow-zinc-900/5 backdrop-blur-[2px] sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-zinc-200/80 sm:p-8">
            {[
              { k: "15+", v: "Jahre Erfahrung", s: "in Sachsen-Anhalt", Icon: IconCalendar },
              { k: "24 h", v: "Rückmeldung", s: "auf Ihre Anfrage", Icon: IconClock },
              { k: "1", v: "Ansprechpartner", s: "vom Ersttermin bis zur Rechnung", Icon: IconUser },
            ].map((item) => (
              <div key={item.k} className="flex flex-col items-center text-center sm:px-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200/80">
                  <item.Icon className="h-6 w-6" />
                </span>
                <p className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">{item.k}</p>
                <p className="mt-1 text-sm font-semibold text-emerald-800">{item.v}</p>
                <p className="mt-0.5 text-xs text-zinc-500">{item.s}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll emphasis delayMs={80}>
          <div className="rounded-2xl border border-zinc-200/70 bg-white/80 p-6 shadow-md ring-1 ring-zinc-100 sm:p-8">
            <ChapterPill n="3" icon={IconHandshake} />
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">So läuft die Zusammenarbeit mit uns</h2>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6">
              {steps.map((step, i) => (
                <li key={step.title} className="flex gap-4 rounded-xl border border-zinc-100 bg-zinc-50/60 p-4 ring-1 ring-zinc-100/80">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-emerald-800 shadow-sm ring-1 ring-emerald-200/70">
                    <step.icon className="h-5 w-5" />
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
                  <ChipCheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
