import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StatePage from "../../../components/sections/StatePage";
import { statePages, getStateBySlug } from "../../../lib/states";
import { buildCanonical, buildKeywords } from "../../../lib/seo";

type Props = { params: { state: string } };

export function generateStaticParams() {
  return statePages.map((s) => ({ state: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const s = getStateBySlug(params.state);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.description,
    keywords: buildKeywords(...s.keywords),
    alternates: { canonical: buildCanonical(`/zoho-partner/${s.slug}`) },
    openGraph: {
      title: s.heading,
      description: s.description,
      url: buildCanonical(`/zoho-partner/${s.slug}`),
      type: "website"
    }
  };
}

export default function ZohoPartnerStatePage({ params }: Props) {
  const data = getStateBySlug(params.state);
  if (!data) notFound();
  return <StatePage data={data} />;
}
