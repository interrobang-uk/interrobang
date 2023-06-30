import { ReactElement } from "react"

const PageHeader = ({
  children,
  intro,
}: {
  children: ReactElement | string
  intro?: string
}) => (
  <header className="page-header">
    <div className="container">
      <h1>{children}</h1>

      {intro && <p>{intro}</p>}
    </div>
  </header>
)

export default PageHeader
