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
    { url: "/d977d034-73e9-4418-b316-435862b564e2.png", sizes: "200x200" },
    { url: "/d977d034-73e9-4418-b316-435862b564e2.png", sizes: "32x32" },
    { url: "/d977d034-73e9-4418-b316-435862b564e2.png", sizes: "64x64" },
    { url: "/d977d034-73e9-4418-b316-435862b564e2.png", sizes: "128x128" },
    { url: "/d977d034-73e9-4418-b316-435862b564e2.png", sizes: "256x256" },
  ],
  apple: "/d977d034-73e9-4418-b316-435862b564e2.png",
},


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
