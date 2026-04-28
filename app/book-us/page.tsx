import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import { buildCanonical, buildKeywords } from "../../lib/seo";
import { SITE_URL, WHATSAPP_LINK, SITE_EMAIL } from "../../lib/constants";

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
    title: "Book a Free Zoho Consultation | Redecorporativa",
    description:
      "No-obligation 30-minute consultation with a certified Zoho partner. Walk away with a clear action plan.",
    url: `${SITE_URL}/book-us`,
    images: [{ url: `${SITE_URL}/hero.png`, width: 1200, height: 630, alt: "Book a Free Zoho Consultation" }]
  },
  twitter: {
    title: "Book a Free Zoho Consultation | Redecorporativa",
    description:
      "No-obligation 30-minute consultation with a certified Zoho partner.",
    images: [`${SITE_URL}/hero.png`]
  }
};

export default function BookUsPage() {
  return (
    <section className="section bg-slate-50">
      <Container className="flex flex-col items-center">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold text-slate-900">Book a Free Consultation</h1>
          <p className="mt-3 text-base text-slate-600 max-w-xl mx-auto">
            Get a personalised Zoho CRM implementation plan, workflow audit, and automation roadmap — no cost, no commitment.
          </p>
        </div>

        <Card className="w-full max-w-2xl p-8 md:p-12 text-center space-y-6">
          <div className="space-y-2">
            <p className="text-lg font-semibold text-slate-900">Ready to talk?</p>
            <p className="text-slate-600 text-sm">
              Reach out via WhatsApp or email and we will schedule a 30-minute call at a time that works for you.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Button href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp
            </Button>
            <Link
              href={`mailto:${SITE_EMAIL}`}
              className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-slate-500 hover:text-slate-900"
            >
              Send an Email
            </Link>
          </div>

          <p className="text-xs text-slate-400 pt-2">
            Alternatively,{" "}
            <Link href="/contact" className="underline underline-offset-2 hover:text-slate-600">
              use the contact form
            </Link>{" "}
            and we will get back to you within one business day.
          </p>
        </Card>
      </Container>
    </section>
  );
}
