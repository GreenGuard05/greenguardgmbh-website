"use client";

import Link from "next/link";
import { useState } from "react";
import { mainNav, serviceLinks, site } from "@/lib/site";

export function MobileNav({ solid = false }: { solid?: boolean }) {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-label="Menü"
        onClick={() => setOpen((o) => !o)}
        className={`rounded-md border px-2 py-1.5 text-sm ${
          solid
            ? "border-zinc-300 bg-white text-zinc-950"
            : "border-white/25 text-white"
        }`}
      >
        Menü
      </button>
      {open ? (
        <div className="absolute right-0 top-full z-50 mt-2 w-[min(100vw-2rem,20rem)] rounded-xl border border-zinc-700 bg-zinc-950 py-2 shadow-xl">
          <nav className="flex max-h-[70vh] flex-col gap-0.5 overflow-y-auto px-2">
            {mainNav.map((item) => {
              if (item.href === "/dienstleistungen") {
                return (
                  <div key={item.href} className="py-1">
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      onClick={() => setServicesOpen((value) => !value)}
                      className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm font-medium text-white hover:bg-white/10"
                    >
                      <span>Dienstleistungen</span>
                      <span className={`text-white/70 transition ${servicesOpen ? "rotate-180" : ""}`} aria-hidden>
                        ↓
                      </span>
                    </button>
                    {servicesOpen ? (
                      <div className="ml-2 mt-1 space-y-0.5 border-l border-white/15 pl-3">
                        <Link
                          href="/dienstleistungen"
                          onClick={() => setOpen(false)}
                          className="block rounded-md py-1.5 text-sm font-semibold text-emerald-300 hover:text-white"
                        >
                          Alle Leistungen ansehen
                        </Link>
                        {serviceLinks.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setOpen(false)}
                            className="block rounded-md py-1.5 text-sm text-white/85 hover:text-white"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2 text-sm text-white hover:bg-white/10"
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={`tel:${site.phoneTel}`}
              className="rounded-md px-2 py-2 text-sm text-emerald-300"
            >
              {site.phone}
            </a>
            <Link
              href="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 flex w-full items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-semibold text-zinc-950 shadow-md ring-1 ring-white/80"
            >
              Angebot anfragen
            </Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
