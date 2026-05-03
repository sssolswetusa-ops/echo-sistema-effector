import Icon from "@/components/ui/icon"

export function ContactsSection() {
  return (
    <section id="contacts" className="py-20 px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Контакты</h2>
        <p className="text-gray-400 mb-12">Свяжитесь с нами любым удобным способом</p>

        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href="tel:+79036445752"
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-violet-500/50 hover:bg-violet-500/10 transition-all group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/20 group-hover:bg-violet-500/30 transition-colors">
              <Icon name="Phone" size={22} className="text-violet-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Телефон</p>
              <p className="text-white font-medium">+7 903 644-57-52</p>
            </div>
          </a>

          <a
            href="https://t.me/ustinov_zagran_karty"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[#229ED9]/50 hover:bg-[#229ED9]/10 transition-all group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#229ED9]/20 group-hover:bg-[#229ED9]/30 transition-colors">
              <Icon name="Send" size={22} className="text-[#229ED9]" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Telegram</p>
              <p className="text-white font-medium">@ustinov_zagran_karty</p>
            </div>
          </a>

          <a
            href="https://www.avito.ru/brands/fde671e37549b57bcc06794e929f1958"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-green-500/50 hover:bg-green-500/10 transition-all group"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
              <Icon name="ShoppingBag" size={22} className="text-green-400" />
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Авито</p>
              <p className="text-white font-medium">Наш профиль</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
