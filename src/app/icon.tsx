import { ImageResponse } from "next/og";

import { BrandTriangle } from "@/lib/brand-images";

export const contentType = "image/png";
export const size = {
  height: 64,
  width: 64,
};

export default function Icon() {
  return new ImageResponse(<BrandTriangle size={64} />, size);
}
