"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Check, X } from "lucide-react"
import { useState } from "react"

const pricingPlans = [
  {
    name: "Student Plan",
    description: "Perfect for students and individuals",
    price: 1,
    originalPrice: 19,
    discount: "90% OFF",
    features: [
      { name: "Monthly transfer limit: $2,500", included: true },
      { name: "Zero hidden fees", included: true },
      { name: "Real-time currency conversion", included: true },
      { name: "24/7 email support", included: true },
      { name: "Multi-currency wallet", included: false },
      { name: "API access", included: false },
      { name: "Priority customer support", included: false },
      { name: "Advanced analytics", included: false },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Corporate Plan",
    description: "Designed for businesses and enterprises",
    price: 1,
    originalPrice: 19,
    discount: "90% OFF",
    features: [
      { name: "Unlimited monthly transfers", included: true },
      { name: "Zero hidden fees", included: true },
      { name: "Real-time currency conversion", included: true },
      { name: "24/7 priority support", included: true },
      { name: "Multi-currency wallet", included: true },
      { name: "API access", included: true },
      { name: "Priority customer support", included: true },
      { name: "Advanced analytics & reporting", included: true },
    ],
    cta: "Contact Sales",
    popular: true,
  },
]

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Choose the perfect plan for your needs. No hidden fees, just honest pricing.
            </p>

            <div className="flex items-center justify-center gap-4 mb-12">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  billingPeriod === "monthly"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-muted"
                }`}
              >
                Day Plan 
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  billingPeriod === "yearly"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground hover:bg-muted"
                }`}
              >
                Weekly (Save 46%)
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative animate-fade-in-up rounded-2xl overflow-hidden transition-all duration-300 ${
                  plan.popular
                    ? "ring-2 ring-primary shadow-2xl md:scale-105"
                    : "border border-border shadow-lg hover:shadow-xl hover:-translate-y-1"
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground py-2 text-center text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className={`${plan.popular ? "bg-primary/5" : "bg-card"} p-8 ${plan.popular ? "pt-16" : ""}`}>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-4xl font-bold text-foreground">₹{plan.price}</span>
                      <span className="text-lg text-muted-foreground line-through">₹{plan.originalPrice}</span>
                      <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                        {plan.discount}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">per month, billed {billingPeriod}</p>
                  </div>

                  <button
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 mb-8 ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg"
                        : "bg-secondary text-foreground hover:bg-primary/10 hover:text-primary border border-border"
                    }`}
                  >
                    {plan.cta}
                  </button>

                  <div className="space-y-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-4">
                      What's included
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/30 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${feature.included ? "text-foreground" : "text-muted-foreground/50"}`}
                        >
                          {feature.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-16 pt-16 border-t border-border">
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "Can I switch plans anytime?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes will take effect in your next billing cycle.",
                },
                {
                  q: "Is there a free trial?",
                  a: "We offer a 14-day free trial for all new users. No credit card required to get started.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, debit cards, and UPI transfers for Indian users.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="bg-secondary/50 hover:bg-secondary transition-colors p-4 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">{faq.q}</h4>
                  <p className="text-sm text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
