// AUTO-GENERATED from the Portfolio-Testimonials project (data/clients.json).
// Success Stories content for the website. Status is stored but NOT shown on the site.
// Reviews are real, with reviewer references kept brand-neutral ("the team").

export type Outcome = { value: string; label: string };
export type Delivered = { title: string; text: string };
export type FlowStep = { title: string; text: string };
export type Integration = { from: string; to: string; label: string; both?: boolean };

export type SuccessStory = {
  slug: string;
  name: string;
  industry: string;
  country: string;
  platform: string;
  status: string;
  website: string;
  headline: string;
  summary: string;
  card: string;
  screensTitle?: string;
  screensNote?: string;
  screens?: { src: string; width?: number; height?: number; caption: string }[];
  deliveredTitle: string;
  delivered: Delivered[];
  zoho: string[];
  flow: FlowStep[];
  integrationsNote: string;
  integrations: Integration[];
  outcomes: Outcome[];
};

export type ClientReview = { project: string; rating: number; date: string; text: string };

export const zohoAppLabels: Record<string, string> = {
  "crm": "CRM",
  "creator": "Creator",
  "recruit": "Recruit",
  "people": "People",
  "desk": "Desk",
  "campaigns": "Campaigns",
  "connect": "Connect",
  "backstage": "Backstage",
  "sign": "Sign",
  "projects": "Projects",
  "bookings": "Bookings",
  "meeting": "Meeting",
  "workdrive": "WorkDrive",
  "analytics": "Analytics",
  "forms": "Forms",
  "zoho-one": "One",
  "deluge": "Deluge",
  "inventory": "Inventory",
  "flow": "Flow",
  "catalyst": "Catalyst",
  "books": "Books"
};

export type ToolInfo = { name: string; icon?: string; color?: string };
export const tools: Record<string, ToolInfo> = {
  "website": {
    "name": "Company website",
    "color": "#2C6DAF"
  },
  "careers": {
    "name": "Careers site",
    "color": "#2C6DAF"
  },
  "naukri": {
    "name": "Naukri.com",
    "color": "#4A90E2"
  },
  "candidates": {
    "name": "Candidate email",
    "icon": "/success/tools/gmail.svg"
  },
  "mailchimp": {
    "name": "Mailchimp",
    "icon": "/success/tools/mailchimp.svg"
  },
  "sap": {
    "name": "SAP Business One",
    "icon": "/success/tools/sap.svg"
  },
  "outlook": {
    "name": "Outlook / M365",
    "icon": "/success/tools/microsoftoutlook.svg"
  },
  "whatsapp": {
    "name": "WhatsApp Business",
    "icon": "/success/tools/whatsapp.svg"
  },
  "cloudflare": {
    "name": "Cloudflare Worker",
    "icon": "/success/tools/cloudflare.svg"
  },
  "excel": {
    "name": "Excel registers",
    "icon": "/success/tools/microsoftexcel.svg"
  },
  "indiamart": {
    "name": "IndiaMART",
    "color": "#2E3192"
  },
  "tradeindia": {
    "name": "TradeIndia",
    "color": "#E4572E"
  },
  "eazybe": {
    "name": "WhatsApp (EazyBe)",
    "icon": "/success/tools/whatsapp.svg"
  },
  "ai": {
    "name": "AI classifier",
    "color": "#7B4DD8"
  },
  "customer": {
    "name": "Customer",
    "color": "#5A6672"
  },
  "contractors": {
    "name": "Contractors",
    "color": "#8A5A2B"
  },
  "branches": {
    "name": "Branch warehouses",
    "color": "#2C6DAF"
  },
  "google": {
    "name": "Google Places API",
    "color": "#4285F4"
  },
  "grunberapp": {
    "name": "Grunber platform",
    "color": "#25C555"
  },
  "drivers": {
    "name": "Driver network",
    "color": "#00352F"
  },
  "mobileapp": {
    "name": "Operator mobile app",
    "color": "#0E9F5A"
  },
  "textract": {
    "name": "AI receipt OCR",
    "color": "#FF9900"
  },
  "supplier": {
    "name": "Supplier liquidations",
    "color": "#5A6672"
  },
  "webadmin": {
    "name": "Manager web console",
    "color": "#2C6DAF"
  },
  "verifone": {
    "name": "POS terminal receipts",
    "color": "#1F4E7A"
  },
  "tenants": {
    "name": "Tenants",
    "color": "#5A6672"
  }
};

// Client logo filenames under /public/success/logos/. Missing -> initials fallback.
export const clientLogos: Record<string, string> = {
  "ravel-storage": "ravel.webp",
  "jood-fm": "jood.webp",
  "r-star-global": "rstar.webp",
  "grunber": "grunber.webp",
  "united-metals-laser": "united-metals-laser.webp",
  "swastik-flanges": "swastik.webp",
  "sbw-unity": "sbw.webp",
  "metalegal": "metalegal.webp",
  "international-currency-association": "ica.png",
  "glydus": "glydus.webp"
};

