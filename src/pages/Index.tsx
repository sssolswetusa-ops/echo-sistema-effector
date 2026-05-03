import { useState } from "react"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { HowItWorksSection } from "@/components/HowItWorksSection"
import { PricingSection } from "@/components/PricingSection"
import { LeadModal } from "@/components/LeadModal"
import { ContactsSection } from "@/components/ContactsSection"
import Icon from "@/components/ui/icon"

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header onGetCard={() => setModalOpen(true)} />
      <HeroSection onGetCard={() => setModalOpen(true)} />
      <PartnersSection />
      <FeaturesSection />
      <HowItWorksSection onGetCard={() => setModalOpen(true)} />
      <PricingSection onGetCard={() => setModalOpen(true)} />
      <ContactsSection />
      <footer className="py-8 text-center text-sm text-gray-400">
        От оформления до первой покупки за рубежом —{" "}
        <span className="font-medium text-white">всё быстро и без лишних сложностей.</span>
      </footer>
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <a
        href="https://t.me/ustinov_zagran_karty"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#229ED9] px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-[#1a8bbf] transition-all hover:scale-105 active:scale-95"
      >
        <Icon name="Send" size={18} />
        <span className="hidden sm:inline">Написать в Telegram</span>
      </a>
    </main>
  )
}