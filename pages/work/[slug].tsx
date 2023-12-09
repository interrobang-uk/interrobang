import Link from "next/link"
import airtableData from "../../data/airtable-content.json"
import {
  AirtableRecord,
  AirtableRecordWithHTML,
  CaseStudyFields,
  TeamMemberFields,
} from "../../airtable.types"
import MemberCard from "../../components/MemberCard"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { markdownToHtmlSync } from "../../lib/markdown"
import PageHeader from "../../components/PageHeader"
import Section from "../../components/Section"
import MetaTags from "../../components/MetaTags"

const WorkSlugPage = ({
  caseStudy,
  teamMembers,
}: {
  caseStudy: AirtableRecordWithHTML<CaseStudyFields>
  teamMembers: AirtableRecord<TeamMemberFields>[]
}) => {
  const pointsOfContact: AirtableRecord<TeamMemberFields>[] = []

  caseStudy.fields["Team members who worked on this"]?.forEach(id => {
    const match = teamMembers.find(member => member.id === id)
    if (match) pointsOfContact.push(match)
  })

  return (
    <section>
      <MetaTags title={caseStudy.fields["Project"]} />
      <PageHeader
        className="page-header--full-width"
        caption={caseStudy.fields["Client"]}
      >
        {caseStudy.fields["Project"]}
      </PageHeader>

      <Section className="section--no-bottom-padding">
        <div className="case-study">
          <dl className="meta-list">
            <div>
              <dt>Summary</dt>
              <dd>{caseStudy.fields["Summary"]}</dd>
            </div>

            {caseStudy.fields["Date commenced"] && (
              <div>
                <dt>Year</dt>
                <dd>
                  <strong>
                    {new Date(
                      caseStudy.fields["Date commenced"]
                    ).toLocaleDateString("en-GB", {
                      year: "numeric",
                    })}
                  </strong>
                </dd>
              </div>
            )}

            <div>
              <dt>Sector</dt>
              <dd>
                <strong>{caseStudy.fields["Client type"]}</strong>
              </dd>
            </div>

            <div>
              <dt>Policy areas</dt>
              <dd>
                <ul className="tag-list">
                  {caseStudy.fields["Policy areas"].map(item => (
                    <li className="tag" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>

            <div>
              <dt>Involvement</dt>
              <dd>
                <ul className="tag-list">
                  {caseStudy.fields["Our involvement"].map(item => (
                    <li className="tag" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>

            {pointsOfContact.length > 0 && (
              <div>
                <dt>Point{pointsOfContact.length > 1 && "s"} of contact</dt>
                <dd>
                  {pointsOfContact.map(point => (
                    <MemberCard {...point} key={point.id} />
                  ))}
                </dd>
              </div>
            )}
          </dl>

          <main>
            <div
              className="flexible-content"
              dangerouslySetInnerHTML={{
                __html: caseStudy.html,
              }}
            ></div>

            <div className="case-study__actions">
              <Link href="/work">
                More projects
                <svg
                  width="36"
                  height="29"
                  viewBox="0 0 36 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 4.8335H36M0 14.5002H36M0 24.1668H36"
                    stroke="#212121"
                    stroke-width="3"
                  />
                </svg>
              </Link>

              {caseStudy.fields["Read more"] && (
                <Link href={caseStudy.fields["Read more"]}>
                  Read more
                  <svg
                    width="41"
                    height="35"
                    viewBox="0 0 41 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect y="16" width="38" height="3" fill="#212121" />
                    <path
                      d="M22.5 2L38 17.5L22 33.5"
                      stroke="#212121"
                      stroke-width="3"
                    />
                  </svg>
                </Link>
              )}
            </div>
          </main>
        </div>
      </Section>
    </section>
  )
}

export async function getStaticProps({ params }: Params) {
  const match = airtableData.caseStudies.find(
    caseStudy => caseStudy.fields.Slug === params.slug
  )

  return match
    ? {
        props: {
          caseStudy: {
            ...match,
            html: markdownToHtmlSync(match.fields["Longer description"]),
          },
          teamMembers: JSON.parse(JSON.stringify(airtableData.teamMembers)),
        },
      }
    : {
        notFound: true,
      }
}

export async function getStaticPaths() {
  console.log(airtableData.pages.map(post => post.fields.Slug))

  return {
    paths: airtableData.caseStudies.map(post => ({
      params: {
        slug: post.fields.Slug,
      },
    })),
    fallback: false,
  }
}

export default WorkSlugPage
