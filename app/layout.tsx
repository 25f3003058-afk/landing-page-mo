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
    images: [
      {
        url: "https://spllit.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "SPLLIT",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: [
      {
        url: "/favicon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
<body className={"font-sans antialiased"}>
  {children}

  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "SPLLIT",
        url: "https://spllit.app",
        description:
          "Connect. Spllit. Save.",
      }),
    }}
  />

  <Analytics />
</body>

    </html>
  )
}
