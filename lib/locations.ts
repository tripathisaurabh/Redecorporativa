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
  ,
  {
    slug: "zoho-partner-pune",
    city: "Pune",
    region: "Maharashtra",
    heading: "Zoho Partner in Pune",
    metaTitle: "Zoho Partner in Pune | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner for Pune businesses — IT, auto, and manufacturing. Zoho CRM, Zoho One, and automation implementation with a remote-first model. Book a free consultation.",
    keywords: ["Zoho partner Pune", "Zoho consultant Pune", "Zoho CRM Pune", "Zoho implementation Pune", "Zoho developer Pune"],
    intro:
      "We're a certified Zoho partner working with businesses across Pune — from Hinjewadi IT firms to the manufacturing belt in Chakan and Pimpri-Chinchwad. Pune companies get a senior Zoho team and a proven remote-first delivery model, with on-site sessions when a project calls for it.",
    localAngle:
      "Pune blends IT/ITES, automobile and engineering manufacturing, and a fast-growing startup scene. We help Pune businesses replace disconnected tools and spreadsheets with automated Zoho workflows — so sales, production, and finance run on one connected system.",
    industries: [
      "IT & ITES (Hinjewadi, Kharadi)",
      "Automobile & auto components",
      "Engineering & manufacturing (Chakan, PCMC)",
      "Startups & SaaS",
      "Education & training",
      "Professional & B2B services"
    ],
    faqs: [
      { q: "Do you work with Pune businesses remotely?", a: "Yes. We deliver through a structured remote-first model with regular check-ins and clear documentation, and arrange on-site sessions when a project benefits from them." },
      { q: "Can you build apps for Pune manufacturers?", a: "Yes. We build custom manufacturing and operations apps on Zoho Creator — production tracking, MRP, and quality — alongside CRM and finance setup." },
      { q: "What Zoho services do you offer in Pune?", a: "Zoho CRM, Zoho One, Books, People, Creator, Inventory, and full business process automation — under flexible hourly, packaged-hour, or project pricing." }
    ]
  },
  {
    slug: "zoho-partner-bengaluru",
    city: "Bengaluru",
    region: "Karnataka",
    heading: "Zoho Partner in Bengaluru",
    metaTitle: "Zoho Partner in Bengaluru | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner for Bengaluru startups and enterprises. Zoho CRM, Zoho One, and automation implementation with a remote-first model. Book a free consultation.",
    keywords: ["Zoho partner Bengaluru", "Zoho consultant Bangalore", "Zoho CRM Bangalore", "Zoho implementation Bengaluru", "Zoho developer Bangalore"],
    intro:
      "We're a certified Zoho partner helping businesses across Bengaluru — India's technology capital. From high-growth startups to established enterprises, Bengaluru teams get an experienced Zoho team and a delivery model built for fast-moving companies.",
    localAngle:
      "Bengaluru's startups and SaaS companies scale fast and need systems that keep up. We help them stand up Zoho CRM and Zoho One quickly, automate sales and operations, and integrate their stack — so growth doesn't get bottlenecked by manual work.",
    industries: [
      "Startups & SaaS",
      "IT & software services",
      "E-commerce & D2C",
      "Deep tech & biotech",
      "Financial services & fintech",
      "Professional & B2B services"
    ],
    faqs: [
      { q: "Do you work with Bengaluru startups remotely?", a: "Yes. Our remote-first model suits fast-moving Bengaluru teams — structured discovery, quick iterations, and clear documentation, with on-site sessions when useful." },
      { q: "Can you help us scale Zoho as we grow?", a: "Yes. We design your Zoho setup to scale — clean data, automation, and integrations — and support you through each growth stage with flexible engagement." },
      { q: "What Zoho services do you offer in Bengaluru?", a: "Zoho CRM, Zoho One, Books, People, Creator, Inventory, and full business process automation — under flexible hourly, packaged-hour, or project pricing." }
    ]
  },
  {
    slug: "zoho-partner-hyderabad",
    city: "Hyderabad",
    region: "Telangana",
    heading: "Zoho Partner in Hyderabad",
    metaTitle: "Zoho Partner in Hyderabad | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner for Hyderabad's IT, pharma, and life-sciences businesses. Zoho CRM, Zoho One, and automation with a remote-first model. Book a free consultation.",
    keywords: ["Zoho partner Hyderabad", "Zoho consultant Hyderabad", "Zoho CRM Hyderabad", "Zoho implementation Hyderabad", "Zoho developer Hyderabad"],
    intro:
      "We're a certified Zoho partner working with businesses across Hyderabad — from HITEC City IT firms to pharma and life-sciences companies in Genome Valley. Hyderabad teams get a senior Zoho team and a reliable remote-first delivery model.",
    localAngle:
      "Hyderabad's mix of IT, pharma, and life sciences means process rigour and compliance matter. We help Hyderabad businesses build compliant, automated Zoho workflows across sales, operations, and finance — and custom apps where standard tools fall short.",
    industries: [
      "IT & software (HITEC City)",
      "Pharma & life sciences",
      "Healthcare & diagnostics",
      "Manufacturing",
      "Real estate & construction",
      "Professional & B2B services"
    ],
    faqs: [
      { q: "Do you work with Hyderabad businesses remotely?", a: "Yes. We deliver through a structured remote-first model with regular check-ins and documentation, and arrange on-site sessions when a project benefits from them." },
      { q: "Can you support pharma and compliance needs?", a: "Yes. We configure Zoho around your reporting and compliance requirements and build custom apps on Zoho Creator for regulated, process-heavy workflows." },
      { q: "What Zoho services do you offer in Hyderabad?", a: "Zoho CRM, Zoho One, Books, People, Creator, Inventory, and full business process automation — under flexible hourly, packaged-hour, or project pricing." }
    ]
  },
  {
    slug: "zoho-partner-chennai",
    city: "Chennai",
    region: "Tamil Nadu",
    heading: "Zoho Partner in Chennai",
    metaTitle: "Zoho Partner in Chennai | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner for Chennai's automobile, manufacturing, and IT businesses. Zoho CRM, Zoho One, and automation with a remote-first model. Book a free consultation.",
    keywords: ["Zoho partner Chennai", "Zoho consultant Chennai", "Zoho CRM Chennai", "Zoho implementation Chennai", "Zoho developer Chennai"],
    intro:
      "We're a certified Zoho partner working with businesses across Chennai — the 'Detroit of India'. From auto and manufacturing to the IT corridor on OMR, Chennai teams get an experienced Zoho team and a proven remote-first delivery model.",
    localAngle:
      "Chennai's automobile and manufacturing base runs on tight coordination between sales, production, and supply chain. We help Chennai businesses connect these with Zoho — CRM, inventory, custom Creator apps — and automate the manual handoffs that slow delivery.",
    industries: [
      "Automobile & auto components",
      "Manufacturing & engineering",
      "IT & software (OMR corridor)",
      "Healthcare & hospitals",
      "Logistics & supply chain",
      "Professional & B2B services"
    ],
    faqs: [
      { q: "Do you work with Chennai businesses remotely?", a: "Yes. We deliver through a structured remote-first model with regular check-ins and documentation, and arrange on-site sessions when a project benefits from them." },
      { q: "Can you help auto and manufacturing firms?", a: "Yes. We build production, inventory, and dealer-management workflows on Zoho, including custom Zoho Creator apps tailored to your process." },
      { q: "What Zoho services do you offer in Chennai?", a: "Zoho CRM, Zoho One, Books, People, Creator, Inventory, and full business process automation — under flexible hourly, packaged-hour, or project pricing." }
    ]
  },
  {
    slug: "zoho-partner-ahmedabad",
    city: "Ahmedabad",
    region: "Gujarat",
    heading: "Zoho Partner in Ahmedabad",
    metaTitle: "Zoho Partner in Ahmedabad | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner for Ahmedabad's pharma, textile, and manufacturing businesses. Zoho CRM, Zoho One, and automation with a remote-first model. Book a free consultation.",
    keywords: ["Zoho partner Ahmedabad", "Zoho consultant Ahmedabad", "Zoho CRM Ahmedabad", "Zoho implementation Ahmedabad", "Zoho partner Gujarat"],
    intro:
      "We're a certified Zoho partner working with businesses across Ahmedabad and Gujarat — a powerhouse of pharma, textiles, chemicals, and MSMEs. Ahmedabad teams get a senior Zoho team and a proven remote-first delivery model.",
    localAngle:
      "Gujarat's MSMEs and manufacturers are fast adopters of software that pays for itself. We help Ahmedabad businesses digitise sales, procurement, and production with Zoho, set up GST-ready finance, and build custom Creator apps for their specific processes.",
    industries: [
      "Pharma & chemicals",
      "Textiles & apparel",
      "Manufacturing & MSMEs",
      "Trading & distribution",
      "Fintech (GIFT City)",
      "Professional & B2B services"
    ],
    faqs: [
      { q: "Do you work with Ahmedabad businesses remotely?", a: "Yes. We deliver through a structured remote-first model with regular check-ins and documentation, and arrange on-site sessions when a project benefits from them." },
      { q: "Can you set up GST-ready finance?", a: "Yes. We configure GST-ready Zoho Books and finance workflows, and connect them to your CRM and operations for a single view." },
      { q: "What Zoho services do you offer in Ahmedabad?", a: "Zoho CRM, Zoho One, Books, People, Creator, Inventory, and full business process automation — under flexible hourly, packaged-hour, or project pricing." }
    ]
  },
  {
    slug: "zoho-partner-indore",
    city: "Indore",
    region: "Madhya Pradesh",
    heading: "Zoho Partner in Indore",
    metaTitle: "Zoho Partner in Indore | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner for Indore's commercial, industrial, and IT businesses. Zoho CRM, Zoho One, and automation with a remote-first model. Book a free consultation.",
    keywords: ["Zoho partner Indore", "Zoho consultant Indore", "Zoho CRM Indore", "Zoho implementation Indore", "Zoho partner MP"],
    intro:
      "We're a certified Zoho partner working with businesses across Indore — the commercial capital of Madhya Pradesh. From the Pithampur industrial belt to Crystal IT Park, Indore teams get an experienced Zoho team and a reliable remote-first delivery model.",
    localAngle:
      "Indore's mix of trading, food processing, pharma, and the Pithampur auto/manufacturing hub means growing businesses need systems that scale. We help Indore companies put Zoho to work across sales, inventory, and finance — and build custom apps for their operations.",
    industries: [
      "Manufacturing (Pithampur belt)",
      "Food processing & FMCG",
      "Pharma & healthcare",
      "Trading & distribution",
      "IT & ITES (Crystal IT Park)",
      "Education & professional services"
    ],
    faqs: [
      { q: "Do you work with Indore businesses remotely?", a: "Yes. We deliver through a structured remote-first model with regular check-ins and documentation, and arrange on-site sessions when a project benefits from them." },
      { q: "Can you digitise our trading or manufacturing process?", a: "Yes. We build inventory, order, and production workflows on Zoho — including custom Zoho Creator apps — connected to your CRM and finance." },
      { q: "What Zoho services do you offer in Indore?", a: "Zoho CRM, Zoho One, Books, People, Creator, Inventory, and full business process automation — under flexible hourly, packaged-hour, or project pricing." }
    ]
  },
  {
    slug: "zoho-partner-bhopal",
    city: "Bhopal",
    region: "Madhya Pradesh",
    heading: "Zoho Partner in Bhopal",
    metaTitle: "Zoho Partner in Bhopal | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner for Bhopal businesses — enterprises, education, and healthcare. Zoho CRM, Zoho One, and automation with a remote-first model. Book a free consultation.",
    keywords: ["Zoho partner Bhopal", "Zoho consultant Bhopal", "Zoho CRM Bhopal", "Zoho implementation Bhopal", "Zoho partner MP"],
    intro:
      "We're a certified Zoho partner working with organisations across Bhopal — the capital of Madhya Pradesh. Bhopal teams get an experienced Zoho team and a reliable remote-first delivery model, with on-site sessions when a project calls for it.",
    localAngle:
      "Bhopal's growing base of education institutions, healthcare providers, and services businesses need efficient, connected systems. We help them replace manual processes with Zoho — CRM, HR, finance, and custom Creator apps for admissions, operations, and more.",
    industries: [
      "Education & training institutions",
      "Healthcare & hospitals",
      "Manufacturing & MSMEs",
      "Real estate & construction",
      "Professional & B2B services",
      "Retail & distribution"
    ],
    faqs: [
      { q: "Do you work with Bhopal organisations remotely?", a: "Yes. We deliver through a structured remote-first model with regular check-ins and documentation, and arrange on-site sessions when a project benefits from them." },
      { q: "Can you build an education or admissions system?", a: "Yes. We build custom education ERPs and admissions apps on Zoho Creator, with portals for admins, staff, students, and parents." },
      { q: "What Zoho services do you offer in Bhopal?", a: "Zoho CRM, Zoho One, Books, People, Creator, Inventory, and full business process automation — under flexible hourly, packaged-hour, or project pricing." }
    ]
  },
  {
    slug: "zoho-partner-durg-bhilai",
    city: "Durg-Bhilai",
    region: "Chhattisgarh",
    heading: "Zoho Partner in Durg-Bhilai",
    metaTitle: "Zoho Partner in Durg-Bhilai | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner for Durg-Bhilai's steel, engineering, and manufacturing businesses. Zoho CRM, Zoho One, and automation with a remote-first model. Book a free consultation.",
    keywords: ["Zoho partner Durg", "Zoho partner Bhilai", "Zoho consultant Chhattisgarh", "Zoho CRM Bhilai", "Zoho implementation Durg"],
    intro:
      "We're a certified Zoho partner working with businesses across the Durg-Bhilai industrial belt in Chhattisgarh — home to the Bhilai Steel Plant and a dense cluster of engineering and manufacturing firms. You get an experienced Zoho team and a reliable remote-first delivery model.",
    localAngle:
      "The Durg-Bhilai region runs on heavy industry, engineering, and the ancillary units around it. We help these businesses bring sales, procurement, production, and dispatch into one connected Zoho system — and build custom Zoho Creator apps for shop-floor and operations processes.",
    industries: [
      "Steel & heavy engineering",
      "Manufacturing & fabrication",
      "Industrial ancillaries & suppliers",
      "Logistics & transport",
      "Trading & distribution",
      "Professional & B2B services"
    ],
    faqs: [
      { q: "Do you work with Durg-Bhilai businesses remotely?", a: "Yes. We deliver through a structured remote-first model with regular check-ins and documentation, and arrange on-site sessions when a project benefits from them." },
      { q: "Can you digitise industrial and shop-floor processes?", a: "Yes. We build custom operations, production, and dispatch apps on Zoho Creator, connected to your CRM, inventory, and finance." },
      { q: "What Zoho services do you offer in Durg-Bhilai?", a: "Zoho CRM, Zoho One, Books, People, Creator, Inventory, and full business process automation — under flexible hourly, packaged-hour, or project pricing." }
    ]
  },
  {
    slug: "zoho-partner-nagpur",
    city: "Nagpur",
    region: "Maharashtra",
    heading: "Zoho Partner in Nagpur",
    metaTitle: "Zoho Partner in Nagpur | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner for Nagpur's logistics, manufacturing, and agro businesses. Zoho CRM, Zoho One, and automation with a remote-first model. Book a free consultation.",
    keywords: ["Zoho partner Nagpur", "Zoho consultant Nagpur", "Zoho CRM Nagpur", "Zoho implementation Nagpur", "Zoho developer Nagpur"],
    intro:
      "We're a certified Zoho partner working with businesses across Nagpur — central India's logistics and industrial hub, anchored by MIHAN. Nagpur teams get an experienced Zoho team and a reliable remote-first delivery model.",
    localAngle:
      "Nagpur's position as a logistics and distribution centre, plus its manufacturing and agro-processing base, means connected operations matter. We help Nagpur businesses automate order-to-dispatch, inventory, and finance with Zoho, and build custom apps for their workflows.",
    industries: [
      "Logistics & distribution (MIHAN)",
      "Manufacturing & engineering",
      "Agro-processing & FMCG",
      "IT & ITES",
      "Trading & wholesale",
      "Professional & B2B services"
    ],
    faqs: [
      { q: "Do you work with Nagpur businesses remotely?", a: "Yes. We deliver through a structured remote-first model with regular check-ins and documentation, and arrange on-site sessions when a project benefits from them." },
      { q: "Can you automate order and dispatch workflows?", a: "Yes. We build order-to-dispatch, inventory, and logistics workflows on Zoho, including custom Zoho Creator apps connected to CRM and finance." },
      { q: "What Zoho services do you offer in Nagpur?", a: "Zoho CRM, Zoho One, Books, People, Creator, Inventory, and full business process automation — under flexible hourly, packaged-hour, or project pricing." }
    ]
  },
  {
    slug: "zoho-partner-surat",
    city: "Surat",
    region: "Gujarat",
    heading: "Zoho Partner in Surat",
    metaTitle: "Zoho Partner in Surat | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner for Surat's textile, diamond, and trading businesses. Zoho CRM, Zoho One, and automation with a remote-first model. Book a free consultation.",
    keywords: ["Zoho partner Surat", "Zoho consultant Surat", "Zoho CRM Surat", "Zoho implementation Surat", "Zoho partner Gujarat"],
    intro:
      "We're a certified Zoho partner working with businesses across Surat — the heart of India's textile and diamond industries. Surat teams get an experienced Zoho team and a proven remote-first delivery model.",
    localAngle:
      "Surat's textile, diamond, and trading businesses run high volumes with tight margins. We help them digitise orders, inventory, and finance on Zoho, automate the manual follow-ups that slow cash flow, and build custom Creator apps for their trade-specific workflows.",
    industries: [
      "Textiles & apparel",
      "Diamonds & gems",
      "Trading & wholesale",
      "Manufacturing & MSMEs",
      "Chemicals & processing",
      "Professional & B2B services"
    ],
    faqs: [
      { q: "Do you work with Surat businesses remotely?", a: "Yes. We deliver through a structured remote-first model with regular check-ins and documentation, and arrange on-site sessions when a project benefits from them." },
      { q: "Can you handle high-volume trading workflows?", a: "Yes. We build order, inventory, and receivables workflows on Zoho for high-volume trade, with custom Zoho Creator apps where needed." },
      { q: "What Zoho services do you offer in Surat?", a: "Zoho CRM, Zoho One, Books, People, Creator, Inventory, and full business process automation — under flexible hourly, packaged-hour, or project pricing." }
    ]
  },
  {
    slug: "zoho-partner-coimbatore",
    city: "Coimbatore",
    region: "Tamil Nadu",
    heading: "Zoho Partner in Coimbatore",
    metaTitle: "Zoho Partner in Coimbatore | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner for Coimbatore's manufacturing, engineering, and textile businesses. Zoho CRM, Zoho One, and automation with a remote-first model. Book a free consultation.",
    keywords: ["Zoho partner Coimbatore", "Zoho consultant Coimbatore", "Zoho CRM Coimbatore", "Zoho implementation Coimbatore", "Zoho developer Coimbatore"],
    intro:
      "We're a certified Zoho partner working with businesses across Coimbatore — a major manufacturing and engineering hub in Tamil Nadu. Coimbatore teams get an experienced Zoho team and a proven remote-first delivery model.",
    localAngle:
      "Coimbatore's pumps, motors, foundry, textile, and auto-component makers need tight coordination from enquiry to dispatch. We help them connect sales, production, and inventory on Zoho, and build custom Zoho Creator apps for their manufacturing processes.",
    industries: [
      "Pumps, motors & engineering",
      "Foundry & castings",
      "Textiles & apparel",
      "Auto components",
      "MSME manufacturing",
      "Professional & B2B services"
    ],
    faqs: [
      { q: "Do you work with Coimbatore businesses remotely?", a: "Yes. We deliver through a structured remote-first model with regular check-ins and documentation, and arrange on-site sessions when a project benefits from them." },
      { q: "Can you help engineering and manufacturing firms?", a: "Yes. We build enquiry-to-dispatch, production, and inventory workflows on Zoho, including custom Zoho Creator apps for your shop floor." },
      { q: "What Zoho services do you offer in Coimbatore?", a: "Zoho CRM, Zoho One, Books, People, Creator, Inventory, and full business process automation — under flexible hourly, packaged-hour, or project pricing." }
    ]
  },
  {
    slug: "zoho-partner-jaipur",
    city: "Jaipur",
    region: "Rajasthan",
    heading: "Zoho Partner in Jaipur",
    metaTitle: "Zoho Partner in Jaipur | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner for Jaipur's gems, handicrafts, tourism, and IT businesses. Zoho CRM, Zoho One, and automation with a remote-first model. Book a free consultation.",
    keywords: ["Zoho partner Jaipur", "Zoho consultant Jaipur", "Zoho CRM Jaipur", "Zoho implementation Jaipur", "Zoho partner Rajasthan"],
    intro:
      "We're a certified Zoho partner working with businesses across Jaipur — Rajasthan's commercial capital. From gems and handicrafts to tourism and a growing IT/ITES base, Jaipur teams get an experienced Zoho team and a reliable remote-first delivery model.",
    localAngle:
      "Jaipur's exporters, hospitality businesses, and services firms need systems that handle enquiries, orders, and follow-ups without the manual grind. We help them run sales, finance, and operations on Zoho, and build custom Creator apps for trade and tourism workflows.",
    industries: [
      "Gems, jewellery & handicrafts",
      "Tourism & hospitality",
      "IT & ITES",
      "Manufacturing & exports",
      "Education & healthcare",
      "Professional & B2B services"
    ],
    faqs: [
      { q: "Do you work with Jaipur businesses remotely?", a: "Yes. We deliver through a structured remote-first model with regular check-ins and documentation, and arrange on-site sessions when a project benefits from them." },
      { q: "Can you support exporters and hospitality businesses?", a: "Yes. We build enquiry, order, and booking workflows on Zoho for exporters and hospitality firms, with custom Zoho Creator apps where needed." },
      { q: "What Zoho services do you offer in Jaipur?", a: "Zoho CRM, Zoho One, Books, People, Creator, Inventory, and full business process automation — under flexible hourly, packaged-hour, or project pricing." }
    ]
  }
];

export const getLocationBySlug = (slug: string) => locationPages.find((l) => l.slug === slug);
