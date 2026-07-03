import type { Metadata } from "next";

import { getLandingContent, type LandingLocale } from "@/content/landing";

const ogImage = {
  alt: "BauPilot by Kairos website preview",
  height: 630,
  url: "/opengraph-image",
  width: 1200,
};

const localizedKeywords: Record<LandingLocale, string[]> = {
  en: [
    "construction workflow software Cyprus",
    "Cyprus contractor software",
    "daily site reports",
    "crew hours approvals",
    "construction reporting workflow",
    "foreman approval software",
    "payroll prep for contractors",
    "English and Greek construction software",
  ],
  gr: [
    "λογισμικό εργολάβων Κύπρος",
    "construction workflow Cyprus",
    "ημερήσιες αναφορές εργοταξίου",
    "ώρες συνεργείου και εγκρίσεις",
    "reporting workflow εργολάβων",
    "εργοδηγός approval software",
    "μισθοδοσία εργολάβων Κύπρος",
    "English Greek construction workflow",
  ],
};

export function buildLandingMetadata(
  locale: LandingLocale,
  pathname: "/" | "/gr"
): Metadata {
  const content = getLandingContent(locale);

  return {
    applicationName: "BauPilot by Kairos",
    authors: [{ name: "Kairos" }],
    category: "Construction software",
    creator: "Kairos",
    description: content.metadataDescription,
    keywords: localizedKeywords[locale],
    openGraph: {
      description: content.metadataDescription,
      images: [ogImage],
      locale: content.ogLocale,
      siteName: "BauPilot by Kairos",
      title: content.metadataTitle,
      type: "website",
      url: pathname,
    },
    publisher: "Kairos",
    title: content.metadataTitle,
    twitter: {
      card: "summary_large_image",
      description: content.metadataDescription,
      images: ["/twitter-image"],
      title: content.metadataTitle,
    },
    alternates: {
      canonical: pathname,
      languages: {
        en: "/",
        el: "/gr",
        "x-default": "/",
      },
    },
  };
}
