import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";
import Button from "../ui/Button";
import { SITE_NAME, SITE_URL } from "../../lib/constants";

const tags = ["Zoho Creator", "Facility Management", "Deluge Automation", "System Design"];

const facts = [
  { b: "Jood FM", s: "Client" },
  { b: "Creator · Desk · Analytics", s: "Zoho platform" },
  { b: "6 weeks", s: "Concept to go-live" },
  { b: "Custom build", s: "Design & development" }
];

const before = [
  "No reliable list of what equipment exists or where it sits",
  "Servicing happened only when someone remembered",
  "Fault reports lost in chat threads",
  "No evidence a job was actually done",
  "Spare parts ran out mid-repair",
  "Management performance was guesswork"
];
const after = [
  "Searchable asset register, located to the room",
  "Schedules generate their own jobs automatically, every day",
  "Every request becomes a tracked ticket with an owner and a clock",
  "Completed checklists, timestamps and technician sign-off",
  "Stock falls as parts are consumed; alerts fire before you run dry",
  "Live dashboards: SLA compliance, downtime, technician output"
];

const stack = [
  { b: "Zoho Creator", s: "The CAFM system — custom built", icon: "/zoho-apps/creator.png" },
  { b: "Zoho Desk", s: "Fault tickets & SLA timers", icon: "/zoho-apps/desk.png" },
  { b: "Zoho Analytics", s: "Dashboards & weekly reports", icon: "/zoho-apps/analytics.png" },
  { b: "Zoho WorkDrive", s: "O&M manuals & contracts", icon: "/zoho-apps/workdrive.png" },
  { b: "Zoho Flow", s: "Desk ↔ Creator, Outlook", icon: "/zoho-apps/flow.png" },
  { b: "Deluge", s: "The automation layer", icon: "/zoho-apps/deluge.png" }
];

const features = [
  { n: "01", h: "Asset register & 4-level locations", p: "Every asset registered with a unique auto-generated ID and located precisely: building → floor → zone → room, so a fault report points at an exact place." },
  { n: "02", h: "Preventive maintenance engine", p: "Define the rule once — “every generator, monthly” — and a daily routine raises the job, attaches the right checklist, and books the next occurrence, indefinitely." },
  { n: "03", h: "Predictive triggers", p: "Service jobs raised when an asset's running hours cross a threshold, independent of the calendar — so machines are serviced on real use, not just dates." },
  { n: "04", h: "Work orders & checklists", p: "One record type for preventive, corrective and predictive jobs, with a governed status lifecycle and reusable checklists copied into every job." },
  { n: "05", h: "Spare parts & stock ledger", p: "Parts and stock live inside Creator. Logging a part on the work order moves the balance immediately — no separate inventory system to reconcile." },
  { n: "06", h: "Ticketing, SLA & dashboards", p: "Faults become Desk tickets with response and resolution clocks; Analytics turns Creator and Desk data into live management dashboards." }
];

const tech = [
  { b: "Self-scheduling PPM", p: "A daily Deluge routine finds every schedule that's due, raises the work order with lead time, and copies the checklist in — built to be safe to re-run, so a retry never double-raises a job." },
  { b: "Enforced completion gate", p: "A job can't be marked complete while a mandatory check is unanswered or the technician hasn't signed off — the checklist becomes real evidence, not an optional formality." },
  { b: "Ledger-based stock", p: "Part balances are recomputed by summing an append-only movement ledger, never incremented in place — so the figure can't silently drift, and every change is auditable." },
  { b: "Role-scoped access", p: "Four roles — administrator, supervisor, technician, storekeeper — with technicians seeing only their own assigned work, enforced at the data layer." }
];

const buildStats = [
  { n: "17", s: "Custom Creator forms" },
  { n: "7", s: "Deluge automation routines" },
  { n: "4", s: "Role-based access profiles" }
];

const outcomes = [
  { n: "100%", s: "of completed jobs closed with a checklist, timestamp and technician sign-off — an audit trail by design" },
  { n: "4-level", s: "location precision, tracing every asset from building down to the exact room" },
  { n: "Daily", s: "automatic work-order generation — scheduled maintenance no longer depends on anyone remembering" }
];

const pageUrl = `${SITE_URL}/case-studies/jood-fm-cafm-facility-management`;

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "CAFM Platform for Jood FM — Zoho Creator Case Study",
  description:
    "A computer-aided facility management platform built on Zoho Creator for Jood FM: asset register, preventive maintenance engine, work orders, spare-parts ledger and management analytics.",
  author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
  datePublished: "2026-08-04",
  mainEntityOfPage: pageUrl,
  url: pageUrl
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Case Studies", item: `${SITE_URL}/case-studies` },
    { "@type": "ListItem", position: 3, name: "CAFM Platform for Jood FM", item: pageUrl }
  ]
};

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e33f3f]">{children}</p>;
}

