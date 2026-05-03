import { useState } from "react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function ContactsSection() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [question, setQuestion] = useState("")
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("https://functions.poehali.dev/cad40df1-f4e0-4ac1-a222-dc99fc3e001b", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, question, source: "Форма контактов" }),
      })
      if (!res.ok) throw new Error()
      setSent(true)
      setName("")
      setPhone("")
      setQuestion("")
      setTimeout(() => setSent(false), 5000)
    } catch {
      setError("Ошибка отправки. Попробуйте позже или напишите напрямую в Telegram.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contacts" className="py-20 px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
          <p className="text-gray-500">Свяжитесь с нами любым удобным способом</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 mb-12">
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
            href="https://t.me/ustinov_zagran_karty"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 rounded-2xl border border-orange-100 bg-white p-6 hover:border-[#229ED9] hover:bg-blue-50 transition-all group shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
              <Icon name="Send" size={22} className="text-[#229ED9]" />
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-1">Telegram</p>
              <p className="text-gray-900 font-medium">@ustinov_zagran_karty</p>
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

        <div className="rounded-2xl border border-orange-100 bg-white p-8 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Icon name="MessageSquare" size={20} className="text-orange-500" />
            Оставить заявку
          </h3>

          {sent ? (
            <div className="flex flex-col items-center justify-center py-8 gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                <Icon name="CheckCircle" size={28} className="text-green-600" />
              </div>
              <p className="text-gray-900 font-medium text-lg">Заявка отправлена!</p>
              <p className="text-gray-500 text-sm text-center">Мы свяжемся с вами в ближайшее время</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <Label htmlFor="contact-name" className="text-gray-600 text-sm">Ваше имя</Label>
                  <Input
                    id="contact-name"
                    placeholder="Иван Иванов"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="bg-white border-orange-200 text-gray-900 placeholder-gray-300 focus:border-orange-400 focus-visible:ring-0"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="contact-phone" className="text-gray-600 text-sm">Телефон или Telegram</Label>
                  <Input
                    id="contact-phone"
                    placeholder="+7 900 000-00-00"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="bg-white border-orange-200 text-gray-900 placeholder-gray-300 focus:border-orange-400 focus-visible:ring-0"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="contact-question" className="text-gray-600 text-sm">Вопрос или комментарий</Label>
                <Input
                  id="contact-question"
                  placeholder="Нужна карта для Турции..."
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  className="bg-white border-orange-200 text-gray-900 placeholder-gray-300 focus:border-orange-400 focus-visible:ring-0"
                />
              </div>
              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
              <Button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-5 disabled:opacity-60"
              >
                <Icon name={loading ? "Loader" : "Send"} size={16} className={`mr-2 ${loading ? "animate-spin" : ""}`} />
                {loading ? "Отправляем..." : "Отправить заявку"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}