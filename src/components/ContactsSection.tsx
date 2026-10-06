import Icon from "@/components/ui/icon"

export function ContactsSection() {
  return (
    <section id="contacts" className="py-20 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-gray-500">Свяжитесь с нами любым удобным способом</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <a
            href="tel:+79036445752"
            className="flex flex-col items-center gap-3 rounded-2xl border border-orange-100 bg-white p-6 hover:border-orange-400 hover:bg-orange-50 transition-all group shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 group-hover:bg-orange-200 transition-colors">
              <Icon name="Phone" size={22} className="text-orange-500" />
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-1">Телефон</p>
              <p className="text-gray-900 font-medium">+7 903 644-57-52</p>
            </div>
          </a>

          <a
            href="https://t.me/zagran_karty"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-orange-100 bg-white p-6 hover:border-[#229ED9] hover:bg-blue-50 transition-all group shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
              <Icon name="Send" size={22} className="text-[#229ED9]" />
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-1">Telegram</p>
              <p className="text-gray-900 font-medium">@zagran_karty</p>
            </div>
          </a>

          <a
            href="https://max.ru/u/f9LHodD0cOKJ7MnXpuO7b43hpwrzN92Fy3mppD9aL3VHb_s2ut2anat59SQ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-orange-100 bg-white p-6 hover:border-purple-400 hover:bg-purple-50 transition-all group shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 group-hover:bg-purple-200 transition-colors">
              <Icon name="MessageCircle" size={22} className="text-purple-600" />
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-1">MAX</p>
              <p className="text-gray-900 font-medium">+7 961 000-88-01</p>
            </div>
          </a>

          <a
            href="https://www.avito.ru/brands/fde671e37549b57bcc06794e929f1958"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-orange-100 bg-white p-6 hover:border-green-400 hover:bg-green-50 transition-all group shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 group-hover:bg-green-200 transition-colors">
              <Icon name="ShoppingBag" size={22} className="text-green-600" />
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-1">Авито</p>
              <p className="text-gray-900 font-medium">Наш профиль</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
