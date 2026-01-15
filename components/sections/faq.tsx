"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Section } from "./section"

interface FaqItem {
  question: string
  answer: string
}

interface FaqProps {
  title?: string
  description?: string
  items: FaqItem[]
}

export function Faq({ title = "Часто задаваемые вопросы", description, items }: FaqProps) {
  return (
    <Section title={title} description={description}>
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  )
}
