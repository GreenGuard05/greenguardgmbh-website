import { HomeSectionAmbient, type HomeAmbientScene } from "@/components/home-section-ambient";
import { ServiceVisualIcon, type ServiceVisualIconName } from "@/components/service-visual-icon";
import type { ServiceScope, ServiceScopeHighlightIcon } from "@/lib/service-scope";

export type IconName =
  | ServiceVisualIconName
  | ServiceScopeHighlightIcon
  | "mower"
  | "hedge"
  | "flower"
  | "seed"
  | "fertilizer"
  | "tree"
  | "leaves"
  | "water"
  | "building"
  | "repair"
  | "coordination"
  | "trash"
  | "electric"
  | "community"
  | "technical"
  | "path"
  | "parking"
  | "salt"
  | "shield"
  | "floor"
  | "stairs"
  | "office"
  | "window"
  | "brush"
  | "carpet"
  | "construction"
  | "prune"
  | "wild"
  | "fruit"
  | "rose"
  | "planting";

export function GraphicIcon({ icon, className }: { icon: IconName; className?: string }) {
  const cn = className ?? "h-[18px] w-[18px]";

  const common = {
    className: cn,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };

  switch (icon) {
    case "mower":
      return (
        <svg {...common}>
          <path d="M4 16h10l3.5-7H20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 16 5.8 9.5H4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="7" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="16" cy="18" r="1.6" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      );
    case "hedge":
      return (
        <svg {...common}>
          <path d="M4 18c4.5-1.2 8-4.9 9.5-12 1.2 5.7 3.6 9.5 6.5 12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 15h10M9 11h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "flower":
      return (
        <svg {...common}>
          <circle cx="12" cy="9.5" r="1.8" stroke="currentColor" strokeWidth="1.75" />
          <path d="M12 11.5V20M8 7.5c1.8 0 3 1.2 4 2-1 1-2.2 2-4 2-1.2 0-2-1-2-2s.8-2 2-2ZM16 7.5c-1.8 0-3 1.2-4 2 1 1 2.2 2 4 2 1.2 0 2-1 2-2s-.8-2-2-2ZM8.5 17c1.7 0 2.8.9 3.5 2-.7.8-1.8 1.5-3.5 1.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "seed":
    case "planting":
      return (
        <svg {...common}>
          <path d="M12 20V10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M12 11c-3.5-.2-5.8-2.2-6.5-6 3.8.3 6 2.4 6.5 6ZM12 14c3.4-.2 5.5-2 6.2-5.4-3.5.2-5.6 2-6.2 5.4Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M6 20h12" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "fertilizer":
      return (
        <svg {...common}>
          <path d="M7 8h8l2 12H5L7 8Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M9 8V5h4v3M9 14h4M9 17h6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "tree":
    case "prune":
    case "fruit":
      return (
        <svg {...common}>
          <path d="M12 20v-6M8 20h8" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <path d="M8.5 14.5c-2.2 0-4-1.8-4-4s1.8-4 4-4c.7-1.6 2-2.5 3.5-2.5s2.8.9 3.5 2.5c2.2 0 4 1.8 4 4s-1.8 4-4 4h-7Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        </svg>
      );
    case "leaves":
    case "recycle":
      return (
        <svg {...common}>
          <path d="M5 17c7.5 0 12-4.2 14-12-7.8.4-12.8 4.4-14 12Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M5 17c3.8-3.4 7.1-5.3 11-6.5M7 20h10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "water":
      return (
        <svg {...common}>
          <path d="M12 4s5.5 6.1 5.5 10a5.5 5.5 0 0 1-11 0C6.5 10.1 12 4 12 4Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M9.5 14.5c.5 1.4 1.5 2.1 3 2.1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "calendar":
    case "interval":
    case "season":
      return (
        <svg {...common}>
          <rect x="4.5" y="5.5" width="15" height="14" rx="2.5" stroke="currentColor" strokeWidth="1.75" />
          <path d="M8 4v3M16 4v3M5 10h14M8 14h2.5M13.5 14H16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "tools":
    case "repair":
    case "technical":
      return (
        <svg {...common}>
          <path d="m14.5 5 4.5 4.5-9.8 9.8H4.7v-4.5L14.5 5Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="m13 6.5 4.5 4.5M7 17h.01" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "location":
      return (
        <svg {...common}>
          <path d="M12 3.5A6.2 6.2 0 0 0 5.8 9.7c0 4.5 6.2 10.8 6.2 10.8s6.2-6.3 6.2-10.8A6.2 6.2 0 0 0 12 3.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <circle cx="12" cy="9.7" r="2" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      );
    case "contact":
    case "person":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.75" />
          <path d="M5.5 20c.8-3.5 3.2-5.2 6.5-5.2s5.7 1.7 6.5 5.2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "price":
      return (
        <svg {...common}>
          <path d="M5 6.5h8l6 6-6.5 6.5-6-6v-8Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <circle cx="9" cy="9.5" r="1" fill="currentColor" />
        </svg>
      );
    case "emergency":
      return (
        <svg {...common}>
          <path d="M12 4v5M12 15v5M4 12h5M15 12h5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.75" />
        </svg>
      );
    case "contract":
    case "document":
      return (
        <svg {...common}>
          <path d="M7 3.8h7l3 3V20H7V3.8Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M14 4v3h3M9.5 11h5M9.5 14h5M9.5 17h3" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "snow":
      return (
        <svg {...common}>
          <path d="M12 3v18M5 7l14 10M19 7 5 17M8 4.8 12 7l4-2.2M8 19.2 12 17l4 2.2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "clean":
    case "brush":
      return (
        <svg {...common}>
          <path d="M15 4.5 19.5 9l-8.8 8.8H6.2v-4.5L15 4.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M5 20h14M13.5 6 18 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "design":
      return (
        <svg {...common}>
          <path d="M5 18c4.4-2.5 8.3-6.4 11-12l3 3c-5.6 2.7-9.5 6.6-12 11l-2-2Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M14.5 7.5 17.5 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "building":
      return (
        <svg {...common}>
          <path d="M5 20V5h9v15M14 10h5v10" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M8 8h3M8 12h3M8 16h3M16 14h1" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "coordination":
      return (
        <svg {...common}>
          <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.75" />
          <circle cx="17" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.75" />
          <path d="M9 9 15 15M16 6h3v3M19 6l-5 5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "trash":
      return (
        <svg {...common}>
          <path d="M5 7h14M9 7V5h6v2M8 10l1 10h6l1-10" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "electric":
      return (
        <svg {...common}>
          <path d="M13 3 6.5 13h5L10 21l7-11h-5l1-7Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        </svg>
      );
    case "community":
      return (
        <svg {...common}>
          <path d="M5 20V9l7-5 7 5v11" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        </svg>
      );
    case "path":
    case "parking":
      return (
        <svg {...common}>
          <path d="M7 20c1.8-4.8 2.4-10 2-16M17 20c-1.8-4.8-2.4-10-2-16M10.5 8h3M10.3 13h3.4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "salt":
      return (
        <svg {...common}>
          <path d="M8 9h8l2 11H6L8 9Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M10 9V5h4v4M9 14h.01M12 16h.01M15 14h.01" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3.5 18.5 6v5.2c0 4.1-2.4 7-6.5 9.3-4.1-2.3-6.5-5.2-6.5-9.3V6L12 3.5Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="m8.8 12 2.1 2.1 4.4-4.6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "floor":
    case "stairs":
    case "office":
    case "window":
    case "carpet":
    case "construction":
      return (
        <svg {...common}>
          <rect x="5" y="5" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
          <path d="M5 12h14M12 5v14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
    case "wild":
    case "rose":
      return (
        <svg {...common}>
          <path d="M12 20V9M8 8c1.6-3 3-4 4-4s2.4 1 4 4c-1.5 1.5-3 2.2-4 2.2S9.5 9.5 8 8Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
          <path d="M12 15c-2.5-.2-4.4-1.6-5.5-4 2.8 0 4.7 1.4 5.5 4ZM12 16c2.4-.2 4.2-1.5 5.2-3.8-2.6 0-4.4 1.3-5.2 3.8Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M12 4v16M5 12h14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
        </svg>
      );
  }
}

function iconForHighlight(icon: ServiceScopeHighlightIcon): ServiceVisualIconName {
  const map: Record<ServiceScopeHighlightIcon, ServiceVisualIconName> = {
    calendar: "calendar",
    tools: "quality",
    location: "location",
    contact: "person",
    price: "priceTag",
    emergency: "emergency",
    contract: "seasonContract",
    snow: "snowShovel",
    document: "document",
    interval: "calendar",
    clean: "sparkle",
    person: "person",
    season: "calendar",
    design: "landscapePlan",
    recycle: "greenWaste",
  };

  return map[icon];
}

function iconForScopeItem(item: string): ServiceVisualIconName {
  const value = item.toLowerCase();

  if (value.includes("rasenmäh") || value.includes("rasenmähen")) return "lawnMower";
  if (value.includes("gestaltung von grünanlagen")) return "landscapePlan";
  if (value.includes("beet")) return "flowerBed";
  if (value.includes("hecke") || value.includes("formschnitt")) return "hedgeTrimmer";
  if (value.includes("strauch") || value.includes("busch")) return "shrubCare";
  if (value.includes("totholz")) return "deadwood";
  if (value.includes("baum") || value.includes("gehölz")) return "treeCare";
  if (value.includes("laub")) return "leafBag";
  if (value.includes("grünschnitt")) return "greenWaste";
  if (value.includes("neuanlage") || value.includes("neuanpflanzung") || value.includes("bepflanzung")) return "plantingAdvice";
  if (value.includes("objektbetreuung") || value.includes("objektkontrolle")) return "inspection";
  if (value.includes("reparatur") || value.includes("instandhaltung")) return "repair";
  if (value === "reinigung") return "cleaningBucket";
  if (value.includes("rundumbetreuung")) return "propertyCare";
  if (value.includes("koordination")) return "contractor";
  if (value.includes("müll")) return "bins";
  if (value.includes("gemeinschaft")) return "communityArea";
  if (value.includes("notfall") || value.includes("bereitschaft")) return "emergency";
  if (value.includes("technische")) return "workOrder";
  if (value.includes("schneeräumung") && value.includes("parkplätze")) return "snowParking";
  if (value.includes("schneeräumung")) return "snowShovel";
  if (value.includes("streudienst")) return "spreader";
  if (value.includes("verkehrssicherung")) return "safetyDuty";
  if (value.includes("frostschutz")) return "frost";
  if (value.includes("routenplanung") || value.includes("dokumentation")) return "routeDoc";
  if (value.includes("saison")) return "seasonContract";
  if (value.includes("unterhalts")) return "mop";
  if (value.includes("grundreinigung") || value.includes("sonderreinigung")) return "deepClean";
  if (value.includes("treppenhaus")) return "stairs";
  if (value.includes("büro") || value.includes("gewerbe")) return "officeClean";
  if (value.includes("fassade")) return "facade";
  if (value.includes("teppich") || value.includes("boden")) return "floorPolisher";
  if (value.includes("außenanlagenreinigung")) return "outdoorClean";
  if (value.includes("baureinigung")) return "constructionClean";
  if (value.includes("dachrinne")) return "gutter";
  if (value.includes("rückschnitt")) return "pruningShears";
  if (value.includes("auslichten")) return "thinning";
  if (value.includes("wildwuchs")) return "wildGrowth";
  if (value.includes("obstbaum")) return "fruitTree";
  if (value.includes("rosen")) return "roseCare";

  return "sparkle";
}

function AccentHeading({ text, accent }: { text: string; accent?: string }) {
  if (!accent || !text.includes(accent)) {
    return <span className="gg-text-heading-section">{text}</span>;
  }

  const [before, after] = text.split(accent);
  return (
    <>
      <span className="gg-text-heading-section">{before}</span>
      <span className="gg-heading-accent gg-heading-motion">{accent}</span>
      <span className="gg-text-heading-section">{after}</span>
    </>
  );
}

export function ServiceScopeSection({
  scope,
  ambientScene = "greensCare",
}: {
  scope: ServiceScope;
  ambientScene?: HomeAmbientScene;
}) {
  const hasHighlights = scope.highlights.length > 0;

  return (
    <section id="leistungsumfang" className="relative overflow-hidden border-t border-emerald-950/10 py-20 sm:py-24 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-100/95 via-white to-zinc-50/90"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-20 top-[20%] h-64 w-64 rounded-full bg-[#70a340]/8 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#70a340]/25 to-transparent"
        aria-hidden
      />
      <HomeSectionAmbient scene={ambientScene} />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className={`grid gap-12 lg:items-start lg:gap-14 xl:gap-16 ${hasHighlights ? "lg:grid-cols-2" : "max-w-3xl"}`}
        >
          <div className="min-w-0">
            <p className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-900 shadow-sm ring-1 ring-emerald-200/90">
              {scope.eyebrow}
            </p>
            <h2 className="mt-5 text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-[2.5rem]">
              <AccentHeading text={scope.heading} accent={scope.headingAccent} />
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">{scope.intro}</p>
            <div className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {scope.columns.map((column, colIndex) => (
                <ul key={colIndex} className="space-y-3">
                  {column.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-700 sm:text-base">
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center text-[#70a340]"
                        aria-hidden
                      >
                        <ServiceVisualIcon name={iconForScopeItem(item)} className="h-5 w-5" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>

          {hasHighlights ? (
            <ul className="flex flex-col gap-4 sm:gap-5">
              {scope.highlights.map((item) => (
                <li
                  key={item.title}
                  className="group flex gap-4 rounded-2xl border border-zinc-200/80 bg-white p-5 shadow-md shadow-zinc-900/5 ring-1 ring-white transition duration-300 ease-out hover:-translate-y-0.5 hover:border-emerald-900/15 hover:shadow-lg motion-reduce:transform-none motion-reduce:hover:translate-y-0"
                >
                  <span
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eef6e6] text-[#70a340] transition group-hover:bg-[#e2f0d4]"
                    aria-hidden
                  >
                    <ServiceVisualIcon name={iconForHighlight(item.icon)} />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <h3 className="text-base font-bold text-zinc-900">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-zinc-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </section>
  );
}
