import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: "Over Ons",
  description: "Leer meer over 013Transport BV. Al meer dan 5 jaar specialist in witgoedtransport met depots in Breda, Nieuwegein en Hazeldonk. KvK: 88112969.",
  keywords: [
    "013Transport",
    "witgoedtransport bedrijf",
    "transport bedrijf Breda",
    "over ons",
    "013Transport BV",
    "transportbedrijf Nederland",
  ],
  openGraph: {
    title: "Over 013Transport",
    description: "Ontdek ons verhaal en waar wij voor staan. Al meer dan 5 jaar specialist in witgoedtransport.",
    url: "https://013transport.eu/over-ons",
  },
  alternates: {
    canonical: "https://013transport.eu/over-ons",
  },
};

export default function OverOns() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://013transport.eu" },
        { name: "Over Ons", url: "https://013transport.eu/over-ons" }
      ]} />
      {/* Header */}
      <section className="pt-36 pb-24 relative overflow-hidden" style={{ backgroundColor: '#6d4233' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/030Transport.webp"
            alt="013Transport BV - al meer dan 5 jaar specialist in witgoedtransport Nederland"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(249, 139, 103, 0.2)' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(249, 139, 103, 0.1)' }}></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <span
            className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-6"
            style={{ backgroundColor: 'rgba(249, 139, 103, 0.2)', color: '#f98b67' }}
          >
            Ons verhaal
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Over 013Transport
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mb-8 leading-relaxed">
            Al meer dan 5 jaar specialist in witgoedtransport door heel Nederland. Betrouwbaar, professioneel en altijd op tijd.
          </p>
          <a
            href="https://wa.me/31686411124?text=Hallo%2C%20ik%20wil%20graag%20meer%20weten%20over%20013Transport."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-green-700/50 transition-all hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Word Partner
          </a>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Groei door kwaliteit
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                013Transport is ontstaan vanuit de passie voor logistiek en klanttevredenheid.
                Wat begon als een klein transportbedrijf is uitgegroeid tot een professionele
                organisatie met ervaren ZZP-partners door heel Nederland.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Wij geloven in eerlijke samenwerking, transparante communicatie en het
                belonen van goed werk. Daarom hebben wij ons unieke bonussysteem ontwikkeld.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl mb-4 relative">
                <Image
                  src="/030Transport.webp"
                  alt="013Transport bezorgwagens vloot - professioneel witgoedtransport team"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: '3', label: 'Depots' },
                  { value: '10%', label: 'Bonus', highlight: true },
                  { value: '5+', label: 'Jaar ervaring' },
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-50 rounded-2xl p-6 text-center">
                    <div
                      className="text-3xl font-bold"
                      style={{ color: stat.highlight ? '#f98b67' : '#6d4233' }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Waar wij voor staan
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: '✓', title: 'Betrouwbaarheid', desc: 'Afspraak is afspraak. Wij komen onze beloftes na.' },
              { icon: '★', title: 'Kwaliteit', desc: 'Elk transport en elke installatie doen wij met zorg.' },
              { icon: '♥', title: 'Partnerschap', desc: 'Wij investeren in langdurige relaties met onze partners.' },
            ].map((value, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 border-2 border-gray-200">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-4"
                  style={{ backgroundColor: 'rgba(249, 139, 103, 0.15)', color: '#f98b67' }}
                >
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: '#6d4233' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Word deel van ons team
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ben jij klaar om samen te werken met een betrouwbare partner?
          </p>
          <Link
            href="/vacatures"
            className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-xl hover:opacity-90 transition-all hover:scale-105"
            style={{ backgroundColor: '#f98b67', color: '#4a2d23' }}
          >
            Bekijk Vacatures
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
