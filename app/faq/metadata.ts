import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spllit FAQ – All Your Questions Answered",
  description:
    "Find answers to common questions about shared rides, safety, payments, and the Spllit experience.",
  openGraph: {
    title: "Spllit – Frequently Asked Questions",
    description:
      "Everything you need to know about how Spllit works, from safety to fare splitting.",
    url: "https://spllit.app/faq",
    type: "website",
    images: [
      { url: "https://spllit.app/spllit-logo.png", width: 1200, height: 630 },
    ],
  },
  alternates: { canonical: "https://spllit.app/faq" },
};
