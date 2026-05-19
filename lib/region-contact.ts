/** Vorausgefüllter Text im Kontaktformular für Anfragen außerhalb der gelisteten Orte */
export const regionOtherLocationMessagePrefill =
  "Guten Tag,\n\nich interessiere mich für Ihre Leistungen in folgendem Ort:\n\n";

export function regionOtherLocationContactHref() {
  const params = new URLSearchParams({
    leistung: "Sonstiges",
    nachricht: regionOtherLocationMessagePrefill,
  });
  return `/kontakt?${params.toString()}#angebot-formular`;
}
