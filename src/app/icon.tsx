import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #818cf8 0%, #22d3ee 100%)",
          borderRadius: 8,
          color: "white",
          fontSize: 18,
          fontWeight: 800,
          letterSpacing: "-0.05em",
          fontFamily: "sans-serif",
        }}
      >
        RN
      </div>
    ),
    {
      ...size,
    }
  );
}
