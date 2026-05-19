const stroke = {
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Rasenmäher – Seitenansicht */
export function LeistungenLawnMowerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path {...stroke} d="M4 18.5 11.5 7.5" />
      <path {...stroke} d="M9.5 12.5h8.5a1.4 1.4 0 0 1 1.4 1.4v1.6a1.4 1.4 0 0 1-1.4 1.4H9.5a1.4 1.4 0 0 1-1.4-1.4v-1.6a1.4 1.4 0 0 1 1.4-1.4z" />
      <path {...stroke} d="M12 10.2h3.2v2.8H12z" />
      <circle cx="9.8" cy="17.8" r="1.65" {...stroke} />
      <circle cx="16.8" cy="17.8" r="1.65" {...stroke} />
    </svg>
  );
}

/** Haus mit Schornstein – Hausmeisterservice */
export function LeistungenHouseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        {...stroke}
        d="M4.5 11.2 12 5.2l7.5 6V20H4.5V11.2z"
      />
      <path {...stroke} d="M6.8 11V7.2h2.4V11" />
      <path {...stroke} d="M10.2 20v-4.2h3.6V20" />
    </svg>
  );
}

/** Schneeflocke – Winterdienst */
export function LeistungenSnowflakeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path {...stroke} d="M12 2.5v19" />
      <path {...stroke} d="M12 2.5l2.6 4.6M12 2.5 9.4 7.1" />
      <path {...stroke} d="M4.8 12h14.4" />
      <path {...stroke} d="M4.8 12l4.1 2.4M4.8 12l4.1-2.4" />
      <path {...stroke} d="M6.9 6.9l10.2 10.2M6.9 17.1l10.2-10.2" />
      <path {...stroke} d="M12 7.8l1.4 2-2.4.4 1.9 1.5-1.9 1.5 2.4.4-1.4 2-1.4-2 2.4-.4-1.9-1.5 1.9-1.5-2.4-.4 1.4-2z" />
    </svg>
  );
}

/** Team – Facility Management aus einer Hand */
export function LeistungenTeamIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8.8" r="2.6" {...stroke} />
      <path {...stroke} d="M7.2 19.2c1.2-2.2 3-3.2 4.8-3.2s3.6 1 4.8 3.2" />
      <circle cx="6.2" cy="9.8" r="2.1" {...stroke} />
      <path {...stroke} d="M2.8 18.5c1.4-1.8 2.8-2.6 4.4-2.6" />
      <circle cx="17.8" cy="9.8" r="2.1" {...stroke} />
      <path {...stroke} d="M16.8 15.9c1.6 0 3 .8 4.4 2.6" />
    </svg>
  );
}

/** Pfade für große Ambient-Glyphen (viewBox 0 0 24 24) */
export function LeistungenLawnMowerPaths() {
  return (
    <>
      <path d="M4 18.5 11.5 7.5" />
      <path d="M9.5 12.5h8.5a1.4 1.4 0 0 1 1.4 1.4v1.6a1.4 1.4 0 0 1-1.4 1.4H9.5a1.4 1.4 0 0 1-1.4-1.4v-1.6a1.4 1.4 0 0 1 1.4-1.4z" />
      <path d="M12 10.2h3.2v2.8H12z" />
      <circle cx="9.8" cy="17.8" r="1.65" />
      <circle cx="16.8" cy="17.8" r="1.65" />
    </>
  );
}

export function LeistungenHousePaths() {
  return (
    <>
      <path d="M4.5 11.2 12 5.2l7.5 6V20H4.5V11.2z" />
      <path d="M6.8 11V7.2h2.4V11" />
      <path d="M10.2 20v-4.2h3.6V20" />
    </>
  );
}

export function LeistungenSnowflakePaths() {
  return (
    <>
      <path d="M12 2.5v19" />
      <path d="M12 2.5l2.6 4.6M12 2.5 9.4 7.1" />
      <path d="M4.8 12h14.4" />
      <path d="M4.8 12l4.1 2.4M4.8 12l4.1-2.4" />
      <path d="M6.9 6.9l10.2 10.2M6.9 17.1l10.2-10.2" />
      <path d="M12 7.8l1.4 2-2.4.4 1.9 1.5-1.9 1.5 2.4.4-1.4 2-1.4-2 2.4-.4-1.9-1.5 1.9-1.5-2.4-.4 1.4-2z" />
    </>
  );
}

export function LeistungenTeamPaths() {
  return (
    <>
      <circle cx="12" cy="8.8" r="2.6" />
      <path d="M7.2 19.2c1.2-2.2 3-3.2 4.8-3.2s3.6 1 4.8 3.2" />
      <circle cx="6.2" cy="9.8" r="2.1" />
      <path d="M2.8 18.5c1.4-1.8 2.8-2.6 4.4-2.6" />
      <circle cx="17.8" cy="9.8" r="2.1" />
      <path d="M16.8 15.9c1.6 0 3 .8 4.4 2.6" />
    </>
  );
}
