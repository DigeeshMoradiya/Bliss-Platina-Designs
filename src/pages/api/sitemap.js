export default async function handler(req, res) {
    const baseUrl = process.env.NEXT_PUBLIC_DOMAIN_URL;


    const staticPaths = [
        '',
        'aboutus',
        'shop',
        'contact-us',
        'faq',
        'privacy-policy',
        'terms-conditions',
        'custom-design',
        'product-details',
        'find-size',
        'daimond'
    ];

    const productSlugs = ['14k-gold-ring', 'diamond-stud', 'silver-pendant'];

    const urls = [
        ...staticPaths.map((path) => path === '' ? `${baseUrl}` : `${baseUrl}/${path}`),
        ...productSlugs.map((slug) => `${baseUrl}/product-detail/${slug}`)
    ];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
            .map(
                (url) => `
      <url>
        <loc>${url}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`
            )
            .join('')}
  </urlset>`;

    res.setHeader('Content-Type', 'application/xml');
    res.write(sitemap);
    res.end();
}
