import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  className?: string;
};

/** Hell umrandeter Pill-Button (z. B. „Alle Dienstleistungen ansehen“) */
export function CtaOutlineLink({ href, children, className = "" }: Props) {
  return (
    <Link href={href} className={`gg-btn-outline-light ${className}`.trim()}>
      <span>{children}</span>
      <span className="gg-btn-outline-light-arrow" aria-hidden>
        →
      </span>
    </Link>
  );
}
