import type { Metadata } from "next"
import { Section } from "@/components/sections/section"

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных",
  description: "Условия согласия на обработку персональных данных IT Works.",
}

export default function DataProcessingPage() {
  return (
    <Section>
      <article className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground mb-8">Согласие на обработку персональных данных</h1>

        <div className="prose prose-lg max-w-none text-muted-foreground prose-headings:text-foreground">
          <p className="text-sm text-muted-foreground mb-8">Последнее обновление: 1 января 2025 года</p>

          <h2 id="general" className="text-xl font-semibold text-foreground mt-8 mb-4">
            1. Общие положения
          </h2>
          <p>
            Настоящим я даю своё согласие IT Works (далее — «Оператор») на обработку моих персональных данных в
            соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ «О персональных данных».
          </p>

          <h2 id="data-list" className="text-xl font-semibold text-foreground mt-8 mb-4">
            2. Перечень обрабатываемых данных
          </h2>
          <p>Согласие даётся на обработку следующих персональных данных:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Фамилия, имя, отчество</li>
            <li>Адрес электронной почты</li>
            <li>Номер контактного телефона</li>
            <li>Наименование организации (при наличии)</li>
            <li>Должность (при наличии)</li>
            <li>Содержание обращения/сообщения</li>
          </ul>

          <h2 id="purpose" className="text-xl font-semibold text-foreground mt-8 mb-4">
            3. Цели обработки данных
          </h2>
          <p>Персональные данные обрабатываются в следующих целях:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Обработка входящих заявок и обращений</li>
            <li>Связь с пользователем для уточнения информации и предоставления консультаций</li>
            <li>Заключение и исполнение договоров на оказание услуг</li>
            <li>Информирование об услугах Оператора (при наличии согласия)</li>
            <li>Улучшение качества обслуживания</li>
          </ul>

          <h2 id="actions" className="text-xl font-semibold text-foreground mt-8 mb-4">
            4. Действия с персональными данными
          </h2>
          <p>
            Согласие даётся на совершение следующих действий с персональными данными: сбор, запись, систематизация,
            накопление, хранение, уточнение (обновление, изменение), извлечение, использование, передача
            (предоставление, доступ), блокирование, удаление, уничтожение.
          </p>
          <p>Обработка осуществляется как с использованием средств автоматизации, так и без их использования.</p>

          <h2 id="term" className="text-xl font-semibold text-foreground mt-8 mb-4">
            5. Срок действия согласия
          </h2>
          <p>
            Согласие действует до момента его отзыва путём направления письменного уведомления на адрес электронной
            почты Оператора:{" "}
            <a href="mailto:privacy@itworks.consulting" className="text-foreground underline">
              privacy@itworks.consulting
            </a>
          </p>
          <p>
            При отзыве согласия Оператор прекращает обработку персональных данных и уничтожает их в течение 30 дней с
            момента получения отзыва, если иное не предусмотрено законодательством.
          </p>

          <h2 id="confirmation" className="text-xl font-semibold text-foreground mt-8 mb-4">
            6. Подтверждение согласия
          </h2>
          <p>
            Заполняя форму обратной связи на сайте и отмечая чекбокс «Я согласен на обработку персональных данных», вы
            подтверждаете, что:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ознакомились с настоящим документом</li>
            <li>Даёте добровольное согласие на обработку ваших персональных данных на указанных условиях</li>
            <li>Понимаете, что можете отозвать согласие в любой момент</li>
          </ul>

          <h2 id="operator" className="text-xl font-semibold text-foreground mt-8 mb-4">
            7. Сведения об Операторе
          </h2>
          <p>
            <strong>Наименование:</strong> IT Works
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:privacy@itworks.consulting" className="text-foreground underline">
              privacy@itworks.consulting
            </a>
            <br />
            <strong>Телефон:</strong> +7 (495) 123-45-67
          </p>
        </div>
      </article>
    </Section>
  )
}
