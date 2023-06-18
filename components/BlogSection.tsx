import useSWR from "swr"
import { blogUrl } from "../config"
import Section from "./Section"
import Link from "next/link"

const BlogSection = () => {
  const { data, error } = useSWR(`/api/blog`)

  return (
    <Section
      className="section--no-top-padding"
      title={<h2>Blog</h2>}
      actions={<Link href={blogUrl}>See all</Link>}
    >
      <ul className="blog-grid">
        {data?.items?.map(item => (
          <li key={item.id}>
            <Link href={item.link}>
              <h3>{item.title}</h3>
            </Link>
            <p>{new Date(item.published).toDateString()}</p>
            <p dangerouslySetInnerHTML={{ __html: item.description }}></p>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default BlogSection
