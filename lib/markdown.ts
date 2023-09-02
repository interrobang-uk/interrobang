import remarkRehype from "remark-rehype/lib"
import rehypeSlug from "rehype-slug"
import { unified } from "unified"
import remarkParse from "remark-parse"
import rehypeStringify from "rehype-stringify"
import rehypeToc from "@jsdevtools/rehype-toc"
import { template, html } from "rehype-template"
import { micromark } from "micromark"

export const markdownToHtmlSync = (
  markdown: string,
  includeToc: boolean = false
) => {
  const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(template, {
      template: x =>
        html`<article className="flexible-content__article">${x}</article>`,
    })
    .use(rehypeSlug)

  if (includeToc)
    processor.use(rehypeToc, {
      headings: ["h1", "h2"],
      position: "beforebegin",
      cssClasses: { toc: "flexible-content__toc" },
    })

  const result = processor.use(rehypeStringify).processSync(markdown)
  return result.toString()
}
