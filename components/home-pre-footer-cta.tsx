import Image from "next/image";
import Link from "next/link";
import { CtaPrimary } from "@/components/cta-primary";
import { MailIcon, PhonePillLink, PillLink } from "@/components/phone-pill-link";
import { ContactCtaBackdrop } from "@/components/contact-cta-backdrop";
import { ServiceTrustStats } from "@/components/service-trust-stats";
import { mailtoHref, site } from "@/lib/site";

/** Hero-Foto mit gleicher Abdunkelung wie Startseiten-Header */
function CtaHeroPhotoBackdrop({ src }: { src: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0">
      <Image src={src} alt="" fill className="object-cover object-[center_42%]" sizes="100vw" />
      <div className="absolute inset-0 bg-black/45" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-[#2b2b2b] lg:bg-gradient-to-r lg:from-black/75 lg:via-black/40 lg:to-[#2b2b2b]"
        aria-hidden
      />
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute left-[4%] top-[18%] h-[min(70vw,20rem)] w-[min(70vw,20rem)] rounded-full bg-[#70a340]/20 blur-3xl" />
        <div className="absolute bottom-[22%] right-[6%] h-[min(65vw,18rem)] w-[min(65vw,18rem)] rounded-full bg-[#a8e055]/14 blur-3xl" />
      </div>
    </div>
  );
}

export function HomePreFooterCta({ heroSideSrc }: { heroSideSrc: string }) {
  return (
    <section className="gg-section-to-footer gg-section-to-footer--dark relative z-[1] mb-0 overflow-hidden border-t border-[#70a340]/20 bg-gradient-to-b from-zinc-950 via-zinc-950 to-[#2b2b2b] pt-20 pb-12 text-center text-white sm:pt-24 sm:pb-14 md:pb-[calc(1rem+var(--gg-footer-seam-dark))]">
      <CtaHeroPhotoBackdrop src={heroSideSrc} />
      <ContactCtaBackdrop variant="dark" />

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6">
        <Link
          href="/kontakt"
          className="inline-flex rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#c8f0a8] backdrop-blur-sm transition hover:border-white/25 hover:bg-black/50"
        >
          Jetzt anfragen
        </Link>
        <h2 className="mx-auto mt-6 max-w-[22rem] text-pretty text-3xl font-bold leading-[1.1] tracking-tight sm:max-w-2xl sm:text-4xl md:text-[2.5rem] md:leading-[1.08]">
          <span className="gg-text-hero-white">Bereit für professionelles</span>{" "}
          <span className="gg-text-green-brand">Facility Management?</span>
        </h2>
        <p className="gg-text-hero-muted mx-auto mt-5 max-w-xl text-sm leading-relaxed sm:text-base sm:leading-relaxed">
          Fordern Sie jetzt Ihr unverbindliches Angebot an. Wir melden uns innerhalb
          von 24 Stunden.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-11">
          <CtaPrimary href="/kontakt">Kostenloses Angebot</CtaPrimary>
          <PhonePillLink variant="hero" />
        </div>
        <div className="mt-10 flex justify-center sm:mt-11">
          <PillLink href={mailtoHref()} variant="hero" className="min-w-0 sm:max-w-full">
            <MailIcon className="shrink-0 text-[#a8e055]" />
            <span className="min-w-0 break-all text-center sm:break-words">{site.email}</span>
          </PillLink>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-12 max-w-6xl px-4 sm:mt-14 sm:px-6">
        <ServiceTrustStats className="border-[#70a340]/30 bg-zinc-950/90 shadow-[0_8px_40px_rgba(0,0,0,0.45)] ring-1 ring-[#70a340]/20 backdrop-blur-md supports-[backdrop-filter]:bg-zinc-950/82" />
      </div>
    </section>
  );
}
