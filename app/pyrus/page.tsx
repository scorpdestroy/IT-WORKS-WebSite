import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"

import { Hero } from "@/components/sections/hero"
import { Section } from "@/components/sections/section"
import { FeatureGrid } from "@/components/sections/feature-grid"
import { CaseGrid } from "@/components/sections/case-grid"
import { Faq } from "@/components/sections/faq"
import { JsonLd } from "@/components/seo/json-ld"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { generateFaqSchema, generateServiceSchema } from "@/lib/seo"
import { siteConfig } from "@/lib/site-config"

import {
  MessageSquare,
  CheckSquare,
  GitBranch,
  Plug,
  BookOpen,
  Sparkles,
  HeadphonesIcon,
  Users,
  FileSignature,
  Briefcase,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Внедрение Pyrus под ключ от IT Works",
  description:
    "Профессиональное внедрение Pyrus: CRM, Helpdesk, HR, ЭДО, интеграции с 1С и телефонией. Бесплатный пилот, обучение и поддержка.",
  openGraph: {
    title: "Внедрение Pyrus под ключ | IT Works",
    description:
      "Автоматизация процессов на Pyrus: настройка маршрутов, форм, CRM/Helpdesk/HR, интеграции с 1С и другими сервисами. Бесплатный пилот.",
    url: `${siteConfig.url}/pyrus`,
  },
  alternates: {
    canonical: "/pyrus",
  },
}

const howItWorksSteps = [
  {
    number: "01",
    title: "Проведём аудит процессов",
    description: "Фиксируем текущие схемы работы, роли, точки контроля и метрики эффективности.",
  },
  {
    number: "02",
    title: "Настроим Pyrus под ваши задачи",
    description:
      "Соберём формы, маршруты, роли и правила. Автоматизируем согласования, заявки, контроль сроков и отчётность.",
  },
  {
    number: "03",
    title: "Обучим команду",
    description:
      "Проведём обучение, подготовим инструкции и передадим администрирование. При необходимости - поддержка после запуска.",
  },
]

const pyrusFeatures = [
  {
    title: "Единая коммуникация",
    description: "Среда для сотрудников, клиентов и партнёров - всё обсуждение и действия в одном месте.",
    icon: MessageSquare,
  },
  {
    title: "Задачи и чаты",
    description: "Таск-менеджер и мессенджер: цели, ответственные и сроки - без потери контекста.",
    icon: CheckSquare,
  },
  {
    title: "Процессы и маршруты",
    description: "Шаблоны процессов, формы, правила, канбан и аналитика для управления исполнением.",
    icon: GitBranch,
  },
  {
    title: "Интеграции и API",
    description: "50+ готовых интеграций + открытый API, webhooks и автоматизация событий.",
    icon: Plug,
  },
  {
    title: "База знаний и документы",
    description: "Интерактивная библиотека и совместная работа над документами.",
    icon: BookOpen,
  },
  {
    title: "ИИ для документов",
    description: "Распознавание и оцифровка документов, ИИ-ассистент для ускорения рутины.",
    icon: Sparkles,
  },
  {
    title: "Service Desk / ITSM",
    description: "Обработка обращений из всех каналов в одном окне, SLA и сервисные заявки.",
    icon: HeadphonesIcon,
  },
  {
    title: "CRM и продажи",
    description: "Клиентская база, лиды, сделки, заявки и автоматизация этапов продаж.",
    icon: Briefcase,
  },
  {
    title: "ЭДО и КЭДО",
    description: "Подписание и хранение документов, обмен с контрагентами, кадровый ЭДО.",
    icon: FileSignature,
  },
  {
    title: "HRM",
    description: "Рекрутинг, управление персоналом и процессы HR в едином контуре.",
    icon: Users,
  },
]

