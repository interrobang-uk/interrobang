import Image from "next/image"
import queer from "../assets/queer.png"
import logo from "../assets/logo.svg"
import coop from "../assets/coop.svg"
import cyber from "../assets/cyber.png"

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
          <a href="/privacy">Privacy</a>
          <a href="/accessibility">Accessibility</a>
          <a href="/environment">Environmental and social governance</a>
          <a href="https://interrobanguk.substack.com">Blog</a>
          <a href="https://forms.gle/cRRZm66Qc8eh8f9k7">Join us</a>
        </nav>
      </aside>
      <aside>
        <h2>Connect</h2>
        <nav>
          <a href="https://linkedin.com/company/interrobanguk">LinkedIn</a>
          <a href="https://github.com/interrobang-uk">GitHub</a>
          <a href="https://interrobanguk.substack.com">Substack</a>
          <a href="mailto:hello@interrobang.uk">hello@interrobang.uk</a>
        </nav>
      </aside>
      <aside>
        <Image alt="" src={queer} />
        <p>We are a proudly inclusive, queer-led organisation.</p>
        <p>
          We’re an ally of the queer community and the fight for equality for
          all marginalised people, everywhere.
        </p>
      </aside>
    </div>

    <div className="container site-footer__info">
      <div className="site-footer__marks">
        <Image src={logo} alt="Interrobang logo" />
        <Image
          src={cyber}
          alt="Cyber Essentials certified"
          style={{
            maxHeight: "80px",
            width: "auto",
          }}
        />
        <Image src={coop} alt="Co-operatives UK emblem" />
      </div>
      <p>
        We are a worker-owned co-operative. Interrobang Limited is registered
        company number 14466175 in England and Wales. Intersex-Inclusive Pride
        Flag by Valentino Vecchietti is licensed under a Creative Commons
        Attribution-NonCommercial-ShareAlike 4.0 International License.
      </p>
    </div>
  </footer>
)

export default SiteFooter
