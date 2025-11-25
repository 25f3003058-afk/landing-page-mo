"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function CommunitiesPage() {
  const benefits = [
    "Reduce employee travel costs",
    "Improve safety for late-night workers",
    "Reduce parking & traffic load",
    "Eco-friendly mobility initiative",
    "Build internal trust & collaboration",
  ]

  return (
    <main className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-gradient-to-br from-purple-50 to-purple-100">
        <div className="max-w-7xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 transition"
          >
            ← Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-6 animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-poppins font-bold text-gray-900 leading-tight">
                Perfect for Workplaces, Colleges & <span className="text-purple-600">Communities</span>
              </h1>

              <p className="text-xl text-gray-700 leading-relaxed">Empower Groups to Travel Smart</p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Whether it's corporate employees, hostels, universities or residential communities — Spllit streamlines
                daily travel. Mobility that makes teams stronger.
              </p>

              <div className="space-y-3 mt-8">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-lg text-gray-700 hover:text-purple-600 transition"
                  >
                    <span className="text-purple-600 font-bold mt-1">✔</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <button className="px-8 py-4 bg-purple-600 text-white rounded-full font-semibold hover:bg-purple-700 transition transform hover:scale-105">
                  Get Started for Your Organization
                </button>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative h-96 md:h-full min-h-96 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md">
                {/* Animated people icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl animate-float">👥</div>
                </div>

                {/* Animated circles */}
                <div className="absolute top-1/3 right-1/3 w-28 h-28 bg-purple-400 rounded-full opacity-20 animate-pulse" />
                <div className="absolute bottom-1/3 left-1/3 w-36 h-36 bg-purple-300 rounded-full opacity-10 animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Types */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-poppins font-bold text-center mb-16 text-gray-900">
            Perfect for Every Organization
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Corporate Teams",
                description: "Reduce commute costs and boost employee satisfaction",
                icon: "🏢",
              },
              {
                title: "Universities",
                description: "Safe, affordable transportation for students",
                icon: "🎓",
              },
              {
                title: "Hostels & Residences",
                description: "Connect residents with verified members",
                icon: "🏠",
              },
              {
                title: "Event Communities",
                description: "Organize group transportation effortlessly",
                icon: "🎉",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition transform hover:scale-105"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-3">{item.title}</h3>
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
