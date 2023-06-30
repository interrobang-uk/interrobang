import Link from "next/link"

const Box = ({ title, message, buttonText, href }) => (
  <aside className="box">
    <div className="container box__inner">
      <div>
        <h3>{title}</h3>
        <p>{message}</p>
      </div>
      <Link href={href}>{buttonText}</Link>
    </div>
  </aside>
)

export default Box
