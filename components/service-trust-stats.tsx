import { googleReviewCount } from "@/lib/reviews";

const stats = [
  { value: "5.0★", label: "Google Bewertung" },
  { value: String(googleReviewCount), label: "Google-Rezensionen" },
  { value: "15+", label: "Jahre Erfahrung" },
  { value: "100%", label: "Kundenzufriedenheit" },
] as const;

export function ServiceTrustStats({ variant = "light" }: { variant?: "light" | "dark" }) {
  const shell =
    variant === "dark"
      ? "border-white/[0.08] bg-black/25 shadow-none ring-1 ring-white/[0.06]"
      : "border-zinc-200/80 bg-white shadow-md shadow-zinc-900/5 ring-1 ring-white";

  const valueClass = variant === "dark" ? "text-white" : "text-zinc-900";
  const labelClass = variant === "dark" ? "text-zinc-400" : "text-zinc-500";
  const divideClass = variant === "dark" ? "sm:divide-white/10" : "sm:divide-zinc-200/80";

  return (
    <div className={`rounded-2xl border py-8 sm:py-9 ${shell}`}>
      <div className={`grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0 sm:divide-x ${divideClass}`}>
        {stats.map((s) => (
          <div key={s.label} className="px-3 text-center sm:px-4">
            <p className={`text-xl font-bold tabular-nums tracking-tight sm:text-2xl ${valueClass}`}>
              {s.value}
            </p>
            <p className={`mt-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] ${labelClass}`}>
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
