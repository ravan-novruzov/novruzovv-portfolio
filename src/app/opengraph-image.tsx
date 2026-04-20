import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ravan Novruzov | Bilgisayar Mühendisi";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background:
            "linear-gradient(135deg, #08090d 0%, #0f1117 50%, #12141c 100%)",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Subtle grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Gradient orbs */}
        <div
          style={{
            position: "absolute",
            top: -120,
            left: -120,
            width: 420,
            height: 420,
            background: "#818cf8",
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: 0.25,
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            right: -120,
            width: 380,
            height: 380,
            background: "#22d3ee",
            borderRadius: "50%",
            filter: "blur(100px)",
            opacity: 0.22,
          }}
        />

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 24px",
            borderRadius: 999,
            border: "1px solid rgba(129, 140, 248, 0.4)",
            background: "rgba(129, 140, 248, 0.1)",
            color: "#a5b4fc",
            fontSize: 22,
            fontWeight: 500,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              background: "#818cf8",
              borderRadius: "50%",
            }}
          />
          Yazılım & Ağ Mühendisliği
        </div>

        {/* Name */}
        <div
          style={{
            display: "flex",
            fontSize: 120,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          <span>Ravan&nbsp;</span>
          <span
            style={{
              background: "linear-gradient(90deg, #818cf8, #22d3ee)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Novruzov
          </span>
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 36,
            color: "#9ca3af",
            marginTop: 24,
            fontWeight: 400,
          }}
        >
          Bilgisayar Mühendisliği Öğrencisi
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 40,
          }}
        >
          {["Siber Güvenlik", "Ağ Teknolojileri", "Sistem Mimarisi"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.04)",
                color: "#e4e4ed",
                fontSize: 22,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL at bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 24,
            color: "#6b7280",
            letterSpacing: "0.05em",
          }}
        >
          www.ravannovruzov.me
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
