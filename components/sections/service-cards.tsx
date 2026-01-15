import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "./section"
import { ArrowRight, type LucideIcon } from "lucide-react"

interface ServiceCard {
  title: string
  description: string
  href: string
  icon?: LucideIcon
  features?: string[]
  primary?: boolean
}

interface ServiceCardsProps {
  title?: string
  description?: string
  services: ServiceCard[]
}

export function ServiceCards({ title, description, services }: ServiceCardsProps) {
  return (
    <Section title={title} description={description}>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service, index) => (
          <Card
            key={index}
            className={`border-border transition-shadow hover:shadow-lg ${
              service.primary ? "ring-2 ring-primary" : ""
            }`}
          >
            <CardHeader>
              {service.icon && <service.icon className="h-10 w-10 text-primary mb-2" />}
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{service.description}</p>
              {service.features && service.features.length > 0 && (
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-muted-foreground">
                      <span className="mr-2 h-1.5 w-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              <Button asChild variant={service.primary ? "default" : "outline"}>
                <Link href={service.href}>
                  Подробнее
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
