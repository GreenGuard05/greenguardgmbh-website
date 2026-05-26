import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt =
  "Green Guard GmbH – Ihr Grün in besten Händen · Facility Management Sachsen-Anhalt";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PREVIEW_LOGO = join(process.cwd(), "public/branding/green-guard-og-preview.png");

/**
 * Link-Vorschau (WhatsApp, Facebook …): PNG-Logo aus `public/branding/green-guard-og-preview.png`.
 * Selbst gehostet unter /opengraph-image – zuverlässig für Messenger-Crawler.
 */
export default async function OpenGraphImage() {
  const png = await readFile(PREVIEW_LOGO);
  const logoSrc = `data:image/png;base64,${png.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(145deg, #1a2f0a 0%, #263d12 50%, #3d6620 100%)",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- next/og ImageResponse */}
        <img
          src={logoSrc}
          width={480}
          height={480}
          alt=""
          style={{
            objectFit: "contain",
            flexShrink: 0,
          }}
        />
        <div
          style={{
            marginTop: 8,
            fontSize: 22,
            fontWeight: 600,
            color: "rgba(244, 247, 239, 0.78)",
            letterSpacing: "0.02em",
          }}
        >
          greenguard-msh.de
        </div>
      </div>
    ),
    { ...size },
  );
}
