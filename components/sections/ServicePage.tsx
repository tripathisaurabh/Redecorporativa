import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Accordion from "../ui/Accordion";
import { SITE_NAME, SITE_URL } from "../../lib/constants";

export type ServiceFaq = {
  id: string;
  title: string;
  content: string;
};

export type ServicePageData = {
  /** URL path without leading slash, e.g. "zoho-crm" */
  slug: string;
  /** Small chip above the H1 */
  eyebrow: string;
  /** Page H1 — the main keyword target */
  heading: string;
  /** Sub-headline under the H1 */
  intro: string;
  /** Hero/feature image path in /public */
  image: string;
  /** Alt text for the image */
  imageAlt: string;
  /** Short paragraph for the "Why it matters" intro band */
  overview: string;
  /** Problems this service solves */
  painPoints: string[];
  /** Outcomes the client gets */
  outcomes: string[];
  /** Capability cards — what we actually deliver */
  capabilities: { title: string; description: string }[];
  /** FAQ items (also emitted as FAQPage structured data) */
  faqs: ServiceFaq[];
  /** Schema.org service type, e.g. "Zoho CRM Implementation" */
  serviceType: string;
  /** Short meta-style description used inside Service schema */
  serviceDescription: string;
};

const pricingModels = [
  {
    name: "Hourly Consulting",
    blurb:
      "Pay only for the time you use. Ideal for audits, quick fixes, and ad-hoc expert help with no long-term commitment.",
    highlight: "Flexible"
  },
  {
    name: "Packaged Hours",
    blurb:
      "Pre-purchase blocks of 50, 100, 200, or 400 hours at a reduced rate. Spend them across setup, automation, training, and support as you need.",
    highlight: "Best value"
  },
  {
    name: "Project-Based",
    blurb:
      "Fixed scope and fixed price for a defined outcome. Best when you know exactly what you want delivered, with a clear timeline.",
    highlight: "Defined outcome"
  }
];

export default function ServicePage({ data }: { data: ServicePageData }) {
  const pageUrl = `${SITE_URL}/${data.slug}`;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.content
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: data.serviceType,
    name: data.heading,
    description: data.serviceDescription,
    url: pageUrl,
    provider: {
      "@type": "ProfessionalService",
      name: SITE_NAME,
      url: SITE_URL
    },
    areaServed: ["IN", "US", "GB", "AE", "AU"]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: data.eyebrow, item: pageUrl }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#d9eaf6] py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="w-fit rounded-md bg-[#1d74bb] px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white">
                {data.eyebrow}
              </p>
              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-[#1d2f69] md:text-5xl">
                {data.heading}
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-800 md:text-xl">{data.intro}</p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Button
                  href="/book-us"
                  className="bg-[#1d2f69] px-8 py-3 text-base hover:bg-[#13224e] focus-visible:ring-[#1d2f69]"
                >
                  Book a Free Consultation
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  className="px-8 py-3 text-base"
                >
                  Talk to a Consultant
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
                {["Free consultation", "Quote in 24 hours", "No lock-in"].map((perk) => (
                  <span key={perk} className="inline-flex items-center gap-1.5">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-[#1d74bb] text-white">
                      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none">
                        <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {perk}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <Image
                  src={data.image}
                  alt={data.imageAlt}
                  width={420}
                  height={360}
                  className="h-auto w-full max-w-[320px] object-contain"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust strip */}
      <section className="border-y border-slate-200 bg-white py-6">
        <Container>
          <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
            <div className="inline-flex items-center rounded-lg bg-white">
              <Image
                src="/partnership/zoho-authorized-partner.png"
                alt="Zoho Authorized Partner badge"
                width={358}
                height={100}
                className="h-auto w-[170px]"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-center">
              {[
                { num: "100+", label: "Clients served" },
                { num: "Since 2019", label: "Zoho expertise" },
                { num: "55+", label: "Zoho products" },
                { num: "5", label: "Countries served" }
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-xl font-semibold text-[#1d2f69]">{stat.num}</p>
                  <p className="text-xs uppercase tracking-wide text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="bg-slate-100 py-16 md:py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d2f69] md:text-4xl">
            Why it matters
          </h2>
          <div className="mt-4 h-1 w-24 bg-sky-500" />
          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-slate-800">{data.overview}</p>
        </Container>
      </section>

      {/* Pain points + outcomes */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">Common Bottlenecks</h2>
              <div className="mt-3 h-1 w-20 bg-sky-500" />
              <ul className="mt-6 space-y-3 text-lg text-slate-900">
                {data.painPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-slate-900">What You Get</h2>
              <div className="mt-3 h-1 w-20 bg-sky-500" />
              <ul className="mt-6 space-y-3 text-lg text-slate-900">
                {data.outcomes.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-sky-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="bg-[#172a66] py-16 md:py-20">
        <Container>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-white md:text-4xl">
            What We Deliver
          </h2>
          <div className="mx-auto mt-4 h-1 w-32 bg-sky-500" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {data.capabilities.map((cap) => (
              <article
                key={cap.title}
                className="rounded-2xl bg-white/95 p-6 shadow-sm ring-1 ring-slate-100/40"
              >
                <h3 className="text-xl font-semibold text-[#1d2f69]">{cap.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-700">{cap.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing / engagement models */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <h2 className="text-center text-3xl font-semibold tracking-tight text-[#1d2f69] md:text-4xl">
            Flexible Ways to Work With Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-slate-700">
            Choose the engagement model that fits your scope and budget. Not sure which? We&apos;ll
            recommend the right one on a free discovery call.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingModels.map((model) => (
              <div
                key={model.name}
                className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm"
              >
                <span className="w-fit rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-700">
                  {model.highlight}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-[#1d2f69]">{model.name}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-slate-700">{model.blurb}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button
              href="/book-us"
              className="bg-[#1d2f69] px-8 py-3 text-base hover:bg-[#13224e] focus-visible:ring-[#1d2f69]"
            >
              Get a Quote
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-slate-100 py-16 md:py-24">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-[#1d2f69] md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-4 h-1 w-24 bg-sky-500" />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <Accordion items={data.faqs} />
            <div className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-sky-700">
                Still have questions?
              </p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">Book a Free Consultation</h3>
              <p className="mt-3 text-sm text-slate-600">
                Get a tailored plan with clear scope, timeline, and pricing.
              </p>
              <div className="mt-6">
                <Button href="/book-us">Book a Free Consultation</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-[#172a66] py-16 md:py-20">
        <Container className="text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Ready to get started with a certified Zoho partner?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">
            Tell us where you are today and we&apos;ll map the fastest path to a working setup.
          </p>
          <div className="mt-8">
            <Button href="/book-us" variant="light" className="px-8 py-3 text-base">
              Talk to a Specialist
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
