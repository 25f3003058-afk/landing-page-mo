"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"
import { useState } from "react"

const blogPosts = [
  {
    id: 1,
    title: "Getting Started with International Payments",
    excerpt:
      "Learn how to easily send and receive money across borders with our secure platform. Discover the step-by-step process.",
    date: "Dec 20, 2024",
    author: "Ankit Raj",
    category: "Tutorial",
    image: "/international-payments-guide.jpg",
    content:
      "International payments have never been easier. With SPLLIT, you can send money to over 150 countries in minutes...",
  },
  {
    id: 2,
    title: "Understanding Currency Exchange Rates",
    excerpt: "A comprehensive guide to how currency exchange works and how to get the best rates for your transfers.",
    date: "Dec 18, 2024",
    author: "Sarah Johnson",
    category: "Guide",
    image: "/currency-exchange-chart.jpg",
    content: "Currency exchange rates fluctuate constantly. Here's what you need to know to get the best deals...",
  },
  {
    id: 3,
    title: "Security Best Practices for Online Transfers",
    excerpt: "Keep your transactions safe with our expert security recommendations and industry best practices.",
    date: "Dec 15, 2024",
    author: "Mike Chen",
    category: "Security",
    image: "/cybersecurity-protection.jpg",
    content:
      "Security is our top priority. Learn about encryption, two-factor authentication, and other security measures...",
  },
  {
    id: 4,
    title: "How to Use SPLLIT for Business Payments",
    excerpt: "Streamline your business payments and track expenses effortlessly with our powerful tools.",
    date: "Dec 12, 2024",
    author: "Emily Rodriguez",
    category: "Business",
    image: "/business-payment-solution.jpg",
    content:
      "For businesses, SPLLIT offers unique features designed for scalability and efficiency. Set up business accounts...",
  },
  {
    id: 5,
    title: "SPLLIT vs Traditional Banks: A Comparison",
    excerpt: "Discover why modern fintech solutions outperform traditional banking in speed and cost efficiency.",
    date: "Dec 10, 2024",
    author: "James Wilson",
    category: "Comparison",
    image: "/fintech-vs-banks.jpg",
    content: "Traditional banks charge higher fees and take longer to process transfers. Here's how SPLLIT compares...",
  },
  {
    id: 6,
    title: "Tips for Reducing International Transfer Fees",
    excerpt: "Smart strategies to minimize costs and maximize your money transfer efficiency and savings.",
    date: "Dec 8, 2024",
    author: "Lisa Kumar",
    category: "Tips",
    image: "/money-saving-strategy.jpg",
    content: "Transfer fees can add up quickly. Here are our top tips for keeping costs down while sending money...",
  },
  {
    id: 7,
    title: "Mobile App Features You Should Know About",
    excerpt: "Explore all the powerful features available in our mobile application for seamless transactions.",
    date: "Dec 5, 2024",
    author: "David Park",
    category: "Features",
    image: "/mobile-app-features.jpg",
    content:
      "Our mobile app is packed with features designed for convenience. From quick transfers to expense tracking...",
  },
  {
    id: 8,
    title: "SPLLIT Success Stories: Customer Testimonials",
    excerpt:
      "Read how businesses and individuals are transforming their finances with SPLLIT and achieving their goals.",
    date: "Dec 1, 2024",
    author: "Priya Singh",
    category: "Success",
    image: "/customer-success-stories.jpg",
    content: "Our customers have saved thousands of dollars using SPLLIT. Read their inspiring success stories...",
  },
]

const categories = ["All", ...new Set(blogPosts.map((post) => post.category))]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedPost, setSelectedPost] = useState<(typeof blogPosts)[0] | null>(null)

  const filteredPosts =
    selectedCategory === "All" ? blogPosts : blogPosts.filter((post) => post.category === selectedCategory)

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-purple-50">
      <Header />
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4 text-balance font-poppins">
              Blog & Insights
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Stay updated with the latest tips, guides, and success stories from the SPLLIT community
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 transform ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg scale-105"
                    : "bg-white text-gray-700 hover:bg-purple-50 border border-gray-200 hover:border-purple-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="group cursor-pointer animate-fade-in-up"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
                onClick={() => setSelectedPost(post)}
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 h-full flex flex-col border border-gray-100">
                  {/* Image */}
                  <div className="relative overflow-hidden h-56 bg-gradient-to-br from-purple-100 to-pink-100">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="inline-block bg-purple-100 text-purple-700 text-xs font-bold px-3 py-1 rounded-full mb-3 w-fit">
                      {post.category}
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors font-poppins">
                      {post.title}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-1 leading-relaxed">{post.excerpt}</p>

                    <div className="flex flex-col gap-2 text-xs text-gray-500 border-t border-gray-100 pt-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-purple-600" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <User size={14} className="text-purple-600" />
                        {post.author}
                      </div>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <div className="px-6 pb-4">
                    <button className="w-full flex items-center justify-between bg-gradient-to-r from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 text-purple-700 font-semibold px-4 py-2.5 rounded-lg transition-all transform hover:scale-105">
                      Read Article
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
