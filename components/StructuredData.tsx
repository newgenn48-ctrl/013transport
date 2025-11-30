export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "013Transport BV",
    "alternateName": "013Transport",
    "url": "https://013transport.eu",
    "logo": "https://013transport.eu/icon.svg",
    "description": "Professioneel witgoedtransport door heel Nederland. Wij werken met ervaren ZZP-partners vanuit depots in Breda, Nieuwegein en Hazeldonk.",
    "foundingDate": "2019",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Breda",
      "addressCountry": "NL"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+31686411124",
      "contactType": "customer service",
      "availableLanguage": "Dutch"
    },
    "sameAs": [],
    "areaServed": {
      "@type": "Country",
      "name": "Netherlands"
    },
    "taxID": "NL864507070B01",
    "legalName": "013Transport BV"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "013Transport BV",
    "image": "https://013transport.eu/030Transport.webp",
    "url": "https://013transport.eu",
    "telephone": "+31686411124",
    "email": "info@013transport.eu",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Breda",
      "addressRegion": "Noord-Brabant",
      "addressCountry": "NL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 51.5719,
      "longitude": 4.7683
    },
    "priceRange": "€€",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "07:00",
      "closes": "18:00"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JobPostingSchema({
  title,
  description,
  salary,
  employmentType = "CONTRACTOR"
}: {
  title: string;
  description: string;
  salary: string;
  employmentType?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": title,
    "description": description,
    "datePosted": new Date().toISOString().split('T')[0],
    "validThrough": new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    "employmentType": employmentType,
    "hiringOrganization": {
      "@type": "Organization",
      "name": "013Transport BV",
      "sameAs": "https://013transport.eu",
      "logo": "https://013transport.eu/icon.svg"
    },
    "jobLocation": [
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Breda",
          "addressCountry": "NL"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Nieuwegein",
          "addressCountry": "NL"
        }
      },
      {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Hazeldonk",
          "addressCountry": "NL"
        }
      }
    ],
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": {
        "@type": "QuantitativeValue",
        "value": salary,
        "unitText": "HOUR"
      }
    },
    "jobBenefits": "Tot 10% bonus bij hoge klanttevredenheid, flexibele werktijden, wekelijkse opdrachten",
    "qualifications": "VOG, NIWO-vergunning, eigen bakwagen met laadklep, Nederlands spreken",
    "responsibilities": "Witgoedbezorging bij klanten en winkels in Nederland en België"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
