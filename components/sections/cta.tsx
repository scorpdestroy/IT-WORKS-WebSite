import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface CtaProps {
  title?: string
  description?: string
  buttonText?: string
  buttonHref?: string
}

export function Cta({
  title = "Готовы обсудить ваш проект?",
  description = "Свяжитесь с нами, чтобы узнать, как мы можем помочь вашему бизнесу.",
  buttonText = "Обсудить задачу",
  buttonHref = "/contacts#form",
}: CtaProps) {
  return (
    <section className="bg-primary py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-primary-foreground/80">{description}</p>
        <div className="mt-10">
          <Button size="lg" variant="secondary" asChild>
            <Link href={buttonHref}>
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
