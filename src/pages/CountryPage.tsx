import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { getCountryBySlug } from "@/data/countries"
import { LeadModal } from "@/components/LeadModal"
import { Header } from "@/components/Header"
import Icon from "@/components/ui/icon"

export default function CountryPage() {
  const { slug } = useParams<{ slug: string }>()
  const [modalOpen, setModalOpen] = useState(false)
  const country = getCountryBySlug(slug ?? "")

  useEffect(() => {
    if (!country) return
    const prevTitle = document.title
    const prevDesc = document.querySelector('meta[name="description"]')?.getAttribute("content") ?? ""

    document.title = `${country.title} | GlobalCard`

    let metaDesc = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement("meta")
      metaDesc.name = "description"
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = country.metaDescription

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement("link")
      canonical.rel = "canonical"
      document.head.appendChild(canonical)
    }
    const prevCanonical = canonical.href
    canonical.href = `https://all-pay-card.ru/countries/${country.slug}`

    const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]')
    if (ogTitle) ogTitle.content = `${country.title} | GlobalCard`

    const ogDesc = document.querySelector<HTMLMetaElement>('meta[property="og:description"]')
    if (ogDesc) ogDesc.content = country.metaDescription

    const ogUrl = document.querySelector<HTMLMetaElement>('meta[property="og:url"]')
    if (ogUrl) ogUrl.content = `https://all-pay-card.ru/countries/${country.slug}`

    return () => {
      document.title = prevTitle
      if (metaDesc) metaDesc.content = prevDesc
      if (canonical) canonical.href = prevCanonical
      if (ogTitle) ogTitle.content = prevTitle
      if (ogDesc) ogDesc.content = prevDesc
    }
  }, [country])

  if (!country) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500 text-lg">Страна не найдена</p>
        <Link to="/" className="text-orange-500 underline">На главную</Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header onGetCard={() => setModalOpen(true)} />

      {/* Hero */}
      <section className="py-16 px-8 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-4xl mx-auto">
          <Link to="/#countries" className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 mb-6 transition-colors">
            <Icon name="ArrowLeft" size={14} />
            Все страны
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <span className="text-6xl">{country.flag}</span>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-orange-500">
                Карта иностранного банка
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-1">
                {country.title}
              </h1>
            </div>
          </div>
          <p className="text-lg text-gray-500 leading-relaxed max-w-3xl mb-8">
            {country.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Оформить карту {country.nameGenitive}
              <Icon name="ArrowRight" size={16} />
            </button>
            <a
              href="https://t.me/zagran_karty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#229ED9] hover:bg-[#1a8bbf] text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              <Icon name="Send" size={16} />
              Написать в Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {country.stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-orange-500">{stat.value}</div>
              <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Преимущества карты {country.nameGenitive}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {country.benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-orange-100 bg-white p-6 flex gap-4 shadow-sm">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Icon name={b.icon as "Globe"} size={20} className="text-orange-500" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 mb-1">{b.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banks */}
      <section className="py-16 px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Банки-партнёры в {country.nameGenitive === "ОАЭ" ? "ОАЭ" : country.nameGenitive}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {country.banks.map((bank) => (
              <div key={bank.name} className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                    <Icon name="Building2" size={18} className="text-orange-500" />
                  </div>
                  <h3 className="font-bold text-gray-900">{bank.name}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{bank.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Как оформить карту {country.nameGenitive}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {country.steps.map((step) => (
              <div key={step.num} className="rounded-2xl border border-orange-100 bg-white p-6 shadow-sm">
                <span className="text-3xl font-bold text-orange-300">{step.num}</span>
                <p className="font-semibold text-gray-900 mt-3 mb-2">{step.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 px-8 bg-orange-50">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-orange-100 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Icon name="FileText" size={24} className="text-orange-500" />
              Необходимые документы
            </h2>
            <ul className="space-y-3">
              {country.requirements.map((req) => (
                <li key={req} className="flex items-start gap-3 text-gray-600">
                  <Icon name="Check" size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                  {req}
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-orange-50 rounded-xl text-sm text-orange-700">
              <Icon name="Info" size={14} className="inline mr-1" />
              Точный список документов уточняем индивидуально при подаче заявки
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Частые вопросы о карте {country.nameGenitive}
          </h2>
          <FAQList items={country.faq} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-8 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-4xl mb-4 block">{country.flag}</span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Готовы оформить карту {country.nameGenitive}?
          </h2>
          <p className="text-gray-400 mb-8">
            Оставьте заявку — менеджер свяжется с вами в течение часа и расскажет все детали
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Оставить заявку
              <Icon name="ArrowRight" size={16} />
            </button>
            <a
              href="https://t.me/zagran_karty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              <Icon name="Send" size={16} />
              Telegram
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-100">
        <Link to="/" className="hover:text-gray-600 transition-colors">
          ← Вернуться на главную
        </Link>
      </footer>

      <LeadModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <a
        href="https://t.me/zagran_karty"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-[#229ED9] px-4 py-3 text-sm font-medium text-white shadow-lg hover:bg-[#1a8bbf] transition-all hover:scale-105 active:scale-95"
      >
        <Icon name="Send" size={18} />
        <span className="hidden sm:inline">Написать в Telegram</span>
      </a>
    </div>
  )
}

function FAQList({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <button
            className="w-full flex items-center justify-between px-6 py-5 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="font-medium text-gray-900 pr-4">{item.question}</span>
            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-50 flex items-center justify-center">
              <Icon name={openIndex === i ? "Minus" : "Plus"} size={14} className="text-orange-500" />
            </span>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5 text-gray-500 leading-relaxed">{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  )
}