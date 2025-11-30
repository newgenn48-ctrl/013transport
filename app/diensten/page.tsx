import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: "Onze Diensten",
  description: "Ontdek onze transportdiensten: 1-mans transport, 2-mans team, Dynalogic partner en installatie service. Professionele witgoedbezorging door heel Nederland.",
  keywords: [
    "witgoedtransport diensten",
    "1-mans transport",
    "2-mans bezorging",
    "Dynalogic partner",
    "witgoed installatie",
    "professioneel transport",
    "witgoed bezorging Nederland",
  ],
  openGraph: {
    title: "Transportdiensten - 013Transport",
    description: "1M en 2M witgoedtransport, Dynalogic partner en installatie service.",
    url: "https://013transport.eu/diensten",
  },
  alternates: {
    canonical: "https://013transport.eu/diensten",
  },
};

export default function Diensten() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://013transport.eu" },
        { name: "Diensten", url: "https://013transport.eu/diensten" }
      ]} />
      {/* Header */}
      <section className="pt-36 pb-24 relative overflow-hidden" style={{ backgroundColor: '#6d4233' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/030Transport.webp"
            alt="013Transport professionele witgoedtransport diensten - 1-mans en 2-mans bezorging"
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
            Wat wij bieden
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Onze Transportdiensten
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mb-8 leading-relaxed">
            Als ZZP-partner kies je welke diensten je wilt uitvoeren. Van solo transport tot teamwerk.
          </p>
          <a
            href="https://wa.me/31686411124?text=Hallo%2C%20ik%20heb%20interesse%20om%20ZZP-partner%20te%20worden."
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

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
                title: '1-Mans Transport',
                desc: 'Solo transport voor standaard witgoedleveringen. Ideaal voor ervaren chauffeurs die zelfstandig willen werken.',
                features: ['Standaard witgoed', 'Solo werkzaam', 'Flexibele routes'],
                tag: 'Populair',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
                title: '2-Mans Team',
                desc: 'Chauffeur + bijrijder voor zware apparaten en complexe situaties zoals traplopen en krappe ruimtes.',
                features: ['Zware apparaten', 'Teamwork', 'Complexe leveringen'],
                tag: 'Meeste opdrachten',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                ),
                title: 'Dynalogic Partner',
                desc: 'Bezorging van witgoed en bruingoed bij klanten. Je rijdt in een witte bakwagen (21m³) zonder reclame.',
                features: ['€54 per uur', '6 dagen per week', 'Tot 10% bonus', 'Laden/lossen apart vergoed'],
                tag: '€54/uur',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                title: 'Installatie Service',
                desc: 'Professionele aansluiting van witgoed bij de klant thuis. Extra verdienen met installatiewerk.',
                features: ['Aansluiten witgoed', 'Extra inkomen', 'Certificering vereist'],
                tag: 'Extra inkomen',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl border-2 bg-white border-gray-200 hover:border-[#f98b67] hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(249, 139, 103, 0.15)', color: '#f98b67' }}
                >
                  {service.icon}
                </div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-4"
                  style={{ backgroundColor: 'rgba(249, 139, 103, 0.15)', color: '#6d4233' }}
                >
                  {service.tag}
                </span>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">
                  {service.title}
                </h3>
                <p className="mb-6 leading-relaxed text-gray-600">
                  {service.desc}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-gray-500">
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        style={{ color: '#f98b67' }}
                      >
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Werkgebieden */}
      <section className="py-16 text-white" style={{ backgroundColor: '#6d4233' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Werkgebieden</h2>
          <p className="text-white/70 mb-8">Wij leveren door heel Nederland vanuit drie strategische depots</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Breda', 'Nieuwegein', 'Hazeldonk'].map((depot) => (
              <span key={depot} className="px-6 py-3 bg-white/10 rounded-full font-medium">
                {depot}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: '#6d4233' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Voer deze diensten uit als partner
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Word ZZP-partner en kies zelf welke diensten je wilt uitvoeren.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/31686411124"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
              style={{ backgroundColor: '#6d4233' }}
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Word Partner
            </a>
            <Link href="/vacatures" className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-8 py-4 rounded-xl transition-all hover:bg-gray-100">
              Bekijk Vacatures
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
