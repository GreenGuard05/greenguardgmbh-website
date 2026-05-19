import type { ServiceScope } from "@/lib/service-scope";

function ScopeBullet() {
  return (
    <span
      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#70a340]"
      aria-hidden
    />
  );
}

function AccentHeading({ text, accent }: { text: string; accent?: string }) {
  if (!accent || !text.includes(accent)) {
    return <span className="gg-text-heading-section">{text}</span>;
  }

  const [before, after] = text.split(accent);
  return (
    <>
      <span className="gg-text-heading-section">{before}</span>
      <span className="gg-heading-accent gg-heading-motion">{accent}</span>
      <span className="gg-text-heading-section">{after}</span>
    </>
  );
}

export function ServiceScopeSection({ scope }: { scope: ServiceScope }) {
  const hasHighlights = scope.highlights.length > 0;

  return (
    <section id="leistungsumfang" className="relative overflow-hidden border-t border-emerald-950/10 py-20 sm:py-24 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-100/95 via-white to-zinc-50/90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-[20%] h-64 w-64 rounded-full bg-[#70a340]/8 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#70a340]/25 to-transparent"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`grid gap-12 lg:items-start lg:gap-14 xl:gap-16 ${hasHighlights ? "lg:grid-cols-2" : "max-w-3xl"}`}
        >
          <div className="min-w-0">
            <p className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
              {scope.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.5rem]">
              <AccentHeading text={scope.heading} accent={scope.headingAccent} />
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">{scope.intro}</p>
            <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {scope.columns.map((column, colIndex) => (
                <ul key={colIndex} className="space-y-3">
                  {column.map((item) => (
                    <li key={item} className="flex min-w-0 items-start gap-2.5 text-sm text-zinc-700 sm:text-base">
                      <ScopeBullet />
                      <span className="min-w-0">{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {hasHighlights ? (
            <ul className="flex flex-col gap-4 sm:gap-5">
              {scope.highlights.map((item) => (
                <li
                  key={item.title}
                  className="gg-surface-card rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-md shadow-zinc-900/5 ring-1 ring-white transition duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-900/15 hover:shadow-lg motion-reduce:transform-none motion-reduce:hover:translate-y-0 sm:p-6"
                >
                  <h3 className="text-base font-bold text-zinc-900">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{item.description}</p>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
