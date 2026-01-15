import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { Section } from "@/components/sections/section"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { Faq } from "@/components/sections/faq"
import { Cta } from "@/components/sections/cta"
import { JsonLd } from "@/components/seo/json-ld"
import { generateServiceSchema, generateFaqSchema } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  GitBranch,
  CheckSquare,
  BarChart,
  Link2,
  Search,
  Lightbulb,
  Rocket,
  GraduationCap,
  HeadphonesIcon,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Автоматизация и внедрение",
  description:
    "Автоматизация бизнес-процессов: заявки, согласования, контроль исполнения, интеграции. Внедрение Pyrus и других платформ.",
  openGraph: {
    title: "Автоматизация и внедрение | IT Works",
    description: "Автоматизация бизнес-процессов и внедрение систем для повышения эффективности.",
  },
}

const automationAreas = [
  {
    title: "Заявки и документооборот",
    description: "Автоматизация приёма, обработки и согласования заявок любого типа",
    icon: FileText,
  },
  {
    title: "Маршруты согласования",
    description: "Настройка многоуровневых маршрутов согласования с условиями и эскалациями",
    icon: GitBranch,
  },
  {
    title: "Контроль исполнения",
    description: "Отслеживание задач, сроков и ответственных с автоматическими напоминаниями",
    icon: CheckSquare,
  },
  {
    title: "Автоматизация отчётности",
    description: "Формирование отчётов по расписанию и по событиям без ручного труда",
    icon: BarChart,
  },
  {
    title: "Интеграции систем",
    description: "Связывание CRM, 1С, почты и других систем в единый контур",
    icon: Link2,
  },
]

const approachSteps = [
  {
    number: "01",
    title: "Аудит процессов",
    description: "Изучаем текущие процессы, выявляем узкие места и потенциал для автоматизации",
    icon: Search,
  },
  {
    number: "02",
    title: "Прототипирование",
    description: "Создаём прототип решения для быстрой проверки гипотез",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Внедрение",
    description: "Поэтапно внедряем решение с минимальным влиянием на текущую работу",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Обучение",
    description: "Обучаем команду работе с новыми инструментами",
    icon: GraduationCap,
  },
  {
    number: "05",
    title: "Поддержка",
    description: "Сопровождаем после запуска и оперативно решаем вопросы",
    icon: HeadphonesIcon,
  },
]

const tools = [
  { name: "Pyrus", description: "Управление процессами и согласованиями" },
  { name: "1С", description: "Учётные системы и интеграции" },
  { name: "Excel/Google Sheets", description: "Автоматизация отчётности" },
  { name: "Power BI / Metabase", description: "Бизнес-аналитика и дашборды" },
  { name: "API-интеграции", description: "Связывание систем между собой" },
]

const faqItems = [
  {
    question: "Почему вы рекомендуете Pyrus?",
    answer:
      "Pyrus — это гибкая платформа для автоматизации процессов с удобным интерфейсом, мобильным приложением и широкими возможностями интеграции. Но мы не ограничиваемся одним инструментом и подбираем решение под задачу клиента.",
  },
  {
    question: "Сколько времени занимает внедрение?",
    answer:
      "Простые процессы автоматизируются за 2-4 недели. Комплексное внедрение с интеграциями занимает 2-3 месяца. Точные сроки зависят от количества процессов и требований к интеграциям.",
  },
  {
    question: "Нужно ли нам менять текущие системы?",
    answer:
      "Не обязательно. Мы умеем интегрировать новые решения с существующими системами. Цель — минимальные изменения при максимальном эффекте.",
  },
  {
    question: "Кто будет администрировать систему после внедрения?",
    answer:
      "Мы обучаем вашу команду и передаём все необходимые знания. При необходимости предлагаем услуги поддержки и администрирования на постоянной основе.",
  },
  {
    question: "Можно ли автоматизировать только один процесс?",
    answer:
      "Да, мы рекомендуем начинать с пилотного процесса. Это позволяет быстро получить результат и оценить эффект перед масштабированием.",
  },
  {
    question: "Как оценить эффект от автоматизации?",
    answer:
      "Мы фиксируем метрики до и после внедрения: время на операции, количество ошибок, скорость согласований. По итогам вы видите конкретные цифры улучшений.",
  },
]

export default function AutomationPage() {
  const serviceSchema = generateServiceSchema(
    "Автоматизация и внедрение",
    "Автоматизация бизнес-процессов: заявки, согласования, контроль исполнения, интеграции",
    "https://itworks.consulting/services/automation",
  )
  const faqSchema = generateFaqSchema(faqItems)

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <Hero
        badge="Автоматизация"
        title="Освободите команду от рутины"
        description="Автоматизируем процессы, чтобы люди занимались важным, а не перекладывали бумаги"
      />

      {/* What we automate */}
      <FeatureGrid
        title="Что автоматизируем"
        description="Типовые задачи, которые мы решаем для клиентов"
        features={automationAreas}
        columns={3}
      />

      {/* Approach */}
      <Section title="Наш подход" description="Пять этапов от анализа до результата" className="bg-muted">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {approachSteps.map((step, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <span className="text-3xl font-bold text-primary/20">{step.number}</span>
                <step.icon className="h-8 w-8 text-primary" />
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Tools */}
      <Section title="Инструменты и платформы" description="Работаем с проверенными решениями">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <div key={index} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-semibold text-foreground">{tool.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{tool.description}</p>
                {tool.name === "Pyrus" && (
                  <Badge variant="secondary" className="mt-3">
                    Рекомендуем
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Faq items={faqItems} />

      <Cta
        title="Готовы автоматизировать процессы?"
        description="Расскажите о задаче — предложим решение и оценим сроки"
      />
    </>
  )
}
