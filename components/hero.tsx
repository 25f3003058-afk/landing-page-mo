"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="pt-20 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-12 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight text-balance font-poppins">
            Simplify Your International
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">
              Transactions
            </span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed text-balance">
            Say goodbye to complicated international payments. Transfer funds and send money across borders with just a
            few taps.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 animate-slide-in-right"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-purple-50 rounded-full text-xs sm:text-base">
              <span className="text-lg sm:text-2xl">🌍</span>
              <span className="text-gray-700 font-semibold text-center">Coming Soon in Chennai</span>
            </div>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-10 py-2 sm:py-6 rounded-lg font-semibold text-sm sm:text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
              Coming Soon !!
            </Button>
          </div>
        </div>

        {/* Phone Mockups with enhanced animations - Made responsive for mobile */}
        <div className="relative h-64 sm:h-96 lg:h-[500px] flex items-center justify-center gap-2 sm:gap-4 mb-12 sm:mb-16">
          <div
            className={`hidden lg:block absolute left-0 w-32 h-64 lg:w-40 lg:h-80 bg-purple-100 rounded-3xl shadow-lg transform -rotate-12 opacity-75 ${
              isLoaded ? "animate-float" : ""
            }`}
            style={{ animationDelay: "0s" }}
          >
            <Image
              src="/mobile-app-interface-payment.jpg"
              alt="Phone mockup 1"
              width={360}
              height={640}
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>

          <div
            className={`w-40 h-64 sm:w-48 sm:h-80 lg:w-56 lg:h-96 bg-blue-600 rounded-3xl shadow-2xl border-4 sm:border-8 border-gray-900 flex items-center justify-center overflow-hidden transform transition-all duration-500 ${
              isLoaded ? "scale-100" : "scale-90 opacity-0"
            }`}
          >
            <Image
              src="/mobile-app-transfer-interface-blue.jpg"
              alt="Main phone mockup"
              width={360}
              height={640}
              className="rounded-2xl w-full h-full object-cover"
            />
          </div>

          <div
            className={`hidden lg:block absolute right-0 w-32 h-64 lg:w-40 lg:h-80 bg-gray-100 rounded-3xl shadow-lg transform rotate-12 opacity-75 ${
              isLoaded ? "animate-float" : ""
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            <Image
              src="/mobile-app-account-settings.jpg"
              alt="Phone mockup 2"
              width={360}
              height={640}
              className="rounded-3xl w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Trusted Companies Section - Made responsive with fewer columns on mobile */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 lg:p-12 border border-purple-200">
          <p className="text-center text-gray-600 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 uppercase tracking-wide">
            Trusted by leading institutions
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-center justify-items-center">
            <div className="flex flex-col items-center gap-2">
              <img src="/iitm-logo.jpg" alt="IIT Madras" className="h-10 sm:h-12 w-auto object-contain" />
              <p className="text-xs text-gray-600 text-center font-semibold">IIT Madras</p>
            </div>
            <div className="text-center">
              <p className="text-xs sm:text-sm lg:text-lg font-bold text-gray-500 hover:text-gray-700 transition-colors duration-300">
                IITM
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs sm:text-sm lg:text-lg font-bold text-gray-500 hover:text-gray-700 transition-colors duration-300">
                Indian Institute of Technology
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
