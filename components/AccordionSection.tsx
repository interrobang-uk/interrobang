import { useState } from "react"
import Section from "./Section"

const Item = ({ setSelection, selection, title, children }) => (
  <li className="accordion__item" aria-expanded={selection === title}>
    <button onClick={() => setSelection(selection === title ? null : title)}>
      <h3>{title}</h3>

      <svg width="38" height="39" viewBox="0 0 38 39" fill="none">
        <rect y="17.5" width="38" height="4" fill="white" />
        <rect
          x="21"
          y="0.5"
          width="38"
          height="4"
          transform="rotate(90 21 0.5)"
          fill="white"
        />
      </svg>
    </button>
    {selection === title && (
      <div className="accordion__content">{children}</div>
    )}
  </li>
)

const AccordionSection = () => {
  const [selection, setSelection] = useState<number | null>(null)

  return (
    <Section className="section--dark">
      <>
        <p>
          Every Interrobang project is different, but here's an idea of what to
          expect:
        </p>
        <ul className="accordion">
          <Item
            setSelection={setSelection}
            selection={selection}
            title="Digital transformation consulting"
          >
            <p>
              We provide strategic consultancy services to your leaders and
              senior managers in order to help your organisation better serve
              its users.
            </p>
          </Item>
          <Item
            setSelection={setSelection}
            selection={selection}
            title="Product and service design and development"
          >
            <p>
              We make digital services and products: apps, websites and the
              non-digital processes and policies that make them work.
            </p>
          </Item>

          <Item
            setSelection={setSelection}
            selection={selection}
            title="Training and coaching"
          >
            <p>
              We run one-off sessions and extended courses to introduce you and
              your colleagues to modern, agile, design-led ways of working.
            </p>
          </Item>

          <Item
            setSelection={setSelection}
            selection={selection}
            title="Digital maturity and accessibility audits"
          >
            <p>
              We study your organisation and its stakeholders to understand
              where you are at in your digital transformation journey, and
              recommend what to do next.
            </p>
          </Item>

          <Item
            setSelection={setSelection}
            selection={selection}
            title="Research and evaluation"
          >
            <p>
              We use the same participatory, community-first research methods we
              apply in our digital work and apply them to wide-ranging problems
              and projects.
            </p>
          </Item>
        </ul>
      </>
    </Section>
  )
}

export default AccordionSection
