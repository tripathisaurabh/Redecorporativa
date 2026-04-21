import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

export const BASE_SEO_KEYWORDS = [
  "Zonic Tech Solutions",
  "Zoho consulting",
  "Zoho implementation",
  "Zoho CRM setup",
  "CRM automation",
  "Business automation",
  "Business operations consulting",
  "Growth operations",
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
    default: `${SITE_NAME} | Business Operations + Workflow Automation`,
    template: `%s | ${SITE_NAME}`
  },
  description:
    "Business Operations, automation, and workflow insights that improve conversions and reduce manual work.",
  keywords: [...BASE_SEO_KEYWORDS],
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
    title: `${SITE_NAME} | Business Operations + Workflow Automation`,
    description:
      "Certified Zoho Partner providing CRM implementation, workflow automation, and business operations consulting for companies in India, US, UK, UAE, and Australia.",
    locale: "en_IN",
    images: [
      {
        url: `${SITE_URL}/hero.png`,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – Zoho Partner & Workflow Automation`
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Business Operations + Workflow Automation`,
    description:
      "Certified Zoho Partner providing CRM implementation, workflow automation, and business operations consulting.",
    images: [`${SITE_URL}/hero.png`]
  }
};

export const buildCanonical = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
