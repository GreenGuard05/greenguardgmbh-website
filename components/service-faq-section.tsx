import type { ServiceFaq } from "@/lib/service-faqs";

export function ServiceFaqSection({ title, faqs }: { title: string; faqs: ServiceFaq[] }) {
  if (!faqs.length) return null;

  return (
    <div className="rounded-3xl border border-zinc-200/80 bg-white/90 p-6 shadow-lg shadow-zinc-900/5 ring-1 ring-white sm:p-8">
      <p className="inline-flex rounded-full bg-[#eef6e6] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 ring-1 ring-emerald-200/80">
        FAQ
      </p>
      <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-3xl">
        Häufige Fragen zu <span className="gg-heading-accent gg-heading-motion">{title}</span>
      </h2>
      <div className="mt-7 grid gap-3">
        {faqs.map((faq) => (
          <details
            key={faq.question}
            className="group rounded-2xl border border-zinc-200 bg-zinc-50/80 p-4 open:bg-white open:shadow-sm"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-bold text-zinc-900">
              {faq.question}
              <span className="rounded-full bg-white px-2 py-1 text-xs text-zinc-500 ring-1 ring-zinc-200 transition group-open:rotate-180">
                ↓
              </span>
            </summary>
            <p className="mt-3 border-t border-zinc-200 pt-3 text-sm leading-relaxed text-zinc-600">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
