import Link from "next/link";
import { SiteLogo } from "@/components/site-logo";
import { mailtoHref, serviceLinks, site, siteLocationLines } from "@/lib/site";

const quickLinks = [
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/#faq", label: "FAQ" },
  { href: "/mieten", label: "Geräte mieten" },
  { href: "/kontakt", label: "Kontakt & Angebot" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

function ChevronLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="flex min-w-0 items-start gap-2 text-sm leading-snug text-zinc-300 transition hover:text-white"
    >
      <span className="text-[#70a340] leading-snug" aria-hidden>
        ›
      </span>
      <span className="min-w-0 break-words">{label}</span>
    </Link>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M6.6 10.8c1.6 3 4.6 5.9 7.6 7.6l2.5-2.5c.4-.4 1-.5 1.4-.2 1.2.6 2.5.9 3.9.9.8 0 1.4.6 1.4 1.4V20c0 .8-.6 1.4-1.4 1.4C9.9 21.4 2.6 14.1 2.6 4.4 2.6 3.6 3.2 3 4 3h2.5c.8 0 1.4.6 1.4 1.4 0 1.4.3 2.7.9 3.9.2.4.1 1-.2 1.4L6.6 10.8z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[color:rgba(112,163,64,0.2)] bg-[#2b2b2b] text-zinc-300">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-8 px-4 py-12 sm:gap-x-8 sm:gap-y-10 sm:px-6 sm:py-14 lg:grid-cols-4 lg:gap-10">
        <div className="col-span-2 lg:col-span-1">
          <Link href="/" className="block max-w-full" title={site.name}>
            <span className="inline-flex max-w-full items-center gap-3 sm:gap-3.5">
              <SiteLogo className="h-11 w-auto shrink-0 sm:h-12" />
              <span className="min-w-0 text-sm font-semibold tracking-tight text-white sm:text-base">
                {site.name}
              </span>
            </span>
            <span className="gg-brand-slogan mt-2 block text-[12px] leading-snug text-[#c8e8a8] sm:text-[13px]">
              {site.brandSlogan}
            </span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-zinc-400">
            Professionelles Facility Management: Grünanlagenpflege, Hausmeister,
            Winterdienst und Gebäudereinigung in Gerbstedt und Sachsen-Anhalt.
          </p>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Green Guard GmbH auf Instagram"
            className="group mt-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-zinc-400/55 bg-transparent text-zinc-200 transition hover:border-zinc-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#70a340]"
            aria-label="Green Guard GmbH auf Instagram — Profil öffnen"
          >
            <InstagramIcon className="transition group-hover:scale-[1.03]" />
          </a>
        </div>

        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            Dienstleistungen
          </p>
          <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <ChevronLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">
            Schnelllinks
          </p>
          <ul className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <ChevronLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-500">Kontakt</p>
          <ul data-nosnippet className="mt-4 space-y-3 text-sm sm:mt-5 sm:space-y-4">
            <li className="flex gap-3">
              <PinIcon className="mt-0.5 shrink-0 text-[#70a340]" />
              <span>
                {siteLocationLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-center gap-3">
              <PhoneIcon className="shrink-0 text-[#70a340]" />
              <a className="hover:text-white" href={`tel:${site.phoneTel}`}>
                {site.phone}
              </a>
            </li>
            <li className="flex min-w-0 items-center gap-3">
              <MailIcon className="shrink-0 text-[#70a340]" />
              <a className="min-w-0 break-all hover:text-white sm:break-normal" href={mailtoHref()}>
                {site.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div data-nosnippet className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-5 text-xs text-zinc-500 sm:flex-row sm:px-6">
          <p className="text-center sm:text-left">
            © {year} {site.name}. Alle Rechte vorbehalten. Facility Management · Gerbstedt ·
            Sachsen-Anhalt
          </p>
          <nav aria-label="Rechtliches" className="flex flex-wrap items-center justify-center gap-x-1 text-zinc-400 sm:justify-end">
            <Link className="text-zinc-300 hover:text-white" href="/impressum">
              Impressum
            </Link>
            <span aria-hidden className="select-none px-1">
              ·
            </span>
            <Link className="text-zinc-300 hover:text-white" href="/datenschutz">
              Datenschutz
            </Link>
            <span aria-hidden className="select-none px-1">
              ·
            </span>
            <Link className="text-zinc-300 hover:text-white" href="/kontakt">
              Kontakt
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
