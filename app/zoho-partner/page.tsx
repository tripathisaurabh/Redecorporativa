import type { Metadata } from "next";
import Link from "next/link";
import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";
import { statePages } from "../../lib/states";
import { locationPages } from "../../lib/locations";
import { buildCanonical, buildKeywords } from "../../lib/seo";
import { SITE_NAME, SITE_URL } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Zoho Partner in India | Certified Zoho CRM & Automation Across States & Cities",
  description:
    "Certified Zoho partner serving businesses across India — Maharashtra, Karnataka, Tamil Nadu, Gujarat, Telangana, and more. Find your state or city and book a free consultation.",
  keywords: buildKeywords(
    "Zoho partner India",
    "Zoho partner near me",
    "Zoho consultant India",
    "Zoho implementation partner India",
    "certified Zoho partner"
  ),
  alternates: { canonical: buildCanonical("/zoho-partner") },
  openGraph: {
    title: "Zoho Partner in India | Certified Across States & Cities",
    description: "Certified Zoho partner serving businesses across India's states and cities.",
    url: buildCanonical("/zoho-partner"),
    type: "website"
  }
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Zoho Partner locations in India",
  itemListElement: [
    ...statePages.map((s, i) => ({ "@type": "ListItem", position: i + 1, name: s.state, url: `${SITE_URL}/zoho-partner/${s.slug}` })),
    ...locationPages.map((l, i) => ({ "@type": "ListItem", position: statePages.length + i + 1, name: l.city, url: `${SITE_URL}/${l.slug}` }))
  ]
};

export default function ZohoPartnerIndiaHub() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <section className="bg-gradient-to-b from-[#eef6ff] to-[#e2ecf8] py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-600">Zoho Partner in India</p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 md:text-5xl">
              A certified Zoho partner across India
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              {SITE_NAME} implements Zoho CRM, Zoho One, and business automation for companies nationwide — through a
              proven remote-first model, with on-ground support in the NCR. Find your state or city below.
            </p>
            <div className="mt-7">
              <Button href="/book-us" className="px-8 py-3 text-base">Book a Free Consultation</Button>
            </div>
          </div>
        </Container>
      </section>

      {/* States with their cities */}
      <section className="bg-white py-14 md:py-20">
        <Container>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Zoho partner by state</h2>
          <div className="mt-4 h-1 w-24 bg-sky-500" />
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {statePages.map((s) => (
              <div key={s.slug} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <Link href={`/zoho-partner/${s.slug}`} className="text-lg font-semibold text-slate-900 hover:text-indigo-700">
                  {s.state}
                </Link>
                <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                  {s.cities.map((c) => (
                    <Link key={c.slug} href={`/${c.slug}`} className="text-indigo-600 hover:underline">
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-14 md:py-16">
        <Container className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">Don&apos;t see your city?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            We serve businesses across India through our remote-first model. Tell us where you are and what you need.
          </p>
          <div className="mt-6">
            <Button href="/book-us" className="px-8 py-3 text-base">Book a Free Consultation</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
