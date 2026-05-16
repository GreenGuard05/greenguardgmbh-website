import type { Metadata } from "next";
import Link from "next/link";
import { CtaPrimary } from "@/components/cta-primary";
import { InnerPageBand, InnerPageHero, InnerPagePhoneLink, InnerPageRoot } from "@/components/inner-page-hero";
import { LocalAreasSection } from "@/components/local-areas-section";
import { buildAreaKeywords, coreLocalSeoKeywords, localAreas } from "@/lib/local-seo";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata(): Promise<Metadata> {
  return createPageMetadata({
    title: "Einsatzgebiet",
    description:
      "Einsatzgebiet der Green Guard GmbH: Facility Management, Grünanlagenpflege, Hausmeisterservice, Winterdienst und Reinigung in Gerbstedt, Hettstedt, Eisleben, Halle (Saale) und Mansfeld-Südharz.",
    path: "/einsatzgebiet",
    keywords: [...coreLocalSeoKeywords, ...localAreas.flatMap((area) => buildAreaKeywords(area.name))],
  });
}

export default function EinsatzgebietPage() {
  return (
    <InnerPageRoot>
      <InnerPageHero
        eyebrow="Einsatzgebiet · Sachsen-Anhalt"
        heroTitle={{
          prefix: "Regional erreichbar",
          accent: "für Objektpflege, Grünpflege und Winterdienst",
          suffix: "in Gerbstedt, Halle (Saale) und Mansfeld-Südharz.",
        }}
        description="Green Guard GmbH betreut private Grundstücke, Wohnanlagen, Verwaltungen und Gewerbeflächen in klar abgestimmten Einsatzgebieten. Wählen Sie den passenden Ort und sehen Sie, welche Leistungen dort sinnvoll geplant werden können."
        tone="dark"
        ambientScene="services"
        actions={
          <>
            <CtaPrimary href="/kontakt">Einsatz anfragen</CtaPrimary>
            <InnerPagePhoneLink variant="dark" />
          </>
        }
      />

      <InnerPageBand ambientScene="services">
        <LocalAreasSection />
      </InnerPageBand>

      <InnerPageBand ambientScene="caretaker" className="border-t border-zinc-200/70">
        <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-6 shadow-lg shadow-zinc-900/5 ring-1 ring-white sm:p-8">
          <p className="inline-flex rounded-full bg-[#eef6e6] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 ring-1 ring-emerald-200/80">
            Orte & Regionen
          </p>
          <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
            Ihr Ort, Ihre Anfrage, <span className="gg-heading-accent gg-heading-motion">klar abgestimmt.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            Wählen Sie Ihr Einsatzgebiet aus und erfahren Sie, welche Leistungen dort besonders sinnvoll geplant werden
            können. Für größere Objekte stimmen wir Umfang, Rhythmus und Anfahrt individuell ab.
          </p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {localAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/einsatzgebiet/${area.slug}`}
                className="rounded-2xl border border-zinc-200 bg-zinc-50/80 p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-white hover:shadow-md motion-reduce:hover:translate-y-0"
              >
                <span className="text-base font-bold text-zinc-900">{area.name}</span>
                <span className="mt-2 block text-sm leading-relaxed text-zinc-600">{area.headline}</span>
              </Link>
            ))}
          </div>
        </div>
      </InnerPageBand>
    </InnerPageRoot>
  );
}
