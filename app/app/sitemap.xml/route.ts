// app/sitemap.xml/route.ts

export async function GET() {
  const baseUrl = "https://spllit.app";

  // LIST ALL STATIC PAGES HERE  
  const staticPages = [
    "/",                   
    "/about",
    "/blog",
    "/careers",
    "/colleges-communities",
    "/contact-us",
    "/faq",
    "/green-planet",
    "/pricing",
    "/privacy-policy",
    "/safety",
    "/split-experience",
    "/terms-of-service"
  ];

  // GENERATE XML
  const urls = staticPages
    .map(
      (path) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <changefreq>weekly</changefreq>
        <priority>${path === "/" ? "1.0" : "0.7"}</priority>
      </url>
    `
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls}
  </urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
