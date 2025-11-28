"use client"

import { Facebook, Twitter, Linkedin, Instagram, MessageCircle, Mail, Phone } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black text-slate-300 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 opacity-5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Footer Content - Made responsive with single column on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 pb-12 border-b border-slate-700/50">
          {/* Left Section - Logo and Description */}
          <div className="flex flex-col justify-start">
            <div className="animate-fade-in-up">
              <div className="mb-4 w-24 sm:w-32 h-auto">
                <Image
                  src="/spllit-logo.png"
                  alt="SPLLIT Logo"
                  width={120}
                  height={120}
                  className="w-full h-auto object-contain"
                />
              </div>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-md">
                Making international payments simple, secure, and affordable for everyone globally.
              </p>
              <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white transition transform hover:translate-x-1 duration-300">
                  <Mail size={14} className="flex-shrink-0" />
                  <a href="mailto:support@spllit.app" className="truncate">
                    support@spllit.app
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 hover:text-white transition transform hover:translate-x-1 duration-300">
                  <Phone size={14} className="flex-shrink-0" />
                  <a href="tel:9363793714">+91 9363793714</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Quick Links Grid - Made responsive for mobile */}
          <div className="grid grid-cols-2 gap-6 sm:gap-8 sm:col-span-1 lg:col-span-2">
            {/* Product Links */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-white font-bold mb-3 sm:mb-4 font-poppins text-sm sm:text-base">Product</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/pricing"
                    className="text-slate-400 hover:text-purple-400 transition duration-300 hover:translate-x-1 inline-block transform"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-slate-400 hover:text-purple-400 transition duration-300 hover:translate-x-1 inline-block transform"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-purple-400 transition duration-300 hover:translate-x-1 inline-block transform"
                  >
                    Features
                  </a>
                </li>
               
              </ul>
            </div>

            {/* Company Links */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-white font-bold mb-3 sm:mb-4 font-poppins text-sm sm:text-base">Company</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-slate-400 hover:text-purple-400 transition duration-300 hover:translate-x-1 inline-block transform"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-slate-400 hover:text-purple-400 transition duration-300 hover:translate-x-1 inline-block transform"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-slate-400 hover:text-purple-400 transition duration-300 hover:translate-x-1 inline-block transform"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-purple-400 transition duration-300 hover:translate-x-1 inline-block transform"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Links */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-white font-bold mb-3 sm:mb-4 font-poppins text-sm sm:text-base">Legal</h3>
              <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-slate-400 hover:text-purple-400 transition duration-300 hover:translate-x-1 inline-block transform"
                  >
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-of-service"
                    className="text-slate-400 hover:text-purple-400 transition duration-300 hover:translate-x-1 inline-block transform"
                  >
                    Terms
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-slate-400 hover:text-purple-400 transition duration-300 hover:translate-x-1 inline-block transform"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support & Social Links */}
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <h3 className="text-white font-bold mb-3 sm:mb-4 font-poppins text-sm sm:text-base">Connect</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                <a
                  href="#"
                  className="p-2 bg-slate-800 hover:bg-blue-600 rounded-lg transition duration-300 transform hover:scale-110 hover:-translate-y-1"
                  title="Facebook"
                >
                  <Facebook size={14} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-800 hover:bg-blue-400 rounded-lg transition duration-300 transform hover:scale-110 hover:-translate-y-1"
                  title="Twitter"
                >
                  <Twitter size={14} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-slate-800 hover:bg-blue-700 rounded-lg transition duration-300 transform hover:scale-110 hover:-translate-y-1"
                  title="LinkedIn"
                >
                  <Linkedin size={14} />
                </a>
                <a
                  href="https://instagram.com"
                  className="p-2 bg-slate-800 hover:bg-pink-600 rounded-lg transition duration-300 transform hover:scale-110 hover:-translate-y-1"
                  title="Instagram"
                >
                  <Instagram size={14} />
                </a>
                <a
                  href="https://wa.me/919363793714"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800 hover:bg-green-600 rounded-lg transition duration-300 transform hover:scale-110 hover:-translate-y-1"
                  title="WhatsApp"
                >
                  <MessageCircle size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 text-center">
          <p className="text-xs sm:text-sm text-slate-400" >&copy; 2025 SPLLIT. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
