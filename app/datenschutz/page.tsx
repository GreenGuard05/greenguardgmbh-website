import type { Metadata } from "next";
import { InnerPageHero, InnerPageRoot } from "@/components/inner-page-hero";
import { createPageMetadata, pageDescriptions } from "@/lib/seo";
import { mailtoHref, site } from "@/lib/site";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Datenschutz",
    description: pageDescriptions.datenschutz,
    path: "/datenschutz",
  }),
  robots: { index: true, follow: true },
};

export default function DatenschutzPage() {
  return (
    <InnerPageRoot>
      <InnerPageHero
        eyebrow="Rechtliches"
        title={<span className="gg-text-heading-section">Datenschutzerklärung</span>}
        description="Informationen zur Verarbeitung personenbezogener Daten auf dieser Website."
      />

      <section className="mx-auto max-w-3xl px-4 pb-16 sm:px-6 sm:pb-20">
        <article className="space-y-6 rounded-2xl border border-zinc-200/80 bg-white p-6 text-zinc-700 shadow-md shadow-zinc-900/5 sm:p-10 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-zinc-900 [&_h2:first-child]:mt-0 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-zinc-900 [&_ul]:list-disc [&_ul]:pl-5 [&_a]:font-medium [&_a]:text-emerald-800 [&_a]:underline [&_a]:decoration-emerald-200 [&_a]:underline-offset-2 hover:[&_a]:text-emerald-950">
          <p className="!mt-0 text-sm text-zinc-500">Stand: März 2026</p>
          <h2 className="!mt-6 text-xl font-semibold text-zinc-900">1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können.
          </p>
          <h2>2. Verantwortliche Stelle</h2>
          <p>
            {site.name}
            <br />
            {site.addressLines[0]}
            <br />
            {site.addressLines[1]}
            <br />
            {site.addressLines[2]}
            <br />
            Telefon: <a href={`tel:${site.phoneTel}`}>{site.phone}</a>
          </p>
          <h2>3. Datenerfassung auf dieser Website</h2>
          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
            Anschlussfragen per E-Mail an Green Guard GmbH übermittelt. Die Inhalte der Anfrage werden nicht öffentlich
            auf der Website angezeigt und nicht in einer Website-Datenbank gespeichert.
          </p>
          <p>
            Rechtsgrundlage für die Verarbeitung Ihrer Daten ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw.
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).
          </p>
          <p>
            Die Übermittlung erfolgt technisch über den Mailserver der Website. Die Daten werden ausschließlich zur
            Bearbeitung Ihrer Anfrage verwendet und nicht ohne Ihre Einwilligung an Dritte weitergegeben, soweit keine
            gesetzliche Pflicht besteht. Bitte senden Sie keine besonderen Kategorien personenbezogener Daten über das
            Formular.
          </p>
          <h2>4. Cookies & Analyse</h2>
          <p>
            Diese statische Marketing-Website kann ohne personenbezogene Cookies betrieben werden. Es werden keine
            Werbe- oder Social-Tracking-Pixel eingesetzt, sofern nicht gesondert konfiguriert.
          </p>
          <h2>5. Google Maps</h2>
          <p>
            Wenn Sie später Google Maps einbinden, können Informationen über Ihren Besuch an Google übermittelt
            werden. Anbieter ist Google Ireland Limited. Weitere Informationen finden Sie in der{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google Datenschutzerklärung
            </a>
            .
          </p>
          <h2>6. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf:</p>
          <ul>
            <li>Auskunft über Ihre bei uns gespeicherten Daten</li>
            <li>Berichtigung falscher oder unvollständiger Daten</li>
            <li>Löschung Ihrer gespeicherten Daten</li>
            <li>Einschränkung der Datenverarbeitung</li>
            <li>Datenübertragbarkeit</li>
            <li>Widerspruch gegen die Verarbeitung</li>
          </ul>
          <p>
            Zur Ausübung dieser Rechte wenden Sie sich bitte an: <a href={mailtoHref()}>{site.email}</a>
          </p>
          <p>
            Sie haben außerdem das Recht, sich bei der zuständigen Aufsichtsbehörde zu beschweren. Die zuständige
            Aufsichtsbehörde ist der Landesbeauftragte für den Datenschutz Sachsen-Anhalt.
          </p>
        </article>
      </section>
    </InnerPageRoot>
  );
}
