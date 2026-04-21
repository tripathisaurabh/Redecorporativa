import type { Metadata } from "next";
import { buildCanonical, buildKeywords } from "../../lib/seo";
import { SITE_URL } from "../../lib/constants";
import CaseStudiesHub from "../../components/sections/CaseStudiesHub";

export const metadata: Metadata = {
  title: "Case Studies",
  description:
    "Explore real-world implementation stories and measurable outcomes from Zoho consulting projects.",
  keywords: buildKeywords(
    "Zoho case studies",
    "CRM implementation case studies",
    "Business automation success stories",
    "Growth operations case studies"
  ),
  alternates: {
    canonical: buildCanonical("/case-studies")
  },
  openGraph: {
    title: "Case Studies | Zonic Tech Solutions",
    description:
      "Explore real-world implementation stories and measurable outcomes from Zoho consulting projects.",
    url: `${SITE_URL}/case-studies`,
    images: [{ url: `${SITE_URL}/hero.png`, width: 1200, height: 630, alt: "Zonic Tech Solutions Case Studies" }]
  },
  twitter: {
    title: "Case Studies | Zonic Tech Solutions",
    description:
      "Explore real-world implementation stories and measurable outcomes from Zoho consulting projects.",
    images: [`${SITE_URL}/hero.png`]
  }
};

export default function CaseStudiesPage() {
  return <CaseStudiesHub />;
}
