import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { OrganizationSchema, LocalBusinessSchema } from "@/components/StructuredData";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://013transport.eu'),
  title: {
    default: "013Transport | Professioneel Witgoedtransport",
    template: "%s | 013Transport"
  },
  description: "Word ZZP-partner bij 013Transport. Wekelijkse opdrachten, eerlijke betaling en tot 10% bonus. Depots in Breda, Nieuwegein en Hazeldonk.",
  keywords: ["witgoedtransport", "ZZP chauffeur", "transport vacature", "013Transport", "bezorgpartner", "witgoed bezorging"],
  authors: [{ name: "013Transport BV" }],
  creator: "013Transport BV",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    siteName: "013Transport",
    title: "013Transport | Professioneel Witgoedtransport",
    description: "Word ZZP-partner bij 013Transport. Wekelijkse opdrachten, eerlijke betaling en tot 10% bonus.",
    images: [{ url: "/030Transport-2.webp", width: 1200, height: 630, alt: "013Transport Vloot" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "013Transport | Professioneel Witgoedtransport",
    description: "Word ZZP-partner bij 013Transport. Wekelijkse opdrachten, eerlijke betaling en tot 10% bonus.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17770106024"
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17770106024');
          `}
        </Script>
      </head>
      <body className={`${geist.variable} font-sans antialiased bg-white text-gray-900`}>
        <OrganizationSchema />
        <LocalBusinessSchema />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
