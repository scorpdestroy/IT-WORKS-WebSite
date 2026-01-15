import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "./section"
import { ArrowRight } from "lucide-react"

interface CaseItem {
  title: string
  industry: string
  problem: string
  solution: string
  result: string
  metrics?: string[]
}

interface CaseGridProps {
  title?: string
  description?: string
  cases: CaseItem[]
  showLink?: boolean
}

export function CaseGrid({ title, description, cases, showLink = false }: CaseGridProps) {
  return (
    <Section title={title} description={description}>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {cases.map((caseItem, index) => (
          <Card key={index} className="border-border bg-card transition-shadow hover:shadow-lg">
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">
                {caseItem.industry}
              </Badge>
              <CardTitle className="text-lg">{caseItem.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground">Проблема</p>
                <p className="mt-1 text-sm text-foreground">{caseItem.problem}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground">Решение</p>
                <p className="mt-1 text-sm text-foreground">{caseItem.solution}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase text-muted-foreground">Результат</p>
                <p className="mt-1 text-sm font-medium text-foreground">{caseItem.result}</p>
              </div>
              {caseItem.metrics && caseItem.metrics.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {caseItem.metrics.map((metric, i) => (
                    <Badge key={i} variant="outline">
                      {metric}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
      {showLink && (
        <div className="mt-10 text-center">
          <Link href="/cases" className="inline-flex items-center text-sm font-medium text-foreground hover:underline">
            Все кейсы
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      )}
    </Section>
  )
}
