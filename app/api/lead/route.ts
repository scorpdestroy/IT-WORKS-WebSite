import { type NextRequest, NextResponse } from "next/server"
import { rateLimit } from "@/lib/rate-limit"

interface LeadData {
  name: string
  company?: string
  email: string
  message: string
  website?: string // honeypot
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown"
    const { success, remaining } = rateLimit(ip)

    if (!success) {
      return NextResponse.json({ ok: false, error: "Слишком много запросов. Попробуйте позже." }, { status: 429 })
    }

    const data: LeadData = await request.json()

    // Honeypot check - if website field is filled, pretend success
    if (data.website && data.website.length > 0) {
      console.log("[SPAM] Honeypot triggered:", data)
      return NextResponse.json({ ok: true })
    }

    // Validation
    if (!data.name || data.name.trim().length < 2) {
      return NextResponse.json({ ok: false, error: "Пожалуйста, укажите имя." }, { status: 400 })
    }

    if (!data.email || !validateEmail(data.email)) {
      return NextResponse.json({ ok: false, error: "Пожалуйста, укажите корректный email." }, { status: 400 })
    }

    if (!data.message || data.message.trim().length < 10) {
      return NextResponse.json({ ok: false, error: "Сообщение слишком короткое." }, { status: 400 })
    }

    // TODO: Replace with SMTP/DB storage
    // For now, log the lead
    console.log("[LEAD]", {
      timestamp: new Date().toISOString(),
      name: data.name,
      company: data.company || "—",
      email: data.email,
      message: data.message,
      ip,
      remaining,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false, error: "Произошла ошибка сервера." }, { status: 500 })
  }
}
