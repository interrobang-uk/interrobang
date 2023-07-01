import Script from "next/script"
import Section from "./Section"
import Link from "next/link"
import { blogUrl } from "../config"

const NewsletterSection = props => (
  <Section
    title={
      <>
        <h2>Get updates</h2>
        <p>
          You can get our case studies, opinions and updates on our work sent to
          your inbox whenever we publish. No more than one a week and no spam,
          ever.
        </p>
      </>
    }
    {...props}
  >
    <div className="newsletter">
      <div id="custom-substack-embed"></div>

      <Script
        id="substack"
        dangerouslySetInnerHTML={{
          __html: `window.CustomSubstackWidget = {
    substackUrl: "interrobanguk.substack.com",
    placeholder: "example@gmail.com",
    buttonText: "Sign up",
    theme: "custom",
    colors: {
      primary: "#212121",
      input: "#FFFDEB",
      email: "#212121",
      text: "#fffdeb",
    }
};`,
        }}
      />
      <Script src="https://substackapi.com/widget.js" async></Script>
    </div>
  </Section>
)

export default NewsletterSection
