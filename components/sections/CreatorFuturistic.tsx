import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Accordion from "../ui/Accordion";
import { SITE_NAME, SITE_URL } from "../../lib/constants";
import { blogPosts } from "../../lib/blog";

const capabilities = [
  { title: "Custom App Development", body: "Forms, workflows, reports, and dashboards built on Zoho Creator for your exact process — fast, with low-code." },
  { title: "Deluge Scripting", body: "Custom business logic, validations, and automations in Deluge for behaviour standard modules can't do." },
  { title: "Custom ERP & Internal Tools", body: "Order management, field service, project tracking, and bespoke ERPs tailored to how your business runs." },
  { title: "Native Mobile Apps", body: "Field-ready mobile access with offline-friendly forms and live data capture, on iOS and Android." },
  { title: "Integrations & APIs", body: "Connect Creator apps to Zoho CRM, Books, and third-party systems via APIs and Zoho Flow." },
  { title: "Migration from Spreadsheets", body: "Replace fragile spreadsheets and legacy tools with a structured Creator app — your data moved safely." }
];

const bottlenecks = [
  "Critical processes run on fragile, shared spreadsheets",
  "Off-the-shelf tools force your process into their mould",
  "Custom software quotes are expensive and slow to deliver",
  "Field teams have no proper mobile tool",
  "Data is stuck in apps that don't talk to your Zoho stack"
];

const outcomes = [
  "An app built around your exact process, not a template",
  "Web and mobile access for office and field teams",
  "Automated workflows, approvals, and notifications",
  "Integration with Zoho CRM, Books, and external systems",
  "A maintainable app on a secure, enterprise-grade platform"
];

const pricingModels = [
  { name: "Hourly Consulting", blurb: "Pay only for the time you use — ideal for audits, quick builds, and ad-hoc expert help.", highlight: "Flexible" },
  { name: "Packaged Hours", blurb: "Pre-purchase 50, 100, 200, or 400 hours at a reduced rate, spent across build and support.", highlight: "Best value" },
  { name: "Project-Based", blurb: "Fixed scope and fixed price for a defined app, with a clear timeline and milestones.", highlight: "Defined outcome" }
];

const faqs = [
  { id: "creator-what", title: "What is Zoho Creator and when should we use it?", content: "Zoho Creator is a low-code platform for building custom business apps. It's the right choice when your process is too specific for off-the-shelf software but you don't want the cost and timeline of fully custom development." },
  { id: "creator-erp", title: "Can you build a custom ERP or internal tool on Creator?", content: "Yes. We build order management systems, field-service apps, project trackers, inventory tools, and full custom ERPs on Zoho Creator, tailored to your workflow and integrated with your other Zoho apps." },
  { id: "creator-integrate", title: "Can a Creator app connect to Zoho CRM, Books, and other tools?", content: "Yes. We integrate Creator apps with Zoho CRM, Books, Inventory, and third-party systems using APIs and Zoho Flow, so your custom app is part of one connected stack." },
  { id: "creator-mobile", title: "Do Creator apps work on mobile?", content: "Yes. Zoho Creator apps come with web and native mobile access, ideal for field teams capturing data on the go. We design the forms and views for mobile use." },
  { id: "creator-cost", title: "How much does Zoho Creator development cost?", content: "We offer flexible hourly consulting, discounted packaged-hour blocks (50, 100, 200, or 400 hours), and fixed-price project engagements. Custom apps are usually scoped as projects — we share a clear quote after understanding your requirements." },
  { id: "creator-time", title: "How long does it take to build a custom app?", content: "A focused single-process app can be built in 2–4 weeks. Larger multi-module apps or custom ERPs take longer and are delivered in phases. We share a milestone plan before starting." }
];

const pageUrl = `${SITE_URL}/zoho-creator`;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Zoho Creator Development",
  name: "Zoho Creator Developer & Custom App Partner",
  description:
    "Custom low-code app and ERP development on Zoho Creator with Deluge, including integrations and migration, by a certified Zoho partner.",
  url: pageUrl,
  provider: { "@type": "ProfessionalService", name: SITE_NAME, url: SITE_URL },
  areaServed: ["IN", "US", "GB", "AE", "AU"]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.title, acceptedAnswer: { "@type": "Answer", text: f.content } }))
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Zoho Creator", item: pageUrl }
  ]
};

