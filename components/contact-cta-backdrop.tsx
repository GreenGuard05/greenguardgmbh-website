/** Große Hintergrund-Grafiken (Telefon + Brief) – wie Startseiten-CTA */
export function ContactCtaBackdrop({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const phoneTone =
    variant === "dark" ? "text-[#c8f0a8]/[0.14]" : "text-emerald-800/[0.11]";
  const mailTone =
    variant === "dark" ? "text-[#c8f0a8]/[0.13]" : "text-emerald-800/[0.10]";

  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden" aria-hidden>
      <svg
        className={`gg-cta-contact-icon-phone absolute left-[-6%] top-[28%] h-[min(52vw,14rem)] w-[min(52vw,14rem)] ${phoneTone} motion-reduce:animate-none sm:left-[2%] sm:top-[22%] sm:h-56 sm:w-56 md:h-64 md:w-64`}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M6.6 10.8c1.6 3 4.6 5.9 7.6 7.6l2.5-2.5c.4-.4 1-.5 1.4-.2 1.2.6 2.5.9 3.9.9.8 0 1.4.6 1.4 1.4V20c0 .8-.6 1.4-1.4 1.4C9.9 21.4 2.6 14.1 2.6 4.4 2.6 3.6 3.2 3 4 3h2.5c.8 0 1.4.6 1.4 1.4 0 1.4.3 2.7.9 3.9.2.4.1 1-.2 1.4L6.6 10.8z" />
      </svg>
      <svg
        className={`gg-cta-contact-icon-mail absolute right-[-8%] top-[12%] h-[min(48vw,13rem)] w-[min(48vw,13rem)] ${mailTone} motion-reduce:animate-none sm:right-[3%] sm:top-[10%] sm:h-52 sm:w-52 md:h-60 md:w-60`}
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
