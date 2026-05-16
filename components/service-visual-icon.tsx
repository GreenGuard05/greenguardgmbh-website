export type ServiceVisualIconName =
  | "lawnMower"
  | "landscapePlan"
  | "flowerBed"
  | "hedgeTrimmer"
  | "shrubCare"
  | "treeCare"
  | "deadwood"
  | "leafBag"
  | "greenWaste"
  | "inspection"
  | "repair"
  | "cleaningBucket"
  | "propertyCare"
  | "contractor"
  | "bins"
  | "communityArea"
  | "emergency"
  | "workOrder"
  | "snowShovel"
  | "snowParking"
  | "spreader"
  | "safetyDuty"
  | "standby"
  | "frost"
  | "routeDoc"
  | "seasonContract"
  | "mop"
  | "stairs"
  | "officeClean"
  | "facade"
  | "deepClean"
  | "floorPolisher"
  | "outdoorClean"
  | "constructionClean"
  | "gutter"
  | "pruningShears"
  | "thinning"
  | "wildGrowth"
  | "fruitTree"
  | "roseCare"
  | "plantingAdvice"
  | "calendar"
  | "quality"
  | "location"
  | "priceTag"
  | "person"
  | "document"
  | "sparkle"
  | "rentalTools"
  | "pressureWasher"
  | "chainsaw";

