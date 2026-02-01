import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { ServiceCards } from "@/components/sections/service-cards"
import { Faq } from "@/components/sections/faq"
import { Cta } from "@/components/sections/cta"
import { JsonLd } from "@/components/seo/json-ld"
import { generateServiceSchema, generateFaqSchema } from "@/lib/seo"
import { BarChart3, Cog } from "lucide-react"

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Финансовый консалтинг и автоматизация бизнес-процессов. Бюджетирование, управленческий учёт, внедрение систем автоматизации.",
  openGraph: {
    title: "Услуги | IT Works",
    description: "Финансовый консалтинг и автоматизация бизнес-процессов для компаний России и СНГ.",
  },
}

const services = [
  {
    title: "Финансовый консалтинг",
    description:
      "Построение системы управленческого учёта, бюджетирование, финансовое моделирование, диагностика финансового состояния и CFO-поддержка для принятия стратегических решений.",
    href: "/services/financial-consulting",
    icon: BarChart3,
    features: [
      "Бюджетирование и планирование",
      "Управленческий учёт",
      "Финансовые модели",
      "Диагностика бизнеса",
      "CFO-поддержка",
    ],
    primary: true,
  },
  {
    title: "Автоматизация и внедрение",
    description:
      "Оптимизация бизнес-процессов, настройка маршрутов согласования, автоматизация контроля исполнения, интеграция систем и внедрение платформ (Pyrus и другие).",
    href: "/services/automation",
    icon: Cog,
    features: [
      "Автоматизация заявок и документооборота",
      "Настройка согласований",
      "Контроль исполнения",
      "Интеграция систем",
      "Автоматизация отчётности",
    ],
    primary: false,
  },
]

const faqItems = [
  {
    question: "Как понять, что нам нужен консалтинг?",
    answer:
      "Если вы не понимаете реальную прибыльность бизнеса, тратите много времени на ручные отчёты, не можете планировать денежные потоки или принимаете решения на ощущениях — это сигналы для обращения. Мы начинаем с бесплатной консультации, чтобы оценить вашу ситуацию.",
  },
  {
    question: "Можно ли заказать только диагностику?",
    answer:
      "Да, диагностика — это отдельная услуга. По итогам вы получаете отчёт с описанием текущей ситуации, выявленными проблемами и рекомендациями. Дальнейшее сотрудничество — по вашему решению.",
  },
  {
    question: "Работаете ли вы с малым бизнесом?",
    answer:
      "Да, мы работаем с компаниями от 50 млн рублей годового оборота. Для небольших компаний предлагаем экспресс-форматы и консультационную поддержку вместо полноценных проектов.",
  },
  {
    question: "Какие системы вы внедряете?",
    answer:
      "Мы работаем с Pyrus, 1С, Excel/Google Sheets, BI-системами и другими инструментами. Выбор зависит от задачи, бюджета и текущей инфраструктуры клиента. Мы не привязаны к одному вендору.",
  },
]

export default function ServicesPage() {
  const serviceSchema = generateServiceSchema(
    "Финансовый консалтинг и автоматизация",
    "Профессиональные услуги финансового консалтинга и автоматизации бизнес-процессов",
    `${siteConfig.url}/services`,
  )
  const faqSchema = generateFaqSchema(faqItems)

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <Hero
        title="Услуги"
        description="Два направления для системного развития: финансовый консалтинг и автоматизация процессов"
        showCta={false}
      />

      <ServiceCards services={services} />

      <Faq items={faqItems} />

      <Cta
        title="Не знаете, с чего начать?"
        description="Запишитесь на бесплатную консультацию — разберём вашу ситуацию и предложим варианты"
      />
    </>
  )
}
