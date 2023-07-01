import { useState } from "react"
import Section from "./Section"
import Link from "next/link"

const Item = ({ setSelection, selection, title, children }) => (
  <li className="approach__item" aria-expanded={selection === title}>
    <button onClick={() => setSelection(selection === title ? null : title)}>
      <h3>{title}</h3>
    </button>
    {selection === title && <div className="approach__content">{children}</div>}
  </li>
)

const ApproachSection = () => {
  const [selection, setSelection] = useState<number | null>(null)

  return (
    <Section
      className="section--dark"
      title={
        <>
          <h2>Our approach</h2>
          <p>
            Our interdisciplinary teams work at the edge of research, design and
            technology to make sustainable change for the public services we all
            depend on:
          </p>
        </>
      }
    >
      <ul className="approach">
        <Item
          setSelection={setSelection}
          selection={selection}
          title="Research"
        >
          <p>
            Everything starts with building a deep, empathetic understanding of
            users and their needs.
          </p>

          <p>This involves:</p>

          <ul>
            <li>
              Turning prior work into hypotheses: explicit assumptions from our
              prior work, so we don&apos;t spend time and money re-learning
              things we already know
            </li>
            <li>
              A mix of individual interviews and interactive group workshops
            </li>
            <li>
              Longitudinal methods like diary studies, where we check in with
              the same people over time to understand long-term impact
            </li>
          </ul>
        </Item>

        <Item setSelection={setSelection} selection={selection} title="Design">
          <p>We have a "big tent" approach to design.</p>

          <p>
            We do participatory design that centres the lived experience of your
            users and gives them creative control.
          </p>

          <p>In practice, this means:</p>

          <ul>
            <li>design sprints</li>
            <li>co-design workshops</li>
            <li>prototyping things and getting early feedback</li>
          </ul>
        </Item>

        <Item
          setSelection={setSelection}
          selection={selection}
          title="Technology"
        >
          <p>We're technology agnostic. We don't chase trends.</p>

          <p>
            Instead, we'll begin our projects with a 'technology discovery'
            where we'll examine:
          </p>

          <ul>
            <li>sustainable upfront and ongoing costs</li>
            <li>the ease of keeping things up and running after the project</li>
            <li>a good fit to your context and the skills of your staff</li>
          </ul>

          <p>
            The best option might be building something new, subscribing to a
            cloud service, using a no-code platform, or a bit of each.
          </p>
        </Item>
      </ul>
    </Section>
  )
}

export default ApproachSection
