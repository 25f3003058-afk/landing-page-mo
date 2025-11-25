"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function GreenPlanetPage() {
  const impacts = [
    "Reduce carbon emissions per person",
    "Reduce fuel consumption",
    "Reduce city congestion",
    "Reduce noise & road pollution",
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-green-50 to-green-100">
        <div className="max-w-7xl mx-auto">
          <Link href="/" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 mb-8 transition">
            ← Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-poppins font-bold text-gray-900 leading-tight">
                Good for the <span className="text-green-600">Planet</span>, Good for the City
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">Shared Rides, Shared Impact</p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Everything starts with one Spllit ride. Every shared ride helps the city breathe easier. Together, we're
                building sustainable urban mobility for the future.
              </p>

              <div className="space-y-3 mt-8">
                {impacts.map((impact, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-lg text-gray-700 hover:text-green-600 transition"
                  >
                    <span className="text-green-600 font-bold mt-1">✔</span>
                    <span>{impact}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <button className="px-8 py-4 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition transform hover:scale-105">
                  Join the Green Movement
                </button>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md">
                {/* Animated planet icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl animate-float">🌍</div>
                </div>

                {/* Animated circles */}
                <div className="absolute top-1/4 right-1/4 w-24 h-24 bg-green-400 rounded-full opacity-20 animate-pulse" />
                <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-green-300 rounded-full opacity-10 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Stats */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-poppins font-bold text-center mb-16 text-gray-900">Our Environmental Impact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                stat: "50%",
                description: "Reduction in carbon emissions per ride",
              },
              {
                stat: "40%",
                description: "Less fuel consumption vs solo rides",
              },
              {
                stat: "35%",
                description: "Decrease in city traffic congestion",
              },
              {
                stat: "60%",
                description: "Lower noise pollution levels",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 text-center hover:shadow-lg transition transform hover:scale-105"
              >
                <div className="text-5xl font-poppins font-bold text-green-600 mb-3">{item.stat}</div>
                <p className="text-gray-700 text-lg">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