const cases = [
  {
    title: "Автоматизация сети коворкингов",
    industry: "Сервис / недвижимость",
    problem:
      "Долгие согласования платежей, потери счетов и дублирование оплат, сложность контроля расходов по направлениям.",
    solution:
      "Настроили единый реестр платежей, маршруты согласования между отделами и контроль статусов с уведомлениями.",
    result: "100+ платежей в месяц обрабатываются без ошибок и задержек",
    metrics: ["100+ платежей/мес", "500+ пользователей", "Единый реестр"],
  },
  {
    title: "Автоматизация промышленной компании",
    industry: "Промышленность",
    problem:
      "Нужна прозрачность контроля качества и ускорение обработки гарантийных случаев, интеграция с CRM/ERP/BI.",
    solution:
      "Оцифровали процессы контроля качества и обращения клиентов, настроили интеграции и отчётность.",
    result: "Сокращение простоев на 40% и рост скорости обработки обращений в 2 раза",
    metrics: ["-40% простои", "2x быстрее", "NPS +9%"],
  },
  {
    title: "Проектное управление в нефтегазовой отрасли",
    industry: "Нефтегаз",
    problem:
      "Централизация управления проектами и согласований (20+ инстанций), мобильность на объектах, отказ от бумаги.",
    solution:
      "Автоматизировали документооборот и согласования, внедрили мобильные сценарии и контроль исполнения.",
    result: "Сокращение сроков проектов на 30% и полный отказ от бумажного архива",
    metrics: ["-30% сроки", "5x быстрее документы", "-25% CAPEX"],
  },
]

const whyUs = [
  {
    title: "Экспертиза Pyrus",
    description: "Глубоко знаем платформу и внедряем решения с учётом ограничений и лучших практик.",
  },
  {
    title: "Индивидуальная настройка",
    description: "Проектируем процессы под ваш бизнес, а не под шаблон - с понятными ролями и KPI.",
  },
  {
    title: "Комплексное внедрение",
    description: "Анализ → пилот → запуск → интеграции → обучение → поддержка. Один подрядчик на весь цикл.",
  },
  {
    title: "Фокус на результате",
    description: "Фиксируем цели и метрики, помогаем довести процесс до стабильной работы и масштабирования.",
  },
]

const faqItems = [
  {
    question: "Какие системы можно интегрировать с Pyrus?",
    answer:
      "Pyrus поддерживает интеграции с 1С, СБИС, Диадок, Ozon, Avito, телефонией (Мегафон, Билайн, Манго, Zadarma), мессенджерами (WhatsApp, Telegram), почтой и другими сервисами через API и webhooks.",
  },
  {
    question: "Сколько времени занимает внедрение?",
    answer:
      "Сроки зависят от сложности процессов. Типовое внедрение занимает 2–6 недель. Лёгкие процессы можем настроить вместе с вами за 1 день.",
  },
  {
    question: "Можно ли дорабатывать процессы после запуска?",
    answer:
      "Да. Pyrus - low-code платформа, поэтому процессы можно гибко изменять и расширять после запуска без полного переписывания решения.",
  },
  {
    question: "Предоставляете ли вы обучение для сотрудников?",
    answer:
      "Да. Проводим обучение, делаем видеоинструкции и можем подключить регулярную поддержку для администраторов и пользователей.",
  },
]

