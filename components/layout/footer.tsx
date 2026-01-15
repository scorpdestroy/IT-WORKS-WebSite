import Link from "next/link"
import { Mail, Phone, Send } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

const legalLinks = [
  { name: "Политика конфиденциальности", href: "/privacy" },
  { name: "Обработка персональных данных", href: "/data-processing" },
  { name: "Cookies", href: "/cookies" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-bold text-foreground">
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Профессиональный финансовый консалтинг и автоматизация бизнес-процессов для компаний России и СНГ.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Контакты</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phoneRaw}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Phone className="h-4 w-4" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
                >
                  <Send className="h-4 w-4" />
                  {siteConfig.telegram}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground">Юридическая информация</h3>
            <ul className="mt-4 space-y-3">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-foreground">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Все права защищены.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Информация на сайте носит информационный характер и не является публичной офертой, инвестиционной
            рекомендацией или финансовой консультацией. Решения принимаются индивидуально на основе анализа конкретной
            ситуации клиента.
          </p>
        </div>
      </div>
    </footer>
  )
}
