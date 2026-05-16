import { GoogleBusinessReviewsLink, ExternalLinkIcon, StarRow } from "@/components/google-business-reviews-link";
import { HomeSectionAmbient } from "@/components/home-section-ambient";
import { site } from "@/lib/site";
import { googleReviews } from "@/lib/reviews";

const GOOGLE_COLORS = {
  g1: "#4285F4",
  o1: "#EA4335",
  o2: "#FBBC04",
  g2: "#4285F4",
  l: "#34A853",
  e: "#EA4335",
} as const;

function GoogleWordmark({ className = "text-sm" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center font-bold tracking-tight ${className}`} aria-hidden>
      <span style={{ color: GOOGLE_COLORS.g1 }}>G</span>
      <span style={{ color: GOOGLE_COLORS.o1 }}>o</span>
      <span style={{ color: GOOGLE_COLORS.o2 }}>o</span>
      <span style={{ color: GOOGLE_COLORS.g2 }}>g</span>
      <span style={{ color: GOOGLE_COLORS.l }}>l</span>
      <span style={{ color: GOOGLE_COLORS.e }}>e</span>
    </span>
  );
}

function ReviewCard({
  name,
  initial,
  avatarClass,
  date,
  text,
}: (typeof googleReviews)[number]) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-zinc-200/70 bg-white p-5 shadow-md shadow-zinc-900/5 transition duration-200 ease-out will-change-transform hover:-translate-y-0.5 hover:border-emerald-900/12 hover:shadow-lg motion-reduce:hover:-translate-y-0 motion-reduce:hover:shadow-md sm:p-6">
      <div className="flex gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${avatarClass}`}
        >
          {initial}
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-bold leading-tight text-zinc-900">{name}</p>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-zinc-500">
            <GoogleWordmark className="origin-left scale-90" />
            <span>Google</span>
          </p>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <StarRow />
        <span className="sr-only">5 von 5 Sternen</span>
        <span className="text-xs text-zinc-500">{date}</span>
      </div>
      <p className="mt-3 flex-1 text-[13px] leading-relaxed text-zinc-600 sm:text-sm">{text}</p>
    </article>
  );
}

export function HomeGoogleReviews() {
  const profileUrl = site.googleBusinessProfileUrl;

  return (
    <section className="relative overflow-hidden border-t border-zinc-200/60 py-20 sm:py-24 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-zinc-50/80 to-zinc-100/90"
        aria-hidden
      />
      <HomeSectionAmbient scene="reviews" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12">
          <div className="max-w-xl lg:pt-0.5">
            <p className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
              Google Bewertungen
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight text-zinc-900 sm:text-4xl md:text-[2.5rem]">
              Was unsere Kunden sagen
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-zinc-600">
              Echte Stimmen von Google – für uns ein Maßstab, für Sie eine Entscheidungshilfe.
            </p>
          </div>

          <GoogleBusinessReviewsLink />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:mt-16 lg:grid-cols-4">
          {googleReviews.map((r) => (
            <ReviewCard key={r.name} {...r} />
          ))}
        </div>

        <p className="mt-12 flex justify-center lg:mt-14">
          <a
            href={profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 underline decoration-zinc-300 underline-offset-4 transition hover:text-zinc-800 hover:decoration-zinc-400"
          >
            <GoogleWordmark />
            <span>Alle Rezensionen auf Google ansehen</span>
            <ExternalLinkIcon className="opacity-70" />
          </a>
        </p>
      </div>
    </section>
  );
}
