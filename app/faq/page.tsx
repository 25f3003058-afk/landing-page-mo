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
        a: "SPLLIT is a smart ride-sharing platform that helps people find trusted co-travellers, split travel costs, and enjoy safer, more affordable trips.",
      },
      {
        q: "How do I create an account?",
        a: "Simply download the SPLLIT app, sign up using your phone number or email, complete quick verification, and start finding or creating rides instantly.",
      },
      {
        q: "Is SPLLIT available in my city?",
        a: "SPLLIT is rolling out city by city. If your location isn’t active yet, you can join the waitlist inside the app and get early access when we launch.",
      },

    ],
  },
  {
    category: "Transfers & Payments",
    questions: [
     {
  q: "How long does it take to find a ride match?",
  a: "Most users get a match within a few minutes based on route, timing, and trust score. In low-traffic areas, it may take slightly longer.",
},
{
  q: "What is the minimum ride amount?",
  a: "There’s no minimum ride amount. You only split the actual travel cost with your co-travellers based on distance and fare.",
},
{
  q: "Are there any hidden fees?",
  a: "No! SPLLIT has zero hidden charges. You only pay your share of the ride cost. All amounts are shown clearly before you confirm.",
},

    ],
  },
  {
    category: "Security & Safety",
    questions: [
      {
  q: "Is my information safe with SPLLIT?",
  a: "Yes. SPLLIT uses advanced encryption, secure login, and a multi-layer AI safety system to protect your identity, ride details, and communication.",
},
{
  q: "What should I do if my account is compromised?",
  a: "If you notice any unusual activity, immediately reset your password and contact our support team at support@spllit.app. We will secure your account quickly.",
},
{
  q: "How do you protect my personal information?",
  a: "We protect your data with end-to-end encryption, strict privacy controls, and never share your personal details with anyone—including co-travellers—without your permission.",
},

    ],
  },
  {
    category: "Pricing & Plans",
questions: [
  {
    q: "Which plan should I choose?",
    a: "If you're a casual rider, the Free Plan is perfect. If you want faster matches, advanced filters, AI Trust Score insights, and profile boosts, the Premium Plan is the best choice.",
  },
  {
    q: "Can I change my plan later?",
    a: "Yes. You can upgrade or downgrade your plan anytime from the Subscription section. Changes apply instantly or at the next billing cycle, depending on the platform.",
  },
  {
    q: "Do you offer discounts for annual subscriptions?",
    a: "Yes, SPLLIT offers special annual discounts—plus additional savings for students and early users during the launch phase.",
  },
],

  },
  {
    category: "Technical Support",
questions: [
  {
    q: "I'm having trouble logging in. What should I do?",
    a: "Double-check your phone number or email, then use the 'Forgot Password' option. If the problem continues, reach out to us at support@spllit.com.",
  },
  {
    q: "Which browsers do you support?",
    a: "SPLLIT works smoothly on all modern browsers—Chrome, Firefox, Safari, and Edge. For the best experience, use the latest version.",
  },
  {
    q: "What should I do if the app crashes?",
    a: "First, update to the latest version of the SPLLIT app. If the issue persists, try clearing your app cache or restarting your device.",
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
                Email: support@spllit.app
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
