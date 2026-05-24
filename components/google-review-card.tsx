import { StarRow } from "@/components/google-business-reviews-link";
import { googleReviewDisplayText, type GoogleReview } from "@/lib/reviews";

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

export function GoogleReviewCard(review: GoogleReview) {
  const { name, initial, avatarClass, date, ratingOnly } = review;
  const quote = googleReviewDisplayText(review);
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-zinc-200/70 bg-white/95 p-5 shadow-md shadow-zinc-900/5 backdrop-blur-sm transition duration-200 ease-out hover:-translate-y-0.5 hover:border-emerald-900/12 hover:shadow-lg motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-md sm:p-6">
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
      <p
        className={`mt-3 flex-1 text-[13px] leading-relaxed sm:text-sm ${ratingOnly ? "italic text-zinc-500" : "text-zinc-600"}`}
      >
        {quote}
      </p>
    </article>
  );
}
