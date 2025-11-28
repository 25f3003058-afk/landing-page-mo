export async function GET() {
  return new Response(
`User-agent: *
Allow: /

Sitemap: https://spllit.app/sitemap.xml
`,
    { status: 200, headers: { "Content-Type": "text/plain" } }
  );
}
