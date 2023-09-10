import { HTMLAttributes, ReactElement } from "react"

const Section = ({
  title,
  children,
  actions,
  className,
  ...props
}: {
  title?: ReactElement | string
  actions?: ReactElement | string
  children: ReactElement | ReactElement[] | string
  className?: string
  id?: string
}) => (
  <section className={`section ${className}`} {...props}>
    <div className="container">
      {/* optional header area */}
      {title && <header className="section__header">{title}</header>}

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
