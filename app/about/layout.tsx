import type { Metadata } from "next";
import { buildCanonical, buildKeywords } from "../../lib/seo";
import { SITE_URL } from "../../lib/constants";

export const metadata: Metadata = {
  title: "About Us – Certified Zoho Partner Since 2019",
  description:
    "Zonic Tech Solutions is a certified Zoho Premium Partner based in India, serving 100+ clients across India, US, UK, UAE, and Australia. 5+ years of Zoho implementation and workflow automation experience.",
  keywords: buildKeywords(
    "About Zonic Tech Solutions",
    "Zoho Premium Partner India",
    "Zoho certified consultants",
    "CRM consulting firm India",
    "Zoho implementation team"
  ),
  alternates: {
    canonical: buildCanonical("/about")
  },
  openGraph: {
    title: "About Zonic Tech Solutions – Certified Zoho Partner Since 2019",
    description:
      "5+ years helping businesses automate with Zoho. 100+ clients across India, US, UK, UAE, and Australia.",
    url: `${SITE_URL}/about`,
    images: [
      {
        url: `${SITE_URL}/herosection.png`,
        width: 1200,
        height: 630,
        alt: "Zonic Tech Solutions team"
      }
    ]
  },
  twitter: {
    title: "About Zonic Tech Solutions – Certified Zoho Partner",
    description:
      "5+ years of Zoho implementation experience. 100+ clients globally.",
    images: [`${SITE_URL}/herosection.png`]
  }
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
