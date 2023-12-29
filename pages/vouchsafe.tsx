import Link from "next/link"

const VouchSafePage = () => (
  <>
    <section className="vs-banner">
      VouchSafe chosen by Scottish Government – <Link href="/">Read more</Link>
    </section>

    <header className="vs-header">
      <Link href="/vouchsafe">VouchSafe</Link>
      <nav className="vs-header__menu">
        <Link href="#">Personal</Link>
        <Link href="#">Business</Link>
        <Link href="#">About</Link>
        <Link
          href="#"
          className="vs-header__button vs-header__button--secondary"
        >
          Sign in
        </Link>
        <Link
          href="https://cal.com/jayeh/chat"
          className="vs-header__button vs-header__button--primary"
        >
          Get a demo
        </Link>
      </nav>
    </header>

    <section className="vs-hero">
      <h1>Digital identity for everyone</h1>
      <p>
        VouchSafe lets you provide vital services to the people who need them
        most
      </p>
      <Link href="https://cal.com/jayeh/chat">Get a demo</Link>
    </section>

    <section className="vs-problem">
      <article>
        <h2>The problem is serious and urgent</h2>
        <p>Over ten million people in the UK lack basic identity documents.</p>
        <p>
          Without these, it’s tough to access vital services: bank accounts,
          benefits, utilities.
        </p>
      </article>
    </section>

    <section className="vs-solution">
      <article>
        <h2>The only solution is vouching</h2>
        <p>
          We make it possible to prove who you are by using your trusted
          relationships.
        </p>

        <p>
          We’re making a digital product, as well as the policy to govern it,
          through our unique connection to government policymakers.
        </p>

        <p>
          We use a mix of high and low tech methods to verify relationships:
        </p>
      </article>
    </section>

    <section className="vs-benefits">
      <h2>Benefits</h2>
      <ul>
        <li>Cheaper to provide services</li>
        <li>More users can access</li>
        <li>De-risked, preventative services</li>
        <li>Higher confidence that users are who you think</li>
      </ul>
    </section>

    <section className="vs-partners">
      <h2>Who's using it?</h2>
      <ul>
        <li>CivTech</li>
        <li>Scottish Government</li>
        <li>Big Issue</li>
      </ul>
    </section>

    <blockquote className="vs-testimonial">
      <q>This could make life so much easier for so many vulnerable people</q>
      <cite>Mark, Crisis</cite>
    </blockquote>

    <section className="vs-pricing">
      <h2>Plans start at £0/month</h2>
      <p>Only pay for the users you verify</p>
      <p>Included in every plan:</p>
      <ul>
        <li>Our industry-leading fraud prevention checks</li>
        <li>Our privacy-preserving technology</li>
        <li>A simple, fully-documented api and docs</li>
        <li>
          A powerful admin dashboard with government-ready audit logging and
          compliance functionality
        </li>
      </ul>
    </section>

    <section className="vs-coda">
      <h2>Could VouchSafe help you?</h2>
      <Link href="https://cal.com/jayeh/chat">Book a demo</Link>
      <p>
        A no-commitment chat with the founders, and access to your own sandbox
        to try out.
      </p>
    </section>
  </>
)

export default VouchSafePage
