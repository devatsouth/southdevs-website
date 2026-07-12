import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const SERVICE_COLORS = {
  website: "#3498db",
  mobile: "#e74c3c",
  software: "#27ae60",
  system: "#9b59b6",
};

export default function OpengraphImage() {
  const logoBase64 = readFileSync(
    join(process.cwd(), "public/images/logo-standard.png")
  ).toString("base64");
  const logoSrc = `data:image/png;base64,${logoBase64}`;

  const montserratExtraBold = readFileSync(
    join(process.cwd(), "assets/fonts/Montserrat-ExtraBold.ttf")
  );

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
          background: "#ffffff",
          fontFamily: "Montserrat",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
          <img src={logoSrc} width={42} height={42} alt="" />
          <div style={{ display: "flex", fontSize: 28, fontWeight: 800, lineHeight: 1, paddingBottom: 4 }}>
            <span style={{ color: "#0a0a0a" }}>south</span>
            <span style={{ color: "#808080" }}>devs</span>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: 32,
            fontSize: 48,
            fontWeight: 800,
            color: "#0a0a0a",
            lineHeight: 1.3,
          }}
        >
          <span>We build&nbsp;</span>
          <span style={{ color: SERVICE_COLORS.website }}>websites,&nbsp;</span>
          <span style={{ color: SERVICE_COLORS.mobile }}>mobile apps,&nbsp;</span>
          <span style={{ color: SERVICE_COLORS.software }}>softwares,&nbsp;</span>
          <span>and&nbsp;</span>
          <span style={{ color: SERVICE_COLORS.system }}>custom systems&nbsp;</span>
          <span>to help your business grow</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Montserrat",
          data: montserratExtraBold,
          style: "normal",
          weight: 800,
        },
      ],
    }
  );
}
