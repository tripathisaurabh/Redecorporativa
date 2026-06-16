export type LocationFaq = { q: string; a: string };

export type LocationPageData = {
  slug: string;
  city: string; // e.g. "Noida"
  region: string; // e.g. "Uttar Pradesh"
  heading: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  intro: string;
  localAngle: string;
  industries: string[];
  faqs: LocationFaq[];
};

export const locationPages: LocationPageData[] = [
  {
    slug: "zoho-partner-noida",
    city: "Noida",
    region: "Uttar Pradesh",
    heading: "Zoho Partner in Noida",
    metaTitle: "Zoho Partner in Noida | Certified Zoho CRM & Implementation Experts",
    description:
      "Noida-based certified Zoho partner. On-ground Zoho CRM, Zoho One, and automation implementation for businesses across Noida and Greater Noida. Book a free local consultation.",
    keywords: [
      "Zoho partner Noida",
      "Zoho consultant Noida",
      "Zoho CRM Noida",
      "Zoho implementation Noida",
      "Zoho developer Noida"
    ],
    intro:
      "We're a certified Zoho partner headquartered in Noida — which means local businesses get a Zoho team that can meet on-ground, understands the Noida and Greater Noida market, and is in your time zone for fast support.",
    localAngle:
      "Being based in Noida, we work closely with IT/ITES firms, manufacturers in the Noida–Greater Noida belt, and the fast-growing startup community here. We can do on-site discovery and training when it helps, and we know the operational realities of businesses in this region.",
    industries: [
      "IT & ITES companies",
      "Manufacturing & industrial units (Noida / Greater Noida)",
      "Startups & D2C brands",
      "Professional services & consultancies",
      "Real estate & PropTech",
      "Healthcare & diagnostics"
    ],
    faqs: [
      {
        q: "Are you actually based in Noida?",
        a: "Yes. Redecorporativa is headquartered in Noida, Uttar Pradesh. We serve clients across Noida and Greater Noida (and beyond), with the option of on-site discovery and training."
      },
      {
        q: "Can you visit our office in Noida?",
        a: "For Noida and Greater Noida clients, on-site sessions for discovery, kickoff, and training can be arranged where it adds value. Day-to-day delivery is handled efficiently online."
      },
      {
        q: "What Zoho services do you offer in Noida?",
        a: "The full range — Zoho CRM, Zoho One, Books, People, Creator, Inventory, and end-to-end business process automation, under flexible hourly, packaged-hour, or project pricing."
      }
    ]
  },
  {
    slug: "zoho-partner-delhi-ncr",
    city: "Delhi NCR",
    region: "Delhi NCR",
    heading: "Zoho Partner in Delhi NCR",
    metaTitle: "Zoho Partner in Delhi NCR | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner serving Delhi, Gurgaon, Noida, and the wider NCR. Zoho CRM, Zoho One, and automation implementation for NCR businesses. Book a free consultation.",
    keywords: [
      "Zoho partner Delhi NCR",
      "Zoho consultant Delhi",
      "Zoho partner Gurgaon",
      "Zoho CRM Delhi",
      "Zoho implementation NCR"
    ],
    intro:
      "We're a certified Zoho partner serving the entire Delhi NCR region — Delhi, Gurgaon, Noida, Faridabad, and Ghaziabad. NCR businesses get an experienced Zoho team that's local to the region and easy to coordinate with.",
    localAngle:
      "The NCR is one of India's densest business hubs — corporates, agencies, and high-growth SMBs all competing for the same talent and customers. We help NCR companies put Zoho to work so their sales, finance, and operations run on one connected system instead of scattered tools.",
    industries: [
      "Corporate & enterprise back-offices",
      "Marketing & creative agencies",
      "B2B services & consulting firms",
      "E-commerce & retail",
      "EdTech & FinTech companies",
      "Logistics & distribution"
    ],
    faqs: [
      {
        q: "Which NCR cities do you cover?",
        a: "All of them — Delhi, Gurgaon, Noida, Greater Noida, Faridabad, and Ghaziabad. We're headquartered in Noida and work across the NCR."
      },
      {
        q: "Do you offer on-site support in Delhi or Gurgaon?",
        a: "Yes, on-site discovery, kickoff, and training can be arranged for NCR clients where it helps. Ongoing delivery is handled efficiently online."
      },
      {
        q: "What does a Zoho project cost for an NCR business?",
        a: "It depends on scope, not location. We offer flexible hourly consulting, packaged-hour blocks, and fixed-price projects, with a clear quote after a short discovery call."
      }
    ]
  },
  {
    slug: "zoho-partner-mumbai",
    city: "Mumbai",
    region: "Maharashtra",
    heading: "Zoho Partner in Mumbai",
    metaTitle: "Zoho Partner in Mumbai | Certified Zoho CRM & Implementation Experts",
    description:
      "Certified Zoho partner for Mumbai businesses. Zoho CRM, Zoho One, and automation implementation for Mumbai's finance, media, and D2C companies. Book a free consultation.",
    keywords: [
      "Zoho partner Mumbai",
      "Zoho consultant Mumbai",
      "Zoho CRM Mumbai",
      "Zoho implementation Mumbai",
      "Zoho developer Mumbai"
    ],
    intro:
      "We're a certified Zoho partner working with businesses across Mumbai. Mumbai companies get a senior Zoho team and a proven, remote-first delivery model — with on-site sessions arranged when the project calls for it.",
    localAngle:
      "Mumbai's pace is relentless — finance, media, logistics, and D2C brands all need their systems to keep up. We help Mumbai businesses replace manual spreadsheets and disconnected apps with automated Zoho workflows, so teams spend less time on admin and more on growth.",
    industries: [
      "Financial services & advisory",
      "Media, advertising & entertainment",
      "D2C & consumer brands",
      "Logistics, shipping & supply chain",
      "Real estate & infrastructure",
      "Professional & B2B services"
    ],
    faqs: [
      {
        q: "Do you work with Mumbai businesses remotely?",
        a: "Yes. We deliver efficiently through a remote-first model with structured discovery, regular check-ins, and clear documentation — and we arrange on-site sessions when a project benefits from them."
      },
      {
        q: "Can you handle Mumbai-specific compliance like GST?",
        a: "Yes. We set up GST-ready Zoho Books and finance workflows, and configure Zoho around your specific reporting and compliance needs."
      },
      {
        q: "What Zoho services do you provide in Mumbai?",
        a: "Zoho CRM, Zoho One, Books, People, Creator, Inventory, and full business process automation — under flexible hourly, packaged-hour, or project pricing."
      }
    ]
  }
];

export const getLocationBySlug = (slug: string) => locationPages.find((l) => l.slug === slug);
