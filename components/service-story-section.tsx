import { CtaPrimary } from "@/components/cta-primary";
import { HomeSectionAmbient, type HomeAmbientScene } from "@/components/home-section-ambient";
import { ServiceVisualIcon, type ServiceVisualIconName } from "@/components/service-visual-icon";
import type {
  ServiceAudienceItem,
  ServiceProcessStep,
  ServiceSeoBlock,
  ServiceStory,
} from "@/lib/service-scope";

function SectionBadge({ children }: { children: string }) {
  return (
    <p className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
      {children}
    </p>
  );
}

function StepNumber({ n }: { n: number }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#70a340] text-sm font-bold text-white shadow-md shadow-emerald-900/15">
      {n}
    </span>
  );
}

function AccentHeading({
  text,
  accent,
  className = "gg-text-heading-section",
}: {
  text: string;
  accent?: string;
  className?: string;
}) {
  if (!accent || !text.includes(accent)) {
    return <span className={className}>{text}</span>;
  }

  const [before, after] = text.split(accent);
  return (
    <>
      <span className={className}>{before}</span>
      <span className="gg-heading-accent gg-heading-motion">{accent}</span>
      <span className={className}>{after}</span>
    </>
  );
}

function iconForCardTitle(title: string): ServiceVisualIconName {
  const value = title.toLowerCase();

  if (value.includes("ästhetisch") || value.includes("form") || value.includes("saubere form")) return "landscapePlan";
  if (value.includes("fachgerecht")) return "quality";
  if (value.includes("regional")) return "location";
  if (value.includes("alltag")) return "propertyCare";
  if (value.includes("kurze wege") || value.includes("ansprechpartner")) return "person";
  if (value.includes("klare leistung")) return "document";
  if (value.includes("24/7")) return "standby";
  if (value.includes("dokumentiert")) return "routeDoc";
  if (value.includes("planbar")) return "seasonContract";
  if (value.includes("innen")) return "mop";
  if (value.includes("bedarf")) return "calendar";
  if (value.includes("gewerbe")) return "officeClean";
  if (value.includes("wachstum")) return "treeCare";
  if (value.includes("ordentlich")) return "greenWaste";

  return "sparkle";
}

function iconForAudienceTitle(title: string): ServiceVisualIconName {
  const value = title.toLowerCase();

  if (value.includes("hausverwaltung") || value.includes("wohnanlage")) return "propertyCare";
  if (value.includes("gewerbe") || value.includes("büro")) return "officeClean";
  if (value.includes("privat") || value.includes("eigentümer")) return "person";
  if (value.includes("bau") || value.includes("umbau")) return "constructionClean";

  return "inspection";
}

export function ServiceStorySection({
  story,
  audiences,
  process,
  seoBlock,
  ambientScene = "services",
}: {
  story: ServiceStory;
  audiences: ServiceAudienceItem[];
  process: ServiceProcessStep[];
  seoBlock: ServiceSeoBlock;
  ambientScene?: HomeAmbientScene;
}) {
  return (
    <>
      <section className="relative overflow-hidden border-t border-emerald-950/10 py-16 sm:py-20 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-zinc-50/60 to-[#eef4ec]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#70a340]/10 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-[#a8e055]/12 blur-3xl"
          aria-hidden
        />
        <HomeSectionAmbient scene={ambientScene} />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-14">
            <div className="min-w-0">
              <SectionBadge>{story.eyebrow}</SectionBadge>
              <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.5rem]">
                <AccentHeading text={story.heading} accent={story.headingAccent} />
              </h2>
              <p className="mt-5 text-base leading-relaxed text-zinc-700 sm:text-lg">{story.lead}</p>
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                {story.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <CtaPrimary href="/kontakt">Angebot anfragen</CtaPrimary>
                <a
                  href="#leistungsumfang"
                  className="inline-flex items-center rounded-full border border-emerald-900/10 bg-white px-5 py-3 text-sm font-semibold text-emerald-900 shadow-sm transition hover:border-emerald-900/20 hover:bg-emerald-50"
                >
                  Leistungen ansehen
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {story.cards.map((card) => (
                <article
                  key={card.title}
                  className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-md shadow-zinc-900/5 ring-1 ring-white transition duration-300 hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transform-none"
                >
                  <span
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef6e6] text-[#70a340] ring-1 ring-emerald-100"
                    aria-hidden
                  >
                    <ServiceVisualIcon name={iconForCardTitle(card.title)} />
                  </span>
                  <h3 className="text-base font-bold text-zinc-900">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-emerald-950/10 py-16 sm:py-20 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f4f8f1] via-white to-zinc-50"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(112,163,64,0.10),transparent_30%),radial-gradient(circle_at_82%_78%,rgba(168,224,85,0.12),transparent_30%)]"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-14">
            <div>
              <SectionBadge>Für wen geeignet?</SectionBadge>
              <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl">
                <span className="gg-text-heading-section">Passend für Alltag, </span>
                <span className="gg-heading-accent gg-heading-motion">Objekt und Verwaltung.</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                Ob private Fläche, Gewerbeobjekt oder Wohnanlage: Die Leistung wird so geplant, dass sie zum
                tatsächlichen Bedarf und zur Nutzung vor Ort passt.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
              {audiences.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-md shadow-zinc-900/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-lg motion-reduce:transform-none"
                >
                  <span
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#eef6e6] text-[#70a340] ring-1 ring-emerald-100"
                    aria-hidden
                  >
                    <ServiceVisualIcon name={iconForAudienceTitle(item.title)} />
                  </span>
                  <h3 className="text-base font-bold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-14 rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950 via-[#10180f] to-[#213018] p-5 text-white shadow-2xl shadow-emerald-950/35 ring-1 ring-[#a8e055]/10 sm:p-7 md:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-10">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c8e6a0]">
                  Ablauf
                </p>
                <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight sm:text-3xl">
                  Von der Anfrage bis zur <span className="gg-heading-accent gg-heading-motion">laufenden Betreuung.</span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
                  Ein klarer Ablauf hilft besonders mobilen Besuchern und Verwaltungen: schnell verstehen,
                  was passiert, und direkt Kontakt aufnehmen.
                </p>
              </div>
              <ol className="grid gap-4 sm:grid-cols-2">
                {process.map((step, index) => (
                  <li key={step.title} className="flex gap-3 rounded-2xl bg-white/[0.07] p-4 ring-1 ring-white/10">
                    <StepNumber n={index + 1} />
                    <span className="min-w-0">
                      <span className="block font-semibold text-white">{step.title}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-zinc-300">{step.description}</span>
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-t border-emerald-950/10 py-16 sm:py-20 md:py-24">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#f5f8f3] via-white to-zinc-50"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#70a340]/8 blur-3xl"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 rounded-3xl border border-zinc-200/80 bg-white/90 p-6 shadow-lg shadow-zinc-900/5 ring-1 ring-white sm:p-8 lg:grid-cols-[1fr_0.9fr] lg:gap-12">
            <div>
              <SectionBadge>{seoBlock.eyebrow}</SectionBadge>
              <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
                <AccentHeading text={seoBlock.heading} accent={seoBlock.headingAccent} className="text-zinc-900" />
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">{seoBlock.text}</p>
            </div>
            <ul className="grid gap-3 self-center">
              {seoBlock.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="rounded-2xl border border-emerald-900/10 bg-emerald-50/70 px-4 py-3 text-sm font-medium leading-relaxed text-emerald-950"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
