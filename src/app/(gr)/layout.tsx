import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Archivo, IBM_Plex_Mono, Public_Sans } from "next/font/google";

import { getSiteUrl } from "@/lib/site-url";

import "../globals.css";

const headingFont = Archivo({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700", "800"],
});

const bodyFont = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const monoFont = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  applicationName: "BauPilot by Kairos",
  formatDetection: {
    address: false,
    email: false,
    telephone: false,
  },
  icons: {
    apple: "/apple-icon",
    icon: "/icon",
  },
  metadataBase: siteUrl,
  referrer: "origin-when-cross-origin",
};

export default function GreekRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="el"
      className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
