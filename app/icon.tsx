import { ImageResponse } from "next/og"

export const runtime = "edge"

export const size = {
  width: 64,
  height: 64,
}

export const contentType = "image/png"

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
          borderRadius: 14,
          position: "relative",
          overflow: "hidden",
          background: "radial-gradient(100% 100% at 15% 10%, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 55%), linear-gradient(135deg, #0ea5e9 0%, #6366f1 45%, #a855f7 100%)",
        }}
      >
        {/* inner border for “logo badge” feel */}
        <div
          style={{
            position: "absolute",
            inset: 3,
            borderRadius: 10,
            border: "1px solid rgba(255,255,255,0.22)",
          }}
        />

        {/* subtle bottom shade for depth */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 14,
            background:
              "radial-gradient(120% 120% at 50% 120%, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.0) 55%)",
          }}
        />

        {/* monogram (custom strokes, not font text) */}
        <svg width="54" height="54" viewBox="0 0 64 64" style={{ position: "relative" }}>
          <defs>
            {/* soft highlight behind the mark */}
            <radialGradient id="halo" cx="30%" cy="25%" r="70%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.24)" />
              <stop offset="60%" stopColor="rgba(255,255,255,0.06)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </radialGradient>
          </defs>

          <circle cx="32" cy="32" r="23" fill="url(#halo)" />

          {/* B */}
          <path
            d="M20 18 V46
               M20 18 H32
               C39 18 39 32 32 32
               H20
               M20 32 H33
               C41 32 41 46 33 46
               H20"
            fill="none"
            stroke="rgba(255,255,255,0.98)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.25))" }}
          />

          {/* Z */}
          <path
            d="M38 20 H50
               L38 44
               H50"
            fill="none"
            stroke="rgba(255,255,255,0.92)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.22))" }}
          />
        </svg>
      </div>
    ),
    size,
  )
}


