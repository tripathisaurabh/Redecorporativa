import type { Metadata } from "next";
import { buildCanonical, buildKeywords } from "../../lib/seo";
import { SITE_URL } from "../../lib/constants";
import CaseStudiesHub from "../../components/sections/CaseStudiesHub";

export const metadata: Metadata = {
  title: "Zoho Implementation Case Studies – Real Business Results",
  description:
    "See how Redecorporativa helped e-commerce, automobile, and EV businesses achieve measurable outcomes with Zoho CRM and workflow automation. Real projects, real numbers.",
  keywords: buildKeywords(
    "Zoho CRM case studies",
    "Zoho implementation results",
    "Zoho CRM success stories India",
    "CRM automation results",
    "Zoho business automation case study",
    "Zoho partner success stories"
  ),
  alternates: {
    canonical: buildCanonical("/case-studies")
  },
  openGraph: {
    title: "Case Studies | Redecorporativa",
    description:
      "Explore real-world implementation stories and measurable outcomes from Zoho consulting projects.",
    url: `${SITE_URL}/case-studies`,
    images: [{ url: `${SITE_URL}/hero.png`, width: 1200, height: 630, alt: "Redecorporativa Case Studies" }]
  },
  twitter: {
    title: "Case Studies | Redecorporativa",
    description:
      "Explore real-world implementation stories and measurable outcomes from Zoho consulting projects.",
    images: [`${SITE_URL}/hero.png`]
  }
};

export default function CaseStudiesPage() {
  return <CaseStudiesHub />;
}
