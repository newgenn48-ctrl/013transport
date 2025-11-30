import Image from 'next/image';
import { Metadata } from 'next';
import { JobPostingSchema, BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: "Vacatures - Word Bezorgpartner",
  description: "Bekijk onze vacatures voor ZZP chauffeurs. 1M en 2M witgoedbezorging met verdiensten tot €53 per stop. Standplaatsen: Breda, Nieuwegein, Hazeldonk.",
  keywords: [
    "chauffeur vacature",
    "ZZP chauffeur gezocht",
    "witgoed bezorger vacature",
    "transport vacature Breda",
    "transport vacature Nieuwegein",
    "bakwagen chauffeur gezocht",
    "bezorgpartner worden",
    "2-mans bezorging vacature",
  ],
  openGraph: {
    title: "Vacatures bij 013Transport",
    description: "Word bezorgpartner bij 013Transport. Bekijk onze tarieven en vereisten.",
    url: "https://013transport.eu/vacatures",
  },
  alternates: {
    canonical: "https://013transport.eu/vacatures",
  },
};

export default function Vacatures() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://013transport.eu" },
        { name: "Vacatures", url: "https://013transport.eu/vacatures" }
      ]} />
      <JobPostingSchema
        title="Chauffeur 1M Witgoed"
        description="Solo witgoedbezorging voor ervaren chauffeurs. Verdien €16 per klantlevering en €53 per winkellevering. Flexibele werktijden vanuit depots in Breda, Nieuwegein en Hazeldonk."
        salary="16-53"
      />
      <JobPostingSchema
        title="Chauffeur 2M Full Service"
        description="Chauffeur + bijrijder team voor witgoedbezorging. Verdien €24-€39 per stop afhankelijk van servicetype. Full service inclusief installatie."
        salary="24-39"
      />
      <JobPostingSchema
        title="Dynalogic Partner - Witgoed & Bruingoed"
        description="Bezorging van witgoed en bruingoed. Verdien €54 per uur met tot 10% bonus. 6 dagen per week werk, betaling binnen 30 dagen."
        salary="54"
      />
      {/* Header */}
      <section className="pt-36 pb-24 relative overflow-hidden" style={{ backgroundColor: '#6d4233' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/030Transport.webp"
            alt="013Transport vloot bezorgwagens - word ZZP chauffeur voor witgoedbezorging"
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
            Wij zoeken bezorgpartners
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Word Bezorgpartner bij 013Transport
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mb-8 leading-relaxed">
            Wij zoeken zelfstandige bezorgpartners voor 1M en 2M witgoedbezorging.
            Lever bij klanten of winkels in Nederland en België.
          </p>
          <a
            href="https://wa.me/31686411124?text=Hallo%2C%20ik%20heb%20interesse%20om%20bezorgpartner%20te%20worden."
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

      {/* Standplaatsen */}
      <section className="py-6 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-500 font-medium">Standplaatsen:</span>
            {['Breda', 'Nieuwegein', 'Hazeldonk'].map((loc) => (
              <span key={loc} className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 font-medium">
                {loc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Vacatures */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Openstaande Vacatures</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Kies de functie die bij jou past en bekijk de verdiensten per stop</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* 1M Witgoed */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-3"
                    style={{ backgroundColor: 'rgba(249, 139, 103, 0.15)', color: '#6d4233' }}
                  >
                    1-Mans Bezorging
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">Chauffeur 1M Witgoed</h3>
                  <p className="text-gray-500 mt-1">Zelfstandige witgoedbezorging</p>
                </div>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(249, 139, 103, 0.15)' }}
                >
                  <svg className="w-7 h-7" style={{ color: '#f98b67' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Solo transport voor standaard witgoedleveringen. Ideaal voor ervaren chauffeurs die zelfstandig willen werken.
              </p>

              <div className="bg-gray-50 rounded-xl p-5 mb-6">
                <p className="font-semibold text-gray-900 mb-4">Verdiensten per stop (excl. BTW)</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Klantlevering</span>
                    <span className="font-bold text-lg" style={{ color: '#6d4233' }}>€16,-</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Winkellevering</span>
                    <span className="font-bold text-lg" style={{ color: '#6d4233' }}>€53,-</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                    <span className="text-gray-600">Zaterdag toeslag</span>
                    <span className="font-semibold" style={{ color: '#f98b67' }}>+€5,- per stop</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/31686411124?text=Hallo%2C%20ik%20heb%20interesse%20in%20de%20vacature%20Chauffeur%201M%20Witgoed."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 text-white font-semibold py-4 rounded-xl transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ backgroundColor: '#f98b67' }}
              >
                Word Partner
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* 2M Full Service */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-3"
                    style={{ backgroundColor: 'rgba(249, 139, 103, 0.15)', color: '#6d4233' }}
                  >
                    2-Mans Bezorging
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">Chauffeur 2M Full Service</h3>
                  <p className="text-gray-500 mt-1">Chauffeur + bijrijder team</p>
                </div>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(249, 139, 103, 0.15)' }}
                >
                  <svg className="w-7 h-7" style={{ color: '#f98b67' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Chauffeur + bijrijder voor zware apparaten en complexe situaties zoals traplopen, krappe ruimtes en installatie.
              </p>

              <div className="bg-gray-50 rounded-xl p-5 mb-6">
                <p className="font-semibold text-gray-900 mb-4">Verdiensten per stop (excl. BTW)</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Amerikaanse koelkast full service</span>
                    <span className="font-bold text-lg" style={{ color: '#6d4233' }}>€39,-</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Normale full service</span>
                    <span className="font-bold text-lg" style={{ color: '#6d4233' }}>€34,-</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Drempellevering</span>
                    <span className="font-bold text-lg" style={{ color: '#6d4233' }}>€24,-</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                    <span className="text-gray-600">Zaterdag toeslag</span>
                    <span className="font-semibold" style={{ color: '#f98b67' }}>+€5,- per stop</span>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/31686411124?text=Hallo%2C%20ik%20heb%20interesse%20in%20de%20vacature%20Chauffeur%202M%20Full%20Service."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 text-white font-semibold py-4 rounded-xl transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ backgroundColor: '#f98b67' }}
              >
                Word Partner
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>

            {/* Dynalogic */}
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-sm">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase mb-3"
                    style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', color: '#166534' }}
                  >
                    Dynalogic Partner
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900">Witgoed & Bruingoed</h3>
                  <p className="text-gray-500 mt-1">2-mans team (chauffeur + bijrijder)</p>
                </div>
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)' }}
                >
                  <svg className="w-7 h-7 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                </div>
              </div>

              <p className="text-gray-600 mb-6">
                Bezorging van witgoed en bruingoed bij klanten. Je rijdt in een witte bakwagen (21m³) zonder reclame.
              </p>

              <div className="bg-gray-50 rounded-xl p-5 mb-6">
                <p className="font-semibold text-gray-900 mb-4">Verdiensten (excl. BTW)</p>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Uurloon</span>
                    <span className="font-bold text-lg" style={{ color: '#166534' }}>€54,-</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Laden/lossen apart vergoed</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 border-t border-gray-200">
                    <span className="text-gray-600">Bonus mogelijk</span>
                    <span className="font-semibold text-green-600">Tot 10%</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-3 mb-6 text-sm">
                <div className="flex items-center gap-2 text-green-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>6 dagen per week • Betaling binnen 30 dagen</span>
                </div>
              </div>

              <a
                href="https://wa.me/31686411124?text=Hallo%2C%20ik%20heb%20interesse%20in%20de%20Dynalogic%20vacature%20(witgoed%20%26%20bruingoed)."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 text-white font-semibold py-4 rounded-xl transition-all hover:opacity-90 hover:scale-[1.02] bg-green-600"
              >
                Word Partner
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Vereisten */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Wat heb je nodig?</h2>
            <p className="text-gray-600">Om als bezorgpartner te starten heb je het volgende nodig</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'VOG', desc: 'Verklaring Omtrent Gedrag' },
              { title: 'Nederlands', desc: 'Je spreekt vloeiend Nederlands' },
              { title: 'Eigen bakwagen', desc: 'Zonder reclame en zonder schade' },
              { title: 'Laadklep', desc: 'Laadklep is verplicht' },
              { title: 'NIWO-vergunning', desc: 'Geldige NIWO-vergunning' },
              { title: 'Euro 6 voertuig', desc: 'Minimaal Euro 6 classificatie' },
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

      {/* Waarom 013Transport */}
      <section className="py-16" style={{ backgroundColor: '#6d4233' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Waarom 013Transport?</h2>
            <p className="text-white/70">Waar wij voor staan als bedrijf</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
                title: 'Betrouwbaarheid',
                desc: 'Afspraken zijn bij ons écht afspraken. Je kunt op ons rekenen.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m-2.25 0h-2.25m0 0v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
                title: 'Veiligheid op de weg',
                desc: 'Onze chauffeurs zijn professioneel en rijden altijd veilig.'
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                  </svg>
                ),
                title: 'Zorg voor het milieu',
                desc: 'Wij rijden efficiënt en met aandacht voor duurzaamheid.'
              },
            ].map((item, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
                  style={{ backgroundColor: 'rgba(249, 139, 103, 0.2)' }}
                >
                  <div style={{ color: '#f98b67' }}>{item.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16" style={{ backgroundColor: '#6d4233' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Klaar om te starten?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Neem direct contact op via WhatsApp. We plannen een kennismakingsgesprek bij het depot in jouw regio.
          </p>
          <a
            href="https://wa.me/31686411124?text=Hallo%2C%20ik%20heb%20interesse%20om%20bezorgpartner%20te%20worden%20bij%20013Transport."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-green-700 hover:bg-green-800 text-white font-bold px-10 py-4 rounded-xl transition-all hover:scale-105 shadow-lg"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Word Partner
          </a>
        </div>
      </section>
    </>
  );
}
