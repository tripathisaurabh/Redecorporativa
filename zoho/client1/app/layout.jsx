import "./globals.css";

export const metadata = {
  title: "Aura Analytics · Zoho Customer Dashboard",
  description: "Customer and product analytics powered by Zoho Invoice."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}

