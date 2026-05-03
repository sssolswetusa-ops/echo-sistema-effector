import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Icon from "@/components/ui/icon"

interface LeadModalProps {
  open: boolean
  onClose: () => void
}

export function LeadModal({ open, onClose }: LeadModalProps) {
  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      await fetch("https://functions.poehali.dev/cad40df1-f4e0-4ac1-a222-dc99fc3e001b", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone: "—", question: `Страна: ${country}`, source: "Кнопка «Получить карту»" }),
      })
    } catch {
      setError("Ошибка отправки, но вы всё равно можете написать нам напрямую.")
    } finally {
      setLoading(false)
      window.open("https://t.me/ustinov_zagran_karty", "_blank")
      onClose()
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-white border border-orange-100 text-gray-900 max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 border border-orange-200">
              <Icon name="CreditCard" className="h-5 w-5 text-orange-500" />
            </div>
            <DialogTitle className="text-gray-900 text-xl">Получить заграничную карту</DialogTitle>
          </div>
          <p className="text-sm text-gray-500 pt-1">
            Заполните форму — и мы свяжемся с вами в Telegram для оформления карты
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-gray-600 text-sm">Ваше имя</Label>
            <Input
              id="name"
              placeholder="Иван Иванов"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-white border-orange-200 text-gray-900 placeholder-gray-300 focus:border-orange-400 focus-visible:ring-0"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="country" className="text-gray-600 text-sm">Нужная страна</Label>
            <Input
              id="country"
              placeholder="Например: Турция, ОАЭ, Таиланд..."
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              className="bg-white border-orange-200 text-gray-900 placeholder-gray-300 focus:border-orange-400 focus-visible:ring-0"
            />
          </div>

          <div className="rounded-xl bg-orange-50 border border-orange-200 p-3 flex items-center gap-3">
            <Icon name="MessageCircle" className="h-5 w-5 text-[#229ED9] shrink-0" />
            <p className="text-xs text-gray-500">
              После отправки вы перейдёте в наш Telegram-канал <span className="text-gray-900 font-medium">@ustinov_zagran_karty</span> — там менеджер ответит в течение нескольких минут
            </p>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <Button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-5 disabled:opacity-60"
          >
            <Icon name={loading ? "Loader" : "Send"} className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            {loading ? "Отправляем..." : "Перейти в Telegram"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
