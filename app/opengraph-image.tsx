import { ImageResponse } from "next/og";
import { BUSINESS } from "@/lib/config";

export const alt = `${BUSINESS.name} — shawarma, wraps and burgers on ${BUSINESS.area}, ${BUSINESS.city}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/**
 * Share card. Typeset in the site's own palette rather than photography:
 * the current food images are placeholders and shouldn't be what represents
 * the restaurant in a link preview. Swap for a real hero shot once HQ
 * Shawarma supplies photography.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fbf7f2",
          padding: "76px 84px",
        }}
      >
        {/* Brand mark: the same red square + wordmark used in the header. */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 20,
              backgroundColor: "#e23a2e",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            HQ
          </div>
          <div
            style={{
              fontSize: 30,
              fontWeight: 700,
              color: "#5c534d",
              letterSpacing: "0.14em",
            }}
          >
            SHAWARMA
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 92,
              fontWeight: 800,
              color: "#1f1a17",
              letterSpacing: "-0.035em",
              lineHeight: 1.05,
              maxWidth: 900,
            }}
          >
            Shawarma, wraps and burgers — hot off the grill.
          </div>
          <div
            style={{
              marginTop: 34,
              width: 132,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#e23a2e",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 32,
            color: "#5c534d",
          }}
        >
          <div style={{ display: "flex" }}>
            {BUSINESS.area}, {BUSINESS.city}
          </div>
          <div style={{ display: "flex", fontWeight: 700, color: "#1f1a17" }}>
            Order on WhatsApp
          </div>
        </div>
      </div>
    ),
    size,
  );
}
