import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface HeroProps {
  title: string
  description: string
  showCta?: boolean
  ctaText?: string
  ctaHref?: string
  badge?: string
}

export function Hero({
  title,
  description,
  showCta = true,
  ctaText = "Обсудить задачу",
  ctaHref = "/contacts#form",
  badge,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-background py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {badge && (
            <div className="mb-6 inline-flex items-center rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground">
              {badge}
            </div>
          )}
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground lg:text-xl">{description}</p>
          {showCta && (
            <div className="mt-10">
              <Button size="lg" asChild>
                <Link href={ctaHref}>
                  {ctaText}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
