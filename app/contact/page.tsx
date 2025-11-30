import Image from 'next/image';
import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import { BreadcrumbSchema } from '@/components/StructuredData';

export const metadata: Metadata = {
  title: "Contact",
  description: "Neem contact op met 013Transport. Bel 06 86 41 1124, WhatsApp of mail ons. Depots in Breda, Nieuwegein en Hazeldonk. KvK: 88112969.",
  keywords: [
    "013Transport contact",
    "witgoedtransport contact",
    "transport Breda",
    "transport Nieuwegein",
    "bezorgpartner worden",
  ],
  openGraph: {
    title: "Contact - 013Transport",
    description: "Neem contact op via WhatsApp, telefoon of email. We helpen je graag verder.",
    url: "https://013transport.eu/contact",
  },
  alternates: {
    canonical: "https://013transport.eu/contact",
  },
};

export default function Contact() {
  return (
    <>
      <BreadcrumbSchema items={[
        { name: "Home", url: "https://013transport.eu" },
        { name: "Contact", url: "https://013transport.eu/contact" }
      ]} />
      {/* Header */}
      <section className="pt-36 pb-24 relative overflow-hidden" style={{ backgroundColor: '#6d4233' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/030Transport.webp"
            alt="013Transport bestelwagens voor witgoedbezorging"
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
            Contact
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Neem Contact Op
          </h1>
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mb-8 leading-relaxed">
            We helpen je graag verder met al je vragen. Bereik ons via WhatsApp, telefoon of email.
          </p>
          <a
            href="https://wa.me/31686411124"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            WhatsApp Ons
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Contactgegevens</h2>
              <div className="space-y-4">
                <a href="tel:0686411124" className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border-2 border-gray-200">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(249, 139, 103, 0.15)' }}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: '#f98b67' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Telefoon</div>
                    <div style={{ color: '#f98b67' }}>06 86 41 1124</div>
                  </div>
                </a>

                <a href="mailto:info@013transport.eu" className="flex items-center gap-4 p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border-2 border-gray-200">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(249, 139, 103, 0.15)' }}
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} style={{ color: '#f98b67' }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div style={{ color: '#f98b67' }}>info@013transport.eu</div>
                  </div>
                </a>

                <a href="https://wa.me/31686411124" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-5 bg-green-50 rounded-xl hover:bg-green-100 transition-colors border-2 border-green-200">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <div className="text-green-600">+31 6 86 41 1124</div>
                  </div>
                </a>
              </div>

              <div className="mt-8 p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">Bedrijfsgegevens</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>013Transport BV</p>
                  <p>KvK: 88112969</p>
                  <p>BTW: NL864507070B01</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Stuur een bericht</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Depots */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Onze Depots</h2>
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
    </>
  );
}
