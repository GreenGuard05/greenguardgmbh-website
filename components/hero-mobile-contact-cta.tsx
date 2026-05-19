import { CtaPrimary } from "@/components/cta-primary";

/** Kontakt-CTA zwischen Leistungs-Leiste und Scroll-Hinweis – nur Mobil, auf dem Rasen-Hintergrund */
export function HeroMobileContactCta() {
  return (
    <div className="relative z-20 hidden max-sm:flex flex-1 flex-col items-center justify-center px-4 py-5">
      <CtaPrimary
        href="/kontakt#angebot-formular"
        className="w-full max-w-[18rem] justify-center shadow-[0_12px_32px_-8px_rgba(0,0,0,0.55)]"
      >
        Zum Kontaktformular
      </CtaPrimary>
    </div>
  );
}
