import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { WHATSAPP_LINK } from "../../lib/constants";

export default function Hero() {
  return (
    <section className="hero py-16 md:py-20" id="product">
      <Container className="relative z-10">
        <div className="mb-8 flex items-center justify-center gap-4 md:mb-10 md:gap-6">
          <div className="hidden items-center gap-2 md:flex">
            <span className="text-xs text-slate-700/65">↠</span>
            <span className="h-px w-12 bg-slate-700/60 lg:w-16" />
            <span className="text-[11px] text-slate-700/70">◆</span>
            <span className="h-px w-16 bg-slate-700/60 lg:w-24" />
          </div>

          <Image
            src="/partnership/partner.png"
            alt="Zoho partnership badge"
            width={260}
            height={90}
            className="h-auto w-[190px] md:w-[220px]"
            priority
          />

          <div className="hidden items-center gap-2 md:flex">
            <span className="h-px w-16 bg-slate-700/60 lg:w-24" />
            <span className="text-[11px] text-slate-700/70">◆</span>
            <span className="h-px w-12 bg-slate-700/60 lg:w-16" />
            <span className="text-xs text-slate-700/65">↞</span>
          </div>
        </div>

        <div className="grid items-center gap-10 md:grid-cols-[1fr_1fr] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">

            <h1 className="text-3xl font-semibold leading-tight text-slate-900 md:text-6xl">
              Zoho Consulting & Business Automation
            </h1>

            <p className="mt-5 text-lg text-slate-600">
              Smarter systems. Faster operations. Real business growth.
            </p>

            <div className="mt-7 flex flex-wrap items-start gap-4">
              <Button href="/book-us" className="min-w-[220px]">
                Book a Free 30 Min Consult
              </Button>

              <Button href="/contact" variant="outline">
                Contact Us Now
              </Button>
            </div>
          </div>

          <div className="relative mx-auto flex w-full justify-center md:mx-0 md:justify-end md:-mr-8">
            <Image
              src="/hero.png"
              alt="CRM automation dashboard visual"
              width={1100}
              height={1100}
              className="mx-auto block w-[88%] max-w-[620px] sm:w-full md:max-w-none md:w-[120%] lg:w-[132%]"
            />
          </div>
        </div>
      </Container>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#20BA5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#128C7E] focus-visible:ring-offset-2"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M20.52 3.48A11.92 11.92 0 0 0 12.07 0C5.5 0 .15 5.34.15 11.91c0 2.1.55 4.15 1.6 5.96L0 24l6.32-1.66a11.9 11.9 0 0 0 5.75 1.47h.01c6.57 0 11.92-5.34 11.92-11.91 0-3.18-1.24-6.17-3.49-8.42ZM12.08 21.8a9.9 9.9 0 0 1-5.05-1.39l-.36-.21-3.75.98 1-3.65-.24-.38A9.88 9.88 0 0 1 2.2 11.9C2.2 6.45 6.63 2.02 12.08 2.02c2.64 0 5.12 1.03 6.99 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.44-4.43 9.88-9.88 9.88Zm5.42-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.46-.15-.66.15-.2.3-.76.97-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.49-.5-.66-.5h-.56c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.21 3.1.15.2 2.1 3.2 5.08 4.49.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.56-.35Z" />
        </svg>
      </a>
    </section>
  );
}
