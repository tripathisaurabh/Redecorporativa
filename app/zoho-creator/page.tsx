import type { Metadata } from "next";
import ServicePage, { ServicePageData } from "../../components/sections/ServicePage";
import { buildCanonical, buildKeywords } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Zoho Creator Developer & Custom App Partner in India | Low-Code Development",
  description:
    "Certified Zoho Creator developers in India. Build custom low-code apps, internal tools, and ERPs with Deluge, integrated into your Zoho stack. Flexible hourly, packaged-hour, and project pricing.",
  keywords: buildKeywords(
    "Zoho Creator developer India",
    "Zoho Creator development",
    "Zoho Creator custom app",
    "Zoho Creator consultant",
    "low-code development India",
    "custom business app Zoho",
    "Deluge developer India"
  ),
  alternates: { canonical: buildCanonical("/zoho-creator") },
  openGraph: {
    title: "Zoho Creator Developer & Custom App Partner in India",
    description:
      "Build custom low-code apps and internal tools on Zoho Creator with certified developers.",
    url: buildCanonical("/zoho-creator"),
    type: "website"
  }
};

const data: ServicePageData = {
  slug: "zoho-creator",
  eyebrow: "Zoho Creator",
  heading: "Zoho Creator Developer & Custom App Partner in India",
  intro:
    "When off-the-shelf software doesn't fit your process, we build it on Zoho Creator — custom low-code apps, internal tools, and full ERPs, integrated with the rest of your Zoho stack. Certified Zoho partner serving India and abroad.",
  image: "/products/Zoho-Creator.png",
  imageAlt: "Zoho Creator custom app development partner",
  overview:
    "Every business has processes no standard app covers — and they usually end up in fragile spreadsheets or expensive custom software. Zoho Creator lets us build exactly the app you need with low-code speed: forms, workflows, approvals, dashboards, and mobile access, all on Zoho's secure platform. We design around your real process, write the logic in Deluge, connect it to Zoho CRM, Books, and third-party systems, and ship something your team can actually use.",
  painPoints: [
    "Critical processes run on fragile, shared spreadsheets",
    "Off-the-shelf tools force your process into their mould",
    "Custom software quotes are expensive and slow to deliver",
    "Field or operations teams have no proper mobile tool",
    "Data is stuck in apps that don't connect to your Zoho stack"
  ],
  outcomes: [
    "A custom app built around your exact process, not a template",
    "Web and mobile access for office and field teams",
    "Automated workflows, approvals, and notifications",
    "Integration with Zoho CRM, Books, and external systems",
    "A maintainable app on a secure, enterprise-grade platform"
  ],
  capabilities: [
    {
      title: "Custom App Development",
      description:
        "Forms, workflows, reports, and dashboards built on Zoho Creator for your specific process — fast, with low-code."
    },
    {
      title: "Deluge Scripting",
      description:
        "Custom business logic, validations, and automations written in Deluge for behaviour standard modules can't do."
    },
    {
      title: "Custom ERP & Internal Tools",
      description:
        "Order management, field service, project tracking, and bespoke ERPs tailored to how your business actually runs."
    },
    {
      title: "Mobile Apps",
      description:
        "Native mobile access for field and operations teams, with offline-friendly forms and live data capture."
    },
    {
      title: "Integrations & APIs",
      description:
        "Connect Creator apps with Zoho CRM, Books, and third-party systems via APIs and Zoho Flow."
    },
    {
      title: "Migration from Spreadsheets",
      description:
        "Replace risky spreadsheets and legacy tools with a structured Creator app, migrating your existing data safely."
    }
  ],
  faqs: [
    {
      id: "creator-what",
      title: "What is Zoho Creator and when should we use it?",
      content:
        "Zoho Creator is a low-code platform for building custom business apps. It's the right choice when your process is too specific for off-the-shelf software but you don't want the cost and timeline of fully custom development."
    },
    {
      id: "creator-erp",
      title: "Can you build a custom ERP or internal tool on Creator?",
      content:
        "Yes. We build order management systems, field-service apps, project trackers, inventory tools, and full custom ERPs on Zoho Creator, tailored to your workflow and integrated with your other Zoho apps."
    },
    {
      id: "creator-integrate",
      title: "Can a Creator app connect to Zoho CRM, Books, and other tools?",
      content:
        "Yes. We integrate Creator apps with Zoho CRM, Books, Inventory, and third-party systems using APIs and Zoho Flow, so your custom app is part of one connected stack."
    },
    {
      id: "creator-mobile",
      title: "Do Creator apps work on mobile?",
      content:
        "Yes. Zoho Creator apps come with web and native mobile access, which is ideal for field teams capturing data on the go. We design the forms and views for mobile use."
    },
    {
      id: "creator-cost",
      title: "How much does Zoho Creator development cost?",
      content:
        "We offer flexible hourly consulting, discounted packaged-hour blocks (50, 100, 200, or 400 hours), and fixed-price project engagements. Custom apps are usually scoped as projects — we share a clear quote after understanding your requirements."
    },
    {
      id: "creator-time",
      title: "How long does it take to build a custom app?",
      content:
        "A focused single-process app can be built in 2–4 weeks. Larger multi-module apps or custom ERPs take longer and are delivered in phases. We share a milestone plan before starting."
    }
  ],
  serviceType: "Zoho Creator Development",
  serviceDescription:
    "Custom low-code app and ERP development on Zoho Creator with Deluge, including integrations and migration, by a certified Zoho partner."
};

export default function ZohoCreatorPage() {
  return <ServicePage data={data} />;
}
