import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

export const BASE_SEO_KEYWORDS = [
  "Zonic Tech Solutions",
  "Zoho consulting",
  "Zoho implementation",
  "Zoho CRM setup",
  "CRM automation",
  "AI automation",
  "Business operations consulting",
  "Revenue operations",
  "Sales process automation",
  "Lead management automation",
  "Workflow automation",
  "Noida CRM consultants",
  "USA Zoho experts"
] as const;

export const buildKeywords = (...pageKeywords: string[]) =>
  Array.from(new Set([...BASE_SEO_KEYWORDS, ...pageKeywords]));

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Business Operations + AI Automation`,
    template: `%s | ${SITE_NAME}`
  },
  description:
    "Business Operations, automation, and AI insights that improve conversions and reduce manual work.",
  keywords: [...BASE_SEO_KEYWORDS],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} | Business Operations + AI Automation`,
    description:
      "Business Operations, automation, and AI insights that improve conversions and reduce manual work.",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Business Operations + AI Automation`,
    description:
      "Business Operations, automation, and AI insights that improve conversions and reduce manual work."
  }
};

export const buildCanonical = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
