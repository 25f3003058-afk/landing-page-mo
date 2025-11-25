import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  // ye batata hai ki website ka base URL kya hai
  metadataBase: new URL("https://www.spllit.app"),

  // Browser tab ka title + Google search title
  title: "SPLLIT – Simplify International Transactions",

  // Google search description
  description:
    "Make international payments a breeze with SPLLIT. Zero hidden fees and effortless splitting.",

  // jo pehle bhi tha
  generator: "v0.app",

  // 👇 sabse important: canonical URL
  alternates: {
    canonical: "https://www.spllit.app/",
  },

  // Social share / Open Graph data
  openGraph: {
    title: "SPLLIT – Simplify International Transactions",
    description:
      "Make international payments a breeze with SPLLIT. Zero hidden fees and effortless splitting.",
    url: "https://www.spllit.app/",
    siteName: "SPLLIT",
    type: "website",
  },

  // tumhara existing icons as-is
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
