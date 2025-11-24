"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "What is SPLLIT?",
        a: "SPLLIT is a fintech platform that simplifies international money transfers with real-time currency conversion, zero hidden fees, and secure transactions.",
      },
      {
        q: "How do I create an account?",
        a: "Download our mobile app or visit our website, click 'Sign Up', and follow the verification process. You'll be ready to transfer money in minutes!",
      },
      {
        q: "Is SPLLIT available in my country?",
        a: "SPLLIT operates in over 150 countries. Check our website to see if your country is supported.",
      },
    ],
  },
  {
    category: "Transfers & Payments",
    questions: [
      {
        q: "How long does a transfer take?",
        a: "Most transfers are completed within 1-3 minutes. For some destinations, it may take up to 24 hours.",
      },
      {
        q: "What is the minimum transfer amount?",
        a: "The minimum transfer amount is $10 (or equivalent in your local currency). Maximum limits depend on your account verification level.",
      },
      {
        q: "Are there any hidden fees?",
        a: "No! We believe in complete transparency. All fees are clearly displayed before you confirm your transfer.",
      },
    ],
  },
  {
    category: "Security & Safety",
    questions: [
      {
        q: "Is my money safe with SPLLIT?",
        a: "Yes. We use bank-level encryption, two-factor authentication, and comply with all international financial regulations.",
      },
      {
        q: "What should I do if my account is compromised?",
        a: "Contact our support team immediately at support@spllit.com or call 9363793714. We'll secure your account within minutes.",
      },
      {
        q: "How do you protect my personal information?",
        a: "We use AES-256 encryption for all data and never share your information with third parties without your consent.",
      },
    ],
  },
  {
    category: "Pricing & Plans",
    questions: [
      {
        q: "Which plan should I choose?",
        a: "Students should choose our Student Plan for occasional transfers. Businesses should opt for the Corporate Plan for unlimited transfers and API access.",
      },
      {
        q: "Can I change my plan later?",
        a: "You can upgrade or downgrade your plan anytime. Changes take effect in your next billing cycle.",
      },
      {
        q: "Do you offer discounts for annual subscriptions?",
        a: "Yes, we offer 20% discount when you choose an annual subscription compared to monthly billing.",
      },
    ],
  },
  {
    category: "Technical Support",
    questions: [
      {
        q: "I'm having trouble logging in. What should I do?",
        a: "Try resetting your password using the 'Forgot Password' option. If the issue persists, contact our support team.",
      },
      {
        q: "Which browsers do you support?",
        a: "SPLLIT works on all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend using the latest version.",
      },
      {
        q: "What should I do if the app crashes?",
        a: "Update to the latest version from the App Store or Google Play. Clear your app cache and try again.",
      },
    ],
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const toggleOpen = (id: string) => {
    setOpenIndex(openIndex === id ? null : id)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 text-balance font-poppins">
              Frequently Asked Questions
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions about SPLLIT. Can't find what you're looking for?{" "}
              <button className="text-purple-600 font-bold hover:text-purple-700 transition">
                Contact our support team
              </button>
            </p>
          </div>

          {/* FAQ Sections */}
          <div className="space-y-12">
            {faqs.map((category, catIdx) => (
              <div
                key={catIdx}
                className="animate-fade-in-up"
                style={{
                  animationDelay: `${catIdx * 0.1}s`,
                }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 flex items-center gap-4 font-poppins">
                  <div className="w-1.5 h-10 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
                  {category.category}
                </h2>

                <div className="space-y-4">
                  {category.questions.map((faq, idx) => {
                    const id = `${catIdx}-${idx}`
                    const isOpen = openIndex === id

                    return (
                      <div
                        key={idx}
                        className="border-2 border-gray-200 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-200/50 bg-white"
                      >
                        <button
                          onClick={() => toggleOpen(id)}
                          className="w-full px-6 py-5 flex items-center justify-between hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-colors"
                        >
                          <h3 className="text-left font-bold text-gray-900 text-lg font-poppins">{faq.q}</h3>
                          <ChevronDown
                            className={`flex-shrink-0 text-purple-600 font-bold transition-transform duration-300 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                            size={24}
                          />
                        </button>

                        {isOpen && (
                          <div className="px-6 py-5 bg-gradient-to-br from-purple-50 to-pink-50 border-t-2 border-gray-200 animate-fade-in-up">
                            <p className="text-gray-700 leading-relaxed text-base">{faq.a}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl text-center text-white animate-fade-in-up border-2 border-purple-400">
            <h3 className="text-3xl sm:text-4xl font-bold mb-3 font-poppins">Still have questions?</h3>
            <p className="text-purple-100 mb-8 text-lg leading-relaxed">
              Our support team is here to help. Reach out to us anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:ankitrajchoudhari@gmail.com"
                className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105 hover:shadow-lg"
              >
                Email: ankitrajchoudhari@gmail.com
              </a>
              <a
                href="tel:9363793714"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-bold transition-all transform hover:scale-105"
              >
                Call: +91 9363793714
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
