import Head from "next/head"

const title = "VouchSafe | Digital identity for everyone"
const description =
  "VouchSafe lets you provide vital services to the people who need them most"
const socialImg = "https://interrobang.coop/vs-social.jpg"

// provide head tags for vouchsafe landing page
const Layout = ({ children }) => (
  <>
    <Head>
      <title key="title">{title}</title>
      <meta name="title" content={title} />
      <meta name="description" key="description" content={description} />

      {/* open graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" key="og:url" content={title} />
      <meta property="og:title" key="og:title" content={title} />
      <meta
        property="og:description"
        key="og:description"
        content={description}
      />
      <meta property="og:image" content={socialImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="6300" />

      {/* twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        key="twitter:url"
        content="https://interrobang.coop/vouchsafe"
      />
      <meta property="twitter:title" key="twitter:title" content={title} />
      <meta
        property="twitter:description"
        key="twitter:description"
        content={description}
      />
      <meta property="twitter:image" content={socialImg} />

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

      <link rel="icon" href="/vs-favicon.png" />
      <meta charSet="utf-8" />
    </Head>

    {children}
  </>
)

export default Layout
