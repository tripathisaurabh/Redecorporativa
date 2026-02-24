import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import { caseStudies, getCaseStudyBySlug } from "../../../lib/caseStudies";
import { buildCanonical, buildKeywords } from "../../../lib/seo";
import { SITE_URL } from "../../../lib/constants";

type CaseStudyDetailPageProps = {
  params: { slug: string };
};

type InsightRow = {
  label: string;
  value: string;
};

function InsightCard({
  badge,
  title,
  description,
  rows
}: {
  badge: string;
  title: string;
  description: string;
  rows: InsightRow[];
}) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <span className="inline-flex rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-white">
        {badge}
      </span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[#1b2f67] md:text-4xl">{title}</h2>
      <p className="mt-3 text-base leading-relaxed text-slate-700 md:text-lg">{description}</p>
      <div className="mt-5 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-slate-50">
        {rows.map((row) => (
          <div key={`${row.label}-${row.value}`} className="grid gap-1 px-4 py-3 md:grid-cols-[150px_1fr] md:items-center">
            <p className="text-sm font-semibold text-slate-900">{row.label}</p>
            <p className="text-sm text-slate-700">{row.value}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

function VisualPanel({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-[280px] w-full md:h-[420px]">
        <Image src={src} alt={alt} fill className="object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
      </div>
    </div>
  );
}

const firstSentence = (text: string) => {
  const idx = text.indexOf(".");
  return idx === -1 ? text : text.slice(0, idx + 1);
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export function generateMetadata({ params }: CaseStudyDetailPageProps): Metadata {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
      keywords: buildKeywords("Case study"),
      robots: {
        index: false,
        follow: false
      }
    };
  }

  return {
    title: study.title,
    description: study.summary,
    keywords: buildKeywords(
      `${study.platform} case study`,
      `${study.industry} case study`,
      `${study.platform} implementation`,
      `${study.industry} automation`,
      "CRM implementation results"
    ),
    alternates: {
      canonical: buildCanonical(`/case-studies/${study.slug}`)
    },
    openGraph: {
      title: study.title,
      description: study.summary,
      url: `${SITE_URL}/case-studies/${study.slug}`
    },
    twitter: {
      title: study.title,
      description: study.summary
    }
  };
}

export default function CaseStudyDetailPage({ params }: CaseStudyDetailPageProps) {
  const study = getCaseStudyBySlug(params.slug);

  if (!study) {
    notFound();
  }

  const clientRows: InsightRow[] = [
    { label: "Client Type", value: `${study.industry} organization` },
    { label: "Platform", value: study.platform.toUpperCase() },
    { label: "Project Goal", value: "Operational clarity with measurable workflow outcomes" },
    { label: "Timeline", value: `Published ${study.publishDate}` }
  ];

  const challengeRows: InsightRow[] = [
    { label: "Core Issue", value: firstSentence(study.challenge) },
    { label: "Operational Risk", value: "Slow response cycles and fragmented process ownership" },
    { label: "Business Impact", value: "Lower efficiency in execution and delayed customer touchpoints" }
  ];

  const implementationRows: InsightRow[] = [
    { label: "Delivery Model", value: "Process mapping + workflow automation + reporting" },
    { label: "Primary Stack", value: study.platform.toUpperCase() },
    { label: "Key Result", value: study.outcomes[0] }
  ];

  const sectionImages = {
    clientProfile: study.sectionImages?.clientProfile ?? study.coverImage,
    challenge: study.sectionImages?.challenge ?? study.coverImage,
    implementation: study.sectionImages?.implementation ?? study.coverImage
  };

  return (
    <section className="bg-slate-50 py-14 md:py-20">
      <Container>
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-700 hover:text-indigo-800"
        >
          <span aria-hidden>←</span>
          Back to all case studies
        </Link>

        <div className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="relative min-h-[260px]">
              <Image
                src={study.coverImage}
                alt={study.title}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>
            <div className="p-7 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">{study.industry}</p>
              <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                {study.title}
              </h1>
              <p className="mt-4 text-base text-slate-700">{study.summary}</p>
              <p className="mt-5 text-sm text-slate-500">Published on {study.publishDate}</p>
            </div>
          </div>
        </div>

        <div className="mt-8 space-y-8">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <InsightCard
              badge={study.industry}
              title="Client Profile"
              description={study.clientProfile}
              rows={clientRows}
            />
            <VisualPanel src={sectionImages.clientProfile} alt={`${study.title} client profile visual`} />
          </div>

          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <VisualPanel src={sectionImages.challenge} alt={`${study.title} challenge visual`} />
            </div>
            <div className="order-1 lg:order-2">
              <InsightCard
                badge="Challenge"
                title="Operational Challenges"
                description={study.challenge}
                rows={challengeRows}
              />
            </div>
          </div>

          <div className="grid items-center gap-6 lg:grid-cols-2">
            <InsightCard
              badge="Implementation"
              title="Execution Approach"
              description={study.implementation}
              rows={implementationRows}
            />
            <VisualPanel src={sectionImages.implementation} alt={`${study.title} implementation visual`} />
          </div>
        </div>

        <article className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-slate-900">Outcomes</h2>
          <ul className="mt-4 grid gap-3 md:grid-cols-3">
            {study.outcomes.map((metric) => (
              <li key={metric} className="rounded-xl bg-indigo-50 px-4 py-3 text-sm font-semibold text-indigo-700">
                {metric}
              </li>
            ))}
          </ul>
        </article>

        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Need a similar implementation roadmap?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600">
            Book a strategy consultation and get an execution-first plan tailored to your sales, operations,
            and reporting requirements.
          </p>
          <div className="mt-6 flex justify-center">
            <Button href="/book-us">Book Consultation</Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
