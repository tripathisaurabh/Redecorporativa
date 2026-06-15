import type { Metadata } from "next";
import Script from "next/script";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import ZohoLeadForm from "../../components/ZohoLeadForm";
import ContactLinks from "../../components/ContactLinks";
import { buildCanonical, buildKeywords } from "../../lib/seo";
import { SITE_ADDRESS, SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY, WHATSAPP_LINK, SITE_URL } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Contact a Zoho CRM Expert | Free Strategy Call – Redecorporativa",
  description:
    "Get in touch with a certified Zoho consultant. Share your business challenge and we'll suggest a clear Zoho CRM and automation plan — no commitment required. Serving India, USA, UK, UAE & Australia.",
  keywords: buildKeywords(
    "contact Zoho consultant India",
    "hire Zoho CRM expert",
    "Zoho CRM consultation",
    "talk to Zoho partner",
    "Zoho implementation inquiry",
    "free Zoho consultation India"
  ),
  alternates: {
    canonical: buildCanonical("/contact")
  },
  openGraph: {
    title: "Talk to a CRM Ops + Automation Expert",
    description: "Tell us what's broken. We'll suggest a clear CRM + automation plan.",
    url: `${SITE_URL}/contact`,
    images: [{ url: `${SITE_URL}/hero.png`, width: 1200, height: 630, alt: "Contact Redecorporativa" }]
  },
  twitter: {
    title: "Talk to a CRM Ops + Automation Expert",
    description: "Tell us what's broken. We'll suggest a clear CRM + automation plan.",
    images: [`${SITE_URL}/hero.png`]
  }
};

const contactOptions = [
  {
    title: "Email",
    detail: SITE_EMAIL,
    href: `mailto:${SITE_EMAIL}`
  },
  {
    title: "Phone",
    detail: SITE_PHONE_DISPLAY,
    href: `tel:${SITE_PHONE}`
  },
  {
    title: "WhatsApp",
    detail: "Chat on WhatsApp",
    href: WHATSAPP_LINK
  }
];

export default function ContactPage() {
  return (
    <section
      className="py-12 md:py-16"
      style={{
        background: "linear-gradient(180deg, rgba(239,246,255,1) 0%, rgba(226,236,248,1) 100%)"
      }}
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Contact Us</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Talk to a CRM Ops + Automation Expert
          </h1>
          <p className="mx-auto mt-3 text-base text-slate-600">
            Tell us what's broken. We'll suggest a clear CRM + automation plan.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl items-start gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-4">
            <ContactLinks options={contactOptions} />
            <div className="rounded-2xl border border-slate-200 bg-white/70 p-5">
              <p className="text-sm font-semibold text-slate-900">Quick response</p>
              <p className="mt-1 text-sm text-slate-600">
                We reply within one business day. Serving India, US, UK, UAE &amp; Australia.
              </p>
            </div>
          </div>
          <Card className="border-slate-200 bg-white">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">Send a message</h2>
            <p className="mt-1 text-sm text-slate-600">
              Share your challenge and we'll get back within one business day.
            </p>
            <div className="mt-5 overflow-hidden rounded-xl bg-white">
              <ZohoLeadForm />
            </div>
          </Card>
        </div>
        <Script
          id="google-ads-conversion"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                  function gtag_report_conversion(url) {
                    var callback = function () {
                      if (typeof(url) != 'undefined') {
                        window.location = url;
                      }
                    };
                    if (typeof gtag !== 'function') {
                      callback();
                      return false;
                    }
                    gtag('event', 'conversion', {
                      'send_to': 'AW-17926414470/yO21CN-ktfQbEIbB_eNC',
                      'event_callback': callback
                    });
                    return false;
                  }
                `
          }}
        />
      </Container>
    </section>
  );
}
