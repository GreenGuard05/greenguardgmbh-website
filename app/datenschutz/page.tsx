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
          <p className="!mt-0 text-sm text-zinc-500">Stand: Juni 2026</p>

          <h2 className="!mt-6 text-xl font-semibold text-zinc-900">1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten
            passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Ausführliche Erläuterungen finden Sie in den nachfolgenden
            Abschnitten.
          </p>
          <h3>Wer ist verantwortlich?</h3>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist die {site.name} (Kontaktdaten siehe
            Abschnitt 2).
          </p>
          <h3>Welche Daten erfassen wir auf dieser Website?</h3>
          <ul>
            <li>
              <strong>Beim bloßen Besuch:</strong> technische Zugriffsdaten (z. B. IP-Adresse, Zeitpunkt, aufgerufene
              Seite, Browser) in Server-Logs des Hosters.
            </li>
            <li>
              <strong>Bei Nutzung des Kontaktformulars:</strong> die von Ihnen eingegebenen Angaben (z. B. Name,
              E-Mail, Nachricht) sowie technische Sicherheitsinformationen zum Spam-Schutz.
            </li>
            <li>
              <strong>Bei direktem Kontakt per Telefon oder E-Mail:</strong> die von Ihnen mitgeteilten Daten zur
              Bearbeitung Ihres Anliegens.
            </li>
          </ul>
          <h3>Setzen wir Analyse-, Werbe- oder Social-Media-Tracking ein?</h3>
          <p>
            <strong>Nein.</strong> Diese Website verwendet keine Google Analytics, keine Meta-/Facebook-Pixel, kein
            Remarketing und kein Social-Media-Tracking. Es werden keine Marketing-Cookies für Besucher der
            öffentlichen Seiten gesetzt.
          </p>
          <h3>Brauchen Sie einen Cookie-Banner?</h3>
          <p>
            Für den normalen Besuch dieser Website ist <strong>kein Cookie-Einwilligungs-Banner</strong> erforderlich,
            weil wir keine nicht notwendigen Cookies oder vergleichbare Technologien zu Analyse- oder
            Werbezwecken einsetzen. Technisch notwendige Sitzungsinformationen gibt es ausschließlich im geschützten
            Administrationsbereich unter <strong>/admin</strong> (nicht für reguläre Besucher).
          </p>
          <h3>Wie können Sie Ihre Rechte ausüben?</h3>
          <p>
            Sie haben Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch
            (Details in Abschnitt 8). Wenden Sie sich dazu an{" "}
            <a href={mailtoHref()}>{site.email}</a>.
          </p>

          <h2>2. Verantwortliche Stelle</h2>
          <p>
            Verantwortlicher im Sinne der DSGVO:
            <br />
            <br />
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
          <p>
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen
            über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
          </p>

          <h2>3. Hosting und Server-Logs</h2>
          <p>
            Diese Website wird bei einem externen Dienstleister gehostet. Anbieter ist{" "}
            <strong>Vercel Inc.</strong>, 440 N Barranca Avenue #4133, Covina, CA 91723, USA (
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              vercel.com
            </a>
            ). Die Website wird über die Infrastruktur von Vercel ausgeliefert; die Auslieferung kann über Server in
            der Europäischen Union und/oder den USA erfolgen.
          </p>
          <p>
            Beim Aufruf der Website werden automatisch Informationen in sogenannten Server-Logfiles gespeichert, die
            Ihr Browser übermittelt. Dazu können gehören: IP-Adresse (ggf. gekürzt), Datum und Uhrzeit der Anfrage,
            Zeitzonendifferenz zur Greenwich Mean Time (GMT), Inhalt der Anfrage, HTTP-Statuscode, übertragene
            Datenmenge, Website, von der die Anfrage kommt (Referrer), Browser, Betriebssystem und Sprache.
          </p>
          <p>
            Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt
            in der sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots sowie in der Abwehr von
            Missbrauch und Störungen. Mit Vercel wurde ein Vertrag zur Auftragsverarbeitung (Data Processing
            Agreement) geschlossen, soweit dies gesetzlich erforderlich ist. Informationen zum Datenschutz bei Vercel:{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              Vercel Privacy Policy
            </a>
            .
          </p>
          <p>
            Server-Logdaten werden vom Hoster in der Regel nur für einen begrenzten Zeitraum vorgehalten und
            anschließend gelöscht oder anonymisiert. Die konkrete Dauer richtet sich nach den Vorgaben des Hosters
            und dem technischen Bedarf (z. B. Sicherheit, Fehleranalyse).
          </p>

          <h2>4. Schriften und Website-Technik</h2>
          <h3>Schriften (lokal eingebunden)</h3>
          <p>
            Zur einheitlichen Darstellung nutzen wir die Schriftarten „Geist“ und „Geist Mono“. Diese werden über die
            Website-Technologie <strong>selbst von unserem Server bzw. Hosting ausgeliefert</strong> und nicht von
            externen Schrift-Servern (z. B. Google Fonts CDN) nachgeladen. Beim bloßen Seitenaufruf findet dadurch{" "}
            <strong>keine zusätzliche Datenübermittlung an Schriftanbieter</strong> statt.
          </p>
          <h3>SSL- bzw. TLS-Verschlüsselung</h3>
          <p>
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine
            SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie an „https://“ in der
            Adresszeile Ihres Browsers.
          </p>
          <h3>Strukturierte Daten (SEO)</h3>
          <p>
            Zur besseren Auffindbarkeit in Suchmaschinen können strukturierte Angaben (z. B. Unternehmensname,
            Leistungen, Bewertungsangaben) im Quellcode der Seite hinterlegt sein. Diese Daten werden{" "}
            <strong>nicht</strong> an Drittanbieter übermittelt, sondern von Suchmaschinen beim Crawlen der Seite
            ausgelesen. Es werden dabei keine zusätzlichen Tracking-Skripte eingesetzt.
          </p>

          <h2>5. Kontaktaufnahme</h2>
          <h3>Kontaktformular</h3>
          <p>
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular
            inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von
            Anschlussfragen per E-Mail an {site.name} übermittelt. Die Inhalte der Anfrage werden nicht öffentlich auf
            der Website angezeigt und nicht in einer öffentlichen Website-Datenbank gespeichert.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung), soweit Ihre Anfrage mit der Erfüllung
            eines Vertrags oder vorvertraglicher Maßnahmen zusammenhängt, andernfalls Art. 6 Abs. 1 lit. f DSGVO
            (berechtigtes Interesse an der Beantwortung Ihrer Anfrage).
          </p>
          <p>
            Die Übermittlung erfolgt technisch über einen vom Website-Betrieb genutzten SMTP-Mailserver. Die Daten
            werden ausschließlich zur Bearbeitung Ihrer Anfrage verwendet und nicht ohne Ihre Einwilligung an Dritte
            weitergegeben, soweit keine gesetzliche Pflicht besteht. Bitte senden Sie keine besonderen Kategorien
            personenbezogener Daten (z. B. Gesundheitsdaten) über das Formular.
          </p>
          <h3>Spam- und Missbrauchsschutz beim Kontaktformular</h3>
          <p>
            Zum Schutz vor Spam und missbräuchlicher Nutzung verarbeitet das Kontaktformular technisch notwendige
            Sicherheitsinformationen. Dazu gehören unter anderem die IP-Adresse, Zeitpunkt der Anfrage, Herkunft der
            Anfrage, eine unsichtbare Schutzabfrage (Honeypot), die Formular-Verweildauer sowie einfache Prüfungen auf
            ungewöhnlich viele Links. Es wird <strong>kein</strong> externer Dienst wie Google reCAPTCHA eingesetzt.
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO.
          </p>
          <h3>Telefon und E-Mail (direkt)</h3>
          <p>
            Wenn Sie uns telefonisch oder per E-Mail kontaktieren, verarbeiten wir die von Ihnen mitgeteilten Daten
            (z. B. Name, Telefonnummer, E-Mail-Inhalt) zur Bearbeitung Ihres Anliegens. Rechtsgrundlage ist Art. 6 Abs.
            1 lit. b oder lit. f DSGVO.
          </p>
          <h3>E-Mail-Übermittlung und Speicherung</h3>
          <p>
            Kontaktformular-Anfragen werden per E-Mail an {site.email} übermittelt und in unserem geschäftlichen
            E-Mail-System wie eine normale Kundenanfrage gespeichert und bearbeitet. Der konkrete E-Mail-Anbieter
            richtet sich nach der von uns betriebenen Mailbox-Infrastruktur.
          </p>

          <h2>6. Externe Inhalte und Drittanbieter</h2>
          <h3>Stock-Fotos (Pexels)</h3>
          <p>
            Auf einigen Seiten werden Fotos von{" "}
            <a href="https://www.pexels.com/de-de/" target="_blank" rel="noopener noreferrer">
              Pexels
            </a>{" "}
            eingebunden (Domain: <strong>images.pexels.com</strong>). Beim Laden dieser Bilder stellt Ihr Browser eine
            Verbindung zu den Servern von Pexels her. Dabei können technische Daten wie Ihre IP-Adresse, Datum und
            Uhrzeit des Abrufs, Browsertyp und die abgerufene Bild-URL an Pexels bzw. deren Hosting-Anbieter
            übermittelt werden. Pexels kann dabei eigene Cookies oder vergleichbare Technologien setzen; darauf haben
            wir keinen Einfluss.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Unser berechtigtes Interesse liegt in einer ansprechenden,
            verständlichen Darstellung unserer Leistungen. Soweit wir eigene Aufnahmen verwenden, entfällt der Abruf
            bei Pexels für die betreffenden Bilder. Ausgewiesene Pexels-Fotos u. a.: Solarparkpflege (Mark Stebnicki,{" "}
            <a href="https://www.pexels.com/photo/15751134/" target="_blank" rel="noopener noreferrer">
              Photo-ID 15751134
            </a>
            ), Böschungs- & Hangpflege (Art Merikotka,{" "}
            <a href="https://www.pexels.com/photo/20394372/" target="_blank" rel="noopener noreferrer">
              Photo-ID 20394372
            </a>
            ). Weitere Informationen:{" "}
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
            Google Maps oder OpenStreetMap-Servern nachgeladen.
          </p>
          <p>
            Die Umrisse beruhen auf öffentlich zugänglichen Geodaten von{" "}
            <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">
              OpenStreetMap
            </a>{" "}
            (© OpenStreetMap-Mitwirkende,{" "}
            <a href="https://opendatacommons.org/licenses/odbl/" target="_blank" rel="noopener noreferrer">
              ODbL 1.0
            </a>
            ).
          </p>
          <h3>Google-Bewertungen auf der Website</h3>
          <p>
            Auf dieser Website können auszugsweise Google-Bewertungen als <strong>statischer Text</strong> angezeigt
            werden. Es wird <strong>kein</strong> eingebettetes Google-Widget nachgeladen. Verlinkt wird auf unser
            Google-Unternehmensprofil; erst beim Anklicken verlassen Sie unsere Website.
          </p>
          <h3>Externe Links zu Google und Instagram</h3>
          <p>
            Auf dieser Website können Links zu externen Angeboten wie Google Maps, dem Google-Unternehmensprofil oder
            Instagram enthalten sein. Beim reinen Besuch unserer Website werden dadurch <strong>keine Inhalte</strong>{" "}
            dieser Anbieter automatisch geladen. Erst wenn Sie einen solchen Link anklicken, verlassen Sie diese
            Website. Für die anschließende Datenverarbeitung ist der jeweilige Anbieter verantwortlich.
          </p>
          <p>
            Google: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland –{" "}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
              Google Datenschutzerklärung
            </a>
            . Instagram: Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irland –{" "}
            <a href="https://privacycenter.instagram.com/policy/" target="_blank" rel="noopener noreferrer">
              Instagram-Datenschutzerklärung
            </a>
            .
          </p>

          <h2>7. Cookies, Local Storage und Tracking</h2>
          <h3>Kein Marketing- oder Analyse-Tracking</h3>
          <p>
            Diese Website setzt für Besucher der öffentlichen Seiten <strong>keine</strong> Analyse-Tools (z. B. Google
            Analytics), <strong>keine</strong> Werbe-Tracking-Pixel und <strong>kein</strong> Social-Media-Tracking
            ein. Es werden keine Profile zu Werbezwecken erstellt.
          </p>
          <h3>Technisch notwendige Cookies (nur Administrationsbereich)</h3>
          <p>
            Im geschützten Bereich <strong>/admin</strong> (Bildverwaltung, Mietgeräte-Verwaltung) wird nach
            erfolgreicher Anmeldung ein technisch notwendiges Sitzungs-Cookie gesetzt:
          </p>
          <ul>
            <li>
              <strong>Name:</strong> gg_media_admin
            </li>
            <li>
              <strong>Zweck:</strong> Erkennung einer autorisierten Admin-Sitzung
            </li>
            <li>
              <strong>Gültigkeit:</strong> bis zu 14 Tage bzw. bis zum Logout
            </li>
            <li>
              <strong>Pfad:</strong> nur /admin
            </li>
            <li>
              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (Sicherheit und Betrieb geschützter
              Bereiche); für den Admin-Nutzer ggf. Art. 6 Abs. 1 lit. b DSGVO
            </li>
          </ul>
          <p>
            Reguläre Website-Besucher erhalten dieses Cookie <strong>nicht</strong>. Ein Cookie-Einwilligungs-Banner
            ist für den öffentlichen Bereich daher nicht erforderlich (§ 25 TTDSG: keine nicht notwendigen Cookies).
          </p>
          <h3>Local Storage / Session Storage</h3>
          <p>
            Für Marketing- oder Trackingzwecke setzen wir <strong>keinen</strong> Local Storage oder Session Storage
            auf den öffentlichen Seiten ein.
          </p>

          <h2>8. Speicherdauer</h2>
          <p>
            Personenbezogene Daten aus Anfragen speichern wir nur so lange, wie dies zur Bearbeitung Ihres Anliegens,
            zur Erfüllung gesetzlicher Pflichten oder zur Wahrung berechtigter Interessen erforderlich ist.
            Kontaktanfragen per Formular oder E-Mail werden nach abschließender Bearbeitung gelöscht, sofern keine
            gesetzlichen Aufbewahrungspflichten entgegenstehen. Geschäfts- und Handelsbriefe sowie steuerrelevante
            Unterlagen können bis zu 6 bzw. 10 Jahren aufbewahrt werden (handels- und steuerrechtliche Vorschriften).
            Server-Logdaten beim Hoster werden in der Regel nur kurzzeitig vorgehalten (siehe Abschnitt 3).
          </p>

          <h2>9. Ihre Rechte</h2>
          <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
          <ul>
            <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
            <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
            <li>Recht auf Löschung (Art. 17 DSGVO)</li>
            <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
            <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
            <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
            <li>
              Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO), sofern die Verarbeitung auf
              Einwilligung beruht
            </li>
          </ul>
          <p>
            <strong>Widerspruch bei berechtigtem Interesse:</strong> Sofern wir Daten auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO verarbeiten, haben Sie das Recht, aus Gründen, die sich aus Ihrer besonderen Situation
            ergeben, jederzeit Widerspruch einzulegen. Wir verarbeiten die Daten dann nicht mehr, es sei denn, wir
            können zwingende schutzwürdige Gründe nachweisen.
          </p>
          <p>
            Zur Ausübung Ihrer Rechte wenden Sie sich bitte an: <a href={mailtoHref()}>{site.email}</a>
          </p>
          <p>
            Sie haben außerdem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. Zuständig ist
            insbesondere die Aufsichtsbehörde Ihres gewöhnlichen Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts
            des mutmaßlichen Verstoßes. Für uns ist die zuständige Aufsichtsbehörde:
          </p>
          <p>
            Landesbeauftragter für den Datenschutz Sachsen-Anhalt
            <br />
            Leiterstraße 9
            <br />
            39104 Magdeburg
            <br />
            <a href="https://www.datenschutz.sachsen-anhalt.de" target="_blank" rel="noopener noreferrer">
              www.datenschutz.sachsen-anhalt.de
            </a>
          </p>

          <h2>10. Pflicht zur Bereitstellung von Daten</h2>
          <p>
            Die Bereitstellung personenbezogener Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Für die
            Bearbeitung einer Kontaktanfrage sind jedoch mindestens die im Formular als Pflichtfeld gekennzeichneten
            Angaben erforderlich. Ohne diese Daten können wir Ihre Anfrage nicht bearbeiten.
          </p>

          <h2>11. Automatisierte Entscheidungsfindung</h2>
          <p>
            Wir verwenden keine automatisierte Entscheidungsfindung einschließlich Profiling im Sinne von Art. 22
            DSGVO.
          </p>

          <h2>12. Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen
            Anforderungen entspricht oder um Änderungen unserer Leistungen bzw. der eingesetzten Technik abzubilden.
            Für Ihren erneuten Besuch gilt dann die jeweils aktuelle Fassung.
          </p>
        </article>
      </section>
    </InnerPageRoot>
  );
}
