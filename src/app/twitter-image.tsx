import { ImageResponse } from "next/og";

import { SocialPreviewFrame } from "@/lib/brand-images";

export const alt = "BauPilot by Kairos social preview";
export const contentType = "image/png";
export const size = {
  height: 630,
  width: 1200,
};

export default function TwitterImage() {
  return new ImageResponse(
    (
      <SocialPreviewFrame
        eyebrow="Cyprus contractors"
        subtitle="Projects, daily site reports, crew hours and approvals in one workflow."
        title="Reliable project workflow from site to office."
      />
    ),
    size
  );
}
