import Image from "next/image";
import Button from "../ui/Button";
import Container from "../ui/Container";
import { WHATSAPP_LINK } from "../../lib/constants";

export default function Hero() {
  return (
    <section className="hero py-16 md:py-24" id="product">
      <Container className="relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          {/* Partner badge */}
          <div className="hero-reveal hero-reveal-delay-1 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-indigo-700 shadow-sm sm:px-4 sm:py-2 sm:text-[11px]">
            <span className="inline-flex h-2 w-2 animate-pulse rounded-full bg-indigo-500" />
            Certified Zoho Authorized Partner
          </div>

          <h1 className="hero-reveal hero-reveal-delay-2 mt-6 max-w-4xl text-3xl font-semibold leading-[1.18] tracking-[-0.02em] text-slate-900 sm:text-4xl md:text-5xl lg:text-[3.5rem]">
            Automate your business.{" "}
            <span className="gradient-text">Leave manual work behind.</span>
          </h1>

          <p className="hero-reveal hero-reveal-delay-3 mt-5 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base md:text-lg">
            We design, build, and automate the Zoho systems that let your team scale without chaos — from a single CRM to a full Zoho One rollout.
          </p>

          {/* Trust pills */}
          <div className="hero-reveal hero-reveal-delay-4 mt-6 flex flex-wrap items-center justify-center gap-2">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-600 shadow-sm sm:px-4 sm:text-xs">
              <svg className="h-3 w-3 shrink-0 text-indigo-500 sm:h-3.5 sm:w-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M16.403 12.652a3 3 0 000-5.304 3 3 0 00-3.75-3.751 3 3 0 00-5.305 0 3 3 0 00-3.751 3.75 3 3 0 000 5.305 3 3 0 003.75 3.751 3 3 0 005.305 0 3 3 0 003.751-3.75zm-2.546-4.46a.75.75 0 00-1.214-.883l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
              100+ clients delivered
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-600 shadow-sm sm:px-4 sm:text-xs">
              <svg className="h-3 w-3 shrink-0 text-indigo-500 sm:h-3.5 sm:w-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zm5.99 7.176A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" /></svg>
              5+ years Zoho expertise
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-medium text-slate-600 shadow-sm sm:px-4 sm:text-xs">
              <svg className="h-3 w-3 shrink-0 text-indigo-500 sm:h-3.5 sm:w-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true"><path fillRule="evenodd" d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z" clipRule="evenodd" /></svg>
              India · US · UK · UAE · AU
            </div>
          </div>

          {/* Partnership badge */}
          <div className="hero-reveal hero-reveal-delay-5 mt-7">
            <Image
              src="/partnership/zoho-authorized-partner.png"
              alt="Zoho Authorized Partnership badge"
              width={260}
              height={90}
              className="h-auto w-[150px] opacity-90 sm:w-[170px] md:w-[200px]"
              priority
            />
          </div>

          {/* CTAs — full width on mobile, auto width from sm up */}
          <div className="hero-reveal hero-reveal-delay-6 mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:justify-center">
            <Button href="/book-us" className="w-full py-3 text-sm sm:w-auto sm:min-w-[200px] sm:px-7">
              Book a Free Systems Audit
            </Button>
            <Button href="/contact" variant="outline" className="w-full py-3 text-sm sm:w-auto sm:min-w-[200px] sm:px-7">
              Try Zoho Free for 30 Days
            </Button>
          </div>

          <p className="hero-reveal hero-reveal-delay-6 mt-4 text-xs text-slate-400">
            No credit card required. If it&apos;s not the right fit, you pay nothing.
          </p>
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
