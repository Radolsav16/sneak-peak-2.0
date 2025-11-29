import { Header } from "../components/header/Header";
import { termsCondition } from "./termsCondition";

export default function TermsAndConditions() {
  return (
    <>
      <Header />
      <main className="terms-page">
        <section className="terms-content">
          <h1 className="terms-title">{termsCondition.headingText}</h1>
          <p className="terms-date">{termsCondition.headingDate}</p>

          <p className="terms-intro">{termsCondition.headingIntro}</p>

          {termsCondition.terms.map((item) => (
            <>
              <h2 className="terms-heading">{item.termsHeading}</h2>
              <ul>
                {item.terms.map((i) => (
                  <li>{i}</li>
                ))}
              </ul>
            </>
          ))}

          <h2 className="terms-heading">{termsCondition.termsHeadingFirst}</h2>

          <p className="terms-intro">{termsCondition.termsTextFirst}</p>

          <h2 className="terms-heading">{termsCondition.termsHeadingSecond}</h2>

          <p className="terms-intro">{termsCondition.termsTextSecond}</p>

          <h2 className="terms-heading">{termsCondition.termsHeadingThirth}</h2>
          <p className="terms-intro">{termsCondition.termsTextThirth}</p>

          <h2 className="terms-heading">{termsCondition.termsHeadingFourth}</h2>
          <p className="terms-intro">{termsCondition.termsTextFourth}</p>
        </section>
      </main>
    </>
  );
}
