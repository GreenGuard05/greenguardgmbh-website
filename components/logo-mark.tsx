export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <rect width="32" height="32" rx="8" className="fill-emerald-500/20" />
      <path
        d="M16 7c-3 4-6 7-6 11a6 6 0 1012 0c0-4-3-7-6-11z"
        className="fill-emerald-400"
      />
      <path
        d="M16 11c-1.8 2.2-3.5 4.4-3.5 7a3.5 3.5 0 107 0c0-2.6-1.7-4.8-3.5-7z"
        className="fill-emerald-200/90"
      />
    </svg>
  );
}
