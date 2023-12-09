import { ReactElement } from "react"

const PageHeader = ({
  children,
  intro,
  className,
  caption,
}: {
  caption?: string
  children: ReactElement | string
  intro?: string
  className?: string
}) => (
  <header className={`page-header ${className}`}>
    <div className="container">
      {caption && <p className="page-header__caption">{caption}</p>}

      <h1>{children}</h1>

      {intro && <p>{intro}</p>}
    </div>
  </header>
)

export default PageHeader
