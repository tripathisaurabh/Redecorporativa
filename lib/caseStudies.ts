export type CaseStudy = {
  slug: string;
  title: string;
  platform: "zoho" | "salesforce" | "shopify" | "woo-commerce";
  industry: string;
  summary: string;
  clientProfile: string;
  challenge: string;
  implementation: string;
  outcomes: string[];
  coverImage: string;
  sectionImages?: {
    clientProfile: string;
    challenge: string;
    implementation: string;
  };
  publishDate: string;
};

export const platformTabs = [
  { key: "zoho", label: "Zoho" },
  // { key: "salesforce", label: "Salesforce" },
  // { key: "shopify", label: "Shopify" },
  // { key: "woo-commerce", label: "Woo Commerce" }
] as const;

export const caseStudies: CaseStudy[] = [
  {
    slug: "zoho-ecommerce-conversion-automation",
    title: "Zoho Commerce Workflow for an E-Commerce Brand",
    platform: "zoho",
    industry: "E-Commerce",
    summary:
      "Implemented an integrated Zoho workflow for order updates, customer follow-ups, and post-purchase automation across support and operations.",
    clientProfile:
      "A fast-growing D2C e-commerce brand handling high order volume across online storefronts and marketplace channels.",
    challenge:
      "Order updates, support requests, and payment follow-ups were handled manually, causing delayed responses and drop-offs after checkout.",
    implementation:
      "We implemented Zoho CRM + workflow automation for order lifecycle communication, ticket routing, abandoned-cart follow-up, and unified customer tracking.",
    outcomes: [
      "41% higher repeat-order engagement rate",
      "34% faster support response turnaround",
      "Single customer timeline across orders and support"
    ],
    coverImage: "/CaseStudy/1E-Commerce.png",
    sectionImages: {
      clientProfile: "/CaseStudy/1E-Commerce.png",
      challenge: "/CaseStudy/OperationalChallenges.png",
      implementation: "/CaseStudy/ExecutionApproach.png"
    },
    publishDate: "2026-01-12"
  },
  
  {
    slug: "zoho-automobile-process-standardization",
    title: "Zoho Enablement for an Automobile Manufacturing Business",
    platform: "zoho",
    industry: "Automobile",
    summary:
      "Standardized sales and partner onboarding workflows using Zoho to reduce handoff delays across regional teams.",
    clientProfile:
      "A growing automobile component brand with partner-led distribution and fragmented lead management practices.",
    challenge:
      "No uniform process existed for inquiry tracking, partner qualification, and lifecycle communication, resulting in inconsistent conversions.",
    implementation:
      "We mapped a unified process in Zoho CRM, automated assignments by territory, and connected partner onboarding checkpoints into one pipeline.",
    outcomes: [
      "2.1x improvement in pipeline movement speed",
      "Consistent partner onboarding lifecycle",
      "Higher accountability with stage-based ownership"
    ],
    coverImage: "/CaseStudy/Automobile.png",
    sectionImages: {
      clientProfile: "/CaseStudy/Automobile.png",
      challenge: "/CaseStudy/OperationalChallenges.png",
      implementation: "/CaseStudy/ExecutionApproach.png"
    },
    publishDate: "2026-01-06"
  },
  
  {
    slug: "zoho-ev-industry-scaling-stack",
    title: "Zoho Implementation for an EV Charging Solutions Provider",
    platform: "zoho",
    industry: "Electric Vehicle",
    summary:
      "Built a connected sales-to-operations workflow for project tracking, billing coordination, and service follow-ups.",
    clientProfile:
      "An EV charging infrastructure provider expanding across enterprise and commercial deployments.",
    challenge:
      "Project, finance, and support teams used separate tools, making payment tracking and implementation coordination difficult.",
    implementation:
      "We deployed Zoho CRM and finance workflows with milestone-based updates, invoicing checkpoints, and centralized service ticketing.",
    outcomes: [
      "Improved payment tracking and follow-up rhythm",
      "Cross-team workflow visibility from deal to delivery",
      "Reduced operational delays in active deployments"
    ],
    coverImage: "/CaseStudy/EV-charging.png",
    sectionImages: {
      clientProfile: "/CaseStudy/EV-charging.png",
      challenge: "/CaseStudy/OperationalChallenges.png",
      implementation: "/CaseStudy/EV-charging.png"
    },
    publishDate: "2025-12-28"
  },
  {
    slug: "jood-fm-cafm-facility-management",
    title: "CAFM Platform for Jood FM",
    platform: "zoho",
    industry: "Facility Management",
    summary:
      "A computer-aided facility management (CAFM) platform built on Zoho Creator — asset register, self-scheduling preventive maintenance, work orders, a spare-parts ledger, and live management dashboards.",
    clientProfile:
      "Jood FM manages facilities where hundreds of assets — chillers, pumps, lifts, and fire systems — must be kept running and demonstrably maintained.",
    challenge:
      "The maintenance operation ran on memory and messages: no reliable record of what equipment existed, servicing done only when someone remembered, and no evidence a job was completed when an auditor asked.",
    implementation:
      "We designed and built a custom CAFM platform on Zoho Creator — with Desk for fault tickets and SLA timers, Analytics for dashboards, WorkDrive for manuals, and Flow plus Deluge for automation. Assets are registered once and located to the exact room, maintenance schedules generate their own work orders, faults become tracked tickets, and spare-parts stock moves the moment a part is used.",
    outcomes: [
      "100% of completed jobs closed with a checklist, timestamp, and technician sign-off",
      "4-level location precision, from building down to the exact room",
      "Daily automatic work-order generation — maintenance no longer depends on anyone remembering",
      "17 custom Creator forms, 7 Deluge routines, and 4 role-based access profiles"
    ],
    coverImage: "/creator-solutions/00_solutions-main/00_solutions-main_asset-management.png",
    publishDate: "2026-08-04"
  }

];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
