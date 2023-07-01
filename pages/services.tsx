import React from "react"
import PageHeader from "../components/PageHeader"
import Collage from "../components/Collage"
import NewsletterSection from "../components/NewsletterSection"
import AccordionSection from "../components/AccordionSection"
import Box from "../components/Box"
import ClientGridSection from "../components/ClientGrid"
import NumberedListSection from "../components/NumberedListSection"

import a from "../assets/14.jpg"
import b from "../assets/18.png"
import c from "../assets/1.jpg"

const IndexPage = () => (
  <>
    <PageHeader
      intro="Interrobang works at the edge of research, design and technology to make
        sustainable change for our public services and communities."
    >
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
      buttonText="Read the blog"
      href="https://interrobanguk.substack.com/p/trust-and-control"
    />

    <NewsletterSection />
  </>
)

export default IndexPage
