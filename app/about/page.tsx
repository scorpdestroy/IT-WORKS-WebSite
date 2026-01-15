import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { Section } from "@/components/sections/section"
import { Cta } from "@/components/sections/cta"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, Shield, Lock, Users, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "О компании",
  description:
    "IT Works — команда экспертов в финансовом консалтинге и автоматизации. Прозрачность, ответственность, конфиденциальность.",
  openGraph: {
    title: "О компании | IT Works",
    description: "Команда экспертов в финансовом консалтинге и автоматизации бизнес-процессов.",
  },
}

const principles = [
  {
    icon: Eye,
    title: "Прозрачность",
    description:
      "Открыто обсуждаем методы работы, риски и ожидаемые результаты. Вы всегда знаете, что происходит с проектом.",
  },
  {
    icon: Shield,
    title: "Ответственность",
    description:
      "Берём на себя обязательства и выполняем их. Если что-то идёт не по плану — оперативно решаем и информируем.",
  },
  {
    icon: Lock,
    title: "Конфиденциальность",
    description:
      "Работаем по NDA. Ваша финансовая информация и бизнес-процессы защищены на всех этапах сотрудничества.",
  },
]

const expertise = [
  "Финансовое планирование и бюджетирование",
  "Управленческий учёт и отчётность",
  "Автоматизация бизнес-процессов",
  "Внедрение информационных систем",
  "Финансовое моделирование",
  "Оптимизация денежных потоков",
]

const processSteps = [
  {
    title: "Первичная консультация",
    description: "Бесплатно обсуждаем вашу ситуацию и определяем, можем ли помочь",
  },
  {
    title: "Диагностика",
    description: "Изучаем текущее состояние и формируем план работ с чёткими результатами",
  },
  {
    title: "Договор и старт",
    description: "Фиксируем объём работ, сроки и стоимость. Начинаем проект",
  },
  {
    title: "Реализация",
    description: "Выполняем работы с регулярными статус-митингами и промежуточными результатами",
  },
  {
    title: "Сдача и поддержка",
    description: "Передаём результаты, обучаем команду и остаёмся на связи",
  },
]

export default function AboutPage() {
  return (
    <>
      <Hero
        title="Порядок в финансах — наша специализация"
        description="Помогаем компаниям выстроить финансовое управление и автоматизировать процессы с 2018 года"
        showCta={false}
      />

      {/* Mission */}
      <Section className="bg-muted">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-foreground">Наш подход</h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Мы не продаём «волшебные таблетки». Работаем над реальными изменениями в бизнесе, которые дают измеримый
            результат. Каждый проект — это партнёрство, где мы вместе с клиентом идём к цели.
          </p>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Фокусируемся на практике: не только разрабатываем методологии и модели, но и внедряем их, обучаем команду и
            сопровождаем до достижения результата.
          </p>
        </div>
      </Section>

      {/* Principles */}
      <Section title="Принципы работы">
        <div className="grid gap-6 md:grid-cols-3">
          {principles.map((principle, index) => (
            <Card key={index} className="border-border">
              <CardHeader>
                <principle.icon className="h-10 w-10 text-primary" />
                <CardTitle className="text-lg">{principle.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Expertise */}
      <Section title="Экспертиза команды" className="bg-muted">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-8 w-8 text-primary" />
              <h3 className="text-xl font-semibold text-foreground">Что мы умеем</h3>
            </div>
            <ul className="space-y-4">
              {expertise.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Card className="border-border h-full">
              <CardContent className="pt-6">
                <p className="text-muted-foreground leading-relaxed">
                  Команда IT Works — это практикующие специалисты с опытом работы в финансовых службах крупных компаний
                  и консалтинге. Мы не теоретики: каждый из нас прошёл через внедрение систем, построение процессов и
                  работу с реальными данными.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Средний опыт в команде — более 10 лет в финансах и автоматизации. За это время реализовали более 100
                  проектов для компаний разного масштаба и отраслей.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Process */}
      <Section title="Как строится работа" description="Прозрачный процесс от первого звонка до результата">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* YMYL Disclaimer */}
      <Section className="bg-muted">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8">
          <h3 className="text-lg font-semibold text-foreground">Важная информация</h3>
          <div className="mt-4 space-y-3 text-sm text-muted-foreground">
            <p>
              Информация на этом сайте носит информационный характер и не является публичной офертой, инвестиционной
              рекомендацией или финансовой консультацией.
            </p>
            <p>
              Все решения принимаются индивидуально на основе анализа конкретной ситуации клиента. Результаты проектов,
              описанные в кейсах, получены в конкретных условиях и могут отличаться для других компаний.
            </p>
            <p>Мы не гарантируем конкретных финансовых результатов без проведения предварительной диагностики.</p>
          </div>
        </div>
      </Section>

      <Cta />
    </>
  )
}
