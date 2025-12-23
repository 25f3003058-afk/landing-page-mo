import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://spllit.app"),

  title: {
    default: "SPLLIT",
    template: "%s | SPLLIT",
  },

  description:
    "Connect. Spllit. Save.",

  keywords: [
    "split payments",
    "event spllit",
    "ride split",
    "travel Split",
    "Trip split",
    "SPLLIT app",
  ],

  alternates: {
    canonical: "https://spllit.app",
  },

  
  openGraph: {
    title: "SPLLIT",
    description:
      "Connect. Spllit. Save.",
    url: "https://spllit.app",
    siteName: "SPLLIT",
export const metadata = {
  title: "Finance Fast",
  description: "Fast and simple finance landing page",

  icons: {
    icon: "/d977d034-73e9-4418-b..._imresizer.png",
    apple: "/d977d034-73e9-4418-b..._imresizer.png",
  },
};

   
    export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>

        {/* ⭐ WEBSITE SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "SPLLIT",
              url: "https://spllit.app/",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://spllit.app/?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />

        {/* ⭐ ORGANIZATION / STARTUP SCHEMA */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "SPLLIT",
              url: "https://spllit.app/",
              logo: "https://spllit.app/spllit-logo.png",
              description:
                "SPLLIT helps people connect, ride together, split fares, and travel affordably.",
              founder: {
                "@type": "Person",
                name: "Ankit Raj Choudhari",
              },
              sameAs: [
                "https://instagram.com/spllitapp",
                "https://linkedin.com/company/spllit",
                "https://twitter.com/spllitapp",
              ],
            }),
          }}
        />

      </head>

      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
