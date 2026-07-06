import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { SITE_NAME, SITE_URL, SITE_PHONE, SITE_EMAIL } from "../../lib/constants";
import type { StatePageData } from "../../lib/states";

const services = [
  { label: "Zoho CRM", href: "/zoho-crm" },
  { label: "Zoho One", href: "/zoho-one" },
  { label: "Zoho Books", href: "/zoho-books" },
  { label: "Zoho People", href: "/zoho-people" },
  { label: "Zoho Creator", href: "/zoho-creator" },
  { label: "Business Process Automation", href: "/business-process-automation" }
];

export default function StatePage({ data }: { data: StatePageData }) {
  const pageUrl = `${SITE_URL}/zoho-partner/${data.slug}`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE_NAME} — Zoho Partner in ${data.state}`,
    url: pageUrl,
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    address: { "@type": "PostalAddress", addressLocality: "Noida", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
    areaServed: { "@type": "State", name: data.state },
    description: data.description
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Zoho Partner in India", item: `${SITE_URL}/zoho-partner` },
      { "@type": "ListItem", position: 3, name: data.state, item: pageUrl }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#eef6ff] to-[#e2ecf8] py-16 md:py-20">
        <Container>
          <nav className="mb-6 text-xs text-slate-500">
            <Link href="/zoho-partner" className="font-semibold text-indigo-600 hover:underline">Zoho Partner in India</Link>
            <span className="px-1.5">/</span>
            <span className="text-slate-600">{data.state}</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Certified Zoho Partner · {data.state}</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">{data.heading}</h1>
            <p className="mt-4 text-lg text-slate-600">{data.intro}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/book-us" className="px-8 py-3 text-base">Book a Free Consultation</Button>
              <Button href="/contact" variant="outline" className="px-8 py-3 text-base">Talk to a Consultant</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Cities */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Cities we serve in {data.state}</h2>
          <div className="mt-4 h-1 w-24 bg-sky-500" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {data.cities.map((c) => (
              <Link
                key={c.slug}
                href={`/${c.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-colors hover:border-indigo-200 hover:bg-slate-50"
              >
                <p className="font-semibold text-slate-900 group-hover:text-indigo-700">Zoho Partner in {c.name}</p>
                <p className="mt-1 text-sm text-indigo-600">Explore {c.name} →</p>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-sm text-slate-600">
            Based elsewhere in {data.state}? We serve the whole state through our remote-first model —{" "}
            <Link href="/book-us" className="font-semibold text-indigo-600 hover:underline">book a free consultation</Link>.
          </p>
        </Container>
      </section>

      {/* Why + industries */}
      <section className="bg-slate-50 py-14 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Why {data.state} businesses work with us
              </h2>
              <div className="mt-4 h-1 w-24 bg-sky-500" />
              <p className="mt-6 text-lg leading-relaxed text-slate-700">{data.angle}</p>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Industries we serve in {data.state}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {data.industries.map((ind) => (
                  <div key={ind} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-sky-100 text-sky-600">
                      <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none">
                        <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-slate-800">{ind}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Zoho services in {data.state}</h2>
          <div className="mt-4 h-1 w-24 bg-sky-500" />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link key={s.label} href={s.href} className="group rounded-2xl border border-slate-200 bg-white p-5 transition-colors hover:border-indigo-200 hover:bg-slate-50">
                <p className="font-semibold text-slate-900 group-hover:text-indigo-700">{s.label}</p>
                <p className="mt-1 text-sm text-indigo-600">Learn more →</p>
              </Link>
            ))}
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

      {/* CTA */}
      <section className="bg-[#0b1220] py-14 text-white md:py-20">
        <Container className="text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to get Zoho working for your {data.state} business?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Book a free consultation with a certified Zoho partner — clear scope, timeline, and pricing.
          </p>
          <div className="mt-8">
            <Button href="/book-us" variant="light" className="px-8 py-3 text-base">Book a Free Consultation</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
