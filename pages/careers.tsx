import PageHeader from "../components/PageHeader"
import { AirtableRecord, JobFields, TeamMemberFields } from "../airtable.types"
import airtableData from "../data/airtable-content.json"
import useUrlHash from "../hooks/useUrlState"
import { markdownToHtmlSync } from "../lib/markdown"
import Link from "next/link"
import { formatCurrency } from "../lib/utils"
import Section from "../components/Section"
import MetaTags from "../components/MetaTags"

const TeamPage = ({ jobs }: { jobs: AirtableRecord<JobFields>[] }) => {
  return (
    <>
      <MetaTags title="Work with us" />
      <PageHeader intro="Help us use research, design and technology for social good.">
        Work with us
      </PageHeader>

      <Section className="section--no-top-padding section--no-bottom-padding">
        <div className="job-list">
          {jobs.length > 0 ? (
            jobs.map(job => (
              <article key={job.id}>
                <h2>
                  <Link href={job.fields["Learn more"]}>
                    {job.fields["Job title"]}
                  </Link>
                </h2>
                <p>
                  {job.fields.Location} · {formatCurrency(job.fields.Salary)}
                </p>
                <p>{job.fields.Description}</p>
              </article>
            ))
          ) : (
            <p>
              There are no open positions right now, but you can still{" "}
              <Link href="https://forms.gle/cRRZm66Qc8eh8f9k7">
                send a speculative application
              </Link>
              .
            </p>
          )}
        </div>
      </Section>
    </>
  )
}

export default TeamPage

export async function getStaticProps() {
  return {
    props: {
      jobs: JSON.parse(
        JSON.stringify(airtableData.jobs.filter(job => job.fields["Visible?"]))
      ),
    },
  }
}
