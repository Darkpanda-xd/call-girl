import { writeFileSync } from 'fs';
import { SitemapStream, streamToPromise } from 'sitemap';

// Define your routes
const routes = ['', 'guwahati']; // Add your paths

const sitemapStream = new SitemapStream({ hostname: 'https://www.mahioboroi.com' });

(async () => {
  for (const route of routes) {
    sitemapStream.write({ url: `/${route}`, changefreq: 'weekly', priority: 0.8 });
  }
  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream);
  writeFileSync('../public/sitemap.xml', sitemap.toString());
})();
