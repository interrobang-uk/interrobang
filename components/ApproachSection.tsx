import { useState } from "react"
import Section from "./Section"

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
            We provide interdisciplinary teams who work at the intersection of
            research, design and technology to make sustainable change for the
            public services we all depend on.
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
            For us, everything starts with building a deep, empathetic
            understanding of users and their needs.
          </p>

          <p>This involves:</p>

          <ul>
            <li>
              Turning prior work into hypotheses, so we don&apos;t re-invent the
              wheel
            </li>
            <li>One-to-one interviews</li>
            <li>Interactive workshops</li>
          </ul>
        </Item>

        <Item setSelection={setSelection} selection={selection} title="Design">
          Content
        </Item>

        <Item
          setSelection={setSelection}
          selection={selection}
          title="Technology"
        >
          Content
        </Item>
      </ul>
    </Section>
  )
}

export default ApproachSection
