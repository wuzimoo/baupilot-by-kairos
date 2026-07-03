import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-url";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = getSiteUrl();
  const siteOrigin = siteUrl.origin;

  return {
    host: siteOrigin,
    rules: [
      {
        allow: "/",
        disallow: "/api/",
        userAgent: "*",
      },
    ],
    sitemap: `${siteOrigin}/sitemap.xml`,
  };
}
