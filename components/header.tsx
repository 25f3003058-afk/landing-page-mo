"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Blog", href: "/blog" },
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/faq" },
    { label: "About Us", href: "/about" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-6">
      <div className="w-full px-3 sm:px-6 lg:px-8 flex justify-center">
        <nav className="bg-black rounded-full px-4 sm:px-6 md:px-8 py-3 sm:py-4 flex items-center justify-between shadow-2xl w-full sm:w-auto max-w-full sm:max-w-fit">
          {/* Logo on the left */}
          <Link
            href="/"
            className="flex-shrink-0 hover:opacity-80 transition-opacity duration-300 mr-2 sm:mr-6 md:mr-8"
          >
            <Image
              src="/spllit-logo.png"
              alt="SPLLIT Logo"
              width={32}
              height={32}
              className="h-8 w-auto sm:h-10 sm:w-auto"
            />
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white hover:text-purple-400 font-medium text-xs sm:text-sm transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* Join Community Button - Right */}
          <a
            href="https://chat.whatsapp.com/demo-group"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-white hover:bg-purple-100 text-black hover:text-purple-600 px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-semibold text-xs lg:text-sm transition-all duration-300 transform hover:scale-105 ml-4 lg:ml-8 whitespace-nowrap"
          >
            Join Community
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-purple-400 transition ml-2 flex-shrink-0"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 sm:mt-4 mx-3 sm:mx-6 bg-black rounded-3xl px-4 sm:px-6 py-4 sm:py-6 animate-slide-in-right shadow-2xl">
          <div className="flex flex-col gap-3 sm:gap-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white hover:text-purple-400 font-medium text-sm transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <a
              href="https://chat.whatsapp.com/demo-group"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-purple-100 text-black hover:text-purple-600 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-semibold text-sm text-center transition-all duration-300 transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Join Community
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
