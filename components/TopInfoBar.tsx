import Link from "next/link";
import Container from "./ui/Container";
import { SITE_PHONE, SITE_PHONE_DISPLAY, WHATSAPP_LINK } from "../lib/constants";

export default function TopInfoBar() {
  return (
    <div className="border-b border-slate-200 bg-slate-100 text-slate-700">
      <Container className="flex flex-wrap items-center justify-between gap-2 py-2 text-xs md:text-sm">
        <div className="flex flex-wrap items-center gap-4">
          <Link href={`tel:${SITE_PHONE}`} className="font-medium hover:text-slate-900">
            Call: {SITE_PHONE_DISPLAY}
          </Link>
          <Link href={WHATSAPP_LINK} className="font-medium hover:text-slate-900" target="_blank" rel="noopener noreferrer">
            WhatsApp: {SITE_PHONE_DISPLAY}
          </Link>
        </div>
        <p className="font-semibold text-indigo-700">Free CRM + AI audit this month</p>
      </Container>
    </div>
  );
}
