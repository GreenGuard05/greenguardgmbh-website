import Image from "next/image";
import Link from "next/link";
import { CtaOutlineLink } from "@/components/cta-outline-link";
import { germanUppercase } from "@/lib/german-text";
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

const cardAccent =
  "relative overflow-hidden before:absolute before:inset-y-3 before:left-0 before:z-10 before:w-1 before:rounded-full before:bg-[#70a340]";

function cardPills(tags: string[]) {
  return tags.slice(0, 3);
}

function ServiceTag({ children }: { children: string }) {
  return (
    <li className="rounded-full border border-[#70a340]/20 bg-[#eef6e6]/90 px-2.5 py-1 text-xs font-medium text-emerald-950">
      {children}
    </li>
  );
}

function FeaturedCard({ service }: { service: ServiceDetail }) {
  const pills = cardPills(service.tags);
  const intro =
    service.slug === "gruenanlage"
      ? "Professionelle Pflege von Grünflächen, Rasenmähen, Heckenschnitt und Baumpflege – für Privat- & Geschäftskunden."
      : service.intro;

  return (
    <Link
      href={service.href}
      className={`group ${cardAccent} col-span-1 min-h-[280px] overflow-hidden rounded-xl border border-zinc-900/10 shadow-xl shadow-zinc-900/12 ring-1 ring-[#70a340]/20 transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-2xl motion-reduce:transform-none motion-reduce:hover:translate-y-0 sm:min-h-[360px] lg:col-span-2 lg:min-h-[400px]`}
    >
      <Image
        src={service.image}
        alt={`${service.title} – Green Guard GmbH`}
        fill
        className="object-cover transition duration-500 group-hover:scale-[1.02]"
        sizes="(max-width: 1024px) 100vw, 66vw"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/88 via-black/40 to-black/10" />
      <div className="absolute inset-x-0 bottom-0 p-6 pl-5 sm:p-8 sm:pl-7">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#a8e055] sm:text-xs">
          {service.eyebrow}
        </p>
        <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">{service.title}</h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/90 sm:text-base">{intro}</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {pills.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-black/45 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15 backdrop-blur-sm"
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
      className={`group ${cardAccent} flex min-w-0 flex-col overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-md shadow-zinc-900/5 ring-1 ring-zinc-100/90 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#70a340]/25 hover:shadow-lg motion-reduce:transform-none motion-reduce:hover:translate-y-0`}
    >
      <div className="relative h-32 shrink-0 sm:h-40 md:h-44">
        <Image
          src={service.image}
          alt={`${service.title} – Green Guard GmbH`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {service.imageBadge ? (
          <span className="absolute left-4 top-4 rounded-full bg-zinc-950/65 px-3 py-1 text-[10px] font-semibold tracking-wide text-white backdrop-blur-sm ring-1 ring-white/10">
            {germanUppercase(service.imageBadge)}
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-4 pl-3.5 sm:p-5 sm:pl-5">
        <h3 className="text-base font-bold text-zinc-900 sm:text-lg">{service.title}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-zinc-600 sm:mt-2">{service.intro}</p>
        <ul className="mt-3 flex flex-wrap gap-2 sm:mt-4">
          {pills.map((tag) => (
            <ServiceTag key={tag}>{tag}</ServiceTag>
          ))}
        </ul>
        <span className="mt-3 text-sm font-semibold text-[#70a340] transition group-hover:text-[#386622] sm:mt-4">
          Mehr erfahren →
        </span>
      </div>
    </Link>
  );
}

function MietenCard({ card }: { card: MietenHomeCardResolved }) {
  const pills = card.tags;
  return (
    <Link
      href={card.href}
      className={`group ${cardAccent} flex min-w-0 flex-col overflow-hidden rounded-xl border border-zinc-200/90 bg-white shadow-md shadow-zinc-900/5 ring-1 ring-zinc-100/90 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#70a340]/25 hover:shadow-lg motion-reduce:transform-none motion-reduce:hover:translate-y-0`}
    >
      <div className="relative h-32 shrink-0 sm:h-40 md:h-44">
        <Image
          src={card.image}
          alt={`${card.title} – Gerätemiete Green Guard GmbH`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <span className="absolute left-4 top-4 rounded-full bg-zinc-950/65 px-3 py-1 text-[10px] font-semibold tracking-wide text-white backdrop-blur-sm ring-1 ring-white/10">
          {germanUppercase(card.eyebrow)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 pl-3.5 sm:p-5 sm:pl-5">
        <h3 className="text-base font-bold text-zinc-900 sm:text-lg">{card.title}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-zinc-600 sm:mt-2">{card.intro}</p>
        <ul className="mt-3 flex flex-wrap gap-2 sm:mt-4">
          {pills.map((tag) => (
            <ServiceTag key={tag}>{tag}</ServiceTag>
          ))}
        </ul>
        <span className="mt-3 text-sm font-semibold text-[#70a340] transition group-hover:text-[#386622] sm:mt-4">
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
  const { gruen, haus, solarpark, boeschung, rowClassic, strauch } =
    servicesForHomeGridFrom(servicesResolved);

  return (
    <section className="relative isolate overflow-visible border-t border-zinc-200/70 py-8 max-sm:py-7 sm:py-20 md:py-24">
      <div className="pointer-events-none absolute inset-0 z-0 bg-white" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white via-[#fafcf8] to-[#f4f9ef]/90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_55%_45%_at_92%_18%,rgba(168,224,85,0.14),transparent_50%),radial-gradient(ellipse_50%_40%_at_8%_78%,rgba(112,163,64,0.12),transparent_48%),radial-gradient(ellipse_40%_35%_at_42%_12%,rgba(134,197,94,0.08),transparent_45%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 z-0 gg-about-dots opacity-[0.38]" aria-hidden />
      <div
        className="gg-float-soft pointer-events-none absolute -right-12 top-[10%] z-0 h-[22rem] w-[22rem] rounded-full bg-[#70a340]/12 blur-3xl motion-reduce:animate-none"
        aria-hidden
      />
      <div
        className="gg-float-soft pointer-events-none absolute -left-16 bottom-[8%] z-0 h-64 w-64 rounded-full bg-[#a8e055]/10 blur-3xl motion-reduce:animate-none"
        style={{ animationDelay: "2s" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[18%] bottom-[20%] z-0 h-40 w-40 rounded-full bg-emerald-300/10 blur-2xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#70a340]/25 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <p className="inline-flex rounded-full border border-[#70a340]/25 bg-[#eef6e6] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-900">
              Facility Management · Sachsen-Anhalt
            </p>
            <h2 className="mt-2.5 text-3xl font-bold leading-[1.12] tracking-tight text-zinc-900 max-sm:text-[1.4rem] sm:mt-4 sm:text-4xl md:text-[2.35rem]">
              Alle Leistungen
              <br />
              <span className="gg-heading-accent gg-heading-motion font-semibold">aus einer Hand.</span>
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:mt-3 sm:text-base">
              Für Privat- & Geschäftskunden – von Grünpflege und Solarparkpflege bis Böschungsmähen
              und Winterdienst.
            </p>
          </div>
          <p className="hidden max-w-md text-sm leading-relaxed text-zinc-600 sm:block lg:max-w-sm lg:pb-1 lg:text-right lg:text-base">
            Von Gerbstedt bis Halle (Saale) – zuverlässig, termingerecht und mit einem festen
            Ansprechpartner für Ihr Objekt.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-10 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          <FeaturedCard service={gruen} />
          <StandardCard service={haus} />
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4 lg:mt-6 lg:gap-6">
          <StandardCard service={solarpark} />
          <StandardCard service={boeschung} />
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4 lg:mt-6 lg:grid-cols-4 lg:gap-6">
          {rowClassic.map((s) => (
            <StandardCard key={s.slug} service={s} />
          ))}
          <StandardCard service={strauch} />
          <MietenCard card={mietenCard} />
        </div>

        <div className="mt-7 flex justify-center sm:mt-12">
          <CtaOutlineLink href="/dienstleistungen">Alle Dienstleistungen ansehen</CtaOutlineLink>
        </div>
      </div>
    </section>
  );
}
