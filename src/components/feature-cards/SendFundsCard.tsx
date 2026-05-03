import { Zap, ChevronDown, Info } from "lucide-react"
import { Switch } from "@/components/ui/switch"
import { ArrowUpRight } from "lucide-react"

export function SendFundsCard() {
  return (
    <div className="rounded-2xl bg-white border border-orange-100 p-6 flex flex-col shadow-sm">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 border border-orange-200">
        <Zap className="h-5 w-5 text-orange-500" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-gray-900">Быстрое пополнение</h3>
      <p className="mb-4 text-sm text-gray-500">Пополняйте карту из России за минуты — переводом, картой или через СБП</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-orange-500 hover:text-orange-600 transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-orange-50 border border-orange-100 p-4">
        <div className="flex items-center justify-between rounded-lg bg-white border border-orange-200 px-3 py-2.5">
          <div className="flex items-center gap-3">
            <span className="text-lg">🇺🇸</span>
            <div>
              <p className="text-sm font-medium text-gray-900">Баланс карты (USD)</p>
              <p className="text-xs text-gray-400">Доступно: $372,00</p>
            </div>
          </div>
          <ChevronDown className="h-4 w-4 text-gray-400" />
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-500">
            Сумма пополнения <Info className="h-3 w-3" />
          </label>
          <div className="flex items-center rounded-lg bg-white border border-orange-200 px-3 py-2.5">
            <span className="text-gray-400 mr-2">₽</span>
            <input
              type="text"
              placeholder="0,00"
              className="flex-1 bg-transparent text-gray-900 placeholder-gray-300 outline-none text-sm"
            />
          </div>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-500">
            Комментарий <span className="text-orange-500">*</span> (Необязательно)
          </label>
          <div className="relative">
            <textarea
              placeholder="Например: пополнение для поездки..."
              className="w-full rounded-lg bg-white border border-orange-200 px-3 py-2.5 text-sm text-gray-900 placeholder-gray-300 outline-none resize-none h-16"
            />
            <span className="absolute bottom-2 right-2 text-xs text-gray-300">0/200</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Switch className="data-[state=checked]:bg-orange-500" />
          <span className="text-sm text-gray-500">Автопополнение при низком балансе</span>
        </div>
      </div>
    </div>
  )
}
