"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

type SolutionTab = {
  key: string;
  label: string;
  slug: string;
  heading: string;
  painPoints: string[];
  solutionText: string;
  image: string;
  tools: string[];
};

const tabs: SolutionTab[] = [
  {
    key: "sales",
    label: "Sales",
    slug: "zoho-crm",
    heading: "Sales Pipeline Challenges",
    painPoints: [
      "Leads are not assigned quickly to the right reps",
      "Follow-ups are inconsistent across the team",
      "Pipeline visibility is unclear for leadership"
    ],
    solutionText:
      "We set up CRM workflows, lead routing, and automated follow-ups so your sales team can close deals faster with cleaner forecasting.",
    image: "/solution/Sales.png",
    tools: ["CRM", "SalesInbox", "Analytics"]
  },
  {
    key: "marketing",
    label: "Marketing",
    slug: "zoho-marketing-automation",
    heading: "Marketing Execution Gaps",
    painPoints: [
      "Campaigns are launched without clear tracking",
      "Lead nurturing journeys are fragmented",
      "ROI reporting is delayed and incomplete"
    ],
    solutionText:
      "We implement campaign automation, scoring logic, and source attribution to help your team generate better quality leads and improve conversion rates.",
    image: "/solution/Marketing.png",
    tools: ["Marketing Automation", "Campaigns", "Journeys"]
  },
  {
    key: "customer-service",
    label: "Customer Service",
    slug: "zoho-crm-plus",
    heading: "Customer Support Gaps",
    painPoints: [
      "Tickets are split across email, chat, and calls",
      "No SLA tracking or structured escalation",
      "Customer history is not visible in one place"
    ],
    solutionText:
      "We unify support channels, configure SLA workflows, and centralize customer context so service teams can resolve issues faster with higher CSAT.",
    image: "/solution/Customer.png",
    tools: ["Desk", "Assist", "Lens"]
  },
  {
    key: "finance",
    label: "Finance",
    slug: "zoho-finance-plus",
    heading: "Finance & Accounting Challenges",
    painPoints: [
      "Manual invoicing and billing create errors",
      "GST filing and reconciliation are delayed",
      "Accounting, CRM, and inventory systems are disconnected"
    ],
    solutionText:
      "We automate invoicing, compliance, and reporting using Zoho Finance tools to improve accuracy, cash-flow visibility, and financial control.",
    image: "/solution/Finance.png",
    tools: ["Books", "Invoice", "Expense", "Billing", "Payroll"]
  },
  {
    key: "human-resource",
    label: "Human Resource",
    slug: "zoho-people-plus",
    heading: "HR Process Bottlenecks",
    painPoints: [
      "Onboarding tasks are manual and delayed",
      "Attendance and leave management are inconsistent",
      "Employee performance data is scattered"
    ],
    solutionText:
      "We deploy a connected HR setup with onboarding workflows, attendance automation, and structured performance tracking across teams.",
    image: "/solution/HR.png",
    tools: ["People", "Recruit", "Payroll"]
  },
  {
    key: "operations",
    label: "Operations",
    slug: "zoho-one",
    heading: "Operational Coordination Issues",
    painPoints: [
      "Teams work in disconnected tools and spreadsheets",
      "Handoffs between departments are not standardized",
      "Leaders lack real-time execution visibility"
    ],
    solutionText:
      "We create a unified operations layer with shared workflows, approval logic, and dashboards so execution stays consistent across departments.",
    image: "/solution/operations.png",
    tools: ["Flow", "Projects", "Analytics"]
  },
  {
    key: "e-commerce",
    label: "E-Commerce",
    slug: "zoho-creator",
    heading: "E-Commerce Process Complexity",
    painPoints: [
      "Order, inventory, and support are handled separately",
      "Manual updates slow down fulfillment",
      "Customer insights are not connected to operations"
    ],
    solutionText:
      "We build custom low-code workflows for order management, inventory sync, and customer operations to improve speed and reliability.",
    image: "/solution/ecom.png",
    tools: ["Creator", "Inventory", "Flow"]
  }
];

export default function SmartZohoSolutions() {
  const [activeTab, setActiveTab] = useState("finance");

  const active = useMemo(
    () => tabs.find((tab) => tab.key === activeTab) ?? tabs[0],
    [activeTab]
  );

  return (
    <section
      id="solutions"
      className="scroll-mt-24 py-16 md:py-20"
      style={{
        background:
          "linear-gradient(180deg, rgba(219,234,246,1) 0%, rgba(209,228,242,1) 100%)"
      }}
    >
      <Container>
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Function-Based Zoho Solution Playbooks
          </h2>
          <div className="mx-auto mt-4 h-1 w-32 bg-sky-500" />
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {tabs.map((tab) => {
            const isActive = tab.key === active.key;
            return (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-colors md:px-7 md:text-sm ${
                  isActive
                    ? "bg-[#253877] text-white"
                    : "bg-white text-slate-700 hover:bg-slate-100"
                }`}
                aria-pressed={isActive}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h3 className="text-3xl font-semibold leading-tight text-[#1f2f64] md:text-4xl">
              {active.heading}
            </h3>

            <h4 className="mt-8 text-xl font-semibold text-[#1f2f64] md:text-2xl">Current Gaps</h4>
            <ul className="mt-4 space-y-2 text-base text-slate-900 md:text-lg">
              {active.painPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-slate-900" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            <h4 className="mt-8 text-xl font-semibold text-[#1f2f64] md:text-2xl">What We Implement</h4>
            <p className="mt-4 text-base leading-relaxed text-slate-800 md:text-lg">{active.solutionText}</p>

            <Link
              href="/book-us"
              className="mt-7 inline-flex items-center gap-2 text-lg font-semibold text-[#1f2f64] hover:text-[#15224d]"
            >
              Learn More
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl border border-slate-300 bg-white shadow-lg">
              <div className="relative w-full aspect-[16/10] bg-slate-50">
                <Image
                  src={active.image}
                  alt={`${active.label} operations dashboard`}
                  fill
                  className="object-contain p-2"
                  sizes="(min-width: 1024px) 52vw, 100vw"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              {active.tools.map((tool) => (
                <span
                  key={tool}
                  className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-xs font-semibold text-slate-700 md:text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
