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
    title: "About Spllit – Meet the Team",
    description:
      "Spllit — the smart-sharing solution designed to make commuting and cost-sharing easier than eve.",
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
