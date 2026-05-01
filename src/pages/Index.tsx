import { useState } from "react"
import { Header } from "@/components/Header"
import { HeroSection } from "@/components/HeroSection"
import { PartnersSection } from "@/components/PartnersSection"
import { FeaturesSection } from "@/components/FeaturesSection"
import { LeadModal } from "@/components/LeadModal"

export default function Index() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Header onGetCard={() => setModalOpen(true)} />
      <HeroSection onGetCard={() => setModalOpen(true)} />
      <PartnersSection />
      <FeaturesSection />
      <footer className="py-8 text-center text-sm text-gray-400">
        От оформления до первой покупки за рубежом —{" "}
        <span className="font-medium text-white">всё быстро и без лишних сложностей.</span>
      </footer>
      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </main>
  )
}