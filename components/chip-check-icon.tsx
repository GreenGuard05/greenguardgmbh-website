/**
 * Häkchen im Kreis (Outline) — wie in der Marken-Vorlage: dünner Strich, kräftiges Grün.
 */
export function ChipCheckIcon({ className = "h-4 w-4 shrink-0 text-[#28a745]" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="10" cy="10" r="7.25" stroke="currentColor" strokeWidth="1.15" />
      <path
        d="M5.5 10.1 8.25 12.85 14.55 6.55"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
