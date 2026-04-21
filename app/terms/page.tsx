import type { Metadata } from "next";
import Container from "../../components/ui/Container";
import { buildCanonical } from "../../lib/seo";
import { SITE_EMAIL, SITE_NAME, SITE_URL } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE_NAME}. Please read these terms carefully before engaging our Zoho consulting services.`,
  alternates: {
    canonical: buildCanonical("/terms")
  },
  openGraph: {
    title: `Terms of Service | ${SITE_NAME}`,
    description: `Terms of Service for ${SITE_NAME}.`,
    url: `${SITE_URL}/terms`
  },
  robots: {
    index: true,
    follow: false
  }
};

export default function TermsPage() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Legal</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
            Terms of Service
          </h1>
          <div className="mt-3 h-1 w-24 bg-sky-500" />
          <p className="mt-4 text-sm text-slate-500">Last updated: April 2026</p>

          <div className="prose prose-slate mt-10 max-w-none text-slate-700">
            <h2 className="text-xl font-semibold text-slate-900">1. Acceptance of Terms</h2>
            <p className="mt-3 leading-7">
              By accessing our website or engaging {SITE_NAME} for consulting services, you agree
              to be bound by these Terms of Service. If you do not agree with any part of these
              terms, please do not use our services.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">2. Services</h2>
            <p className="mt-3 leading-7">
              {SITE_NAME} provides Zoho CRM implementation, workflow automation, business
              operations consulting, and related technology services. The specific scope, timeline,
              and deliverables for each engagement are defined in a separate Statement of Work or
              service agreement agreed upon by both parties.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">3. Client Responsibilities</h2>
            <p className="mt-3 leading-7">
              Clients agree to provide accurate information, timely feedback, and access to
              necessary systems and stakeholders as required for project delivery. Delays caused by
              client unavailability may impact project timelines.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">4. Payment Terms</h2>
            <p className="mt-3 leading-7">
              Payment terms are defined in individual service agreements. Unless otherwise agreed,
              invoices are due within 14 days of issue. We reserve the right to pause work on
              overdue accounts.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">5. Intellectual Property</h2>
            <p className="mt-3 leading-7">
              Upon full payment, clients own all custom deliverables produced specifically for their
              engagement. {SITE_NAME} retains the right to use general methodologies, frameworks,
              and non-client-specific materials developed during engagements.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">6. Confidentiality</h2>
            <p className="mt-3 leading-7">
              Both parties agree to keep confidential any proprietary business information shared
              during the engagement. This obligation survives termination of the service agreement.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">7. Limitation of Liability</h2>
            <p className="mt-3 leading-7">
              To the maximum extent permitted by applicable law, {SITE_NAME} shall not be liable
              for indirect, incidental, or consequential damages arising from the use of our
              services. Our total liability in any matter shall not exceed the total fees paid by
              the client in the preceding three months.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">8. Termination</h2>
            <p className="mt-3 leading-7">
              Either party may terminate the engagement with 14 days written notice. Upon
              termination, the client is responsible for fees for work completed up to the
              termination date.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">9. Governing Law</h2>
            <p className="mt-3 leading-7">
              These terms are governed by the laws of India. Any disputes shall be subject to the
              exclusive jurisdiction of courts in Noida, Uttar Pradesh.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">10. Changes to These Terms</h2>
            <p className="mt-3 leading-7">
              We may update these terms from time to time. The updated version will be posted on
              this page with a revised date.
            </p>

            <h2 className="mt-8 text-xl font-semibold text-slate-900">11. Contact</h2>
            <p className="mt-3 leading-7">
              For questions about these Terms, please reach us at{" "}
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
