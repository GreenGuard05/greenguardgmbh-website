export type ServiceScopeHighlightIcon =
  | "calendar"
  | "tools"
  | "location"
  | "contact"
  | "price"
  | "emergency"
  | "contract"
  | "snow"
  | "document"
  | "interval"
  | "clean"
  | "person"
  | "season"
  | "design"
  | "recycle";

export type ServiceScopeHighlight = {
  title: string;
  description: string;
  icon: ServiceScopeHighlightIcon;
};

export type ServiceScope = {
  eyebrow: string;
  heading: string;
  headingAccent?: string;
  intro: string;
  /** Zwei Spalten Leistungspunkte */
  columns: [string[], string[]];
  highlights: ServiceScopeHighlight[];
};

export type ServiceStoryCard = {
  title: string;
  description: string;
};

export type ServiceStory = {
  eyebrow: string;
  heading: string;
  headingAccent?: string;
  lead: string;
  paragraphs: string[];
  cards: ServiceStoryCard[];
};

export type ServiceAudienceItem = {
  title: string;
  description: string;
};

export type ServiceProcessStep = {
  title: string;
  description: string;
};

export type ServiceSeoBlock = {
  eyebrow: string;
  heading: string;
  headingAccent?: string;
  text: string;
  bullets: string[];
};
