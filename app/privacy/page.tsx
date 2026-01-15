import type { Metadata } from "next"
import { Section } from "@/components/sections/section"

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика конфиденциальности IT Works. Информация о сборе, обработке и защите персональных данных.",
}

export default function PrivacyPage() {
  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-8">Политика конфиденциальности</h1>

        <div className="prose prose-lg max-w-none text-muted-foreground prose-headings:text-foreground">
          <p className="text-sm text-muted-foreground mb-8">Последнее обновление: 1 января 2025 года</p>

          <h2 id="general" className="text-xl font-semibold text-foreground mt-8 mb-4">
            1. Общие положения
          </h2>
          <p>
            Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки и защиты
            персональных данных пользователей сайта itworks.consulting (далее — «Сайт»), принадлежащего IT Works (далее
            — «Компания», «мы»).
          </p>
          <p>
            Используя Сайт и предоставляя свои персональные данные, вы соглашаетесь с условиями настоящей Политики. Если
            вы не согласны с условиями Политики, пожалуйста, не используйте Сайт.
          </p>

          <h2 id="data-collected" className="text-xl font-semibold text-foreground mt-8 mb-4">
            2. Какие данные мы собираем
          </h2>
          <p>Мы можем собирать следующие категории персональных данных:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Контактные данные:</strong> имя, адрес электронной почты, номер телефона, название компании
            </li>
            <li>
              <strong>Данные обращений:</strong> содержание сообщений, отправленных через форму обратной связи
            </li>
            <li>
              <strong>Технические данные:</strong> IP-адрес, тип браузера, информация об устройстве, данные о посещении
              страниц сайта
            </li>
            <li>
              <strong>Файлы cookie:</strong> данные, собираемые с помощью файлов cookie и аналогичных технологий
            </li>
          </ul>

          <h2 id="purpose" className="text-xl font-semibold text-foreground mt-8 mb-4">
            3. Цели обработки данных
          </h2>
          <p>Мы обрабатываем персональные данные в следующих целях:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Обработка заявок и обращений пользователей</li>
            <li>Предоставление консультаций и информации об услугах</li>
            <li>Улучшение качества услуг и работы Сайта</li>
            <li>Аналитика использования Сайта</li>
            <li>Выполнение требований законодательства</li>
          </ul>

          <h2 id="legal-basis" className="text-xl font-semibold text-foreground mt-8 mb-4">
            4. Правовые основания обработки
          </h2>
          <p>Обработка персональных данных осуществляется на основании:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Согласия субъекта персональных данных</li>
            <li>Необходимости исполнения договора или принятия мер до заключения договора</li>
            <li>Законных интересов Компании (улучшение услуг, безопасность)</li>
            <li>Выполнения правовых обязательств</li>
          </ul>

          <h2 id="storage" className="text-xl font-semibold text-foreground mt-8 mb-4">
            5. Хранение и защита данных
          </h2>
          <p>
            Персональные данные хранятся на серверах, расположенных на территории Российской Федерации. Мы применяем
            организационные и технические меры для защиты данных от несанкционированного доступа, изменения, раскрытия
            или уничтожения.
          </p>
          <p>
            Срок хранения персональных данных определяется целями обработки и требованиями законодательства. После
            достижения целей обработки или по запросу субъекта данные удаляются.
          </p>

          <h2 id="third-parties" className="text-xl font-semibold text-foreground mt-8 mb-4">
            6. Передача данных третьим лицам
          </h2>
          <p>Мы не продаём и не передаём персональные данные третьим лицам, за исключением случаев:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Когда это необходимо для оказания услуг (хостинг-провайдеры, сервисы аналитики)</li>
            <li>По требованию уполномоченных государственных органов</li>
            <li>С вашего явного согласия</li>
          </ul>

          <h2 id="rights" className="text-xl font-semibold text-foreground mt-8 mb-4">
            7. Права субъектов данных
          </h2>
          <p>Вы имеете право:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Получить информацию об обрабатываемых данных</li>
            <li>Требовать уточнения, блокирования или удаления данных</li>
            <li>Отозвать согласие на обработку данных</li>
            <li>Подать жалобу в уполномоченный орган по защите прав субъектов персональных данных</li>
          </ul>
          <p>
            Для реализации своих прав обратитесь к нам по электронной почте:{" "}
            <a href="mailto:privacy@itworks.consulting" className="text-foreground underline">
              privacy@itworks.consulting
            </a>
          </p>

          <h2 id="changes" className="text-xl font-semibold text-foreground mt-8 mb-4">
            8. Изменения в Политике
          </h2>
          <p>
            Мы оставляем за собой право вносить изменения в настоящую Политику. Актуальная версия всегда доступна на
            данной странице с указанием даты последнего обновления.
          </p>

          <h2 id="contacts" className="text-xl font-semibold text-foreground mt-8 mb-4">
            9. Контактная информация
          </h2>
          <p>По вопросам, связанным с обработкой персональных данных, обращайтесь:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Email:{" "}
              <a href="mailto:privacy@itworks.consulting" className="text-foreground underline">
                privacy@itworks.consulting
              </a>
            </li>
            <li>Телефон: +7 (495) 123-45-67</li>
          </ul>
        </div>
      </article>
    </Section>
  )
}
