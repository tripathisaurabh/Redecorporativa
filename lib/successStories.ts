// Success Stories — real client deliveries. Source of truth: the Portfolio-Testimonials
// project. Status labels are kept honest (live / in build / design delivered, etc.).
// Do NOT add testimonials that were not actually given.

export const zohoAppLabels: Record<string, string> = {
  crm: "CRM",
  creator: "Creator",
  recruit: "Recruit",
  people: "People",
  desk: "Desk",
  campaigns: "Campaigns",
  connect: "Connect",
  sign: "Sign",
  projects: "Projects",
  bookings: "Bookings",
  meeting: "Meeting",
  workdrive: "WorkDrive",
  analytics: "Analytics",
  forms: "Forms",
  "zoho-one": "Zoho One",
  deluge: "Deluge",
  books: "Books",
  inventory: "Inventory",
  flow: "Flow",
  catalyst: "Catalyst"
};

// Client logo filenames under /public/success/logos/. Clients with no logo
// (e.g. ETRAM) fall back to initials in the UI.
export const clientLogos: Record<string, string> = {
  "jood-fm": "jood.jpeg",
  "ravel-storage": "ravel.png",
  "r-star-global": "rstar.jpg",
  grunber: "grunber.svg",
  "united-metals-laser": "united-metals-laser.png",
  "swastik-flanges": "swastik.png",
  "sbw-unity": "sbw.png",
  metalegal: "metalegal.png",
  "international-currency-association": "ica.png",
  glydus: "glydus.svg"
};

export type Outcome = { value: string; label: string };

export type SuccessStory = {
  slug: string;
  name: string;
  industry: string;
  country: string;
  platform: string;
  status: string;
  headline: string;
  summary: string;
  zoho: string[];
  outcomes: Outcome[];
};

