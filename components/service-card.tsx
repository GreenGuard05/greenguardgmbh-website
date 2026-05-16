import Image from "next/image";
import Link from "next/link";
import { ServiceVisualIcon, type ServiceVisualIconName } from "@/components/service-visual-icon";
import type { ServiceDetail } from "@/lib/services";

function iconForService(slug: string): ServiceVisualIconName {
  if (slug === "gruenanlage") return "lawnMower";
  if (slug === "hausmeisterservice") return "propertyCare";
  if (slug === "winterdienst") return "snowShovel";
  if (slug === "reinigung") return "mop";
  if (slug === "strauchpflege") return "pruningShears";
  return "sparkle";
}

export function ServiceCard({ service }: { service: ServiceDetail }) {
  const pills = service.tags.slice(0, 3);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-md shadow-zinc-900/5 transition duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-900/10 hover:shadow-lg motion-reduce:hover:translate-y-0">
      <div className="relative h-36 shrink-0 sm:h-44 md:h-48">
        <Image
          src={service.image}
          alt=""
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {service.imageBadge ? (
          <span className="absolute left-4 top-4 rounded-full bg-black/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
            {service.imageBadge}
          </span>
        ) : null}
        <span
          className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-black/55 text-[#a8e055] shadow-lg shadow-black/30 backdrop-blur-md"
          aria-hidden
        >
          <ServiceVisualIcon name={iconForService(service.slug)} className="h-6 w-6" />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
          {service.eyebrow}
        </p>
        <h2 className="mt-1 text-lg font-bold text-zinc-900">{service.title}</h2>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">
          {service.intro}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {pills.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-zinc-200/90 bg-white px-2.5 py-1 text-xs font-medium text-zinc-700 shadow-sm ring-1 ring-zinc-100"
            >
              {tag}
            </li>
          ))}
        </ul>
        <Link
          href={service.href}
          className="mt-4 inline-flex text-sm font-semibold text-[#70a340] transition group-hover:text-[#386622]"
        >
          Mehr erfahren →
        </Link>
      </div>
    </article>
  );
}
