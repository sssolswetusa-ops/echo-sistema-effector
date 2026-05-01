import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const plans = [
  {
    name: "Базовый",
    emoji: "🌍",
    price: "2 990 ₽",
    period: "выпуск",
    description: "Для разовых поездок и путешествий",
    maintenance: "0 ₽ / месяц",
    features: [
      "1 виртуальная карта",
      "Оплата онлайн и офлайн",
      "Пополнение из России",
      "Лимит 500 $ в месяц",
      "Поддержка в Telegram",
    ],
    cta: "Оформить",
    highlighted: false,
  },
  {
    name: "Стандарт",
    emoji: "✈️",
    price: "4 990 ₽",
    period: "выпуск",
    description: "Для частых поездок и фрилансеров",
    maintenance: "290 ₽ / месяц",
    features: [
      "1 физическая карта",
      "Оплата в 50+ странах",
      "Снятие наличных за рубежом",
      "Лимит 2 000 $ в месяц",
      "Приоритетная поддержка",
    ],
    cta: "Оформить",
    highlighted: true,
  },
  {
    name: "Бизнес",
    emoji: "💼",
    price: "9 990 ₽",
    period: "выпуск",
    description: "Для бизнеса и корпоративных расходов",
    maintenance: "590 ₽ / месяц",
    features: [
      "До 5 карт на команду",
      "Безлимитные операции",
      "Снятие наличных без комиссии",
      "Лимит от 10 000 $ в месяц",
      "Персональный менеджер",
    ],
    cta: "Обсудить условия",
    highlighted: false,
  },
]

interface PricingSectionProps {
  onGetCard?: () => void
}

export function PricingSection({ onGetCard }: PricingSectionProps) {
  return (
    <section className="px-4 md:px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Тарифы</h2>
          <p className="text-gray-400 max-w-md mx-auto">Выберите подходящий план — оформление займёт не больше дня</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-6 flex flex-col ${
                plan.highlighted
                  ? "bg-violet-600/10 border-violet-500"
                  : "bg-[#141414] border-[#262626]"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-violet-600 px-3 py-1 text-xs font-medium text-white">
                    Популярный
                  </span>
                </div>
              )}

              <div className="mb-5">
                <span className="text-3xl">{plan.emoji}</span>
              </div>

              <h3 className="text-lg font-semibold text-white mb-1">{plan.name}</h3>
              <p className="text-sm text-gray-400 mb-5">{plan.description}</p>

              <div className="mb-1">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-500 text-sm ml-1">/ {plan.period}</span>
              </div>
              <p className="text-xs text-gray-500 mb-6">Обслуживание: {plan.maintenance}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                    <Icon name="Check" size={15} className="text-violet-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                onClick={onGetCard}
                className={`w-full rounded-full font-medium ${
                  plan.highlighted
                    ? "bg-violet-600 hover:bg-violet-700 text-white"
                    : "bg-[#252525] text-gray-300 hover:bg-[#2e2e2e] hover:text-white"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-gray-600 mt-6">
          Все тарифы включают защиту 3D Secure · Стоимость указана ориентировочно, уточняйте у менеджера
        </p>
      </div>
    </section>
  )
}