export default function PyrusLandingPage() {
  const serviceSchema = generateServiceSchema(
    "Внедрение Pyrus под ключ",
    "Настройка процессов, форм и маршрутов, интеграции, обучение и поддержка на low-code платформе Pyrus",
    `${siteConfig.url}/pyrus`,
  )
  const faqSchema = generateFaqSchema(faqItems)

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Partner badge */}
<div className="mx-auto max-w-6xl px-6 pt-6">
<div className="flex items-center justify-end">
<div className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 px-4 py-2 backdrop-blur">
<span className="text-xs font-medium text-muted-foreground">Партнёр</span>
<Image
src="/partners/pyrus-logo.png"
alt="Pyrus"
width={110}
height={32}
className="h-6 w-auto"
priority
/>
</div>
</div>
</div>

      <Hero
        badge="Pyrus"
        title="Автоматизация бизнеса на платформе Pyrus от IT Works"
        subline="Настроим low-code решения для документооборота, CRM, Helpdesk и HR"
        description="Внедрим Pyrus: спроектируем процессы, настроим маршруты согласования, интегрируем с 1С и сервисами, обучим команду. Начнём с бесплатного пилота одного процесса."
        ctaText="Запросить пилот"
        ctaHref="#form"
      />

      {/* Explicit link to main website (landing should be self-contained) */}
      <Section className="border-t border-border py-10">
        <div className="flex items-center justify-center">
          <Button variant="outline" asChild>
            <Link href="/">Перейти на основной сайт</Link>
          </Button>
        </div>
      </Section>

      {/* How it works */}
      <Section
        title="Автоматизация бизнеса с Pyrus: как это работает?"
        description="Pyrus - low-code платформа для быстрой и гибкой автоматизации процессов. Мы внедряем Pyrus под ваши задачи и подключаем необходимые интеграции."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {howItWorksSteps.map((step) => (
            <Card key={step.number} className="border-border bg-card">
              <CardHeader>
                <span className="text-3xl font-bold text-primary/20">{step.number}</span>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Platform overview */}
      <FeatureGrid
        title="Pyrus - новый взгляд на управление процессами и задачами"
        description="Единый инструмент для задач, согласований, документооборота и сервисных заявок - с быстрым масштабированием."
        features={pyrusFeatures}
        columns={3}
      />

      {/* Cases */}
      <CaseGrid title="Кейсы внедрения Pyrus" description="Примеры сценариев внедрения с измеримым эффектом" cases={cases} />

      {/* Why us */}
      <Section title="Почему выбирают нашу команду?" description="Подход, который снижает риски и даёт быстрый результат" className="bg-muted">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyUs.map((item, index) => (
            <Card key={index} className="border-border bg-card">
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* About */}
      <Section title={`О ${siteConfig.name}`} description="Официальный партнёр по внедрению Pyrus для компаний России и СНГ">
        <div className="mx-auto max-w-3xl space-y-4">
          <p className="text-muted-foreground">
            Мы специализируемся на внедрении и настройке решений Pyrus для автоматизации документооборота, согласований, заявок,
            CRM/Helpdesk и HR. Помогаем компаниям убирать ручные операции, повышать прозрачность процессов и ускорять работу команд.
          </p>
          <p className="text-muted-foreground">
            В проектах опираемся на чёткие цели и метрики: фиксируем «как есть», проектируем «как должно быть», запускаем пилот,
            масштабируем и обучаем сотрудников. При необходимости берём поддержку на себя: контроль качества, развитие процессов,
            интеграции и администрирование.
          </p>
          <div className="pt-4">
            <Button asChild>
              <Link href="#form">Обсудить внедрение</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Faq title="FAQ по внедрению Pyrus" items={faqItems} />

      {/* Pyrus external form */}
      <Section
        title="Запросить пилотный процесс"
        description="Оставьте заявку - предложим сценарий пилота и оценим сроки. Ответим в рабочее время."
        className="bg-muted"
      >
        {/* Якорь для CTA (#form) */}
        <div className="mx-auto max-w-3xl" id="form">
          {/* Контейнер формы Pyrus */}
          <div
            id="formHolder"
            data-width="720px"
            className="mx-auto rounded-2xl border border-border bg-card p-6"
          />

          <Script id="pyrus-external-form" strategy="afterInteractive">
            {`(function(){
  var f='externalFormStarterCallback', s=document.createElement('script');
  window[f]=function(h){ h.bind(document.getElementById('formHolder')); };
  s.type='text/javascript'; s.async=1;
  s.src='https://pyrus.com/js/externalformstarter?jsonp='+f+'&id=2391503';
  document.head.appendChild(s);
})()`}
          </Script>
        </div>
      </Section>
    </>
  )
}