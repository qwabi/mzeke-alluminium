// app/api/sitemap/route.ts

export async function GET() {
  const urls = [
    { loc: 'https://www.mzekealluspecialist.co.za', lastmod: '2025-06-20' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        ({ loc, lastmod }) => `
        <url>
          <loc>${loc}</loc>
          <lastmod>${lastmod}</lastmod>
        </url>
      `
      )
      .join('')}
  </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