export const successStories: SuccessStory[] = [
  {
    slug: "jood-fm",
    name: "Jood FM",
    industry: "Facility management",
    country: "Saudi Arabia",
    platform: "Zoho Creator",
    status: "Live in production",
    headline: "A hospital-grade facility management platform on Zoho Creator",
    summary:
      "Replaced paper log sheets and Excel registers with one CAFM platform covering assets, preventive maintenance, work orders, spare parts and site-level reporting across six hospital sites.",
    zoho: ["creator", "deluge", "workdrive"],
    outcomes: [
      { value: "6", label: "Hospital sites on one platform" },
      { value: "3,500+", label: "Records migrated" },
      { value: "24", label: "Forms in production" },
      { value: "7", label: "User guides delivered" }
    ]
  },
  {
    slug: "ravel-storage",
    name: "Ravel Storage",
    industry: "Self storage",
    country: "UAE",
    platform: "Zoho Creator + Books",
    status: "Live",
    headline: "One clear view of every storage unit, who is in it and who has paid",
    summary:
      "Brought units, tenants and rentals into one Zoho system across three Abu Dhabi branches — with a visual map of each warehouse and payment status flowing in automatically from Zoho Books.",
    zoho: ["creator", "books", "deluge"],
    outcomes: [
      { value: "110+", label: "Storage units managed in one place" },
      { value: "3", label: "Branches on one system" },
      { value: "0", label: "Whiteboards needed to know what's free" },
      { value: "Automatic", label: "Payment status from Zoho Books" }
    ]
  },
  {
    slug: "r-star-global",
    name: "R Star Global",
    industry: "ISO consulting",
    country: "USA",
    platform: "Zoho CRM + Creator",
    status: "Phase 1 live · Phase 2 in progress",
    headline: "From website enquiry to signed ISO project, without re-typing a thing",
    summary:
      "Connected website, pricing, e-signature and project delivery so an enquiry flows straight through to a signed agreement and a ready-made project plan.",
    zoho: ["crm", "creator", "sign", "projects", "bookings", "meeting"],
    outcomes: [
      { value: "4", label: "Website forms feeding CRM" },
      { value: "6", label: "Zoho apps connected" },
      { value: "8 · 26", label: "Phases · tasks auto-created" },
      { value: "0", label: "Manual re-entry, enquiry to project" }
    ]
  },
  {
    slug: "grunber",
    name: "Grunber",
    industry: "Junk-removal marketplace",
    country: "USA",
    platform: "Zoho CRM",
    status: "Live",
    headline: "Running a nationwide junk-removal marketplace from one CRM",
    summary:
      "Shaped Zoho CRM into the operations hub for every order: a guided job lifecycle from first request to completion, driver bidding, payment follow-up and a precise address picker, synced with the Grunber platform.",
    zoho: ["crm", "deluge", "zoho-one"],
    outcomes: [
      { value: "12", label: "Order stages, fully guided" },
      { value: "Nationwide", label: "Same-day jobs run from CRM" },
      { value: "1 step", label: "To capture a verified address" },
      { value: "Real time", label: "Sync with the Grunber platform" }
    ]
  },
  {
    slug: "etram",
    name: "ETRAM Inversiones",
    industry: "Fuel distribution",
    country: "Dominican Republic",
    platform: "Zoho Catalyst + mobile app",
    status: "Delivered",
    headline: "Fuel dispatch, collections and receipt OCR on a mobile-first platform",
    summary:
      "A fuel management platform: an offline-capable mobile app for operators, a web console for managers, AI receipt OCR, and strict controls on collections, deposits and POS reconciliation.",
    zoho: ["catalyst"],
    outcomes: [
      { value: "2", label: "Apps: mobile and web" },
      { value: "48 h", label: "Collection rule enforced automatically" },
      { value: "100%", label: "Actions captured in the audit log" },
      { value: "Offline", label: "Capture with zero duplicate entries" }
    ]
  },
  {
    slug: "united-metals-laser",
    name: "United Metals Laser",
    industry: "Laser cutting & fabrication",
    country: "Australia",
    platform: "Zoho CRM + Flow",
    status: "Stage 1 live · next stages planned",
    headline: "Quote requests that file themselves, from inbox to estimator queue",
    summary:
      "An AI-assisted automation that reads each incoming email, recognises a quote request, files it in Zoho CRM and stores the drawings in WorkDrive, ready for the estimators.",
    zoho: ["crm", "flow", "workdrive"],
    outcomes: [
      { value: "0", label: "Manual re-typing per quote request" },
      { value: "1 click", label: "From RFQ to its drawings" },
      { value: "6", label: "RFQ status stages" },
      { value: "3 + 1", label: "Zoho apps + Microsoft 365 connected" }
    ]
  },
  {
    slug: "swastik-flanges",
    name: "Swastik Flanges",
    industry: "Industrial manufacturing",
    country: "India",
    platform: "Zoho CRM",
    status: "Live",
    headline: "Online leads to GST-ready quotations, all inside Zoho CRM",
    summary:
      "Every enquiry from IndiaMART, TradeIndia and WhatsApp captured automatically, verified before conversion, followed up on time and quoted on a branded GST quotation that keeps the pipeline in sync.",
    zoho: ["crm", "deluge"],
    outcomes: [
      { value: "3", label: "Enquiry channels feeding CRM" },
      { value: "6", label: "Custom Deluge functions" },
      { value: "1", label: "Branded GST quotation template" },
      { value: "0", label: "Enquiries keyed in by hand" }
    ]
  },
  {
    slug: "sbw-unity",
    name: "SBW Group (Shyam Group)",
    industry: "Bidi manufacturing",
    country: "India",
    platform: "Zoho Creator",
    status: "In build",
    headline: "Tracking every gram of material from warehouse to finished bundle",
    summary:
      "A Zoho Creator app that allocates raw material to contract rollers, records what comes back, and follows production through sorting, packing and dispatch, branch by branch.",
    zoho: ["creator", "deluge"],
    outcomes: [
      { value: "25+", label: "Forms in the app" },
      { value: "30+", label: "Reports, including branch views" },
      { value: "6", label: "Production stages tracked" },
      { value: "Branch-wise", label: "Access and stock control" }
    ]
  },
  {
    slug: "metalegal",
    name: "Metalegal Advocates",
    industry: "Legal services",
    country: "India",
    platform: "Zoho Recruit",
    status: "Live",
    headline: "Smarter hiring for a multi-city law firm on Zoho Recruit",
    summary:
      "Rebuilt their Zoho Recruit set-up so every applicant is screened against the role's criteria in seconds, every outcome gets the right email, and management sees the full hiring funnel.",
    zoho: ["recruit", "people", "deluge"],
    outcomes: [
      { value: "2,500+", label: "Applications handled this year" },
      { value: "18", label: "Open positions screened" },
      { value: "~1 sec", label: "To screen each applicant" },
      { value: "9", label: "Hiring funnel reports" }
    ]
  },
  {
    slug: "international-currency-association",
    name: "International Currency Association",
    industry: "Trade association",
    country: "United Kingdom",
    platform: "Zoho CRM + Campaigns",
    status: "Live · next phase planned",
    headline: "One relationship hub for an international association and its programmes",
    summary:
      "Members, delegates, committees and mailing lists brought from scattered spreadsheets and Mailchimp into one Zoho CRM, connected to email campaigns, the website and a private community.",
    zoho: ["crm", "campaigns", "connect", "deluge"],
    outcomes: [
      { value: "1,900+", label: "Affiliations created" },
      { value: "1,700+", label: "Contacts migrated" },
      { value: "19", label: "Mailing lists synced" },
      { value: "0", label: "Rejected list pushes" }
    ]
  },
  {
    slug: "glydus",
    name: "Glydus",
    industry: "Marine manufacturing",
    country: "India",
    platform: "Zoho One (designed)",
    status: "Design delivered · build proposed",
    headline: "Mapping a marine manufacturer's sales and SAP order cycle for Zoho",
    summary:
      "A structured discovery and a complete, build-ready solution design: every sales path, the order cycle with SAP Business One, and after-sales service.",
    zoho: ["crm", "desk", "campaigns", "analytics", "forms"],
    outcomes: [
      { value: "14", label: "Modules specified" },
      { value: "~20", label: "Process diagrams" },
      { value: "3", label: "Sales segments mapped" },
      { value: "2", label: "Phase delivery roadmap" }
    ]
  }
];

