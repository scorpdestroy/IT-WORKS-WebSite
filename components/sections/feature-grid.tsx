import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "./section"
import type { LucideIcon } from "lucide-react"

interface Feature {
  title: string
  description: string
  icon?: LucideIcon
}

interface FeatureGridProps {
  title?: string
  description?: string
  features: Feature[]
  columns?: 2 | 3 | 4
}

export function FeatureGrid({ title, description, features, columns = 3 }: FeatureGridProps) {
  const gridCols = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <Section title={title} description={description}>
      <div className={`grid gap-6 ${gridCols[columns]}`}>
        {features.map((feature, index) => (
          <Card key={index} className="border-border bg-card">
            <CardHeader>
              {feature.icon && <feature.icon className="h-10 w-10 text-primary mb-2" />}
              <CardTitle className="text-lg">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
