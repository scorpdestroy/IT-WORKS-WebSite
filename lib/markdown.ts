import { remark } from "remark"
import html from "remark-html"
import remarkGfm from "remark-gfm"

export async function markdownToHtml(markdown: string): Promise<string> {
  // Remove the first H1 heading to avoid duplicate H1 on page
  const contentWithoutFirstH1 = markdown.replace(/^#\s+.+\n+/, "")

  const result = await remark().use(remarkGfm).use(html, { sanitize: false }).process(contentWithoutFirstH1)

  return result.toString()
}
