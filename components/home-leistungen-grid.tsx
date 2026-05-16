import Image from "next/image";
import Link from "next/link";
import { CtaOutlineLink } from "@/components/cta-outline-link";
import { HomeSectionAmbient } from "@/components/home-section-ambient";
import type { ServiceDetail } from "@/lib/services";
import { servicesForHomeGridFrom } from "@/lib/services";

export type MietenHomeCardResolved = {
  title: string;
  eyebrow: string;
  intro: string;
  tags: readonly string[];
  href: string;
  image: string;
};

function cardPills(tags: string[]) {
  return tags.slice(0, 3);
}

function FeaturedCard({ service }: { service: ServiceDetail }) {
  const pills = cardPills(service.tags);
  const intro =
    service.slug === "gruenanlage"
      ? "Professionelle Pflege von Grünflächen, Rasenmähen, Heckenschnitt und Baumpflege für Wohn- und Gewerbeobjekte."
      : service.intro;

  return (
    <Link
      href={service.href}
      className="group relative col-span-1 min-h-[380px] overflow-hidden rounded-2xl shadow-2xl shadow-zinc-900/15 ring-1 ring-white/15 transition duration-300 ease-out will-change-transform hover:-translate-y-1 hover:shadow-[0_28px_50px_-12px_rgba(0,0,0,0.45)] motion-reduce:transform-none motion-reduce:hover:translate-y-0 lg:col-span-2 lg:min-h-[420px]"
    >
      <Image
        src={service.image}
        alt=""
        fill
        className="object-cover transition duration-500 group-hover:scale-[1.02]"
        sizes="(max-width: 1024px) 100vw, 66vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#a8e055]">
          {service.eyebrow}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
          {service.title}
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">
          {intro}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {pills.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/10 backdrop-blur-sm"
            >
              {tag}
            </li>
          ))}
        </ul>
        <span className="mt-5 inline-flex items-center text-sm font-semibold text-[#a8e055] transition group-hover:text-[#d4f5a8]">
          Mehr erfahren →
        </span>
      </div>
    </Link>
  );
}

function StandardCard({ service }: { service: ServiceDetail }) {
  const pills = cardPills(service.tags);
  return (
    <Link
      href={service.href}
      className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-md shadow-zinc-900/5 ring-1 ring-white transition duration-300 ease-out will-change-transform hover:-translate-y-0.5 hover:border-emerald-900/15 hover:shadow-lg motion-reduce:transform-none motion-reduce:hover:translate-y-0"
    >
      <div className="relative h-36 shrink-0 sm:h-44 md:h-48">
        <Image
          src={service.image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {service.imageBadge ? (
          <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            {service.imageBadge}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-zinc-900">{service.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
          {service.intro}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {pills.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700"
            >
              {tag}
            </li>
          ))}
        </ul>
        <span className="mt-4 text-sm font-semibold text-[#70a340] transition group-hover:text-[#386622]">
          Mehr erfahren →
        </span>
      </div>
    </Link>
  );
}

function MietenCard({ card, className = "" }: { card: MietenHomeCardResolved; className?: string }) {
  const pills = card.tags;
  return (
    <Link
      href={card.href}
      className={`group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-md shadow-zinc-900/5 ring-1 ring-white transition duration-300 ease-out will-change-transform hover:-translate-y-0.5 hover:border-emerald-900/15 hover:shadow-lg motion-reduce:transform-none motion-reduce:hover:translate-y-0 lg:max-w-md lg:justify-self-start ${className}`}
    >
      <div className="relative h-36 shrink-0 sm:h-44 md:h-48">
        <Image
          src={card.image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {card.eyebrow}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-zinc-900">{card.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
          {card.intro}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {pills.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700"
            >
              {tag}
            </li>
          ))}
        </ul>
        <span className="mt-4 text-sm font-semibold text-[#70a340] transition group-hover:text-[#386622]">
          Mehr erfahren →
        </span>
      </div>
    </Link>
  );
}

export function HomeLeistungenGrid({
  servicesResolved,
  mietenCard,
}: {
  servicesResolved: ServiceDetail[];
  mietenCard: MietenHomeCardResolved;
}) {
  const { gruen, haus, row2a, strauch } = servicesForHomeGridFrom(servicesResolved);

  return (
    <section className="relative overflow-hidden border-t border-zinc-200/70 py-20 sm:py-24 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-100/95 via-white to-zinc-50/90"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#70a340]/25 to-transparent" aria-hidden />
      <HomeSectionAmbient scene="services" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
              Facility Management Sachsen-Anhalt
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight text-zinc-900 sm:text-4xl md:text-[2.5rem]">
              Alle Leistungen
              <br />
              <span className="font-semibold text-zinc-500">aus einer Hand.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-zinc-600 lg:max-w-sm lg:text-right lg:text-base">
            Von Gerbstedt bis Halle (Saale) – wir betreuen Ihre Immobilien zuverlässig,
            termingerecht und mit klarer Ansprechpartner-Struktur.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:gap-6 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          <FeaturedCard service={gruen} />
          <StandardCard service={haus} />
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-6 lg:grid-cols-3 lg:gap-6">
          {row2a.map((s) => (
            <StandardCard key={s.slug} service={s} />
          ))}
          <StandardCard service={strauch} />
          <MietenCard card={mietenCard} className="lg:col-span-3" />
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <CtaOutlineLink href="/dienstleistungen">Alle Dienstleistungen ansehen</CtaOutlineLink>
        </div>
      </div>
    </section>
  );
}
