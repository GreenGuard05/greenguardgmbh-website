"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";
import { usePathname } from "next/navigation";
import { SiteLogo } from "@/components/site-logo";
import { MobileNav } from "@/components/mobile-nav";
import { mainNav, serviceLinks, site } from "@/lib/site";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      aria-hidden
    >
      <path
        d="M2.5 4.25L6 7.75 9.5 4.25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const servicesMenuId = useId();
  const onHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    if (!onHome) return;

    const update = () => setScrolled(window.scrollY > 48);
    const id = requestAnimationFrame(update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", update);
    };
  }, [onHome]);

  const solid = !onHome || scrolled;
  const transparent = !solid;

  const bar = solid
    ? "border-b border-zinc-200/80 bg-white/95 shadow-sm shadow-zinc-900/5 backdrop-blur-md"
    : "border-transparent bg-transparent";

  const navLinkClass = solid
    ? "rounded-md px-3 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100"
    : "rounded-md px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10";
  const servicesButtonClass = solid
    ? `flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-100 ${servicesOpen ? "bg-zinc-100" : ""}`
    : `flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white transition hover:bg-white/10 ${servicesOpen ? "bg-white/10" : ""}`;

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-[100] transition-colors duration-300 ${bar}`}
    >
      <div
        className={`relative mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 sm:gap-4 sm:px-6 ${solid ? "py-2.5 sm:py-3" : "py-3 sm:py-3.5"}`}
      >
        <div className="min-w-0 max-w-[min(100%,15rem)] shrink sm:max-w-[min(100%,22rem)] md:max-w-none">
          <Link
            href="/"
            className="inline-flex max-w-full min-w-0 items-center gap-2.5 sm:gap-3"
            title={site.name}
          >
            <SiteLogo priority className="h-8 w-auto shrink-0 self-center sm:h-9" />
            <span className="flex min-w-0 flex-col items-start justify-center text-left leading-tight">
              <span
                className={`truncate font-semibold tracking-tight sm:whitespace-nowrap ${solid ? "text-zinc-950" : "text-white/95 drop-shadow-[0_2px_14px_rgba(0,0,0,0.88)]"}`}
                style={{ fontSize: "clamp(0.8125rem, 2.4vw, 1.125rem)" }}
              >
                {site.name}
              </span>
              <span
                className={`gg-brand-slogan mt-0.5 max-w-[16rem] text-[10px] leading-snug sm:max-w-none sm:text-[11px] ${solid ? "text-emerald-900/75" : "text-[#e8ffdc]/95 drop-shadow-[0_2px_12px_rgba(0,0,0,0.92)]"}`}
              >
                {site.brandSlogan}
              </span>
            </span>
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <nav className="hidden items-center gap-0.5 md:flex">
            <Link
              href="/"
              className={navLinkClass}
            >
              Startseite
            </Link>

            <div
              className="group relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button
                type="button"
                className={servicesButtonClass}
                aria-expanded={servicesOpen}
                aria-haspopup="menu"
                aria-controls={servicesMenuId}
                onClick={() => setServicesOpen(true)}
                onFocus={() => setServicesOpen(true)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setServicesOpen(false);
                }}
              >
                Dienstleistungen
                <ChevronDown
                  className={`opacity-70 transition ${servicesOpen ? "translate-y-px" : ""}`}
                />
              </button>
              <div
                id={servicesMenuId}
                className={`absolute left-0 top-full z-[110] min-w-[18rem] pt-3 transition-[opacity,visibility,transform] duration-150 ${
                  servicesOpen
                    ? "visible translate-y-0 opacity-100"
                    : "pointer-events-none invisible -translate-y-1 opacity-0"
                }`}
                role="menu"
                onMouseEnter={() => setServicesOpen(true)}
              >
                <div className="overflow-hidden rounded-2xl border border-emerald-950/10 bg-white/96 py-2 shadow-2xl shadow-black/20 ring-1 ring-white/70 backdrop-blur-md">
                  <Link
                    href="/dienstleistungen"
                    className="block border-b border-zinc-100 px-4 py-3 text-sm font-bold text-emerald-900 hover:bg-emerald-50/80"
                    role="menuitem"
                    onClick={() => setServicesOpen(false)}
                  >
                    Alle Leistungen ansehen
                  </Link>
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm font-medium text-zinc-800 transition hover:bg-emerald-50/80 hover:text-emerald-900 focus:bg-emerald-50/80 focus:text-emerald-900"
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {mainNav
              .filter(
                (i) =>
                  i.href !== "/" && i.href !== "/dienstleistungen",
              )
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={navLinkClass}
                >
                  {item.label}
                </Link>
              ))}
          </nav>

          <MobileNav solid={solid} />

          <Link
            href="/kontakt"
            className={`shrink-0 rounded-full px-4 py-2 text-xs font-semibold tracking-tight shadow-md transition sm:px-5 sm:text-sm ${
              transparent
                ? "bg-white text-zinc-950 ring-1 ring-white/80 hover:bg-zinc-100"
                : "bg-zinc-950 text-white ring-1 ring-zinc-950/10 hover:bg-zinc-800"
            }`}
          >
            Angebot anfragen
          </Link>
        </div>
      </div>
    </header>
  );
}
