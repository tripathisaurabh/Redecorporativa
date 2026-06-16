import type { Metadata } from "next";
import ComparisonPage from "../../components/sections/ComparisonPage";
import { getComparisonBySlug } from "../../lib/comparisons";
import { buildCanonical, buildKeywords } from "../../lib/seo";

const data = getComparisonBySlug("zoho-vs-salesforce")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.description,
  keywords: buildKeywords(...data.keywords),
  alternates: { canonical: buildCanonical("/zoho-vs-salesforce") },
  openGraph: {
    title: data.heading,
    description: data.description,
    url: buildCanonical("/zoho-vs-salesforce"),
    type: "website"
  }
};

export default function ZohoVsSalesforcePage() {
  return <ComparisonPage data={data} />;
}
