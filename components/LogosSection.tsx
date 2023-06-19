import Marquee from "react-fast-marquee"

import a from "../assets/logos/ageuk.png"
import b from "../assets/logos/bfi.png"
import c from "../assets/logos/bucks.png"
import d from "../assets/logos/camden.png"
import e from "../assets/logos/crisis.png"
import f from "../assets/logos/cymru.png"
import g from "../assets/logos/devon.png"
import h from "../assets/logos/dfe.png"
import i from "../assets/logos/dft.png"
import j from "../assets/logos/essex.png"
import k from "../assets/logos/gds.png"
import l from "../assets/logos/hackney.png"
import m from "../assets/logos/ho.png"
import n from "../assets/logos/kent.png"
import o from "../assets/logos/moj.png"
import p from "../assets/logos/nhsd.png"
import q from "../assets/logos/puk.png"
import r from "../assets/logos/uc.png"
import Image from "next/image"

const LogosSection = () => (
  <section className="section section--no-top-padding">
    <header className="container">
      <h2>Selected clients</h2>
    </header>

    <Marquee pauseOnHover speed={30}>
      <div className="marquee">
        <div className="marquee__inner">
          <Image src={a} alt="Age UK" />
          <Image src={b} alt="BFI" />
          <Image src={c} alt="Buckinghamshire Council" />
          <Image src={d} alt="Camden Council" />
          <Image src={e} alt="Crisis" />
          <Image src={f} alt="Centre for Digital Public Services" />
          <Image src={g} alt="Devon Council" />
          <Image src={h} alt="Department for Education" />
          <Image src={i} alt="Department for Transport" />
          <Image src={j} alt="Essex Council" />
          <Image src={k} alt="Government Digital Service" />
          <Image src={l} alt="Hackney Council" />
          <Image src={m} alt="Home Office" />
          <Image src={n} alt="Kent County Council" />
          <Image src={o} alt="Ministry of Justice" />
          <Image src={p} alt="NHS Digital" />
          <Image src={q} alt="Parkinsons UK" />
          <Image src={r} alt="Universal Credit" />
        </div>
      </div>
    </Marquee>
  </section>
)

export default LogosSection
