import Section from "./Section"

const NumberedListSection = () => (
  <Section className="section--dark" title={<h2>What makes us different</h2>}>
    <ol className="big-numbered-list">
      <li>
        <h3>We’ll give creative control to your users</h3>
        <p>
          We do co-design, where we give the people we're doing the work for
          genuine creative control over a course of workshops. In the long term,
          co-designed solutions always work better.
        </p>
      </li>
      <li>
        <h3>We’ll work in a flexible, iterative way</h3>
        <p>
          We make sure we’re constantly doing the most impactful work by
          adjusting our plan regularly, splitting our work into short
          test-and-learn cycles, planning and reflecting as we go.
        </p>
      </li>
      <li>
        <h3>We’ll deliberately seek out the under-represented</h3>
        <p>
          Our approach interrogates social structures and power dynamics, rather
          than ignoring them. We’ll seek out marginalised users and involve them
          in our process from the start.
        </p>
      </li>
      <li>
        <h3>We'll cooperate, not compete</h3>
        <p>
          Our first instinct is to find the things we have in common and amplify
          good work being done by others. That's why we're a cooperative rather
          than a traditional company.
        </p>
      </li>
      <li>
        <h3>We'll turn our existing knowledge into hypotheses</h3>
        <p>
          We use time and money wisely by applying things we've learned from
          earlier work, rather than starting from scratch.
        </p>
      </li>
    </ol>
  </Section>
)

export default NumberedListSection
