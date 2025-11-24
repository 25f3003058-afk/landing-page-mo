import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function CurrencyConversion() {
  const conversions = [
    { from: "Turkey Lira", to: "₺1,234.50 - 0.5% fees" },
    { from: "South Africa Rand", to: "R 234.25 - 0.5% fees" },
    { from: "United States", to: "$ 234.00 - 0.5% fees" },
    { from: "British Pound", to: "£ 234.50 - 0.5% fees" },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16 text-balance">
          Effortlessly <span className="text-purple-600">Convert</span>
          <br />
          <span className="text-purple-600">Currency</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="h-96 sm:h-[500px]">
            <Image
              src="/mobile-currency-conversion-interface.jpg"
              alt="Currency conversion"
              width={360}
              height={640}
              className="rounded-3xl w-full h-full object-cover shadow-lg"
            />
          </div>

          <div>
            <div className="space-y-4">
              {conversions.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-purple-50 transition"
                >
                  <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{item.from}</p>
                    <p className="text-sm text-gray-600">{item.to}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-purple-100 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Mid-market rate guaranteed</p>
              <p className="text-2xl font-bold text-purple-600">Global accounts in minutes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
