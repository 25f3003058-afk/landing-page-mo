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
        
        {/* =========================
            HERO HEADING + SUBTEXT
        ========================== */}
        <div className={`text-center mb-12 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight text-balance font-poppins">
            Simplify Your Everyday  
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-700">Travel</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed text-balance">
            Say goodbye to costly solo rides. Split fares instantly with verified co-travelers going the same route as you.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 animate-slide-in-right"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-purple-50 rounded-full text-xs sm:text-base">
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full overflow-hidden flex items-center justify-center">
                <img
                  src="/launch-chennai.png.png"
                  alt="Launching Soon in Chennai"
                  className="w-full h-full object-cover"
                />
              </div>

              <span className="text-gray-700 font-semibold text-center">
                Launching Soon in Chennai
              </span>
            </div>

            <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 sm:px-10 py-2 sm:py-6 rounded-lg font-semibold text-sm sm:text-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
              Get Early Access
            </Button>
          </div>
        </div>

        {/* =========================
            PHONE MOCKUPS
        ========================== */}
        <div className="relative h-64 sm:h-96 lg:h-[500px] flex items-center justify-center gap-2 sm:gap-4 mb-12 sm:mb-16">
          
          <div
            className={`hidden lg:block absolute left-0 w-32 h-64 lg:w-40 lg:h-80 bg-purple-100 rounded-3xl shadow-lg transform -rotate-12 opacity-75 ${
              isLoaded ? "animate-float" : ""
            }`}
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

        {/* =========================
            PERFECT CONTINUOUS MARQUEE
        ========================== */}
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-2xl p-6 sm:p-8 lg:p-12 border border-purple-200">

          <p className="text-center text-gray-600 text-xs sm:text-sm font-semibold mb-6 sm:mb-8 uppercase tracking-wide">
            Trusted by leading institutions
          </p>

          <div className="overflow-hidden">
            <div className="marquee-track flex items-center">

              {/* FIRST SET */}
              <div className="flex items-center gap-12 sm:gap-16 lg:gap-20 min-w-max marquee-set">
                <LogoSet />
              </div>

              {/* SECOND SET (IDENTICAL COPY) */}
              <div className="flex items-center gap-12 sm:gap-16 lg:gap-20 min-w-max marquee-set">
                <LogoSet />
              </div>

            </div>
          </div>

          {/* SCOPED CSS ONLY FOR MARQUEE */}
          <style jsx>{`
            .marquee-track {
              width: max-content;
              animation: scroll 18s linear infinite;
              display: flex;
              gap: 0;
            }
            .marquee-track:hover {
              animation-play-state: paused;
            }
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </div>

      </div>
    </section>
  )
}

/* Small helper component for cleaner code */
function LogoSet() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 whitespace-nowrap">
        <img src="/iitm-logo.jpg" className="h-8 sm:h-10 object-contain" />
        <p className="text-xs text-gray-600 font-semibold">IIT Madras</p>
      </div>

      <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-500">IITM</p>

      <p className="text-xs sm:text-sm lg:text-base font-bold text-gray-500 max-w-[120px] text-center">
        Indian Institute of Technology
      </p>

      <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-500">SarvamAI</p>

      <p className="text-sm sm:text-base lg:text-lg font-bold text-gray-500">MongoDB</p>
    </>
  )
}
