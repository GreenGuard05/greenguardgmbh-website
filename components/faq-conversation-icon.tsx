/** Zwei Sprechblasen: Antwort (Zeilen) + Frage (?) – FAQ-Motiv */
export function FaqConversationIcon({ className = "h-12 w-12 text-emerald-800" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M5 6h12a2.5 2.5 0 0 1 2.5 2.5v7.5A2.5 2.5 0 0 1 17 18.5H10l-3.5 3.5V18.5H5A2.5 2.5 0 0 1 2.5 16V8.5A2.5 2.5 0 0 1 5 6z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="M7.5 10h7M7.5 12h5M7.5 14h6M7.5 16h4"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M15 11h12a2.5 2.5 0 0 1 2.5 2.5v7.5a2.5 2.5 0 0 1-2.5 2.5h-7l-3.5 3.5V23.5H15a2.5 2.5 0 0 1-2.5-2.5v-7.5A2.5 2.5 0 0 1 15 11z"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 15.5a2 2 0 1 0-2.6 1.9c.9.5 1.6 1.3 1.6 2.4"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <circle cx="21.5" cy="22" r="0.95" fill="currentColor" />
    </svg>
  );
}
