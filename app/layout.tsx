import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { siteConfig } from "@/lib/site-config"
import "./globals.css"

const _inter = Inter({ subsets: ["latin", "cyrillic"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — Финансовый консалтинг и автоматизация`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Профессиональный финансовый консалтинг и автоматизация бизнес-процессов для компаний России и СНГ. Бюджетирование, управленческий учет, финансовые модели.",
  generator: "v0.app",
  keywords: [
    "финансовый консалтинг",
    "автоматизация бизнес-процессов",
    "управленческий учет",
    "бюджетирование",
    "финансовые модели",
    "CFO",
    "Россия",
    "СНГ",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — Финансовый консалтинг и автоматизация`,
    description: "Профессиональный финансовый консалтинг и автоматизация бизнес-процессов для компаний России и СНГ.",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a1a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang={siteConfig.language}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        {/* Analytics removed - add Umami/Matomo for VPS deployment */}
      </body>
    </html>
  )
}
