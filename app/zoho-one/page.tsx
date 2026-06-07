import type { Metadata } from "next";
import ServicePage, { ServicePageData } from "../../components/sections/ServicePage";
import { buildCanonical, buildKeywords } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Zoho One Implementation Partner in India | Full Business Suite Setup",
  description:
    "Certified Zoho One partner in India. Deploy 45+ connected apps across sales, finance, HR, and operations on one licence — setup, automation, and migration. Flexible hourly, packaged-hour, and project pricing.",
  keywords: buildKeywords(
    "Zoho One partner India",
    "Zoho One implementation",
    "Zoho One setup India",
    "Zoho One consultant",
    "Zoho One deployment",
    "Zoho One vs Zoho CRM",
    "Zoho business suite India"
  ),
  alternates: { canonical: buildCanonical("/zoho-one") },
  openGraph: {
    title: "Zoho One Implementation Partner in India",
    description:
      "Deploy Zoho One — 45+ connected business apps on one licence — with a certified Zoho partner.",
    url: buildCanonical("/zoho-one"),
    type: "website"
  }
};

const data: ServicePageData = {
  slug: "zoho-one",
  eyebrow: "Zoho One",
  heading: "Zoho One Implementation Partner in India",
  intro:
    "We help businesses replace a patchwork of disconnected tools with Zoho One — 45+ apps across sales, finance, HR, marketing, and operations on a single licence, configured to work as one system. Certified Zoho partner serving India and abroad.",
  image: "/products/Zoho-One-.webp",
  imageAlt: "Zoho One implementation partner",
  overview:
    "Most growing companies end up paying for a dozen disconnected SaaS tools that don't talk to each other, leaving data siloed and teams stuck on manual handoffs. Zoho One brings sales, finance, HR, marketing, and support under one licence — but the value only shows up when it's deployed properly. We plan a phased rollout, configure the apps you actually need, connect them so data flows end to end, and migrate you off your old tools, so you get one operating system for the business instead of 45 apps to figure out.",
  painPoints: [
    "Paying for many separate tools that don't integrate",
    "The same customer or employee data lives in multiple systems",
    "Cross-department workflows break at every handoff",
    "No single view of the business across sales, finance, and ops",
    "Zoho One was purchased but only a couple of apps are actually used"
  ],
  outcomes: [
    "A phased rollout plan prioritised by business impact",
    "Core apps configured and connected as one system",
    "Shared data and workflows across departments",
    "Consolidated tooling that cuts duplicate subscriptions",
    "Team training and adoption support so usage sticks"
  ],
  capabilities: [
    {
      title: "Rollout Planning",
      description:
        "We assess your tools and processes and design a phased Zoho One deployment prioritised by impact — not a big-bang switch."
    },
    {
      title: "App Configuration",
      description:
        "CRM, Books, People, Desk, Projects, Campaigns, and more — set up around your real workflows, only the apps you need."
    },
    {
      title: "Cross-App Automation",
      description:
        "Zoho Flow, workflows, and Deluge to connect apps so leads, orders, invoices, and tickets move automatically."
    },
    {
      title: "Tool Consolidation & Migration",
      description:
        "Move off scattered SaaS tools into Zoho One, with data migrated, validated, and de-duplicated before go-live."
    },
    {
      title: "Unified Reporting",
      description:
        "Zoho Analytics dashboards that combine sales, finance, and ops data for a single view of the business."
    },
    {
      title: "Admin & Governance",
      description:
        "Roles, permissions, and security configured centrally so access stays clean as your team grows."
    }
  ],
  faqs: [
    {
      id: "one-vs-crm",
      title: "What's the difference between Zoho One and Zoho CRM?",
      content:
        "Zoho CRM is a single app for sales and customer management. Zoho One is a full suite of 45+ apps — including CRM plus finance, HR, marketing, helpdesk, and projects — on one licence. We help you decide which fits your stage and budget; many teams start with CRM and grow into Zoho One."
    },
    {
      id: "one-worth",
      title: "Is Zoho One worth it for a small or mid-size business?",
      content:
        "If you're already paying for several separate tools, Zoho One is often cheaper and far more connected. We compare your current tool spend against a Zoho One rollout so the decision is based on real numbers, not guesswork."
    },
    {
      id: "one-phased",
      title: "Do we have to deploy all the apps at once?",
      content:
        "No. We recommend a phased rollout — start with the apps that deliver the most value (often CRM and Books), get teams comfortable, then expand. This keeps adoption high and disruption low."
    },
    {
      id: "one-migrate",
      title: "Can you migrate us off our current tools?",
      content:
        "Yes. We migrate data from CRMs, accounting tools, HR systems, and spreadsheets into the relevant Zoho apps, with field mapping and validation before go-live."
    },
    {
      id: "one-cost",
      title: "How much does Zoho One implementation cost?",
      content:
        "We offer flexible hourly consulting, discounted packaged-hour blocks (50, 100, 200, or 400 hours), and fixed-price project engagements. After a free discovery call we recommend the right model and share a clear quote."
    },
    {
      id: "one-time",
      title: "How long does a Zoho One rollout take?",
      content:
        "A focused first-phase rollout (a few core apps) typically takes 3–6 weeks. Full multi-department deployments run longer and are delivered in phases. We share a roadmap with milestones before starting."
    }
  ],
  serviceType: "Zoho One Implementation",
  serviceDescription:
    "Zoho One deployment, app configuration, cross-app automation, tool consolidation, and migration by a certified Zoho partner."
};

export default function ZohoOnePage() {
  return <ServicePage data={data} />;
}
