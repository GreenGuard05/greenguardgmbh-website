import Link from "next/link";
import { CtaPrimary } from "@/components/cta-primary";
import { googleReviewCount } from "@/lib/reviews";
import { mailtoHref, site } from "@/lib/site";

/** Große Hintergrund-Grafiken (Telefon + Brief), kein gemischtes Ambient-Motiv */
function ContactCtaBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg
        className="gg-cta-contact-icon-phone absolute left-[-6%] top-[28%] h-[min(52vw,14rem)] w-[min(52vw,14rem)] text-emerald-800/[0.14] motion-reduce:animate-none sm:left-[2%] sm:top-[22%] sm:h-56 sm:w-56 md:h-64 md:w-64"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M6.6 10.8c1.6 3 4.6 5.9 7.6 7.6l2.5-2.5c.4-.4 1-.5 1.4-.2 1.2.6 2.5.9 3.9.9.8 0 1.4.6 1.4 1.4V20c0 .8-.6 1.4-1.4 1.4C9.9 21.4 2.6 14.1 2.6 4.4 2.6 3.6 3.2 3 4 3h2.5c.8 0 1.4.6 1.4 1.4 0 1.4.3 2.7.9 3.9.2.4.1 1-.2 1.4L6.6 10.8z" />
      </svg>
      <svg
        className="gg-cta-contact-icon-mail absolute right-[-8%] top-[12%] h-[min(48vw,13rem)] w-[min(48vw,13rem)] text-emerald-800/[0.13] motion-reduce:animate-none sm:right-[3%] sm:top-[10%] sm:h-52 sm:w-52 md:h-60 md:w-60"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3.25" y="5.25" width="17.5" height="13.5" rx="1.75" />
        <path d="M3.6 6.4 12 12.35l8.4-5.95" />
      </svg>
    </div>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M6.6 10.8c1.6 3 4.6 5.9 7.6 7.6l2.5-2.5c.4-.4 1-.5 1.4-.2 1.2.6 2.5.9 3.9.9.8 0 1.4.6 1.4 1.4V20c0 .8-.6 1.4-1.4 1.4C9.9 21.4 2.6 14.1 2.6 4.4 2.6 3.6 3.2 3 4 3h2.5c.8 0 1.4.6 1.4 1.4 0 1.4.3 2.7.9 3.9.2.4.1 1-.2 1.4L6.6 10.8z"
      />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z"
      />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z"
      />
    </svg>
  );
}

export function HomePreFooterCta() {
  const closingStats = [
    { value: "5.0★", label: "Google Bewertung" },
    { value: String(googleReviewCount), label: "Google-Rezensionen" },
    { value: "15+", label: "Jahre Erfahrung" },
    { value: "100%", label: "Kundenzufriedenheit" },
  ];

  return (
    <section className="relative overflow-hidden border-t border-zinc-200/60 py-20 text-center sm:py-24 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-50/95 via-white to-[#eef4ec]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 top-[18%] h-72 w-72 rounded-full bg-[#70a340]/12 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-[22%] h-64 w-64 rounded-full bg-[#a8e055]/10 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#70a340]/20 to-transparent"
        aria-hidden
      />
      <ContactCtaBackdrop />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          href="/kontakt"
          className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90 transition hover:ring-emerald-300/90"
        >
          Jetzt anfragen
        </Link>
        <h2 className="mx-auto mt-6 max-w-[22rem] text-pretty text-3xl font-bold leading-[1.1] tracking-tight sm:max-w-2xl sm:text-4xl md:text-[2.5rem] md:leading-[1.08]">
          <span className="gg-text-heading-section">Bereit für professionelles</span>{" "}
          <span className="gg-text-green-forest">Facility Management?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base sm:leading-relaxed">
          Fordern Sie jetzt Ihr unverbindliches Angebot an. Wir melden uns innerhalb
          von 24 Stunden.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-11">
          <CtaPrimary href="/kontakt">Kostenloses Angebot</CtaPrimary>
          <a
            href={`tel:${site.phoneTel}`}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-200/90 bg-white px-6 py-3.5 text-sm font-semibold text-zinc-900 shadow-md shadow-zinc-900/5 transition hover:border-emerald-900/15 hover:shadow-lg"
          >
            <PhoneIcon className="text-[#70a340]" />
            {site.phone}
          </a>
        </div>
        <div className="mt-10 flex flex-col items-stretch gap-3 sm:mt-11 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
          <a
            href={mailtoHref()}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200/90 bg-white/95 px-5 py-2.5 text-sm font-medium text-zinc-800 shadow-md shadow-zinc-900/5 transition hover:border-emerald-900/12 hover:shadow-lg"
          >
            <MailIcon className="shrink-0 text-[#70a340]" />
            <span className="min-w-0 break-all text-center sm:break-words">{site.email}</span>
          </a>
          <span className="inline-flex items-center justify-center gap-2 rounded-full border border-zinc-200/90 bg-white/90 px-5 py-2.5 text-sm font-medium text-zinc-800 shadow-md shadow-zinc-900/5">
            <PinIcon className="shrink-0 text-[#70a340]" />
            Gerbstedt, Sachsen-Anhalt
          </span>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-14 max-w-6xl px-4 sm:mt-16 sm:px-6">
        <div className="rounded-2xl border border-zinc-200/80 bg-white py-9 shadow-md shadow-zinc-900/5 sm:py-10">
          <div className="grid grid-cols-2 gap-y-9 sm:grid-cols-4 sm:gap-y-0 sm:divide-x sm:divide-zinc-200/80">
            {closingStats.map((s) => (
              <div key={s.label} className="px-3 text-center sm:px-5">
                <p className="text-2xl font-bold tabular-nums tracking-tight text-zinc-900 sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
