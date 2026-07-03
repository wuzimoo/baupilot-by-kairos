import { ImageResponse } from "next/og";

import { BrandTriangle } from "@/lib/brand-images";

export const contentType = "image/png";
export const size = {
  height: 180,
  width: 180,
};

export default function AppleIcon() {
  return new ImageResponse(<BrandTriangle size={180} />, size);
}
