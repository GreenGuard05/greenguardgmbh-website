import { serviceRegionalFaq, serviceRegionListText } from "@/lib/service-seo";

export type ServiceFaq = {
  question: string;
  answer: string;
};

export const serviceFaqs: Record<string, ServiceFaq[]> = {
  boeschungspflege: [
    {
      question: "Was ist Böschungs- und Hangpflege bei Green Guard GmbH?",
      answer:
        "Wir mähen und pflegen Böschungen, Hänge und schwer erreichbare Grünflächen dort, wo Arbeit mit dem Freischneider aus Sicherheitsgründen nicht ausreicht. Dafür setzen wir unter anderem ferngesteuerte Mähraupe, Hochgrasmäher und Aufsitzmäher ein – abgestimmt auf Neigung, Zugang und Vegetation.",
    },
    {
      question: "An welchen Objekten arbeiten Sie?",
      answer:
        "Typische Einsätze betreffen Grünflächen an Schienen- und Bahntrassen, Autobahnen und Bundesstraßen, Brücken und Rampen, Rückhaltebecken, Überlaufbecken, Dämmen und weiteren Infrastrukturflächen mit erschwertem Zugang oder besonderen Sicherheitsanforderungen.",
    },
    {
      question: "Warum nicht einfach mit dem Freischneider?",
      answer:
        "Auf steilen Böschungen oder unebenem Gelände fehlt oft die nötige Standfestigkeit. Unsere Technik – besonders die ferngesteuerte Mähraupe mit Hangtauglichkeit bis 45° – ermöglicht kontrolliertes Arbeiten aus sicherer Entfernung, ohne Mitarbeiter im direkten Hangbereich.",
    },
    {
      question: "Welche Technik kommt zum Einsatz?",
      answer:
        "Je nach Fläche kombinieren wir ferngesteuerte Mähraupe, Hochgrasmäher und Aufsitzmäher. So sind enge Bereiche, hohes Gras und größere, befahrbare Strecken mit der passenden Maschine abgedeckt.",
    },
    {
      question: "Bieten Sie Böschungsmähen in Sachsen-Anhalt an?",
      answer: `Ja. Schwerpunkt ist Gerbstedt und Mansfeld-Südharz; Einsätze planen wir unter anderem in ${serviceRegionListText()}. Weitere Infrastruktur- und Sonderflächen stimmen wir nach Begehung, Zufahrt und Terminlage ab.`,
    },
    serviceRegionalFaq("Böschungs- und Hangpflege"),
    {
      question: "Böschungsmähen in Halle (Saale) – übernimmt Green Guard GmbH das?",
      answer:
        "Ja. Halle (Saale) gehört zu unseren Einsatzgebieten. Für Böschungen, Hanglagen und Infrastrukturgrün an Straßen, Gewässern oder technischen Anlagen prüfen wir Fläche, Sicherheit und passende Maschinen vor Ort.",
    },
    {
      question: "Hangpflege und Böschungsmähen in Mansfeld-Südharz – ist das möglich?",
      answer:
        "Ja. Mansfeld-Südharz und Mansfeld sind feste Schwerpunkte unserer regionalen Arbeit. Gerade für Steilhänge und schwer erreichbare Strecken setzen wir auf ferngesteuerte Mähraupe und ergänzende Profi-Geräte.",
    },
    {
      question: "Sind Wartungsverträge oder wiederkehrende Einsätze möglich?",
      answer:
        "Ja. Für Kommunen, Betreiber, Hausverwaltungen und Gewerbe planen wir feste Schnittintervalle nach Vegetationsphase – von der Erstbegehung bis zur laufenden Pflege.",
    },
  ],
  solarparkpflege: [
    {
      question: "Was versteht Green Guard GmbH unter Solarparkpflege?",
      answer:
        "Solarparkpflege umfasst den fachgerechten Grünunterhalt auf und um Freiflächen-PV-Anlagen: Mähen zwischen Modulreihen, Pflege von Rand- und Böschungsbereichen sowie die Sicherung von Zufahrten und Kontrollwegen – abgestimmt auf Ihre Anlage und Vegetationsphase.",
    },
    {
      question: "Warum ist Grünunterhalt bei Solarparks wichtig?",
      answer:
        "Hohes Gras und Wildwuchs können Verschattung, Schäden an Kabeln oder Zäunen und erschwerte Kontrollgänge verursachen. Regelmäßige Pflege unterstützt Ertrag, Sicherheit und einen gepflegten Gesamteindruck der Anlage.",
    },
    {
      question: "Welche Technik setzt Green Guard GmbH ein?",
      answer:
        "Je nach Anlage und Gelände setzen wir die passende Profi-Technik ein: ferngesteuerte Mähraupe für enge Reihenabstände und Hanglagen bis 45°, Hochgrasmäher für hohes Gras und Brachflächen sowie Aufsitzmäher für große, gut befahrbare Freiflächen. So ist jeder Einsatzbereich mit dem richtigen Gerät abgedeckt.",
    },
    {
      question: "Warum nicht nur eine Maschine für den ganzen Solarpark?",
      answer:
        "Modulreihen, Böschungen, Randstreifen und Zufahrten stellen unterschiedliche Anforderungen. Wir wählen die Kombination aus Geräten so, dass Pflege effizient, sicher und schonend für Anlage und Umgebung bleibt – ohne Kompromisse bei schwer zugänglichen Bereichen.",
    },
    serviceRegionalFaq("Solarparkpflege"),
    {
      question: "Sind Wartungsverträge für PV-Betreiber möglich?",
      answer:
        "Ja. Für Betreiber, Hausverwaltungen und Projektgesellschaften planen wir feste Pflegeintervalle, dokumentierte Einsätze und einen festen Ansprechpartner – von der Erstbegehung bis zur laufenden Betreuung.",
    },
    {
      question: "Kann ich Geräte für die Pflege auch selbst mieten?",
      answer:
        "Ja. Im Gerätemietservice stellen wir unter anderem die Ferrari RC-70HY Pro Mähraupe, Hochgrasmäher und weitere Profi-Geräte zur Verfügung – inklusive Einweisung. Details finden Sie unter Geräte mieten.",
    },
  ],
  gruenanlage: [
    {
      question: "Übernimmt Green Guard GmbH regelmäßige Grünanlagenpflege in Gerbstedt und Umgebung?",
      answer: `Ja. Wir betreuen Grünanlagen regelmäßig nach abgestimmtem Pflegeintervall – unter anderem in ${serviceRegionListText()}.`,
    },
    {
      question: "Welche Arbeiten gehören zur Grünanlagenpflege?",
      answer:
        "Dazu gehören Rasenmäharbeiten, Kantenschnitt, Beetpflege, Baumpflege, Formschnitt, Laubentsorgung und fachgerechte Entsorgung von Grünschnitt.",
    },
    {
      question: "Ist Grünpflege auch für Hausverwaltungen und Gewerbe möglich?",
      answer:
        "Ja. Wir planen Pflegeintervalle besonders für Wohnanlagen, Gewerbeobjekte und Gemeinschaftsflächen, damit Außenanlagen dauerhaft ordentlich wirken.",
    },
    serviceRegionalFaq("Grünanlagenpflege"),
  ],
  hausmeisterservice: [
    {
      question: "Was umfasst der Hausmeisterservice von Green Guard GmbH?",
      answer:
        "Unser Hausmeisterservice umfasst Objektkontrolle, Kleinreparaturen, Müllplatzpflege, Gemeinschaftsflächen, Handwerkerkoordination und technische Kleinaufträge.",
    },
    {
      question: "Arbeitet Green Guard GmbH mit Hausverwaltungen zusammen?",
      answer: `Ja. Hausverwaltungen profitieren von festen Ansprechpartnern, klaren Abläufen und regelmäßiger Betreuung – unter anderem in ${serviceRegionListText()}.`,
    },
    {
      question: "Sind kurzfristige Einsätze oder Notfälle möglich?",
      answer:
        "Je nach Auslastung sind kurzfristige Einsätze möglich. Dringende Anliegen werden priorisiert und persönlich abgestimmt.",
    },
    serviceRegionalFaq("Hausmeisterservice"),
  ],
  winterdienst: [
    {
      question: "Bietet Green Guard GmbH Winterdienst mit Saisonvertrag an?",
      answer:
        "Ja. Saisonverträge sind für Gehwege, Zufahrten und Parkplätze möglich. So werden Routen und Zuständigkeiten vor Winterbeginn sauber geplant.",
    },
    {
      question: "Wird der Winterdienst dokumentiert?",
      answer:
        "Ja. Einsätze können nachvollziehbar dokumentiert werden, damit die Erfüllung der Verkehrssicherungspflicht besser belegbar bleibt.",
    },
    serviceRegionalFaq("Winterdienst"),
    {
      question: "Übernimmt Green Guard GmbH Winterdienst in Halle (Saale)?",
      answer:
        "Ja. Winterdienst in Halle (Saale) ist ein wichtiger Schwerpunkt, besonders für Verwaltungen, Gewerbeflächen, Wohnanlagen, Zufahrten und Parkbereiche.",
    },
  ],
  reinigung: [
    {
      question: "Welche Reinigungsarbeiten bietet Green Guard GmbH an?",
      answer:
        "Wir übernehmen Unterhaltsreinigung, Treppenhausreinigung, Büro- und Gewerbereinigung, Grundreinigung, Sonderreinigung, Baureinigung und Außenanlagenreinigung.",
    },
    {
      question: "Ist Gebäudereinigung für Wohnanlagen möglich?",
      answer:
        "Ja. Treppenhäuser, Gemeinschaftsbereiche und Eingangsbereiche können regelmäßig gereinigt und passend zum Objekt geplant werden.",
    },
    {
      question: "Gibt es Reinigung für Gewerbe und Büros?",
      answer:
        "Ja. Für Büros, Gewerbeflächen, Werkstätten und Verkaufsflächen stimmen wir Reinigungsumfang und Intervalle individuell ab.",
    },
    serviceRegionalFaq("Gebäudereinigung"),
  ],
  strauchpflege: [
    {
      question: "Wann ist Strauch- und Buschpflege sinnvoll?",
      answer:
        "Sinnvoll ist sie, wenn Sträucher ihre Form verlieren, Wege zuwachsen, Sichtachsen frei bleiben sollen oder ein fachgerechter Rückschnitt nötig ist.",
    },
    {
      question: "Entsorgt Green Guard GmbH den Grünschnitt?",
      answer:
        "Ja. Auf Wunsch wird Grünschnitt gesammelt, abtransportiert und fachgerecht entsorgt, damit die Fläche sauber übergeben wird.",
    },
    {
      question: "Gehören Formschnitt und Obstbaumschnitt dazu?",
      answer:
        "Ja. Formschnitt, Gestaltungsschnitt, Rückschnitt, Auslichten, Obstbaumschnitt und Rosenpflege können je nach Saison abgestimmt werden.",
    },
    serviceRegionalFaq("Strauch- und Buschpflege"),
  ],
};
