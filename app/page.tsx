import Header from "@/components/header"
import Hero from "@/components/hero"
import PaymentHassles from "@/components/payment-hassles"
import CurrencyConversion from "@/components/currency-conversion"
import ZeroFees from "@/components/zero-fees"
import MoneyTransfers from "@/components/money-transfers"
import SupportModal from "@/components/support-modal"
import Footer from "@/components/footer"

export const metadata = {
  title: "SPLLIT - Simplify International Transactions",
  description:
    "Make international payments a breeze with one platform. Zero hidden fees, effortless currency conversion, and seamless money transfers.",
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
      <Footer />
    </main>
  )
}
