import PageHeader from "../components/PageHeader"
import { AirtableRecord, JobFields, TeamMemberFields } from "../airtable.types"
import airtableData from "../data/airtable-content.json"
import Link from "next/link"
import { formatCurrency } from "../lib/utils"
import Section from "../components/Section"
import MetaTags from "../components/MetaTags"

const JobCard = ({ job }) => (
  <article key={job.id}>
    <h2>
      <Link href={job.fields["Learn more"]}>{job.fields["Job title"]}</Link>
    </h2>
    <p>
      {job.fields.Location} · {job.fields.Salary}
    </p>
    <p>{job.fields.Description}</p>
  </article>
)

const TeamPage = ({ jobs }: { jobs: AirtableRecord<JobFields>[] }) => {
  const currentVacancies = jobs.filter(job => job.fields["Current?"])
  const pastVacancies = jobs.filter(job => !job.fields["Current?"])

  return (
    <>
      <MetaTags
        title="Work with us"
        description="Help us use research, design and technology for social good."
      />
      <PageHeader intro="Help us use research, design and technology for social good.">
        Work with us
      </PageHeader>

      <Section
        className="section--no-bottom-padding"
        title={<h2>Current vacancies</h2>}
        actions={<></>}
      >
        <div className="job-list">
          {currentVacancies.length > 0 ? (
            currentVacancies.map(job => <JobCard job={job} key={job.id} />)
          ) : (
            <p className="no-results">
              We have no vacancies right now, but you can still get in touch
              with us at{" "}
              <Link href="mailto:hello@interrobang.coop">
                hello@interrobang.coop
              </Link>{" "}
              if you want to work together.
            </p>
          )}
        </div>
      </Section>

      <Section
        className="section--no-bottom-padding"
        title={<h2>Past vacancies</h2>}
        actions={<></>}
      >
        <div className="job-list">
          {pastVacancies.length > 0 ? (
            pastVacancies.map(job => <JobCard job={job} key={job.id} />)
          ) : (
            <p className="no-results">There are no past vacancies.</p>
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
