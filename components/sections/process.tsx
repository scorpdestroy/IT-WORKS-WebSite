import { Section } from "./section"

interface ProcessStep {
  number: string
  title: string
  description: string
}

interface ProcessProps {
  title?: string
  description?: string
  steps: ProcessStep[]
}

export function Process({ title, description, steps }: ProcessProps) {
  return (
    <Section title={title} description={description} className="bg-muted">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-primary/20">{step.number}</span>
              <h3 className="mt-2 text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
