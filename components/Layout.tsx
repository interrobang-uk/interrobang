import SiteFooter from "./SiteFooter"
import SiteHeader from "./SiteHeader"

const Layout = ({ children }) => (
  <>
    <SiteHeader />
    {children}
    <SiteFooter />
  </>
)

export default Layout
