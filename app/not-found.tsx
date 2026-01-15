import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/sections/section"
import { ArrowLeft } from "lucide-react"

export default function NotFound() {
  return (
    <Section>
      <div className="mx-auto max-w-md text-center">
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-foreground">Страница не найдена</h2>
        <p className="mt-4 text-muted-foreground">Запрашиваемая страница не существует или была перемещена.</p>
        <div className="mt-8">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              На главную
            </Link>
          </Button>
        </div>
      </div>
    </Section>
  )
}
