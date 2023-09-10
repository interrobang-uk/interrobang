const MetaTags = ({ title }) => {
  if (title)
    return (
      <>
        <title>
          Interrobang | Research, design and tech for better public services
        </title>
      </>
    )

  return (
    <>
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
    </>
  )
}

export default MetaTags
