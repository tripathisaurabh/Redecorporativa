import type { Metadata } from "next";
import Script from "next/script";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import { buildCanonical, buildKeywords } from "../../lib/seo";
import { SITE_URL } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Book a Free Zoho CRM Consultation | Certified Zoho Partner India",
  description:
    "Schedule a free 30-minute consultation with a certified Zoho partner. Get a personalised Zoho CRM implementation plan, workflow audit, and automation roadmap — no cost, no commitment.",
  keywords: buildKeywords(
    "book Zoho CRM consultation free",
    "schedule Zoho implementation call",
    "free CRM audit India",
    "Zoho partner consultation",
    "book Zoho expert India",
    "Zoho implementation quote"
  ),
  alternates: {
    canonical: buildCanonical("/book-us")
  },
  openGraph: {
    title: "Book a Free Zoho Consultation | Zonic Tech Solutions",
    description:
      "No-obligation 30-minute consultation with a certified Zoho partner. Walk away with a clear action plan.",
    url: `${SITE_URL}/book-us`,
    images: [{ url: `${SITE_URL}/hero.png`, width: 1200, height: 630, alt: "Book a Free Zoho Consultation" }]
  },
  twitter: {
    title: "Book a Free Zoho Consultation | Zonic Tech Solutions",
    description:
      "No-obligation 30-minute consultation with a certified Zoho partner.",
    images: [`${SITE_URL}/hero.png`]
  }
};

export default function BookUsPage() {
  return (
    <section className="section bg-slate-50">
      <Container className="flex flex-col items-center">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">Book a Consultation</h1>
          <p className="mt-3 text-base text-slate-600">Pick a time that works for you.</p>
        </div>

        <Card className="w-full max-w-3xl overflow-hidden p-0">
          <div className="border-b border-slate-200 px-4 py-2 text-center">
            <h2 className="text-base font-semibold text-slate-900">Book a Consultation</h2>
            <p className="mt-1 text-xs text-slate-600">Pick a time that works for you.</p>
          </div>
          <div className="p-2">
            <div
              className="calendly-inline-widget h-[700px] w-full min-w-[320px]"
              data-url="https://calendly.com/admin-zonictechsolutions/zoho-implementation-consultation-no-obligation"
            />
          </div>
        </Card>
      </Container>
      <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    </section>
  );
}
