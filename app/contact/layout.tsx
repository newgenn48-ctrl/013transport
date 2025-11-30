import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met 013Transport. Bel, WhatsApp of mail ons. KvK: 88112969. Depots in Breda, Nieuwegein en Hazeldonk.",
  openGraph: {
    title: "Contact - 013Transport",
    description: "Neem contact op met 013Transport voor vragen of sollicitaties.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
