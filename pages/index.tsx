import React from "react"
import PageHeader from "../components/PageHeader"
import Collage from "../components/Collage"
import Section from "../components/Section"
import ApproachSection from "../components/ApproachSection"
import TestimonialsSection from "../components/TestimonialsSection"

const IndexPage = () => (
  <>
    <PageHeader>
      We’re a digital outcomes studio who help people be their best
    </PageHeader>
    <Collage />
    <Section>
      <p className="big">
        Interrobang works at the intersection of research, design and technology
        to make sustainable change for the public services we all depend on.
      </p>
    </Section>
    <ApproachSection />
    <TestimonialsSection />

    <section className="section section--no-top-padding">
      <header className="container">
        <h2>Selected clients</h2>
      </header>
      Marquee here
    </section>
  </>
)

export default IndexPage