const allSuccessStories: SuccessStory[] = [
  {
    "slug": "ravel-storage",
    "name": "Ravel Storage",
    "industry": "Self storage",
    "country": "UAE",
    "platform": "Zoho Creator + Books",
    "status": "Live",
    "website": "https://ravelstorage.com",
    "headline": "One clear view of every storage unit, who is in it and who has paid",
    "summary": "Ravel Storage runs self-storage facilities across three branches in Abu Dhabi. Unit layouts lived on whiteboards and floor sketches, and invoices sat in Zoho Books with no link to the units, so nobody could see at a glance which units were free, who was renting what, or who was behind on payment. We brought it all into one Zoho system: units, tenants and rentals in one place, a visual map of each warehouse, and payment status flowing in from Zoho Books.",
    "card": "Whiteboards replaced by one Zoho system for units, tenants and rentals, with payment status pulled in from Zoho Books.",
    "screensTitle": "The app in use",
    "screensNote": "Screenshots from the live app. Tenant names are blurred.",
    "screens": [
      { "src": "/success/shots/ravel/layout-2d.webp", "width": 1400, "height": 682, "caption": "Floor view: every unit coloured by status, with unpaid units in red" },
      { "src": "/success/shots/ravel/layout-3d.webp", "width": 1400, "height": 745, "caption": "The same floor in 3D" },
      { "src": "/success/shots/ravel/dashboard.webp", "width": 1400, "height": 682, "caption": "Dashboard: occupancy by branch and what needs attention" }
    ],
    "deliveredTitle": "From whiteboards to one live system",
    "delivered": [
      {
        "title": "Every unit in one place",
        "text": "All units across three branches, with sizes, floors and status kept up to date automatically."
      },
      {
        "title": "See the warehouse at a glance",
        "text": "A visual map of each floor shows which units are free, rented, reserved or unpaid."
      },
      {
        "title": "Bookings without mistakes",
        "text": "Reservations, rentals, moves and move-outs follow one process, with no double booking."
      },
      {
        "title": "Payments that update themselves",
        "text": "The app is connected to their existing Zoho Books, so unpaid tenants are flagged without anyone checking manually."
      },
      {
        "title": "Daily overview",
        "text": "A dashboard of occupancy by branch plus a morning email listing what needs attention."
      },
      {
        "title": "Right access for staff",
        "text": "Branch staff can handle day-to-day bookings, while settings and deletions stay with the owner."
      }
    ],
    "zoho": [
      "creator",
      "books",
      "deluge"
    ],
    "flow": [
      {
        "title": "Set up",
        "text": "Branches, floors and units with sizes and rates."
      },
      {
        "title": "Reserve",
        "text": "A unit is held for an incoming tenant."
      },
      {
        "title": "Rent",
        "text": "The reservation becomes a rental contract."
      },
      {
        "title": "Bill",
        "text": "Invoices are raised in Zoho Books."
      },
      {
        "title": "Sync",
        "text": "Payment status flows back to tenant and unit."
      },
      {
        "title": "Move or end",
        "text": "Tenants move units or end rentals from the map."
      }
    ],
    "integrationsNote": "The apps behind it and how they work together.",
    "integrations": [
      {
        "from": "branches",
        "to": "creator",
        "label": "Units, tenants & bookings"
      },
      {
        "from": "creator",
        "to": "books",
        "label": "Customers & payment status",
        "both": true
      },
      {
        "from": "creator",
        "to": "tenants",
        "label": "Daily alerts"
      }
    ],
    "outcomes": [
      {
        "value": "110+",
        "label": "Storage units managed in one place"
      },
      {
        "value": "3",
        "label": "Branches on one system"
      },
      {
        "value": "0",
        "label": "Whiteboards needed to know what's free"
      },
      {
        "value": "Automatic",
        "label": "Payment status from Zoho Books"
      }
    ]
  },
  {
    "slug": "jood-fm",
    "name": "Jood FM",
    "industry": "Facility management",
    "country": "Saudi Arabia",
    "platform": "Zoho Creator",
    "status": "Live in production",
    "website": "",
    "headline": "A hospital-grade facility management platform on Zoho Creator",
    "summary": "Jood FM maintains critical equipment across government hospital sites in Saudi Arabia. We replaced paper log sheets and Excel registers with one CAFM platform covering assets, preventive maintenance, work orders, spare parts and site-level reporting.",
    "card": "One CAFM platform for assets, preventive maintenance, work orders and spare parts across six hospital sites.",
    "deliveredTitle": "A complete CAFM system, live across six sites",
    "delivered": [
      {
        "title": "Asset & location register",
        "text": "A five-level location tree (site, building, floor, zone, room) with every asset, O&M document and contract tied to its exact place."
      },
      {
        "title": "Preventive maintenance engine",
        "text": "PPM schedules generate work orders automatically, with checklists, SLA tracking and a completion check before close-out."
      },
      {
        "title": "Work orders & service requests",
        "text": "Requests, assignment, technician updates and a printable work-order sheet in the hospital's own layout."
      },
      {
        "title": "Spare parts & stock ledger",
        "text": "A running stock ledger per site with site-to-site stock transfers and full movement history."
      },
      {
        "title": "Digital log sheets",
        "text": "A custom widget that turns daily paper log sheets (chillers, generators, power monitoring, water checks) into mobile forms."
      },
      {
        "title": "Role-based access & training",
        "text": "Five roles with site-scoped visibility, licensed user rollout and seven illustrated how-to guides for every team."
      }
    ],
    "zoho": [
      "creator",
      "deluge",
      "workdrive"
    ],
    "flow": [
      {
        "title": "Discovery",
        "text": "Collected the client's Excel asset, parts and tools registers per site."
      },
      {
        "title": "Data model",
        "text": "Designed the location tree and asset ID standard across all sites."
      },
      {
        "title": "Build",
        "text": "Forms, roles and site-scoped access built in Zoho Creator."
      },
      {
        "title": "Automation",
        "text": "Deluge routines for PPM scheduling, SLA, stock ledger and close-out checks."
      },
      {
        "title": "Migration",
        "text": "Thousands of records loaded in batches with ID remapping."
      },
      {
        "title": "Testing",
        "text": "Each access level tested through Development, Stage and Production."
      },
      {
        "title": "Rollout",
        "text": "Users invited, guides handed over and teams trained."
      }
    ],
    "integrationsNote": "Data sources and storage we connected to the platform.",
    "integrations": [
      {
        "from": "excel",
        "to": "creator",
        "label": "Registers migrated"
      },
      {
        "from": "creator",
        "to": "workdrive",
        "label": "O&M manuals linked",
        "both": true
      }
    ],
    "outcomes": [
      {
        "value": "6",
        "label": "Hospital sites on one platform"
      },
      {
        "value": "3,500+",
        "label": "Records migrated"
      },
      {
        "value": "24",
        "label": "Forms in production"
      },
      {
        "value": "7",
        "label": "User guides delivered"
      }
    ]
  },
  {
    "slug": "r-star-global",
    "name": "R Star Global",
    "industry": "ISO consulting",
    "country": "USA",
    "platform": "Zoho CRM + Creator",
    "status": "Phase 1 live · Phase 2 in progress",
    "website": "https://rstarglobal.com",
    "headline": "From website enquiry to signed ISO project, without re-typing a thing",
    "summary": "R Star Global is a US-based ISO certification consultancy. We connected their website, pricing, e-signature and project delivery so that an enquiry flows straight through to a signed agreement and a ready-made project plan.",
    "card": "Website enquiry to priced estimate, e-signature and auto-created ISO project, all connected in Zoho.",
    "deliveredTitle": "A connected sales-to-delivery pipeline",
    "delivered": [
      {
        "title": "Website forms into CRM",
        "text": "Contact, assessment and estimator forms create or update CRM leads with de-duplication, UTM tracking and spam protection."
      },
      {
        "title": "Lead & deal blueprints",
        "text": "Guided qualification and an ISO deal journey from Signed to Project Started to Project Completed."
      },
      {
        "title": "Pricing tool",
        "text": "A Zoho Creator estimator built from R Star's price schedules, opened straight from the CRM record."
      },
      {
        "title": "Self-booked calls",
        "text": "Prospects book their own qualification call on a branded booking page with Zoho Meeting."
      },
      {
        "title": "Agreements by e-signature",
        "text": "The consultancy agreement is generated and sent through Zoho Sign; signing converts the lead to a deal."
      },
      {
        "title": "Projects on autopilot",
        "text": "A signed deal creates a Zoho Projects plan from the ISO implementation template, phases and tasks included."
      }
    ],
    "zoho": [
      "crm",
      "creator",
      "sign",
      "projects",
      "bookings",
      "meeting"
    ],
    "flow": [
      {
        "title": "Enquiry",
        "text": "A website form creates a CRM lead and sends an acknowledgement."
      },
      {
        "title": "Qualify",
        "text": "The lead blueprint assigns an owner and sends a booking link."
      },
      {
        "title": "Call",
        "text": "The prospect self-books a qualification call."
      },
      {
        "title": "Estimate",
        "text": "The rep opens the Creator pricing tool from CRM."
      },
      {
        "title": "Sign",
        "text": "The agreement is generated and sent for e-signature."
      },
      {
        "title": "Convert",
        "text": "On signing, the lead becomes a deal at the Signed stage."
      },
      {
        "title": "Deliver",
        "text": "A project is auto-created from the ISO template and tracked to completion."
      }
    ],
    "integrationsNote": "Every line below is a live data connection set up as part of the project.",
    "integrations": [
      {
        "from": "website",
        "to": "cloudflare",
        "label": "Form submissions"
      },
      {
        "from": "cloudflare",
        "to": "crm",
        "label": "Leads created"
      },
      {
        "from": "crm",
        "to": "creator",
        "label": "Estimates",
        "both": true
      },
      {
        "from": "sign",
        "to": "crm",
        "label": "Signing status"
      },
      {
        "from": "crm",
        "to": "projects",
        "label": "Projects created"
      }
    ],
    "outcomes": [
      {
        "value": "4",
        "label": "Website forms feeding CRM"
      },
      {
        "value": "6",
        "label": "Zoho apps connected"
      },
      {
        "value": "8 · 26",
        "label": "Phases · tasks auto-created per project"
      },
      {
        "value": "0",
        "label": "Manual re-entry from enquiry to project"
      }
    ]
  },
  {
    "slug": "grunber",
    "name": "Grunber",
    "industry": "Junk removal marketplace",
    "country": "USA",
    "platform": "Zoho CRM",
    "status": "Live",
    "website": "https://www.grunber.com",
    "headline": "Running a nationwide junk-removal marketplace from one CRM",
    "summary": "Grunber offers same-day junk removal across the USA through a network of independent drivers. We shaped their Zoho CRM into the operations hub for every order: a guided job lifecycle from first request to completion, driver bidding, payment follow-up and a precise address picker, all kept in sync with the Grunber platform.",
    "card": "A Zoho CRM operations hub for nationwide junk removal: order lifecycle, driver bids, payments and live sync with the Grunber platform.",
    "deliveredTitle": "An order-management hub on Zoho CRM",
    "delivered": [
      {
        "title": "12-stage order blueprint",
        "text": "Every job moves through a guided lifecycle, from new request and driver search to quote, payment, assignment, arrival and completion."
      },
      {
        "title": "Driver bidding",
        "text": "A Bids module captures driver offers on each job, with the team alerted as soon as the first bid arrives."
      },
      {
        "title": "Address picker widget",
        "text": "A Google Places-powered widget fills street, city, state, ZIP and coordinates in one step, cutting address errors."
      },
      {
        "title": "Order automation",
        "text": "Order names are generated and locked automatically, and a function moves orders across several blueprint stages in one go."
      },
      {
        "title": "Payments & reminders",
        "text": "Quote and payment reminders go out automatically as orders change stage, with mediation tracking for disputes."
      },
      {
        "title": "Platform sync",
        "text": "Stage changes, completed services and customer updates are pushed back to the Grunber platform in real time."
      }
    ],
    "zoho": [
      "crm",
      "deluge",
      "zoho-one"
    ],
    "flow": [
      {
        "title": "Request",
        "text": "A customer books a pickup and an order is created."
      },
      {
        "title": "Collect details",
        "text": "Address and job details captured, with reminders if missing."
      },
      {
        "title": "Driver bids",
        "text": "Nearby drivers bid on the job."
      },
      {
        "title": "Quote & pay",
        "text": "A quote is sent and payment is chased automatically."
      },
      {
        "title": "Assign",
        "text": "The job is assigned to a driver."
      },
      {
        "title": "En route",
        "text": "The driver marks en route and arrival."
      },
      {
        "title": "Complete",
        "text": "Service completed and synced back to the platform."
      }
    ],
    "integrationsNote": "Every line below is a live data connection in the order flow.",
    "integrations": [
      {
        "from": "google",
        "to": "crm",
        "label": "Verified addresses"
      },
      {
        "from": "drivers",
        "to": "crm",
        "label": "Bids"
      },
      {
        "from": "crm",
        "to": "grunberapp",
        "label": "Stages & completions",
        "both": true
      },
      {
        "from": "crm",
        "to": "customer",
        "label": "Quote & payment reminders"
      }
    ],
    "outcomes": [
      {
        "value": "12",
        "label": "Order stages, fully guided"
      },
      {
        "value": "Nationwide",
        "label": "Same-day jobs run from CRM"
      },
      {
        "value": "1 step",
        "label": "To capture a full verified address"
      },
      {
        "value": "Real time",
        "label": "Sync with the Grunber platform"
      }
    ]
  },
  {
    "slug": "etram",
    "name": "ETRAM Inversiones",
    "industry": "Fuel distribution",
    "country": "Dominican Republic",
    "platform": "Zoho Catalyst + mobile app",
    "status": "Delivered",
    "website": "",
    "headline": "Fuel dispatch, collections and receipt OCR on a mobile-first platform",
    "summary": "ETRAM Inversiones is a fuel and oil reseller in the Dominican Republic, supplying recurring customers such as tourist-boat operators. We delivered a fuel management platform: a mobile app for operators that works offline, a web console for managers, AI receipt OCR, and strict controls on collections, deposits and POS reconciliation.",
    "card": "Mobile and web apps for fuel dispatch, collections and POS reconciliation, with AI receipt OCR and offline capture.",
    "deliveredTitle": "A complete fuel and collections platform",
    "delivered": [
      {
        "title": "Operator mobile app",
        "text": "An Android and iOS app to record deliveries, signed delivery notes, payments and deposit slips, even with no signal."
      },
      {
        "title": "Receipt & document OCR",
        "text": "Supplier liquidations and receipts are read automatically by AI OCR, then checked by a manager before dispatch."
      },
      {
        "title": "Manager web console",
        "text": "Dispatch authorisation, a review chain (made, reviewed, authorised) and full reports with CSV and PDF export."
      },
      {
        "title": "Collections control",
        "text": "Payments settle the oldest delivery first, one deposit can be split across customers, and totals must balance exactly."
      },
      {
        "title": "48-hour aging rule",
        "text": "Alerts at 24, 40 and 48 hours, with new dispatches blocked for customers who are overdue."
      },
      {
        "title": "POS reconciliation & audit",
        "text": "Card-terminal batch closings are reconciled against sales, and every action is written to an audit log."
      }
    ],
    "zoho": [
      "catalyst"
    ],
    "flow": [
      {
        "title": "Import",
        "text": "Supplier liquidation scanned and read by OCR."
      },
      {
        "title": "Authorise",
        "text": "Manager checks lines and authorises dispatches."
      },
      {
        "title": "Deliver",
        "text": "Operator captures the signed note on the phone, offline if needed."
      },
      {
        "title": "Collect",
        "text": "Payments and deposit slips recorded with photos."
      },
      {
        "title": "Review",
        "text": "Manager approves, returns or rejects — no self-approval."
      },
      {
        "title": "Settle",
        "text": "Payments applied to the oldest open deliveries first."
      },
      {
        "title": "Control",
        "text": "Aging alerts, dispatch blocks, reports and reconciliation."
      }
    ],
    "integrationsNote": "Every line below is a data connection in the platform.",
    "integrations": [
      {
        "from": "supplier",
        "to": "textract",
        "label": "Documents scanned"
      },
      {
        "from": "textract",
        "to": "catalyst",
        "label": "Extracted lines"
      },
      {
        "from": "mobileapp",
        "to": "catalyst",
        "label": "Offline sync",
        "both": true
      },
      {
        "from": "catalyst",
        "to": "webadmin",
        "label": "Reviews & reports",
        "both": true
      },
      {
        "from": "verifone",
        "to": "catalyst",
        "label": "POS reconciliation"
      }
    ],
    "outcomes": [
      {
        "value": "2",
        "label": "Apps: mobile and web"
      },
      {
        "value": "48 h",
        "label": "Collection rule enforced automatically"
      },
      {
        "value": "100%",
        "label": "Actions captured in the audit log"
      },
      {
        "value": "Offline",
        "label": "Capture with zero duplicate entries"
      }
    ]
  },
  {
    "slug": "united-metals-laser",
    "name": "United Metals Laser",
    "industry": "Laser cutting & fabrication",
    "country": "Australia",
    "platform": "Zoho CRM + Flow",
    "status": "Stage 1 live · next stages planned",
    "website": "https://www.unitedmetalslaser.com.au",
    "headline": "Quote requests that file themselves, from inbox to estimator queue",
    "summary": "United Metals Laser is a laser-cutting and sheet-metal job shop in Perth, Western Australia. Quote requests used to arrive as emails with drawings attached and were keyed in by hand. We built an automation that reads each email, recognises a quote request, files it in Zoho CRM and stores the drawings in WorkDrive, ready for the estimators.",
    "card": "AI-assisted email intake that turns every quote request into a CRM record with its drawings filed in WorkDrive.",
    "deliveredTitle": "Automatic RFQ intake for the estimating team",
    "delivered": [
      {
        "title": "RFQ module in CRM",
        "text": "A dedicated Requests for Quote module with auto-numbering, sender links and a clear status path from New to Quoted."
      },
      {
        "title": "AI email classifier",
        "text": "Each incoming email is checked automatically to decide whether it is a genuine quote request."
      },
      {
        "title": "Customer matching",
        "text": "The sender is matched to an existing contact or lead, and a new lead is created when they are new."
      },
      {
        "title": "Drawings filed automatically",
        "text": "A WorkDrive folder is created per RFQ and every CAD or PDF attachment is uploaded into it."
      },
      {
        "title": "Linked back to CRM",
        "text": "The folder link and attachment count are written back onto the RFQ so estimators open everything in one click."
      },
      {
        "title": "Roadmap to full quoting",
        "text": "Designed to extend into costing, branded quotes and a link with the shop's nesting and accounting systems."
      }
    ],
    "zoho": [
      "crm",
      "flow",
      "workdrive"
    ],
    "flow": [
      {
        "title": "Email arrives",
        "text": "A customer emails drawings to the sales mailbox."
      },
      {
        "title": "Classify",
        "text": "An AI step decides whether it is a quote request."
      },
      {
        "title": "Match",
        "text": "The sender is matched to a contact or a new lead is created."
      },
      {
        "title": "Create RFQ",
        "text": "An RFQ record is created with its own number."
      },
      {
        "title": "File drawings",
        "text": "A WorkDrive folder is created and attachments are uploaded."
      },
      {
        "title": "Queue",
        "text": "The RFQ lands in the estimators' queue as New."
      }
    ],
    "integrationsNote": "Every line below is a live data connection in the intake flow.",
    "integrations": [
      {
        "from": "outlook",
        "to": "flow",
        "label": "New emails"
      },
      {
        "from": "flow",
        "to": "ai",
        "label": "Quote request?",
        "both": true
      },
      {
        "from": "flow",
        "to": "crm",
        "label": "Leads & RFQs"
      },
      {
        "from": "flow",
        "to": "workdrive",
        "label": "Drawings filed"
      }
    ],
    "outcomes": [
      {
        "value": "0",
        "label": "Manual re-typing per quote request"
      },
      {
        "value": "1 click",
        "label": "From RFQ to its drawings"
      },
      {
        "value": "6",
        "label": "RFQ status stages"
      },
      {
        "value": "3 + 1",
        "label": "Zoho apps + Microsoft 365 connected"
      }
    ]
  },
  {
    "slug": "swastik-flanges",
    "name": "Swastik Flanges",
    "industry": "Industrial manufacturing",
    "country": "India",
    "platform": "Zoho CRM",
    "status": "Live",
    "website": "https://www.swastikflanges.com",
    "headline": "Online leads to GST-ready quotations, all inside Zoho CRM",
    "summary": "Swastik Flanges manufactures and supplies industrial flanges from Pune, India. Their enquiries come from B2B marketplaces and WhatsApp. We set up Zoho CRM so every enquiry is captured automatically, verified before conversion, followed up on time and quoted on a branded GST quotation that keeps the deal pipeline in sync.",
    "card": "IndiaMART, TradeIndia and WhatsApp enquiries captured into Zoho CRM, with verified leads and branded GST quotations.",
    "deliveredTitle": "A sales system from first enquiry to quotation",
    "delivered": [
      {
        "title": "Marketplace lead capture",
        "text": "IndiaMART enquiries arrive instantly through a webhook and TradeIndia enquiries are fetched automatically into CRM."
      },
      {
        "title": "WhatsApp in CRM",
        "text": "WhatsApp conversations are logged against each lead and customer through EazyBe."
      },
      {
        "title": "Lead verification",
        "text": "A lead is marked ready for conversion once its GSTIN or visiting card is captured."
      },
      {
        "title": "Follow-up discipline",
        "text": "Next follow-up dates are set automatically so no enquiry goes cold."
      },
      {
        "title": "Branded GST quotation",
        "text": "A custom quotation template matching their tax-invoice layout, with HSN codes, tax breakdown, terms and bank details."
      },
      {
        "title": "Quote-to-deal sync",
        "text": "Quote stage changes update the deal stage and closing date automatically."
      }
    ],
    "zoho": [
      "crm",
      "deluge"
    ],
    "flow": [
      {
        "title": "Enquiry",
        "text": "A buyer enquires on IndiaMART, TradeIndia or WhatsApp."
      },
      {
        "title": "Capture",
        "text": "The enquiry is created as a lead in CRM automatically."
      },
      {
        "title": "Verify",
        "text": "Sales captures GSTIN or a visiting card to verify the lead."
      },
      {
        "title": "Follow up",
        "text": "Follow-up dates keep the conversation moving."
      },
      {
        "title": "Quote",
        "text": "A branded GST quotation is generated from CRM."
      },
      {
        "title": "Close",
        "text": "Quote stage updates move the deal through to won."
      }
    ],
    "integrationsNote": "Every line below is a live data connection into the CRM.",
    "integrations": [
      {
        "from": "indiamart",
        "to": "crm",
        "label": "Instant enquiries"
      },
      {
        "from": "tradeindia",
        "to": "crm",
        "label": "Enquiries fetched"
      },
      {
        "from": "eazybe",
        "to": "crm",
        "label": "Chats logged"
      },
      {
        "from": "crm",
        "to": "customer",
        "label": "GST quotations"
      }
    ],
    "outcomes": [
      {
        "value": "3",
        "label": "Enquiry channels feeding CRM"
      },
      {
        "value": "6",
        "label": "Custom Deluge functions"
      },
      {
        "value": "1",
        "label": "Branded GST quotation template"
      },
      {
        "value": "0",
        "label": "Enquiries keyed in by hand"
      }
    ]
  },
  {
    "slug": "sbw-unity",
    "name": "SBW Group (Shyam Group)",
    "industry": "Bidi manufacturing",
    "country": "India",
    "platform": "Zoho Creator",
    "status": "In build",
    "website": "https://sbwgroup.com",
    "headline": "Tracking every gram of material from warehouse to finished bundle",
    "summary": "SBW Group (Shyam Group of Companies) is a business group in Prayagraj, North India, spanning tobacco, dairy, agro processing, hospitality, logistics and real estate. For its bidi manufacturing business (SBW Unity) we are building a Zoho Creator app that allocates raw material to contract rollers, records what comes back, and follows production through sorting, packing and dispatch, branch by branch.",
    "card": "A Zoho Creator app that allocates raw material to contractors and tracks production, packing and stock across branch warehouses.",
    "deliveredTitle": "A material allocation and production app",
    "delivered": [
      {
        "title": "Masters & warehouses",
        "text": "Raw materials, items, brands, packets, bundle variants, branches and warehouses, all managed in one place."
      },
      {
        "title": "Contractor allocation",
        "text": "Raw material is issued to each contractor against a brand-wise consumption rate, so expected output is known upfront."
      },
      {
        "title": "Manufacturing & consumption",
        "text": "Production received from contractors is recorded with actual consumption compared to the rate matrix."
      },
      {
        "title": "Sorting, packing & conversion",
        "text": "Semi-finished bidis move through sorting, conversion and packing into packets and bundles."
      },
      {
        "title": "Branch-wise control",
        "text": "Users are mapped to branches and see only their branch's stock, contractors and reports."
      },
      {
        "title": "Transfers & excise",
        "text": "Transfer orders between warehouses and excise invoices close the loop on dispatch."
      }
    ],
    "zoho": [
      "creator",
      "deluge"
    ],
    "flow": [
      {
        "title": "Masters",
        "text": "Materials, brands and consumption rates set per branch."
      },
      {
        "title": "Allocate",
        "text": "Raw material issued to contractors from the warehouse."
      },
      {
        "title": "Receive",
        "text": "Rolled output and consumption recorded on return."
      },
      {
        "title": "Sort & convert",
        "text": "Semi-finished stock sorted and converted."
      },
      {
        "title": "Pack",
        "text": "Packed into packets and bundles by brand."
      },
      {
        "title": "Transfer & invoice",
        "text": "Stock moved between warehouses and invoiced."
      }
    ],
    "integrationsNote": "How stock and material move through the app.",
    "integrations": [
      {
        "from": "branches",
        "to": "contractors",
        "label": "Material issued"
      },
      {
        "from": "contractors",
        "to": "creator",
        "label": "Output & consumption"
      },
      {
        "from": "creator",
        "to": "branches",
        "label": "Transfer orders",
        "both": true
      }
    ],
    "outcomes": [
      {
        "value": "25+",
        "label": "Forms in the app"
      },
      {
        "value": "30+",
        "label": "Reports, including branch views"
      },
      {
        "value": "6",
        "label": "Production stages tracked"
      },
      {
        "value": "Branch-wise",
        "label": "Access and stock control"
      }
    ]
  },
  {
    "slug": "metalegal",
    "name": "Metalegal Advocates",
    "industry": "Legal services",
    "country": "India",
    "platform": "Zoho Recruit",
    "status": "Live",
    "website": "https://www.metalegal.in",
    "headline": "Smarter hiring for a multi-city law firm on Zoho Recruit",
    "summary": "Metalegal Advocates is a tax and economic-offences law firm with offices in Delhi, Mumbai and Bengaluru. We rebuilt their Zoho Recruit set-up so every applicant is screened against the role's criteria in seconds, every outcome gets the right email, and management sees the full hiring funnel.",
    "card": "Automatic applicant screening, clean outcomes and funnel reporting for a law firm's hiring team.",
    "deliveredTitle": "A screening-first recruitment system",
    "delivered": [
      {
        "title": "Screening questions",
        "text": "Structured eligibility questions on every job and on the careers application form, matched to each role's criteria."
      },
      {
        "title": "Automatic eligibility check",
        "text": "Each applicant is scored against the role within about a second, and nobody is rejected unless nothing matches."
      },
      {
        "title": "Clear outcome statuses",
        "text": "Separate statuses for not suitable, position closed and future opportunity, so no candidate is mislabelled."
      },
      {
        "title": "Candidate communication",
        "text": "Email templates in HR's own words and automatic notices when a position is filled or cancelled."
      },
      {
        "title": "Hiring MIS",
        "text": "Nine funnel reports by position, office and period, plus screening views for the HR team."
      },
      {
        "title": "Guides for HR",
        "text": "Step-by-step guides for job posting, screening and the full hiring flow."
      }
    ],
    "zoho": [
      "recruit",
      "people",
      "deluge"
    ],
    "flow": [
      {
        "title": "Apply",
        "text": "A candidate applies on the careers site and answers screening questions."
      },
      {
        "title": "Acknowledge",
        "text": "The application lands in Recruit and an acknowledgement goes out."
      },
      {
        "title": "Screen",
        "text": "Answers are checked against the role's criteria automatically."
      },
      {
        "title": "Shortlist",
        "text": "HR reviews matches and shortlists for the hiring manager."
      },
      {
        "title": "Interview & offer",
        "text": "Interviews are scheduled and offers made inside Recruit."
      },
      {
        "title": "Notify",
        "text": "Each final outcome triggers its own candidate email."
      },
      {
        "title": "Report & onboard",
        "text": "Funnel reports go to management; hires move to Zoho People."
      }
    ],
    "integrationsNote": "Every line below is a live data connection in the hiring flow.",
    "integrations": [
      {
        "from": "careers",
        "to": "recruit",
        "label": "Applications"
      },
      {
        "from": "naukri",
        "to": "recruit",
        "label": "Job-board applicants"
      },
      {
        "from": "recruit",
        "to": "candidates",
        "label": "Outcome emails"
      },
      {
        "from": "recruit",
        "to": "people",
        "label": "Hires to onboarding"
      }
    ],
    "outcomes": [
      {
        "value": "2,500+",
        "label": "Applications handled this year"
      },
      {
        "value": "18",
        "label": "Open positions screened"
      },
      {
        "value": "~1 sec",
        "label": "To screen each applicant"
      },
      {
        "value": "9",
        "label": "Hiring funnel reports"
      }
    ]
  },
  {
    "slug": "international-currency-association",
    "name": "International Currency Association",
    "industry": "Trade association",
    "country": "United Kingdom",
    "platform": "Zoho CRM + Campaigns",
    "status": "Live · next phase planned",
    "website": "https://currencyassociation.org",
    "headline": "One relationship hub for an international association and its programmes",
    "summary": "The International Currency Association runs the Global Currency Forum and the CashMatters programme. We brought members, delegates, committees and mailing lists from scattered spreadsheets and Mailchimp into one Zoho CRM, connected to email campaigns, the website and a private community.",
    "card": "Members, events, committees and mailing lists moved from Mailchimp and spreadsheets into one connected Zoho CRM.",
    "deliveredTitle": "A single source of truth for every relationship",
    "delivered": [
      {
        "title": "Affiliations data model",
        "text": "One record per person, programme, event edition and role, so the CRM shows exactly how each contact is involved."
      },
      {
        "title": "Committees & views",
        "text": "A committees module and 17 shared views so each team sees its own slice of the network."
      },
      {
        "title": "Mailchimp migration",
        "text": "Audience, organisations and email content moved across, with unsubscribes and bounces kept as opt-outs."
      },
      {
        "title": "Rule-based mailing lists",
        "text": "Lists built from CRM data and synced to Zoho Campaigns automatically, with domain authentication in place."
      },
      {
        "title": "Website form API",
        "text": "A secure endpoint that adds or updates the contact, files them on the right list and logs the enquiry."
      },
      {
        "title": "Private community",
        "text": "Zoho Connect groups linked to CRM, with invitations sent from the contact record."
      }
    ],
    "zoho": [
      "crm",
      "campaigns",
      "connect",
      "deluge"
    ],
    "flow": [
      {
        "title": "Audit",
        "text": "Mapped the existing CRM fields and every data source."
      },
      {
        "title": "Model",
        "text": "Designed affiliations and committees around how the association works."
      },
      {
        "title": "Migrate",
        "text": "Moved existing CRM data and the Mailchimp audience into the new model."
      },
      {
        "title": "Clean",
        "text": "Retired old fields after backup and fixed titles, sectors and duplicates."
      },
      {
        "title": "Lists",
        "text": "Built rule-based mailing lists synced to Zoho Campaigns."
      },
      {
        "title": "Website",
        "text": "Connected website forms to CRM through an API."
      },
      {
        "title": "Community",
        "text": "Linked private Connect channels to CRM contacts."
      }
    ],
    "integrationsNote": "Every line below is a data connection set up as part of the project.",
    "integrations": [
      {
        "from": "mailchimp",
        "to": "crm",
        "label": "Audience migrated"
      },
      {
        "from": "mailchimp",
        "to": "campaigns",
        "label": "Email content migrated"
      },
      {
        "from": "crm",
        "to": "campaigns",
        "label": "Mailing lists synced"
      },
      {
        "from": "website",
        "to": "crm",
        "label": "Enquiries via API"
      },
      {
        "from": "crm",
        "to": "connect",
        "label": "Groups & invites",
        "both": true
      }
    ],
    "outcomes": [
      {
        "value": "1,900+",
        "label": "Affiliations created"
      },
      {
        "value": "1,700+",
        "label": "Contacts migrated"
      },
      {
        "value": "19",
        "label": "Mailing lists synced"
      },
      {
        "value": "0",
        "label": "Rejected list pushes"
      }
    ]
  },
  {
    "slug": "glydus",
    "name": "Glydus",
    "industry": "Marine manufacturing",
    "country": "India",
    "platform": "Zoho One (designed)",
    "status": "Design delivered · build proposed",
    "website": "https://glydus.com",
    "headline": "Mapping a marine manufacturer's sales and SAP order cycle for Zoho",
    "summary": "Glydus manufactures boat steering systems in India and sells through distributors, OEMs, shipyards and tenders. We ran a structured discovery and produced a complete solution design: every sales path, the order cycle with SAP Business One, and after-sales service.",
    "card": "Discovery and full solution design for a marine manufacturer's CRM, service desk and SAP order cycle.",
    "deliveredTitle": "Discovery and a build-ready solution design",
    "delivered": [
      {
        "title": "Requirement workshop",
        "text": "A structured session with the sales and operations team covering every customer segment and sales path."
      },
      {
        "title": "Requirement document",
        "text": "A 14-module interactive requirement site with around 20 process diagrams and field specifications."
      },
      {
        "title": "Segment-based sales design",
        "text": "Outboard and inboard segments driving territory ownership, follow-up cadence, quotes and trials."
      },
      {
        "title": "SAP Business One design",
        "text": "A clean split: proforma invoices created in SAP from CRM, order and dispatch status flowing back."
      },
      {
        "title": "After-sales design",
        "text": "Complaints and technical queries in Zoho Desk with a knowledge base and renewal reviews."
      },
      {
        "title": "Phased roadmap",
        "text": "A two-phase plan: commercial core first, then SAP, service desk and analytics."
      }
    ],
    "zoho": [
      "crm",
      "desk",
      "campaigns",
      "analytics",
      "forms"
    ],
    "flow": [
      {
        "title": "Capture",
        "text": "Leads from exhibitions, website, referrals and tenders, tagged by segment."
      },
      {
        "title": "Engage",
        "text": "A capped follow-up cadence before leads move to nurture."
      },
      {
        "title": "Quote",
        "text": "Templates and price books; trials for OEM prospects."
      },
      {
        "title": "Confirm",
        "text": "Purchase order validated and carried into the proforma invoice."
      },
      {
        "title": "SAP order",
        "text": "Proforma invoice created in SAP Business One."
      },
      {
        "title": "Track",
        "text": "Order and payment status flow back to CRM."
      },
      {
        "title": "Dispatch & service",
        "text": "Dispatch updates, then after-sales in Zoho Desk."
      }
    ],
    "integrationsNote": "Connections specified in the solution design, ready for the build phase.",
    "integrations": [
      {
        "from": "crm",
        "to": "sap",
        "label": "Proforma invoice"
      },
      {
        "from": "sap",
        "to": "crm",
        "label": "Order & dispatch status"
      },
      {
        "from": "outlook",
        "to": "crm",
        "label": "Emails logged"
      },
      {
        "from": "whatsapp",
        "to": "crm",
        "label": "Chats logged"
      },
      {
        "from": "crm",
        "to": "desk",
        "label": "After-sales cases",
        "both": true
      }
    ],
    "outcomes": [
      {
        "value": "14",
        "label": "Modules specified"
      },
      {
        "value": "~20",
        "label": "Process diagrams"
      },
      {
        "value": "3",
        "label": "Sales segments mapped"
      },
      {
        "value": "2",
        "label": "Phase delivery roadmap"
      }
    ]
  }
];

