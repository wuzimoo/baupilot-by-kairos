import { LandingPage } from "@/components/landing-page";
import { buildLandingMetadata } from "@/lib/landing-metadata";

export const metadata = buildLandingMetadata("en", "/");

export default function Home() {
  return <LandingPage locale="en" />;
}
