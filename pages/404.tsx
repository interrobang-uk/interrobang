import React from "react"
import PageHeader from "../components/PageHeader"
import Section from "../components/Section"
import MetaTags from "../components/MetaTags"

const NotFoundPage = () => (
  <>
    <MetaTags title="Not found" />
    <PageHeader>Page not found</PageHeader>
    <Section className="section--no-top-padding">
      <p className="big">We couldn't find the content you were looking for.</p>
    </Section>
  </>
)

export default NotFoundPage
