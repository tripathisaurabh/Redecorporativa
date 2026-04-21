import type { Metadata } from "next";
import Container from "../../components/ui/Container";
import { buildCanonical } from "../../lib/seo";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, and protect your personal information.`,
  alternates: {
    canonical: buildCanonical("/privacy-policy")
  },
  openGraph: {
    title: `Privacy Policy | ${SITE_NAME}`,
    description: `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, and protect your personal information.`,
    url: `${SITE_URL}/privacy-policy`
  },
  robots: {
    index: true,
    follow: false
  }
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Legal</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Privacy Policy
          </h1>
          <div className="mt-3 h-1 w-24 bg-sky-500" />
          <p className="mt-4 text-sm text-slate-500">Last updated: April 2026</p>

          <div className="prose prose-slate mt-10 max-w-none text-slate-700">
            <h2 className="text-xl font-semibold text-slate-900">1. Who We Are</h2>
            <p className="mt-3 leading-7">
              {SITE_NAME} (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a Zoho Premium Partner and technology
              consulting firm based in Noida, India. We provide CRM implementation, workflow
              automation, and business operations services to clients globally. Our website is
              located at{" "}
              <a href={SITE_URL} className="text-indigo-600 hover:underline">
                {SITE_URL}
              </a>
              .
            </p>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">2. Information We Collect</h2>
            <p className="mt-3 leading-7">We collect the following types of information:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7">
              <li>
                <strong>Contact information</strong> – name, email address, phone number, and
                company name when you fill out our contact or booking forms.
              </li>
              <li>
                <strong>Usage data</strong> – pages visited, time on site, referring URLs, and
                browser/device type, collected via Google Analytics and Vercel Analytics.
              </li>
              <li>
                <strong>Communication data</strong> – messages you send us via our contact form,
                email, or WhatsApp.
              </li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">3. How We Use Your Information</h2>
            <p className="mt-3 leading-7">We use your information to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7">
              <li>Respond to your enquiries and deliver our consulting services.</li>
              <li>Send service-related communications and project updates.</li>
              <li>Improve our website and understand visitor behaviour through analytics.</li>
              <li>Comply with legal obligations.</li>
            </ul>
            <p className="mt-3 leading-7">
              We do not sell, rent, or share your personal data with third parties for marketing
              purposes.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">4. Cookies & Tracking</h2>
            <p className="mt-3 leading-7">
              Our website uses cookies and analytics tools (Google Analytics, Google Ads conversion
              tracking, Vercel Analytics) to measure traffic and improve your experience. You can
              disable cookies in your browser settings; however, some features may not function
              correctly.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">5. Data Storage & Security</h2>
            <p className="mt-3 leading-7">
              Your data is stored on secure servers. We implement appropriate technical and
              organisational measures to protect your information against unauthorised access,
              disclosure, alteration, or destruction.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">6. Third-Party Services</h2>
            <p className="mt-3 leading-7">
              We use the following third-party services that may process your data:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6 leading-7">
              <li>
                <strong>Zoho CRM</strong> – for managing client relationships and communication.
              </li>
              <li>
                <strong>Google Analytics / Google Ads</strong> – for traffic measurement and
                conversion tracking.
              </li>
              <li>
                <strong>Vercel</strong> – website hosting and performance analytics.
              </li>
            </ul>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">7. Your Rights</h2>
            <p className="mt-3 leading-7">
              Depending on your location, you may have the right to access, correct, or delete your
              personal data. To exercise any of these rights, please contact us at{" "}
              <a href={`mailto:${SITE_EMAIL}`} className="text-indigo-600 hover:underline">
                {SITE_EMAIL}
              </a>
              .
            </p>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">8. Changes to This Policy</h2>
            <p className="mt-3 leading-7">
              We may update this Privacy Policy from time to time. We will post the updated policy
              on this page with a revised &quot;Last updated&quot; date.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">9. Contact Us</h2>
            <p className="mt-3 leading-7">
              If you have questions about this Privacy Policy, please contact us at{" "}
              <a href={`mailto:${SITE_EMAIL}`} className="text-indigo-600 hover:underline">
                {SITE_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
