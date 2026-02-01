import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { Section } from "@/components/sections/section"
import { LeadForm } from "@/components/forms/lead-form"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, Send, Clock } from "lucide-react"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Контакты",
  description: "Свяжитесь с нами для обсуждения вашего проекта. Email, телефон, Telegram. Отвечаем в течение дня.",
  openGraph: {
    title: `Контакты | ${siteConfig.name}`,
    description: "Свяжитесь с нами для обсуждения проекта финансового консалтинга или автоматизации.",
  },
}

const contacts = [
  {
    icon: Mail,
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "Для деловой переписки и документов",
  },
  {
    icon: Phone,
    title: "Телефон",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phoneRaw}`,
    description: siteConfig.workingHours,
  },
  {
    icon: Send,
    title: "Telegram",
    value: siteConfig.telegram,
    href: siteConfig.telegramUrl,
    description: "Быстрые вопросы и оперативная связь",
  },
]

export default function ContactsPage() {
  return (
    <>
      <Hero
        title="Обсудим вашу задачу"
        description="Расскажите о вашей ситуации - мы предложим варианты решения и оценим сроки"
        showCta={false}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Cards */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Контактная информация</h2>

            <div className="grid gap-4">
              {contacts.map((contact, index) => (
                <Card key={index} className="border-border">
                  <CardContent className="flex items-start gap-4 pt-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                      <contact.icon className="h-5 w-5 text-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{contact.title}</p>
                      <a href={contact.href} className="text-foreground hover:underline">
                        {contact.value}
                      </a>
                      <p className="mt-1 text-sm text-muted-foreground">{contact.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="border-border bg-muted">
              <CardContent className="flex items-start gap-4 pt-6">
                <Clock className="h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <p className="font-semibold text-foreground">Время ответа</p>
                  <p className="text-sm text-muted-foreground">
                    Отвечаем на заявки в течение рабочего дня. В срочных случаях - пишите в Telegram.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Lead Form */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-6">Оставить заявку</h2>
            <LeadForm />
          </div>
        </div>
      </Section>
    </>
  )
}
