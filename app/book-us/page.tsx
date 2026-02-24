import type { Metadata } from "next";
import Script from "next/script";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import { buildCanonical, buildKeywords } from "../../lib/seo";
import { SITE_URL } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Book a Consultation",
  description: "Pick a time that works for you and book a consultation with our team.",
  keywords: buildKeywords(
    "Book consultation",
    "Book Zoho consultation",
    "Free CRM consultation",
    "Schedule CRM expert call",
    "Zoho implementation consultation"
  ),
  alternates: {
    canonical: buildCanonical("/book-us")
  },
  openGraph: {
    title: "Book a Consultation",
    description: "Pick a time that works for you and book a consultation with our team.",
    url: `${SITE_URL}/book-us`
  },
  twitter: {
    title: "Book a Consultation",
    description: "Pick a time that works for you and book a consultation with our team."
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
