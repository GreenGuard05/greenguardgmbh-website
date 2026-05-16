import Image from "next/image";
import { site } from "@/lib/site";

type Props = {
  /** Höhe in Tailwind-Klassen, Breite proportional */
  className?: string;
  priority?: boolean;
};

/**
 * Offizielles Green-Guard-Markenlogo (SVG unter `/public/branding/`).
 */
export function SiteLogo({ className = "h-9 w-auto sm:h-10", priority = false }: Props) {
  return (
    <Image
      src="/branding/green-guard-logo.svg"
      alt={`${site.name} – ${site.brandSlogan}`}
      width={600}
      height={600}
      className={`w-auto object-contain object-center ${className}`.trim()}
      sizes="(max-width: 640px) 56px, 64px"
      priority={priority}
    />
  );
}
