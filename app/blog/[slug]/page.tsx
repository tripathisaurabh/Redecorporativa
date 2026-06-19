import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "../../../components/ui/Container";
import Button from "../../../components/ui/Button";
import { blogPosts, getBlogPostBySlug, type BlogBlock } from "../../../lib/blog";
import { buildCanonical, buildKeywords } from "../../../lib/seo";
import { SITE_NAME, SITE_URL } from "../../../lib/constants";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.description,
    keywords: buildKeywords(...post.keywords),
    alternates: { canonical: buildCanonical(`/blog/${post.slug}`) },
    openGraph: {
      title: post.title,
      description: post.description,
      url: buildCanonical(`/blog/${post.slug}`),
      type: "article"
    }
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}

function Block({ block }: { block: BlogBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-10 text-2xl font-semibold tracking-tight text-slate-900">{block.text}</h2>;
    case "p":
      return <p className="mt-4 text-base leading-relaxed text-slate-700">{block.text}</p>;
    case "ul":
      return (
        <ul className="mt-4 space-y-2">
          {block.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base text-slate-700">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "note":
      return (
        <p className="mt-5 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          {block.text}
        </p>
      );
    case "table":
      return (
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-slate-300">
                {block.head.map((h) => (
                  <th key={h} className="px-3 py-2 font-semibold text-slate-900">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-slate-100">
                  {row.map((cell, j) => (
                    <td key={j} className="px-3 py-2 text-slate-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return null;
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: url,
    url
  };

  const faqSchema =
    post.faqs && post.faqs.length
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a }
          }))
        }
      : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="bg-white py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex items-center gap-3 text-xs text-slate-500">
              <Link href="/blog" className="font-semibold text-indigo-600 hover:underline">
                ← Blog
              </Link>
              <span className="rounded-full bg-indigo-50 px-2.5 py-1 font-semibold text-indigo-700">
                {post.category}
              </span>
              <span>{post.readMins} min read</span>
              <span>· {formatDate(post.date)}</span>
            </div>

            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{post.title}</h1>
            <p className="mt-4 text-lg text-slate-600">{post.excerpt}</p>
            {post.relatedApp && (
              <Link
                href={post.relatedApp.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:underline"
              >
                Related service: {post.relatedApp.label} →
              </Link>
            )}

            <div className="mt-8 border-t border-slate-100 pt-2">
              {post.content.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>

            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Frequently asked questions</h2>
                <div className="mt-5 space-y-4">
                  {post.faqs.map((f) => (
                    <div key={f.q} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                      <p className="font-semibold text-slate-900">{f.q}</p>
                      <p className="mt-2 text-sm leading-relaxed text-slate-700">{f.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-[#0b1220] p-8 text-center text-white">
              <h2 className="text-2xl font-semibold tracking-tight">Want a clear quote for your setup?</h2>
              <p className="mx-auto mt-3 max-w-xl text-slate-300">
                Tell us your goals and we&apos;ll map the fastest, most cost-effective path on Zoho — with a free
                consultation and no obligation.
              </p>
              <div className="mt-6">
                <Button href="/book-us" variant="light" className="px-8 py-3 text-base">
                  Book a Free Consultation
                </Button>
              </div>
            </div>

            {/* Related */}
            {related.length > 0 && (
              <div className="mt-14">
                <h2 className="text-lg font-semibold text-slate-900">Keep reading</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {related.map((r) => (
                    <Link
                      key={r.slug}
                      href={`/blog/${r.slug}`}
                      className="group rounded-xl border border-slate-200 p-5 transition-colors hover:border-indigo-200 hover:bg-slate-50"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-indigo-600">{r.category}</p>
                      <p className="mt-2 font-semibold text-slate-900 group-hover:text-indigo-700">{r.title}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </article>
    </>
  );
}
