// All domain, contact, and social values should be configured via environment variables

export const siteConfig = {
  // Site URL - use env variable or fallback to placeholder
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://itworks.consulting",

  // Company info
  name: "IT Works",
  legalName: process.env.NEXT_PUBLIC_COMPANY_LEGAL_NAME || "ИП Иванов И.И.",
  inn: process.env.NEXT_PUBLIC_COMPANY_INN || "000000000000",

  // Contact info - use env variables
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "info@itworks.consulting",
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || "+7 (495) 123-45-67",
  phoneRaw: process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW || "+74951234567",
  telegram: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM || "@itworks_consulting",
  telegramUrl: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM_URL || "https://t.me/itworks_consulting",

  // Working hours
  workingHours: "Пн–Пт: 10:00–19:00 (МСК)",

  // Social/external links
  social: {
    telegram: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM_URL || "https://t.me/itworks_consulting",
  },

  // Locale settings
  locale: "ru_RU",
  language: "ru",

  // Areas served
  areasServed: ["RU", "BY", "KZ"],
} as const

export type SiteConfig = typeof siteConfig
