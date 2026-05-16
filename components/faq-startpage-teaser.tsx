import Link from "next/link";

/** Verweis auf die FAQ auf der Startseite (z. B. Kontakt, Leistungen, Mieten) */
export function FaqStartpageTeaser() {
  return (
    <aside
      className="rounded-xl border border-emerald-200/80 bg-emerald-50/60 p-4 text-sm leading-relaxed text-zinc-800 shadow-sm"
      aria-label="Hinweis: Häufig gestellte Fragen auf der Startseite"
    >
      <p>
        <span className="font-semibold text-zinc-900">Häufige Fragen (FAQ): </span>
        Antworten zu Einsatzgebiet, Leistungen, Angeboten und mehr finden Sie in unserem{" "}
        <Link
          href="/#faq"
          className="font-semibold text-emerald-800 underline decoration-emerald-400 underline-offset-[3px] outline-offset-2 transition hover:text-emerald-950 hover:decoration-emerald-600 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#70a340]"
        >
          FAQ-Bereich auf der Startseite
        </Link>
        .
      </p>
    </aside>
  );
}
