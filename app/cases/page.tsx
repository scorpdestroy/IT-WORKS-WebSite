import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { Section } from "@/components/sections/section"
import { Cta } from "@/components/sections/cta"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Кейсы",
  description:
    "Реальные проекты с измеримыми результатами. Финансовый консалтинг и автоматизация для компаний из разных отраслей.",
  openGraph: {
    title: "Кейсы | IT Works",
    description: "Примеры проектов финансового консалтинга и автоматизации бизнес-процессов.",
  },
}

const cases = [
  {
    title: "Система бюджетирования для производственной компании",
    industry: "Производство",
    problem:
      "Компания с оборотом 800 млн рублей не понимала реальную себестоимость продукции. Отчёты формировались вручную раз в месяц, решения принимались на ощущениях.",
    solution:
      "Построили систему учёта затрат по продуктам и подразделениям. Внедрили бюджетирование с еженедельным план-факт анализом. Автоматизировали формирование управленческой отчётности.",
    result:
      "Снижение себестоимости на 12% за счёт выявления неэффективных процессов. Время на отчётность сократилось с 5 дней до 4 часов.",
    metrics: ["-12% себестоимость", "-70% время на отчёты", "Еженедельный контроль"],
  },
  {
    title: "Автоматизация согласований в ритейле",
    industry: "Ритейл",
    problem:
      "Сеть из 15 магазинов теряла заявки на закупки. Согласования занимали до 2 недель, сотрудники не понимали статус своих запросов.",
    solution:
      "Внедрили Pyrus для управления заявками. Настроили маршруты согласования с автоматическими напоминаниями и эскалацией. Интегрировали с 1С для автоматического создания заказов.",
    result:
      "Время согласования сократилось до 2 дней. Потери заявок исключены. Прозрачность процесса для всех участников.",
    metrics: ["7x быстрее", "0 потерь", "100% прозрачность"],
  },
  {
    title: "Управленческий учёт для IT-компании",
    industry: "IT-услуги",
    problem:
      "Компания из 50 человек не понимала рентабельность проектов. Некоторые проекты оказывались убыточными, но это выяснялось только постфактум.",
    solution:
      "Построили систему проектного учёта с трекингом времени и затрат. Внедрили еженедельную отчётность по маржинальности проектов для руководства.",
    result: "Выявили 3 убыточных направления и закрыли их. Общая маржинальность выросла на 18%.",
    metrics: ["+18% маржа", "Проектный учёт", "Еженедельные отчёты"],
  },
  {
    title: "Финансовая модель для привлечения инвестиций",
    industry: "EdTech стартап",
    problem:
      "Стартап готовился к раунду Series A, но не имел детальной финансовой модели для переговоров с инвесторами.",
    solution:
      "Разработали финансовую модель с прогнозом на 5 лет. Включили unit-экономику, сценарный анализ и план по достижению точки безубыточности.",
    result: "Успешно закрыли раунд на $2M. Модель использовалась для переговоров с 5 фондами.",
    metrics: ["$2M раунд", "5 лет прогноз", "3 сценария"],
  },
  {
    title: "Оптимизация денежных потоков",
    industry: "Дистрибуция",
    problem:
      "Компания регулярно сталкивалась с кассовыми разрывами при обороте 1.2 млрд рублей. Не было инструмента для планирования платежей.",
    solution:
      "Внедрили платёжный календарь с прогнозом на 13 недель. Настроили приоритизацию платежей и алерты о потенциальных разрывах.",
    result: "Кассовые разрывы исключены. Оптимизировали использование кредитной линии и сэкономили на процентах.",
    metrics: ["0 разрывов", "-15% кредит", "13 недель прогноз"],
  },
  {
    title: "Автоматизация отчётности для холдинга",
    industry: "Холдинг",
    problem:
      "Консолидация отчётности по 7 компаниям занимала 10 дней. Данные собирались вручную, были ошибки и расхождения.",
    solution:
      "Автоматизировали сбор данных из 1С всех компаний. Построили систему консолидации с автоматической проверкой данных и формированием отчётов.",
    result: "Время на консолидацию сократилось до 1 дня. Исключены ошибки ручного ввода.",
    metrics: ["10x быстрее", "0 ошибок", "7 компаний"],
  },
]

export default function CasesPage() {
  return (
    <>
      <Hero
        title="Кейсы"
        description="Реальные проекты с измеримыми результатами для компаний из разных отраслей"
        showCta={false}
      />

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          {cases.map((caseItem, index) => (
            <Card key={index} className="border-border transition-shadow hover:shadow-lg">
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  {caseItem.industry}
                </Badge>
                <CardTitle className="text-xl">{caseItem.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Проблема</p>
                  <p className="mt-2 text-sm text-foreground">{caseItem.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Решение</p>
                  <p className="mt-2 text-sm text-foreground">{caseItem.solution}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Результат</p>
                  <p className="mt-2 text-sm font-medium text-foreground">{caseItem.result}</p>
                </div>
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                  {caseItem.metrics.map((metric, i) => (
                    <Badge key={i} variant="outline">
                      {metric}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Cta title="Хотите такой же результат?" description="Расскажите о вашей задаче - покажем, как можем помочь" />
    </>
  )
}
