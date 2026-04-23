import Button from "../ui/Button";
import Container from "../ui/Container";

type FinalCTAProps = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
};

export default function FinalCTA({
  title = "Build smarter systems for faster business growth",
  subtitle = "Book a 30-minute consultation to explore how Zoho and automation can streamline your operations.",
  buttonLabel = "Book Free Consultation"
}: FinalCTAProps) {
  return (
    <section className="section">
      <Container>
        <div className="relative overflow-hidden rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-600 via-indigo-500 to-purple-600 p-6 text-white shadow-sm sm:rounded-3xl sm:p-8 md:p-10">
          <div className="absolute -top-16 right-10 h-40 w-40 rounded-full bg-white/20 blur-3xl" aria-hidden="true" />
          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="text-xl font-semibold sm:text-2xl md:text-3xl">{title}</h2>
              <p className="mt-2 text-sm text-indigo-100 sm:mt-3">{subtitle}</p>
            </div>
            <Button href="/book-us" variant="ghost" className="w-full shrink-0 py-3 sm:w-auto sm:px-8">
              {buttonLabel}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
