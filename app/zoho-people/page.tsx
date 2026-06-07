import type { Metadata } from "next";
import ServicePage, { ServicePageData } from "../../components/sections/ServicePage";
import { buildCanonical, buildKeywords } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Zoho People HR Implementation Partner in India | HRMS Setup Experts",
  description:
    "Certified Zoho People partner in India. Set up HRMS, onboarding, attendance, leave, and performance with automation and payroll integration. Flexible hourly, packaged-hour, and project pricing.",
  keywords: buildKeywords(
    "Zoho People partner India",
    "Zoho People implementation",
    "Zoho People setup India",
    "Zoho HRMS India",
    "Zoho People consultant",
    "Zoho People Plus implementation",
    "HR automation Zoho"
  ),
  alternates: { canonical: buildCanonical("/zoho-people") },
  openGraph: {
    title: "Zoho People HR Implementation Partner in India",
    description:
      "Set up Zoho People HRMS — onboarding, attendance, leave, and performance — with a certified Zoho partner.",
    url: buildCanonical("/zoho-people"),
    type: "website"
  }
};

const data: ServicePageData = {
  slug: "zoho-people",
  eyebrow: "Zoho People",
  heading: "Zoho People HR Implementation Partner in India",
  intro:
    "We set up Zoho People to run your entire employee lifecycle — onboarding, attendance, leave, and performance — in one HRMS, automated and connected to payroll. Certified Zoho partner serving India and abroad.",
  image: "/products/zoho-people-plus-e1755504630286.webp",
  imageAlt: "Zoho People HR implementation partner",
  overview:
    "HR teams lose hours to spreadsheets, email approvals, and chasing attendance and leave data. Zoho People centralises the whole employee journey — but it needs to be configured around your policies to actually save time. We set up your org structure, leave and attendance rules, onboarding flows, and performance cycles, automate the approvals, and connect it to payroll, so HR runs on a single system instead of scattered sheets.",
  painPoints: [
    "Employee records are duplicated across tools and spreadsheets",
    "Leave and attendance approvals happen over email and chat",
    "Onboarding tasks are manual and easy to miss",
    "Performance reviews are hard to run and track",
    "HR data doesn't flow into payroll cleanly"
  ],
  outcomes: [
    "A single source of truth for every employee record",
    "Automated leave, attendance, and approval workflows",
    "Structured onboarding checklists that nothing falls through",
    "Performance and appraisal cycles that actually run on time",
    "HR data connected to payroll for accurate, faster processing"
  ],
  capabilities: [
    {
      title: "HRMS Setup",
      description:
        "Org structure, roles, employee profiles, and self-service portal configured around how your company is organised."
    },
    {
      title: "Leave & Attendance",
      description:
        "Leave policies, holiday calendars, shifts, and attendance rules set up with automated approval workflows."
    },
    {
      title: "Onboarding Automation",
      description:
        "Structured onboarding and exit checklists with automated tasks, document collection, and reminders."
    },
    {
      title: "Performance Management",
      description:
        "Goals, KRAs, appraisal cycles, and feedback configured so reviews are consistent and on schedule."
    },
    {
      title: "Payroll Integration",
      description:
        "Connect Zoho People with Zoho Payroll or your payroll system so attendance and leave flow through accurately."
    },
    {
      title: "Reports & Compliance",
      description:
        "HR dashboards and reports for headcount, attrition, attendance, and compliance visibility."
    }
  ],
  faqs: [
    {
      id: "people-plus",
      title: "What's the difference between Zoho People and Zoho People Plus?",
      content:
        "Zoho People is the core HRMS. Zoho People Plus bundles People with related apps like recruitment, payroll, and workplace tools for a more complete HR suite. We help you choose based on your team size and needs."
    },
    {
      id: "people-payroll",
      title: "Can Zoho People connect to payroll?",
      content:
        "Yes. We integrate Zoho People with Zoho Payroll or your existing payroll system so attendance, leave, and employee data flow through to payroll without manual re-entry."
    },
    {
      id: "people-attendance",
      title: "Can you set up attendance, shifts, and leave policies?",
      content:
        "Yes. We configure your leave types, holiday calendars, shift schedules, and attendance rules (including biometric or geo/IP check-in) with automated approval workflows."
    },
    {
      id: "people-onboard",
      title: "Can onboarding be automated?",
      content:
        "Yes. We build structured onboarding and offboarding checklists with automated tasks, document requests, and reminders so nothing gets missed when people join or leave."
    },
    {
      id: "people-cost",
      title: "How much does Zoho People implementation cost?",
      content:
        "We offer flexible hourly consulting, discounted packaged-hour blocks (50, 100, 200, or 400 hours), and fixed-price project engagements. After a free discovery call we recommend the right model and share a clear quote."
    },
    {
      id: "people-time",
      title: "How long does setup take?",
      content:
        "A standard Zoho People setup typically takes 2–4 weeks depending on the number of policies, integrations, and modules. We share a timeline before starting."
    }
  ],
  serviceType: "Zoho People Implementation",
  serviceDescription:
    "Zoho People HRMS setup — onboarding, attendance, leave, performance, and payroll integration — by a certified Zoho partner."
};

export default function ZohoPeoplePage() {
  return <ServicePage data={data} />;
}
