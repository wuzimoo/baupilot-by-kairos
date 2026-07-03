export function getSiteUrl() {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "") ||
    "https://baupilot-by-kairos.vercel.app";

  return new URL(siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`);
}