function AppNode({ icon, title, sub, note }: { icon: string; title: string; sub: string; note?: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 text-center shadow-sm">
      <Image src={icon} alt={`${title} icon`} width={36} height={36} className="mx-auto h-9 w-9 object-contain" />
      <p className="mt-2 text-sm font-semibold text-[#12161b]">{title}</p>
      <p className="text-xs text-slate-500">{sub}</p>
      {note ? <p className="mt-1 text-[11px] leading-snug text-slate-400">{note}</p> : null}
    </div>
  );
}

function FlowArrow({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center text-slate-400">
      <span className="text-[11px] font-medium uppercase tracking-wide">{label}</span>
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path d="M12 4v16M6 14l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

function ArchitectureDiagram() {
  const modules = [
    "Asset & Location Register (4-level)",
    "Work Orders & Checklists",
    "Spare Parts & Stock Ledger",
    "PPM & Predictive Schedules"
  ];
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 md:p-8">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">System architecture</p>

      {/* Inputs */}
      <div className="mx-auto mt-6 grid max-w-2xl gap-4 sm:grid-cols-2">
        <AppNode icon="/zoho-apps/desk.png" title="Zoho Desk" sub="Fault tickets & SLA timers" note="Requests raised by staff" />
        <AppNode icon="/zoho-apps/deluge.png" title="Deluge routines" sub="7 automation routines" note="Daily self-scheduling PPM" />
      </div>

      <div className="my-3 flex items-start justify-center gap-16">
        <FlowArrow label="via Zoho Flow" />
        <FlowArrow label="generates jobs" />
      </div>

      {/* Core */}
      <div className="mx-auto max-w-3xl rounded-2xl border-2 border-[#1d74bb]/30 bg-[#1d74bb]/[0.05] p-5">
        <div className="flex items-center justify-center gap-3">
          <Image src="/zoho-apps/creator.png" alt="Zoho Creator icon" width={34} height={34} className="h-8 w-8 object-contain" />
          <p className="text-base font-semibold text-[#12161b]">
            Zoho Creator <span className="font-normal text-slate-500">— the CAFM core</span>
          </p>
        </div>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <div key={m} className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-center text-xs font-medium text-slate-700">
              {m}
            </div>
          ))}
        </div>
      </div>

      <div className="my-3 flex items-start justify-center gap-16">
        <FlowArrow label="live data" />
        <FlowArrow label="documents" />
      </div>

      {/* Outputs */}
      <div className="mx-auto grid max-w-2xl gap-4 sm:grid-cols-2">
        <AppNode icon="/zoho-apps/analytics.png" title="Zoho Analytics" sub="Dashboards & weekly reports" note="SLA, downtime, technician KPIs" />
        <AppNode icon="/zoho-apps/workdrive.png" title="Zoho WorkDrive" sub="O&M manuals & contracts" note="Attached to assets & jobs" />
      </div>

      {/* Connective tissue */}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 rounded-xl border border-slate-200 bg-white px-4 py-3 text-center text-[11px] text-slate-500">
        <Image src="/zoho-apps/flow.png" alt="Zoho Flow icon" width={16} height={16} className="h-4 w-4 object-contain" />
        <span>
          <strong className="font-semibold text-slate-700">Zoho Flow</strong> connects Desk ↔ Creator and pushes
          notifications to Outlook · 4 roles (administrator, supervisor, technician, storekeeper) enforced at the data
          layer
        </span>
      </div>
    </div>
  );
}

function ShotPlaceholder({ label, hint, tall = false }: { label: string; hint: string; tall?: boolean }) {
  return (
    <div
      className={`flex ${tall ? "min-h-[420px]" : "min-h-[320px]"} flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 p-8 text-center`}
    >
      <div className="mb-3 grid h-12 w-12 place-items-center rounded-full bg-[#1d74bb]/10 text-[#1d74bb]">
        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="8.5" cy="9" r="1.5" fill="currentColor" />
          <path d="M4 16l4.5-4.5 3.5 3.5 3-3L20 15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <p className="text-sm font-semibold text-slate-700">{label}</p>
      <p className="mt-1 max-w-md text-xs text-slate-500">{hint}</p>
    </div>
  );
}

