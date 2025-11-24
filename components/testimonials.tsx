import Image from "next/image"
import { Star } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Entrepreneur",
      content:
        "The best app I've used for international payments. It's completely transformed the way my family sends money.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Freelancer",
      content: "No hidden fees, no surprises. The platform is so easy to use and transfers are super fast.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Business Owner",
      content: "I use TransferFlow for all my international payments. The rates are always fair and transparent.",
      rating: 5,
    },
  ]

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-4">
          What Our Customers are Saying
        </h2>
        <p className="text-center text-gray-600 mb-16">Join thousands of happy customers using TransferFlow</p>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-purple-50 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-purple-600 text-purple-600" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 text-lg leading-relaxed">{testimonial.content}</p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-600 rounded-full flex-shrink-0">
                  <Image
                    src="/avatar-profile.jpg"
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
