import type { Metadata } from "next";
import ServicePage, { ServicePageData } from "../../components/sections/ServicePage";
import { buildCanonical, buildKeywords } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Zoho Books Setup & GST Accounting Partner in India | Implementation Experts",
  description:
    "Certified Zoho Books partner in India. GST-compliant setup, migration from Tally/Excel, automation, and integrations. Flexible hourly, packaged-hour, and project pricing. Book a free consultation.",
  keywords: buildKeywords(
    "Zoho Books partner India",
    "Zoho Books setup India",
    "Zoho Books GST",
    "Zoho Books implementation",
    "Zoho Books consultant",
    "Tally to Zoho Books migration",
    "Zoho Books accounting India"
  ),
  alternates: { canonical: buildCanonical("/zoho-books") },
  openGraph: {
    title: "Zoho Books Setup & GST Accounting Partner in India",
    description:
      "GST-compliant Zoho Books setup, migration, and automation by a certified Zoho partner.",
    url: buildCanonical("/zoho-books"),
    type: "website"
  }
};

const data: ServicePageData = {
  slug: "zoho-books",
  eyebrow: "Zoho Books",
  heading: "Zoho Books Setup & GST Accounting Partner in India",
  intro:
    "We set up Zoho Books for Indian businesses — GST-ready, integrated with your bank and sales tools, and automated so month-end close stops being a fire drill. Certified Zoho partner serving India and abroad.",
  image: "/products/zoho-books-logo.webp",
  imageAlt: "Zoho Books implementation partner",
  overview:
    "Accounting software only saves time when it's set up correctly. We configure Zoho Books for GST compliance, automate recurring invoices and payment reminders, connect it to your bank feeds and Zoho CRM, and migrate your history cleanly from Tally, Excel, or your existing tool — so your finance team gets accurate books and real-time cash visibility instead of manual reconciliation.",
  painPoints: [
    "GST filing and e-invoicing involve too much manual work",
    "Invoices and payment follow-ups depend on someone remembering",
    "Bank reconciliation and month-end close drag on for days",
    "Finance data lives apart from sales, so cash visibility is delayed",
    "Migrating from Tally or Excel feels risky and error-prone"
  ],
  outcomes: [
    "GST-compliant invoicing, e-invoicing, and tax reports out of the box",
    "Automated recurring invoices, reminders, and approval workflows",
    "Bank feeds and reconciliation set up for a faster close",
    "Books connected to CRM and inventory for end-to-end visibility",
    "Clean migration of historical data with opening balances verified"
  ],
  capabilities: [
    {
      title: "GST-Compliant Setup",
      description:
        "Tax rates, HSN/SAC codes, e-invoicing, and GST returns configured correctly for Indian compliance from day one."
    },
    {
      title: "Migration from Tally / Excel",
      description:
        "Move your chart of accounts, customers, vendors, and opening balances into Zoho Books with validation before go-live."
    },
    {
      title: "Invoicing Automation",
      description:
        "Recurring invoices, automated payment reminders, approval flows, and payment-gateway links to get you paid faster."
    },
    {
      title: "Bank & Reconciliation",
      description:
        "Bank feeds, rules, and reconciliation workflows configured so month-end close takes hours, not days."
    },
    {
      title: "Integrations",
      description:
        "Connect Zoho Books with Zoho CRM, Inventory, payment gateways, and your sales stack for a single financial picture."
    },
    {
      title: "Reports & Dashboards",
      description:
        "P&L, cash flow, receivables, and tax dashboards so decision-makers see the numbers in real time."
    }
  ],
  faqs: [
    {
      id: "books-gst",
      title: "Is Zoho Books GST compliant for Indian businesses?",
      content:
        "Yes. Zoho Books is built for Indian GST — including GST invoices, e-invoicing, e-way bills, and GSTR reports. We configure your tax rates, HSN/SAC codes, and filing settings correctly during setup."
    },
    {
      id: "books-tally",
      title: "Can you migrate us from Tally or Excel to Zoho Books?",
      content:
        "Yes. We migrate your chart of accounts, customers, vendors, items, and opening balances from Tally, Excel, or other tools. We validate balances before go-live so your books stay accurate."
    },
    {
      id: "books-cost",
      title: "How much does Zoho Books implementation cost?",
      content:
        "We offer flexible hourly consulting, discounted packaged-hour blocks (50, 100, 200, or 400 hours), and fixed-price project engagements. After a free discovery call we recommend the right model and share a clear quote."
    },
    {
      id: "books-automate",
      title: "Can you automate invoicing and payment reminders?",
      content:
        "Yes. We set up recurring invoices, automated payment reminders, approval workflows, and online payment links so you spend less time chasing payments and get paid faster."
    },
    {
      id: "books-integrate",
      title: "Can Zoho Books connect to Zoho CRM and our bank?",
      content:
        "Yes. We integrate Zoho Books with Zoho CRM, Zoho Inventory, payment gateways, and bank feeds, so sales, finance, and stock data all stay in sync."
    },
    {
      id: "books-time",
      title: "How long does setup take?",
      content:
        "A standard Zoho Books setup typically takes 1–3 weeks depending on migration volume and the integrations and automations required. We share a timeline before starting."
    }
  ],
  serviceType: "Zoho Books Implementation",
  serviceDescription:
    "GST-compliant Zoho Books setup, migration from Tally/Excel, invoicing automation, and integrations by a certified Zoho partner."
};

export default function ZohoBooksPage() {
  return <ServicePage data={data} />;
}
