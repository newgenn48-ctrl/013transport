import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://013transport.eu';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // /_next/ bewust niet geblokkeerd: Google heeft de CSS- en JS-chunks
        // nodig om de pagina te renderen, en /_next/image levert de
        // geoptimaliseerde afbeeldingen voor Google Afbeeldingen.
        disallow: '/api/',
      },
    ],
    host: baseUrl,
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
