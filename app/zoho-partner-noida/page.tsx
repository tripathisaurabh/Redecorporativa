import type { Metadata } from "next";
import LocationPage from "../../components/sections/LocationPage";
import { getLocationBySlug } from "../../lib/locations";
import { buildCanonical, buildKeywords } from "../../lib/seo";

const data = getLocationBySlug("zoho-partner-noida")!;

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.description,
  keywords: buildKeywords(...data.keywords),
  alternates: { canonical: buildCanonical("/zoho-partner-noida") },
  openGraph: {
    title: data.heading,
    description: data.description,
    url: buildCanonical("/zoho-partner-noida"),
    type: "website"
  }
};

export default function ZohoPartnerNoidaPage() {
  return <LocationPage data={data} />;
}
