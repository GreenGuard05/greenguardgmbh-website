import type { Metadata } from "next";
import { InnerPageHero, InnerPageRoot } from "@/components/inner-page-hero";
import { createPageMetadata, pageDescriptions } from "@/lib/seo";
import { mailtoHref, site, siteLocationLines } from "@/lib/site";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Impressum",
    description: pageDescriptions.impressum,
    path: "/impressum",
  }),
  robots: { index: true, follow: true },
};

export default function ImpressumPage() {
  return (
    <InnerPageRoot>
      <InnerPageHero
        eyebrow="Rechtliches"
        title={<span className="gg-text-heading-section">Impressum</span>}
        description="Angaben gemäß TMG und Hinweise zur Haftung."
      />

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 sm:pb-20">
        <article className="gg-surface-card space-y-6 rounded-2xl border border-zinc-200/80 bg-white p-6 text-zinc-700 shadow-md shadow-zinc-900/5 sm:p-10 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-zinc-900 [&_h2:first-child]:mt-0 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-zinc-900 [&_a]:font-medium [&_a]:text-emerald-800 [&_a]:underline [&_a]:decoration-emerald-200 [&_a]:underline-offset-2 hover:[&_a]:text-emerald-950">
          <h2 className="!mt-0 text-xl font-semibold text-zinc-900">Angaben gemäß § 5 TMG</h2>
          <p>
            {siteLocationLines.map((line) => (
              <span key={line}>
                {line}
                <br />
              </span>
            ))}
          </p>
          <h2>Kontakt</h2>
          <p>
            Telefon:{" "}
            <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
            <br />
            E-Mail: <a href={mailtoHref()}>{site.email}</a>
          </p>
          <h2>Geschäftsführender Alleingesellschafter</h2>
          <p>Justin Zweidorf</p>
          <h2>Handelsregister</h2>
          <p>
            Registergericht: Amtsgericht Stendal
            <br />
            Registernummer: HRB 35595
            <br />
            Sitz der Gesellschaft: Gerbstedt
          </p>
          <h2>Steuernummer</h2>
          <p>118/107/00302</p>
          <h2>Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV</h2>
          <p>
            Justin Zweidorf
            <br />
            {site.addressLines[0]}
            <br />
            {site.addressLines[1]}
            <br />
            {site.addressLines[2]}
          </p>
          <h2>Haftungsausschluss</h2>
          <h3>Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
            allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu
            forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <h3>Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich.
          </p>
          <h3>Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
            Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors.
          </p>
          <h3>Bildmaterial</h3>
          <p>
            Das auf dieser Website verwendete Bildmaterial stammt teilweise aus eigenen Aufnahmen und teilweise von{" "}
            <a href="https://www.pexels.com/de-de/" target="_blank" rel="noopener noreferrer">
              Pexels
            </a>{" "}
            (Lizenz gemäß Pexels-Nutzungsbedingungen; Namensnennung nicht erforderlich). Das Kopfbild der
            Leistungsseite „Solarparkpflege“ stammt von Mark Stebnicki über{" "}
            <a
              href="https://www.pexels.com/photo/15751134/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pexels
            </a>{" "}
            (Photo-ID 15751134).
          </p>
          <h3>Kartendarstellung (Einsatzgebiet)</h3>
          <p>
            Die schematische Karte von Sachsen-Anhalt auf dieser Website basiert u. a. auf Geodaten von{" "}
            <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">
              OpenStreetMap
            </a>{" "}
            © OpenStreetMap-Mitwirkende,{" "}
            <a href="https://opendatacommons.org/licenses/odbl/" target="_blank" rel="noopener noreferrer">
              ODbL 1.0
            </a>
            . Die grafische Aufbereitung erfolgt durch {site.name}.
          </p>
          <h2>Streitschlichtung</h2>
          <p>
            Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </article>
      </section>
    </InnerPageRoot>
  );
}
