import type { Metadata } from "next";
import CreatorFuturistic from "../../components/sections/CreatorFuturistic";
import { buildCanonical, buildKeywords } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Zoho Creator Developer & Custom App Partner in India | Low-Code Development",
  description:
    "Certified Zoho Creator developers in India. Build custom low-code apps, internal tools, and ERPs with Deluge, integrated into your Zoho stack. Flexible hourly, packaged-hour, and project pricing.",
  keywords: buildKeywords(
    "Zoho Creator developer India",
    "Zoho Creator development",
    "Zoho Creator custom app",
    "Zoho Creator consultant",
    "low-code development India",
    "custom business app Zoho",
    "Deluge developer India"
  ),
  alternates: { canonical: buildCanonical("/zoho-creator") },
  openGraph: {
    title: "Zoho Creator Developer & Custom App Partner in India",
    description:
      "Build custom low-code apps and internal tools on Zoho Creator with certified developers.",
    url: buildCanonical("/zoho-creator"),
    type: "website"
  }
};

export default function ZohoCreatorPage() {
  return <CreatorFuturistic />;
}
