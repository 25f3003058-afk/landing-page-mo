"use client"

import { X, Mail, Phone, AlertCircle } from "lucide-react"
import { useState, useEffect } from "react"

export default function SupportModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleSupportClick = () => {
      setIsOpen(true)
    }

    const supportButtons = document.querySelectorAll(".support-btn")
    supportButtons.forEach((btn) => {
      btn.addEventListener("click", handleSupportClick)
    })

    return () => {
      supportButtons.forEach((btn) => {
        btn.removeEventListener("click", handleSupportClick)
      })
    }
  }, [])

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in-up">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 px-6 py-8 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Need Help?</h2>
                <p className="text-purple-100 text-sm mt-1">We're here to support you</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 p-2 rounded-lg transition duration-300"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                <div className="flex gap-3">
                  <AlertCircle className="text-purple-600 flex-shrink-0 mt-0.5" size={20} />
                  <p className="text-sm text-slate-700">
                    Contact us anytime. Our team typically responds within 2 hours.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Mail className="text-blue-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Email</p>
                  <a
                    href="mailto:ankitrajchoudhari@gmail.com"
                    className="text-purple-600 hover:text-purple-700 font-semibold text-sm mt-1 block"
                  >
                    ankitrajchoudhari@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-100 rounded-lg">
                  <Phone className="text-green-600" size={20} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Phone</p>
                  <a
                    href="tel:9363793714"
                    className="text-purple-600 hover:text-purple-700 font-semibold text-sm mt-1 block"
                  >
                    +91 9363793714
                  </a>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <button
                  onClick={() => (window.location.href = "mailto:ankitrajchoudhari@gmail.com")}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 rounded-lg font-semibold transition duration-300 hover:shadow-lg"
                >
                  Send Email
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-lg font-semibold transition duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
