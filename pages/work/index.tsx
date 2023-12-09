import { useEffect, useState } from "react"
import PageHeader from "../../components/PageHeader"
import Section from "../../components/Section"
import { markdownToHtmlSync } from "../../lib/markdown"
import {
  AirtableRecord,
  AirtableRecordWithHTML,
  CaseStudyFields,
  TeamMemberFields,
} from "../../airtable.types"
import airtableData from "../../data/airtable-content.json"
import { useRouter } from "next/router"
import Link from "next/link"
import { truncate } from "../../lib/utils"
import MetaTags from "../../components/MetaTags"

const WorkPage = ({
  caseStudies,
  teamMembers,
}: {
  caseStudies: AirtableRecordWithHTML<CaseStudyFields>[]
  teamMembers: AirtableRecord<TeamMemberFields>[]
}) => {
  const { push, asPath } = useRouter()

  useEffect(() => {
    const hash = asPath.split("#")[1]
    if (hash) push(`/work/${hash}`)
  }, [asPath, push])

  return (
    <>
      <MetaTags title="Our work" />
      <PageHeader
        className="page-header--full-width"
        intro="Some of our team's favourite projects"
      >
        Our work
      </PageHeader>

      <Section className="section--no-bottom-padding section--no-bottom-padding">
        <div className="case-studies">
          {caseStudies.map(cs => {
            return (
              <article className="case-studies__tile" key={cs.id}>
                {cs.fields.Icon && (
                  <img src={`/icons/${cs.fields?.Icon}.png`} alt="" />
                )}

                <Link href={`/work/${cs.fields.Slug}`}>
                  <h2>{cs.fields.Project}</h2>
                </Link>
                <p>{cs.fields.Client}</p>

                <p>{truncate(cs.fields.Summary, 125)}</p>
              </article>
            )
          })}
        </div>
      </Section>
    </>
  )
}

export default WorkPage

export async function getStaticProps() {
  const caseStudies = airtableData.caseStudies
  const teamMembers = airtableData.teamMembers

  return {
    props: {
      caseStudies: JSON.parse(
        JSON.stringify(
          caseStudies
            .filter(cs => cs.fields["Show in list"])
            .map(cs => ({
              ...cs,
              html: markdownToHtmlSync(cs.fields["Longer description"] || ""),
            }))
        )
      ),
      teamMembers: JSON.parse(JSON.stringify(teamMembers)),
    },
  }
}
