import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { Section } from "@/components/sections/section"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CaseGrid } from "@/components/sections/case-grid"
import { Cta } from "@/components/sections/cta"
import { JsonLd } from "@/components/seo/json-ld"
import { generateServiceSchema } from "@/lib/seo"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Calculator,
  BarChart3,
  LineChart,
  Stethoscope,
  UserCheck,
  Building2,
  TrendingUp,
  Users,
  CheckCircle,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Финансовый консалтинг",
  description:
    "Построение системы управленческого учёта, бюджетирование, финансовое моделирование, CFO-поддержка. Прозрачность в финансах для принятия решений.",
  openGraph: {
    title: "Финансовый консалтинг | IT Works",
    description: "Управленческий учёт, бюджетирование, финансовые модели и CFO-поддержка для бизнеса.",
  },
}

const services = [
  {
    title: "Бюджетирование",
    description: "Построение системы планирования доходов и расходов, контроль исполнения бюджета, план-факт анализ",
    icon: Calculator,
  },
  {
    title: "Управленческий учёт",
    description: "Настройка учёта по центрам финансовой ответственности, проектам, направлениям бизнеса",
    icon: BarChart3,
  },
  {
    title: "Финансовые модели",
    description: "Разработка финансовых моделей для оценки проектов, прогнозирования и принятия инвестиционных решений",
    icon: LineChart,
  },
  {
    title: "Диагностика бизнеса",
    description: "Анализ финансового состояния, выявление точек роста и рисков, аудит текущих процессов",
    icon: Stethoscope,
  },
  {
    title: "CFO-поддержка",
    description: "Внешний финансовый директор на частичную занятость для стратегического планирования и контроля",
    icon: UserCheck,
  },
]

const segments = [
  {
    title: "Растущие компании",
    description: "От 50 до 500 млн годового оборота, которым нужна система для масштабирования",
    icon: TrendingUp,
  },
  {
    title: "Производственные компании",
    description: "Нуждающиеся в учёте себестоимости, контроле запасов и планировании",
    icon: Building2,
  },
  {
    title: "Проектные организации",
    description: "IT-компании, агентства, подрядчики с необходимостью учёта по проектам",
    icon: Users,
  },
]

const deliverables = [
  "Методология управленческого учёта",
  "Настроенные отчётные формы",
  "Система бюджетирования",
  "Финансовые модели в Excel/Google Sheets",
  "Регламенты и инструкции",
  "Обучение команды",
]

const timeline = [
  { phase: "Диагностика", duration: "2-3 недели" },
  { phase: "Разработка методологии", duration: "2-4 недели" },
  { phase: "Внедрение и настройка", duration: "4-8 недель" },
  { phase: "Обучение и сопровождение", duration: "2-4 недели" },
]

const relatedCases = [
  {
    title: "Система бюджетирования для производства",
    industry: "Производство",
    problem: "Отсутствие контроля затрат и понимания рентабельности продукции",
    solution: "Внедрение системы учёта по ЦФО и бюджетирования с план-факт анализом",
    result: "Снижение затрат на 12% за первый год",
    metrics: ["-12% затраты", "100% прозрачность"],
  },
  {
    title: "Управленческий учёт для IT-компании",
    industry: "IT-услуги",
    problem: "Непонимание маржинальности проектов и направлений",
    solution: "Построение проектного учёта и системы отчётности для руководства",
    result: "Рост маржинальности на 18% за счёт отказа от убыточных проектов",
    metrics: ["+18% маржа", "Еженедельная отчётность"],
  },
  {
    title: "Финансовая модель для привлечения инвестиций",
    industry: "Стартап",
    problem: "Отсутствие финансовой модели для переговоров с инвесторами",
    solution: "Разработка детальной финансовой модели с прогнозом на 5 лет",
    result: "Успешное привлечение раунда инвестиций",
    metrics: ["Модель на 5 лет", "Успешный раунд"],
  },
]

export default function FinancialConsultingPage() {
  const serviceSchema = generateServiceSchema(
    "Финансовый консалтинг",
    "Построение системы управленческого учёта, бюджетирование, финансовое моделирование и CFO-поддержка",
    `${siteConfig.url}/services/financial-consulting`,
  )

  return (
    <>
      <JsonLd data={serviceSchema} />

      <Hero
        badge="Финансовый консалтинг"
        title="Прозрачность в финансах - основа для роста"
        description="Построим систему, которая покажет реальную картину бизнеса и поможет принимать взвешенные решения"
      />

      {/* Outcomes */}
      <Section className="bg-muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground">Что вы получите</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <p className="text-3xl font-bold text-foreground">100%</p>
              <p className="mt-2 text-sm text-muted-foreground">Прозрачность финансов</p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <p className="text-3xl font-bold text-foreground">-70%</p>
              <p className="mt-2 text-sm text-muted-foreground">Времени на отчётность</p>
            </div>
            <div className="rounded-2xl bg-card p-6 shadow-sm">
              <p className="text-3xl font-bold text-foreground">+15%</p>
              <p className="mt-2 text-sm text-muted-foreground">Рост маржинальности</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Services */}
      <FeatureGrid title="Что входит в услугу" features={services} columns={3} />

      {/* Target Segments */}
      <Section
        title="Для кого"
        description="Наши услуги подходят компаниям разного масштаба и отраслей"
        className="bg-muted"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {segments.map((segment, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <segment.icon className="h-10 w-10 text-primary" />
                <CardTitle className="text-lg">{segment.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{segment.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Deliverables */}
      <Section title="Результат на выходе" description="Конкретные артефакты, которые вы получите по итогам проекта">
        <div className="mx-auto max-w-2xl">
          <ul className="space-y-4">
            {deliverables.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Timeline */}
      <Section title="Формат работы" description="Типовые сроки реализации проекта" className="bg-muted">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {timeline.map((item, index) => (
              <div key={index} className="rounded-2xl bg-card p-6 text-center shadow-sm">
                <p className="text-lg font-semibold text-foreground">{item.phase}</p>
                <Badge variant="secondary" className="mt-2">
                  {item.duration}
                </Badge>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">
            Сроки зависят от масштаба компании и сложности задачи. Точные сроки обсуждаем на первой встрече.
          </p>
        </div>
      </Section>

      {/* Related Cases */}
      <CaseGrid title="Примеры проектов" cases={relatedCases} />

      <Cta
        title="Хотите навести порядок в финансах?"
        description="Расскажите о вашей ситуации - предложим решение и оценим сроки"
      />
    </>
  )
}
