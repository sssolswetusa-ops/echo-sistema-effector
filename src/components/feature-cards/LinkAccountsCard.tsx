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
    <div className="rounded-2xl bg-white border border-orange-100 p-6 flex flex-col shadow-sm">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 border border-orange-200">
        <Globe className="h-5 w-5 text-orange-500" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-gray-900">Карты для 50+ стран</h3>
      <p className="mb-4 text-sm text-gray-500">Выбирайте страну выпуска карты — Турция, ОАЭ, Таиланд, Грузия и другие направления</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-orange-500 hover:text-orange-600 transition-colors">
        Все страны <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-2 rounded-xl bg-orange-50 border border-orange-100 p-3">
        {countries.map((country, index) => (
          <div key={index} className="flex items-center justify-between rounded-lg bg-white px-3 py-2 border border-orange-100">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{country.flag}</span>
              <div>
                <p className="text-sm font-medium text-gray-900">{country.name}</p>
                <p className="text-xs text-gray-400">{country.detail}</p>
              </div>
            </div>
            <span className="text-xs text-gray-400">{country.code}</span>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full justify-center text-gray-500 hover:text-orange-600 hover:bg-orange-100 mt-2"
        >
          <Plus className="mr-2 h-4 w-4" /> Показать все направления
        </Button>
      </div>
    </div>
  )
}
