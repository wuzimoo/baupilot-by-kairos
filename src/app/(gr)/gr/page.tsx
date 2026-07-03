import { LandingPage } from "@/components/landing-page";
import { buildLandingMetadata } from "@/lib/landing-metadata";

export const metadata = buildLandingMetadata("gr", "/gr");

export default function GreekLandingPage() {
  return <LandingPage locale="gr" />;
}
