import { TrustStatsCards } from "@/components/trust-stats-cards";

type ServiceTrustStatsProps = {
  /** @deprecated Nur noch ein Layout – dunkle Karten wie im Hero */
  variant?: "light" | "dark";
  className?: string;
};

/** Kennzahlen-Leiste: vier dunkle Karten mit grünem Akzent (wie Hero) */
export function ServiceTrustStats({ className = "" }: ServiceTrustStatsProps) {
  return (
    <div
      className={[
        "overflow-hidden rounded-2xl border border-zinc-900/20 bg-zinc-950 p-3 shadow-xl shadow-zinc-900/15 sm:p-4",
        className,
      ].join(" ")}
    >
      <TrustStatsCards />
    </div>
  );
}
