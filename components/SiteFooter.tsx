import Image from "next/image"
import queer from "../assets/queer.png"
import logo from "../assets/logo.svg"
import coop from "../assets/coop.svg"
import cyber from "../assets/cyber.png"
import livingWage from "../assets/living-wage.png"
import cotech from "../assets/cotech.svg"
import disabilityConfident from "../assets/disability.svg"
import Link from "next/link"

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="container site-footer__links">
      <aside>
        <h2>Office address</h2>
        <address>
          c/o Birch
          <br />
          126 Addington Rd
          <br />
          South Croydon
          <br />
          CR2 8YA
        </address>

        <h2>Registered address</h2>
        <address>
          18 River Park Gardens
          <br />
          London
          <br />
          BR2 0BQ
        </address>
      </aside>
      <aside>
        <h2>More about us</h2>
        <nav>
          <Link href="/privacy">How we use data</Link>
          <Link href="https://interrobang-uk.notion.site/Accessibility-policy-d7e4761d2762452b9ddaba5f821b43a5?pvs=4">
            Accessibility
          </Link>
          <Link href="https://interrobang-uk.notion.site/Environmental-policy-0d94f323c62d4a86ad22c09448f5c2a0?pvs=4">
            Environmental and social governance
          </Link>
          <Link href="/terms">Standard terms</Link>
          <Link href="https://interrobanguk.substack.com">Newsletter</Link>
          <Link href="https://forms.gle/cRRZm66Qc8eh8f9k7">Join us</Link>
        </nav>
      </aside>
      <aside>
        <h2>Connect</h2>
        <nav>
          <Link href="https://linkedin.com/company/interrobanguk">
            LinkedIn
          </Link>
          <Link href="https://github.com/interrobang-uk">GitHub</Link>
          <Link href="https://interrobanguk.substack.com">Substack</Link>
          <Link href="mailto:hello@interrobang.coop">
            hello@interrobang.coop
          </Link>
        </nav>
      </aside>
      <aside>
        <Image alt="" src={queer} />
        <p>We are a proudly inclusive, queer-led organisation.</p>
        <p>
          We&apos;re an ally of the queer community and the fight for equality
          for all marginalised people, everywhere.
        </p>
      </aside>
    </div>

    <div className="container site-footer__info">
      <div className="site-footer__marks">
        <Image src={logo} alt="Interrobang logo" />
        <Image
          src={disabilityConfident}
          alt="We are a Disability Confident employer"
        />
        <Image src={coop} alt="Cooperatives UK emblem" />
        <Image src={cotech} alt="We are a member of coops.tech" />
        <Image src={cyber} alt="Cyber Essentials certified" />
        <Image src={livingWage} alt="We are a living wage employer" />
      </div>
      <p>
        We are a worker-owned cooperative. Interrobang Limited is registered
        company number 14466175 in England and Wales. Intersex-Inclusive Pride
        Flag by Valentino Vecchietti is licensed under a Creative Commons
        Attribution-NonCommercial-ShareAlike 4.0 International License.
      </p>
    </div>
  </footer>
)

export default SiteFooter
