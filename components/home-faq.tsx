import { HomeSectionAmbient } from "@/components/home-section-ambient";
import { homeFaqItems } from "@/lib/faq";
import { site } from "@/lib/site";

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFaqItems.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

/**
 * Barrierearm: natives disclosure mit details/summary
 * (Tastatur, Screenreader, kein JavaScript nötig).
 */
export function HomeFaq() {
  const json = JSON.stringify(faqJsonLd());

  return (
    <section
      id="faq"
      className="relative overflow-hidden border-y border-emerald-900/10 py-20 sm:py-24 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#dce8d6] via-[#eef4ec] to-[#f6faf7]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#70a340]/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#a8e055]/10 blur-3xl"
        aria-hidden
      />
      <HomeSectionAmbient scene="faq" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        <p className="inline-block rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
          FAQ
        </p>
        <h2
          id="faq-heading"
          className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl"
        >
          Häufig gestellte Fragen
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700 sm:text-base">
          Kurze Antworten zu typischen Themen rund um {site.name}. Die Einträge können Sie mit der
          Tastatur öffnen und schließen (Eingabe oder Leertaste, wenn der Titel fokussiert ist).
        </p>

        <div className="mt-10 flex flex-col gap-3.5 sm:gap-4">
          {homeFaqItems.map((item) => (
            <details
              key={item.id}
              id={`faq-${item.id}`}
              className="group rounded-2xl border border-emerald-900/10 bg-white/85 shadow-md shadow-emerald-950/5 backdrop-blur-sm open:border-emerald-800/18 open:bg-white open:shadow-lg open:shadow-emerald-950/[0.07] motion-reduce:transition-none"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-4 py-4 outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-[#70a340] focus-visible:ring-offset-2 focus-visible:ring-offset-[#eef4ec] sm:px-5 sm:py-5 [&::-webkit-details-marker]:hidden">
                <span className="min-w-0 flex-1 text-left text-base font-semibold leading-snug text-zinc-900 sm:text-lg">
                  {item.question}
                </span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[#386622] ring-1 ring-emerald-200/80 group-open:bg-[#70a340] group-open:text-white group-open:ring-[#70a340]/40">
                  <ChevronIcon className="transition-transform duration-200 ease-out group-open:rotate-180 motion-reduce:transition-none" />
                </span>
              </summary>
              <div className="border-t border-emerald-900/10 px-4 pb-5 pt-1 sm:px-5">
                <p className="border-l-2 border-[#70a340]/50 pl-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: json }}
      />
    </section>
  );
}
