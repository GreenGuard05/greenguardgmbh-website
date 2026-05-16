import { googleReviewCount } from "@/lib/reviews";
import { site } from "@/lib/site";

export function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

/** Offizielles Google-G (Markenfarben), kompakt fürs Bewertungs-Badge */
function GoogleGIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="26" height="26" viewBox="0 0 48 48" aria-hidden>
      <path
        fill="#FFC107"
        d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
      />
      <path
        fill="#FF3D00"
        d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238a11.91 11.91 0 01-3.219 1.43A12 12 0 0124 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 01-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z"
      />
    </svg>
  );
}

export function StarRow({ size = "sm" }: { size?: "sm" | "md" }) {
  const wh = size === "md" ? 16 : 14;
  return (
    <span className="flex gap-0.5 text-amber-400" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={wh} height={wh} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 17.3l-6.2 3.7 1.6-7L2 9.2l7.1-.6L12 2l2.9 6.6 7.1.6-5.4 4.8 1.6 7z" />
        </svg>
      ))}
    </span>
  );
}

const cardToneClassName =
  "flex w-full max-w-[min(100%,19rem)] shrink-0 items-center gap-3 rounded-2xl border border-zinc-200/90 bg-white/95 px-3.5 py-3 shadow-md shadow-zinc-900/5 backdrop-blur-sm transition hover:border-emerald-900/15 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4285F4] sm:gap-3.5 sm:px-4 sm:py-3.5 lg:max-w-[17.5rem]";

const mutedToneClassName =
  "flex w-full max-w-[min(100%,19rem)] shrink-0 items-center gap-2.5 rounded-xl border border-white/[0.08] bg-white/[0.06] px-3 py-2.5 shadow-none backdrop-blur-sm transition hover:border-white/[0.14] hover:bg-white/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#70a340] sm:gap-3 sm:px-3.5 sm:py-3 lg:max-w-[17.5rem]";

/**
 * Link zum Google-Unternehmensprofil mit Logo, Sternen, Note und Rezensionszahl –
 * `tone="card"` wie auf der Startseite; `tone="muted"` für den dunklen Footer.
 */
export function GoogleBusinessReviewsLink({
  className = "",
  tone = "card",
}: {
  className?: string;
  tone?: "card" | "muted";
}) {
  const profileUrl = site.googleBusinessProfileUrl;
  const count = googleReviewCount;
  const avg = "5,0";
  const shell = tone === "muted" ? mutedToneClassName : cardToneClassName;

  return (
    <a
      href={profileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`${shell} ${className}`.trim()}
      aria-label={`Green Guard GmbH bei Google öffnen: ${count} Rezensionen, Note ${avg}`}
    >
      <span className={`flex shrink-0 items-center justify-center ${tone === "muted" ? "opacity-95" : ""}`} aria-hidden>
        {tone === "muted" ? <GoogleGIcon className="h-[22px] w-[22px] sm:h-6 sm:w-6" /> : <GoogleGIcon />}
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex flex-wrap items-center gap-2">
          <StarRow size={tone === "muted" ? "sm" : "md"} />
          <span
            className={`tabular-nums leading-none font-bold ${tone === "muted" ? "text-[15px] text-white/95 sm:text-base" : "text-base text-zinc-900 sm:text-lg"}`}
          >
            {avg}
          </span>
        </span>
        <span
          className={`mt-1 block text-left leading-snug ${tone === "muted" ? "text-[11px] text-zinc-400 sm:text-xs" : "text-[11px] text-zinc-500 sm:text-xs"}`}
        >
          {count} Google-Rezensionen
        </span>
      </span>
      <ExternalLinkIcon
        className={`shrink-0 self-center ${tone === "muted" ? "text-zinc-500 opacity-80" : "text-zinc-400"}`}
      />
    </a>
  );
}
