import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };

export const contentType = "image/png";

/** Apple Touch Icon – gleiche Markenfarben wie app/icon.svg (Kachel mit Blatt). */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#2B2B2B",
          borderRadius: 40,
        }}
      >
        <div
          style={{
            display: "flex",
            width: 88,
            height: 118,
            background: "linear-gradient(115deg, #a8e055 0%, #70a340 42%, #386622 100%)",
            borderRadius: "52% 52% 48% 48% / 58% 58% 42% 42%",
            transform: "rotate(-8deg)",
            boxShadow: "0 10px 28px rgba(0,0,0,0.35)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
