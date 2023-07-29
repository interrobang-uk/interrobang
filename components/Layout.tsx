import Banner from "./Banner"
import SiteFooter from "./SiteFooter"
import SiteHeader from "./SiteHeader"

const Layout = ({ children }) => (
  <>
    <Banner />
    <SiteHeader />
    {children}
    <SiteFooter />
  </>
)

export default Layout
