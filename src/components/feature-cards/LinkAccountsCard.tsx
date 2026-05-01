import { Globe, ArrowUpRight, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const countries = [
  { name: "Турция", flag: "🇹🇷", detail: "Visa / Mastercard", code: "TRY" },
  { name: "ОАЭ", flag: "🇦🇪", detail: "Visa / Mastercard", code: "AED" },
  { name: "Таиланд", flag: "🇹🇭", detail: "Visa / UnionPay", code: "THB" },
  { name: "Грузия", flag: "🇬🇪", detail: "Visa / Mastercard", code: "GEL" },
]

export function LinkAccountsCard() {
  return (
    <div className="rounded-2xl bg-[#141414] border border-[#262626] p-6 flex flex-col">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f] border border-[#2a2a2a]">
        <Globe className="h-5 w-5 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">Карты для 50+ стран</h3>
      <p className="mb-4 text-sm text-gray-400">Выбирайте страну выпуска карты — Турция, ОАЭ, Таиланд, Грузия и другие направления</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors">
        Все страны <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-[#1a1a1a] border border-[#262626] p-3">
        {countries.map((country, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-[#0f0f0f] px-3 py-2">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{country.flag}</span>
              <div>
                <p className="text-sm font-medium text-white">{country.name}</p>
                <p className="text-xs text-gray-500">{country.detail}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">{country.code}</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-white hover:bg-[#1f1f1f] mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Показать все направления
        </Button>
      </div>
    </div>
  )
}
