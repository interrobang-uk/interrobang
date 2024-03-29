import Image from "next/image"
import Section from "./Section"
import Link from "next/link"

import jaye from "../assets/jaye.jpg"
import chloe from "../assets/chloe.jpg"

const ContactSection = () => (
  <Section
    id="contact"
    className="section--dark"
    title={<h2>Contact</h2>}
    actions={
      <p>
        Interrobang is an{" "}
        <Link href="/team">interdisciplinary team of experts</Link>, but if
        you're not sure who you need to talk to, start here.
      </p>
    }
  >
    <ul className="contacts-list">
      <li>
        <Image src={jaye} alt="" />
        <h3>Jaye Hackett</h3>
        <p>Founding partner</p>
        <p>jaye@interrobang.coop</p>
        <p>
          <Link href="https://www.linkedin.com/in/hackettjaye/">LinkedIn</Link>
          {/* <Link href="https://twitter.com/dinosaurenby">Twitter</Link> */}
        </p>
      </li>
      <li>
        <Image src={chloe} alt="" />
        <h3>Chloe Coleman</h3>
        <p>Founding partner</p>
        <p>chloe@interrobang.coop</p>
        <p>
          <Link href="https://www.linkedin.com/in/chloe-coleman/">
            LinkedIn
          </Link>
          {/* <Link href="https://twitter.com/chlocolewoman">Twitter</Link> */}
        </p>
      </li>
    </ul>
  </Section>
)

export default ContactSection
