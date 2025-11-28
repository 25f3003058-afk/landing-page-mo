import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spllit Pricing – Travel Smart, Pay Less",
  description:
    "Spllit helps you cut your travel cost with shared rides. See how much you save on every journey.",
  openGraph: {
    title: "Spllit – Affordable Shared Travel",
    description:
      "Experience transparent and cost-efficient pricing through shared rides.",
    url: "https://spllit.app/pricing",
    type: "website",
    images: [
      { url: "https://spllit.app/spllit-logo.png", width: 1200, height: 630 },
    ],
  },
  alternates: { canonical: "https://spllit.app/pricing" },
};
