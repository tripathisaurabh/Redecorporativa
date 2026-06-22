import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SolutionPage from "../../../../components/sections/SolutionPage";
import { creatorSolutions, getSolutionBySlug } from "../../../../lib/creatorSolutions";
import { buildCanonical, buildKeywords } from "../../../../lib/seo";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return creatorSolutions.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const s = getSolutionBySlug(params.slug);
  if (!s) return {};
  return {
    title: s.metaTitle,
    description: s.description,
    keywords: buildKeywords(...s.keywords),
    alternates: { canonical: buildCanonical(`/zoho-creator/solutions/${s.slug}`) },
    openGraph: {
      title: s.heading,
      description: s.description,
      url: buildCanonical(`/zoho-creator/solutions/${s.slug}`),
      type: "website"
    }
  };
}

export default function CreatorSolutionPage({ params }: Props) {
  const data = getSolutionBySlug(params.slug);
  if (!data) notFound();
  return <SolutionPage data={data} />;
}
