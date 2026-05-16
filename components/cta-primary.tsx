import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type SharedProps = {
  children: ReactNode;
  className?: string;
  /** Pfeil rechts; `false` zum Ausblenden, eigenes Zeichen z. B. `↓` möglich */
  arrow?: boolean | string;
};

type LinkProps = SharedProps & {
  href: string;
};

function CtaPrimaryContent({
  children,
  arrow = "→",
}: {
  children: ReactNode;
  arrow?: boolean | string;
}) {
  const showArrow = arrow !== false;
  const arrowChar = typeof arrow === "string" ? arrow : "→";

  return (
    <span className="gg-btn-primary-inner">
      <span className="gg-btn-primary-label">{children}</span>
      {showArrow ? (
        <span className="gg-btn-primary-arrow" aria-hidden>
          {arrowChar}
        </span>
      ) : null}
    </span>
  );
}

export function CtaPrimary({ href, children, className = "", arrow }: LinkProps) {
  return (
    <Link href={href} className={`gg-btn-primary ${className}`.trim()}>
      <CtaPrimaryContent arrow={arrow}>{children}</CtaPrimaryContent>
    </Link>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & SharedProps;

export function CtaPrimaryButton({
  children,
  className = "",
  type = "submit",
  arrow,
  ...rest
}: ButtonProps) {
  return (
    <button type={type} className={`gg-btn-primary ${className}`.trim()} {...rest}>
      <CtaPrimaryContent arrow={arrow}>{children}</CtaPrimaryContent>
    </button>
  );
}
