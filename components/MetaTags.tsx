import Head from "next/head"
import { siteDescription } from "../config"
import { useRouter } from "next/router"

const MetaTags = ({
  title,
  description,
}: {
  title?: string
  description?: string
}) => {
  const { asPath } = useRouter()

  return (
    <Head>
      {/* generic */}
      <title key="title">
        {title
          ? `${title} | Interrobang`
          : `Interrobang | Research, design and tech for better public services`}
      </title>
      <meta
        name="title"
        content={title ? `${title} | Interrobang` : "Hi, we're Interrobang"}
      />
      <meta
        name="description"
        key="description"
        content={description || siteDescription}
      />

      {/* open graph */}
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        key="og:url"
        content={
          title
            ? `https://interrobang.coop${asPath}`
            : "https://interrobang.coop/"
        }
      />
      <meta
        property="og:title"
        key="og:title"
        content={title ? `${title} | Interrobang` : "Hi, we're Interrobang"}
      />
      <meta
        property="og:description"
        key="og:description"
        content={description || siteDescription}
      />
      <meta property="og:image" content="https://interrobang.coop/social.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="6300" />

      {/* twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        key="twitter:url"
        content={
          title
            ? `https://interrobang.coop${asPath}`
            : "https://interrobang.coop/"
        }
      />
      <meta
        property="twitter:title"
        key="twitter:title"
        content={title ? `${title} | Interrobang` : "Hi, we're Interrobang"}
      />
      <meta
        property="twitter:description"
        key="twitter:description"
        content={description || siteDescription}
      />
      <meta
        property="twitter:image"
        content="https://interrobang.coop/social.jpg"
      />
    </Head>
  )
}

export default MetaTags
