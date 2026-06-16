export type ComparisonRow = { criteria: string; zoho: string; rival: string };
export type ComparisonFaq = { q: string; a: string };

export type Comparison = {
  slug: string;
  rival: string;
  heading: string; // H1
  metaTitle: string;
  description: string;
  keywords: string[];
  intro: string;
  verdict: string;
  rows: ComparisonRow[];
  whyZoho: string[];
  faqs: ComparisonFaq[];
  deepDiveHref?: string;
  deepDiveLabel?: string;
};

export const comparisons: Comparison[] = [
  {
    slug: "zoho-vs-salesforce",
    rival: "Salesforce",
    heading: "Zoho CRM vs Salesforce",
    metaTitle: "Zoho CRM vs Salesforce (2026) | Comparison & Honest Verdict – India, USA & UK",
    description:
      "Zoho CRM vs Salesforce compared on price, features, ease of use, and total cost of ownership — with a clear verdict on which fits your business. From a certified Zoho partner.",
    keywords: [
      "Zoho CRM vs Salesforce",
      "Zoho vs Salesforce",
      "Salesforce alternative",
      "Salesforce to Zoho migration",
      "cheaper Salesforce alternative"
    ],
    intro:
      "Both are excellent CRMs, but they fit very different companies. Here's an honest, side-by-side look at Zoho CRM and Salesforce — and a clear verdict on which is right for you.",
    verdict:
      "For most SMBs and mid-market companies, Zoho CRM delivers the features you'll actually use at a fraction of Salesforce's total cost. Salesforce wins at the very high end — large enterprises with complex, unique processes and a dedicated admin team. If you're not in that bracket, Zoho is usually the smarter buy.",
    rows: [
      { criteria: "Entry price", zoho: "≈ ₹800/user/mo (Standard, billed annually)", rival: "Higher entry point, typically USD-priced" },
      { criteria: "Total cost of ownership", zoho: "Lower — fewer paid add-ons, less admin", rival: "Higher — add-ons and dedicated admin often needed" },
      { criteria: "Ease of setup", zoho: "Fast; live in weeks", rival: "Powerful but complex; longer rollouts" },
      { criteria: "Admin burden", zoho: "Manageable without a full-time specialist", rival: "Usually needs a dedicated admin" },
      { criteria: "Connected suite", zoho: "One licence (Zoho One) adds finance, HR, desk, more", rival: "Add-ons / separate clouds, priced separately" },
      { criteria: "Best for", zoho: "SMB & mid-market wanting value + speed", rival: "Large enterprise with complex needs" }
    ],
    whyZoho: [
      "Significantly lower total cost of ownership, especially as you add users",
      "Faster to deploy and far easier to administer day to day",
      "One connected ecosystem — CRM, Books, Desk, People, Campaigns — under Zoho One",
      "Covers the features the vast majority of teams actually use",
      "Migration from Salesforce is straightforward with a certified partner"
    ],
    faqs: [
      {
        q: "Is Zoho CRM a good Salesforce alternative?",
        a: "For most SMBs and mid-market companies, yes. Zoho CRM covers the features teams actually use at a much lower total cost, with faster setup and lower admin overhead than Salesforce."
      },
      {
        q: "How hard is it to migrate from Salesforce to Zoho?",
        a: "Straightforward with a certified partner. We map fields, clean duplicates, migrate your data, and rebuild workflows in Zoho with zero data loss."
      },
      {
        q: "Will we lose features by switching from Salesforce?",
        a: "Most teams don't use Salesforce's high-end depth. We audit what you actually use first, so nothing important is lost in the move."
      }
    ],
    deepDiveHref: "/blog/zoho-crm-vs-salesforce-india",
    deepDiveLabel: "Read the full Zoho CRM vs Salesforce deep-dive"
  },
  {
    slug: "zoho-vs-hubspot",
    rival: "HubSpot",
    heading: "Zoho CRM vs HubSpot",
    metaTitle: "Zoho CRM vs HubSpot (2026) | Comparison & Honest Verdict – India, USA & UK",
    description:
      "Zoho CRM vs HubSpot compared on price, scalability, features, and value — with a clear verdict on which CRM fits your business. From a certified Zoho partner.",
    keywords: [
      "Zoho CRM vs HubSpot",
      "Zoho vs HubSpot",
      "HubSpot alternative",
      "HubSpot to Zoho migration",
      "cheaper HubSpot alternative"
    ],
    intro:
      "HubSpot is polished and easy to start with, but its pricing scales steeply. Here's how Zoho CRM compares — and when each one makes sense.",
    verdict:
      "HubSpot is great for getting started and for marketing-led teams, but costs climb sharply as you add contacts and unlock tiers. Zoho CRM gives you comparable (often deeper) functionality at a far lower cost as you grow, plus a full business suite under one licence. For cost-conscious teams that plan to scale, Zoho usually wins.",
    rows: [
      { criteria: "Entry price", zoho: "≈ ₹800/user/mo (Standard, billed annually)", rival: "Free tier, but paid tiers scale steeply" },
      { criteria: "Pricing model", zoho: "Per user — predictable", rival: "Per seat + contact tiers — can jump fast" },
      { criteria: "Cost as you scale", zoho: "Stays efficient", rival: "Rises sharply with contacts & feature tiers" },
      { criteria: "Connected suite", zoho: "Zoho One adds finance, HR, desk & more", rival: "Hubs priced separately; no finance/HR" },
      { criteria: "Customisation", zoho: "Deep, including low-code (Creator)", rival: "Strong, but advanced features gated to top tiers" },
      { criteria: "Best for", zoho: "Teams wanting value + room to scale", rival: "Early-stage / marketing-led teams" }
    ],
    whyZoho: [
      "Predictable per-user pricing instead of steep contact-tier jumps",
      "Far lower cost as your contact list and team grow",
      "A full business suite (finance, HR, desk) under one Zoho One licence",
      "Deep customisation and low-code apps via Zoho Creator",
      "Smooth migration from HubSpot with a certified partner"
    ],
    faqs: [
      {
        q: "Is Zoho CRM cheaper than HubSpot?",
        a: "As you scale, almost always. HubSpot's paid tiers and contact-based pricing climb steeply, while Zoho CRM's per-user pricing stays predictable and efficient."
      },
      {
        q: "Can you migrate us from HubSpot to Zoho CRM?",
        a: "Yes. We migrate contacts, deals, properties, and workflows from HubSpot into Zoho CRM and rebuild your automations with zero data loss."
      },
      {
        q: "Does Zoho match HubSpot's marketing features?",
        a: "Zoho covers marketing automation, campaigns, and lead nurturing through Zoho CRM and Zoho Marketing Automation — often at a lower combined cost than HubSpot's Marketing Hub tiers."
      }
    ]
  }
];

export const getComparisonBySlug = (slug: string) => comparisons.find((c) => c.slug === slug);
