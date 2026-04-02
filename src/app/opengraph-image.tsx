import { ImageResponse } from "next/og";

export const alt = "Ryan Singh Sareen — Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0a0f1e 0%, #1a1040 50%, #0a0f1e 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 20,
              fontWeight: 700,
            }}
          >
            RS
          </div>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: 20 }}>
            ryansinghsareen.com
          </span>
        </div>

        <h1
          style={{
            fontSize: 72,
            fontWeight: 800,
            lineHeight: 1.1,
            margin: 0,
            background: "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          Full-Stack Developer
        </h1>

        <p
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.5)",
            marginTop: 24,
            lineHeight: 1.4,
          }}
        >
          Building intelligent web apps with React, Next.js, and AI
        </p>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginTop: 40,
          }}
        >
          {["React", "Next.js", "TypeScript", "Tailwind", "Firebase"].map(
            (tech) => (
              <span
                key={tech}
                style={{
                  padding: "8px 16px",
                  borderRadius: 999,
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: 16,
                  fontWeight: 500,
                }}
              >
                {tech}
              </span>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
