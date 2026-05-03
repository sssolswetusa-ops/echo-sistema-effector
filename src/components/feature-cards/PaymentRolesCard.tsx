import { Shield, ArrowUpRight, CreditCard, ChevronDown, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PaymentRolesCard() {
  return (
    <div className="rounded-2xl bg-white border border-orange-100 p-6 flex flex-col shadow-sm">
      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 border border-orange-200">
        <Shield className="h-5 w-5 text-orange-500" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-gray-900">Лимиты и безопасность</h3>
      <p className="mb-4 text-sm text-gray-500">Устанавливайте лимиты трат, блокируйте карту в один клик и получайте уведомления по каждой операции</p>

      <a href="#" className="mb-6 inline-flex items-center text-sm text-orange-500 hover:text-orange-600 transition-colors">
        Подробнее <ArrowUpRight className="ml-1 h-4 w-4" />
      </a>

      <div className="mt-auto space-y-4 rounded-xl bg-orange-50 border border-orange-100 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 border border-orange-200">
              <CreditCard className="h-5 w-5 text-orange-500" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Карта GlobalCard</p>
              <p className="text-xs text-gray-400">•••• •••• •••• 4821</p>
            </div>
          </div>
          <button className="text-sm text-orange-500 hover:text-orange-600">Управление</button>
        </div>

        <div>
          <label className="mb-2 flex items-center gap-1 text-xs text-gray-500">
            Месячный лимит <Info className="h-3 w-3" />
          </label>
          <div className="flex items-center justify-between rounded-lg bg-white border border-orange-200 px-3 py-2.5">
            <span className="text-sm text-gray-900">500 $ / месяц</span>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </div>
          <p className="mt-1 text-xs text-gray-400">Использовано: 128 $ из 500 $</p>
        </div>

        <div className="border-t border-dashed border-orange-200 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-900">Статус карты</p>
              <p className="text-xs text-gray-400">Активна · Принимается по всему миру</p>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-emerald-100 text-emerald-600">Активна</span>
          </div>
        </div>

        <Button className="w-full bg-orange-100 text-orange-700 hover:bg-orange-200 border-0">Изменить настройки</Button>
      </div>
    </div>
  )
}
