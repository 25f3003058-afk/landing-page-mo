import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function ZeroFees() {
  const features = [
    "Send internationally with ZERO hidden fees",
    "Transparent pricing always",
    "Real, mid-market exchange rates",
    "Save up to 8x vs traditional banks",
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16 text-balance">
          <span className="text-purple-600">Zero Hidden Fees</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-purple-100 rounded-2xl p-8 sm:p-12 space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-800 text-base sm:text-lg font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 h-96 sm:h-[500px]">
            <Image
              src="/mobile-zero-fees-payment.jpg"
              alt="Zero fees illustration"
              width={360}
              height={640}
              className="rounded-3xl w-full h-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
