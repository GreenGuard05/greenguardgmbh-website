import type { ServiceHeroTitle } from "@/components/inner-page-hero";
import { serviceRegionalBullet, serviceRegionalSeoText, serviceRegionListText } from "@/lib/service-seo";
import type {
  ServiceAudienceItem,
  ServiceProcessStep,
  ServiceScope,
  ServiceSeoBlock,
  ServiceStory,
} from "@/lib/service-scope";

export type ServiceAmbientScene =
  | "services"
  | "greensCare"
  | "cleaning"
  | "winter"
  | "caretaker"
  | "shrubCare";

export type ServicePageCta = {
  badge?: string;
  headingLead: string;
  headingAccent: string;
  subline: string;
  buttonLabel: string;
};

export type ServicePageContent = {
  heroTitle: ServiceHeroTitle;
  /** Hero-Text (Live-Unterseite) */
  heroDescription: string;
  /** Optional abweichender Primär-Button im Hero */
  heroPrimaryLabel?: string;
  story: ServiceStory;
  scope: ServiceScope;
  audiences: ServiceAudienceItem[];
  process: ServiceProcessStep[];
  seoBlock: ServiceSeoBlock;
  cta: ServicePageCta;
  /** Hintergrund-Motive in Hero, Leistungsumfang & CTA */
  ambientScene?: ServiceAmbientScene;
};

