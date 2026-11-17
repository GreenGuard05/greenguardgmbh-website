export type RentalRelatedLink = {
  before: string;
  href: string;
  label: string;
  after?: string;
};

export type RentalPageCopy = {
  eyebrow: string;
  h1: string;
  hero: string;
  imageAlt: string;
  faqTitle: string;
  breadcrumb: string;
  introTitle: string;
  introAccent: string;
  intro: string[];
  useTitle: string;
  useLead: string;
  regionTitle: string;
  regionLead: string;
  related?: RentalRelatedLink[];
};

export const rentalPageCopy: Record<string, RentalPageCopy> = {
  "benzin-holzhaecksler": {
    eyebrow: "Asthäcksler mieten · Gerbstedt",
    h1: "Holzhäcksler mieten – mobiler Benzin-Häcksler mit Antrieb",
    hero: "Sie wollen Äste, Baumschnitt oder Grünschnitt selbst häckseln? Der mobile Benzin-Holzhäcksler mit Fahrantrieb schafft Holz bis 10 cm Aststärke. Abholung in Gerbstedt OT Augsdorf, ab 90 € pro 24 Stunden.",
    imageAlt: "Holzhäcksler mieten bei Green Guard GmbH – mobiler Benzin-Häcksler mit Antrieb für Äste und Baumschnitt in Gerbstedt",
    faqTitle: "Holzhäcksler und Asthäcksler",
    breadcrumb: "Holzhäcksler",
    introTitle: "Äste und Baumschnitt",
    introAccent: "selbst häckseln.",
    intro: [
      "Ein Gartenhäcksler aus dem Baumarkt kommt bei dickeren Ästen schnell an seine Grenze. Dieser Benzin-Holzhäcksler ist für Grünpflege, Baumschnitt und Asthäckseln gedacht und bleibt durch den Fahrantrieb auch auf schmalen Wegen beweglich.",
      "Trockenes Holz, frisches Holz, Äste, Zweige und Schnittabfälle werden zu Hackschnitzeln von etwa 1 cm. Mais, Stroh, Luzerne und krautige Materialien gehören nicht in den Häcksler.",
      "Die Maschine ist gepflegt. Bei der Abholung in Gerbstedt weisen wir Sie ein. Eine Anlieferung ist nach Absprache möglich, einen festen Lieferpreis nennen wir dafür nicht.",
    ],
    useTitle: "Wofür Sie den Holzhäcksler einsetzen",
    useLead: "Typisch ist der Einsatz nach dem Baumschnitt, im Garten und überall dort, wo Äste sonst als sperriger Grünschnitt liegen bleiben.",
    regionTitle: "Holzhäcksler in Ihrer Nähe mieten",
    regionLead:
      "Sie suchen einen Holzhäcksler oder Asthäcksler zur Miete in Ihrer Nähe? Die Green Guard GmbH vermietet den Benzin-Häcksler in Gerbstedt OT Augsdorf.",
  },
  "dreibeinleiter-plattform": {
    eyebrow: "Leiter mieten · Gerbstedt",
    h1: "Dreibeinleiter mieten – verstellbare Leiter mit Plattform",
    hero: "Sie brauchen sicheren Stand auf unebenem Boden, an Treppen oder im Garten? Die voll verstellbare Dreibeinleiter mit Plattform hat einzeln verstellbare Beine und eine Arbeitshöhe von etwa 3,0 bis 3,6 m. 30 € pro 24 Stunden, Abholung in Gerbstedt OT Augsdorf.",
    imageAlt: "Dreibeinleiter mit Plattform mieten bei Green Guard GmbH in Gerbstedt – für Garten, Treppen und unebenen Boden",
    faqTitle: "Dreibeinleiter",
    breadcrumb: "Dreibeinleiter",
    introTitle: "Sicher stehen,",
    introAccent: "wo eine normale Leiter wackelt.",
    intro: [
      "Eine gerade Anlegeleiter braucht ebenen Boden. Die Dreibeinleiter lässt sich Bein für Bein anpassen und eignet sich deshalb für Garten- und Heckenschnitt, Baumarbeiten, Fassaden, Renovierung, Treppen und Stufen.",
      "Die große Plattform gibt sicheren Stand im Innen- und Außenbereich. Arbeiten ohne festen Stand, unsachgemäße Nutzung und Überlastung sind ausgeschlossen.",
      "Die Leiter ist gepflegt und braucht keinen Kraftstoff. Lieferung ist nach Absprache möglich. Bei der Abholung erklären wir den Aufbau kurz.",
    ],
    useTitle: "Wofür Sie die Dreibeinleiter einsetzen",
    useLead: "Sinnvoll überall, wo der Untergrund nicht eben ist und eine Plattform mehr Sicherheit gibt als eine schmale Sprosse.",
    regionTitle: "Dreibeinleiter in Ihrer Nähe mieten",
    regionLead:
      "Sie suchen eine Dreibeinleiter zur Miete, zum Beispiel für Garten, Bäume und unebenen Boden? Die Green Guard GmbH vermietet die verstellbare Leiter mit Plattform in Gerbstedt OT Augsdorf.",
  },
  "as-hochgrasmaeher": {
    eyebrow: "Wiesenmäher mieten · Gerbstedt",
    h1: "Hochgrasmäher mieten – AS Mäher für hohes Gras",
    hero: "Hohes Gras, eine verwilderte Wiese oder eine Brachfläche? Der AS Hochgrasmäher mit Antrieb mäht Gras bis etwa 90 cm Höhe, mit 63 cm Schnittbreite und bis zu 1.700 m² pro Stunde. 59 € pro 24 Stunden, Abholung in Gerbstedt OT Augsdorf.",
    imageAlt: "Hochgrasmäher mieten bei Green Guard GmbH – AS Mäher für hohes Gras, Wiesen und Brachflächen in Gerbstedt",
    faqTitle: "Hochgrasmäher",
    breadcrumb: "Hochgrasmäher",
    introTitle: "Hohes Gras mähen,",
    introAccent: "bevor ein normaler Rasenmäher passen muss.",
    intro: [
      "Ein üblicher Rasenmäher ist für kurzen Rasen gebaut. Dieser Hochgrasmäher ist für Wiesen, Brachflächen, verwilderte Grundstücke und schwer zugängliche Bereiche gedacht. Das wendige 3-Rad-Konzept und der Antrieb helfen auf großen und unebenen Flächen.",
      "Der 2-Takt-Motor schmiert auch in Schräg- und Hanglagen. Das arretierbare Vorderrad unterstützt das Arbeiten am Hang. Steine im Mähbereich und Flächen ohne vorherige Sichtprüfung sind ungeeignet.",
      "Bei der Abholung gibt es eine kurze Einweisung inklusive Probefahrt. Lieferung ist nach Absprache möglich. Für sehr steile Hänge ist die ferngesteuerte Mähraupe die passendere Maschine, für große kurze Rasenflächen der Frontmäher.",
    ],
    useTitle: "Wofür Sie den Hochgrasmäher einsetzen",
    useLead: "Für Flächen, die über den normalen Rasenschnitt hinausgewachsen sind und sich noch sicher im Gehen mähen lassen.",
    regionTitle: "Hochgrasmäher in Ihrer Nähe mieten",
    regionLead:
      "Sie suchen einen Hochgrasmäher oder Wiesenmäher zur Miete in Mansfeld-Südharz? Die Green Guard GmbH vermietet den AS Hochgrasmäher in Gerbstedt OT Augsdorf.",
    related: [
      {
        before: "Für große, gut befahrbare Rasenflächen: ",
        href: "/mieten/rasentraktor-frontmaeher",
        label: "Rasentraktor Frontmäher",
        after: ".",
      },
      {
        before: "Für Steilhänge bis 45°: ",
        href: "/mieten/ferrari-rc-70hy-maehraupe",
        label: "ferngesteuerte Mähraupe",
        after: ".",
      },
    ],
  },
  "rasentraktor-frontmaeher": {
    eyebrow: "Aufsitzmäher mieten · Gerbstedt",
    h1: "Rasentraktor mieten – Frontmäher für große Flächen",
    hero: "Sie wollen eine große Rasenfläche schneller mähen als zu Fuß? Der Frontmäher hat 100 cm Schnittbreite, Hydrostat-Antrieb und Knicklenkung. Flächenleistung etwa 3.000 bis 5.000 m² pro Stunde. 140 € pro 24 Stunden, Abholung in Gerbstedt OT Augsdorf.",
    imageAlt: "Rasentraktor und Frontmäher mieten bei Green Guard GmbH in Gerbstedt – für große Grundstücke und Grünflächen",
    faqTitle: "Rasentraktor und Frontmäher",
    breadcrumb: "Rasentraktor",
    introTitle: "Große Flächen mähen,",
    introAccent: "ohne hinter einem Handmäher herzulaufen.",
    intro: [
      "Der Frontmäher ist ein Aufsitzmäher für große Privatgrundstücke, Gewerbeflächen, Wohnanlagen sowie Park- und Grünanlagen. Das Mähwerk sitzt vorn, die 50:50-Knicklenkung macht das Manövrieren präzise. Die Schnitthöhe liegt zwischen 25 und 90 mm.",
      "Enge Handarbeitsbereiche und sehr steile Hanglagen sind nicht seine Stärke. Dort sind Hochgrasmäher oder die ferngesteuerte Mähraupe die bessere Wahl. Vor dem Mähen sollte die Fläche auf Hindernisse geprüft werden.",
      "Die Maschine ist gepflegt. Eine Einweisung bei der Abholung ist möglich, Lieferung nach Absprache. Kraftstoff ist Super E5.",
    ],
    useTitle: "Wofür Sie den Rasentraktor einsetzen",
    useLead: "Für Flächen, die regelmäßig gemäht werden und mit einem Aufsitzmäher gut befahrbar sind.",
    regionTitle: "Rasentraktor in Ihrer Nähe mieten",
    regionLead:
      "Sie suchen einen Rasentraktor, Aufsitzmäher oder Frontmäher zur Miete? Die Green Guard GmbH vermietet die Maschine in Gerbstedt OT Augsdorf.",
    related: [
      {
        before: "Für hohes Gras und Wiesen: ",
        href: "/mieten/as-hochgrasmaeher",
        label: "AS Hochgrasmäher",
        after: ".",
      },
      {
        before: "Für Böschungen und Steilhänge: ",
        href: "/mieten/ferrari-rc-70hy-maehraupe",
        label: "Ferrari Mähraupe",
        after: ".",
      },
    ],
  },
  "akku-scheuersaugmaschine": {
    eyebrow: "Bodenreiniger mieten · Gerbstedt",
    h1: "Scheuersaugmaschine mieten – Akku-Reiniger für große Böden",
    hero: "Hallen, Lager oder Verkaufsflächen von Hand wischen ist langsam. Die Akku-Scheuersaugmaschine reinigt bis etwa 2.200 m² pro Stunde, kabellos, mit 490-mm-Bürste. 95 € pro 24 Stunden, Abholung in Gerbstedt OT Augsdorf.",
    imageAlt: "Scheuersaugmaschine mit Akku mieten bei Green Guard GmbH – für Hallen, Gewerbe und robuste Innenböden in Gerbstedt",
    faqTitle: "Scheuersaugmaschine",
    breadcrumb: "Scheuersaugmaschine",
    introTitle: "Große Böden reinigen,",
    introAccent: "ohne Kabel und ohne Eimer.",
    intro: [
      "Die Scheuersaugmaschine ist für robuste Innenböden in Industrie, Gewerbe, Lager, Werkstatt, Verkauf und öffentlichen Einrichtungen gedacht. Wasserzufuhr, Bürste und Saugmotor lassen sich einzeln zuschalten. Die Bürste hat 490 mm Durchmesser und etwa 25 kg Anpressdruck. Der Tank fasst 45 Liter Frischwasser und 50 Liter Abwasser.",
      "Vollgeladen ist der Akku in etwa 6 bis 8 Stunden. Das ist die Ladezeit, keine versprochene Laufzeit. Teppich, empfindliche Böden ohne vorherige Prüfung und Außenflächen mit grobem Schmutz sind ungeeignet.",
      "Für Sofa, Autositze und Teppiche ist das der falsche Gerätetyp. Dafür gibt es den Polster- und Teppichreiniger. Die Maschine ist gepflegt, Anlieferung nach Absprache möglich.",
    ],
    useTitle: "Wofür Sie die Scheuersaugmaschine einsetzen",
    useLead: "Für feste, begehbare Innenflächen, die nass gescheuert und wieder abgesaugt werden dürfen.",
    regionTitle: "Scheuersaugmaschine in Ihrer Nähe mieten",
    regionLead:
      "Sie suchen eine Scheuersaugmaschine oder Bodenreinigungsmaschine zur Miete? Die Green Guard GmbH vermietet das Akku-Gerät in Gerbstedt OT Augsdorf.",
    related: [
      {
        before: "Für Sofa, Teppich und Autositze: ",
        href: "/mieten/polsterreiniger-teppichreiniger-waschsauger",
        label: "Polsterreiniger und Waschsauger",
        after: ".",
      },
    ],
  },
  "ferrari-rc-70hy-maehraupe": {
    eyebrow: "Hangmäher mieten · Gerbstedt",
    h1: "Mähraupe mieten – Ferrari RC-70HY Pro, ferngesteuert",
    hero: "Steilhang, Hochgras oder eine Fläche, die ein normaler Mäher nicht erreicht? Die ferngesteuerte Ferrari RC-70HY Pro mäht mit 70 cm Schnittbreite bis 45° Neigung, Fernbedienung bis 200 m. 150 € pro 24 Stunden, Abholung in Gerbstedt OT Augsdorf.",
    imageAlt: "Ferngesteuerte Mähraupe Ferrari RC-70HY Pro mieten bei Green Guard GmbH – Hangmäher für Steilhänge in Gerbstedt",
    faqTitle: "Mähraupe",
    breadcrumb: "Mähraupe",
    introTitle: "Steilhänge mähen,",
    introAccent: "ohne selbst auf der Böschung zu stehen.",
    intro: [
      "Die Mähraupe ist ein ferngesteuerter Hangmäher für Hochgras, verwilderte Flächen, Wiesen, Brachflächen und schwer zugängliche Bereiche. Raupenketten und Hybrid-Antrieb halten die Maschine auch dort, wo ein Rasentraktor oder ein handgeführter Mäher an Grenzen kommt.",
      "Die Schnitthöhe lässt sich per Fernbedienung von 30 bis 120 mm einstellen. Die Flächenleistung liegt bei bis zu 1.931 m² pro Stunde. Steine und Hindernisse im Mähbereich sowie Flächen ohne Sichtprüfung sind ungeeignet.",
      "Tagesmiete 150 € für maximal 8 Betriebsstunden, dazu 39,90 € Verschleißpauschale inklusive Messer. Die Kaution beträgt 400 €. Kraftstoff ist Super E5. Einweisung bei Abholung ist möglich, Lieferung nach Absprache.",
    ],
    useTitle: "Wofür Sie die Mähraupe einsetzen",
    useLead: "Für Böschungen, Hochgras und Flächen, die aus der Distanz sicherer zu mähen sind als im Sitzen oder zu Fuß.",
    regionTitle: "Mähraupe in Ihrer Nähe mieten",
    regionLead:
      "Sie suchen eine Mähraupe, einen Raupenmäher oder ferngesteuerten Hangmäher zur Miete? Die Green Guard GmbH vermietet die Ferrari RC-70HY Pro in Gerbstedt OT Augsdorf.",
    related: [
      {
        before: "Für gewerbliche Einsätze unter PV-Modulen: ",
        href: "/dienstleistungen/solarparkpflege",
        label: "Solarparkpflege von Green Guard GmbH",
        after: ".",
      },
      {
        before: "Für Wiesen, die sich noch zu Fuß mähen lassen: ",
        href: "/mieten/as-hochgrasmaeher",
        label: "AS Hochgrasmäher",
        after: ".",
      },
    ],
  },
};
