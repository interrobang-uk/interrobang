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
        Whether you want to partner with us on some work, or just fancy a chat,
        we want to hear from you.
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
