export type RentalFaq = {
  question: string;
  answer: string;
};

export const rentalFaqs: Record<string, RentalFaq[]> = {
  "ferrari-rc-70hy-maehraupe": [
    {
      question: "Was kostet die Ferrari RC-70HY Pro Mähraupe pro Tag?",
      answer:
        "Die Tagesmiete beträgt 150,00 € inkl. MwSt. für maximal 8 Betriebsstunden. Zusätzlich fällt eine Verschleißpauschale von 39,90 € inkl. Messer an. Die Kaution beträgt 400,00 €.",
    },
    {
      question: "Für welche Flächen eignet sich die ferngesteuerte Mähraupe?",
      answer:
        "Ideal für Hochgras, Wiesen, Brachflächen, Böschungen bis 45° Neigung und schwer zugängliche Bereiche. Die 70 cm Schnittbreite und Raupenketten ermöglichen sicheren Einsatz dort, wo normale Mäher an Grenzen stoßen.",
    },
    {
      question: "Brauche ich Erfahrung mit ferngesteuerten Mähern?",
      answer:
        "Grundlegende Sicherheit im Umgang mit Motorgeräten ist hilfreich. Bei Abholung in Gerbstedt erhalten Sie eine Einweisung zu Start, Fernbedienung, Schnitthöhe und sicherem Betrieb am Hang.",
    },
    {
      question: "Ist Lieferung der Mähraupe möglich?",
      answer:
        "Ja, Lieferung und Abholung sind nach Absprache möglich – abhängig von Entfernung, Zufahrt und Terminlage. Nennen Sie uns Einsatzort und Zeitraum in der Mietanfrage.",
    },
    {
      question: "Welcher Kraftstoff wird benötigt?",
      answer:
        "Die Maschine fährt mit Super E5. Das Hybrid-Konzept nutzt elektrischen Antrieb und Benzin für den Mähbetrieb; die Akkus laden sich während des Betriebs mit.",
    },
    {
      question: "Nutzt Green Guard GmbH die Mähraupe auch für Solarparkpflege?",
      answer:
        "Ja. Die RC-70HY Pro ist Teil unseres Einsatzkonzepts für Grünunterhalt unter und zwischen PV-Modulen sowie in Rand- und Böschungsbereichen von Freiflächenanlagen. Mehr dazu auf der Leistungsseite Solarparkpflege.",
    },
  ],
};
