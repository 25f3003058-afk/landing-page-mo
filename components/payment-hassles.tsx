import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function PaymentHassles() {
  const features = [
    "Multi-currency accounts with real rates",
    "Send & receive in 150+ countries",
    "Ultra-low fees with no hidden charges",
    "Transfer in minutes, not days",
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16 text-balance">
          Say Goodbye to International
          <br />
          <span className="text-purple-600">Payment Hassles</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-4 mb-6 last:mb-0">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-base sm:text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 md:order-2 h-80 sm:h-96">
            <Image
              src="/mobile-wallet-transfer-app.jpg"
              alt="Payment app interface"
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