export default function CreatorFuturistic() {
  const relatedPosts = blogPosts.filter((p) => p.relatedApp?.href === "/zoho-creator").slice(0, 3);

  return (
    <div className="bg-[#070b16] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* aurora glow */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 55% at 78% 8%, rgba(34,211,238,0.20) 0%, transparent 60%), radial-gradient(50% 50% at 8% 92%, rgba(167,139,250,0.22) 0%, transparent 60%)"
          }}
        />
        {/* grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
            maskImage: "radial-gradient(circle at 50% 30%, black, transparent 75%)",
            WebkitMaskImage: "radial-gradient(circle at 50% 30%, black, transparent 75%)"
          }}
        />
        <Container className="relative py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-cyan-200">
                <Image src="/zoho-apps/creator.png" alt="Zoho Creator logo" width={20} height={20} className="h-5 w-5" />
                Zoho Creator · Low-Code Development
              </div>
              <h1 className="mt-6 max-w-2xl text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
                Zoho Creator Developer &amp;{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">
                  Custom App Partner
                </span>
              </h1>
              <p className="mt-4 text-base font-medium text-cyan-200">Custom apps, built at low-code speed.</p>
              <p className="mt-5 max-w-xl text-lg text-slate-300">
                When off-the-shelf software doesn&apos;t fit, we engineer it on Zoho Creator — forms, workflows,
                approvals, dashboards, and native mobile apps, wired into your Zoho stack. Certified Zoho partner
                serving India, USA, UK, UAE &amp; Australia.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button
                  href="/book-us"
                  className="bg-gradient-to-r from-cyan-400 to-violet-400 px-8 py-3 text-base text-[#070b16] hover:from-cyan-300 hover:to-violet-300 focus-visible:ring-cyan-300"
                >
                  Book a Free Consultation
                </Button>
                <Button href="/contact" variant="ghost" className="px-8 py-3 text-base">
                  Talk to a Developer
                </Button>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-slate-300">
                {["No-code & Deluge", "Native mobile", "Built to maintain"].map((perk) => (
                  <span key={perk} className="inline-flex items-center gap-1.5">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-cyan-400/20 text-cyan-300">
                      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none">
                        <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {perk}
                  </span>
                ))}
              </div>
            </div>

            {/* Futuristic low-code builder mockup */}
            <div className="relative">
              <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-[0_0_60px_-15px_rgba(34,211,238,0.35)] backdrop-blur">
                <div className="flex items-center gap-2 pb-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                  <span className="ml-2 font-mono text-[11px] text-slate-400">app_builder.deluge</span>
                </div>
                <div className="grid grid-cols-[1fr_1.1fr] gap-3">
                  {/* element palette */}
                  <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-cyan-300">Elements</p>
                    <div className="space-y-2">
                      {["Form", "Workflow", "Approval", "Report", "Mobile view"].map((el) => (
                        <div key={el} className="flex items-center gap-2 rounded-md bg-white/[0.05] px-2 py-1.5 text-xs text-slate-300">
                          <span className="h-2 w-2 rounded-sm bg-gradient-to-br from-cyan-400 to-violet-400" />
                          {el}
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* canvas */}
                  <div className="relative rounded-xl border border-white/10 bg-[#0a1120] p-3">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-violet-300">Canvas</p>
                    <div className="space-y-2.5">
                      <div className="rounded-md border border-cyan-400/30 bg-cyan-400/5 px-2.5 py-2">
                        <div className="h-1.5 w-2/3 rounded bg-cyan-300/40" />
                        <div className="mt-1.5 h-1.5 w-1/2 rounded bg-white/15" />
                      </div>
                      <div className="ml-4 rounded-md border border-violet-400/30 bg-violet-400/5 px-2.5 py-2">
                        <div className="h-1.5 w-3/4 rounded bg-violet-300/40" />
                      </div>
                      <div className="ml-8 rounded-md border border-emerald-400/30 bg-emerald-400/5 px-2.5 py-2">
                        <div className="h-1.5 w-1/2 rounded bg-emerald-300/40" />
                      </div>
                    </div>
                    <div className="mt-3 flex items-center justify-between rounded-md bg-white/[0.04] px-2.5 py-1.5 font-mono text-[10px] text-slate-400">
                      <span>deploy →</span>
                      <span className="text-emerald-300">● live</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why it matters */}
      <section className="relative border-t border-white/5 py-16 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Software shaped around{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent">your process</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-300">
              Every business has processes no standard app covers — and they usually end up in fragile spreadsheets
              or expensive bespoke software. Zoho Creator lets us build exactly the app you need with low-code
              speed: forms, workflows, approvals, dashboards, and mobile access on a secure platform. We design
              around your real process, write the logic in Deluge, connect it to Zoho CRM, Books, and third-party
              systems, and ship something your team can actually use.
            </p>
          </div>
        </Container>
      </section>

      {/* Capabilities */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">What We Build</h2>
            <div className="mx-auto mt-4 h-1 w-28 rounded bg-gradient-to-r from-cyan-400 to-violet-400" />
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <article
                key={c.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition-all duration-150 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:shadow-[0_0_40px_-12px_rgba(34,211,238,0.45)]"
              >
                <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-300">{c.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Bottlenecks vs outcomes */}
      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7">
              <h3 className="text-xl font-semibold text-slate-200">Common bottlenecks</h3>
              <ul className="mt-5 space-y-3">
                {bottlenecks.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-slate-300">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400/70" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.04] p-7">
              <h3 className="text-xl font-semibold text-white">What you get</h3>
              <ul className="mt-5 space-y-3">
                {outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-3 text-slate-200">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-cyan-400 to-violet-400 text-[#070b16]">
                      <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none">
                        <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing (light) */}
      <section className="bg-white py-16 text-slate-900 md:py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-[#0b1220] md:text-4xl">Flexible Ways to Work With Us</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Choose the engagement model that fits your scope and budget. Not sure? We&apos;ll recommend the right
              one on a free discovery call.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingModels.map((m) => (
              <div key={m.name} className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <span className="w-fit rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
                  {m.highlight}
                </span>
                <h3 className="mt-4 text-2xl font-semibold text-[#0b1220]">{m.name}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-slate-700">{m.blurb}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/book-us" className="bg-[#0b1220] px-8 py-3 text-base hover:bg-[#16213a] focus-visible:ring-slate-700">
              Get a Quote
            </Button>
          </div>
        </Container>
      </section>

      {/* Related guides (light) */}
      {relatedPosts.length > 0 && (
        <section className="bg-slate-50 py-16 text-slate-900 md:py-20">
          <Container>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0b1220] md:text-4xl">Related guides</h2>
            <div className="mt-4 h-1 w-24 bg-cyan-500" />
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {relatedPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:border-cyan-200 hover:shadow-md"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-700">{post.category}</p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-[#0b1220] group-hover:text-cyan-700">{post.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                  <span className="mt-3 inline-block text-sm font-semibold text-cyan-600">Read →</span>
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/blog" className="text-sm font-semibold text-cyan-700 hover:underline">View all guides →</Link>
            </div>
          </Container>
        </section>
      )}

      {/* FAQ (light) */}
      <section className="bg-white py-16 text-slate-900 md:py-24">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-[#0b1220] md:text-4xl">Frequently Asked Questions</h2>
          <div className="mt-4 h-1 w-24 bg-cyan-500" />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <Accordion items={faqs} />
            <div className="h-fit rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-700">Still have questions?</p>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">Book a Free Consultation</h3>
              <p className="mt-3 text-sm text-slate-600">Get a tailored Zoho Creator plan with clear scope, timeline, and pricing.</p>
              <div className="mt-6">
                <Button href="/book-us">Book a Free Consultation</Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 80% at 50% 0%, rgba(34,211,238,0.18) 0%, transparent 60%)" }}
        />
        <Container className="relative text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
            Ready to build your custom app?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Tell us the process you want to digitise and we&apos;ll map the fastest path to a working Zoho Creator app.
          </p>
          <div className="mt-8">
            <Button
              href="/book-us"
              className="bg-gradient-to-r from-cyan-400 to-violet-400 px-8 py-3 text-base text-[#070b16] hover:from-cyan-300 hover:to-violet-300 focus-visible:ring-cyan-300"
            >
              Talk to a Specialist
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
