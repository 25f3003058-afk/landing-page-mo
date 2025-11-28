"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Mail, Linkedin, Twitter, Github } from "lucide-react"
import { useState } from "react"

const teamMembers = [
  {
    name: "Ankit Raj Choudhari",
    role: "Founder & CEO",
    bio: "",
    image: "",
    social: {
      email: "ankit@spllit.app",
      twitter: "#",
      
    },
  },
  {
    name: "Raunak Ratan",
    role: "CTO & Co-Founder",
    bio: "",
    image: "",
    social: {
      email: "co-founder@spllit.app",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Saurav Kumar",
    role: "Head of Operations",
    bio: "",
    image: "",
    social: {
      email: "sauravkumar@spllit.com",
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
]

export default function AboutPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-20 sm:pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-transparent -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-8xl font-bold mb-4 sm:mb-6 font-poppins bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              About SPLLIT
            </h1>
            <p className="text-base sm:text-lg lg:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              At Spllit, we believe travel should be efficient and affordable. We’re creating a platform that connects everyday travelers to share rides and reduce expenses.
            </p>
          </div>
        </div>
      </section>

      {/* About Description - Made responsive with stacked layout on mobile */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 font-poppins text-white">Who We Are</h2>
            <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-slate-300 leading-relaxed">
              <p>
               Spllit was founded in 2025 with a bold vision: to reinvent the way people commute. We noticed that thousands of individuals travel the same route every day — yet they travel alone, spending more money, wasting time, and adding to traffic and pollution. We knew there had to be a smarter way — so we built one.
              </p>
              <p>
                Spllit connects people who share the same route, time, and destination, enabling them to travel together, Spllit the cost, and enjoy a more efficient daily journey. With trusted user-matching, secure deposits, and a community-driven experience, we’re making commuting simpler, safer, and more affordable.
              </p>
              <p>
               We believe technology should bring people closer and improve everyday life. Every step we take, every feature we create, is driven by our mission to make smarter travel accessible to everyone — while saving money and helping the planet.
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30" />
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8 rounded-3xl border border-purple-500/30">
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { number: "0+", label: "Countries" },
                    { number: "0k+", label: "Transactions" },
                    { number: "0%", label: "Hidden Fees" },
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        {stat.number}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-400 mt-2">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-purple-600/10 via-pink-600/10 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 font-poppins bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Core Team
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-2xl mx-auto">
             Starting with shared commuting, we’re on a path to help people Spllit and save across every shared experience — travel, trips, bills, and beyond.
            </p>
          </div>

          {/* Core Team Cards - Made responsive with single column on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group relative animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.2}s` }}
                onMouseEnter={() => setHoveredCard(idx)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 transition-all duration-300 ${
                    hoveredCard === idx ? "opacity-50" : ""
                  }`}
                />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 sm:p-8 border border-purple-500/30 h-full flex flex-col transition-all duration-300 transform hover:scale-105 hover:-translate-y-2">
                  {/* Profile Image */}
                  <div className="mb-4 sm:mb-6 overflow-hidden rounded-xl">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-40 sm:h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2 font-poppins">{member.name}</h3>
                  <p className="text-purple-400 font-semibold mb-2 sm:mb-3 text-sm sm:text-base">{member.role}</p>
                  <p className="text-slate-300 text-xs sm:text-sm mb-4 sm:mb-6 flex-1 leading-relaxed">{member.bio}</p>

                  {/* Social Links - Hidden by default, shown on hover */}
                  <div
                    className={`flex gap-2 sm:gap-3 transition-all duration-300 ${
                      hoveredCard === idx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
                    }`}
                  >
                    <a
                      href={`mailto:${member.social.email}`}
                      className="p-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all transform hover:scale-110"
                      title="Email"
                    >
                      <Mail size={16} />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all transform hover:scale-110"
                      title="LinkedIn"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="p-2 bg-blue-400 hover:bg-blue-500 rounded-lg transition-all transform hover:scale-110"
                      title="Twitter"
                    >
                      <Twitter size={16} />
                    </a>
                    <a
                      href={member.social.github}
                      className="p-2 bg-gray-600 hover:bg-gray-700 rounded-lg transition-all transform hover:scale-110"
                      title="GitHub"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-poppins text-white">
            Join Us on This Journey
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-6 sm:mb-8">
           We welcome innovators who believe in smarter travel and a more connected world.
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-lg transition-all transform hover:scale-105 hover:shadow-2xl">
            Explore Careers
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}
