import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Spllit – Meet the Team Behind Shared Payments",
  description:
    "Learn how Spllit connects people traveling the same way to save time and money together.",
  keywords: [
    "SPLLIT team",
    "founders of SPLLIT",
    "shared payments",
    "group travel payments",
    "fintech startup",
  ],
  openGraph: {
    title: "About SPLLIT – Meet the Team",
    description:
      "Learn about SPLLiT, the global smart-sharing platform simplifying shared expenses.",
    url: "https://spllit.app/about",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "About SPLLIT Team",
      },
    ],
  },
  alternates: {
    canonical: "https://spllit.app/about",
  },
};
