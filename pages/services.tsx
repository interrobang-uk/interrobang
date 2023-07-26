import React from "react"
import PageHeader from "../components/PageHeader"
import Collage from "../components/Collage"
import NewsletterSection from "../components/NewsletterSection"
import AccordionSection from "../components/AccordionSection"
import Box from "../components/Box"
import ClientGridSection from "../components/ClientGrid"
import NumberedListSection from "../components/NumberedListSection"

import a from "../assets/new/7.jpg"
import b from "../assets/18.png"
import c from "../assets/1.jpg"

const IndexPage = () => (
  <>
    <PageHeader intro="Interrobang gives public and charity sector clients the tools they'll need to face the crises of the coming decades.">
      Our services
    </PageHeader>
    <Collage images={[a, b, c]} />
    <AccordionSection />
    <NumberedListSection />
    <ClientGridSection />
    <Box
      title={
        <>
          Our work is about building systems of <span>trust</span>, rather than
          control
        </>
      }
      message="We've written about what that means to us."
      buttonText="Read the newsletter"
      href="https://interrobanguk.substack.com/p/trust-and-control"
    />
  </>
)

export default IndexPage
