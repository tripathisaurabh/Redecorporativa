import type { Metadata } from "next";
import LocationPage from "../../components/sections/LocationPage";
import { getLocationBySlug } from "../../lib/locations";
import { buildCanonical, buildKeywords } from "../../lib/seo";

const data = getLocationBySlug("zoho-partner-delhi-ncr")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.description,
  keywords: buildKeywords(...data.keywords),
  alternates: { canonical: buildCanonical("/zoho-partner-delhi-ncr") },
  openGraph: {
    title: data.heading,
    description: data.description,
    url: buildCanonical("/zoho-partner-delhi-ncr"),
    type: "website"
  }
};

export default function ZohoPartnerDelhiNcrPage() {
  return <LocationPage data={data} />;
}
