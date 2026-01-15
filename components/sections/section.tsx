import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  title?: string
  description?: string
  centered?: boolean
}

export function Section({ children, className, title, description, centered = false }: SectionProps) {
  return (
    <section className={cn("py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {(title || description) && (
          <div className={cn("mb-12", centered && "mx-auto max-w-2xl text-center")}>
            {title && <h2 className="text-3xl font-bold text-foreground sm:text-4xl">{title}</h2>}
            {description && <p className="mt-4 text-lg text-muted-foreground">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
