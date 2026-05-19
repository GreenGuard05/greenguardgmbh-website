import Link from "next/link";
import { ContactCtaBackdrop } from "@/components/contact-cta-backdrop";
import { CtaPrimary } from "@/components/cta-primary";
import { PhonePillLink } from "@/components/phone-pill-link";
import { ServiceTrustStats } from "@/components/service-trust-stats";
import type { ServicePageCta } from "@/lib/service-pages";

export function ServiceCtaBand({ cta }: { cta: ServicePageCta }) {
  const badge = cta.badge ?? "Jetzt anfragen";

  return (
    <section className="gg-section-to-footer gg-section-to-footer--dark relative z-[1] mb-0 overflow-hidden border-t border-white/[0.08] bg-gradient-to-b from-[#0d110d] via-[#121812] to-[#2b2b2b] pb-14 pt-16 text-center sm:pb-16 sm:pt-20 md:pb-[calc(1.25rem+var(--gg-footer-seam-dark))] md:pt-24">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0a0e0a] via-[#121812] to-[#2b2b2b]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#70a340]/35 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-16 top-[15%] h-56 w-56 rounded-full bg-[#70a340]/8 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-[18%] h-64 w-64 rounded-full bg-[#a8e055]/6 blur-3xl"
        aria-hidden
      />
      <ContactCtaBackdrop variant="dark" />
      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        <p className="inline-flex rounded-full border border-white/15 bg-white/[0.08] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#c8e6a0] shadow-sm backdrop-blur-sm">
          {badge}
        </p>
        <h2 className="mx-auto mt-6 max-w-2xl text-pretty text-2xl font-bold leading-[1.12] tracking-tight text-white sm:text-3xl md:text-[2.35rem] md:leading-[1.1]">
          <span className="text-white/95">{cta.headingLead}</span>{" "}
          <span className="text-[#a8e055]">{cta.headingAccent}</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
          {cta.subline}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:mt-10">
          <CtaPrimary href="/kontakt">{cta.buttonLabel}</CtaPrimary>
          <PhonePillLink variant="dark" />
        </div>
      </div>
      <div className="relative z-10 mx-auto mt-12 max-w-6xl px-4 sm:mt-14 sm:px-6">
        <ServiceTrustStats className="border-white/10 bg-black/40 shadow-black/40" />
      </div>
      <div className="relative z-10 mx-auto mt-10 max-w-6xl border-t border-white/[0.08] px-4 pt-10 sm:mt-12 sm:px-6 sm:pt-12">
        <Link
          href="/dienstleistungen"
          className="group mx-auto inline-flex items-center gap-2.5 rounded-full border border-[#a8e055]/40 bg-[#a8e055]/[0.12] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/30 ring-1 ring-white/10 transition hover:border-[#a8e055]/65 hover:bg-[#a8e055]/20 hover:shadow-[0_8px_28px_-6px_rgba(168,224,85,0.25)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a8e055]/50"
        >
          <span
            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 text-[#a8e055] transition group-hover:bg-[#a8e055]/20"
            aria-hidden
          >
            ←
          </span>
          Alle Dienstleistungen
        </Link>
      </div>
    </section>
  );
}
