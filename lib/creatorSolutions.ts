export type SolutionFeature = { title: string; description: string };
export type SolutionFaq = { q: string; a: string };

export type CreatorSolution = {
  slug: string;
  name: string;
  category: string;
  heading: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  thumb: string; // hub card image
  heroImage: string;
  heroAlt: string;
  intro: string;
  overview: string;
  features: SolutionFeature[];
  benefits: string[];
  faqs: SolutionFaq[];
};

const BASE = "/creator-solutions";

export const creatorSolutions: CreatorSolution[] = [
  {
    slug: "asset-management",
    name: "Asset Management",
    category: "Operations",
    heading: "Asset Management Software on Zoho Creator",
    metaTitle: "Asset Management Software on Zoho Creator | Custom Build by a Zoho Partner",
    description:
      "Track every asset across its lifecycle with a custom asset management app on Zoho Creator — tagging, maintenance, depreciation, and audit history. Built by a certified Zoho partner.",
    keywords: ["asset management software", "asset tracking app", "Zoho Creator asset management", "asset management system India", "fixed asset tracking"],
    thumb: `${BASE}/00_solutions-main/00_solutions-main_asset-management.png`,
    heroImage: `${BASE}/01_asset-management/01_asset-management_tracking-assets.png`,
    heroAlt: "Asset management app built on Zoho Creator",
    intro:
      "Stop chasing assets across spreadsheets. We build a custom asset management app on Zoho Creator that tracks every item — from purchase to disposal — with tagging, maintenance schedules, depreciation, and a full audit trail.",
    overview:
      "Most teams lose time and money to assets they can't find, maintenance that's missed, and depreciation tracked by hand. A purpose-built Zoho Creator app gives you one register for every asset, with QR/barcode tagging, assignment, maintenance workflows, and dashboards — accessible on web and mobile so the field team updates records in real time.",
    features: [
      { title: "Asset Tagging & Tracking", description: "Register and tag every asset with QR/barcode codes, location, owner, and status — searchable in one place." },
      { title: "Maintenance & Work Orders", description: "Schedule preventive maintenance, raise work orders, and track tasks to completion with automated reminders." },
      { title: "Depreciation Tracking", description: "Calculate and record depreciation automatically so your asset values and books stay accurate." },
      { title: "History & Audit Trail", description: "See the full lifecycle of each asset — assignments, transfers, repairs, and disposal — for clean audits." }
    ],
    benefits: [
      "One source of truth for every asset across locations",
      "Fewer lost or under-utilised assets",
      "Maintenance done on time, not after failure",
      "Web and mobile access for field updates"
    ],
    faqs: [
      { q: "Can we tag assets with QR codes or barcodes?", a: "Yes. The app supports QR/barcode tagging so your team can scan to view or update an asset's record from a phone." },
      { q: "Can it handle depreciation?", a: "Yes. We configure depreciation rules so asset values are calculated automatically and stay in sync with your finance records." },
      { q: "Does it work on mobile?", a: "Yes. Every Zoho Creator app includes native mobile access, ideal for field teams updating asset status on the go." }
    ]
  },
  {
    slug: "construction-management",
    name: "Construction Management",
    category: "Operations",
    heading: "Construction Management Software on Zoho Creator",
    metaTitle: "Construction Management Software on Zoho Creator | Custom Build",
    description:
      "Run projects, sites, materials, and approvals from one custom construction management app on Zoho Creator, integrated with your finance and procurement. Built by a certified Zoho partner.",
    keywords: ["construction management software", "construction project management app", "Zoho Creator construction", "site management software", "construction ERP India"],
    thumb: `${BASE}/00_solutions-main/00_solutions-main_construction-management.png`,
    heroImage: `${BASE}/02_construction-management/02_construction-management_construction-management-build.png`,
    heroAlt: "Construction management app built on Zoho Creator",
    intro:
      "Construction runs on coordination — across sites, contractors, materials, and budgets. We build a custom construction management app on Zoho Creator that brings projects, site progress, approvals, and costs into one connected system.",
    overview:
      "When project data lives in spreadsheets and WhatsApp, timelines slip and costs leak. A Zoho Creator build gives you project tracking, site-level updates, material and labour logs, approval workflows, and dashboards — connected to your procurement and finance so nothing falls through the cracks.",
    features: [
      { title: "Project & Site Tracking", description: "Track every project and site with milestones, progress updates, and document storage in one place." },
      { title: "Material & Labour Logs", description: "Capture daily material usage and labour on site, with mobile entry for supervisors." },
      { title: "Approvals & Compliance", description: "Build approval flows for indents, change orders, and payments, with a full audit trail." },
      { title: "Integrations", description: "Connect to Zoho Books, procurement, and other systems so costs and inventory stay in sync." }
    ],
    benefits: [
      "One view of every project and site",
      "Tighter control over material and labour costs",
      "Faster, auditable approvals",
      "Mobile updates straight from the site"
    ],
    faqs: [
      { q: "Can supervisors update from the site?", a: "Yes. The native mobile app lets site supervisors log progress, materials, and labour in real time, even offline-friendly." },
      { q: "Does it connect to accounting?", a: "Yes. We integrate it with Zoho Books and procurement so project costs flow into your finance system automatically." },
      { q: "Can we track multiple projects?", a: "Yes. The app is built to handle many concurrent projects and sites with role-based access for each team." }
    ]
  },
  {
    slug: "material-requirement-planning",
    name: "Material Requirement Planning (MRP)",
    category: "Manufacturing",
    heading: "Material Requirement Planning (MRP) on Zoho Creator",
    metaTitle: "Material Requirement Planning (MRP) Software on Zoho Creator | Custom Build",
    description:
      "Plan materials, BOMs, purchase orders, and production from one custom MRP app on Zoho Creator. Built by a certified Zoho partner for manufacturers.",
    keywords: ["material requirement planning software", "MRP software India", "Zoho Creator MRP", "BOM management", "production planning software"],
    thumb: `${BASE}/00_solutions-main/00_solutions-main_material-req.png`,
    heroImage: `${BASE}/03_material-requirement-planning/03_material-requirement-planning_smart-mrp-process.svg`,
    heroAlt: "Material requirement planning app built on Zoho Creator",
    intro:
      "Manufacturers lose margin to stockouts, over-ordering, and manual planning. We build a custom MRP app on Zoho Creator that turns your bills of materials and demand into accurate purchase and production plans.",
    overview:
      "A Zoho Creator MRP build links your BOMs, inventory, and orders so the system tells you what to buy and make, and when. It generates purchase orders, plans production runs, and tracks material availability — replacing fragile spreadsheets with a connected, auditable process.",
    features: [
      { title: "Bill of Materials (BOM)", description: "Define multi-level BOMs and let the system calculate material requirements from demand automatically." },
      { title: "Purchase Order Generation", description: "Auto-create purchase orders for shortfalls, with supplier details and approval workflows." },
      { title: "Production Planning", description: "Plan and schedule production runs against material availability and capacity." },
      { title: "Material Tracking", description: "Track raw material stock, consumption, and reorder points in real time." }
    ],
    benefits: [
      "Fewer stockouts and less over-ordering",
      "Faster, data-driven purchase decisions",
      "Clear visibility from BOM to production",
      "One connected system instead of spreadsheets"
    ],
    faqs: [
      { q: "Can it handle multi-level BOMs?", a: "Yes. We configure multi-level bills of materials so requirements roll up accurately across sub-assemblies." },
      { q: "Does it generate purchase orders?", a: "Yes. The app can auto-generate POs for material shortfalls and route them through your approval process." },
      { q: "Can it connect to our inventory?", a: "Yes. We integrate MRP with Zoho Inventory or your existing stock system so material data stays in sync." }
    ]
  },
  {
    slug: "education-erp",
    name: "Education ERP",
    category: "Education",
    heading: "Education ERP on Zoho Creator",
    metaTitle: "Education ERP on Zoho Creator | Custom School & College Management",
    description:
      "Run admissions, students, faculty, and parents from one custom education ERP on Zoho Creator — with dedicated portals for each. Built by a certified Zoho partner.",
    keywords: ["education ERP", "school management software", "college ERP India", "Zoho Creator education", "student management system"],
    thumb: `${BASE}/00_solutions-main/00_solutions-main_education-management.png`,
    heroImage: `${BASE}/04_education-management/04_education-management_zcr-erp-edu-management.svg`,
    heroAlt: "Education ERP built on Zoho Creator",
    intro:
      "Schools and colleges juggle admissions, attendance, fees, faculty, and parent communication across disconnected tools. We build a custom education ERP on Zoho Creator with dedicated portals for admins, students, faculty, and parents.",
    overview:
      "A Zoho Creator education ERP unifies the whole institution: admissions and student records, attendance, fees, timetables, and results — each audience getting its own portal. Admins manage operations, faculty record attendance and grades, students access materials, and parents stay informed, all in one secure system.",
    features: [
      { title: "Admin Portal", description: "Manage admissions, student records, fees, timetables, and reporting from one dashboard." },
      { title: "Student Portal", description: "Give students access to attendance, assignments, results, and announcements." },
      { title: "Faculty Portal", description: "Let faculty record attendance, enter grades, and share materials with their classes." },
      { title: "Parent Portal", description: "Keep parents updated on attendance, fees, performance, and notices." }
    ],
    benefits: [
      "One system for the whole institution",
      "Less manual admin for staff",
      "Better parent and student communication",
      "Secure, role-based access for each audience"
    ],
    faqs: [
      { q: "Does each role get its own portal?", a: "Yes. We build separate, secure portals for admins, faculty, students, and parents — each seeing only what's relevant to them." },
      { q: "Can it handle fees and admissions?", a: "Yes. The ERP covers admissions, student records, fee tracking, attendance, and results, tailored to your institution." },
      { q: "Is it accessible on mobile?", a: "Yes. Students, faculty, and parents can access their portals on mobile through the native Zoho Creator app." }
    ]
  },
  {
    slug: "procurement-management",
    name: "Procurement Management",
    category: "Operations",
    heading: "Procurement Management Software on Zoho Creator",
    metaTitle: "Procurement Management Software on Zoho Creator | Custom Build",
    description:
      "Digitise purchase requests, approvals, vendors, and POs with a custom procurement app on Zoho Creator. Built by a certified Zoho partner.",
    keywords: ["procurement management software", "purchase management app", "Zoho Creator procurement", "purchase requisition system", "e-procurement India"],
    thumb: `${BASE}/00_solutions-main/00_solutions-main_procrument.png`,
    heroImage: `${BASE}/05_procurement/05_procurement_customizable-procurement.png`,
    heroAlt: "Procurement management app built on Zoho Creator",
    intro:
      "Manual procurement means slow approvals, maverick spend, and no audit trail. We build a custom procurement app on Zoho Creator that digitises the whole process — from purchase request to PO to receipt.",
    overview:
      "A Zoho Creator procurement build standardises how your organisation buys. Requesters raise indents, approvers sign off within defined limits, POs are generated for vendors, and every step is logged. You get control, speed, and a clean audit trail — fully customised to your approval matrix.",
    features: [
      { title: "Purchase Requests", description: "Let teams raise structured purchase requests with budgets and categories built in." },
      { title: "Approval Workflows", description: "Enforce multi-level approvals based on amount, department, or category." },
      { title: "PO & Vendor Management", description: "Generate purchase orders and manage vendor details and pricing in one place." },
      { title: "Tracking & Audit", description: "Track every request from raised to received, with a complete audit trail." }
    ],
    benefits: [
      "Faster, controlled approvals",
      "Less maverick and duplicate spend",
      "Full visibility from request to receipt",
      "A clean audit trail for compliance"
    ],
    faqs: [
      { q: "Can we match our approval matrix?", a: "Yes. We configure approval flows to your exact rules — by amount, department, category, or any combination." },
      { q: "Does it generate purchase orders?", a: "Yes. Approved requests can generate POs automatically, with vendor and pricing details pulled in." },
      { q: "Can it connect to accounting?", a: "Yes. We integrate procurement with Zoho Books so approved spend and POs sync with finance." }
    ]
  },
  {
    slug: "vendor-management",
    name: "Vendor Management",
    category: "Operations",
    heading: "Vendor Management Software on Zoho Creator",
    metaTitle: "Vendor Management Software on Zoho Creator | Custom Build",
    description:
      "Onboard, evaluate, and manage vendors in one custom app on Zoho Creator — records, documents, performance, and approvals. Built by a certified Zoho partner.",
    keywords: ["vendor management software", "supplier management app", "Zoho Creator vendor management", "vendor onboarding system", "supplier portal India"],
    thumb: `${BASE}/00_solutions-main/00_solutions-main_vendor-management.png`,
    heroImage: `${BASE}/06_vendor-management/06_vendor-management_vendor-management-build.png`,
    heroAlt: "Vendor management app built on Zoho Creator",
    intro:
      "Scattered vendor records, expired documents, and no performance view make supplier management risky. We build a custom vendor management app on Zoho Creator that centralises onboarding, compliance, and evaluation.",
    overview:
      "A Zoho Creator vendor management build gives you one register for every supplier — contacts, contracts, documents, and compliance status — plus onboarding workflows and performance scoring. You always know who you're working with, whether their documents are valid, and how they're performing.",
    features: [
      { title: "Vendor Onboarding", description: "Structured onboarding with document collection, verification, and approval workflows." },
      { title: "Document & Compliance", description: "Store contracts and certificates with expiry reminders so nothing lapses." },
      { title: "Performance Scoring", description: "Rate vendors on delivery, quality, and price to inform sourcing decisions." },
      { title: "Central Vendor Register", description: "One searchable database of all vendors, contacts, and history." }
    ],
    benefits: [
      "One reliable source of vendor data",
      "No lapsed documents or compliance gaps",
      "Data-driven sourcing decisions",
      "Faster, standardised onboarding"
    ],
    faqs: [
      { q: "Can vendors submit their own details?", a: "Yes. We can add a secure vendor portal or onboarding form so suppliers submit and update their own information." },
      { q: "Does it track document expiry?", a: "Yes. The app stores certificates and contracts with automated expiry reminders." },
      { q: "Can we score vendor performance?", a: "Yes. We build performance scoring on the metrics that matter to you — delivery, quality, price, and more." }
    ]
  },
  {
    slug: "property-management",
    name: "Property Management",
    category: "Real Estate",
    heading: "Property Management Software on Zoho Creator",
    metaTitle: "Property Management Software on Zoho Creator | Custom Build",
    description:
      "Manage properties, tenants, leases, rent, and maintenance from one custom app on Zoho Creator. Built by a certified Zoho partner.",
    keywords: ["property management software", "real estate management app", "Zoho Creator property management", "lease management system", "rent management software India"],
    thumb: `${BASE}/00_solutions-main/00_solutions-main_property-management.png`,
    heroImage: `${BASE}/07_property-management/07_property-management_streamline-property.jpg`,
    heroAlt: "Property management app built on Zoho Creator",
    intro:
      "Managing properties across spreadsheets means missed renewals, late rent, and slow maintenance. We build a custom property management app on Zoho Creator that streamlines tenants, leases, rent, and upkeep.",
    overview:
      "A Zoho Creator property management build gives you one system for your portfolio — units, tenants, lease terms, rent schedules, and maintenance requests. Automated reminders chase renewals and payments, tenants can raise requests, and dashboards show occupancy and income at a glance.",
    features: [
      { title: "Property & Unit Register", description: "Track every property and unit with status, occupancy, and key details." },
      { title: "Lease & Rent Management", description: "Manage lease terms, rent schedules, and renewals with automated reminders." },
      { title: "Maintenance Requests", description: "Let tenants raise maintenance requests and track them to resolution." },
      { title: "Dashboards & Reports", description: "See occupancy, collections, and arrears in real time." }
    ],
    benefits: [
      "No missed renewals or rent",
      "Faster maintenance resolution",
      "Clear view of occupancy and income",
      "Less admin across your portfolio"
    ],
    faqs: [
      { q: "Can tenants raise requests?", a: "Yes. We can add a tenant portal where renters submit maintenance requests and view their lease and payment details." },
      { q: "Does it remind us about renewals and rent?", a: "Yes. Automated reminders chase upcoming lease renewals and rent due dates." },
      { q: "Can it handle multiple properties?", a: "Yes. The app is built to manage a full portfolio of properties and units with role-based access." }
    ]
  },
  {
    slug: "visitor-management",
    name: "Visitor Management",
    category: "Workplace",
    heading: "Visitor Management System on Zoho Creator",
    metaTitle: "Visitor Management System on Zoho Creator | Custom Build",
    description:
      "Pre-invite, check in, and approve visitors with a custom visitor management system on Zoho Creator — fast, secure, and paperless. Built by a certified Zoho partner.",
    keywords: ["visitor management system", "visitor management software", "Zoho Creator visitor management", "front desk check-in app", "office visitor app India"],
    thumb: `${BASE}/00_solutions-main/00_solutions-main_visitor-management.png`,
    heroImage: `${BASE}/08_visitor-management/08_visitor-management_simplify-visitor.jpg`,
    heroAlt: "Visitor management system built on Zoho Creator",
    intro:
      "Paper visitor books are slow and insecure. We build a custom visitor management system on Zoho Creator that lets you pre-invite guests, check them in fast, and keep your premises secure — all paperless.",
    overview:
      "A Zoho Creator visitor management build modernises your front desk: hosts pre-invite guests, visitors check in via a tablet or QR, hosts get instant notifications, and entry approvals are enforced. You get a secure, searchable log of everyone on site — useful for security, compliance, and emergencies.",
    features: [
      { title: "Pre-Invite & QR Check-In", description: "Hosts send invites in advance; visitors check in quickly via QR or a kiosk." },
      { title: "Entry Approvals", description: "Enforce host or security approval before a visitor is allowed in." },
      { title: "Instant Host Notifications", description: "Notify hosts the moment their guest arrives, by email or app." },
      { title: "Secure Visitor Log", description: "Maintain a searchable, time-stamped record of every visit for security and audits." }
    ],
    benefits: [
      "Faster, professional check-in",
      "Stronger premises security",
      "A complete, searchable visitor log",
      "Paperless and compliance-friendly"
    ],
    faqs: [
      { q: "Can visitors be pre-invited?", a: "Yes. Hosts can pre-invite guests, who receive details in advance and check in faster on arrival." },
      { q: "Does it notify the host on arrival?", a: "Yes. Hosts get an instant notification the moment their visitor checks in." },
      { q: "Can we enforce approvals before entry?", a: "Yes. We build entry-approval steps so security or the host signs off before a visitor is allowed in." }
    ]
  },
  {
    slug: "leave-management",
    name: "Leave Management",
    category: "HR",
    heading: "Leave Management System on Zoho Creator",
    metaTitle: "Leave Management System on Zoho Creator | Custom Build",
    description:
      "Handle leave requests, approvals, balances, and policies with a custom leave management system on Zoho Creator. Built by a certified Zoho partner.",
    keywords: ["leave management system", "leave management software", "Zoho Creator leave management", "employee leave tracker", "leave approval app India"],
    thumb: `${BASE}/00_solutions-main/00_solutions-main_leave-management.png`,
    heroImage: `${BASE}/09_leave-management/09_leave-management_lms-made-easy.png`,
    heroAlt: "Leave management system built on Zoho Creator",
    intro:
      "Leave tracked over email and spreadsheets means errors, disputes, and HR headaches. We build a custom leave management system on Zoho Creator that handles requests, approvals, balances, and policies cleanly.",
    overview:
      "A Zoho Creator leave management build gives employees a simple way to request leave, managers a clear approval flow, and HR accurate balances and reports. Leave policies, holidays, and accruals are configured to your rules, so the numbers are always right.",
    features: [
      { title: "Leave Requests & Approvals", description: "Employees apply in a few taps; managers approve or decline with full context." },
      { title: "Balances & Accruals", description: "Track leave balances and accruals automatically against your policies." },
      { title: "Policy & Holiday Setup", description: "Configure leave types, holidays, and rules to match your organisation." },
      { title: "Reports & Calendar", description: "See team availability on a shared calendar and pull leave reports for HR." }
    ],
    benefits: [
      "Accurate balances, no disputes",
      "Faster approvals for managers",
      "Clear team availability view",
      "Policies enforced automatically"
    ],
    faqs: [
      { q: "Can it match our leave policies?", a: "Yes. We configure leave types, accruals, holidays, and approval rules to your exact policy." },
      { q: "Can managers approve on mobile?", a: "Yes. Managers can approve or decline leave from the native mobile app." },
      { q: "Does it connect to Zoho People?", a: "Yes. We can integrate it with Zoho People or run it standalone, depending on your setup." }
    ]
  }
];

export const getSolutionBySlug = (slug: string) => creatorSolutions.find((s) => s.slug === slug);
