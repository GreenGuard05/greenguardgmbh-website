import { FaqConversationIcon } from "@/components/faq-conversation-icon";
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
      className="relative isolate overflow-visible border-y border-emerald-900/10 py-20 sm:py-24 md:py-28"
      aria-labelledby="faq-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-[#c8dbbc] via-[#dfead6] to-[#eef6ea]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 z-0 gg-about-dots opacity-40" aria-hidden />
      <div
        className="pointer-events-none absolute -right-20 top-0 z-0 h-96 w-96 rounded-full bg-[#70a340]/20 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-16 bottom-0 z-0 h-80 w-80 rounded-full bg-[#a8e055]/18 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 z-0 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl"
        aria-hidden
      />
      <HomeSectionAmbient scene="faq" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:gap-8 sm:text-left">
          <div className="shrink-0">
            <span className="inline-flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-2xl border border-emerald-700/15 bg-white/95 shadow-lg shadow-emerald-950/10 ring-1 ring-white/90 sm:h-24 sm:w-24">
              <FaqConversationIcon className="h-14 w-14 text-emerald-800 sm:h-16 sm:w-16" />
            </span>
          </div>
          <div className="min-w-0">
            <p className="inline-flex rounded-full bg-white/95 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-300/70">
              Kunden fragten uns auch
            </p>
            <h2
              id="faq-heading"
              className="mt-4 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.5rem]"
            >
              <span className="gg-text-heading-section">Häufig gestellte </span>
              <span className="gg-text-green-forest">Fragen</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-700 sm:text-base">
              Kurze Antworten zu typischen Themen rund um {site.name}. Die Einträge können Sie mit der
              Tastatur öffnen und schließen (Eingabe oder Leertaste, wenn der Titel fokussiert ist).
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-3xl border border-emerald-800/15 bg-white/55 p-3 shadow-xl shadow-emerald-950/10 ring-1 ring-white/80 backdrop-blur-md sm:mt-12 sm:p-4">
          <div className="flex flex-col gap-3 sm:gap-3.5">
            {homeFaqItems.map((item, index) => (
              <details
                key={item.id}
                id={`faq-${item.id}`}
                className={[
                  "gg-faq-item group rounded-2xl border shadow-md backdrop-blur-sm motion-reduce:transition-none",
                  index % 2 === 0
                    ? "border-emerald-700/15 bg-gradient-to-br from-white via-white to-emerald-50/80 shadow-emerald-950/[0.06]"
                    : "border-emerald-600/12 bg-gradient-to-br from-emerald-50/90 via-white to-[#f4f9f0] shadow-emerald-900/[0.05]",
                ].join(" ")}
              >
                <summary className="flex cursor-pointer list-none items-center gap-3 rounded-2xl px-3 py-3.5 outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-[#70a340] focus-visible:ring-offset-2 focus-visible:ring-offset-emerald-100/80 sm:gap-4 sm:px-4 sm:py-4 [&::-webkit-details-marker]:hidden">
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#70a340] to-[#4d7d28] text-xs font-bold tabular-nums text-white shadow-sm ring-1 ring-white/30 sm:h-10 sm:w-10 sm:text-sm"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 flex-1 text-left text-base font-semibold leading-snug text-zinc-900 sm:text-lg">
                    {item.question}
                  </span>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-100/90 text-[#386622] ring-1 ring-emerald-300/60 group-open:bg-[#70a340] group-open:text-white group-open:ring-[#5a8f2e]/50 group-open:shadow-md group-open:shadow-emerald-900/20">
                    <ChevronIcon className="transition-transform duration-200 ease-out group-open:rotate-180 motion-reduce:transition-none" />
                  </span>
                </summary>
                <div className="border-t border-emerald-800/12 bg-gradient-to-b from-emerald-50/50 to-white/90 px-3 pb-4 pt-2 sm:px-4 sm:pb-5">
                  <p className="rounded-xl border-l-[3px] border-[#70a340] bg-white/70 py-2 pl-4 pr-2 text-sm leading-relaxed text-zinc-700 sm:text-base">
                    {item.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
    </section>
  );
}
