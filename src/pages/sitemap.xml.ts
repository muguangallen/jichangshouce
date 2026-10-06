import type { APIRoute } from 'astro';
import { providers } from '../data/providers';
import { articles } from '../data/articles';

export const GET: APIRoute = async () => {
  const siteUrl = 'https://jichangshouce.com';

  const staticPages = [
    '',
    '/recommendations/',
    '/beginner/',
    '/plans/',
    '/nodes/',
    '/clients/',
    '/clients/windows/',
    '/clients/macos/',
    '/clients/ios/',
    '/clients/android/',
    '/reviews/',
    '/coupons/',
    '/faq/',
    '/service/',
    '/encyclopedia/'
  ];

  const providerPages = providers.map(p => ({
    url: `/service/${p.slug}/`,
    lastmod: p.updatedAt
  }));

  const articlePages = articles.map(a => ({
    url: `/article/${a.slug}/`,
    lastmod: a.publishDate
  }));

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  staticPages.forEach(path => {
    xml += `  <url>\n`;
    xml += `    <loc>${siteUrl}${path}</loc>\n`;
    xml += `    <lastmod>2026-09-25</lastmod>\n`;
    xml += `    <changefreq>daily</changefreq>\n`;
    xml += `    <priority>${path === '' ? '1.0' : '0.8'}</priority>\n`;
    xml += `  </url>\n`;
  });

  providerPages.forEach(item => {
    xml += `  <url>\n`;
    xml += `    <loc>${siteUrl}${item.url}</loc>\n`;
    xml += `    <lastmod>${item.lastmod}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.9</priority>\n`;
    xml += `  </url>\n`;
  });

  articlePages.forEach(item => {
    xml += `  <url>\n`;
    xml += `    <loc>${siteUrl}${item.url}</loc>\n`;
    xml += `    <lastmod>${item.lastmod}</lastmod>\n`;
    xml += `    <changefreq>weekly</changefreq>\n`;
    xml += `    <priority>0.8</priority>\n`;
    xml += `  </url>\n`;
  });

  xml += `</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
