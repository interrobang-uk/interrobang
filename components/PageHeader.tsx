import Head from "next/head"
import { ReactElement } from "react"

const PageHeader = ({
  children,
  intro,
  className,
  caption,
  useAsTitle = true,
}: {
  caption?: string
  children: ReactElement | string
  intro?: string
  className?: string
  useAsTitle?: boolean
}) => (
  <header className={`page-header ${className}`}>
    {useAsTitle && (
      <Head>
        <title>{children} | Interrobang</title>
      </Head>
    )}

    <div className="container">
      {caption && <p className="page-header__caption">{caption}</p>}

      <h1>{children}</h1>

      {intro && <p>{intro}</p>}
    </div>
  </header>
)

export default PageHeader
