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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open("https://t.me/ustinov_zagran_karty", "_blank")
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="bg-[#141414] border border-[#262626] text-white max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 border border-violet-500/30">
              <Icon name="CreditCard" className="h-5 w-5 text-violet-400" />
            </div>
            <DialogTitle className="text-white text-xl">Получить заграничную карту</DialogTitle>
          </div>
          <p className="text-sm text-gray-400 pt-1">
            Заполните форму — и мы свяжемся с вами в Telegram для оформления карты
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-1.5">
            <Label htmlFor="name" className="text-gray-300 text-sm">Ваше имя</Label>
            <Input
              id="name"
              placeholder="Иван Иванов"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="bg-[#0f0f0f] border-[#262626] text-white placeholder-gray-600 focus:border-violet-500 focus-visible:ring-0"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="country" className="text-gray-300 text-sm">Нужная страна</Label>
            <Input
              id="country"
              placeholder="Например: Турция, ОАЭ, Таиланд..."
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
              className="bg-[#0f0f0f] border-[#262626] text-white placeholder-gray-600 focus:border-violet-500 focus-visible:ring-0"
            />
          </div>

          <div className="rounded-xl bg-[#1a1a1a] border border-[#262626] p-3 flex items-center gap-3">
            <Icon name="MessageCircle" className="h-5 w-5 text-blue-400 shrink-0" />
            <p className="text-xs text-gray-400">
              После отправки вы перейдёте в наш Telegram-канал <span className="text-white font-medium">@ustinov_zagran_karty</span> — там менеджер ответит в течение нескольких минут
            </p>
          </div>

          <Button
            type="submit"
            className="w-full rounded-full bg-violet-600 hover:bg-violet-700 text-white font-medium py-5"
          >
            <Icon name="Send" className="mr-2 h-4 w-4" />
            Перейти в Telegram
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
