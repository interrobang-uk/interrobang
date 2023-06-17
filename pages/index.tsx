import React from "react"
import PageHeader from "../components/PageHeader"
import Collage from "../components/Collage"
import Section from "../components/Section"
import ApproachSection from "../components/ApproachSection"

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
    <Section title={<h2>Clients</h2>}>Content</Section>
  </>
)

export default IndexPage
