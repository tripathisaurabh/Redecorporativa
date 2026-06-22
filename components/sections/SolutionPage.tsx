import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { SITE_NAME, SITE_URL } from "../../lib/constants";
import type { CreatorSolution } from "../../lib/creatorSolutions";

export default function SolutionPage({ data }: { data: CreatorSolution }) {
  const pageUrl = `${SITE_URL}/zoho-creator/solutions/${data.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: `${data.name} app development on Zoho Creator`,
    name: data.heading,
    description: data.description,
    url: pageUrl,
    provider: { "@type": "ProfessionalService", name: SITE_NAME, url: SITE_URL },
    areaServed: ["IN", "US", "GB", "AE", "AU"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Zoho Creator", item: `${SITE_URL}/zoho-creator` },
      { "@type": "ListItem", position: 3, name: "Solutions", item: `${SITE_URL}/zoho-creator/solutions` },
      { "@type": "ListItem", position: 4, name: data.name, item: pageUrl }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-b from-[#eef6ff] to-[#e2ecf8] py-14 md:py-20">
        <Container>
          <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
            <Link href="/zoho-creator" className="font-semibold text-indigo-600 hover:underline">Zoho Creator</Link>
            <span>/</span>
            <Link href="/zoho-creator/solutions" className="font-semibold text-indigo-600 hover:underline">Solutions</Link>
            <span>/</span>
            <span className="text-slate-600">{data.name}</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="w-fit rounded-md bg-[#1d74bb] px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white">
                Zoho Creator Solution · {data.category}
              </p>
              <h1 className="mt-5 text-3xl font-semibold tracking-tight text-[#1d2f69] md:text-5xl">{data.heading}</h1>
              <p className="mt-5 max-w-xl text-lg text-slate-700">{data.intro}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button href="/book-us" className="bg-[#1d2f69] px-8 py-3 text-base hover:bg-[#13224e] focus-visible:ring-[#1d2f69]">
                  Book a Free Consultation
                </Button>
                <Button href="/contact" variant="outline" className="px-8 py-3 text-base">
                  Talk to a Developer
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                <Image
                  src={data.heroImage}
                  alt={data.heroAlt}
                  width={560}
                  height={420}
                  className="h-auto w-full max-w-[460px] rounded-xl object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d2f69] md:text-4xl">Why build it on Zoho Creator</h2>
          <div className="mt-4 h-1 w-24 bg-sky-500" />
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-slate-700">{data.overview}</p>
        </Container>
      </section>

      {/* Features */}
      <section className="bg-slate-50 py-14 md:py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d2f69] md:text-4xl">What it does</h2>
          <div className="mt-4 h-1 w-24 bg-sky-500" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {data.features.map((f) => (
              <article key={f.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-[#1d2f69]">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Benefits */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d2f69] md:text-4xl">The payoff</h2>
          <div className="mt-4 h-1 w-24 bg-sky-500" />
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {data.benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sky-100 text-sky-600">
                  <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none">
                    <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-sm text-slate-800">{b}</span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-semibold tracking-tight text-[#1d2f69] md:text-4xl">Frequently asked questions</h2>
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
            Build your {data.name.toLowerCase()} app on Zoho Creator
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Tell us how your process works and we&apos;ll map the fastest path to a working app — free consultation,
            no obligation.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/book-us" variant="light" className="px-8 py-3 text-base">Book a Free Consultation</Button>
            <Link href="/zoho-creator/solutions" className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white hover:bg-white/10">
              See all solutions
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
