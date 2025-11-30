import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Word Witgoed Bezorger | ZZP Chauffeur Vacatures",
  description: "Word ZZP-partner bij 013Transport. Verdien tot €54/uur en 10% bonus. Witgoedbezorging vanuit Breda, Nieuwegein en Hazeldonk. Flexibele werktijden, wekelijkse opdrachten.",
  keywords: [
    "witgoedtransport",
    "ZZP chauffeur",
    "transport vacature",
    "bezorgpartner",
    "witgoed bezorging",
    "chauffeur vacature Breda",
    "chauffeur vacature Nieuwegein",
    "transport werk",
    "bakwagen chauffeur",
    "witgoed chauffeur",
    "2-mans bezorging",
    "Dynalogic partner",
  ],
  openGraph: {
    title: "Word Witgoed Bezorger | 013Transport",
    description: "Verdien tot €54/uur en 10% bonus als ZZP-chauffeur. Flexibele werktijden vanuit 3 depots.",
    url: "https://013transport.eu",
  },
  alternates: {
    canonical: "https://013transport.eu",
  },
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative text-white pt-36 pb-20 overflow-hidden" style={{ backgroundColor: '#6d4233' }}>
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/030Transport.webp"
            alt="013Transport witgoed bezorgwagens - professioneel witgoedtransport door heel Nederland"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(249, 139, 103, 0.2)' }}></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(249, 139, 103, 0.1)' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <div className="max-w-4xl">
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Word Witgoed Bezorger
              <span className="block" style={{ color: '#f98b67' }}>Verdien tot 10% Bonus</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl">
              Ontvang wekelijks opdrachten, werk wanneer jij wilt en verdien extra met onze bonusregeling.
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-4 mb-10">
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <svg className="w-6 h-6 flex-shrink-0" style={{ color: '#f98b67' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-white">Wekelijkse opdrachten</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <svg className="w-6 h-6 flex-shrink-0" style={{ color: '#f98b67' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-white">Tot 10% bonus</span>
              </div>
              <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20">
                <svg className="w-6 h-6 flex-shrink-0" style={{ color: '#f98b67' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm font-medium text-white">Flexibele werktijden</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/31686411124?text=Hallo%2C%20ik%20heb%20interesse%20om%20ZZP-partner%20te%20worden."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Word Partner
              </a>
              <Link
                href="/vacatures"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Bekijk Vacatures
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Onze Diensten
            </h2>
            <p className="text-lg text-gray-600">
              Als ZZP-partner kies je welke diensten je wilt uitvoeren
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
                title: '1-Mans Transport',
                desc: 'Solo witgoedbezorging voor ervaren chauffeurs.',
                tag: 'Populair',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                ),
                title: '2-Mans Team',
                desc: 'Chauffeur + bijrijder voor zware apparaten.',
                tag: 'Meeste opdrachten',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                ),
                title: 'Dynalogic Partner',
                desc: 'Witgoed & bruingoed bezorgen. €54/uur.',
                tag: '€54/uur',
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                title: 'Installatie Service',
                desc: 'Professionele aansluiting bij de klant thuis.',
                tag: 'Extra inkomen',
              },
            ].map((service, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border-2 bg-white border-gray-200 hover:border-[#f98b67] hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(249, 139, 103, 0.1)', color: '#f98b67' }}
                >
                  {service.icon}
                </div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3"
                  style={{ backgroundColor: 'rgba(249, 139, 103, 0.1)', color: '#6d4233' }}
                >
                  {service.tag}
                </span>
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BONUS */}
      <section className="py-16 text-white" style={{ backgroundColor: '#6d4233' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Tot 10% Bonus bij Hoge Klanttevredenheid
              </h2>
              <p className="text-white/70 text-lg mb-8 leading-relaxed">
                Bij 013Transport belonen we kwaliteit. Hoe hoger je klanttevredenheid (NPS), hoe meer bonus je ontvangt bovenop je factuur.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Bonus wordt maandelijks uitgekeerd',
                  'Transparante NPS meting',
                  'Geen maximum aan je verdiensten',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/80">
                    <svg className="w-6 h-6 flex-shrink-0" style={{ color: '#f98b67' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/31686411124?text=Ik%20wil%20meer%20weten%20over%20de%20bonusregeling"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105 bg-white/20 hover:bg-white/30"
              >
                Word Partner
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '5%', label: 'Bij NPS 9/10', desc: 'Goed beoordeeld' },
                { value: '7%', label: 'Bij NPS 9.5/10', desc: 'Zeer goed' },
                { value: '10%', label: 'Bij NPS 10/10', desc: 'Uitstekend', highlight: true },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6"
                  style={{ backgroundColor: item.highlight ? '#f98b67' : 'rgba(255,255,255,0.15)' }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-white">
                    {item.value}
                  </div>
                  <div className="font-semibold mt-1 text-white">
                    {item.label}
                  </div>
                  <div className="text-sm text-white">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hoe Het Werkt
            </h2>
            <p className="text-lg text-gray-600">
              In 4 simpele stappen partner worden
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Neem Contact Op', desc: 'Stuur een WhatsApp of bel ons. Vertel kort over jezelf.' },
              { step: '2', title: 'Kennismaking', desc: 'We plannen een gesprek bij een van onze depots.' },
              { step: '3', title: 'Aan De Slag', desc: 'Na goedkeuring kun je direct beginnen met opdrachten.' },
              { step: '✓', title: 'Verdien Bonus', desc: 'Lever kwaliteit en verdien tot 10% extra.', success: true },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-6 shadow-xl"
                  style={{ backgroundColor: item.success ? '#22c55e' : '#f98b67' }}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Wat heb je nodig om te starten?
            </h2>
            <p className="text-lg text-gray-600">
              Check of je aan deze eisen voldoet
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'KvK-inschrijving', desc: 'Ingeschreven bij de Kamer van Koophandel' },
              { title: 'Eigen bakwagen', desc: 'Bestelbus met laadklep, zonder reclame' },
              { title: 'NIWO-vergunning', desc: 'Geldige NIWO-vergunning voor transport' },
              { title: 'Rijbewijs B', desc: 'Geldig rijbewijs categorie B' },
              { title: 'VOG', desc: 'Verklaring Omtrent Gedrag' },
              { title: 'Nederlands spreken', desc: 'Goede communicatie met klanten' },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-200">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: 'rgba(249, 139, 103, 0.15)' }}
                >
                  <svg className="w-5 h-5" style={{ color: '#f98b67' }} fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DEPOTS */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Onze Depots
            </h2>
            <p className="text-lg text-gray-600">
              3 strategische locaties door Nederland
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Breda', type: 'Hoofddepot', region: 'Zuid-Nederland' },
              { name: 'Nieuwegein', type: 'Regionaal Depot', region: 'Midden-Nederland' },
              { name: 'Hazeldonk', type: 'Logistiek Hub', region: 'NL-BE Grens' },
            ].map((depot, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border-2 bg-white border-gray-200 hover:border-[#f98b67] hover:shadow-xl transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: 'rgba(249, 139, 103, 0.1)', color: '#f98b67' }}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-3"
                  style={{ backgroundColor: 'rgba(249, 139, 103, 0.1)', color: '#6d4233' }}
                >
                  {depot.type}
                </span>
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {depot.name}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {depot.region}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: '#f98b67' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Klaar om partner te worden?
          </h2>
          <p className="text-xl text-white mb-8">
            Neem contact op via WhatsApp. We plannen een kennismaking bij het depot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/31686411124?text=Hallo%2C%20ik%20wil%20graag%20partner%20worden%20bij%20013Transport."
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
            <a
              href="tel:0686411124"
              className="inline-flex items-center justify-center gap-2 bg-white text-gray-900 font-bold px-8 py-4 rounded-xl transition-all hover:bg-gray-100"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
              </svg>
              06 86 41 1124
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
