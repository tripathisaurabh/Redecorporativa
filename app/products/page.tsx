import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { buildCanonical, buildKeywords } from "../../lib/seo";
import { SITE_NAME, SITE_URL } from "../../lib/constants";

type ProductSection = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  background: string;
  painPoints: string[];
  solves: string[];
  reverse?: boolean;
};

const products: ProductSection[] = [
  {
    slug: "zoho-one",
    title: "Zoho One",
    description:
      "A unified business suite for teams that want one connected system across sales, finance, HR, and operations.",
    icon: "/produts/Zoho-One-.webp",
    background: "#efe8c5",
    painPoints: [
      "Teams keep switching between disconnected apps",
      "Operational data lives in separate systems",
      "Cross-functional workflows break at handoffs"
    ],
    solves: [
      "Brings core workflows into a single operating layer",
      "Creates shared data visibility across departments",
      "Cuts overhead from duplicate tools and licenses"
    ]
  },
  {
    slug: "zoho-finance-plus",
    title: "Zoho Finance Plus",
    description:
      "A connected finance suite that aligns accounting, billing, inventory, and compliance in one workflow.",
    icon: "/produts/financeplus-512.png",
    background: "#c5efc9",
    painPoints: [
      "Month-end close takes too long due to manual reconciliation",
      "Finance and inventory updates do not stay in sync",
      "Cash visibility is delayed for decision-makers"
    ],
    solves: [
      "Unifies finance data across receivables, payables, and stock",
      "Automates tax logic and recurring compliance work",
      "Gives real-time dashboards for financial control"
    ],
    reverse: true
  },
  {
    slug: "zoho-people-plus",
    title: "Zoho People Plus",
    description:
      "An HR platform that combines hiring, onboarding, attendance, and performance into one consistent employee journey.",
    icon: "/produts/zoho-people-plus-e1755504630286.webp",
    background: "#f3dbc9",
    painPoints: [
      "Onboarding tasks are spread across email and sheets",
      "Employee records are duplicated in multiple tools",
      "Leave and performance cycles are hard to track"
    ],
    solves: [
      "Standardizes onboarding and lifecycle workflows",
      "Centralizes employee profiles and policy tracking",
      "Improves HR visibility with structured review cycles"
    ]
  },
  {
    slug: "zoho-crm",
    title: "Zoho CRM",
    description:
      "A sales CRM built for predictable pipelines, faster follow-ups, and better visibility from lead to close.",
    icon: "/produts/Zoho-CRM.webp",
    background: "#c8dcf5",
    painPoints: [
      "Pipeline stages are used inconsistently by teams",
      "Leads go cold because follow-up rules are unclear",
      "Customer interactions are fragmented across channels"
    ],
    solves: [
      "Builds a complete customer timeline in one view",
      "Automates lead capture, routing, and reminders",
      "Connects messaging, calls, and email activity"
    ],
    reverse: true
  },
  {
    slug: "zoho-crm-plus",
    title: "Zoho CRM Plus",
    description:
      "An all-in-one customer operations platform for sales, marketing, and support teams that need shared context.",
    icon: "/produts/crm-plus-512.png",
    background: "#e6c7ef",
    painPoints: [
      "Teams use different systems and lose shared context",
      "Customers receive mixed communication across channels",
      "Issue resolution slows down because ownership is unclear"
    ],
    solves: [
      "Centralizes customer touchpoints and lifecycle data",
      "Improves collaboration with role-based workflows",
      "Speeds up response times with unified queues"
    ]
  },
  {
    slug: "zoho-creator",
    title: "Zoho Creator",
    description:
      "A low-code platform to build custom apps when off-the-shelf tools do not match your process.",
    icon: "/produts/Zoho-Creator.png",
    background: "#efe8c5",
    painPoints: [
      "Small process changes require long dev cycles",
      "Manual approvals and updates delay execution",
      "Existing tools cannot model custom workflows"
    ],
    solves: [
      "Enables fast app delivery with controlled low-code setup",
      "Automates repetitive ops tasks and handoffs",
      "Connects custom apps to Zoho and external systems"
    ],
    reverse: true
  },
  {
    slug: "zoho-books",
    title: "Zoho Books",
    description:
      "Accounting software for growing businesses that need clean invoicing, tax handling, and financial reporting.",
    icon: "/produts/zoho-books-logo.webp",
    background: "#c5efc9",
    painPoints: [
      "Manual entries create avoidable reporting errors",
      "Tax workflows are repetitive and time-consuming",
      "Cash flow forecasting lacks current numbers"
    ],
    solves: [
      "Automates billing, receipts, and expense capture",
      "Simplifies tax calculations and filing workflows",
      "Generates reliable real-time finance reports"
    ]
  },
  {
    slug: "zoho-marketing-automation",
    title: "Zoho Marketing Automation",
    description:
      "A marketing automation stack for campaign orchestration, audience journeys, and performance optimization.",
    icon: "/produts/Zoho-marketing-automation.png",
    background: "#f3dbc9",
    painPoints: [
      "User behavior is hard to track across touchpoints",
      "Nurture journeys are generic instead of segment-based",
      "Attribution and ROI reporting are incomplete"
    ],
    solves: [
      "Scores leads dynamically based on activity signals",
      "Supports segmented journeys and personalized messaging",
      "Improves attribution clarity and campaign decisions"
    ],
    reverse: true
  }
];

