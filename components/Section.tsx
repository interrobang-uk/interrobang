import { ReactElement } from "react"

const Section = ({
  title,
  children,
  actions,
  className,
}: {
  title?: ReactElement | string
  actions?: ReactElement | string
  children: ReactElement | string
  className?: string
}) => (
  <section className={`section ${className}`}>
    <div className="container">
      {/* optional header area */}
      {title && <header>{title}</header>}

      {actions ? (
        <div className="section__thirds">
          {/* one-third */}
          <footer>{actions}</footer>
          {/* two-thirds */}
          <div>{children}</div>
        </div>
      ) : (
        children
      )}
    </div>
  </section>
)

export default Section
