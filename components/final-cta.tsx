import { Download, Smartphone } from "lucide-react"
import Image from "next/image"

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-purple-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 text-balance">
              One Solution for All Your
              <br />
              Cross-Border Payments
            </h2>

            <p className="text-purple-100 text-lg mb-8">
              Download TransferFlow today and start sending money internationally with ease.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition">
                <Download size={20} />
                Google Play
              </button>
              <button className="bg-purple-800 hover:bg-purple-900 text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition border border-white">
                <Smartphone size={20} />
                App Store
              </button>
            </div>
          </div>

          <div className="h-96 sm:h-[450px] relative">
            <Image
              src="/mobile-app-final-cta.jpg"
              alt="Download app"
              width={360}
              height={640}
              className="rounded-3xl w-full h-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
