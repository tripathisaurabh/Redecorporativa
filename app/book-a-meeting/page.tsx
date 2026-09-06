import type { Metadata } from "next";
import Container from "../../components/ui/Container";
import BookingEmbed from "../../components/BookingEmbed";
import { SITE_URL } from "../../lib/constants";

export const metadata: Metadata = {
  title: "Book a Meeting",
  description: "Schedule a meeting with the Redecorporativa team.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/book-a-meeting` }
};

export default function BookAMeetingPage() {
  return (
    <section className="py-12 md:py-16" style={{ background: "#ffffff" }}>
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Schedule a call</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
            Book a meeting
          </h1>
          <p className="mt-3 text-base text-slate-600">
            Pick a time that works for you and we&apos;ll take it from there.
          </p>
        </div>
        <div className="mx-auto mt-8 max-w-4xl">
          <BookingEmbed />
        </div>
      </Container>
    </section>
  );
}
