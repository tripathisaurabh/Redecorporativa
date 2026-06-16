import type { Metadata } from "next";
import ComparisonPage from "../../components/sections/ComparisonPage";
import { getComparisonBySlug } from "../../lib/comparisons";
import { buildCanonical, buildKeywords } from "../../lib/seo";

const data = getComparisonBySlug("zoho-vs-hubspot")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.description,
  keywords: buildKeywords(...data.keywords),
  alternates: { canonical: buildCanonical("/zoho-vs-hubspot") },
  openGraph: {
    title: data.heading,
    description: data.description,
    url: buildCanonical("/zoho-vs-hubspot"),
    type: "website"
  }
};

export default function ZohoVsHubspotPage() {
  return <ComparisonPage data={data} />;
}
