import Link from "next/link";
import type { ReactNode } from "react";
import { CtaPrimary } from "@/components/cta-primary";
import { RevealOnScroll } from "@/components/reveal-on-scroll";
import { mailtoHref, site, siteLocationLines } from "@/lib/site";

const addressLine = siteLocationLines.join(", ");

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.75" />
    </svg>
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

function ContactRow({
  href,
  icon: Icon,
  children,
}: {
  href: string;
  icon: typeof PinIcon;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      className="group flex items-start gap-3 text-sm text-zinc-400 transition hover:text-zinc-200 sm:text-base"
    >
      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#70a340]/15 text-[#70a340] ring-1 ring-[#70a340]/25 transition group-hover:bg-[#70a340]/22">
        <Icon className="h-4 w-4" />
      </span>
      <span className="min-w-0 pt-1 leading-snug">{children}</span>
    </a>
  );
}

export function ContactCtaBand() {
  return (
    <section className="relative overflow-hidden border-t border-zinc-800/80 bg-zinc-950 py-14 sm:py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#70a340]/30 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-32 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#70a340]/8 blur-3xl"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <RevealOnScroll>
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-14">
            <div className="min-w-0 max-w-xl">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-[2rem] md:leading-tight">
                Nehmen Sie <span className="text-[#70a340]">Kontakt auf</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
                Wir freuen uns auf Ihre Anfrage! Egal ob Grünanlagenpflege, Hausmeisterservice oder Winterdienst – wir
                sind für Sie da.
              </p>
              <ul className="mt-8 space-y-4">
                <li>
                  <ContactRow href={site.googleBusinessProfileUrl} icon={PinIcon}>
                    {addressLine}
                  </ContactRow>
                </li>
                <li>
                  <ContactRow href={`tel:${site.phoneTel}`} icon={PhoneIcon}>
                    {site.phone}
                  </ContactRow>
                </li>
                <li>
                  <ContactRow href={mailtoHref()} icon={MailIcon}>
                    {site.email}
                  </ContactRow>
                </li>
              </ul>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center lg:min-w-[15rem] lg:flex-col lg:items-stretch">
              <CtaPrimary href="/kontakt" className="justify-center sm:min-w-[12rem]">
                Angebot anfragen
              </CtaPrimary>
              <Link
                href="/dienstleistungen"
                className="inline-flex items-center justify-center rounded-full border border-zinc-600 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition hover:border-zinc-500 hover:bg-white/5 sm:min-w-[12rem]"
              >
                Alle Leistungen
              </Link>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
