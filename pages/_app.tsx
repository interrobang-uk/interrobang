import Head from "next/head"
import Layout from "../components/Layout"
import "../scss/index.scss"
import { SWRConfig } from "swr"

const App = ({ Component, pageProps }) => (
  <SWRConfig value={{ fetcher: url => fetch(url).then(res => res.json()) }}>
    <Layout>
      <Head>
        <link href="/index.css" rel="stylesheet" type="text/css" />
        <meta name="viewport" content="width=device-width" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700;900&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/assets/favicon.png" />
        <meta charSet="utf-8" />

        <title>Interrobang</title>
        <meta name="title" content="Hi, we're Interrobang" />
        <meta
          name="description"
          content="We’re a studio working at the intersection of design, technology and research. If you're reading this, we'd probably like to work with you."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://interrobang.uk/" />
        <meta property="og:title" content="Hi, we're Interrobang" />
        <meta
          property="og:description"
          content="We’re a studio working at the intersection of design, technology and research. If you're reading this, we'd probably like to work with you."
        />
        <meta property="og:image" content="/assets/social.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://interrobang.uk/" />
        <meta property="twitter:title" content="Hi, we're Interrobang" />
        <meta
          property="twitter:description"
          content="We’re a studio working at the intersection of design, technology and research. If you're reading this, we'd probably like to work with you."
        />
        <meta property="twitter:image" content="/assets/social.jpg" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  </SWRConfig>
)

export default App