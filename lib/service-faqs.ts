export type ServiceFaq = {
  question: string;
  answer: string;
};

export const serviceFaqs: Record<string, ServiceFaq[]> = {
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
        "Für anspruchsvolle Flächen nutzen wir unter anderem die ferngesteuerte Ferrari RC-70HY Pro Mähraupe mit 70 cm Schnittbreite und Hangtauglichkeit bis 45°. So lassen sich enge Reihenabstände und Böschungen effizient und kontrolliert bearbeiten.",
    },
    {
      question: "In welcher Region bieten Sie Solarparkpflege an?",
      answer:
        "Schwerpunkt ist Gerbstedt, Mansfeld-Südharz und Sachsen-Anhalt. Weitere Einsatzorte für Freiflächenanlagen stimmen wir nach Lage, Größe und Terminplanung individuell ab.",
    },
    {
      question: "Sind Wartungsverträge für PV-Betreiber möglich?",
      answer:
        "Ja. Für Betreiber, Hausverwaltungen und Projektgesellschaften planen wir feste Pflegeintervalle, dokumentierte Einsätze und einen festen Ansprechpartner – von der Erstbegehung bis zur laufenden Betreuung.",
    },
    {
      question: "Kann ich die Mähraupe auch selbst mieten?",
      answer:
        "Ja. Die Ferrari RC-70HY Pro Mähraupe können Sie zusätzlich im Gerätemietservice mieten – inklusive Einweisung. Details zu Preis, Kaution und Verfügbarkeit finden Sie unter Geräte mieten.",
    },
  ],
  gruenanlage: [
    {
      question: "Übernimmt Green Guard GmbH regelmäßige Grünanlagenpflege in Gerbstedt und Umgebung?",
      answer:
        "Ja. Wir betreuen Grünanlagen in Gerbstedt, Hettstedt, Eisleben, Mansfeld-Südharz und Umgebung regelmäßig nach abgestimmtem Pflegeintervall.",
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
  ],
  hausmeisterservice: [
    {
      question: "Was umfasst der Hausmeisterservice von Green Guard GmbH?",
      answer:
        "Unser Hausmeisterservice umfasst Objektkontrolle, Kleinreparaturen, Müllplatzpflege, Gemeinschaftsflächen, Handwerkerkoordination und technische Kleinaufträge.",
    },
    {
      question: "Arbeitet Green Guard GmbH mit Hausverwaltungen zusammen?",
      answer:
        "Ja. Hausverwaltungen profitieren von festen Ansprechpartnern, klaren Abläufen und regelmäßiger Betreuung für Immobilien in Gerbstedt und Mansfeld-Südharz.",
    },
    {
      question: "Sind kurzfristige Einsätze oder Notfälle möglich?",
      answer:
        "Je nach Auslastung sind kurzfristige Einsätze möglich. Dringende Anliegen werden priorisiert und persönlich abgestimmt.",
    },
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
    {
      question: "Für welche Orte ist Winterdienst möglich?",
      answer:
        "Ein Schwerpunkt liegt auf Halle (Saale), Gerbstedt, Mansfeld-Südharz und Umgebung. Weitere Orte werden nach Objekt, Route und Kapazität abgestimmt.",
    },
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
  ],
};
