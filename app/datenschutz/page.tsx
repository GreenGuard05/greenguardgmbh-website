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
        <article className="gg-surface-card space-y-6 rounded-2xl border border-zinc-200/80 bg-white p-6 text-zinc-700 shadow-md shadow-zinc-900/5 sm:p-10 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-zinc-900 [&_h2:first-child]:mt-0 [&_h3]:mt-6 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-zinc-900 [&_ul]:list-disc [&_ul]:pl-5 [&_a]:font-medium [&_a]:text-emerald-800 [&_a]:underline [&_a]:decoration-emerald-200 [&_a]:underline-offset-2 hover:[&_a]:text-emerald-950">
          <p className="!mt-0 text-sm text-zinc-500">Stand: Mai 2026</p>
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
            <br />
            E-Mail: <a href={mailtoHref()}>{site.email}</a>
          </p>
          <h2>3. Datenerfassung auf dieser Website</h2>
          <h3>Server-Logs und Hosting</h3>
          <p>
            Beim Besuch dieser Website werden technisch notwendige Zugriffsdaten verarbeitet, damit die Website
            ausgeliefert, stabil betrieben und gegen Missbrauch abgesichert werden kann. Dazu können insbesondere
            IP-Adresse, Datum und Uhrzeit des Zugriffs, aufgerufene Seite, übertragene Datenmenge, Browser- und
            Geräteinformationen sowie die zuvor besuchte Seite gehören.
          </p>
          <p>
            Die Website wird über einen externen Hosting- bzw. Plattformanbieter betrieben. Die Verarbeitung erfolgt auf
            Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in der sicheren, schnellen und
            zuverlässigen Bereitstellung dieser Website. Soweit ein Auftragsverarbeitungsvertrag erforderlich ist, wird
            dieser mit dem eingesetzten Anbieter geschlossen.
          </p>
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
          <h3>Spam- und Missbrauchsschutz beim Kontaktformular</h3>
          <p>
            Zum Schutz vor Spam und missbräuchlicher Nutzung verarbeitet das Kontaktformular technisch notwendige
            Sicherheitsinformationen. Dazu gehören unter anderem die IP-Adresse, Zeitpunkt der Anfrage, Herkunft der
            Anfrage, eine unsichtbare Schutzabfrage, die Formular-Verweildauer sowie einfache Prüfungen auf
            ungewöhnlich viele Links. Diese Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser
            berechtigtes Interesse liegt im Schutz der Website, der E-Mail-Infrastruktur und der Empfänger vor Spam und
            automatisierten Anfragen.
          </p>
          <h3>E-Mail-Übermittlung</h3>
          <p>
            Kontaktformular-Anfragen werden per E-Mail an {site.email} übermittelt. Die Verarbeitung der E-Mail erfolgt
            über den von uns eingesetzten Mailserver bzw. E-Mail-Dienstleister. Die Anfrage wird anschließend wie eine
            normale geschäftliche E-Mail zur Bearbeitung Ihres Anliegens behandelt.
          </p>
          <h3>Stock-Fotos (Pexels)</h3>
          <p>
            Auf einigen Seiten werden Fotos von{" "}
            <a href="https://www.pexels.com/de-de/" target="_blank" rel="noopener noreferrer">
              Pexels
            </a>{" "}
            eingebunden (Domain: <strong>images.pexels.com</strong>). Beim Laden dieser Bilder stellt Ihr Browser eine
            Verbindung zu den Servern von Pexels her. Dabei können technische Daten wie Ihre IP-Adresse, Datum und Uhrzeit
            des Abrufs, Browsertyp und die abgerufene Bild-URL an Pexels bzw. deren Hosting-Anbieter übermittelt werden.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in einer ansprechenden,
            verständlichen Darstellung unserer Leistungen. Soweit wir eigene Aufnahmen verwenden, entfällt der Abruf bei
            Pexels für die betreffenden Bilder.
          </p>
          <p>
            Weitere Informationen zur Datenverarbeitung durch Pexels finden Sie in der{" "}
            <a href="https://www.pexels.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
              Datenschutzerklärung von Pexels
            </a>
            .
          </p>
          <h3>Schematische Einsatzgebiet-Karte</h3>
          <p>
            Auf der Startseite und im Bereich „Einsatzgebiet“ zeigen wir eine vereinfachte Landkarte von
            Sachsen-Anhalt mit markierten Orten. Die Karte wird als <strong>SVG-Grafik direkt von unserer Website</strong>{" "}
            ausgeliefert. Beim bloßen Ansehen der Karte werden <strong>keine Kartenkacheln</strong> von Anbietern wie
            Google Maps oder OpenStreetMap-Servern nachgeladen und es findet dadurch <strong>keine Datenübermittlung</strong>{" "}
            an diese Kartendienste statt.
          </p>
          <p>
            Die Umrisse und ungefähren Ortsmarkierungen beruhen auf öffentlich zugänglichen Geodaten, u. a. auf Daten von{" "}
            <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">
              OpenStreetMap
            </a>{" "}
            (© OpenStreetMap-Mitwirkende, Lizenz{" "}
            <a href="https://opendatacommons.org/licenses/odbl/" target="_blank" rel="noopener noreferrer">
              ODbL 1.0
            </a>
            ). Die Darstellung dient ausschließlich der Orientierung über unser Einsatzgebiet und ersetzt keine amtliche
            Karte.
          </p>
          <h2>4. Cookies, Analyse und Tracking</h2>
          <p>
            Diese Website setzt keine Analyse-Tools, keine Werbe-Tracking-Pixel und kein Social-Media-Tracking ein.
            Soweit technisch notwendige Cookies oder Sitzungsinformationen eingesetzt werden, dienen sie ausschließlich
            dem sicheren Betrieb einzelner Funktionen, insbesondere geschützter Verwaltungsbereiche.
          </p>
          <h2>5. Externe Links zu Google und Instagram</h2>
          <p>
            Auf dieser Website können Links zu externen Angeboten wie Google Maps, dem Google-Unternehmensprofil,
            Google-Rezensionen oder Instagram enthalten sein. Beim reinen Besuch unserer Website werden dadurch keine
            Inhalte dieser Anbieter automatisch geladen. Erst wenn Sie einen solchen Link anklicken, verlassen Sie diese
            Website. Für die anschließende Datenverarbeitung ist der jeweilige Anbieter verantwortlich.
          </p>
          <p>
            Anbieter von Google-Diensten ist Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            Weitere Informationen finden Sie in der{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google Datenschutzerklärung
            </a>
            .
          </p>
          <p>
            Anbieter von Instagram ist Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland.
            Informationen zur Datenverarbeitung durch Instagram finden Sie in der{" "}
            <a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener noreferrer">
              Instagram-Datenschutzerklärung
            </a>
            .
          </p>
          <h2>6. Speicherdauer</h2>
          <p>
            Personenbezogene Daten aus Anfragen speichern wir nur so lange, wie dies zur Bearbeitung Ihres Anliegens,
            zur Erfüllung gesetzlicher Pflichten oder zur Wahrung berechtigter Interessen erforderlich ist. Geschäfts-
            und Handelsbriefe können gesetzlichen Aufbewahrungspflichten unterliegen.
          </p>
          <h2>7. Ihre Rechte</h2>
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
