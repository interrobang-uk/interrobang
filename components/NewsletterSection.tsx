import Script from "next/script"
import Section from "./Section"

const NewsletterSection = () => (
  <Section
    title={
      <>
        <h2>Get updates</h2>
        <p>
          Interrobang works at the intersection of research, design and
          technology to malke sustainable change for the public services we all
          depend on.
        </p>
      </>
    }
  >
    <div className="newsletter">
      <div id="custom-substack-embed"></div>
      <Script
        id="substack"
        dangerouslySetInnerHTML={{
          __html: `window.CustomSubstackWidget = {
    substackUrl: "prostack.substack.com",
    placeholder: "example@gmail.com",
    buttonText: "Subscribe",
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