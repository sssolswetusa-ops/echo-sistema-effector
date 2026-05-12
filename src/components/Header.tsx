import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header({ onGetCard }: { onGetCard?: () => void }) {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-orange-100">
      <div className="flex items-center gap-2">
        <CardLogo />
        <span className="text-lg font-semibold text-gray-900">
          GlobalCard<sup className="text-xs">™</sup>
        </span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <a href="#countries" className="text-sm text-gray-500 hover:text-gray-900 transition-colors flex items-center gap-1">
          Страны <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#how-it-works" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
          Как это работает
        </a>
        <a href="#reviews" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
          Отзывы
        </a>
        <a href="#faq" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
          FAQ
        </a>
        <a href="#contacts" className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
          Контакты
        </a>
      </nav>

      <Button
        variant="outline"
        onClick={onGetCard}
        className="rounded-full border-orange-400 text-orange-500 hover:bg-orange-50 hover:text-orange-600 bg-white"
      >
        Получить карту
      </Button>
    </header>
  )
}

function CardLogo() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="5" width="20" height="14" rx="3" fill="#f97316" opacity="0.8" />
      <rect x="2" y="9" width="20" height="3" fill="#f97316" />
      <rect x="4" y="14" width="5" height="2" rx="1" fill="white" opacity="0.8" />
      <rect x="11" y="14" width="3" height="2" rx="1" fill="white" opacity="0.6" />
    </svg>
  )
}