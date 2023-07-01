import { ReactElement } from "react"

const PageHeader = ({
  children,
  intro,
  className,
}: {
  children: ReactElement | string
  intro?: string
  className?: string
}) => (
  <header className={`page-header ${className}`}>
    <div className="container">
      <h1>{children}</h1>

      {intro && <p>{intro}</p>}
    </div>
  </header>
)

export default PageHeader
