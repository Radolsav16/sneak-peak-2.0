import { Header } from "../components/header/Header";
import { privacyPlocy } from "./privacyPolicy";

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="terms-page">
        <section className="terms-content">
          <h1 className="terms-title">{privacyPlocy.headingText}</h1>
          <p className="terms-date">{privacyPlocy.headingDate}</p>

          <p className="terms-intro">{privacyPlocy.headingIntro}</p>

          {privacyPlocy.terms.map((item) => (
            <>
              <h2 className="terms-heading">{item.termsHeading}</h2>
              <ul>
                {item.terms.map((i) => (
                  <li>{i}</li>
                ))}
              </ul>
            </>
          ))}

          <h2 className="terms-heading">{privacyPlocy.termsHeadingFirst}</h2>
          <p>{privacyPlocy.termsHeadingText}</p>

          <h2 className="terms-heading">{privacyPlocy.termsHeadingSecond}</h2>
          <p>{privacyPlocy.termsSecondText}</p>

          <h2 className="terms-heading">{privacyPlocy.termsHeadingThirth}</h2>
          <p>{privacyPlocy.termsHeadingSubTitleThirth}</p>
          <ul>
            {privacyPlocy.termsThirth.map((i) => (
              <li>{i}</li>
            ))}
          </ul>

          <p>{privacyPlocy.termsThirthText}</p>

          {privacyPlocy.termsFourth.map((i) => (
            <>
              <h2 className="terms-heading">{i.termsHeading}</h2>
              <p>{i.termsText}</p>
            </>
          ))}
        </section>
      </main>
    </>
  );
}
