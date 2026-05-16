export type ServiceFaq = {
  question: string;
  answer: string;
};

export const serviceFaqs: Record<string, ServiceFaq[]> = {
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
        "Der Schwerpunkt liegt auf Gerbstedt, Mansfeld-Südharz und Umgebung. Weitere Orte werden nach Objekt, Route und Kapazität abgestimmt.",
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
