export async function GET() {
  const baseurl = "https://spllit.app";

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
    "/spllit-experience",
    "/terms-of-service"
  ];

  const urls = staticPages
    .map((path) => {
      return `
        <url>
          <loc>${baseurl}${path}</loc>
          <changefreq>weekly</changefreq>
          <priority>${path === "/" ? "1.0" : "0.7"}</priority>
        </url>`;
    })
    .join("");

  const xml = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls}
    </urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
