import type { Metadata } from "next";
import { buildCanonical, buildKeywords } from "../../lib/seo";
import { SITE_URL } from "../../lib/constants";

export const metadata: Metadata = {
  title: "About Us | Zoho Premium Partner & CRM Consulting Company India",
  description:
    "Redecorporativa — certified Zoho Premium Partner since 2019. Noida-based CRM consulting firm with 100+ clients served across India, USA, UK, UAE, and Australia. Expert team of Zoho CRM, Zoho One, and automation consultants.",
  keywords: buildKeywords(
    "Zoho Premium Partner India",
    "Zoho certified consultants Noida",
    "CRM consulting company India",
    "Zoho implementation company",
    "Zoho partner Noida Delhi NCR",
    "Zoho CRM consulting team",
    "best Zoho consultant India"
  ),
  alternates: {
    canonical: buildCanonical("/about")
  },
  openGraph: {
    title: "About Redecorporativa – Certified Zoho Partner Since 2019",
    description:
      "5+ years helping businesses automate with Zoho. 100+ clients across India, US, UK, UAE, and Australia.",
    url: `${SITE_URL}/about`,
    images: [
      {
        url: `${SITE_URL}/herosection.png`,
        width: 1200,
        height: 630,
        alt: "Redecorporativa team"
      }
    ]
  },
  twitter: {
    title: "About Redecorporativa – Certified Zoho Partner",
    description:
      "5+ years of Zoho implementation experience. 100+ clients globally.",
    images: [`${SITE_URL}/herosection.png`]
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
