import { useState } from "react"
import PageHeader from "../components/PageHeader"
import Section from "../components/Section"
import {
  AirtableRecord,
  CaseStudyFields,
  getCaseStudies,
} from "../lib/airtable"
import Link from "next/link"
import markdownToHtml, { markdownToHtmlSync } from "../lib/posts"
import useUrlHash from "../hooks/useUrlState"

interface AirtableRecordWithHTML<T> extends AirtableRecord<T> {
  html: string
}

const WorkPage = ({
  caseStudies,
}: {
  caseStudies: AirtableRecordWithHTML<CaseStudyFields>[]
}) => {
  const policyFilters = caseStudies.reduce((acc, cs) => {
    //@ts-ignore
    return [...new Set(acc.concat(cs.fields["Policy areas"]))]
  }, [])

  const sectorFilters = caseStudies.reduce((acc, cs) => {
    //@ts-ignore
    return [...new Set(acc.concat(cs.fields["Client type"]))]
  }, [])

  const [policyFilter, setPolicyFilter] = useState<string | null>(null)
  const [sectorFilter, setSectorFilter] = useState<string | null>(null)

  const [selected, setSelected] = useUrlHash()

  const results = caseStudies
    .filter(study => {
      if (policyFilter)
        return study.fields["Policy areas"].includes(policyFilter)
      return true
    })
    .filter(study => {
      if (sectorFilter)
        return study.fields["Client type"].includes(sectorFilter)
      return true
    })

  return (
    <>
      <PageHeader className="page-header--full-width">
        Examples of our work
      </PageHeader>

      <Section className="section--no-top-padding section--no-bottom-padding">
        <>
          <details className="filters-panel">
            <summary>Filters</summary>

            <form className="filters">
              <fieldset className="filter-switch">
                <legend>Policy areas</legend>

                <div>
                  <input
                    type="radio"
                    onChange={e => setPolicyFilter(null)}
                    id={`filter-null`}
                    checked={!policyFilter}
                  />
                  <label htmlFor={`filter-null`}>All</label>
                </div>

                {policyFilters.map(f => (
                  <div>
                    <input
                      type="radio"
                      onChange={e => setPolicyFilter(f)}
                      id={`filter-${f}`}
                      checked={f === policyFilter}
                    />
                    <label htmlFor={`filter-${f}`}>{f}</label>
                  </div>
                ))}
              </fieldset>

              <fieldset className="filter-switch">
                <legend>Client's sector</legend>

                <div>
                  <input
                    type="radio"
                    onChange={e => setSectorFilter(null)}
                    id={`filter-null`}
                    checked={!sectorFilter}
                  />
                  <label htmlFor={`filter-null`}>All</label>
                </div>

                {sectorFilters.map(f => (
                  <div>
                    <input
                      type="radio"
                      onChange={e => setSectorFilter(f)}
                      id={`filter-${f}`}
                      checked={f === sectorFilter}
                    />
                    <label htmlFor={`filter-${f}`}>{f}</label>
                  </div>
                ))}
              </fieldset>
            </form>
          </details>

          {results.length > 0 ? (
            <>
              <div className="accordion">
                {results.map(cs => {
                  const id = cs.fields.Slug
                  const expanded = selected === id

                  return (
                    <section key={id} aria-expanded={expanded} id={id}>
                      <header>
                        <div className="accordion__masthead">
                          <h2>{cs.fields["Project"]}</h2>
                          <p>{cs.fields["Client"]}</p>
                        </div>

                        {expanded ? (
                          <button onClick={() => setSelected(null)}>
                            <svg
                              width="30"
                              height="31"
                              viewBox="0 0 30 31"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="13"
                                width="30"
                                height="5"
                                fill="#212121"
                              ></rect>
                            </svg>
                            Close section
                          </button>
                        ) : (
                          <button onClick={() => setSelected(id)}>
                            <svg
                              width="30"
                              height="31"
                              viewBox="0 0 30 31"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="13"
                                width="30"
                                height="5"
                                fill="#212121"
                              ></rect>
                              <rect
                                x="17.5"
                                y="0.5"
                                width="30"
                                height="5"
                                transform="rotate(90 17.5 0.5)"
                                fill="#212121"
                              ></rect>
                            </svg>
                            Open section
                          </button>
                        )}
                      </header>
                      {expanded && (
                        <div className="accordion__content">
                          <div className="case-study">
                            <dl className="meta-list">
                              <div>
                                <dt>Summary</dt>
                                <dd>{cs.fields["Summary"]}</dd>
                              </div>

                              <div>
                                <dt>Year</dt>
                                <dd>
                                  <strong>
                                    {new Date(
                                      cs.fields["Date commenced"]
                                    ).toLocaleDateString("en-GB", {
                                      year: "numeric",
                                    })}
                                  </strong>
                                </dd>
                              </div>

                              <div>
                                <dt>Sector</dt>
                                <dd>
                                  <strong>{cs.fields["Client type"]}</strong>
                                </dd>
                              </div>

                              <div>
                                <dt>Policy areas</dt>
                                <dd>
                                  <ul>
                                    {cs.fields["Policy areas"].map(item => (
                                      <li key={item}>{item}</li>
                                    ))}
                                  </ul>
                                </dd>
                              </div>

                              <div>
                                <dt>Involvement</dt>
                                <dd>
                                  {cs.fields["Our involvement"].map(item => (
                                    <li key={item}>{item}</li>
                                  ))}
                                </dd>
                              </div>

                              {/* <div>
                          <dt>Point of contact</dt>
                          <dd>
                            {cs.fields["Team members who worked on this"].map(
                              item => (
                                <li key={item}>{item}</li>
                              )
                            )}
                          </dd>
                        </div> */}
                            </dl>

                            <main>
                              <div
                                className="flexible-content"
                                dangerouslySetInnerHTML={{
                                  __html: cs.html,
                                }}
                              ></div>

                              {cs.fields["Read more"] && (
                                <Link
                                  href={cs.fields["Read more"]}
                                  className="case-study__read-more"
                                >
                                  Read more
                                  <svg
                                    width="41"
                                    height="34"
                                    viewBox="0 0 41 34"
                                    fill="none"
                                  >
                                    <rect
                                      y="15"
                                      width="38"
                                      height="4"
                                      fill="#212121"
                                    />
                                    <rect
                                      x="24.1016"
                                      y="0.273438"
                                      width="23.4715"
                                      height="4"
                                      transform="rotate(45 24.1016 0.273438)"
                                      fill="#212121"
                                    />
                                    <rect
                                      x="21.2734"
                                      y="30.5967"
                                      width="23.4715"
                                      height="4"
                                      transform="rotate(-45 21.2734 30.5967)"
                                      fill="#212121"
                                    />
                                  </svg>
                                </Link>
                              )}
                            </main>
                          </div>
                        </div>
                      )}
                    </section>
                  )
                })}
              </div>
            </>
          ) : (
            <p className="no-results">No results</p>
          )}
        </>
      </Section>
    </>
  )
}

export default WorkPage

export async function getStaticProps() {
  const caseStudies = await getCaseStudies()

  const transformed = caseStudies.map(cs => ({
    ...cs,
    html: markdownToHtmlSync(cs.fields["Longer description"] || ""),
  }))

  return {
    props: {
      caseStudies: JSON.parse(JSON.stringify(transformed)),
    },
  }
}
