import Head from "next/head"
import { siteDescription } from "../config"

const MetaTags = ({ title }: { title?: string }) => {
  if (title)
    return (
      <Head>
        <title>{`${title} | Interrobang`}</title>
        <meta property="og:title" content={`${title} | Interrobang`} />
        <meta property="twitter:title" content={`${title} | Interrobang`} />
      </Head>
    )

  return (
    <Head>
      <title>
        Interrobang | Research, design and tech for better public services
      </title>
      <meta name="title" content="Hi, we're Interrobang" />
      <meta name="description" content={siteDescription} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://interrobang.coop/" />
      <meta property="og:title" content="Hi, we're Interrobang" />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content="/assets/social.jpg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://interrobang.coop/" />
      <meta property="twitter:title" content="Hi, we're Interrobang" />
      <meta property="twitter:description" content={siteDescription} />
      <meta property="twitter:image" content="/assets/social.jpg" />
    </Head>
  )
}

export default MetaTags
