import { permanentRedirect } from "next/navigation";

// /book-us is retired — booking now lives on /contact (calendar + form).
// Server-side 308 redirect so old links/CTAs land on the contact page.
export default function BookUsPage() {
  permanentRedirect("/contact");
}
