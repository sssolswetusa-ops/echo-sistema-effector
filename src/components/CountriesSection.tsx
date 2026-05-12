import Icon from "@/components/ui/icon"

const countries = [
  {
    flag: "🇰🇿",
    name: "Казахстан",
    description: "Карты банков Казахстана — самый популярный выбор. Принимаются по всему миру, быстрое оформление за 3–5 дней.",
    banks: ["Kaspi", "Halyk", "Freedom Finance"],
    term: "3–5 дней",
    popular: true
  },
  {
    flag: "🇦🇪",
    name: "ОАЭ",
    description: "Премиальные карты ОАЭ для крупных транзакций и международного бизнеса. Без ограничений по операциям.",
    banks: ["Emirates NBD", "ADCB", "Mashreq"],
    term: "7–14 дней",
    popular: false
  },
  {
    flag: "🇹🇷",
    name: "Турция",
    description: "Карты турецких банков для оплаты в Европе и США. Удобны для путешественников и онлайн-шопинга.",
    banks: ["Ziraat", "Garanti", "İşbank"],
    term: "5–10 дней",
    popular: false
  },
  {
    flag: "🇬🇪",
    name: "Грузия",
    description: "Грузинские карты — простое оформление, лояльные условия. Идеально для малого бизнеса и фрилансеров.",
    banks: ["TBC Bank", "Bank of Georgia"],
    term: "5–7 дней",
    popular: false
  },
  {
    flag: "🇦🇲",
    name: "Армения",
    description: "Армянские карты принимаются в большинстве стран мира. Минимум документов, быстрое открытие счёта.",
    banks: ["Ameriabank", "IDBank", "Evocabank"],
    term: "3–7 дней",
    popular: true
  },
  {
    flag: "🇹🇭",
    name: "Таиланд",
    description: "Карты тайских банков для тех, кто часто бывает в Азии. Удобны для цифровых кочевников.",
    banks: ["Kasikorn", "Bangkok Bank"],
    term: "10–14 дней",
    popular: false
  },
  {
    flag: "🇷🇸",
    name: "Сербия",
    description: "Сербские карты открывают доступ к европейским платёжным системам. Популярны среди IT-специалистов.",
    banks: ["Raiffeisen", "OTP Bank"],
    term: "7–12 дней",
    popular: false
  },
  {
    flag: "🇺🇿",
    name: "Узбекистан",
    description: "Карты Узбекистана для работы с СНГ и международными партнёрами. Лояльные условия открытия.",
    banks: ["Kapitalbank", "Ipoteka Bank"],
    term: "5–10 дней",
    popular: false
  }
]

export function CountriesSection({ onGetCard }: { onGetCard?: () => void }) {
  return (
    <section id="countries" className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-orange-500 mb-3">
            Карты по странам
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            50+ стран для открытия счёта
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-2xl mx-auto">
            Подбираем банк под ваши задачи — путешествия, бизнес, онлайн-покупки или работа с иностранными клиентами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {countries.map((country) => (
            <div
              key={country.name}
              className="relative rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:border-orange-200 transition-all cursor-pointer bg-white"
              onClick={onGetCard}
            >
              {country.popular && (
                <span className="absolute top-3 right-3 text-xs font-semibold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">
                  Популярно
                </span>
              )}
              <div className="text-4xl mb-3">{country.flag}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{country.name}</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{country.description}</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Icon name="Clock" size={13} className="text-orange-400" />
                  Срок: {country.term}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Icon name="Building2" size={13} className="text-orange-400" />
                  {country.banks.join(", ")}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Не нашли нужную страну? У нас ещё 40+ направлений
          </p>
          <button
            onClick={onGetCard}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Подобрать страну под мои задачи
            <Icon name="ArrowRight" size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
