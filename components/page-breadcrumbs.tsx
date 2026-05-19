import Link from "next/link";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export function PageBreadcrumbs({
  items,
  className = "",
  variant = "light",
}: {
  items: BreadcrumbItem[];
  className?: string;
  variant?: "light" | "dark";
}) {
  const linkClass =
    variant === "dark"
      ? "text-zinc-400 transition hover:text-[#c8f0a8]"
      : "text-zinc-500 transition hover:text-emerald-800";
  const currentClass = variant === "dark" ? "font-medium text-white" : "font-medium text-zinc-900";
  const sepClass = variant === "dark" ? "text-zinc-600" : "text-zinc-300";

  return (
    <nav aria-label="Brotkrumen-Navigation" className={className}>
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-xs sm:text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex min-w-0 items-center gap-1.5">
              {index > 0 ? (
                <span className={sepClass} aria-hidden>
                  /
                </span>
              ) : null}
              {item.href && !isLast ? (
                <Link href={item.href} className={linkClass}>
                  {item.label}
                </Link>
              ) : (
                <span className={currentClass} aria-current={isLast ? "page" : undefined}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
