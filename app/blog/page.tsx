import type { Metadata } from "next"
import { Hero } from "@/components/sections/hero"
import { Section } from "@/components/sections/section"
import { getAllPosts, getAllTags } from "@/lib/blog"
import { BlogList } from "@/components/blog/blog-list"

export const metadata: Metadata = {
  title: "Блог",
  description:
    "Статьи о финансовом консалтинге, управленческом учёте, автоматизации бизнес-процессов. Практические советы и кейсы.",
  openGraph: {
    title: "Блог | IT Works",
    description: "Статьи о финансовом консалтинге и автоматизации бизнес-процессов.",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const tags = getAllTags()

  return (
    <>
      <Hero
        title="Блог"
        description="Делимся опытом в финансовом консалтинге и автоматизации. Практические советы, кейсы, методологии."
        showCta={false}
      />

      <Section>
        <BlogList posts={posts} tags={tags} />
      </Section>
    </>
  )
}
