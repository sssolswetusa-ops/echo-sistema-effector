import { Link } from "react-router-dom"
import { useEffect } from "react"
import Icon from "@/components/ui/icon"

export interface BreadcrumbItem {
  name: string
  path?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  useEffect(() => {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        ...(item.path ? { item: `https://загранкарты.online${item.path}` } : {}),
      })),
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(jsonLd)
    script.setAttribute("data-breadcrumbs", "true")
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [items])

  return (
    <nav aria-label="Хлебные крошки" className="flex items-center flex-wrap gap-1 text-sm text-gray-400 mb-6">
      {items.map((item, index) => {
        const isLast = index === items.length - 1
        return (
          <span key={index} className="flex items-center gap-1">
            {index > 0 && <Icon name="ChevronRight" size={14} className="mx-0.5 text-gray-300" />}
            {item.path && !isLast ? (
              <Link to={item.path} className="hover:text-gray-600 transition-colors">
                {item.name}
              </Link>
            ) : (
              <span className={isLast ? "text-gray-600 font-medium" : ""}>{item.name}</span>
            )}
          </span>
        )
      })}
    </nav>
  )
}
