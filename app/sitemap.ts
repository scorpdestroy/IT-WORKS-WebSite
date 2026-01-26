import type { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/blog"
import { siteConfig } from "@/lib/site-config"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url

  // Static pages
  const staticPages = [
    "",
    "/pyrus",
    "/services",
    "/services/financial-consulting",
    "/services/automation",
    "/cases",
    "/about",
    "/contacts",
    "/blog",
    "/privacy",
    "/data-processing",
    "/cookies",
  ]

  const staticEntries = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "" ? 1 : path.startsWith("/services") ? 0.9 : 0.8,
  }))

  // Blog posts
  const posts = getAllPosts()
  const blogEntries = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticEntries, ...blogEntries]
}
