import { useState } from "react"
import Icon from "@/components/ui/icon"

const reviews = [
  {
    name: "Алексей М.",
    city: "Москва",
    country: "🇰🇿 Казахстан",
    rating: 5,
    text: "Оформил карту Kaspi за 4 дня не выезжая из Москвы. Теперь спокойно оплачиваю подписки и перевожу деньги за рубеж. Сервис работает чётко, менеджер всегда на связи.",
    date: "Март 2024"
  },
  {
    name: "Наталья В.",
    city: "Санкт-Петербург",
    country: "🇦🇲 Армения",
    rating: 5,
    text: "Долго не решалась, думала будет много бумаг и поездок. Оказалось всё онлайн. Карту Evocabank получила курьером через неделю. Уже год пользуюсь — никаких проблем.",
    date: "Февраль 2024"
  },
  {
    name: "Дмитрий К.",
    city: "Екатеринбург",
    country: "🇬🇪 Грузия",
    rating: 5,
    text: "Нужна была карта для работы с иностранными заказчиками. TBC Bank подошёл идеально. Оформили за 6 дней, помогли с документами. Деньги от клиентов приходят без проблем.",
    date: "Январь 2024"
  },
  {
    name: "Ирина С.",
    city: "Новосибирск",
    country: "🇹🇷 Турция",
    rating: 5,
    text: "Часто езжу в Турцию и Европу. Карта турецкого банка — лучшее решение. Принимают везде, конвертация по выгодному курсу. Спасибо за помощь с оформлением!",
    date: "Апрель 2024"
  },
  {
    name: "Сергей П.",
    city: "Казань",
    country: "🇦🇪 ОАЭ",
    rating: 5,
    text: "Открыл счёт в Emirates NBD для бизнеса. Команда сопроводила весь процесс, помогла с переводом документов. Карта пришла за 10 дней. Рекомендую для серьёзных операций.",
    date: "Май 2024"
  },
  {
    name: "Анна Р.",
    city: "Краснодар",
    country: "🇰🇿 Казахстан",
    rating: 5,
    text: "Оформила карту Freedom Finance для оплаты зарубежных сервисов. Всё прошло гладко, без нервов. Менеджер объяснил как пополнять карту из России. Очень довольна!",
    date: "Март 2024"
  }
]

export function ReviewsSection() {
  const [current, setCurrent] = useState(0)
  const perPage = 3

  const visible = reviews.slice(current * perPage, current * perPage + perPage)
  const totalPages = Math.ceil(reviews.length / perPage)

  return (
    <section id="reviews" className="py-20 px-8 bg-orange-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
            Отзывы клиентов
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Нам доверяют тысячи клиентов
          </h2>
          <p className="mt-4 text-gray-500 text-lg">
            Реальные отзывы людей, которые уже получили карты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visible.map((review, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-orange-100">
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Icon key={j} name="Star" size={16} className="text-orange-400 fill-orange-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-5">"{review.text}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{review.name}</div>
                  <div className="text-xs text-gray-400">{review.city} · {review.date}</div>
                </div>
                <span className="text-sm bg-orange-50 text-orange-600 px-3 py-1 rounded-full font-medium">
                  {review.country}
                </span>
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={() => setCurrent(c => Math.max(0, c - 1))}
              disabled={current === 0}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-orange-400 disabled:opacity-30 transition-colors bg-white"
            >
              <Icon name="ChevronLeft" size={16} className="text-gray-600" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${i === current ? "bg-orange-500" : "bg-gray-300"}`}
              />
            ))}
            <button
              onClick={() => setCurrent(c => Math.min(totalPages - 1, c + 1))}
              disabled={current === totalPages - 1}
              className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center hover:border-orange-400 disabled:opacity-30 transition-colors bg-white"
            >
              <Icon name="ChevronRight" size={16} className="text-gray-600" />
            </button>
          </div>
        )}

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "2 400+", label: "карт оформлено" },
            { value: "50+", label: "стран доступно" },
            { value: "4.9", label: "средняя оценка" },
            { value: "3 года", label: "на рынке" }
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-orange-500">{stat.value}</div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
