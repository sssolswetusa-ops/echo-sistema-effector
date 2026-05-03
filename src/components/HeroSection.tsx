import { ArrowUpRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection({ onGetCard }: { onGetCard?: () => void }) {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-12 pb-8 text-center">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 py-2 text-sm px-2 border border-orange-200">
        <span className="rounded-full bg-orange-500/20 px-2 py-0.5 text-xs font-medium text-orange-600">ДОСТУПНО</span>
        <span className="text-gray-600">Карты для 50+ стран мира</span>
        <ArrowUpRight className="h-4 w-4 text-gray-400" />
      </div>

      <h1 className="mb-4 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 text-balance">
        Заграничная карта для любой страны
      </h1>

      <p className="mb-8 max-w-xl text-gray-500">Оплачивайте покупки, снимайте наличные и платите онлайн в любой точке мира — без блокировок и отказов.</p>

      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Button onClick={onGetCard} className="rounded-full bg-orange-500 px-6 hover:bg-orange-600 text-white">
          Получить карту <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="outline" className="rounded-full border-gray-300 bg-white text-gray-700 hover:bg-gray-100">
          <Play className="mr-2 h-4 w-4 fill-orange-500 text-orange-500" /> Как это работает
        </Button>
      </div>
    </section>
  )
}