export type ClientReview = {
  project: string;
  rating: number;
  date: string;
  text: string;
};

// Real client reviews. Reviewer references are kept brand-neutral ("the team")
// so the exact same quote reads honestly on either brand's site. Not fabricated.
export const clientReviews: ClientReview[] = [
  {
    project: "Zoho Desk + Facebook integration",
    rating: 5.0,
    date: "Nov 2025",
    text:
      "Working with the team has been a genuinely positive experience. Highly professional, deeply knowledgeable, and consistently strong on the technical side. Throughout the project they were exceptionally responsive — especially in moments that required immediate attention — and always handled tasks with reliability and calm confidence. Clear communication, a proactive attitude, and real dedication. A pleasure to collaborate with, and someone I would gladly recommend."
  },
  {
    project: "Zoho Desk + Facebook integration",
    rating: 5.0,
    date: "Nov 2025",
    text:
      "I had the great opportunity to work with the team on a Zoho Desk and Facebook integration project. Highly skilled, responsive, and truly dedicated to achieving results — went above and beyond, even working late hours when needed, to ensure the project's success. I highly recommend them to anyone looking for a reliable and talented specialist."
  },
  {
    project: "Zoho Creator suite: orders, inventory, warehouse, sales & finance",
    rating: 4.9,
    date: "Jan 2025",
    text:
      "It was really great working with the team! They could create really good systems on Zoho and mend them to your liking."
  },
  {
    project: "Zoho custom setup, workflows & Deluge",
    rating: 5.0,
    date: "Feb 2023",
    text: "The best — delivered the job very fast. I recommend them for any Zoho jobs."
  }
];

export const successStats = [
  { value: "200+", label: "Zoho deliveries" },
  { value: "25+", label: "Zoho apps deployed" },
  { value: "100+", label: "Integrations built" },
  { value: "Global", label: "Clients on every continent" }
];
