import type { MetadataRoute } from "next";

import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  return [
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 1,
      url: siteUrl.toString(),
    },
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 0.9,
      url: new URL("/gr", siteUrl).toString(),
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.4,
      url: new URL("/privacy", siteUrl).toString(),
    },
    {
      changeFrequency: "monthly",
      lastModified: new Date(),
      priority: 0.4,
      url: new URL("/cookies", siteUrl).toString(),
    },
  ];
}
