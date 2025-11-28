import Header from "@/components/header"
import Hero from "@/components/hero"
import PaymentHassles from "@/components/payment-hassles"
import CurrencyConversion from "@/components/currency-conversion"
import ZeroFees from "@/components/zero-fees"
import MoneyTransfers from "@/components/money-transfers"
import SupportModal from "@/components/support-modal"
import Footer from "@/components/footer"
import FeatureCards from "@/components/feature-cards"

export const metadata = {
  title: "SPLLIT",
  description:
    "Say goodbye to expensive solo travel — Spllit helps you connect, ride together, and keep more in your pocket.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <SupportModal />
      <Hero />
      <PaymentHassles />
      <CurrencyConversion />
      <ZeroFees />
      <MoneyTransfers />
      <FeatureCards />
      <Footer />
    </main>
  )
}
