import Link from "next/link"
import { Hero } from "@/components/sections/hero"
import { Section } from "@/components/sections/section"
import { ServiceCards } from "@/components/sections/service-cards"
import { CaseGrid } from "@/components/sections/case-grid"
import { Process } from "@/components/sections/process"
import { Faq } from "@/components/sections/faq"
import { Cta } from "@/components/sections/cta"
import { JsonLd } from "@/components/seo/json-ld"
import { generateOrganizationSchema, generateWebSiteSchema, generateFaqSchema } from "@/lib/seo"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Target, Shield, Lock, BarChart3, Cog } from "lucide-react"

const advantages = [
  {
    icon: Clock,
    title: "Скорость",
    description: "Оперативная диагностика и внедрение решений без затягивания сроков",
  },
  {
    icon: Target,
    title: "Точность",
    description: "Детальный анализ данных и проверенные методологии",
  },
  {
    icon: Shield,
    title: "Ответственность",
    description: "Сопровождение на всех этапах и гарантия результата",
  },
  {
    icon: Lock,
    title: "Конфиденциальность",
    description: "Строгое соблюдение NDA и защита коммерческой информации",
  },
]

const services = [
  {
    title: "Финансовый консалтинг",
    description: "Построение системы управленческого учёта, бюджетирование, финансовое моделирование и CFO-поддержка",
    href: "/services/financial-consulting",
    icon: BarChart3,
    features: ["Бюджетирование", "Управленческий учёт", "Финансовые модели", "CFO-поддержка"],
    primary: true,
  },
  {
    title: "Автоматизация и внедрение",
    description: "Оптимизация бизнес-процессов, настройка согласований, интеграция систем и автоматизация отчётности",
    href: "/services/automation",
    icon: Cog,
    features: ["Автоматизация заявок", "Согласования", "Интеграции", "Отчётность"],
    primary: false,
  },
]

const cases = [
  {
    title: "Оптимизация финансового планирования",
    industry: "Производство",
    problem: "Отсутствие прозрачности в денежных потоках, ручное формирование отчётности",
    solution: "Внедрение системы бюджетирования и автоматизация управленческой отчётности",
    result: "Сокращение времени на отчётность на 70%",
    metrics: ["-70% времени", "+35% точность прогнозов"],
  },
  {
    title: "Автоматизация согласований",
    industry: "Ритейл",
    problem: "Длительные сроки согласования документов, потеря заявок",
    solution: "Настройка маршрутов согласования и контроля исполнения в Pyrus",
    result: "Ускорение согласований в 3 раза",
    metrics: ["3x быстрее", "0 потерянных заявок"],
  },
  {
    title: "Финансовая диагностика",
    industry: "IT-услуги",
    problem: "Непонимание реальной рентабельности проектов и направлений",
    solution: "Построение системы учёта по проектам и ЦФО",
    result: "Выявление убыточных направлений и рост маржинальности",
    metrics: ["+18% маржа", "100% прозрачность"],
  },
]

const processSteps = [
  {
    number: "01",
    title: "Диагностика",
    description: "Анализ текущей ситуации, выявление узких мест и точек роста",
  },
  {
    number: "02",
    title: "План",
    description: "Разработка дорожной карты с конкретными сроками и результатами",
  },
  {
    number: "03",
    title: "Внедрение",
    description: "Поэтапная реализация решений с контролем качества",
  },
  {
    number: "04",
    title: "Контроль",
    description: "Мониторинг достижения целевых показателей",
  },
  {
    number: "05",
    title: "Поддержка",
    description: "Сопровождение и консультации после завершения проекта",
  },
]

const faqItems = [
  {
    question: "С какими компаниями вы работаете?",
    answer:
      "Мы работаем с компаниями малого и среднего бизнеса из России и СНГ. Наши клиенты — производственные компании, ритейл, IT-компании, сервисные организации. Минимальный порог входа — компании с оборотом от 50 млн рублей в год.",
  },
  {
    question: "Сколько времени занимает типовой проект?",
    answer:
      "Сроки зависят от масштаба задачи. Диагностика занимает 2-3 недели, внедрение системы бюджетирования — 2-4 месяца, автоматизация процессов — от 1 до 3 месяцев. На первой встрече мы даём предварительную оценку сроков.",
  },
  {
    question: "Как формируется стоимость услуг?",
    answer:
      "Стоимость рассчитывается индивидуально на основе объёма работ, сложности задачи и требуемых сроков. Мы работаем по фиксированной стоимости за проект или по часовой ставке для консультационной поддержки.",
  },
  {
    question: "Можно ли начать с диагностики?",
    answer:
      "Да, мы рекомендуем начинать с диагностики. Это позволяет понять текущее состояние, определить приоритеты и сформировать реалистичный план действий. По итогам диагностики вы получаете отчёт с рекомендациями.",
  },
  {
    question: "Работаете ли вы удалённо?",
    answer:
      "Да, большинство проектов мы реализуем удалённо. При необходимости выезжаем на площадку клиента для проведения интервью, обучения команды или стартовых встреч. География работы — вся Россия и страны СНГ.",
  },
  {
    question: "Гарантируете ли вы результат?",
    answer:
      "Мы гарантируем качественное выполнение работ в согласованные сроки. Конкретные KPI и целевые показатели фиксируются в договоре. Если по объективным причинам результат не достигнут, мы дорабатываем проект без дополнительной оплаты.",
  },
]

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema()
  const webSiteSchema = generateWebSiteSchema()
  const faqSchema = generateFaqSchema(faqItems)

  return (
    <>
      <JsonLd data={organizationSchema} />
      <JsonLd data={webSiteSchema} />
      <JsonLd data={faqSchema} />

      <Hero
        badge="Финансовый консалтинг"
        title="Порядок в финансах — основа роста бизнеса"
        description="Помогаем компаниям выстроить управленческий учёт, автоматизировать процессы и принимать решения на основе данных"
      />

      {/* Advantages */}
      <Section className="border-t border-border">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <Card key={index} className="border-0 bg-transparent shadow-none">
              <CardContent className="pt-6">
                <advantage.icon className="h-8 w-8 text-foreground" />
                <h3 className="mt-4 text-lg font-semibold text-foreground">{advantage.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Services */}
      <ServiceCards
        title="Основные направления"
        description="Два ключевых направления для системного развития вашего бизнеса"
        services={services}
      />

      {/* Cases */}
      <CaseGrid
        title="Результаты наших клиентов"
        description="Реальные проекты с измеримыми результатами"
        cases={cases}
        showLink
      />

      {/* Process */}
      <Process
        title="Как мы работаем"
        description="Прозрачный процесс от первой встречи до результата"
        steps={processSteps}
      />

      {/* FAQ */}
      <Faq items={faqItems} />

      {/* Contact Snippet */}
      <Section className="bg-muted">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground">Обсудим вашу задачу?</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Расскажите о вашей ситуации — мы предложим варианты решения и оценим сроки
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <Link href="/contacts#form">
                Оставить заявку
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Cta />
    </>
  )
}
