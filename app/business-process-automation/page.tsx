import type { Metadata } from "next";
import ServicePage, { ServicePageData } from "../../components/sections/ServicePage";
import { buildCanonical, buildKeywords } from "../../lib/seo";

export const metadata: Metadata = {
  title: "Business Process Automation Services in India | Workflow Automation Experts",
  description:
    "Automate manual business processes with Zoho — workflows, approvals, WhatsApp, and cross-app automation. Certified Zoho partner in India. Flexible hourly, packaged-hour, and project pricing.",
  keywords: buildKeywords(
    "business process automation India",
    "workflow automation service India",
    "business automation company India",
    "process automation Zoho",
    "automate business processes",
    "Zoho Flow automation",
    "Zoho Creator automation"
  ),
  alternates: { canonical: buildCanonical("/business-process-automation") },
  openGraph: {
    title: "Business Process Automation Services in India",
    description:
      "Automate manual, repetitive work across your business with Zoho workflows and custom apps, built by a certified Zoho partner.",
    url: buildCanonical("/business-process-automation"),
    type: "website"
  }
};

const data: ServicePageData = {
  slug: "business-process-automation",
  eyebrow: "Business Automation",
  heading: "Business Process Automation Services in India",
  intro:
    "We remove the repetitive, manual work that slows your team down — automating workflows, approvals, notifications, and cross-app processes using Zoho's automation platform. Certified Zoho partner serving India and abroad.",
  image: "/products/design-1.svg",
  imageAlt: "Business process automation services",
  overview:
    "Every business runs on processes — approvals, handoffs, data entry, follow-ups — and most of them still happen by hand. That's slow, error-prone, and expensive. We map how work actually flows through your business, then automate the repetitive steps using Zoho workflows, Zoho Flow, and custom Creator apps, so your team spends time on judgement and customers instead of copying data between tools.",
  painPoints: [
    "The same data gets re-entered across multiple tools",
    "Approvals and handoffs stall in email and chat",
    "Reports are stitched together manually every week",
    "Tasks slip because nothing triggers the next step automatically",
    "Apps don't talk to each other, so people become the integration"
  ],
  outcomes: [
    "Manual, repetitive steps replaced with reliable automation",
    "Approvals, routing, and notifications that trigger themselves",
    "Apps connected so data flows without copy-paste",
    "Custom apps for processes off-the-shelf tools can't handle",
    "Time and error reduction you can measure"
  ],
  capabilities: [
    {
      title: "Process Discovery",
      description:
        "We map your current workflows end to end, find the bottlenecks and manual steps, and prioritize what to automate first."
    },
    {
      title: "Workflow Automation",
      description:
        "Rules, blueprints, approvals, and SLA-driven actions built natively in Zoho CRM, Books, People, and beyond."
    },
    {
      title: "Cross-App Automation",
      description:
        "Zoho Flow and APIs to connect Zoho apps with each other and with third-party tools so processes run across systems."
    },
    {
      title: "Custom Apps (Zoho Creator)",
      description:
        "When no off-the-shelf module fits, we build custom Creator apps with Deluge for your exact process."
    },
    {
      title: "WhatsApp & Notifications",
      description:
        "Automated WhatsApp, email, and SMS notifications triggered by events — so the right people are updated instantly."
    },
    {
      title: "Dashboards & Monitoring",
      description:
        "Visibility into automated processes with dashboards and alerts so you can trust the system and catch exceptions."
    }
  ],
  faqs: [
    {
      id: "bpa-what",
      title: "What kinds of processes can you automate?",
      content:
        "Lead routing and follow-ups, quote and approval flows, invoicing and payment reminders, onboarding, order processing, reporting, and notifications — essentially any repetitive, rule-based work across sales, finance, HR, and operations."
    },
    {
      id: "bpa-tools",
      title: "Do we need Zoho One to automate our processes?",
      content:
        "Not necessarily. We can automate within the individual Zoho apps you already use, or use Zoho Flow and Creator to connect them. If you're scaling automation across many departments, Zoho One often becomes the most cost-effective option — we'll advise on the best fit."
    },
    {
      id: "bpa-thirdparty",
      title: "Can you connect non-Zoho tools too?",
      content:
        "Yes. Using Zoho Flow and APIs we connect Zoho with WhatsApp, Google and Meta Ads, payment gateways, e-commerce, spreadsheets, and most tools that offer an integration or API."
    },
    {
      id: "bpa-cost",
      title: "How much does automation work cost?",
      content:
        "We offer flexible hourly consulting, discounted packaged-hour blocks (50, 100, 200, or 400 hours), and fixed-price project engagements. Automation often pays for itself in saved hours — we'll scope it and share a clear quote after a free discovery call."
    },
    {
      id: "bpa-custom",
      title: "What if our process is unusual and no app fits?",
      content:
        "That's exactly what Zoho Creator is for. We build custom applications with Deluge scripting tailored to your process, then connect them to the rest of your Zoho stack."
    },
    {
      id: "bpa-time",
      title: "How long does an automation project take?",
      content:
        "Small automations can be live in days. Larger, multi-process or custom-app projects typically run a few weeks. We share a timeline and milestones before starting."
    }
  ],
  serviceType: "Business Process Automation",
  serviceDescription:
    "Business process and workflow automation using Zoho workflows, Zoho Flow, and custom Creator apps, by a certified Zoho partner."
};

export default function BusinessProcessAutomationPage() {
  return <ServicePage data={data} />;
}
