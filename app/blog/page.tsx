"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"
import { useState } from "react"

const blogPosts = [
  {
    id: 1,
    title: "Unlock Smarter Sharing — From Routes to Daily Costs",
    excerpt:
      "Learn how to find matched routes, connect with commuters, and Spllit costs safely — a simple step-by-step guide.",
    date: "coming soon!!",
    author: "Spllit Team",
    category: "Tutorial",
    image: "/Tutorial.png",
    content:
      "With Spllit, you’re just a tap away from sharing rides, saving money, and a better commuting experience.",
  },
  {
    id: 2,
    title: "Understanding How Shared Travel Saves You Money",
    excerpt: "A complete guide to how Splitting your commute saves money — and how to get the most out of shared travel.",
    date: "coming soon!!",
    author: "Spllit Team",
    category: "Guide",
    image: "/currency-exchange-chart.jpg",
    content: "Daily travel costs can add up fast. Here’s how Splitting your route can help you save more on every trip…",
  },
  {
    id: 3,
    title: "Safety First: How Spllit Protects Shared Travel",
    excerpt: "Your security matters. Learn how Spllit ensures trusted route-matching, secure payments, and safer shared journeys.",
    date: "coming soon!!",
    author: "Spllit Team",
    category: "Saftey",
    image: "/cybersecurity-protection.jpg",
    content:
      "See how Spllit uses verification, secure deposits, and trusted matching to create a reliable and safe shared travel experience for everyone...",
  },
  {
    id: 4,
    title: "How to Use Spllit for Group Travel & Daily Commutes",
    excerpt: "Easily organize shared routes, Spllit expenses, and keep track of all your daily travel savings in one place.",
    date: "coming soon!!",
    author: "Spllit Team",
    category: "Guides",
    image: "/business-payment-solution.jpg",
    content:
      "Spllit offers powerful features to make shared travel smarter and stress-free. Learn how to match routes, invite commuters, and Spllit the daily expenses effortlessly...",
  },
  {
    id: 5,
    title: "Spllit vs. Solo Travel: What Makes Us Better?",
    excerpt: "See how Spllit helps you reduce costs, meet new people, and enjoy a more efficient way of commuting.",
    date: "coming soon!!",
    author: "Spllit Team",
    category: "Comparison",
    image: "/Comparison.png",
    content: "Solo travel often means higher expenses and longer journeys. Discover why Spllit’s shared travel solution is smarter, safer, and more affordable...",
  },
  {
    id: 6,
    title: "Tips for Reducing Your Daily Travel Costs",
    excerpt: "Simple strategies to save more every day — including shared routes, smart timing, and Spllitting the costs.",
    date: "coming soon!!",
    author: "Spllit Team",
    category: "Tips",
    image: "/money-saving-strategy.jpg",
    content: "Commuting costs can add up quickly. Here are our top tips to cut spending and make smarter travel decisions...",
  },
  {
    id: 7,
    title: "Mobile App Features You Should Know About",
    excerpt: "Explore powerful tools designed for smarter commuting, secure payments, and trusted route matching.",
    date: "coming soon!!",
    author: "Spllit Team",
    category: "Features",
    image: "/Features.png",
    content:
      "From route matching to safe deposits and secure trip confirmations — see how the Spllit app is built to support every commuter...",
  },
  {
    id: 8,
    title: "Top 10 Ways to Save Money While Traveling with Spllit",
    excerpt:
      "Travel smarter together — discover how shared expenses, group budgeting, and seamless payments help you save more on every trip.",
    date: "coming soon!!",
    author: "Spllit Team",
    category: "Travel",
    image: "/ten.png",
    content: "From split accommodations to reduced transaction fees, Spllit offers smarter tools that make global adventures more affordable. Here are the top ways travelers are maximizing savings while exploring the world together...",
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
