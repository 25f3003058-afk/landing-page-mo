// app/robots.txt/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const content = `User-agent: *
Allow: /
Sitemap: https://spllit.app/sitemap.xml
`;

  return new NextResponse(content, {
    status: 200,
    headers: { "Content-Type": "text/plain" },
  });
}
