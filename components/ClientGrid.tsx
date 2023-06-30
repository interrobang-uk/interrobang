import Section from "./Section"
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
import s from "../assets/logos/iwm.png"
import t from "../assets/logos/catapult.png"
import u from "../assets/logos/gla.png"
import Image from "next/image"

const ClientGridSection = () => (
  <Section title={<h2>We've worked with</h2>}>
    <div className="client-grid">
      <div className="client-grid__inner">
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

        <Image src={s} alt="Imperial War Museums" />
        <Image src={t} alt="Catapult network" />
        <Image src={u} alt="Greater London Authority" />

        <Image src={l} alt="Hackney Council" />
        {/* <Image src={m} alt="Home Office" /> */}
        <Image src={n} alt="Kent County Council" />
        <Image src={o} alt="Ministry of Justice" />
        <Image src={p} alt="NHS Digital" />
        <Image src={q} alt="Parkinsons UK" />
        <Image src={r} alt="Universal Credit" />
      </div>
    </div>
  </Section>
)

export default ClientGridSection
