import Head from "next/head"
import Layout from "../components/Layout"
import MetaTags from "../components/MetaTags"
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
      </Head>

      <MetaTags />

      <Component {...pageProps} />
      <NewsletterSection />
    </Layout>
  </SWRConfig>
)

export default App
