import { TrendingUp, AlertCircle, Shield, Users } from "lucide-react"
import Image from "next/image"

export default function MoneyTransfers() {
  const problems = [
    { icon: TrendingUp, text: "Rising fuel prices" },
    { icon: AlertCircle, text: "Heavy traffic congestion" },
    { icon: TrendingUp, text: "High commute expenses" },
    { icon: Shield, text: "Safety concerns for solo travelers" },
    { icon: Users, text: "Lack of trusted shared mobility for students & employees" },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4 text-balance">
          Why Spllit Exists
        </h2>
        <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          A Growing Urban Problem That Needs a Simple Solution
        </p>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="space-y-4">
              <p className="text-gray-700 font-semibold text-lg mb-6">India's metro cities face:</p>
              {problems.map((problem, idx) => {
                const Icon = problem.icon
                return (
                  <div key={idx} className="flex items-center gap-4">
                    <Icon className="w-6 h-6 text-purple-600 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{problem.text}</span>
                  </div>
                )
              })}
            </div>

            <div className="mt-8 p-6 bg-purple-600 rounded-lg text-white">
              <p className="text-lg font-semibold leading-relaxed">Spllit solves all five — with one platform.</p>
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
