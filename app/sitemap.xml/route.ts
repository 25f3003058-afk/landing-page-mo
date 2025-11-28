// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://spllit.app";

  const staticRoutes = [
    "",
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

  const urls = staticRoutes
    .map((route) => {
      const path = route === "" ? "" : route;
      return `<url><loc>${baseUrl}${path}</loc><changefreq>weekly</changefreq><priority>${route === "" ? "1.0" : "0.7"}</priority></url>`;
    })
    .join("");

  // NOTE: xml string starts immediately with <?xml (no preceding newline/space)
  const xml = `<?xml version="1.0" encoding="UTF-8"?>` +
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
    `${urls}` +
    `</urlset>`;

  return new NextResponse(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml"
    }
  });
}
