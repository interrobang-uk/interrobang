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
import AccordionSection from "../components/AccordionSection"

const IndexPage = () => (
  <>
    <PageHeader>Our services</PageHeader>
    <Section className="section--no-top-padding">
      <p className="big">
        Interrobang works at the edge of research, design and technology to make
        sustainable change for our public services and communities.
      </p>
    </Section>

    <AccordionSection />

    <NewsletterSection />
  </>
)

export default IndexPage