// Clients temporarily hidden from the site. Remove a slug from this list to show it again.
export const HIDDEN_SLUGS: string[] = ["glydus"];

export const successStories: SuccessStory[] = allSuccessStories.filter(
  (s) => !HIDDEN_SLUGS.includes(s.slug)
);

export const clientReviews: ClientReview[] = [
  {
    "project": "Zoho Desk + Facebook integration",
    "rating": 5.0,
    "date": "Nov 2025",
    "text": "Working with the team has been a genuinely positive experience. Highly professional, deeply knowledgeable, and consistently strong on the technical side. Throughout the project they were exceptionally responsive — especially in moments that required immediate attention — and always handled tasks with reliability and calm confidence. Clear communication, a proactive attitude, and real dedication. A pleasure to collaborate with, and someone I would gladly recommend."
  },
  {
    "project": "Zoho Desk + Facebook integration",
    "rating": 5.0,
    "date": "Nov 2025",
    "text": "I had the great opportunity to work with the team on a Zoho Desk and Facebook integration project. Highly skilled, responsive, and truly dedicated to achieving results — went above and beyond, even working late hours when needed, to ensure the project's success. I highly recommend them to anyone looking for a reliable and talented specialist."
  },
  {
    "project": "Zoho Creator suite: orders, inventory, warehouse, sales & finance",
    "rating": 4.9,
    "date": "Jan 2025",
    "text": "It was really great working with the team! They could create really good systems on Zoho and mend them to your liking."
  },
  {
    "project": "Zoho custom setup, workflows & Deluge",
    "rating": 5.0,
    "date": "Feb 2023",
    "text": "The best — delivered the job very fast. I recommend them for any Zoho jobs."
  }
];

export const successStats = [
  {
    "value": "200+",
    "label": "Zoho deliveries"
  },
  {
    "value": "25+",
    "label": "Zoho apps deployed"
  },
  {
    "value": "100+",
    "label": "Integrations built"
  },
  {
    "value": "Global",
    "label": "Clients on every continent"
  }
];

export const siteCopy = {
  "headline": "Real businesses, running on systems we built.",
  "intro": "A look at the Zoho systems we have delivered: what each client needed, the process we built, the apps we connected and, in their own words, how it went."
};

export function getStory(slug: string): SuccessStory | undefined {
  return successStories.find((s) => s.slug === slug);
}
