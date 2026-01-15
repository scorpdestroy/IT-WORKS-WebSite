"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { Loader2, CheckCircle, AlertCircle } from "lucide-react"

interface FormState {
  status: "idle" | "loading" | "success" | "error"
  message?: string
}

export function LeadForm() {
  const [formState, setFormState] = useState<FormState>({ status: "idle" })
  const [consent, setConsent] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState({ status: "loading" })

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      company: formData.get("company") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
      website: formData.get("website") as string, // honeypot
    }

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.ok) {
        setFormState({
          status: "success",
          message: "Спасибо! Мы свяжемся с вами в ближайшее время.",
        })
      } else {
        setFormState({
          status: "error",
          message: result.error || "Произошла ошибка. Попробуйте позже.",
        })
      }
    } catch {
      setFormState({
        status: "error",
        message: "Произошла ошибка. Попробуйте позже.",
      })
    }
  }

  if (formState.status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 text-xl font-semibold text-foreground">Заявка отправлена</h3>
        <p className="mt-2 text-muted-foreground">{formState.message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-8" id="form">
      <div className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="name">Имя *</Label>
            <Input id="name" name="name" type="text" required placeholder="Иван Иванов" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Компания</Label>
            <Input id="company" name="company" type="text" placeholder="ООО «Компания»" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required placeholder="ivan@company.ru" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Сообщение *</Label>
          <Textarea id="message" name="message" required rows={4} placeholder="Опишите вашу задачу или вопрос" />
        </div>

        {/* Honeypot field - hidden from users */}
        <div className="hidden" aria-hidden="true">
          <Label htmlFor="website">Website</Label>
          <Input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="flex items-start space-x-3">
          <Checkbox
            id="consent"
            checked={consent}
            onCheckedChange={(checked) => setConsent(checked as boolean)}
            required
          />
          <Label htmlFor="consent" className="text-sm text-muted-foreground">
            Я согласен на{" "}
            <Link href="/data-processing" className="underline hover:text-foreground">
              обработку персональных данных
            </Link>
          </Label>
        </div>

        {formState.status === "error" && (
          <div className="flex items-center gap-2 rounded-lg bg-destructive/10 p-3 text-sm text-destructive">
            <AlertCircle className="h-4 w-4" />
            {formState.message}
          </div>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={!consent || formState.status === "loading"}>
          {formState.status === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Отправка...
            </>
          ) : (
            "Отправить заявку"
          )}
        </Button>
      </div>
    </form>
  )
}
