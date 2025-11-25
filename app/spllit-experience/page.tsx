"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function SplitExperiencePage() {
  const features = [
    "Smart route matching",
    "Live ride tracking",
    "One-tap fare split",
    "Verified identity badges",
    "Seamless payments",
    "Safety & SOS quick access",
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 mb-8 transition"
          >
            ← Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-poppins font-bold text-gray-900 leading-tight">
                The <span className="text-orange-600">Spllit</span> Experience
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">A Simple, Clean, Modern Ride-Sharing App</p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Designed to be fast, intuitive, and safe. Experience the future of urban mobility with features built
                for your everyday travel.
              </p>

              <div className="space-y-3 mt-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-lg text-gray-700 hover:text-orange-600 transition"
                  >
                    <span className="text-orange-600 font-bold mt-1">✔</span>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <button className="px-8 py-4 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition transform hover:scale-105">
                  Download Coming Soon
                </button>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md">
                {/* Animated phone/app icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl animate-float">💳</div>
                </div>

                {/* Animated circles */}
                <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-orange-400 rounded-full opacity-20 animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-orange-300 rounded-full opacity-10 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Showcase */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-poppins font-bold text-center mb-16 text-gray-900">
            Built for Your Daily Commute
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Smart Matching",
                description: "Find riders going your exact way with AI-powered route matching",
                icon: "🎯",
              },
              {
                title: "Instant Split",
                description: "Auto-calculate and split fares with one tap",
                icon: "💰",
              },
              {
                title: "Real-Time Tracking",
                description: "Know exactly where your ride is at all times",
                icon: "📍",
              },
              {
                title: "Verified Riders",
                description: "Ride with verified and rated community members",
                icon: "✓",
              },
              {
                title: "Safe Payments",
                description: "Secure, contactless payments built-in",
                icon: "🔒",
              },
              {
                title: "Emergency Access",
                description: "One-tap access to SOS and emergency features",
                icon: "🚨",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-lg transition transform hover:scale-105"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Video Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-poppins font-bold text-center mb-12 text-white">See Spllit in Action</h2>

          {/* YouTube Video Placeholder */}
          <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video bg-gray-800 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎬</div>
                <p className="text-white text-xl font-semibold mb-6">Demo Video - Coming Soon</p>
                <p className="text-gray-400 mb-8">Replace with your YouTube embed link:</p>
                <code className="bg-gray-900 text-green-400 p-4 rounded block text-sm">
                  {'<iframe width="100%" height="600" src="YOUR_YOUTUBE_LINK" />'}
                </code>
              </div>
            </div>
          </div>

          <p className="text-gray-400 text-center mt-8">Add your YouTube video link in the iframe src attribute</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
