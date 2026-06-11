import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "./constants";

export const BASE_SEO_KEYWORDS = [
  // Brand
  "Redecorporativa",

  // Core service — what people search
  "Zoho consulting",
  "Zoho consultant India",
  "Zoho consulting company India",
  "Zoho implementation",
  "Zoho implementation partner",
  "Zoho implementation service",
  "Zoho CRM setup",
  "Zoho CRM consultant",
  "Zoho CRM expert",
  "Zoho CRM customization",
  "Zoho CRM integration",
  "Zoho authorized partner",
  "Zoho authorized partner India",
  "Zoho partner India",
  "Zoho developer India",
  "hire Zoho consultant",
  "Zoho support services",

  // Product-specific (high search volume)
  "Zoho One implementation",
  "Zoho One partner",
  "Zoho CRM Plus setup",
  "Zoho Finance Plus implementation",
  "Zoho Books setup",
  "Zoho Books GST India",
  "Zoho People Plus HR implementation",
  "Zoho Creator developer",
  "Zoho Marketing Automation setup",

  // Automation & operations
  "CRM automation",
  "CRM implementation service",
  "workflow automation service India",
  "business process automation India",
  "WhatsApp CRM integration",
  "Zoho WhatsApp automation",
  "Business automation",
  "Business operations consulting",
  "Sales process automation",
  "Lead management automation",

  // Location variants
  "Zoho consultant Noida",
  "Zoho consultant Delhi NCR",
  "Zoho partner USA",
  "Zoho partner UK",
  "Zoho consultant UAE",
  "Zoho partner Australia"
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
        url: `${SITE_URL}/logo-redecorporativa.png`,
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
    images: [`${SITE_URL}/logo-redecorporativa.png`]
  }
};

export const buildCanonical = (path: string) =>
  `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
