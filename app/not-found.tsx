import type { Metadata } from "next";
import Link from "next/link";
import { CtaPrimary } from "@/components/cta-primary";
import { InnerPageRoot } from "@/components/inner-page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  description: `Die angeforderte Seite existiert nicht. Zurück zur Startseite von ${site.name}.`,
  robots: { index: false, follow: true },
};

const quickLinks = [
  { href: "/", label: "Startseite" },
  { href: "/dienstleistungen", label: "Dienstleistungen" },
  { href: "/einsatzgebiet", label: "Einsatzgebiet" },
  { href: "/kontakt", label: "Kontakt" },
] as const;

export default function NotFound() {
  return (
    <InnerPageRoot>
      <section className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#70a340]">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
          Seite nicht gefunden
        </h1>
        <p className="mt-4 text-base leading-relaxed text-zinc-600">
          Die angeforderte Adresse gibt es nicht oder wurde verschoben. Nutzen Sie die Links unten oder
          kehren Sie zur Startseite zurück.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <CtaPrimary href="/">Zur Startseite</CtaPrimary>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-full border border-zinc-200 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 shadow-sm transition hover:border-emerald-900/20 hover:shadow-md"
          >
            Kontakt aufnehmen
          </Link>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-emerald-800">
          {quickLinks.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="underline decoration-emerald-200 underline-offset-2 hover:text-emerald-950">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </InnerPageRoot>
  );
}
