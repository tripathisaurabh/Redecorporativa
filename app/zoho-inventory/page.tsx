import type { Metadata } from "next";
import ServicePage, { ServicePageData } from "../../components/sections/ServicePage";
import { buildCanonical, buildKeywords } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Zoho Inventory Setup & Implementation Partner in India | Stock & Order Management",
  description:
    "Certified Zoho Inventory partner in India. Multi-warehouse stock, order management, and integrations with Zoho Books, CRM, and your sales channels. Flexible hourly, packaged-hour, and project pricing.",
  keywords: buildKeywords(
    "Zoho Inventory partner India",
    "Zoho Inventory setup",
    "Zoho Inventory implementation",
    "Zoho Inventory consultant",
    "inventory management software India",
    "Zoho Inventory integration",
    "warehouse management Zoho"
  ),
  alternates: { canonical: buildCanonical("/zoho-inventory") },
  openGraph: {
    title: "Zoho Inventory Setup & Implementation Partner in India",
    description:
      "Multi-warehouse stock and order management with Zoho Inventory, set up and integrated by a certified Zoho partner.",
    url: buildCanonical("/zoho-inventory"),
    type: "website"
  }
};

const data: ServicePageData = {
  slug: "zoho-inventory",
  eyebrow: "Zoho Inventory",
  heading: "Zoho Inventory Setup & Implementation Partner in India",
  intro:
    "We set up Zoho Inventory for businesses that need real control over stock and orders — multi-warehouse tracking, order automation, and tight integration with Zoho Books, CRM, and your sales channels. Certified Zoho partner.",
  // NOTE: Replace with the official Zoho Inventory logo once added at /public/products/zoho-inventory.webp
  image: "/products/research.svg",
  imageAlt: "Zoho Inventory implementation partner",
  overview:
    "Stockouts, overselling, and manual order tracking quietly cost you sales and margin. We configure Zoho Inventory to give you accurate, real-time stock across warehouses, automate purchase and sales order flows, and connect it to Zoho Books and your sales channels — so inventory, accounting, and fulfilment all move together instead of being reconciled by hand.",
  painPoints: [
    "Stock counts are never quite accurate across locations",
    "Overselling and stockouts happen because data lags behind sales",
    "Purchase and sales orders are tracked in spreadsheets",
    "Inventory, accounting, and sales systems don't talk to each other",
    "No clear view of fast-movers, dead stock, or reorder points"
  ],
  outcomes: [
    "Real-time, accurate stock across multiple warehouses",
    "Automated purchase orders, reorder points, and order workflows",
    "Inventory synced with Zoho Books for accurate costing and accounts",
    "Connected sales channels so stock updates as you sell",
    "Reports on stock movement, valuation, and reorder needs"
  ],
  capabilities: [
    {
      title: "Inventory Setup",
      description:
        "Items, SKUs, price lists, warehouses, and stock locations configured for accurate, real-time tracking."
    },
    {
      title: "Order Management",
      description:
        "Sales orders, purchase orders, packages, and shipments configured with the approval and fulfilment flows you need."
    },
    {
      title: "Reorder Automation",
      description:
        "Reorder points, automated purchase orders, and low-stock alerts so you never scramble or oversell."
    },
    {
      title: "Books & CRM Integration",
      description:
        "Sync Zoho Inventory with Zoho Books for costing and accounting, and with CRM so sales sees live stock."
    },
    {
      title: "Sales Channel Sync",
      description:
        "Connect marketplaces, e-commerce, and shipping carriers so stock and orders stay in step across channels."
    },
    {
      title: "Reports & Valuation",
      description:
        "Stock summary, inventory valuation, fast/slow movers, and reorder reports for confident purchasing decisions."
    }
  ],
  faqs: [
    {
      id: "inv-multi",
      title: "Does Zoho Inventory support multiple warehouses?",
      content:
        "Yes. Zoho Inventory tracks stock across multiple warehouses and locations in real time. We configure your locations, transfer flows, and per-warehouse reporting during setup."
    },
    {
      id: "inv-books",
      title: "Can Zoho Inventory integrate with Zoho Books and CRM?",
      content:
        "Yes. We integrate Zoho Inventory with Zoho Books for accurate costing and accounting, and with Zoho CRM so your sales team can see live stock while quoting and closing."
    },
    {
      id: "inv-channels",
      title: "Can you connect our sales channels and shipping?",
      content:
        "Yes. Zoho Inventory connects with e-commerce platforms, marketplaces, and shipping carriers, so orders and stock levels stay synced across every channel you sell on."
    },
    {
      id: "inv-cost",
      title: "How much does Zoho Inventory implementation cost?",
      content:
        "We offer flexible hourly consulting, discounted packaged-hour blocks (50, 100, 200, or 400 hours), and fixed-price project engagements. After a free discovery call we recommend the right model and share a clear quote."
    },
    {
      id: "inv-migrate",
      title: "Can you migrate our existing stock data?",
      content:
        "Yes. We import your items, SKUs, opening stock, and vendor data from spreadsheets or your current system, with validation before go-live so balances are correct."
    },
    {
      id: "inv-time",
      title: "How long does setup take?",
      content:
        "A standard Zoho Inventory setup typically takes 1–3 weeks depending on the number of warehouses, channels, and integrations. We share a timeline before starting."
    }
  ],
  serviceType: "Zoho Inventory Implementation",
  serviceDescription:
    "Zoho Inventory setup, multi-warehouse stock and order management, reorder automation, and integrations by a certified Zoho partner."
};

export default function ZohoInventoryPage() {
  return <ServicePage data={data} />;
}
