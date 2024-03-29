import PageHeader from "../components/PageHeader"
import Section from "../components/Section"
import Link from "next/link"
import { AirtableRecord, TeamMemberFields } from "../airtable.types"
import airtableData from "../data/airtable-content.json"
import useUrlHash from "../hooks/useUrlState"
import TeamMemberDialog from "../components/TeamMemberDialog"
import { markdownToHtmlSync } from "../lib/markdown"
import MetaTags from "../components/MetaTags"
import Image from "next/image"

const TeamPage = ({
  teamMembers,
}: {
  teamMembers: AirtableRecord<TeamMemberFields>[]
}) => {
  const [selected, setSelected] = useUrlHash()

  const member = teamMembers.find(member => member.fields.Slug === selected)

  return (
    <>
      <MetaTags
        title="Our team"
        description="Our interdisciplinary team of experts at the crossover between digital identity and inclusion."
      />
      <PageHeader intro="We are an interdisciplinary team of experts in digital identity and inclusion.">
        Our team
      </PageHeader>

      <Section className="section--no-top-padding section--no-bottom-padding">
        <ul className="team-list">
          {teamMembers.map(member => (
            <li
              key={member.id}
              id={member.fields?.Slug}
              className="team-list__member"
            >
              <Image
                alt=""
                height={600}
                width={400}
                src={`/team/${member.fields.Photo?.[0].filename}`}
              />

              <button onClick={() => setSelected(member.fields?.Slug)}>
                <h2>{member.fields?.Name}</h2>
              </button>
              <p>{member.fields?.Role}</p>
              <p>{member.fields?.Email}</p>
              <p>
                <Link href={member.fields?.LinkedIn}>LinkedIn</Link>
              </p>
            </li>
          ))}
        </ul>
      </Section>

      {selected && member && (
        <TeamMemberDialog member={member} onDismiss={() => setSelected(null)} />
      )}
    </>
  )
}

export default TeamPage

export async function getStaticProps() {
  return {
    props: {
      teamMembers: JSON.parse(
        JSON.stringify(
          airtableData.teamMembers.map(member => ({
            ...member,
            fields: {
              ...member.fields,
              ["Long biography"]: markdownToHtmlSync(
                member.fields["Long biography"]
              ),
            },
          }))
        )
      ),
    },
  }
}
