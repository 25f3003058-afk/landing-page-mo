import { CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function MoneyTransfers() {
  const features = [
    "Send money in seconds",
    "Receive in local currencies",
    "Track transfers in real-time",
    "Schedule recurring transfers",
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-16 text-balance">
          Experience Seamless
          <br />
          <span className="text-purple-600">Money Transfers</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="space-y-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{feature}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">2.5M+</p>
                <p className="text-sm text-gray-600">Active Users</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <p className="text-2xl font-bold text-purple-600">$50B+</p>
                <p className="text-sm text-gray-600">Transferred</p>
              </div>
            </div>
          </div>

          <div className="h-96 sm:h-[500px]">
            <Image
              src="/mobile-seamless-transfers-interface.jpg"
              alt="Money transfers"
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
