"use client"

import Link from "next/link"
import { useState } from "react"

export default function FeatureCards() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  const features = [
    {
      id: "safety",
      title: "Safety",
      description: "Built with safety at the core",
      icon: "🛡️",
      link: "/safety",
    },
    {
      id: "communities",
      title: "Colleges & Communities",
      description: "Empower groups to travel smart",
      icon: "👥",
      link: "/colleges-communities",
    },
    {
      id: "planet",
      title: "Green Planet",
      description: "Shared rides, shared impact",
      icon: "🌍",
      link: "/green-planet",
    },
    {
      id: "split",
      title: "The Split Experience",
      description: "Simple, clean, modern app",
      icon: "💳",
      link: "/spllit-experience",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-poppins font-bold text-center mb-16 text-gray-900">
          Why Choose SPLLIT
        </h2>

        <div className="flex flex-col gap-8 md:gap-10">
          {features.map((feature) => (
            <Link href={feature.link} key={feature.id}>
              <div
                className={`flex items-center justify-between p-8 md:p-10 rounded-2xl cursor-pointer transform transition-all duration-500 border border-gray-200 hover:border-gray-300 bg-transparent ${
                  hoveredCard === feature.id ? "shadow-lg scale-105" : "shadow-md scale-100"
                }`}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Icon - 3D effect */}
                <div
                  className={`text-6xl md:text-7xl transition-all duration-500 flex-shrink-0 ${
                    hoveredCard === feature.id ? "scale-125 rotate-12" : "scale-100 rotate-0"
                  }`}
                >
                  {feature.icon}
                </div>

                {/* Text content */}
                <div className="flex-1 ml-6 md:ml-10">
                  <h3 className="text-2xl md:text-3xl font-poppins font-bold text-gray-900 mb-2 transition-all duration-500">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base font-light">{feature.description}</p>
                </div>

                {/* Hover indicator arrow */}
                <div
                  className={`text-gray-400 text-2xl transition-all duration-500 flex-shrink-0 ml-6 ${
                    hoveredCard === feature.id ? "translate-x-2 text-gray-700" : "translate-x-0"
                  }`}
                >
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-500 text-sm font-light animate-pulse">
          Hover over cards to explore • Click to learn more
        </p>
      </div>
    </section>
  )
}
