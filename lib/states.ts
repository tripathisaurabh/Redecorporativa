export type StateFaq = { q: string; a: string };
export type StateCity = { name: string; slug: string };

export type StatePageData = {
  slug: string; // e.g. "maharashtra"
  state: string; // "Maharashtra"
  heading: string;
  metaTitle: string;
  description: string;
  keywords: string[];
  intro: string;
  angle: string;
  cities: StateCity[]; // links to city pages (slug = full path segment, e.g. "zoho-partner-mumbai")
  industries: string[];
  faqs: StateFaq[];
};

export const statePages: StatePageData[] = [
  {
    slug: "maharashtra",
    state: "Maharashtra",
    heading: "Zoho Partner in Maharashtra",
    metaTitle: "Zoho Partner in Maharashtra | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner serving businesses across Maharashtra — Mumbai, Pune, and Nagpur. Zoho CRM, Zoho One, and automation with a remote-first model. Book a free consultation.",
    keywords: ["Zoho partner Maharashtra", "Zoho consultant Maharashtra", "Zoho CRM Maharashtra", "Zoho implementation Maharashtra"],
    intro:
      "We're a certified Zoho partner working with businesses across Maharashtra — from finance and media in Mumbai to auto and manufacturing in Pune, and logistics in Nagpur. You get a senior Zoho team and a proven remote-first delivery model.",
    angle:
      "Maharashtra is India's largest state economy, spanning financial services, automobile and engineering manufacturing, IT/ITES, logistics, media, and pharma. We help Maharashtra businesses replace scattered tools with automated Zoho workflows across sales, operations, and finance.",
    cities: [
      { name: "Mumbai", slug: "zoho-partner-mumbai" },
      { name: "Pune", slug: "zoho-partner-pune" },
      { name: "Nagpur", slug: "zoho-partner-nagpur" }
    ],
    industries: ["Financial services & fintech", "Automobile & manufacturing", "IT & ITES", "Logistics & distribution", "Media & entertainment", "Pharma & healthcare"],
    faqs: [
      { q: "Which Maharashtra cities do you serve?", a: "We work with businesses across Maharashtra, with dedicated pages for Mumbai, Pune, and Nagpur — and we serve other cities in the state through our remote-first model." },
      { q: "Do you work remotely across Maharashtra?", a: "Yes. We deliver through a structured remote-first model with regular check-ins and documentation, and arrange on-site sessions when a project benefits from them." }
    ]
  },
  {
    slug: "tamil-nadu",
    state: "Tamil Nadu",
    heading: "Zoho Partner in Tamil Nadu",
    metaTitle: "Zoho Partner in Tamil Nadu | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner serving Tamil Nadu — Chennai and Coimbatore. Zoho CRM, Zoho One, and automation for auto, manufacturing, and IT. Book a free consultation.",
    keywords: ["Zoho partner Tamil Nadu", "Zoho consultant Tamil Nadu", "Zoho CRM Tamil Nadu", "Zoho implementation Tamil Nadu"],
    intro:
      "We're a certified Zoho partner working with businesses across Tamil Nadu — from the auto and IT hub of Chennai to the manufacturing cluster of Coimbatore. You get an experienced Zoho team and a proven remote-first delivery model.",
    angle:
      "Tamil Nadu is one of India's most industrialised states — automobile, engineering, textiles, leather, and a strong IT corridor. We help Tamil Nadu businesses connect sales, production, and inventory on Zoho, and build custom Zoho Creator apps for their processes.",
    cities: [
      { name: "Chennai", slug: "zoho-partner-chennai" },
      { name: "Coimbatore", slug: "zoho-partner-coimbatore" }
    ],
    industries: ["Automobile & auto components", "Manufacturing & engineering", "Textiles & apparel", "IT & software", "Foundry & castings", "Healthcare"],
    faqs: [
      { q: "Which Tamil Nadu cities do you serve?", a: "We have dedicated pages for Chennai and Coimbatore, and serve businesses across the rest of Tamil Nadu through our remote-first model." },
      { q: "Can you help manufacturers in Tamil Nadu?", a: "Yes. We build enquiry-to-dispatch, production, and inventory workflows on Zoho, including custom Zoho Creator apps for the shop floor." }
    ]
  },
  {
    slug: "gujarat",
    state: "Gujarat",
    heading: "Zoho Partner in Gujarat",
    metaTitle: "Zoho Partner in Gujarat | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner serving Gujarat — Ahmedabad and Surat. Zoho CRM, Zoho One, and automation for pharma, textiles, and MSMEs. Book a free consultation.",
    keywords: ["Zoho partner Gujarat", "Zoho consultant Gujarat", "Zoho CRM Gujarat", "Zoho implementation Gujarat"],
    intro:
      "We're a certified Zoho partner working with businesses across Gujarat — from pharma and chemicals in Ahmedabad to textiles and diamonds in Surat. You get a senior Zoho team and a proven remote-first delivery model.",
    angle:
      "Gujarat's MSMEs and manufacturers are quick to adopt software that pays for itself. We help Gujarat businesses digitise sales, procurement, and production on Zoho, set up GST-ready finance, and build custom Creator apps for their specific trades.",
    cities: [
      { name: "Ahmedabad", slug: "zoho-partner-ahmedabad" },
      { name: "Surat", slug: "zoho-partner-surat" }
    ],
    industries: ["Pharma & chemicals", "Textiles & apparel", "Diamonds & gems", "Manufacturing & MSMEs", "Trading & distribution", "Fintech (GIFT City)"],
    faqs: [
      { q: "Which Gujarat cities do you serve?", a: "We have dedicated pages for Ahmedabad and Surat, and serve businesses across the rest of Gujarat through our remote-first model." },
      { q: "Can you set up GST-ready finance?", a: "Yes. We configure GST-ready Zoho Books and finance workflows and connect them to your CRM and operations for a single view." }
    ]
  },
  {
    slug: "madhya-pradesh",
    state: "Madhya Pradesh",
    heading: "Zoho Partner in Madhya Pradesh",
    metaTitle: "Zoho Partner in Madhya Pradesh | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner serving Madhya Pradesh — Indore and Bhopal. Zoho CRM, Zoho One, and automation for manufacturing, pharma, and education. Book a free consultation.",
    keywords: ["Zoho partner Madhya Pradesh", "Zoho consultant MP", "Zoho CRM Indore Bhopal", "Zoho implementation Madhya Pradesh"],
    intro:
      "We're a certified Zoho partner working with businesses across Madhya Pradesh — from the commercial and industrial hub of Indore to the capital, Bhopal. You get an experienced Zoho team and a reliable remote-first delivery model.",
    angle:
      "Madhya Pradesh combines the Pithampur manufacturing belt, food processing, pharma, and a growing IT and education base. We help MP businesses put Zoho to work across sales, inventory, and finance, and build custom apps for their operations.",
    cities: [
      { name: "Indore", slug: "zoho-partner-indore" },
      { name: "Bhopal", slug: "zoho-partner-bhopal" }
    ],
    industries: ["Manufacturing (Pithampur belt)", "Food processing & FMCG", "Pharma & healthcare", "Education & training", "Trading & distribution", "IT & ITES"],
    faqs: [
      { q: "Which Madhya Pradesh cities do you serve?", a: "We have dedicated pages for Indore and Bhopal, and serve businesses across the rest of Madhya Pradesh through our remote-first model." },
      { q: "Do you work remotely across MP?", a: "Yes. We deliver through a structured remote-first model with regular check-ins and documentation, and arrange on-site sessions when a project benefits from them." }
    ]
  },
  {
    slug: "karnataka",
    state: "Karnataka",
    heading: "Zoho Partner in Karnataka",
    metaTitle: "Zoho Partner in Karnataka | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner serving Karnataka and Bengaluru — startups, SaaS, and enterprises. Zoho CRM, Zoho One, and automation. Book a free consultation.",
    keywords: ["Zoho partner Karnataka", "Zoho consultant Karnataka", "Zoho CRM Bangalore Karnataka", "Zoho implementation Karnataka"],
    intro:
      "We're a certified Zoho partner working with businesses across Karnataka — anchored by Bengaluru, India's technology capital. You get an experienced Zoho team and a delivery model built for fast-moving companies.",
    angle:
      "Karnataka's economy is led by IT, software, startups, biotech, and aerospace, alongside strong manufacturing. We help Karnataka businesses stand up Zoho quickly, automate sales and operations, and integrate their stack so growth isn't held back by manual work.",
    cities: [{ name: "Bengaluru", slug: "zoho-partner-bengaluru" }],
    industries: ["IT & software", "Startups & SaaS", "Biotech & deep tech", "Aerospace & defence", "Manufacturing", "Financial services"],
    faqs: [
      { q: "Which Karnataka cities do you serve?", a: "We have a dedicated Bengaluru page and serve businesses across the rest of Karnataka through our remote-first model." },
      { q: "Can you help us scale Zoho as we grow?", a: "Yes. We design your Zoho setup to scale — clean data, automation, and integrations — and support you through each growth stage with flexible engagement." }
    ]
  },
  {
    slug: "telangana",
    state: "Telangana",
    heading: "Zoho Partner in Telangana",
    metaTitle: "Zoho Partner in Telangana | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner serving Telangana and Hyderabad — IT, pharma, and life sciences. Zoho CRM, Zoho One, and automation. Book a free consultation.",
    keywords: ["Zoho partner Telangana", "Zoho consultant Telangana", "Zoho CRM Hyderabad Telangana", "Zoho implementation Telangana"],
    intro:
      "We're a certified Zoho partner working with businesses across Telangana — led by Hyderabad's IT and pharma sectors. You get a senior Zoho team and a reliable remote-first delivery model.",
    angle:
      "Telangana's economy blends IT/ITES, pharma and life sciences, and healthcare, where process rigour and compliance matter. We help Telangana businesses build compliant, automated Zoho workflows and custom apps where standard tools fall short.",
    cities: [{ name: "Hyderabad", slug: "zoho-partner-hyderabad" }],
    industries: ["IT & software (HITEC City)", "Pharma & life sciences", "Healthcare & diagnostics", "Manufacturing", "Real estate", "Professional services"],
    faqs: [
      { q: "Which Telangana cities do you serve?", a: "We have a dedicated Hyderabad page and serve businesses across the rest of Telangana through our remote-first model." },
      { q: "Can you support pharma and compliance needs?", a: "Yes. We configure Zoho around your reporting and compliance requirements and build custom Zoho Creator apps for regulated, process-heavy workflows." }
    ]
  },
  {
    slug: "chhattisgarh",
    state: "Chhattisgarh",
    heading: "Zoho Partner in Chhattisgarh",
    metaTitle: "Zoho Partner in Chhattisgarh | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner serving Chhattisgarh — Durg-Bhilai's steel and engineering belt. Zoho CRM, Zoho One, and automation. Book a free consultation.",
    keywords: ["Zoho partner Chhattisgarh", "Zoho consultant Chhattisgarh", "Zoho CRM Bhilai Durg", "Zoho implementation Chhattisgarh"],
    intro:
      "We're a certified Zoho partner working with businesses across Chhattisgarh — anchored by the Durg-Bhilai steel and engineering belt. You get an experienced Zoho team and a reliable remote-first delivery model.",
    angle:
      "Chhattisgarh's economy runs on steel, heavy industry, mining ancillaries, and power. We help these businesses bring sales, procurement, production, and dispatch into one connected Zoho system, and build custom Creator apps for shop-floor and operations processes.",
    cities: [{ name: "Durg-Bhilai", slug: "zoho-partner-durg-bhilai" }],
    industries: ["Steel & heavy engineering", "Mining ancillaries", "Manufacturing & fabrication", "Power & utilities", "Logistics & transport", "Trading & distribution"],
    faqs: [
      { q: "Which Chhattisgarh areas do you serve?", a: "We have a dedicated Durg-Bhilai page and serve businesses across the rest of Chhattisgarh through our remote-first model." },
      { q: "Can you digitise industrial processes?", a: "Yes. We build custom operations, production, and dispatch apps on Zoho Creator, connected to your CRM, inventory, and finance." }
    ]
  },
  {
    slug: "rajasthan",
    state: "Rajasthan",
    heading: "Zoho Partner in Rajasthan",
    metaTitle: "Zoho Partner in Rajasthan | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner serving Rajasthan and Jaipur — gems, tourism, and exports. Zoho CRM, Zoho One, and automation. Book a free consultation.",
    keywords: ["Zoho partner Rajasthan", "Zoho consultant Rajasthan", "Zoho CRM Jaipur Rajasthan", "Zoho implementation Rajasthan"],
    intro:
      "We're a certified Zoho partner working with businesses across Rajasthan — led by the commercial capital, Jaipur. You get an experienced Zoho team and a reliable remote-first delivery model.",
    angle:
      "Rajasthan's economy spans gems and jewellery, tourism and hospitality, textiles, minerals, and a growing IT/ITES base. We help Rajasthan businesses run sales, finance, and operations on Zoho, and build custom Creator apps for trade and tourism workflows.",
    cities: [{ name: "Jaipur", slug: "zoho-partner-jaipur" }],
    industries: ["Gems, jewellery & handicrafts", "Tourism & hospitality", "Textiles & exports", "Minerals & mining", "IT & ITES", "Education & healthcare"],
    faqs: [
      { q: "Which Rajasthan cities do you serve?", a: "We have a dedicated Jaipur page and serve businesses across the rest of Rajasthan through our remote-first model." },
      { q: "Can you support exporters and hospitality businesses?", a: "Yes. We build enquiry, order, and booking workflows on Zoho for exporters and hospitality firms, with custom Zoho Creator apps where needed." }
    ]
  },
  {
    slug: "uttar-pradesh",
    state: "Uttar Pradesh",
    heading: "Zoho Partner in Uttar Pradesh",
    metaTitle: "Zoho Partner in Uttar Pradesh | Certified Zoho CRM & Automation Experts",
    description:
      "Certified Zoho partner serving Uttar Pradesh — Noida and the wider region. Zoho CRM, Zoho One, and automation. Book a free consultation.",
    keywords: ["Zoho partner Uttar Pradesh", "Zoho consultant UP", "Zoho CRM Noida UP", "Zoho implementation Uttar Pradesh"],
    intro:
      "We're a certified Zoho partner headquartered in Noida, Uttar Pradesh — serving businesses across the state and the wider NCR. You get an on-ground team for the Noida–Greater Noida belt and a reliable delivery model for the rest of UP.",
    angle:
      "Uttar Pradesh combines the IT/ITES and manufacturing strength of Noida–Greater Noida with a vast base of MSMEs and agri-processing across the state. As a Noida-based partner, we help UP businesses digitise and automate their operations on Zoho.",
    cities: [{ name: "Noida", slug: "zoho-partner-noida" }],
    industries: ["IT & ITES (Noida)", "Manufacturing & industrial units", "MSMEs & trading", "Agri-processing", "Real estate & PropTech", "Professional services"],
    faqs: [
      { q: "Are you based in Uttar Pradesh?", a: "Yes. We're headquartered in Noida, Uttar Pradesh, and serve businesses across the state, with on-site options for the Noida and Greater Noida area." },
      { q: "Which UP areas do you serve?", a: "We have a dedicated Noida page and serve businesses across the rest of Uttar Pradesh through our remote-first model, with on-site sessions in the NCR." }
    ]
  }
];

export const getStateBySlug = (slug: string) => statePages.find((s) => s.slug === slug);
