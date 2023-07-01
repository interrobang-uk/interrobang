import { GetStaticPaths, GetStaticProps } from "next"
import PageHeader from "../components/PageHeader"
import Section from "../components/Section"
import markdownToHtml, { getAllPosts, getPostBySlug } from "../lib/posts"
import NewsletterSection from "../components/NewsletterSection"

const GenericPage = ({ title, content, ...props }) => (
  <>
    <PageHeader className="page-header--full-width">{title}</PageHeader>
    <Section className="section--no-top-padding">
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="flexible-content"
      ></div>
    </Section>
    <NewsletterSection className="section--no-top-padding" />
  </>
)

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug)
  const content = await markdownToHtml(post.content || "")

  return {
    props: {
      ...post,
      content,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()

  return {
    paths: posts.map(post => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

export default GenericPage
