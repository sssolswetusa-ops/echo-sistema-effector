import { Sparkles, Globe, Shield, CreditCard, Banknote, Zap, Landmark } from "lucide-react"

const partners = [
  { name: "Visa", icon: CreditCard },
  { name: "Mastercard", icon: CreditCard },
  { name: "UnionPay", icon: Globe },
  { name: "SWIFT", icon: Landmark },
  { name: "3D Secure", icon: Shield },
  { name: "Мгновенно", icon: Zap },
  { name: "50+ стран", icon: Sparkles },
]

export function PartnersSection() {
  return (
    <section className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-4 py-8">
      {partners.map((partner) => (
        <div key={partner.name} className="flex items-center gap-2 text-gray-500">
          <partner.icon className="h-4 w-4" />
          <span className="text-sm font-medium">{partner.name}™</span>
        </div>
      ))}
    </section>
  )
}