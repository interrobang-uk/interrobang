import Image from "next/image"
import queer from "../assets/queer.png"
import logo from "../assets/logo.svg"
import coop from "../assets/coop.svg"
import cyber from "../assets/cyber.png"
import livingWage from "../assets/living-wage.png"
import cotech from "../assets/cotech.svg"
import disabilityConfident from "../assets/disability.svg"
import Link from "next/link"
import data from "../data/airtable-content.json"

const SiteFooter = () => (
  <footer className="site-footer">
    <div className="container site-footer__links">
      <aside>
        <h2>Office address</h2>
        <address>
          c/o Hatch
          <br />
          Centre Carpark, F1-F6, 95A Rye Ln
          <br />
          London
          <br />
          SE15 4ST
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
          {data.pages
            .filter(page => page.fields["Show in footer menu?"])
            .map(link => (
              <Link href={`/${link.fields.Slug}`} key={link.id}>
                {link.fields.Title}
              </Link>
            ))}

          <Link href="https://interrobanguk.substack.com">Newsletter</Link>
          <Link href="/careers">Join us</Link>
        </nav>
      </aside>
      <aside>
        <h2>Connect</h2>
        <nav>
          <Link href="https://linkedin.com/company/interrobanguk">
            LinkedIn
          </Link>
          <Link href="https://chat.whatsapp.com/C4g034omhe8302M4Y6ekGB">
            WhatsApp
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
