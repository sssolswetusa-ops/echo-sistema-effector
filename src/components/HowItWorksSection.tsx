import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"

const advantages = [
  {
    icon: "Plane",
    title: "Удобные путешествия",
    desc: "Оплачивайте отели, билеты и страховки по всему миру без лишних ограничений.",
  },
  {
    icon: "ShoppingCart",
    title: "Онлайн-покупки",
    desc: "Оформляйте подписки на Netflix, Spotify и совершайте покупки на Amazon и eBay.",
  },
  {
    icon: "Briefcase",
    title: "Бизнес и фриланс",
    desc: "Получайте выплаты от зарубежных клиентов и партнеров без препятствий.",
  },
  {
    icon: "Globe",
    title: "Свобода использования",
    desc: "Карта работает в странах, где российские карты могут быть ограничены.",
  },
]

const whyUs = [
  {
    icon: "Laptop",
    title: "Полностью удалённо",
    desc: "Заполняйте заявку и проходите консультацию, не выходя из дома.",
  },
  {
    icon: "FileText",
    title: "Минимум документов",
    desc: "В большинстве случаев достаточно только скана паспорта РФ. Доверенности не требуется.",
  },
  {
    icon: "Package",
    title: "Доставка до двери",
    desc: "Курьер доставит вашу готовую карту в любое место России.",
  },
  {
    icon: "ShieldCheck",
    title: "Безопасность",
    desc: "Гарантируем конфиденциальность данных и сопровождение до момента активации карты.",
  },
]

const steps = [
  {
    num: "01",
    title: "Заявка и консультация",
    desc: "Вы подаёте заявку и получаете консультацию по всем вопросам.",
  },
  {
    num: "02",
    title: "Подбор банка",
    desc: "Мы подбираем лучший банк, соответствующий вашим потребностям.",
  },
  {
    num: "03",
    title: "Сбор и подача документов",
    desc: "Помогаем собрать и подаём все необходимые документы для открытия счёта.",
  },
  {
    num: "04",
    title: "Получение и доставка карты",
    desc: "После одобрения карту курьер доставит прямо к вам.",
  },
]

export function HowItWorksSection({ onGetCard }: { onGetCard?: () => void }) {
  return (
    <section id="how-it-works" className="py-20 px-8">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* Hero-блок */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Откройте карту иностранного банка,<br />
            <span className="text-orange-500">не покидая Россию!</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Получите лёгкий и удобный доступ к международным платежам и финансовым сервисам с нашей помощью.
            Мы предлагаем гражданам РФ возможность открывать счета в дружественных юрисдикциях, обеспечивая
            надёжность и законность всех процессов. Всё оформление происходит дистанционно.
          </p>
        </div>

        {/* Преимущества карт */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Преимущества наших карт</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((item) => (
              <div key={item.title} className="rounded-2xl border border-orange-100 bg-white p-6 flex flex-col gap-3 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
                  <Icon name={item.icon as "Plane"} size={20} className="text-orange-500" />
                </div>
                <p className="text-gray-900 font-semibold text-sm">{item.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Почему выбирают нас */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Почему выбирают нас</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyUs.map((item) => (
              <div key={item.title} className="rounded-2xl border border-orange-100 bg-white p-6 flex flex-col gap-3 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50">
                  <Icon name={item.icon as "Laptop"} size={20} className="text-orange-500" />
                </div>
                <p className="text-gray-900 font-semibold text-sm">{item.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Как мы работаем */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">Как мы работаем</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="rounded-2xl border border-orange-100 bg-white p-6 flex flex-col gap-3 shadow-sm">
                <span className="text-3xl font-bold text-orange-300">{step.num}</span>
                <p className="text-gray-900 font-semibold text-sm">{step.title}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Стоимость */}
        <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8 text-center">
          <Icon name="Tag" size={32} className="text-orange-500 mx-auto mb-4" />
          <h3 className="text-2xl font-semibold text-gray-900 mb-3">Стоимость услуг</h3>
          <p className="text-gray-500 max-w-xl mx-auto mb-6">
            Стоимость открытия счёта зависит от выбранной юрисдикции и тарифов банка. Свяжитесь с нами,
            чтобы получить персонализированное предложение!
          </p>
          <Button
            onClick={onGetCard}
            className="rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-5"
          >
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Получить предложение
          </Button>
        </div>

      </div>
    </section>
  )
}