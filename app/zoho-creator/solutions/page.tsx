import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import { creatorSolutions } from "../../../lib/creatorSolutions";
import { buildCanonical, buildKeywords } from "../../../lib/seo";
import { SITE_NAME, SITE_URL } from "../../../lib/constants";

export const metadata: Metadata = {
  title: "Zoho Creator Solutions | Custom Low-Code Apps for Your Business",
  description:
    "Ready-to-build Zoho Creator solutions — asset, visitor, construction, education, procurement, vendor, property, leave management and MRP — custom-built by a certified Zoho partner.",
  keywords: buildKeywords(
    "Zoho Creator solutions",
    "Zoho Creator apps",
    "low-code business apps",
    "custom Zoho Creator app",
    "Zoho Creator use cases"
  ),
  alternates: { canonical: buildCanonical("/zoho-creator/solutions") },
  openGraph: {
    title: "Zoho Creator Solutions | Custom Low-Code Apps",
    description: "Custom Zoho Creator apps for asset, visitor, construction, education, procurement and more.",
    url: buildCanonical("/zoho-creator/solutions"),
    type: "website"
  }
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Zoho Creator Solutions",
  itemListElement: creatorSolutions.map((s, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: s.name,
    url: `${SITE_URL}/zoho-creator/solutions/${s.slug}`
  }))
};

export default function SolutionsHubPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <section className="bg-gradient-to-b from-[#eef6ff] to-[#e2ecf8] py-16 md:py-20">
        <Container>
          <nav className="mb-6 text-xs text-slate-500">
            <Link href="/zoho-creator" className="font-semibold text-indigo-600 hover:underline">Zoho Creator</Link>
            <span className="px-1.5">/</span>
            <span className="text-slate-600">Solutions</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Zoho Creator Solutions</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Custom low-code apps for the way you work
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              These are some of the most-requested apps we build on Zoho Creator. Each is fully customised to your
              process — and connected to the rest of your Zoho stack. Don&apos;t see yours? We build bespoke apps too.
            </p>
            <div className="mt-7">
              <Button href="/book-us" className="px-8 py-3 text-base">Discuss your requirement</Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {creatorSolutions.map((s) => (
              <Link
                key={s.slug}
                href={`/zoho-creator/solutions/${s.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
              >
                <div className="flex h-44 items-center justify-center overflow-hidden bg-slate-50 p-4">
                  <Image
                    src={s.thumb}
                    alt={`${s.name} on Zoho Creator`}
                    width={320}
                    height={200}
                    className="h-full w-auto object-contain"
                    unoptimized
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{s.category}</p>
                  <h2 className="mt-2 text-lg font-semibold leading-snug text-slate-900 group-hover:text-indigo-700">
                    {s.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.intro}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-indigo-600">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-14 md:py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Need something custom?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            {SITE_NAME} builds bespoke apps on Zoho Creator for any process. Bring us your workflow and we&apos;ll scope it.
          </p>
          <div className="mt-6">
            <Button href="/book-us" className="px-8 py-3 text-base">Book a Free Consultation</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
