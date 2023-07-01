import Section from "./Section"

const NumberedListSection = () => (
  <Section className="section--dark" title={<h2>What makes us different</h2>}>
    <ol className="big-numbered-list">
      <li>
        <h3>We’ll give creative control to your users</h3>
        <p>
          We think this work is an excellent fit for co-design, where we give
          people who would benefit from this work genuine control over what we
          eventually pilot over at least one interactive workshop.
        </p>
      </li>
      <li>
        <h3>We’ll work in a flexible, iterative way</h3>
        <p>
          We’ll make sure we’re constantly doing the most impactful work by
          adjusting our plan regularly: splitting our work into two-week
          test-and-learn cycles, planning and reflecting as we go, giving you
          plenty of chances to influence the work.
        </p>
      </li>
      <li>
        <h3>We’ll deliberately seek out the under-represented</h3>
        <p>
          Our approach centres social structures and power dynamics, rather than
          ignoring them. We design for everyone, not just the average. We’ll
          seek out users with access needs and involve them in our process from
          the start.
        </p>
      </li>
      <li>
        <h3>Reduce risk with pilots</h3>
        <p>
          We’ll be constantly looking for ways to start providing value early,
          reducing long-term risk. We’ll pilot your new website so we can
          understand how well it works in the real world, keeping back time and
          money to improve based on what we learn.
        </p>
      </li>
      <li>
        <h3>Use our existing knowledge as hypotheses</h3>
        <p>
          We’ll be constantly looking for ways to start providing value early,
          reducing long-term risk. We’ll pilot your new website so we can
          understand how well it works in the real world, keeping back time and
          money to improve based on what we learn.
        </p>
      </li>
    </ol>
  </Section>
)

export default NumberedListSection
