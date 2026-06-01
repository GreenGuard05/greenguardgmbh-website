export type FaqItem = {
  /** Stabile ID für Anker / Assistenztechnologien */
  id: string;
  question: string;
  /** Nur Klartext (wird 1:1 ins FAQPage-JSON-LD übernommen) */
  answer: string;
};

/** Inhalt der Startseiten-FAQ (sichtbar + Schema.org) */
export const homeFaqItems: FaqItem[] = [
  {
    id: "einsatzgebiet",
    question: "In welchem Gebiet arbeitet die Green Guard GmbH?",
    answer:
      "Wir sind in Gerbstedt (Landkreis Mansfeld-Südharz) verwurzelt und betreuen Kunden im gesamten Sachsen-Anhalt und angrenzenden Regionen – je nach Leistung und Einsatzort. Am schnellsten klären wir die Machbarkeit in einem kurzen Telefonat oder per Mail.",
  },
  {
    id: "leistungen",
    question: "Welche Leistungen bietet ihr aus einer Hand an?",
    answer:
      "Zu unserem Kerngeschäft zählen unter anderem Grünanlagenpflege, Solarparkpflege, Böschungs- & Hangpflege, Hausmeisterservice, Winterdienst, Gebäudereinigung, Strauch- & Buschpflege sowie der Gerätemietservice. Gerne stellen wir Ihnen ein Paket zusammen, das zu Ihrer Immobilie passt.",
  },
  {
    id: "angebot-rueckmeldung",
    question: "Wie schnell erhalte ich ein Angebot oder eine Rückmeldung?",
    answer:
      "Über das Kontaktformular oder telefonisch melden wir uns in der Regel innerhalb von 24 Stunden. Für größere Objekte oder Sonderwünsche kann eine kurze Besichtigung vor Ort sinnvoll sein – das besprechen wir transparent mit Ihnen.",
  },
  {
    id: "winterdienst",
    question: "Wie läuft der Winterdienst ab – auch außerhalb der „normalen“ Zeiten?",
    answer:
      "Winterdienst ist für viele Objekte früh morgens und verlässlich entscheidend. Umfang, Zeiten und Bereitschaft stimmen wir mit Ihnen ab – je nach Objekt, Verkehrssicherungspflicht und örtlichen Gegebenheiten. Konkrete Regelungen legen wir schriftlich im Auftrag fest.",
  },
  {
    id: "festpreis",
    question: "Arbeitet ihr mit Festpreisen oder nach Aufwand?",
    answer:
      "Wir legen Wert auf transparente Angebote. Ob Festpreis oder nach Aufwand hängt von der Leistung und der Planbarkeit ab. Nach der Besichtigung beziehungsweise Objektbeschreibung erhalten Sie eine klare Leistungs- und Preisübersicht, bevor es losgeht.",
  },
  {
    id: "reinigung-gruenpflege",
    question: "Was gehört zur Gebäudereinigung bzw. zur Grünpflege typischerweise dazu?",
    answer:
      "Reinigung: zum Beispiel Treppenhaus, Büroflächen, Unterhalts- oder Grundreinigung – je nach Vereinbarung. Grünpflege: Rasen, Hecken, Gehölze, Saisonarbeiten – abgestimmt auf Ihre Flächen und Wünsche. Leistungsumfang und Intervall werden vorab gemeinsam definiert.",
  },
  {
    id: "geraetemiete",
    question: "Wie funktioniert der Gerätemietservice?",
    answer:
      "Sie nennen uns Gerätetyp und Zeitraum; wir klären Verfügbarkeit, Übergabe beziehungsweise Einweisung und die Details der Miete. Bei Fragen zu Zubehör oder Einsatzort helfen wir gern direkt – am besten telefonisch oder per Mail.",
  },
  {
    id: "passt-green-guard",
    question: "Woran erkenne ich, ob die Green Guard GmbH zu meinem Objekt passt?",
    answer:
      "Wenn Sie Immobilien oder Außenanlagen in Sachsen-Anhalt zuverlässig betreut haben wollen – von Grün über Hausmeister bis Winter und Reinigung – passen wir oft gut zusammen. Ein kurzes Gespräch reicht meist, um Klarheit zu schaffen.",
  },
];
