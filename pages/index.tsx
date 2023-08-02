import React from "react"
import PageHeader from "../components/PageHeader"
import Collage from "../components/Collage"
import Section from "../components/Section"
import ApproachSection from "../components/ApproachSection"
import TestimonialsSection from "../components/TestimonialsSection"
import LogosSection from "../components/LogosSection"
import BlogSection from "../components/BlogSection"
import ContactSection from "../components/ContactSection"
import NewsletterSection from "../components/NewsletterSection"

import a from "../assets/11.jpg"
import b from "../assets/new/6.jpg"
import c from "../assets/new/21.jpg"
import d from "../assets/13.jpg"

const IndexPage = () => (
  <>
    <PageHeader>
      We’re a digital outcomes studio who help people be their best
    </PageHeader>
    <Collage images={[a, b, c, d]} />
    <Section>
      <p className="big">
        Interrobang is a not-for-profit cooperative, working to bolster our
        communities against the interconnected, deepening crises of the coming
        decades.
      </p>
    </Section>
    <ApproachSection />
    <TestimonialsSection />
    <LogosSection />
    <BlogSection />
    <ContactSection />
  </>
)

export default IndexPage