export default function JoodFmCaseStudy() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-b from-[#eef6ff] to-white py-14 md:py-20">
        <Container>
          <div className="mb-8 flex items-center justify-between text-xs text-slate-500">
            <Link href="/case-studies" className="font-semibold text-indigo-600 hover:underline">← Case studies</Link>
            <span>Case study · 2026</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <span key={t} className="rounded-full bg-[#1d74bb]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#1f4e7a]">
                {t}
              </span>
            ))}
          </div>
          <h1 className="mt-6 max-w-[17ch] text-4xl font-semibold tracking-tight text-[#12161b] md:text-5xl">
            A single system for every asset, job and part at Jood FM.
          </h1>
          <p className="mt-6 max-w-[62ch] text-lg leading-relaxed text-slate-600">
            A computer-aided facility management (CAFM) platform built on Zoho — replacing WhatsApp threads, paper
            checklists and scattered spreadsheets with one connected system where equipment is registered once,
            servicing schedules itself, and every completed job leaves an audit trail.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-4">
            {facts.map((f) => (
              <div key={f.s} className="bg-white p-5">
                <p className="text-sm font-semibold text-[#12161b]">{f.b}</p>
                <p className="mt-1 text-[11px] uppercase tracking-wide text-slate-400">{f.s}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Hero screenshot */}
      <section className="border-b border-slate-200 bg-white py-10 md:py-12">
        <Container>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <Image
              src="/CaseStudy/jood-dashboard.png"
              alt="Jood FM CAFM operations dashboard — work order health, PPM compliance, assets and reports"
              width={1800}
              height={999}
              className="h-auto w-full"
              unoptimized
            />
          </div>
        </Container>
      </section>

      {/* Overview */}
      <section className="border-b border-slate-200 bg-white py-14 md:py-20">
        <Container>
          <Kicker>Overview</Kicker>
          <h2 className="mt-3 max-w-[20ch] text-3xl font-semibold tracking-tight text-[#12161b] md:text-4xl">What the project was</h2>
          <div className="mt-6 max-w-[72ch] space-y-4 text-slate-600">
            <p>Jood FM manages facilities where hundreds of assets — chillers, pumps, lifts, fire systems — have to be kept running and demonstrably maintained. The maintenance operation was held together by memory and messages: no reliable record of what equipment existed, servicing done when someone remembered, and no evidence a job was actually completed when an auditor asked.</p>
            <p>We designed and built a custom CAFM platform on Zoho that turns that operation into a single, auditable system. <strong className="font-semibold text-[#12161b]">Assets are registered once and located to the exact room. Maintenance schedules generate their own work orders. Faults become tracked tickets with a clock. Spare-parts stock moves the moment a part is used.</strong> Management sees it all on live dashboards.</p>
            <p>The build spanned the whole project — requirements and solution design, the data model, the custom Zoho Creator application, the Deluge automation layer, and the configuration of Desk, Analytics, WorkDrive and Flow around it.</p>
          </div>
        </Container>
      </section>

      {/* Challenge — before/after */}
      <section className="border-b border-slate-200 bg-slate-50 py-14 md:py-20">
        <Container>
          <Kicker>The challenge</Kicker>
          <h2 className="mt-3 max-w-[20ch] text-3xl font-semibold tracking-tight text-[#12161b] md:text-4xl">The operation ran on memory, not records</h2>
          <p className="mt-4 max-w-[70ch] text-slate-600">
            The failure mode wasn't dramatic — it was quiet. A chiller's quarterly service slips because nobody was
            tracking it, and it fails during peak season. An auditor asks when the fire pump was last serviced, and
            there's no answer.
          </p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2">
            <div className="bg-white p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#e33f3f]">Before</h3>
              <ul className="mt-4 space-y-2">
                {before.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-slate-600"><span className="text-[#e33f3f]">•</span>{b}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#009e4f]">After go-live</h3>
              <ul className="mt-4 space-y-2">
                {after.map((a) => (
                  <li key={a} className="flex gap-2 text-sm text-slate-600"><span className="text-[#009e4f]">•</span>{a}</li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Approach + stack */}
      <section className="border-b border-slate-200 bg-white py-14 md:py-20">
        <Container>
          <Kicker>The approach</Kicker>
          <h2 className="mt-3 max-w-[22ch] text-3xl font-semibold tracking-tight text-[#12161b] md:text-4xl">One connected system, not five disconnected ones</h2>
          <p className="mt-6 max-w-[72ch] text-slate-600">
            Rather than build everything from scratch, we used each Zoho application for what it's already good at and
            custom-built only the parts with no ready-made equivalent. The count was deliberately kept low — the fewer
            systems in play, the fewer places data can drift out of step.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {stack.map((c) => (
              <div key={c.b} className="flex min-w-[180px] items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
                <Image src={c.icon} alt={`${c.b} icon`} width={32} height={32} className="h-8 w-8 shrink-0 object-contain" />
                <div>
                  <p className="text-sm font-semibold text-[#12161b]">{c.b}</p>
                  <p className="text-xs text-slate-400">{c.s}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <ArchitectureDiagram />
          </div>
        </Container>
      </section>

      {/* Features */}
      <section className="border-b border-slate-200 bg-slate-50 py-14 md:py-20">
        <Container>
          <Kicker>What we built</Kicker>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#12161b] md:text-4xl">The capabilities delivered</h2>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 md:grid-cols-2">
            {features.map((f) => (
              <div key={f.n} className="bg-white p-6">
                <p className="text-xs font-bold tracking-wide text-[#1d74bb]">{f.n}</p>
                <h3 className="mt-2 text-lg font-semibold text-[#12161b]">{f.h}</h3>
                <p className="mt-2 text-sm text-slate-600">{f.p}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Feature screenshots */}
      <section className="border-b border-slate-200 bg-white py-14 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            <ShotPlaceholder label="Add: the Asset Register list view" hint="Assets grouped by building, with IDs, categories and status visible." />
            <ShotPlaceholder label="Add: a Work Order with its checklist" hint="Shows checklist execution, parts used and technician sign-off — the evidence story." />
            <ShotPlaceholder label="Add: the Analytics dashboard" hint="SLA compliance, downtime, PPM compliance and technician KPIs." />
          </div>
        </Container>
      </section>

      {/* Technical */}
      <section className="border-b border-slate-200 bg-white py-14 md:py-20">
        <Container>
          <Kicker>Under the hood</Kicker>
          <h2 className="mt-3 max-w-[22ch] text-3xl font-semibold tracking-tight text-[#12161b] md:text-4xl">The engineering that makes it trustworthy</h2>
          <p className="mt-4 max-w-[70ch] text-slate-600">
            A maintenance system is only worth having if its records can be trusted. The automation layer was built
            defensively around that idea.
          </p>
          <div className="mt-8 grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200">
            {tech.map((t) => (
              <div key={t.b} className="grid gap-3 bg-white p-6 md:grid-cols-[200px_1fr]">
                <p className="text-base font-semibold text-[#12161b]">{t.b}</p>
                <p className="text-sm text-slate-600">{t.p}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {buildStats.map((s) => (
              <div key={s.s} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-3xl font-bold text-[#1d74bb]">{s.n}</p>
                <p className="mt-2 text-sm text-slate-600">{s.s}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Outcomes + quote */}
      <section className="border-b border-slate-200 bg-slate-50 py-14 md:py-20">
        <Container>
          <Kicker>Outcomes</Kicker>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#12161b] md:text-4xl">The impact for Jood FM</h2>
          <p className="mt-4 max-w-[70ch] text-slate-600">
            The system replaced an operation that ran on memory with one that runs on records — visible, scheduled and
            auditable.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {outcomes.map((o) => (
              <div key={o.n} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-2xl font-bold text-[#1d74bb]">{o.n}</p>
                <p className="mt-3 text-sm text-slate-600">{o.s}</p>
              </div>
            ))}
          </div>
          <blockquote className="mt-8 rounded-r-2xl border-l-4 border-[#f2a93b] bg-white p-6 md:p-8">
            <p className="text-lg font-semibold italic leading-relaxed text-[#12161b]">
              &ldquo;For the first time we can open a single screen and see every asset, what's due, and what's already
              been done. Servicing that used to slip through the cracks now schedules itself — and when an auditor asks
              when something was last maintained, the record is already there.&rdquo;
            </p>
            <cite className="mt-3 block text-sm not-italic text-slate-400">— Facilities Manager, Jood FM</cite>
          </blockquote>
        </Container>
      </section>

      {/* CTA */}
      <section className="bg-[#0b1220] py-14 text-white md:py-20">
        <Container className="text-center">
          <h2 className="mx-auto max-w-[24ch] text-3xl font-semibold tracking-tight md:text-4xl">
            Want a custom system like this on Zoho?
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-lg text-slate-300">
            We design and build custom business applications on Zoho — from facility management to CRM and operations
            platforms. Tell us your process and we&apos;ll scope it.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/book-us" variant="light" className="px-8 py-3 text-base">Book a Free Consultation</Button>
            <Link href="/zoho-creator" className="inline-flex items-center justify-center rounded-full border border-white/40 px-8 py-3 text-base font-semibold text-white hover:bg-white/10">
              Explore Zoho Creator
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
