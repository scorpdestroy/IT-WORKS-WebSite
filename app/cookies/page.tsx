import type { Metadata } from "next"
import { Section } from "@/components/sections/section"
import { siteConfig } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "Политика использования файлов cookie",
  description: `Информация о том, как ${siteConfig.name} использует файлы cookie и аналогичные технологии.`,
}

export default function CookiesPage() {
  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-8">Политика использования файлов cookie</h1>

        <div className="prose prose-lg max-w-none text-muted-foreground prose-headings:text-foreground">
          <p className="text-sm text-muted-foreground mb-8">Последнее обновление: 1 января 2025 года</p>

          <h2 id="what-are-cookies" className="text-xl font-semibold text-foreground mt-8 mb-4">
            1. Что такое файлы cookie
          </h2>
          <p>
            Файлы cookie - это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении
            веб-сайтов. Они позволяют сайту запоминать ваши предпочтения и действия (например, данные для входа, язык,
            размер шрифта) в течение определённого периода времени.
          </p>

          <h2 id="types" className="text-xl font-semibold text-foreground mt-8 mb-4">
            2. Какие файлы cookie мы используем
          </h2>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Необходимые файлы cookie</h3>
          <p>
            Эти файлы cookie необходимы для функционирования сайта. Они позволяют использовать основные функции, такие
            как навигация по страницам и доступ к защищённым областям сайта.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Аналитические файлы cookie</h3>
          <p>
            Мы используем аналитические инструменты (например, Vercel Analytics) для сбора обезличенной информации о
            том, как посетители используют сайт. Это помогает нам улучшать работу сайта.
          </p>

          <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Функциональные файлы cookie</h3>
          <p>
            Эти файлы cookie позволяют сайту запоминать сделанный вами выбор (например, предпочтения по отображению) и
            предоставлять улучшенные функции.
          </p>

          <h2 id="purpose" className="text-xl font-semibold text-foreground mt-8 mb-4">
            3. Цели использования cookie
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Обеспечение корректной работы сайта</li>
            <li>Анализ посещаемости и поведения пользователей</li>
            <li>Улучшение пользовательского опыта</li>
            <li>Сохранение предпочтений пользователей</li>
          </ul>

          <h2 id="management" className="text-xl font-semibold text-foreground mt-8 mb-4">
            4. Управление файлами cookie
          </h2>
          <p>Вы можете управлять файлами cookie через настройки вашего браузера. Большинство браузеров позволяют:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Просматривать установленные файлы cookie</li>
            <li>Удалять отдельные или все файлы cookie</li>
            <li>Блокировать файлы cookie от определённых сайтов</li>
            <li>Блокировать все файлы cookie</li>
            <li>Удалять все файлы cookie при закрытии браузера</li>
          </ul>
          <p>Обратите внимание: блокировка файлов cookie может повлиять на функциональность сайта.</p>

          <h2 id="third-party" className="text-xl font-semibold text-foreground mt-8 mb-4">
            5. Файлы cookie третьих сторон
          </h2>
          <p>
            На нашем сайте могут использоваться сервисы третьих сторон, которые устанавливают собственные файлы cookie:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Vercel Analytics</strong> - для анализа посещаемости сайта
            </li>
          </ul>
          <p>Использование данных этими сервисами регулируется их собственными политиками конфиденциальности.</p>

          <h2 id="changes" className="text-xl font-semibold text-foreground mt-8 mb-4">
            6. Изменения в политике
          </h2>
          <p>Мы можем обновлять настоящую политику. Актуальная версия всегда доступна на данной странице.</p>

          <h2 id="contacts" className="text-xl font-semibold text-foreground mt-8 mb-4">
            7. Контакты
          </h2>
          <p>
            По вопросам использования файлов cookie обращайтесь:{" "}
            <a href={`mailto:${siteConfig.privacyEmail}`} className="text-foreground underline">
              {siteConfig.privacyEmail}
            </a>
          </p>
        </div>
      </article>
    </Section>
  )
}
