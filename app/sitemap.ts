import { MetadataRoute } from 'next';

const baseUrl = 'https://013transport.eu';

// Bump de datum van een route zodra de inhoud van die pagina inhoudelijk
// wijzigt. Bewust geen `new Date()`: een sitemap die bij elke crawl "zojuist
// gewijzigd" meldt voor alle pagina's, leert Google het signaal te negeren.
const routes: {
  path: string;
  lastModified: string;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
  priority: number;
}[] = [
  { path: '', lastModified: '2026-09-20', changeFrequency: 'weekly', priority: 1 },
  { path: '/vacatures', lastModified: '2026-09-20', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/diensten', lastModified: '2026-09-20', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/over-ons', lastModified: '2026-09-20', changeFrequency: 'monthly', priority: 0.7 },
  { path: '/contact', lastModified: '2026-09-20', changeFrequency: 'monthly', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(({ path, lastModified, changeFrequency, priority }) => ({
    url: `${baseUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
