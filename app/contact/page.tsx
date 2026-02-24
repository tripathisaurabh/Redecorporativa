import type { Metadata } from "next";
import Script from "next/script";
import Container from "../../components/ui/Container";
import Card from "../../components/ui/Card";
import ContactForm from "../../components/ContactForm";
import ContactLinks from "../../components/ContactLinks";
import { buildCanonical } from "../../lib/seo";
import { SITE_ADDRESS, SITE_EMAIL, SITE_PHONE, SITE_PHONE_DISPLAY, WHATSAPP_LINK, SITE_URL } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Talk to a CRM Ops + AI Expert",
  description: "Tell us what's broken. We'll suggest a clear CRM + AI plan.",
  alternates: {
    canonical: buildCanonical("/contact")
  },
  openGraph: {
    title: "Talk to a CRM Ops + AI Expert",
    description: "Tell us what's broken. We'll suggest a clear CRM + AI plan.",
    url: `${SITE_URL}/contact`
  },
  twitter: {
    title: "Talk to a CRM Ops + AI Expert",
    description: "Tell us what's broken. We'll suggest a clear CRM + AI plan."
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
      className="py-16 md:py-20"
      style={{
        background: "linear-gradient(180deg, rgba(239,246,255,1) 0%, rgba(226,236,248,1) 100%)"
      }}
    >
      <Container>
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Contact Us</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Talk to a CRM Ops + AI Expert
          </h1>
          <div className="mx-auto mt-4 h-1 w-28 bg-sky-500" />
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 md:text-lg">
            Tell us what's broken. We'll suggest a clear CRM + AI plan.
          </p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <ContactLinks options={contactOptions} />
            <Card>
              <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">Location</p>
              <p className="mt-2 text-base text-slate-700">{SITE_ADDRESS}</p>
            </Card>
            <Card className="overflow-hidden p-0">
              <div className="h-64 w-full">
                <iframe
                  title="Zonic Tech Solutions location"
                  src="https://www.google.com/maps?q=Noida,+UP,+India&output=embed"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Card>
          </div>
          <Card className="border-slate-300 bg-white/95">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Send a message</h2>
            <p className="mt-2 text-sm text-slate-600">
              Share your challenge and our team will get back within one business day.
            </p>
            <div className="mt-6 rounded-2xl bg-slate-50 p-4 md:p-5">
              <ContactForm />
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
