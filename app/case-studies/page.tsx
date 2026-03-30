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
    title: "Case Studies",
    description:
      "Explore real-world implementation stories and measurable outcomes from Zoho consulting projects.",
    url: `${SITE_URL}/case-studies`
  },
  twitter: {
    title: "Case Studies",
    description:
      "Explore real-world implementation stories and measurable outcomes from Zoho consulting projects."
  }
};

export default function CaseStudiesPage() {
  return <CaseStudiesHub />;
}
