import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Spllit Experience – Travel Together, Pay Less",
  description:
    "Discover how Spllit transforms travel into a shared, social, and cost-efficient experience.",
  openGraph: {
    title: "Spllit Experience",
    description:
      "Learn how Spllit matches co-travelers and optimizes shared journeys.",
    url: "https://spllit.app/split-experience",
    type: "website",
    images: [
      { url: "https://spllit.app/spllit-logo.png", width: 1200, height: 630 },
    ],
  },
  alternates: { canonical: "https://spllit.app/split-experience" },
};
