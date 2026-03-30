import Link from "next/link";
import Container from "./ui/Container";
import { SITE_PHONE, SITE_PHONE_DISPLAY, SOCIAL_LINKS } from "../lib/constants";

function SocialIcon({ label }: { label: string }) {
  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21 8.65 21 10.86 21 13.73V21h-4v-6.4c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.38V21h-4V9Z" />
      </svg>
    );
  }

  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
        <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm11.5 1.5a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
      </svg>
    );
  }

  if (label === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
        <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.2c0-.87.24-1.47 1.5-1.47h1.6V4.05A21.5 21.5 0 0 0 14.2 4C11.8 4 10.1 5.46 10.1 8.15V10H7.5v3h2.6v8h3.4Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current" aria-hidden="true">
      <path d="M18.24 2H21l-6.56 7.5L22 22h-5.95l-4.67-6.1L6.04 22H3.26l7.02-8.02L2 2h6.1l4.22 5.57L18.24 2Zm-1.04 18h1.65L7.2 3.89H5.43L17.2 20Z" />
    </svg>
  );
}

export default function TopInfoBar() {
  return (
    <div className="border-b border-slate-200 bg-white">
      <Container>
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:py-2">
          <div className="justify-self-start">
            <Link
              href={`tel:${SITE_PHONE}`}
              className="text-sm font-medium text-[#14213D] transition-colors duration-200 hover:text-blue-600"
            >
              Call: <span className="font-semibold">{SITE_PHONE_DISPLAY}</span>
            </Link>
          </div>

          <div className="px-6 text-center text-[13px] font-medium text-[#14213D]/70">
            Zoho consulting, automation, and growth solutions
          </div>

          {/* <div className="flex justify-self-end items-center gap-3 text-[#14213D]/55">
            {SOCIAL_LINKS.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="transition-colors duration-200 hover:text-blue-600"
              >
                <SocialIcon label={social.label} />
              </Link>
            ))}
          </div> */}
        </div>

        <div className="py-2 text-center md:hidden">
          <span className="text-[12px] font-medium text-[#14213D]/70">
            Zoho consulting, automation, and growth solutions
          </span>
        </div>
      </Container>
    </div>
  );
}