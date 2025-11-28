import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spllit Blog – Updates, Travel Tips & Product News",
  description: "Stay updated with the latest tips, guides, and success stories from the SPLLIT community.",
  keywords: ["Spllit blog", "travel tips", "ride sharing news"],
  openGraph: {
    title: "Spllit Blog",
    description: "Read the latest updates and insights from Spllit.",
    url: "https://spllit.app/blog",
    type: "article",
    images: [
      {
        url: "https://spllit.app/spllit-logo.png",
        width: 1200,
        height: 630,
      }
    ],
  },
  alternates: { canonical: "https://spllit.app/blog" }
};