export function ServiceVisualIcon({
  name,
  className = "h-5 w-5",
}: {
  name: ServiceVisualIconName;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };
  const stroke = {
    stroke: "currentColor",
    strokeWidth: 1.75,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (name) {
    case "lawnMower":
      return (
        <svg {...common}>
          <path {...stroke} d="M3.5 15.5h10.2l3.1-6.4H21" />
          <path {...stroke} d="M6.5 15.5 5.3 8.7H3.5M8.2 11.2h6.7" />
          <circle cx="7" cy="18" r="1.7" {...stroke} />
          <circle cx="16.2" cy="18" r="1.7" {...stroke} />
          <path {...stroke} d="M18 9.1 15.2 5" />
        </svg>
      );
    case "rentalTools":
      return (
        <svg {...common}>
          <path {...stroke} d="M4.5 18.5h15" />
          <path {...stroke} d="M6.2 18.5V11l3.2-2.3 3.2 2.3v7.5" />
          <path {...stroke} d="M8.1 18.5v-4.2h2.6v4.2" />
          <path {...stroke} d="M15.2 6.2 18 9l-6.1 6.1-2.8-2.8 6.1-6.1Z" />
          <path {...stroke} d="m17.2 6.8 1.2-1.2M6.5 7.2h2.8M7.9 5.8v2.8" />
        </svg>
      );
    case "pressureWasher":
      return (
        <svg {...common}>
          <path {...stroke} d="M5 16.5h8.5l2-6H7l-2 6Z" />
          <path {...stroke} d="M8 10.5V7.8h5.5v2.7" />
          <path {...stroke} d="M15.5 10.5 19 7" />
          <path {...stroke} d="M19 7l1.5 1.5" />
          <path {...stroke} d="M20.5 8.5c-1.4 1.3-2.8 2-4.2 2.2" />
          <circle cx="7.2" cy="18.2" r="1.5" {...stroke} />
          <circle cx="14.2" cy="18.2" r="1.5" {...stroke} />
        </svg>
      );
    case "chainsaw":
      return (
        <svg {...common}>
          <path {...stroke} d="M4 14.5h8.6l1.8-4.8H4v4.8Z" />
          <path {...stroke} d="M14.4 9.7h4.2c1 0 1.8.8 1.8 1.8s-.8 1.8-1.8 1.8h-5.5" />
          <path {...stroke} d="M6.5 9.7V7h4v2.7" />
          <path {...stroke} d="M6 14.5v2.2h4.8v-2.2" />
          <path {...stroke} d="M16.8 9.7v3.6" />
          <path {...stroke} d="M5.5 12.1h5.8" />
        </svg>
      );
    case "landscapePlan":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="15.5" rx="2.2" {...stroke} />
          <path {...stroke} d="M7 15.5c2.7-4.2 5.7-5.9 10-6.8M8 8h3M8 11h2" />
          <circle cx="16.3" cy="14.8" r="1.5" {...stroke} />
        </svg>
      );
    case "flowerBed":
      return (
        <svg {...common}>
          <path {...stroke} d="M5 19.5h14M7 16.5c2.5-3 7.5-3 10 0" />
          <circle cx="9" cy="10" r="1.4" {...stroke} />
          <circle cx="15" cy="10" r="1.4" {...stroke} />
          <path {...stroke} d="M9 11.4v4.3M15 11.4v4.3M7.8 8.8c-1.2-.6-1.7-1.6-1.2-2.5s1.8-1 2.6-.1M16.2 8.8c1.2-.6 1.7-1.6 1.2-2.5s-1.8-1-2.6-.1" />
        </svg>
      );
    case "hedgeTrimmer":
      return (
        <svg {...common}>
          <path {...stroke} d="M4 17.5c4.8-1 8.6-4.7 10-11.5 1.1 5.4 3.3 9 6 11.5" />
          <path {...stroke} d="M7 14.8h10M9 11.2h6M5.5 20h13" />
        </svg>
      );
    case "shrubCare":
      return (
        <svg {...common}>
          <path {...stroke} d="M5 18c0-4.8 3.2-8.5 7-8.5S19 13.2 19 18" />
          <path {...stroke} d="M8 18V9.5M12 18V5M16 18V9.5M7 12.5h10" />
        </svg>
      );
    case "treeCare":
    case "fruitTree":
      return (
        <svg {...common}>
          <path {...stroke} d="M12 20v-6M8 20h8" />
          <path {...stroke} d="M8.5 14.5a4 4 0 0 1-4-4c0-2.1 1.6-3.8 3.7-4 .8-1.8 2.1-2.7 3.8-2.7s3 .9 3.8 2.7c2.1.2 3.7 1.9 3.7 4a4 4 0 0 1-4 4h-7Z" />
          {name === "fruitTree" ? <circle cx="15.5" cy="10.2" r="0.9" fill="currentColor" /> : null}
        </svg>
      );
    case "deadwood":
      return (
        <svg {...common}>
          <path {...stroke} d="M7 20c4.2-3.5 6.4-8.6 6-16" />
          <path {...stroke} d="M13 9 18 6M11.6 13 6.5 10M10 17l5 1" />
          <path {...stroke} d="m17.5 14.5 3 3M20.5 14.5l-3 3" />
        </svg>
      );
    case "leafBag":
    case "greenWaste":
      return (
        <svg {...common}>
          <path {...stroke} d="M7 8h10l1.2 12H5.8L7 8Z" />
          <path {...stroke} d="M9.5 8V5h5v3M9 15c4.2-.4 6.2-2.8 7-6-4 .3-6.2 2.5-7 6Z" />
          <path {...stroke} d="M9 15c1.8-1.7 3.7-2.7 6-3.3" />
        </svg>
      );
    case "inspection":
      return (
        <svg {...common}>
          <path {...stroke} d="M8 4h8l2 2v14H6V6l2-2Z" />
          <path {...stroke} d="M9 11h4M9 15h3M14 16.5l1.4 1.4 3-3.3" />
        </svg>
      );
    case "repair":
    case "workOrder":
      return (
        <svg {...common}>
          <path {...stroke} d="m14.5 5 4.5 4.5-9.8 9.8H4.7v-4.5L14.5 5Z" />
          <path {...stroke} d="m13 6.5 4.5 4.5M7 17h.01" />
        </svg>
      );
    case "cleaningBucket":
      return (
        <svg {...common}>
          <path {...stroke} d="M7 10h10l-1.2 10H8.2L7 10Z" />
          <path {...stroke} d="M8.5 10a3.5 3.5 0 0 1 7 0M9 15h6" />
          <circle cx="17.5" cy="6" r="1" fill="currentColor" />
        </svg>
      );
    case "propertyCare":
    case "communityArea":
      return (
        <svg {...common}>
          <path {...stroke} d="M4.5 20V9.5L12 4l7.5 5.5V20" />
          <path {...stroke} d="M9 20v-6h6v6M7 11.5h2.5M14.5 11.5H17" />
        </svg>
      );
    case "contractor":
      return (
        <svg {...common}>
          <circle cx="7" cy="7" r="2.4" {...stroke} />
          <circle cx="17" cy="17" r="2.4" {...stroke} />
          <path {...stroke} d="M9 9 15 15M16 6h3v3M19 6l-5.2 5.2" />
        </svg>
      );
    case "bins":
      return (
        <svg {...common}>
          <path {...stroke} d="M6 8h5l1 12H7L6 8ZM13 8h5l-1 12h-5l1-12Z" />
          <path {...stroke} d="M5 8h14M8 5h8" />
        </svg>
      );
    case "emergency":
    case "standby":
      return (
        <svg {...common}>
          <path {...stroke} d="M12 4v5M12 15v5M4 12h5M15 12h5" />
          <circle cx="12" cy="12" r="3" {...stroke} />
        </svg>
      );
    case "snowShovel":
      return (
        <svg {...common}>
          <path {...stroke} d="M4 7h16v3H4zM12 10v10M8.5 20h7" />
          <path {...stroke} d="M6 14h2M16 15h2M10 5l2-2 2 2" />
        </svg>
      );
    case "snowParking":
      return (
        <svg {...common}>
          <path {...stroke} d="M6 20V5h6.2a3.8 3.8 0 0 1 0 7.6H6" />
          <path {...stroke} d="M16 6l4 4M20 6l-4 4M16 16l4 4M20 16l-4 4" />
        </svg>
      );
    case "spreader":
      return (
        <svg {...common}>
          <path {...stroke} d="M8 9h8l2 11H6L8 9Z" />
          <path {...stroke} d="M10 9V5h4v4M9 14h.01M12 16h.01M15 14h.01" />
        </svg>
      );
    case "safetyDuty":
      return (
        <svg {...common}>
          <path {...stroke} d="M12 3.5 18.5 6v5.2c0 4.1-2.4 7-6.5 9.3-4.1-2.3-6.5-5.2-6.5-9.3V6L12 3.5Z" />
          <path {...stroke} d="m8.8 12 2.1 2.1 4.4-4.6" />
        </svg>
      );
    case "frost":
      return (
        <svg {...common}>
          <path {...stroke} d="M12 3v18M5 7l14 10M19 7 5 17" />
          <circle cx="12" cy="12" r="1.2" fill="currentColor" />
        </svg>
      );
    case "routeDoc":
    case "document":
    case "seasonContract":
      return (
        <svg {...common}>
          <path {...stroke} d="M7 3.8h7l3 3V20H7V3.8Z" />
          <path {...stroke} d="M14 4v3h3M9.5 11h5M9.5 14h5M9.5 17h3" />
        </svg>
      );
    case "mop":
      return (
        <svg {...common}>
          <path {...stroke} d="M12 3v11M8 14h8l1.5 6h-11L8 14Z" />
          <path {...stroke} d="M9 20v-3M12 20v-3M15 20v-3" />
        </svg>
      );
    case "stairs":
      return (
        <svg {...common}>
          <path {...stroke} d="M4 19h16M5 16h4v-4h4V8h4V4h3" />
        </svg>
      );
    case "officeClean":
      return (
        <svg {...common}>
          <path {...stroke} d="M5 20V5h9v15M14 10h5v10" />
          <path {...stroke} d="M8 8h3M8 12h3M8 16h3M16 14h1" />
          <path {...stroke} d="m17 6 1 1 2-2" />
        </svg>
      );
    case "facade":
      return (
        <svg {...common}>
          <rect x="5" y="4" width="14" height="16" rx="1.5" {...stroke} />
          <path {...stroke} d="M5 10h14M12 4v16M8 7h1M15 7h1M8 14h1M15 14h1" />
        </svg>
      );
    case "deepClean":
    case "sparkle":
      return (
        <svg {...common}>
          <path {...stroke} d="M12 3l1.6 5.1L19 10l-5.4 1.9L12 17l-1.6-5.1L5 10l5.4-1.9L12 3Z" />
          <path {...stroke} d="M5 16l.8 2.2L8 19l-2.2.8L5 22l-.8-2.2L2 19l2.2-.8L5 16Z" />
        </svg>
      );
    case "floorPolisher":
      return (
        <svg {...common}>
          <circle cx="12" cy="16" r="4" {...stroke} />
          <path {...stroke} d="M12 12V5h4M8 20h8M8.8 16h6.4" />
        </svg>
      );
    case "outdoorClean":
      return (
        <svg {...common}>
          <path {...stroke} d="M5 18c4.5-.7 8.5-3.7 11-9.5" />
          <path {...stroke} d="M15 6h4v4M7 15l-2 5M12 13l1 5" />
        </svg>
      );
    case "constructionClean":
      return (
        <svg {...common}>
          <path {...stroke} d="M4 20h16M6 20l1-9h10l1 9M9 11V6h6v5" />
          <path {...stroke} d="M8 6h8M10 15h4" />
        </svg>
      );
    case "gutter":
      return (
        <svg {...common}>
          <path {...stroke} d="M4 7h16v3H4zM7 10v7a3 3 0 0 0 6 0v-1M17 10v10" />
          <path {...stroke} d="M14 17h6" />
        </svg>
      );
    case "pruningShears":
    case "thinning":
      return (
        <svg {...common}>
          <path {...stroke} d="M4 15c-2-3.5-2-7.5 0-11M20 15c2-3.5 2-7.5 0-11" />
          <path {...stroke} d="M7 12.5 17 21.5M17 12.5 7 21.5" />
          <circle cx="4" cy="15" r="1.2" fill="currentColor" />
          <circle cx="20" cy="15" r="1.2" fill="currentColor" />
        </svg>
      );
    case "wildGrowth":
      return (
        <svg {...common}>
          <path {...stroke} d="M6 20V9M12 20V5M18 20V10M4 14c4-.8 6-3 8-9M20 15c-4-.5-6.5-2.5-8-10" />
        </svg>
      );
    case "roseCare":
      return (
        <svg {...common}>
          <path {...stroke} d="M12 20V9M8 8c1.6-3 3-4 4-4s2.4 1 4 4c-1.5 1.5-3 2.2-4 2.2S9.5 9.5 8 8Z" />
          <path {...stroke} d="M12 15c-2.5-.2-4.4-1.6-5.5-4 2.8 0 4.7 1.4 5.5 4ZM12 16c2.4-.2 4.2-1.5 5.2-3.8-2.6 0-4.4 1.3-5.2 3.8Z" />
        </svg>
      );
    case "plantingAdvice":
      return (
        <svg {...common}>
          <path {...stroke} d="M12 20V10" />
          <path {...stroke} d="M12 11c-3.5-.2-5.8-2.2-6.5-6 3.8.3 6 2.4 6.5 6ZM12 14c3.4-.2 5.5-2 6.2-5.4-3.5.2-5.6 2-6.2 5.4Z" />
          <path {...stroke} d="M17 17.5h3M18.5 16v3" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...common}>
          <rect x="4.5" y="5.5" width="15" height="14" rx="2.5" {...stroke} />
          <path {...stroke} d="M8 4v3M16 4v3M5 10h14M8 14h2.5M13.5 14H16" />
        </svg>
      );
    case "quality":
      return (
        <svg {...common}>
          <circle cx="12" cy="9" r="5" {...stroke} />
          <path {...stroke} d="M8.4 13.2 7 21l5-2.6 5 2.6-1.4-7.8" />
        </svg>
      );
    case "location":
      return (
        <svg {...common}>
          <path {...stroke} d="M12 3.5A6.2 6.2 0 0 0 5.8 9.7c0 4.5 6.2 10.8 6.2 10.8s6.2-6.3 6.2-10.8A6.2 6.2 0 0 0 12 3.5Z" />
          <circle cx="12" cy="9.7" r="2" {...stroke} />
        </svg>
      );
    case "priceTag":
      return (
        <svg {...common}>
          <path {...stroke} d="M5 6.5h8l6 6-6.5 6.5-6-6v-8Z" />
          <circle cx="9" cy="9.5" r="1" fill="currentColor" />
        </svg>
      );
    case "person":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="3.2" {...stroke} />
          <path {...stroke} d="M5.5 20c.8-3.5 3.2-5.2 6.5-5.2s5.7 1.7 6.5 5.2" />
        </svg>
      );
  }
}