const processSteps = [
  {
    icon: "/produts/research.svg",
    title: "Discovery Call",
    description:
      "We map your current setup, constraints, and business goals."
  },
  {
    icon: "/produts/design-1.svg",
    title: "Solution Blueprint",
    description:
      "Our team drafts an implementation plan with architecture and milestones."
  },
  {
    icon: "/produts/remote.png.webp",
    title: "Specialist Allocation",
    description:
      "A domain specialist is assigned to drive execution end-to-end."
  },
  {
    icon: "/produts/implementation-Business-Central.svg",
    title: "Build & Integration",
    description:
      "We configure apps, integrate data flows, and deploy automations."
  },
  {
    icon: "/produts/Contract-conditions.png",
    title: "Go-Live Support",
    description:
      "We validate results, train teams, and support adoption after launch."
  }
];

const areaServed = [
  { "@type": "Country", name: "India" },
  { "@type": "Country", name: "United States" },
  { "@type": "Country", name: "United Kingdom" },
  { "@type": "Country", name: "United Arab Emirates" },
  { "@type": "Country", name: "Australia" }
];

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Zoho Products Consulting and Implementation",
  provider: {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL
  },
  areaServed,
  serviceType: "Zoho Products Implementation",
  description:
    "Expert Zoho product implementation covering Zoho One, CRM, Finance Plus, People Plus, Books, Creator, Marketing Automation, and CRM Plus — tailored to your business workflows.",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/book-us`
  }
};

export const metadata: Metadata = {
  title: "Zoho Products Implementation – CRM, One, Finance, HR & More | India",
  description:
    "Certified Zoho partner offering expert implementation of Zoho One, Zoho CRM, Zoho Finance Plus, Zoho People Plus, Zoho Books, Zoho Creator, and Zoho Marketing Automation. Serving businesses in India, USA, UK, UAE & Australia.",
  keywords: buildKeywords(
    "Zoho products implementation India",
    "Zoho One setup service",
    "Zoho CRM implementation company",
    "Zoho Finance Plus consultant",
    "Zoho Books setup India",
    "Zoho Books GST setup",
    "Zoho People Plus HR consultant",
    "Zoho Creator low-code developer",
    "Zoho Marketing Automation consultant",
    "Zoho CRM Plus setup"
  ),
  alternates: {
    canonical: buildCanonical("/products")
  },
  openGraph: {
    title: "Zoho Products & Implementation Services | Zonic Tech Solutions",
    description:
      "Expert Zoho implementation: CRM, Finance Plus, People Plus, Books, Creator, and more. Certified Zoho Partner.",
    url: `${SITE_URL}/products`,
    images: [{ url: `${SITE_URL}/hero.png`, width: 1200, height: 630, alt: "Zoho Products Implementation" }]
  },
  twitter: {
    title: "Zoho Products & Implementation | Zonic Tech Solutions",
    description:
      "Expert Zoho implementation: CRM, Finance Plus, People Plus, Books, Creator, and more.",
    images: [`${SITE_URL}/hero.png`]
  }
};

function ProductBlock({ item }: { item: ProductSection }) {
  return (
    <section id={item.slug} className="scroll-mt-24" style={{ backgroundColor: item.background }}>
      <Container className="py-16 md:py-20">
        <div
          className={`grid items-center gap-10 lg:grid-cols-2 ${
            item.reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <div className="mb-6 w-fit rounded-2xl bg-white/50 p-4 ring-1 ring-slate-300/50">
              <Image
                src={item.icon}
                alt={`${item.title} icon`}
                width={150}
                height={150}
                className="h-[130px] w-[130px] object-contain"
                unoptimized
              />
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-slate-950">{item.title}</h2>
            <div className="mt-4 h-1 w-14 bg-sky-500" />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-900">{item.description}</p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-slate-900">Common Bottlenecks</h3>
            <div className="mt-3 h-1 w-20 bg-sky-500" />
            <ul className="mt-6 space-y-3 text-lg text-slate-900">
              {item.painPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-3xl font-semibold text-slate-900">
              Delivery Outcomes With {item.title}
            </h3>
            <div className="mt-3 h-1 w-20 bg-sky-500" />
            <ul className="mt-6 space-y-3 text-lg text-slate-900">
              {item.solves.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-slate-900" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/book-us" className="bg-sky-500 hover:bg-sky-600 focus-visible:ring-sky-500">
                Start With {item.title}
              </Button>
              <Button href="/book-us" className="bg-[#1d2f69] hover:bg-[#13224e] focus-visible:ring-[#1d2f69]">
                Speak With Consultant
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default function ProductsPage() {
  return (
    <>
      <Script
        id="products-schema"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section className="bg-[#d9eaf6] py-20 md:py-24">
        <Container className="text-center">
          <p className="mx-auto w-fit rounded-md bg-[#1d74bb] px-5 py-2 text-sm font-semibold uppercase tracking-wide text-white">
            Product Suite
          </p>
          <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-semibold tracking-tight text-[#1d2f69] md:text-6xl">
            Build A Connected Zoho Stack For Growth Operations
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-800 md:text-xl">
            Explore implementation-ready Zoho products designed to remove bottlenecks and
            improve execution across your teams.
          </p>
          <div className="mt-10">
            <Button
              href="/book-us"
              className="bg-[#1d2f69] px-8 py-3 text-base hover:bg-[#13224e] focus-visible:ring-[#1d2f69]"
            >
              Book Strategy Call
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-slate-100 py-16 md:py-20">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-semibold tracking-tight text-[#1d2f69]">What You Can Standardize</h2>
              <div className="mt-4 h-1 w-24 bg-sky-500" />
              <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-800">
                We help teams select and implement the right Zoho products based on business priorities.
                From sales and customer operations to finance and HR, each solution is configured for
                measurable outcomes, not just feature adoption.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                <Image
                  src="produts/Zoho-one.svg"
                  alt="Zoho product ecosystem illustration"
                  width={558}
                  height={480}
                  className="h-auto w-full max-w-[420px] rounded-xl"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {products.map((item) => (
        <ProductBlock key={item.slug} item={item} />
      ))}

      <section className="bg-[#172a66] py-16 md:py-20">
        <Container>
          <h2 className="text-center text-4xl font-semibold tracking-tight text-white md:text-5xl">
            How We Roll Out Your Zoho Stack
          </h2>
          <div className="mx-auto mt-4 h-1 w-40 bg-sky-500" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-2xl bg-white/95 p-6 shadow-sm ring-1 ring-slate-100/40"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-sky-100">
                  <Image
                    src={step.icon}
                    alt={`${step.title} icon`}
                    width={36}
                    height={36}
                    className="h-9 w-9 object-contain"
                  />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-[#1d2f69]">{step.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-700">{step.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
            <div className="grid items-center gap-0 lg:grid-cols-2">
              <div className="p-8 md:p-10">
                <h2 className="text-4xl font-semibold tracking-tight text-[#1d2f69] md:text-5xl">
                  Ready To Launch With a Zoho Team With 5 Years of Experience?
                </h2>
                <p className="mt-4 text-lg text-slate-700">
                  Get a practical rollout plan with scope, timeline, and integration priorities.
                </p>
                <div className="mt-8">
                  <Button
                    href="/book-us"
                    className="bg-[#1d2f69] px-8 py-3 text-base hover:bg-[#13224e] focus-visible:ring-[#1d2f69]"
                  >
                    Talk To A Specialist
                  </Button>
                </div>
              </div>
              <div className="h-full min-h-[300px] w-full">
                <Image
                  src="/produts/bsannercontact.png"
                  alt="Book a Zoho consultation"
                  width={900}
                  height={560}
                  className="h-full w-full object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
