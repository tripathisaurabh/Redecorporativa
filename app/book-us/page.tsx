import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import ZohoLeadForm from "../../components/ZohoLeadForm";
import { buildCanonical, buildKeywords } from "../../lib/seo";
import { SITE_URL, WHATSAPP_LINK, SITE_EMAIL } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Book a Free Zoho CRM Consultation | Certified Zoho Partner India",
  description:
    "Book a free consultation with a certified Zoho partner. Share a few details and get a personalised Zoho CRM implementation plan, workflow audit, and automation roadmap — no cost, no commitment.",
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
      "No-obligation consultation with a certified Zoho partner. Walk away with a clear action plan.",
    url: `${SITE_URL}/book-us`,
    images: [{ url: `${SITE_URL}/hero.png`, width: 1200, height: 630, alt: "Book a Free Zoho Consultation" }]
  },
  twitter: {
    title: "Book a Free Zoho Consultation | Redecorporativa",
    description: "No-obligation consultation with a certified Zoho partner.",
    images: [`${SITE_URL}/hero.png`]
  }
};

export default function BookUsPage() {
  return (
    <section
      className="py-12 md:py-16"
      style={{ background: "linear-gradient(180deg, rgba(239,246,255,1) 0%, rgba(226,236,248,1) 100%)" }}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Book a Consultation</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Book a Free Consultation
          </h1>
          <p className="mx-auto mt-3 text-base text-slate-600">
            Get a personalised Zoho implementation plan, workflow audit, and automation roadmap — no cost, no
            commitment.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-2xl">
          <Card className="border-slate-200 bg-white">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">Tell us about your project</h2>
            <p className="mt-1 text-sm text-slate-600">It only takes a minute — we reply within one business day.</p>
            <div className="mt-5 overflow-hidden rounded-xl bg-white">
              <ZohoLeadForm />
            </div>
          </Card>

          <p className="mt-5 text-center text-sm text-slate-600">
            Prefer to talk first? Reach us on{" "}
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-indigo-600 hover:underline"
            >
              WhatsApp
            </Link>{" "}
            or{" "}
            <Link href={`mailto:${SITE_EMAIL}`} className="font-semibold text-indigo-600 hover:underline">
              email us
            </Link>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}
