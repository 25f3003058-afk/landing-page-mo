import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SPLLIT - Simplify International Transactions",
  description:
    "Make international payments a breeze with SPLLIT. Zero hidden fees, effortless currency conversion, and seamless money transfers worldwide.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/d977d034-73e9-4418-b..._imresizer.png", // your new logo
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/d977d034-73e9-4418-b..._imresizer.png", // same for dark mode (or add separate image)
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/d977d034-73e9-4418-b..._imresizer.png", // fallback SVG/icon
        type: "image/png",
      },
    ],
    apple: "/d977d034-73e9-4418-b..._imresizer.png",
  },
}


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
