import Image from "next/image";
import Link from "next/link";
import type { ServiceDetail } from "@/lib/services";

export function ServiceCard({ service }: { service: ServiceDetail }) {
  const pills = service.tags.slice(0, 3);

  return (
    <Link
      href={service.href}
      className="gg-surface-card group flex min-w-0 flex-col overflow-hidden rounded-xl border border-zinc-200/80 bg-white shadow-md shadow-zinc-900/5 ring-1 ring-zinc-100/80 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-[#70a340]/25 hover:shadow-lg motion-reduce:transform-none motion-reduce:hover:translate-y-0 sm:flex-row sm:items-stretch"
    >
      <div className="relative aspect-[16/9] w-full shrink-0 sm:aspect-auto sm:w-[38%] sm:max-w-[11.5rem] sm:min-h-[9.25rem] md:max-w-[12.5rem]">
        <Image
          src={service.image}
          alt={`${service.title} – Green Guard GmbH`}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 220px"
        />
        {service.imageBadge ? (
          <span className="absolute left-3 top-3 rounded-full bg-black/55 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm sm:left-3 sm:top-3">
            {service.imageBadge}
          </span>
        ) : null}
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-4 sm:justify-center sm:py-4 sm:pl-4 sm:pr-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-zinc-500">
          {service.eyebrow}
        </p>
        <h2 className="mt-0.5 text-base font-bold leading-snug text-zinc-900 sm:text-[1.05rem]">
          {service.title}
        </h2>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-zinc-600">{service.intro}</p>
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {pills.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-[#70a340]/15 bg-[#eef6e6]/80 px-2 py-0.5 text-[11px] font-medium text-emerald-950"
            >
              {tag}
            </li>
          ))}
        </ul>
        <span className="mt-3 text-sm font-semibold text-[#70a340] transition group-hover:text-[#386622]">
          Mehr erfahren →
        </span>
      </div>
    </Link>
  );
}
