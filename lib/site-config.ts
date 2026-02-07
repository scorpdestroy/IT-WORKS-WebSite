// All domain, contact, and social values should be configured via environment variables.
// Only NEXT_PUBLIC_* vars are used here because this config is imported by client components too.

const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  canonicalUrl: process.env.NEXT_PUBLIC_CANONICAL_URL,
  siteName: process.env.NEXT_PUBLIC_SITE_NAME,
  siteTagline: process.env.NEXT_PUBLIC_SITE_TAGLINE,

  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  contactPrivacyEmail: process.env.NEXT_PUBLIC_CONTACT_PRIVACY_EMAIL,
  contactPhone: process.env.NEXT_PUBLIC_CONTACT_PHONE,
  contactPhoneRaw: process.env.NEXT_PUBLIC_CONTACT_PHONE_RAW,
  telegramHandle: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM,
  telegramUrl: process.env.NEXT_PUBLIC_CONTACT_TELEGRAM_URL,

  whatsappUrl: process.env.NEXT_PUBLIC_CONTACT_WHATSAPP_URL,
  vkUrl: process.env.NEXT_PUBLIC_CONTACT_VK_URL,
  linkedinUrl: process.env.NEXT_PUBLIC_CONTACT_LINKEDIN_URL,
  youtubeUrl: process.env.NEXT_PUBLIC_CONTACT_YOUTUBE_URL,
  githubUrl: process.env.NEXT_PUBLIC_CONTACT_GITHUB_URL,

  contactCity: process.env.NEXT_PUBLIC_CONTACT_CITY,
  contactCountry: process.env.NEXT_PUBLIC_CONTACT_COUNTRY,
  contactRegion: process.env.NEXT_PUBLIC_CONTACT_REGION,
  contactAddress: process.env.NEXT_PUBLIC_CONTACT_ADDRESS,
  contactWorkHours: process.env.NEXT_PUBLIC_CONTACT_WORK_HOURS,

  legalName: process.env.NEXT_PUBLIC_COMPANY_LEGAL_NAME,
  shortName: process.env.NEXT_PUBLIC_COMPANY_SHORT_NAME,
  inn: process.env.NEXT_PUBLIC_COMPANY_INN,
  kpp: process.env.NEXT_PUBLIC_COMPANY_KPP,
  ogrn: process.env.NEXT_PUBLIC_COMPANY_OGRN,
  ceoName: process.env.NEXT_PUBLIC_COMPANY_CEO_NAME,
  legalAddress: process.env.NEXT_PUBLIC_COMPANY_LEGAL_ADDRESS,
  postalAddress: process.env.NEXT_PUBLIC_COMPANY_POSTAL_ADDRESS,

  routePrivacy: process.env.NEXT_PUBLIC_ROUTE_PRIVACY,
  routeDataProcessing: process.env.NEXT_PUBLIC_ROUTE_DATA_PROCESSING,

  defaultOgImage: process.env.NEXT_PUBLIC_DEFAULT_OG_IMAGE,
  faviconPath: process.env.NEXT_PUBLIC_FAVICON_PATH,
} as const

const fallbackSiteUrl = "https://it-works.su"

export const siteConfig = {
  // URLs
  url: env.siteUrl || fallbackSiteUrl,
  canonicalUrl: env.canonicalUrl || env.siteUrl || fallbackSiteUrl,

  // Brand
  name: env.siteName || "IT Works",
  tagline: env.siteTagline || "B2B консалтинг для России и СНГ",

  // Company / legal
  legalName: env.legalName || 'ООО "АйТи Воркс"',
  shortName: env.shortName || env.legalName || 'ООО "АйТи Воркс"',
  inn: env.inn || "7714484889",
  kpp: env.kpp || "771401001",
  ogrn: env.ogrn || "0000000000000",
  ceoName: env.ceoName || "",
  legalAddress: env.legalAddress || "",
  postalAddress: env.postalAddress || "",

  // Contacts
  email: env.contactEmail || "it.works24@yandex.ru",
  privacyEmail: env.contactPrivacyEmail || env.contactEmail || "it.works24@yandex.ru",
  phone: env.contactPhone || "+7 (962) 138-07-67",
  phoneRaw: env.contactPhoneRaw || "+79621380767",
  telegram: env.telegramHandle || "@itworks_support_bot",
  telegramUrl: env.telegramUrl || "https://t.me/itworks_support_bot",
  workingHours: env.contactWorkHours || "Пн–Пт 10:00–19:00 (МСК)",

  // Address / geography
  city: env.contactCity || "Москва",
  country: env.contactCountry || "Россия",
  region: env.contactRegion || "Россия / СНГ",
  address: env.contactAddress || "2-й Хорошевский пр, д. 7, стр. 14",

  // Routes
  routes: {
    privacy: env.routePrivacy || "/privacy",
    dataProcessing: env.routeDataProcessing || "/data-processing",
  },

  // Social/external links
  social: {
    telegram: env.telegramUrl || "https://t.me/itworks_support_bot",
    whatsapp: env.whatsappUrl || "",
    vk: env.vkUrl || "",
    linkedin: env.linkedinUrl || "",
    youtube: env.youtubeUrl || "",
    github: env.githubUrl || "",
  },

  // SEO assets
  defaultOgImage: env.defaultOgImage || "/og/cover.png",
  faviconPath: env.faviconPath || "/favicon.ico",

  // Locale settings
  locale: "ru_RU",
  language: "ru",

  // Areas served
  areasServed: ["RU", "BY", "KZ"],
} as const

export type SiteConfig = typeof siteConfig
