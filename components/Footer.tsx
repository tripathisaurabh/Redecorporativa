import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";
import { SITE_ADDRESS, SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_NAME, SOCIAL_LINKS } from "../lib/constants";

const navLinks = [
  { label: "Products", href: "/products" },
  { label: "Solutions", href: "/#solutions" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
];

const serviceLinks = [
  { label: "Zoho CRM", href: "/zoho-crm" },
  { label: "Zoho Books", href: "/zoho-books" },
  { label: "Zoho Inventory", href: "/zoho-inventory" },
  { label: "Business Process Automation", href: "/business-process-automation" }
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" }
];

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21 8.65 21 10.86 21 13.73V21h-4v-6.4c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.38V21h-4V9Z" />
      </svg>
    );
  }

  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11.5 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    );
  }

  if (label === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.2c0-.87.24-1.47 1.5-1.47h1.6V4.05A21.5 21.5 0 0 0 14.2 4C11.8 4 10.1 5.46 10.1 8.15V10H7.5v3h2.6v8h3.4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
      <path d="M18.24 2H21l-6.56 7.5L22 22h-5.95l-4.67-6.1L6.04 22H3.26l7.02-8.02L2 2h6.1l4.22 5.57L18.24 2Zm-1.04 18h1.65L7.2 3.89H5.43L17.2 20Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <Container className="py-12 md:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-white px-2 py-1">
                <Image
                  src="/logo.png"
                  alt="Redecorporativa logo"
                  width={120}
                  height={30}
                  className="h-7 w-auto"
                />
              </div>
            </div>
            <p className="text-sm text-slate-300">
              Business Operations and workflow automation for teams that want predictable pipeline and faster
              conversions.
            </p>
            {/* <p className="text-sm text-slate-400">{SITE_ADDRESS}</p> */}
            <div className="inline-flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2">
              <Image
                src="/partnership/partner.png"
                alt="Zoho Premium Partner badge"
                width={110}
                height={40}
                className="h-auto w-[88px] rounded-sm bg-white p-1"
              />
              <span className="text-xs font-semibold uppercase tracking-wide text-slate-300">
                Zoho Premium Partner
              </span>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Contact</p>
            <div className="space-y-2 text-sm">
              <p className="text-slate-300">{SITE_EMAIL}</p>
              <p className="text-slate-300">{SITE_PHONE_DISPLAY}</p>
            </div>
            <div className="flex items-center gap-2 pt-1">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition-colors hover:border-slate-500 hover:text-white"
                >
                  <SocialIcon label={social.label} />
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Zoho Services</p>
            <ul className="space-y-2 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link className="text-slate-300 hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Navigation</p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link className="text-slate-300 hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">Legal</p>
            <ul className="space-y-2 text-sm">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link className="text-slate-300 hover:text-white" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-6 text-sm text-slate-400 md:mt-12">
          <div className="flex flex-col items-start justify-between gap-2">
            <span>© {new Date().getFullYear()} {SITE_NAME}. All rights reserved.</span>
            {/* <span>Business Operations + Workflow Automation</span> */}
          </div>
        </div>
      </Container>
    </footer>
  );
}
