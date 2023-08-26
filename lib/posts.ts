import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import { remark } from "remark"
import remarkRehype from "remark-rehype/lib"
import rehypeSlug from "rehype-slug"
import { unified } from "unified"
import remarkParse from "remark-parse"
import rehypeStringify from "rehype-stringify"
import rehypeToc from "@jsdevtools/rehype-toc"
import { template, html } from "rehype-template"

export default async function markdownToHtml(markdown: string) {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(template, {
      template: x =>
        html`<article className="flexible-content__article">${x}</article>`,
    })
    .use(rehypeSlug)
    .use(rehypeToc, {
      headings: ["h1", "h2"],
      position: "beforebegin",
      cssClasses: { toc: "flexible-content__toc" },
    })
    .use(rehypeStringify)

  const result = await processor.process(markdown)
  return result.toString()
}

export const markdownToHtmlSync = (markdown: string) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(template, {
      template: x =>
        html`<article className="flexible-content__article">${x}</article>`,
    })
    .use(rehypeSlug)
    .use(rehypeStringify)

  const result = processor.processSync(markdown)
  return result.toString()
}

const postsDir = join(process.cwd(), "content")

export function getPostSlugs() {
  return fs.readdirSync(postsDir)
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postsDir, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { content, data } = matter(fileContents)

  return {
    slug: realSlug,
    content: content,
    ...data,
  }
}

export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs.map(slug => getPostBySlug(slug))

  return posts
}
