import MetaTags from "../components/MetaTags"
import PageHeader from "../components/PageHeader"
import Section from "../components/Section"
import airtableData from "../data/airtable-content.json"
import { markdownToHtmlSync } from "../lib/markdown"

const GenericPage = ({ title, content, ...props }) => (
  <>
    <MetaTags title={title} />
    <PageHeader className="page-header--full-width">{title}</PageHeader>
    <Section className="section--no-top-padding section--no-bottom-padding">
      <div
        dangerouslySetInnerHTML={{ __html: content }}
        className="flexible-content"
      ></div>
    </Section>
  </>
)

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = airtableData.pages.find(post => post.fields.Slug === params.slug)

  return post
    ? {
        props: {
          title: post.fields.Title,
          slug: post.fields.Slug,
          content: markdownToHtmlSync(post.fields.Content || "", true),
        },
      }
    : {
        notFound: true,
      }
}

export async function getStaticPaths() {
  return {
    paths: airtableData.pages.map(post => ({
      params: {
        slug: post.fields.Slug,
      },
    })),
    fallback: false,
  }
}

export default GenericPage
