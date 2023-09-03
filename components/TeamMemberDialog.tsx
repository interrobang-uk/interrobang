import { Dialog } from "@reach/dialog"
import Link from "next/link"
import { AirtableRecord, TeamMemberFields } from "../airtable.types"

const TeamMemberDialog = ({
  member,
  onDismiss,
}: {
  member: AirtableRecord<TeamMemberFields>
  onDismiss: () => void
}) => {
  return (
    //@ts-ignore
    <Dialog isOpen={true} onDismiss={onDismiss} className="team-dialog">
      <header>
        <h1>{member.fields.Name}</h1>
        <button onClick={onDismiss}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="1.63672"
              y="0.22168"
              width="20"
              height="2"
              transform="rotate(45 1.63672 0.22168)"
              fill="#212121"
            />
            <rect
              x="0.222656"
              y="14.3638"
              width="20"
              height="2"
              transform="rotate(-45 0.222656 14.3638)"
              fill="#212121"
            />
          </svg>

          <span className="visually-hidden">Close</span>
        </button>
      </header>

      <div className="team-dialog__content">
        <aside>
          <div className="team-dialog__portrait">
            <img src={`/team/${member.id}.jpg`} alt="" />
            <span> {member.fields.Pronouns}</span>
          </div>

          <p>{member.fields.Email}</p>

          <p>
            {member.fields.LinkedIn && (
              <Link className="link" href={member.fields.LinkedIn}>
                LinkedIn
              </Link>
            )}
          </p>
        </aside>

        <main>
          <div
            className="team-dialog__bio"
            dangerouslySetInnerHTML={{
              __html: member.fields["Long biography"],
            }}
          ></div>

          <dl className="meta-list">
            {member.fields?.["Former clients"]?.length > 0 && (
              <div>
                <dt>Former clients</dt>
                <dd>
                  <ul className="tag-list">
                    {member.fields?.["Former clients"]?.map(item => (
                      <li key={item} className="tag">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            )}

            {member.fields?.Specialisms?.length > 0 && (
              <div>
                <dt>Specialisms</dt>
                <dd>
                  <ul className="tag-list">
                    {member.fields?.Specialisms?.map(item => (
                      <li key={item} className="tag">
                        {item}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            )}
          </dl>
        </main>
      </div>
    </Dialog>
  )
}

export default TeamMemberDialog
