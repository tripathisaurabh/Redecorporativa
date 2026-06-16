import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { SITE_NAME, SITE_URL } from "../../lib/constants";
import type { Comparison } from "../../lib/comparisons";

export default function ComparisonPage({ data }: { data: Comparison }) {
  const pageUrl = `${SITE_URL}/${data.slug}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: data.heading, item: pageUrl }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#eef6ff] to-[#e2ecf8] py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Comparison</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">{data.heading}</h1>
            <p className="mt-4 text-lg text-slate-600">{data.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/book-us" className="px-8 py-3 text-base">
                Book a Free Consultation
              </Button>
              <Button href="/contact" variant="outline" className="px-8 py-3 text-base">
                Talk to a Consultant
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Verdict */}
      <section className="bg-white py-14 md:py-16">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl border border-indigo-100 bg-indigo-50/60 p-6 md:p-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-700">The short verdict</p>
            <p className="mt-3 text-lg leading-relaxed text-slate-800">{data.verdict}</p>
          </div>
        </Container>
      </section>

      {/* Comparison table */}
      <section className="bg-white pb-6 md:pb-10">
        <Container>
          <div className="mx-auto max-w-4xl overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="bg-slate-50">
                  <th className="px-4 py-3 font-semibold text-slate-900"></th>
                  <th className="px-4 py-3 font-semibold text-indigo-700">Zoho CRM</th>
                  <th className="px-4 py-3 font-semibold text-slate-700">{data.rival}</th>
                </tr>
              </thead>
              <tbody>
                {data.rows.map((row) => (
                  <tr key={row.criteria} className="border-t border-slate-100 align-top">
                    <td className="px-4 py-3 font-medium text-slate-900">{row.criteria}</td>
                    <td className="px-4 py-3 text-slate-700">{row.zoho}</td>
                    <td className="px-4 py-3 text-slate-600">{row.rival}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Why Zoho */}
      <section className="bg-slate-50 py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
              Why businesses choose Zoho over {data.rival}
            </h2>
            <div className="mt-4 h-1 w-24 bg-sky-500" />
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {data.whyZoho.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky-100 text-sky-600">
                    <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none">
                      <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm text-slate-800">{point}</span>
                </li>
              ))}
            </ul>
            {data.deepDiveHref && (
              <p className="mt-8 text-sm text-slate-600">
                <Link href={data.deepDiveHref} className="font-semibold text-indigo-600 hover:underline">
                  {data.deepDiveLabel ?? "Read the full comparison"} →
                </Link>
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* Migration CTA */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl rounded-2xl bg-[#0b1220] p-8 text-center text-white md:p-10">
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
              Thinking of switching from {data.rival}?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-300">
              As a certified Zoho partner, {SITE_NAME} handles the full migration — data, fields, and workflows —
              with zero data loss. Get a free assessment and a clear plan.
            </p>
            <div className="mt-6">
              <Button href="/book-us" variant="light" className="px-8 py-3 text-base">
                Get a Free Migration Assessment
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900">Frequently asked questions</h2>
            <div className="mt-4 h-1 w-24 bg-sky-500" />
            <div className="mt-8 space-y-4">
              {data.faqs.map((f) => (
                <div key={f.q} className="rounded-xl border border-slate-200 bg-white p-5">
                  <p className="font-semibold text-slate-900">{f.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
