"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function SafetyPage() {
  const features = [
    "Verified riders (ID, mobile number & profile checks)",
    "Live ride tracking",
    "Emergency SOS with instant alerts",
    "Women-only match option",
    "Private company/college groups",
    "AI risk detection (late night rides, unfamiliar routes, etc.)",
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-blue-50 to-blue-100">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition">
            ← Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-poppins font-bold text-gray-900 leading-tight">
                Built With <span className="text-blue-600">Safety</span> at the Core
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">Safety Isn't a Feature. It's the Foundation.</p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Spllit ensures every ride is safe, verified, and trackable. With multi-layer protection and advanced AI
                risk detection, shared rides feel personal, trusted & secure.
              </p>

              <div className="space-y-3 mt-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-lg text-gray-700 hover:text-blue-600 transition"
                  >
                    <span className="text-blue-600 font-bold mt-1">✔</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <button className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition transform hover:scale-105">
                  Learn More About Safety
                </button>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md">
                {/* Animated shield icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl animate-float">🛡️</div>
                </div>

                {/* Animated circles */}
                <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-blue-400 rounded-full opacity-20 animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-blue-300 rounded-full opacity-10 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Breakdown */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-poppins font-bold text-center mb-16 text-gray-900">Our Safety Stack</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Verified Profiles",
                description: "Every rider verified with government ID and phone number",
                icon: "👤",
              },
              {
                title: "Live Tracking",
                description: "Real-time ride tracking visible to trusted contacts",
                icon: "📍",
              },
              {
                title: "Emergency SOS",
                description: "One-tap emergency alerts to your emergency contacts",
                icon: "🚨",
              },
              {
                title: "Women Safety",
                description: "Women-only rides and dedicated support team",
                icon: "👩‍💼",
              },
              {
                title: "AI Monitoring",
                description: "Smart detection of risky routes and late-night rides",
                icon: "🤖",
              },
              {
                title: "Community Groups",
                description: "Ride only within your trusted company or college network",
                icon: "🏢",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition transform hover:scale-105"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-poppins font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
