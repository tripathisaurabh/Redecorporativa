import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/ui/Container";
import { blogPosts } from "../../lib/blog";
import { buildCanonical, buildKeywords } from "../../lib/seo";
import { SITE_NAME, SITE_URL } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Zoho Blog – Pricing, Comparisons & Implementation Guides | India, USA & UK",
  description:
    "Practical Zoho guides for decision-makers — implementation costs, Zoho CRM vs Salesforce, pricing breakdowns, and how to get the most from Zoho. From a certified Zoho partner.",
  keywords: buildKeywords(
    "Zoho blog",
    "Zoho CRM pricing India",
    "Zoho One cost",
    "Zoho CRM vs Salesforce",
    "Zoho implementation guide"
  ),
  alternates: { canonical: buildCanonical("/blog") },
  openGraph: {
    title: "Zoho Guides & Insights | Zonic Tech Solutions",
    description:
      "Pricing, comparisons, and implementation guides for Zoho CRM, Zoho One, and the wider Zoho suite.",
    url: `${SITE_URL}/blog`,
    type: "website"
  }
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: `${SITE_NAME} — Zoho Guides & Insights`,
  url: `${SITE_URL}/blog`,
  blogPost: blogPosts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    datePublished: p.date,
    url: `${SITE_URL}/blog/${p.slug}`
  }))
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export default function BlogIndexPage() {
  const posts = [...blogPosts].sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <section className="bg-gradient-to-b from-[#eef6ff] to-[#e2ecf8] py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Zoho Guides &amp; Insights</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              Clear answers on Zoho cost, fit, and setup
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Straight-talking guides from a certified Zoho partner — pricing, comparisons, and what
              implementation actually involves. No fluff, no sales spin.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:border-indigo-200 hover:shadow-md"
              >
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <span className="rounded-full bg-indigo-50 px-2.5 py-1 font-semibold text-indigo-700">
                    {post.category}
                  </span>
                  <span>{post.readMins} min read</span>
                </div>
                <h2 className="mt-4 text-lg font-semibold leading-snug text-slate-900 group-hover:text-indigo-700">
                  {post.title}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-slate-400">
                  <span>{formatDate(post.date)}</span>
                  <span className="font-semibold text-indigo-600 group-hover:translate-x-0.5">Read →</span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