const pages: Record<string, ServicePageContent> = {
  gruenanlage: {
    heroTitle: {
      prefix: "Professionelle",
      accent: "Grünanlagenpflege",
      suffix: "in Gerbstedt & Region.",
    },
    heroDescription:
      "Gepflegte Grünflächen steigern den Wert Ihrer Immobilie und schaffen ein angenehmes Ambiente. Wir kümmern uns ganzjährig um Ihren Außenbereich – zuverlässig und termingerecht.",
    story: {
      eyebrow: "Grünflächen mit Wirkung",
      heading: "Der erste Eindruck entsteht schon vor der Eingangstür.",
      headingAccent: "Eingangstür",
      lead:
        "Rasen, Beete, Bäume und Wege prägen, wie Bewohner, Kunden und Besucher ein Objekt wahrnehmen. Wenn diese Flächen regelmäßig gepflegt werden, wirkt die gesamte Immobilie wertiger und einladender.",
      paragraphs: [
        "Green Guard GmbH betreut Grünanlagen in Gerbstedt, im Landkreis Mansfeld-Südharz und in Sachsen-Anhalt mit einem Blick für Funktion und Optik. Wir mähen nicht einfach nur Rasen, sondern achten auf Kanten, Form, Sauberkeit und den richtigen Pflegezeitpunkt.",
        "Besonders für Hausverwaltungen und Gewerbeobjekte zählt Planbarkeit: feste Intervalle, klare Absprachen und eine gepflegte Fläche, ohne dass Sie jedem Einsatz hinterhertelefonieren müssen.",
      ],
      cards: [
        {
          title: "Ästhetisch gepflegt",
          description: "Formschnitt, Beetpflege und saubere Rasenflächen sorgen für einen sichtbaren Qualitätsunterschied.",
        },
        {
          title: "Fachgerecht umgesetzt",
          description: "Baumpflege, Totholzentfernung und Grünschnittentsorgung werden sauber geplant und zuverlässig erledigt.",
        },
        {
          title: "Regional betreut",
          description: "Kurze Wege aus Gerbstedt ermöglichen flexible Termine und schnelle Abstimmung vor Ort.",
        },
      ],
    },
    scope: {
      eyebrow: "Leistungsumfang",
      heading: "Grünflächenpflege für gepflegte Außenanlagen.",
      headingAccent: "Außenanlagen",
      intro:
        "Von Rasenmäharbeiten bis zur Gestaltung von Grünanlagen: Wir übernehmen die Arbeiten, die Außenflächen dauerhaft gepflegt und nutzbar halten.",
      columns: [
        [
          "Rasenmäharbeiten & Kantenschnitt",
          "Gestaltung von Grünanlagen",
          "Beetpflege",
          "Heckenschnitt & Formschnitt",
          "Strauch- & Buschpflege",
        ],
        [
          "Baumpflege",
          "Totholzentfernung",
          "Laubentsorgung & Grünschnitt",
          "Entsorgung von Grünschnitt",
        ],
      ],
      highlights: [
        {
          icon: "calendar",
          title: "Regelmäßige Pflege",
          description:
            "Wir erstellen einen individuellen Pflegeplan – wöchentlich, zweiwöchentlich oder monatlich.",
        },
        {
          icon: "tools",
          title: "Fachgerechte Ausführung",
          description:
            "Unser Personal arbeitet mit modernen Profi-Geräten und natürlichen Pflegemitteln.",
        },
        {
          icon: "location",
          title: "Regionaler Anbieter",
          description:
            "Als lokales Unternehmen kennen wir die klimatischen Besonderheiten in Sachsen-Anhalt.",
        },
      ],
    },
    audiences: [
      {
        title: "Hausverwaltungen",
        description: "Für Wohnanlagen, Gemeinschaftsflächen und regelmäßige Pflegeintervalle mit klarer Zuständigkeit.",
      },
      {
        title: "Gewerbeobjekte",
        description: "Für Außenflächen, die Kunden, Mitarbeitende und Besucher jeden Tag sauber wahrnehmen sollen.",
      },
      {
        title: "Private Grundstücke",
        description: "Für Eigentümer, die gepflegte Grünflächen wünschen, aber Zeit, Geräte oder Fachwissen sparen möchten.",
      },
    ],
    process: [
      {
        title: "Fläche ansehen",
        description: "Wir prüfen Zustand, Größe, gewünschtes Pflegebild und saisonale Besonderheiten direkt am Objekt.",
      },
      {
        title: "Pflegeplan abstimmen",
        description: "Sie erhalten einen klaren Vorschlag für Umfang, Rhythmus und Entsorgung der anfallenden Grünabfälle.",
      },
      {
        title: "Regelmäßig pflegen",
        description: "Unser Team arbeitet termingerecht und achtet darauf, dass Rasen, Beete, Sträucher und Bäume zusammenpassen.",
      },
      {
        title: "Sauber übergeben",
        description: "Laub und Grünschnitt werden ordentlich aufgenommen und fachgerecht entsorgt.",
      },
    ],
    seoBlock: {
      eyebrow: "Grünanlagenpflege · Sachsen-Anhalt",
      heading: `Grünanlagenpflege in ${serviceRegionListText()}.`,
      headingAccent: "Grünanlagenpflege",
      text: serviceRegionalSeoText(
        "Grünanlagenpflege und Gartenpflege",
        "Rasenmäharbeiten, Heckenschnitt, Beetpflege, Baumpflege und Grünschnittentsorgung – mit festen Pflegeintervallen für Wohnanlagen, Gewerbe und private Grundstücke.",
      ),
      bullets: [
        "Grünpflege für Wohnanlagen, Gewerbe und private Grundstücke",
        "Rasenmäharbeiten, Formschnitt, Beetpflege und Baumpflege aus einer Hand",
        "Laub- und Grünschnittentsorgung für saubere Außenbereiche",
        serviceRegionalBullet("feste Pflegeintervalle nach Absprache"),
      ],
    },
    cta: {
      badge: "Unverbindlich · 24h Antwort",
      headingLead: "Jetzt Grünanlagenpflege",
      headingAccent: "anfragen",
      subline: "Unverbindliches Angebot – Antwort innerhalb von 24 Stunden.",
      buttonLabel: "Angebot anfordern",
    },
    ambientScene: "greensCare",
  },
  solarparkpflege: {
    heroTitle: {
      prefix: "Professionelle",
      accent: "Solarparkpflege",
      suffix: "für PV-Freiflächen.",
    },
    heroDescription:
      "Grünunterhalt unter Modulreihen, an Böschungen und auf großen Freiflächen – mit erfahrenem Team und Profi-Technik von der Mähraupe über Hochgrasmäher bis zum Aufsitzmäher.",
    heroPrimaryLabel: "Solarparkpflege anfragen",
    story: {
      eyebrow: "PV & Grünflächen",
      heading: "Gepflegte Freiflächen schützen Ertrag, Wege und Technik.",
      headingAccent: "Ertrag, Wege und Technik",
      lead:
        "Wildwuchs und hohes Gras auf Solarparks beeinträchtigen nicht nur das Erscheinungsbild, sondern auch Kontrollgänge, Zäune und die Umgebung der Module. Regelmäßige Pflege hält Flächen nutzbar und reduziert Risiken durch Verschattung oder verborgene Schäden.",
      paragraphs: [
        "Green Guard GmbH bietet Solarparkpflege für Freiflächen-PV-Anlagen in Gerbstedt, Mansfeld-Südharz und Sachsen-Anhalt. Wir sind mit einer durchdachten Profi-Flotte unterwegs – darunter die ferngesteuerte Ferrari RC-70HY Pro Mähraupe für enge Reihenabstände und Hanglagen, leistungsstarke Hochgrasmäher sowie Aufsitzmäher für große, gut befahrbare Flächen.",
        "Welches Gerät zum Einsatz kommt, entscheiden wir nach Gelände, Vegetation und Sicherheitsanforderungen Ihrer Anlage. Auf Wunsch planen wir feste Intervalle, dokumentieren Einsätze und stimmen uns mit Betreibern, Hausverwaltungen oder Projektgesellschaften ab – von der Erstbegehung bis zum Wartungsvertrag.",
      ],
      cards: [
        {
          title: "Profi-Flotte im Einsatz",
          description:
            "Mähraupe, Hochgrasmäher, Aufsitzmäher und weiteres Equipment – jeweils dort, wo es die Fläche am besten verlangt.",
        },
        {
          title: "Planbare Intervalle",
          description:
            "Pflege nach Vegetationsphase – abgestimmt auf Ertrag, Sicherheit und Ihre Betriebsabläufe.",
        },
        {
          title: "Regional & erreichbar",
          description:
            "Kurze Wege aus Gerbstedt, feste Ansprechpartner und schnelle Abstimmung vor Ort.",
        },
      ],
    },
    scope: {
      eyebrow: "Leistungsumfang",
      heading: "Grünunterhalt für Solarparks und Freiflächenanlagen.",
      headingAccent: "Solarparks und Freiflächenanlagen",
      intro:
        "Von der Pflege zwischen Modulreihen bis zur Böschungs- und Randpflege: Wir halten Ihre PV-Flächen in einem Zustand, der Betrieb und Kontrolle erleichtert.",
      columns: [
        [
          "Grünflächenpflege unter & zwischen Modulen",
          "Mäharbeiten in Reihenabständen",
          "Rand- & Zaunstreifenpflege",
          "Böschungs- & Hangpflege",
        ],
        [
          "Kontrollwege & Zufahrten freihalten",
          "Wildwuchs- & Hochgrasmanagement",
          "Einsatz Hochgrasmäher & Aufsitzmäher",
          "Saisonale Pflegeintervalle",
          "Wartungsverträge für Betreiber",
        ],
      ],
      highlights: [
        {
          icon: "tools",
          title: "Technik nach Anforderung",
          description:
            "Mähraupe für enge Reihen und Hänge, Hochgrasmäher für hohes Gras, Aufsitzmäher für große Freiflächen.",
        },
        {
          icon: "calendar",
          title: "Feste Pflegepläne",
          description:
            "Intervalle nach Vegetation und Anforderung – transparent geplant und umgesetzt.",
        },
        {
          icon: "location",
          title: "Sachsen-Anhalt",
          description:
            "Einsätze in Gerbstedt, Mansfeld-Südharz und Umgebung – weitere Standorte nach Absprache.",
        },
      ],
    },
    audiences: [
      {
        title: "PV-Betreiber & Projektgesellschaften",
        description:
          "Für Freiflächenanlagen mit Bedarf an zuverlässigem Grünunterhalt und dokumentierten Pflegeeinsätzen.",
      },
      {
        title: "Hausverwaltungen & Asset Manager",
        description:
          "Für Anlagen mit mehreren Flächen, bei denen ein fester Ansprechpartner und klare Abläufe wichtig sind.",
      },
      {
        title: "Gewerbe & Kommunen",
        description:
          "Für öffentliche oder gewerbliche PV-Flächen mit hohen Anforderungen an Sicherheit und Erscheinungsbild.",
      },
    ],
    process: [
      {
        title: "Anlage begehen",
        description:
          "Wir prüfen Flächen, Reihenabstände, Hanglagen, Zufahrten und gewünschte Pflegeziele vor Ort.",
      },
      {
        title: "Konzept & Intervall",
        description:
          "Sie erhalten einen Vorschlag für Schnitthöhen, Einsatzhäufigkeit und die passende Gerätekombination für Ihre Flächen.",
      },
      {
        title: "Pflege umsetzen",
        description:
          "Unser Team arbeitet termingerecht, sicher und mit Blick auf Module, Kabeltrassen und Umgebung.",
      },
      {
        title: "Fortführung & Vertrag",
        description:
          "Bei Bedarf übernehmen wir die laufende Betreuung als Wartungsvertrag mit planbaren Terminen.",
      },
    ],
    seoBlock: {
      eyebrow: "Solarparkpflege · Sachsen-Anhalt",
      heading: `Solarparkpflege in ${serviceRegionListText()}.`,
      headingAccent: "Solarparkpflege",
      text: serviceRegionalSeoText(
        "Solarparkpflege und PV-Grünunterhalt",
        "Mit ferngesteuerter Mähraupe, Hochgrasmäher, Aufsitzmäher und erfahrenem Team halten wir Freiflächenanlagen nutzbar und gepflegt – technisch bestens ausgestattet für jede Anforderung.",
      ),
      bullets: [
        "Grünflächenpflege unter und zwischen Modulreihen",
        "Profi-Technik: Mähraupe, Hochgrasmäher, Aufsitzmäher",
        serviceRegionalBullet("Wartungsverträge nach Bedarf"),
      ],
    },
    cta: {
      badge: "Unverbindlich · 24h Antwort",
      headingLead: "Jetzt Solarparkpflege",
      headingAccent: "anfragen",
      subline: "Erstbegehung und Angebot – Antwort innerhalb von 24 Stunden.",
      buttonLabel: "Angebot anfordern",
    },
    ambientScene: "greensCare",
  },
  boeschungspflege: {
    heroTitle: {
      prefix: "Sichere",
      accent: "Böschungs- & Hangpflege",
      suffix: "für schwieriges Gelände.",
    },
    heroDescription:
      "Böschungsmähen und Hangpflege an Hängen und schwer erreichbaren Flächen – wenn der Freischneider an Standfestigkeit scheitert. Mit ferngesteuerter Mähraupe, Hochgrasmäher und Profi-Flotte.",
    heroPrimaryLabel: "Böschungspflege anfragen",
    story: {
      eyebrow: "Infrastruktur & Sonderflächen",
      heading: "Steile Böschungen brauchen Technik – nicht Risiko.",
      headingAccent: "Technik – nicht Risiko",
      lead:
        "An Bahndämmen, Straßenbegleitgrün, Brückenrampen oder an Rückhalte- und Überlaufbecken reicht oft kein Freischneider mehr: zu steil, zu uneben, zu gefährlich. Dann zählt die richtige Maschine und ein Team, das solche Einsätze kennt.",
      paragraphs: [
        "Green Guard GmbH übernimmt Böschungs- und Hangpflege in Gerbstedt, Mansfeld-Südharz und Sachsen-Anhalt – dort, wo Zugang erschwert ist und Sicherheit Vorrang hat. Im Mittelpunkt steht unsere ferngesteuerte Mähraupe für Neigungen bis 45°, ergänzt durch Hochgrasmäher und Aufsitzmäher für passende Strecken.",
        "Typische Einsatzorte sind Grünflächen entlang von Schienen und Bahnstrecken, Autobahnen und Bundesstraßen, Brücken und Rampen, Rückhaltebecken, Überlaufbecken sowie weitere Infrastrukturflächen. Wir begehen die Fläche, wählen die Technik und planen auf Wunsch feste Schnittintervalle oder Wartungsverträge.",
      ],
      cards: [
        {
          title: "Sicher statt riskant",
          description:
            "Fernsteuerung und Hangtechnik statt Arbeit im steilen Gelände mit Freischneider – kontrolliert und planbar.",
        },
        {
          title: "Infrastruktur-Erfahrung",
          description:
            "Einsätze an Trassen, Straßen, Brücken und technischen Anlagen mit Blick auf Zugang und Vorgaben vor Ort.",
        },
        {
          title: "Profi-Flotte",
          description:
            "Mähraupe, Hochgrasmäher und Aufsitzmäher – kombiniert nach Gelände und Vegetation.",
        },
      ],
    },
    scope: {
      eyebrow: "Leistungsumfang",
      heading: "Böschungsmähen und Hangpflege im Überblick.",
      headingAccent: "Hangpflege",
      intro:
        "Von der steilen Böschung bis zur schwer erreichbaren Randfläche: Wir halten Grün unter Kontrolle – mit Technik, die für die jeweilige Lage gebaut ist.",
      columns: [
        [
          "Böschungsmähen & Hangpflege",
          "Schwer zugängliche Grünflächen",
          "Hochgras- & Wildwuchsmanagement",
          "Rand- und Streifenpflege",
        ],
        [
          "Bahndamm- & Schienenbegleitgrün",
          "Autobahn- & Bundesstraßenbegleitgrün",
          "Brücken, Rampen, Rückhalte- & Überlaufbecken",
          "Wartungsverträge & Intervalle",
        ],
      ],
      highlights: [
        {
          icon: "tools",
          title: "Hangtaugliche Technik",
          description:
            "Ferngesteuerte Mähraupe bis 45° Neigung – dort, wo Freischneider nicht sicher einsetzbar sind.",
        },
        {
          icon: "emergency",
          title: "Erschwerter Zugang",
          description:
            "Planung für enge Zufahrten, Sicherheitsabstände und koordinierte Einsätze vor Ort.",
        },
        {
          icon: "calendar",
          title: "Feste Termine",
          description:
            "Saisonale oder wiederkehrende Pflege – abgestimmt auf Vegetation und Betreiber.",
        },
      ],
    },
    audiences: [
      {
        title: "Kommunen & öffentliche Träger",
        description:
          "Für Grün an Straßen, Gewässern, Brücken und technischen Anlagen mit klaren Pflegeintervallen.",
      },
      {
        title: "Infrastruktur- & Gewerbebetreiber",
        description:
          "Für Bahnbegleitgrün, Verkehrswege, Werksgelände und Flächen mit Sicherheitsvorgaben.",
      },
      {
        title: "Hausverwaltungen & Dienstleister",
        description:
          "Wenn Sonderflächen regelmäßig gepflegt werden müssen und ein regionaler Partner gesucht wird.",
      },
    ],
    process: [
      {
        title: "Fläche & Risiko prüfen",
        description:
          "Begehung von Neigung, Zugang, Vegetation und örtlichen Vorgaben – inklusive Abstimmung mit Ihnen vor Ort.",
      },
      {
        title: "Technik wählen",
        description:
          "Mähraupe, Hochgrasmäher oder Aufsitzmäher – wir legen die sichere und effiziente Kombination fest.",
      },
      {
        title: "Pflege ausführen",
        description:
          "Termingerechter Einsatz mit Blick auf Umgebung, Verkehr und Nachbarschaft zur Anlage.",
      },
      {
        title: "Fortführung planen",
        description:
          "Bei Bedarf Wartungsvertrag oder feste Schnittrunden über die Saison.",
      },
    ],
    seoBlock: {
      eyebrow: "Böschungsmähen · Sachsen-Anhalt",
      heading: `Böschungs- und Hangpflege in ${serviceRegionListText()}.`,
      headingAccent: "Böschungs- und Hangpflege",
      text: serviceRegionalSeoText(
        "Böschungsmähen, Hangpflege und Grünpflege schwer zugänglicher Infrastrukturflächen",
        "Typische Objekte: Schiene und Bahn, Autobahn und Bundesstraße, Brücken und Rampen, Rückhaltebecken und Überlaufbecken. Mit ferngesteuerter Mähraupe, Hochgrasmäher und Aufsitzmäher – dort, wo Freischneider an Standfestigkeit stoßen.",
      ),
      bullets: [
        "Böschungs- und Hangpflege bis 45° mit ferngesteuerter Mähraupe",
        "Einsätze an Bahn, Autobahn, Bundesstraße, Brücken, Rückhalte- & Überlaufbecken",
        serviceRegionalBullet("Wartungsverträge nach Bedarf"),
      ],
    },
    cta: {
      badge: "Unverbindlich · 24h Antwort",
      headingLead: "Jetzt Böschungs- & Hangpflege",
      headingAccent: "anfragen",
      subline: "Erstbegehung und Angebot – Antwort innerhalb von 24 Stunden.",
      buttonLabel: "Angebot anfordern",
    },
    ambientScene: "greensCare",
  },
  hausmeisterservice: {
    heroTitle: {
      prefix: "Zuverlässiger",
      accent: "Hausmeisterservice",
      suffix: "für Ihre Immobilie.",
    },
    heroDescription:
      "Ihr persönlicher Ansprechpartner für alle Aufgaben rund um Ihre Immobilie. Von der regelmäßigen Objektkontrolle bis zur schnellen Notfallhilfe – wir sind immer für Sie da.",
    story: {
      eyebrow: "Rundumbetreuung",
      heading: "Eine Immobilie funktioniert besser, wenn sich jemand verantwortlich fühlt.",
      headingAccent: "verantwortlich fühlt",
      lead:
        "Kleine Schäden, volle Müllplätze oder ungepflegte Gemeinschaftsflächen fallen schnell auf. Unser Hausmeisterservice hält Ihr Objekt im Alltag in Ordnung und sorgt dafür, dass Aufgaben nicht liegen bleiben.",
      paragraphs: [
        "Green Guard GmbH übernimmt die laufende Objektbetreuung und Kontrolle für Immobilien in Gerbstedt und Sachsen-Anhalt. Wir verbinden praktische Arbeiten mit klarer Kommunikation, damit Eigentümer und Verwaltungen wissen, was erledigt wurde und wo Handlungsbedarf besteht.",
        "Für Hausverwaltungen ist besonders wichtig, dass ein Ansprechpartner mitdenkt: Kleinreparaturen, Handwerkerkoordination, Reinigung und Instandhaltung greifen bei uns ineinander.",
      ],
      cards: [
        {
          title: "Alltag im Griff",
          description: "Gemeinschaftsflächen, Müllplätze und kleine Mängel werden regelmäßig geprüft und gepflegt.",
        },
        {
          title: "Kurze Wege",
          description: "Ein fester Ansprechpartner koordiniert Aufgaben, Rückfragen und dringende Einsätze.",
        },
        {
          title: "Klare Leistung",
          description: "Sie wissen, welche Arbeiten vereinbart sind und wann zusätzliche Handwerker nötig werden.",
        },
      ],
    },
    scope: {
      eyebrow: "Leistungsumfang",
      heading: "Objektbetreuung, die im Alltag entlastet.",
      headingAccent: "Alltag entlastet",
      intro:
        "Als Hausmeisterservice übernehmen wir praktische Aufgaben rund um Ihre Immobilie, von der Kontrolle bis zur Koordination externer Gewerke.",
      columns: [
        [
          "Objektbetreuung & -kontrolle",
          "Kleinreparaturen & Instandhaltung",
          "Reinigung",
          "Rundumbetreuung der Immobilie",
        ],
        [
          "Handwerkerkoordination",
          "Müllplatzpflege & Entsorgung",
          "Gemeinschaftsflächen pflegen",
          "Notfalldienst & Bereitschaft",
          "Technische Kleinaufträge",
        ],
      ],
      highlights: [
        {
          icon: "contact",
          title: "Fester Ansprechpartner",
          description: "Ein Team kennt Ihr Objekt – kurze Wege, klare Zuständigkeiten.",
        },
        {
          icon: "price",
          title: "Faire Festpreise",
          description: "Transparente Leistungspakete ohne versteckte Kosten.",
        },
        {
          icon: "emergency",
          title: "Schnelle Hilfe",
          description: "Notfälle und dringende Aufgaben werden priorisiert bearbeitet.",
        },
      ],
    },
    audiences: [
      {
        title: "Hausverwaltungen",
        description: "Für wiederkehrende Objektkontrollen, klare Rückmeldungen und verlässliche Ausführung vor Ort.",
      },
      {
        title: "Eigentümergemeinschaften",
        description: "Für gepflegte Gemeinschaftsflächen und schnelle Bearbeitung kleiner technischer Aufgaben.",
      },
      {
        title: "Gewerbeimmobilien",
        description: "Für Objekte, bei denen Sauberkeit, Funktion und Erreichbarkeit im Alltag zählen.",
      },
    ],
    process: [
      {
        title: "Objekt kennenlernen",
        description: "Wir erfassen Zugänge, Flächen, technische Punkte und die typischen Aufgaben im laufenden Betrieb.",
      },
      {
        title: "Leistungspaket festlegen",
        description: "Gemeinsam definieren wir Kontrollrhythmus, Reinigungsaufgaben, Bereitschaft und Meldewege.",
      },
      {
        title: "Aufgaben erledigen",
        description: "Kleinreparaturen, Pflegearbeiten und Kontrollen werden dokumentiert und zuverlässig umgesetzt.",
      },
      {
        title: "Handwerker koordinieren",
        description: "Wenn externe Gewerke nötig sind, unterstützen wir bei Abstimmung, Zugang und Rückmeldung.",
      },
    ],
    seoBlock: {
      eyebrow: "Hausmeisterservice · Sachsen-Anhalt",
      heading: `Hausmeisterservice in ${serviceRegionListText()}.`,
      headingAccent: "Hausmeisterservice",
      text: serviceRegionalSeoText(
        "Hausmeisterservice und Objektbetreuung",
        "Von Kleinreparaturen und Objektkontrolle über Reinigung und Müllplatzpflege bis zur Handwerkerkoordination – ein fester Ansprechpartner für Wohn- und Gewerbeimmobilien.",
      ),
      bullets: [
        "Objektbetreuung und Kontrolle für Wohn- und Gewerbeimmobilien",
        "Kleinreparaturen, Instandhaltung und technische Kleinaufträge",
        "Rundumbetreuung mit Handwerkerkoordination und Bereitschaft",
        serviceRegionalBullet(),
      ],
    },
    cta: {
      badge: "Unverbindlich · 24h Antwort",
      headingLead: "Jetzt Hausmeisterservice",
      headingAccent: "anfragen",
      subline: "Unverbindliches Angebot – Antwort innerhalb von 24 Stunden.",
      buttonLabel: "Angebot anfordern",
    },
    ambientScene: "caretaker",
  },
  winterdienst: {
    heroTitle: {
      prefix: "Sicherer",
      accent: "Winterdienst",
      suffix: "rund um die Uhr.",
    },
    heroDescription:
      "Wir sorgen dafür, dass Wege, Parkplätze und Zufahrten sicher bleiben – in Gerbstedt, Mansfeld-Südharz und besonders auch in Halle (Saale). Rund um die Uhr, 7 Tage die Woche.",
    heroPrimaryLabel: "Saisonvertrag anfragen",
    story: {
      eyebrow: "Sicher durch den Winter",
      heading: "Wenn Schnee fällt, muss der Ablauf bereits stehen.",
      headingAccent: "Ablauf",
      lead:
        "Winterdienst ist mehr als Schneeschieben. Für Eigentümer und Verwaltungen geht es um Sicherheit, Dokumentation und die Erfüllung der Verkehrssicherungspflicht.",
      paragraphs: [
        "Green Guard GmbH plant Winterdienst-Einsätze für Gehwege, Zufahrten und Parkplätze so, dass gefährliche Glätte frühzeitig reduziert wird. In Halle (Saale) liegt ein besonderer Schwerpunkt auf planbaren Routen für Verwaltungen, Gewerbeflächen, Wohnanlagen und Parkbereiche.",
        "Gerade bei Hausverwaltungen zählt Verlässlichkeit in den frühen Morgenstunden: Ein Saisonvertrag schafft Planungssicherheit, Einzeleinsätze helfen bei kurzfristigem Bedarf.",
      ],
      cards: [
        {
          title: "24/7 bereit",
          description: "Bei winterlicher Lage sind wir erreichbar und priorisieren sichere Wege und Zufahrten.",
        },
        {
          title: "Dokumentiert",
          description: "Einsätze werden nachvollziehbar festgehalten, damit Pflichten sauber belegbar bleiben.",
        },
        {
          title: "Planbar",
          description: "Saisonverträge sichern Kapazitäten, Routen und klare Zuständigkeiten vor dem ersten Frost.",
        },
      ],
    },
    scope: {
      eyebrow: "Leistungsumfang",
      heading: "Räum- und Streudienst für sichere Wege.",
      headingAccent: "sichere Wege",
      intro:
        "Als Grundstückseigentümer sind Sie verpflichtet, Gehwege und Zufahrten zu räumen. Wir übernehmen diese Verkehrssicherungspflicht für Sie – vollständig und rechtssicher.",
      columns: [
        [
          "Schneeräumung Gehwege & Zufahrten",
          "Schneeräumung Parkplätze",
          "Abstumpfender Streudienst",
          "Verkehrssicherungspflicht erfüllen",
        ],
        [
          "24/7 Bereitschaftsdienst",
          "Frostschutzbehandlung",
          "Routenplanung & Dokumentation",
          "Saisonverträge & Einzeleinsätze",
        ],
      ],
      highlights: [
        {
          icon: "contract",
          title: "Saisonvertrag",
          description:
            "Schließen Sie einen Jahresvertrag ab und haben Sie den ganzen Winter Ruhe. Wir planen, Sie entspannen.",
        },
        {
          icon: "snow",
          title: "Einzeleinsätze",
          description: "Spontaner Schneesturm? Wir kommen auch kurzfristig – rufen Sie uns einfach an.",
        },
        {
          icon: "document",
          title: "Dokumentation",
          description:
            "Alle Einsätze werden dokumentiert – wichtig für Ihre rechtliche Absicherung.",
        },
      ],
    },
    audiences: [
      {
        title: "Hausverwaltungen",
        description: "Für Wohnanlagen mit Gehwegen, Parkflächen und klarer Verkehrssicherungspflicht.",
      },
      {
        title: "Gewerbekunden",
        description: "Für Parkplätze, Zufahrten und Betriebsflächen, die auch früh morgens nutzbar sein müssen.",
      },
      {
        title: "Eigentümer",
        description: "Für private und gemischt genutzte Objekte mit Bedarf an verlässlicher Schneeräumung.",
      },
    ],
    process: [
      {
        title: "Route planen",
        description: "Wir prüfen Flächen, Prioritäten, Zugänge und mögliche Gefahrenstellen vor Saisonbeginn.",
      },
      {
        title: "Vertrag oder Einsatz wählen",
        description: "Sie entscheiden zwischen Saisonvertrag und Einzeleinsatz, abhängig von Objekt und Bedarf.",
      },
      {
        title: "Räumen und streuen",
        description: "Gehwege, Zufahrten und Parkplätze werden nach Lage geräumt und abstumpfend behandelt.",
      },
      {
        title: "Einsatz dokumentieren",
        description: "Die Durchführung wird festgehalten, damit Ihre Verkehrssicherungspflicht nachvollziehbar bleibt.",
      },
    ],
    seoBlock: {
      eyebrow: "Winterdienst · Halle & Region",
      heading: `Winterdienst in ${serviceRegionListText()}.`,
      headingAccent: "Winterdienst",
      text: serviceRegionalSeoText(
        "Winterdienst mit Schneeräumung und Streudienst",
        "Für Gehwege, Zufahrten und Parkplätze: Routenplanung, 24/7-Bereitschaft und Einsatzdokumentation zur Erfüllung der Verkehrssicherungspflicht – besonders für Verwaltungen und Gewerbeflächen.",
      ),
      bullets: [
        "Schneeräumung für Gehwege, Zufahrten und Parkplätze",
        "Abstumpfender Streudienst, Räumdienst und Frostschutzbehandlung",
        "24/7 Bereitschaft, Routenplanung und Einsatzdokumentation",
        serviceRegionalBullet("Saisonverträge und Einzeleinsätze"),
      ],
    },
    cta: {
      badge: "Saisonvertrag · 24/7",
      headingLead: "Jetzt Winterdienst-Vertrag",
      headingAccent: "anfragen",
      subline: "Jetzt Saisonvertrag sichern – begrenzte Kapazitäten.",
      buttonLabel: "Saisonvertrag anfragen",
    },
    ambientScene: "winter",
  },
  reinigung: {
    heroTitle: {
      prefix: "Professionelle",
      accent: "Gebäudereinigung",
      suffix: "innen & außen.",
    },
    heroDescription:
      "Sauberkeit, die man sofort sieht – und die bleibt. Wir reinigen Treppenhäuser, Büros und Außenanlagen gründlich, umweltfreundlich und zu fairen Festpreisen.",
    story: {
      eyebrow: "Saubere Objekte",
      heading: "Reinigung schafft Vertrauen, bevor ein Gespräch beginnt.",
      headingAccent: "Vertrauen",
      lead:
        "Ob Treppenhaus, Büro, Gewerbefläche oder Außenbereich: Saubere Flächen zeigen, dass ein Objekt gepflegt wird und Verantwortung übernommen wird.",
      paragraphs: [
        "Green Guard GmbH übernimmt regelmäßige Unterhaltsreinigung ebenso wie Grundreinigung, Sonderreinigung und Baureinigung. Wir stimmen Umfang und Intervall auf das Objekt ab, statt mit Standardpaketen an der Realität vorbeizuarbeiten.",
        "Für Verwaltungen und Gewerbe ist entscheidend, dass Reinigung planbar bleibt: feste Termine, klare Ansprechpartner und ein Ergebnis, das Bewohner, Kunden und Mitarbeitende täglich wahrnehmen.",
      ],
      cards: [
        {
          title: "Innen und außen",
          description: "Treppenhäuser, Büros, Böden, Außenanlagen und Fassaden werden passend zum Objekt geplant.",
        },
        {
          title: "Nach Bedarf",
          description: "Unterhaltsreinigung, Sonderreinigung und Baureinigung lassen sich flexibel kombinieren.",
        },
        {
          title: "Gewerbetauglich",
          description: "Abläufe werden so abgestimmt, dass der Betrieb möglichst wenig gestört wird.",
        },
      ],
    },
    scope: {
      eyebrow: "Leistungsumfang",
      heading: "Saubere Innen- und Außenbereiche für Ihr Objekt.",
      headingAccent: "Innen- und Außenbereiche",
      intro:
        "Von der wöchentlichen Unterhaltsreinigung bis zur jährlichen Grundreinigung – wir passen unser Angebot an Ihre Bedürfnisse an.",
      columns: [
        [
          "Unterhaltsreinigung",
          "Treppenhausreinigung",
          "Büro- & Gewerbereinigung",
          "Fassadenreinigung",
        ],
        [
          "Grundreinigung & Sonderreinigung",
          "Teppich- & Bodenreinigung",
          "Außenanlagenreinigung",
          "Baureinigung",
          "Dachrinnereinigung",
        ],
      ],
      highlights: [
        {
          icon: "interval",
          title: "Flexible Intervalle",
          description: "Wöchentlich, monatlich oder nach Bedarf – abgestimmt auf Ihr Objekt.",
        },
        {
          icon: "clean",
          title: "Gründlich & schonend",
          description: "Umweltfreundliche Reinigungsmittel und geschultes Personal.",
        },
        {
          icon: "person",
          title: "Ein Ansprechpartner",
          description: "Innen- und Außenbereiche aus einer Hand in Gerbstedt und Region.",
        },
      ],
    },
    audiences: [
      {
        title: "Hausverwaltungen",
        description: "Für Treppenhäuser, Gemeinschaftsbereiche und regelmäßig wiederkehrende Reinigungsintervalle.",
      },
      {
        title: "Büros und Gewerbe",
        description: "Für saubere Arbeitsbereiche, Gewerbeflächen und ein gepflegtes Erscheinungsbild gegenüber Kunden.",
      },
      {
        title: "Objekte nach Bau oder Umbau",
        description: "Für Baureinigung, Sonderreinigung und gründliche Übergaben nach intensiver Nutzung.",
      },
    ],
    process: [
      {
        title: "Bedarf erfassen",
        description: "Wir schauen uns Flächen, Nutzung, Verschmutzung und gewünschte Intervalle genau an.",
      },
      {
        title: "Reinigungsplan erstellen",
        description: "Sie erhalten einen abgestimmten Plan für Unterhalt, Grundreinigung oder Sonderleistungen.",
      },
      {
        title: "Sauber ausführen",
        description: "Unser Team arbeitet gründlich, objektschonend und mit Blick auf laufende Nutzung.",
      },
      {
        title: "Qualität nachhalten",
        description: "Rückmeldungen fließen in den Ablauf ein, damit das Ergebnis dauerhaft passt.",
      },
    ],
    seoBlock: {
      eyebrow: "Gebäudereinigung · Sachsen-Anhalt",
      heading: `Gebäudereinigung in ${serviceRegionListText()}.`,
      headingAccent: "Gebäudereinigung",
      text: serviceRegionalSeoText(
        "Gebäudereinigung und Treppenhausreinigung",
        "Von Unterhaltsreinigung über Grund- und Sonderreinigung bis Baureinigung – saubere Flächen und planbare Intervalle für Wohnanlagen, Büros und Gewerbe.",
      ),
      bullets: [
        "Unterhaltsreinigung, Treppenhausreinigung und Büroreinigung",
        "Grundreinigung, Sonderreinigung, Teppich- und Bodenreinigung",
        "Außenanlagen-, Fassaden-, Dachrinnen- und Baureinigung",
        serviceRegionalBullet(),
      ],
    },
    cta: {
      badge: "Unverbindlich · 24h Antwort",
      headingLead: "Jetzt Gebäudereinigung",
      headingAccent: "anfragen",
      subline: "Unverbindliches Angebot – Antwort innerhalb von 24 Stunden.",
      buttonLabel: "Angebot anfordern",
    },
    ambientScene: "cleaning",
  },
  strauchpflege: {
    heroTitle: {
      prefix: "Fachgerechte",
      accent: "Strauch- & Buschpflege",
      suffix: "das ganze Jahr.",
    },
    heroDescription:
      "Gepflegte Sträucher und Büsche werten jedes Grundstück auf. Wir schneiden, formen und entsorgen – für ein gepflegtes Erscheinungsbild Ihrer Außenanlagen das ganze Jahr.",
    story: {
      eyebrow: "Form und Wachstum",
      heading: "Guter Schnitt hält Außenflächen gepflegt und lebendig.",
      headingAccent: "gepflegt und lebendig",
      lead:
        "Sträucher, Büsche, Rosen und kleine Gehölze prägen Wege, Eingänge und Grundstücksgrenzen. Ohne regelmäßigen Rückschnitt wirken Flächen schnell ungeordnet oder nehmen Nutzflächen ein.",
      paragraphs: [
        "Green Guard GmbH verbindet Formschnitt, Rückschnitt und Auslichten mit einem Blick für die gesamte Außenanlage. Wir achten darauf, dass Pflanzen gesund bleiben, Sichtachsen frei werden und das Grundstück wieder Struktur bekommt.",
        "Nach der Arbeit bleibt die Fläche nicht voller Schnittgut zurück: Grünschnitt wird aufgenommen und fachgerecht entsorgt. Auf Wunsch beraten wir auch zu Neuanpflanzung und Bepflanzungskonzepten.",
      ],
      cards: [
        {
          title: "Saubere Form",
          description: "Formschnitt und Gestaltungsschnitt bringen Sträucher, Büsche und Hecken wieder in ein gepflegtes Bild.",
        },
        {
          title: "Gesundes Wachstum",
          description: "Rückschnitt, Auslichten und Obstbaumschnitt unterstützen Vitalität und langfristige Pflege.",
        },
        {
          title: "Ordentlich abgeschlossen",
          description: "Wildwuchs und Grünschnitt werden entfernt, damit die Fläche direkt sauber wirkt.",
        },
      ],
    },
    scope: {
      eyebrow: "Leistungsumfang",
      heading: "Form- und Rückschnitt für ordentliche Grundstücke.",
      headingAccent: "ordentliche Grundstücke",
      intro:
        "Mit dem richtigen Schnitt zur richtigen Zeit erhalten Sträucher ihre Form und ihre Vitalität. Wir kennen die optimalen Schnittzeitpunkte für alle gängigen Gehölze in Sachsen-Anhalt.",
      columns: [
        [
          "Formschnitt & Gestaltungsschnitt",
          "Rückschnitt & Auslichten",
          "Entfernung von Wildwuchs",
          "Obstbaumschnitt",
        ],
        [
          "Rosenpflege & -schnitt",
          "Grünschnittentsorgung",
          "Neuanpflanzung & Beratung",
          "Bepflanzungskonzepte",
        ],
      ],
      highlights: [
        {
          icon: "season",
          title: "Richtiger Zeitpunkt",
          description: "Schnittarbeiten nach Art und Saison – für gesunde, vitale Gehölze.",
        },
        {
          icon: "design",
          title: "Form & Funktion",
          description: "Gestaltungsschnitt, der Sichtachsen freihält und das Grundstück aufwertet.",
        },
        {
          icon: "recycle",
          title: "Entsorgung inklusive",
          description: "Grünschnitt wird fachgerecht abtransportiert und entsorgt.",
        },
      ],
    },
    audiences: [
      {
        title: "Private Grundstücke",
        description: "Für Gärten, Einfahrten und Grundstücksgrenzen, die gepflegt und nutzbar bleiben sollen.",
      },
      {
        title: "Wohnanlagen",
        description: "Für Strauchflächen, Innenhöfe und Gemeinschaftsgrün, das regelmäßig in Form gebracht werden muss.",
      },
      {
        title: "Gewerbeflächen",
        description: "Für repräsentative Außenbereiche mit klaren Sichtachsen und sauberem Eingangsbereich.",
      },
    ],
    process: [
      {
        title: "Bestand prüfen",
        description: "Wir schauen Pflanzenart, Zustand, Wuchsrichtung und gewünschtes Erscheinungsbild an.",
      },
      {
        title: "Schnitt festlegen",
        description: "Formschnitt, Rückschnitt oder Auslichten werden passend zur Pflanze und Saison abgestimmt.",
      },
      {
        title: "Fachgerecht schneiden",
        description: "Unser Team arbeitet sauber, kontrolliert und mit Blick auf Form, Funktion und Pflanzengesundheit.",
      },
      {
        title: "Grünschnitt entsorgen",
        description: "Schnittgut wird gesammelt, abtransportiert und fachgerecht entsorgt.",
      },
    ],
    seoBlock: {
      eyebrow: "Strauchpflege · Sachsen-Anhalt",
      heading: `Strauch- und Buschpflege in ${serviceRegionListText()}.`,
      headingAccent: "Strauch- und Buschpflege",
      text: serviceRegionalSeoText(
        "Strauch- und Buschpflege",
        "Formschnitt, Rückschnitt, Obstbaumschnitt und Rosenpflege – inklusive fachgerechter Grünschnittentsorgung für private, gewerbliche und gemeinschaftliche Außenanlagen.",
      ),
      bullets: [
        "Formschnitt, Gestaltungsschnitt, Rückschnitt und Auslichten",
        "Wildwuchs entfernen, Obstbaumschnitt und Rosenpflege",
        "Grünschnittentsorgung, Neuanpflanzung und Beratung",
        serviceRegionalBullet(),
      ],
    },
    cta: {
      badge: "Unverbindlich · 24h Antwort",
      headingLead: "Jetzt Strauchpflege",
      headingAccent: "anfragen",
      subline: "Unverbindliches Angebot – Antwort innerhalb von 24 Stunden.",
      buttonLabel: "Angebot anfordern",
    },
    ambientScene: "shrubCare",
  },
};

export function getServicePageContent(slug: string): ServicePageContent | undefined {
  return pages[slug];
}
