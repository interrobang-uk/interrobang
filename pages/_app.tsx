import Head from "next/head"
import Layout from "../components/Layout"
import "../scss/index.scss"
import { SWRConfig } from "swr"
import NewsletterSection from "../components/NewsletterSection"

const App = ({ Component, pageProps }) => (
  <SWRConfig value={{ fetcher: url => fetch(url).then(res => res.json()) }}>
    <Layout>
      <Head>
        <meta name="viewport" content="width=device-width" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&family=Koulen&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon.png" />
        <meta charSet="utf-8" />

        <title>
          Interrobang | Research, design and tech for better public services
        </title>
        <meta name="title" content="Hi, we're Interrobang" />
        <meta
          name="description"
          content="We’re a worker-owned digital outcomes studio working for community resilience and more robust public services."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://interrobang.coop/" />
        <meta property="og:title" content="Hi, we're Interrobang" />
        <meta
          property="og:description"
          content="We’re a worker-owned digital outcomes studio working for community resilience and more robust public services."
        />
        <meta property="og:image" content="/assets/social.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://interrobang.coop/" />
        <meta property="twitter:title" content="Hi, we're Interrobang" />
        <meta
          property="twitter:description"
          content="We’re a worker-owned digital outcomes studio working for community resilience and more robust public services."
        />
        <meta property="twitter:image" content="/assets/social.jpg" />
      </Head>

      <Component {...pageProps} />
      <NewsletterSection />
    </Layout>
  </SWRConfig>
)

export default App
