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

  

];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
