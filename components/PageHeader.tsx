import { ReactElement } from "react"

const PageHeader = ({ children }: { children: ReactElement | string }) => (
  <header className="page-header">
    <div className="container">
      <h1>{children}</h1>
    </div>
  </header>
)

export default PageHeader
