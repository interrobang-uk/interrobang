import React from "react"
import PageHeader from "../components/PageHeader"
import Collage from "../components/Collage"
import Section from "../components/Section"
import ApproachSection from "../components/ApproachSection"
import TestimonialsSection from "../components/TestimonialsSection"
import LogosSection from "../components/LogosSection"
import BlogSection from "../components/BlogSection"
import ContactSection from "../components/ContactSection"

import a from "../assets/11.jpg"
import b from "../assets/new/6.jpg"
import c from "../assets/new/21.jpg"
import d from "../assets/13.jpg"
import Link from "next/link"

const IndexPage = () => (
  <>
    <PageHeader>We're building a better way to prove who you are</PageHeader>
    <Collage images={[a, b, c, d]} />
    <Section>
      <p className="big">
        Interrobang is a tech-for-good company, working at the intersection of
        digital identity and inclusion. Our first product is{" "}
        <Link href="https://vouchsafe.id">VouchSafe</Link>.
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
