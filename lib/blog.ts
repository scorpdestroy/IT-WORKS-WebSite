import fs from "fs"
import path from "path"
import matter from "gray-matter"

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime: string
  author: string
  content: string
}

const postsDirectory = path.join(process.cwd(), "content/blog")

export function getAllPosts(): BlogPost[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPosts = fileNames
    .filter((fileName) => fileName.endsWith(".md") || fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "")
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, "utf8")
      const { data, content } = matter(fileContents)

      return {
        slug,
        title: data.title || "Без названия",
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || "",
        tags: data.tags || [],
        readingTime: data.readingTime || calculateReadingTime(content),
        author: data.author || "IT Works",
        content,
      }
    })

  return allPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts()
  return posts.find((post) => post.slug === slug) || null
}

export function getAllTags(): string[] {
  const posts = getAllPosts()
  const tags = new Set<string>()
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag))
  })
  return Array.from(tags).sort()
}

export function getPostsByTag(tag: string): BlogPost[] {
  const posts = getAllPosts()
  return posts.filter((post) => post.tags.includes(tag))
}

export function getRelatedPosts(currentSlug: string, limit = 3): BlogPost[] {
  const posts = getAllPosts()
  const currentPost = posts.find((post) => post.slug === currentSlug)

  if (!currentPost) return posts.slice(0, limit)

  // Find posts with matching tags
  const related = posts
    .filter((post) => post.slug !== currentSlug)
    .map((post) => ({
      post,
      matchCount: post.tags.filter((tag) => currentPost.tags.includes(tag)).length,
    }))
    .sort((a, b) => b.matchCount - a.matchCount)
    .slice(0, limit)
    .map(({ post }) => post)

  return related
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} мин`
}
