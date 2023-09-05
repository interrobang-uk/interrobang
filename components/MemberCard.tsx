import Link from "next/link"
import { AirtableRecord, TeamMemberFields } from "../airtable.types"

const MemberCard = (member: AirtableRecord<TeamMemberFields>) => (
  <div className="member-card">
    <img src={`/team/${member.id}.jpg`} alt="" />
    <Link href={`/team#${member.fields.Slug}`}>{member.fields.Name}</Link>
    <em>{member.fields.Role}</em>

    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="16"
        width="10"
        height="2"
        transform="rotate(90 16 0)"
        fill="#212121"
      />
      <rect x="6" width="10" height="2" fill="#212121" />
      <rect
        y="14.5"
        width="20"
        height="2"
        transform="rotate(-45 0 14.5)"
        fill="#212121"
      />
    </svg>
  </div>
)

export default MemberCard
