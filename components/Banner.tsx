import Link from "next/link"

const Banner = () => (
  <section className="site-banner">
    <p>
      📢 We're making digital ID work for 1 million Scots —{" "}
      <Link href="https://interrobanguk.substack.com/p/we-want-to-fix-digital-identity">
        Read the full announcement
      </Link>
    </p>
  </section>
)

export default Banner
