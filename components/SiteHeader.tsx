import Link from "next/link"
import { useState } from "react"

const Links = () => (
  <>
    <Link href="/services">Our services</Link>
    {/* <Link href="/work">Work</Link> */}
    <Link href="/team">Team</Link>
    <Link href="https://interrobanguk.substack.com">Newsletter</Link>
    <Link href="https://forms.gle/cRRZm66Qc8eh8f9k7">Join us</Link>
    <Link href="/#contact">Contact</Link>
  </>
)

const SiteHeader = () => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner container">
          <Link href="/">
            <svg
              width="100"
              height="50"
              viewBox="0 0 100 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1140_6)">
                <path
                  d="M59.7959 32.4345V22.0309C63.3787 21.895 66.0544 21.3057 67.8231 20.263C69.6372 19.1751 70.5442 17.3618 70.5442 14.8233V13.8713C70.5442 12.1488 70.0227 10.8342 68.9796 9.92753C67.9819 9.0209 66.6667 8.56759 65.034 8.56759C63.2653 8.56759 61.7914 9.11156 60.6122 10.1995C59.4785 11.2875 58.7075 12.6701 58.2993 14.3473L50 10.8795C50.4082 9.51955 50.9977 8.20494 51.7687 6.93567C52.5397 5.62107 53.5374 4.46512 54.7619 3.46783C56.0317 2.42522 57.5283 1.58659 59.2517 0.951954C61.0204 0.317318 63.0612 0 65.3742 0C67.7324 0 69.8866 0.339982 71.8367 1.01995C73.7868 1.69992 75.4649 2.65187 76.8707 3.87581C78.2766 5.09975 79.3424 6.57302 80.068 8.29561C80.839 10.0182 81.2245 11.9221 81.2245 14.0073C81.2245 15.9112 80.907 17.6338 80.2721 19.1751C79.6372 20.7163 78.7755 22.0763 77.6871 23.2549C76.5986 24.3882 75.3288 25.3175 73.8776 26.0428C72.4263 26.7681 70.907 27.2667 69.3197 27.5387V32.4345H59.7959ZM64.6939 49.0937C62.517 49.0937 60.9524 48.595 60 47.5977C59.093 46.6004 58.6395 45.3765 58.6395 43.9259V42.294C58.6395 40.8434 59.093 39.6194 60 38.6222C60.9524 37.6249 62.517 37.1262 64.6939 37.1262C66.8707 37.1262 68.4127 37.6249 69.3197 38.6222C70.2721 39.6194 70.7483 40.8434 70.7483 42.294V43.9259C70.7483 45.3765 70.2721 46.6004 69.3197 47.5977C68.4127 48.595 66.8707 49.0937 64.6939 49.0937Z"
                  fill="#212121"
                />
                <path
                  d="M91.9042 33.3184L88.7069 14.0073V0.815918H99.3191V14.0073L96.1899 33.3184H91.9042ZM93.945 49.0937C91.7681 49.0937 90.2035 48.595 89.2511 47.5977C88.3441 46.6004 87.8906 45.3765 87.8906 43.9259V42.294C87.8906 40.8434 88.3441 39.6194 89.2511 38.6222C90.2035 37.6249 91.7681 37.1262 93.945 37.1262C96.1218 37.1262 97.6638 37.6249 98.5708 38.6222C99.5232 39.6194 99.9994 40.8434 99.9994 42.294V43.9259C99.9994 45.3765 99.5232 46.6004 98.5708 47.5977C97.6638 48.595 96.1218 49.0937 93.945 49.0937Z"
                  fill="#212121"
                />
                <path
                  d="M40.2059 16.6592V27.0627C36.6231 27.1987 33.9474 27.788 32.1787 28.8306C30.3646 29.9186 29.4576 31.7318 29.4576 34.2704V35.2223C29.4576 36.9449 29.9791 38.2595 31.0222 39.1661C32.0199 40.0727 33.3351 40.5261 34.9678 40.5261C36.7365 40.5261 38.2104 39.9821 39.3896 38.8941C40.5233 37.8062 41.2943 36.4236 41.7025 34.7463L50.0018 38.2142C49.5936 39.5741 49.0041 40.8887 48.2331 42.158C47.4621 43.4726 46.4644 44.6285 45.2399 45.6258C43.9701 46.6684 42.4735 47.5071 40.7501 48.1417C38.9814 48.7763 36.9406 49.0936 34.6276 49.0936C32.2694 49.0936 30.1152 48.7537 28.1651 48.0737C26.215 47.3937 24.5369 46.4418 23.1311 45.2178C21.7252 43.9939 20.6594 42.5206 19.9338 40.798C19.1628 39.0755 18.7773 37.1715 18.7773 35.0863C18.7773 33.1824 19.0948 31.4598 19.7297 29.9186C20.3646 28.3773 21.2263 27.0174 22.3147 25.8388C23.4032 24.7055 24.673 23.7762 26.1243 23.0509C27.5755 22.3256 29.0948 21.827 30.6821 21.555V16.6592H40.2059ZM35.3079 0C37.4848 1.903e-07 39.0494 0.498643 40.0018 1.49592C40.9088 2.49321 41.3623 3.71715 41.3623 5.16775V6.79967C41.3623 8.25027 40.9088 9.47421 40.0018 10.4715C39.0494 11.4688 37.4848 11.9674 35.3079 11.9674C33.1311 11.9674 31.5891 11.4688 30.6821 10.4715C29.7297 9.47421 29.2535 8.25027 29.2535 6.79967V5.16775C29.2535 3.71715 29.7297 2.49321 30.6821 1.49592C31.5891 0.498642 33.1311 -1.903e-07 35.3079 0Z"
                  fill="#E6D962"
                />
                <path
                  d="M8.09524 15.7752L11.2925 35.0863V48.2777H0.680271L0.680272 35.0863L3.80953 15.7752H8.09524ZM6.05443 0C8.2313 1.903e-07 9.79592 0.498643 10.7483 1.49593C11.6553 2.49322 12.1088 3.71716 12.1088 5.16775V6.79968C12.1088 8.25028 11.6553 9.47422 10.7483 10.4715C9.79592 11.4688 8.2313 11.9674 6.05443 11.9674C3.87756 11.9674 2.3356 11.4688 1.42857 10.4715C0.476192 9.47422 -1.2682e-07 8.25028 0 6.79968L1.4266e-07 5.16775C2.6948e-07 3.71716 0.476192 2.49322 1.42858 1.49593C2.33561 0.498642 3.87756 -1.904e-07 6.05443 0Z"
                  fill="#E6D962"
                />
              </g>
              <defs>
                <clipPath id="clip0_1140_6">
                  <rect width="100" height="50" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <span className="visually-hidden">Interrobang</span>
          </Link>

          <button
            onClick={() => setOpen(!open)}
            className="site-header__mobile-menu-trigger"
            aria-expanded={open}
          >
            {open ? "Close" : "Menu"}
          </button>

          <nav className="site-header__menu">
            <Links />
          </nav>

          <nav className="site-header__menu">
            <Link href="https://linkedin.com/company/interrobanguk">
              LinkedIn
            </Link>
          </nav>
        </div>
      </header>

      {open && (
        <nav className="mobile-menu">
          <Links />
          <Link href="https://linkedin.com/company/interrobanguk">
            LinkedIn
          </Link>
        </nav>
      )}
    </>
  )
}

export default SiteHeader
