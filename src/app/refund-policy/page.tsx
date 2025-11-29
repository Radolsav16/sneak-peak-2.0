import Header from "../components/header/Header";
import { refundPolicy } from "./refundPolicy";
export default function RefundPolicy() {
  return (
    <>
      <Header />
      <main className="terms-page">
        <section className="terms-content">
          <h1 className="terms-title">{refundPolicy.headingText}</h1>
          <p className="terms-date">{refundPolicy.headingDate}</p>

          <p className="terms-intro">{refundPolicy.headingIntro}</p>

          {refundPolicy.terms.map((item) => (
            <>
              <h2 className="terms-heading">{item.termsHeading}</h2>
              <ul>
                {item.terms.map((i) => (
                  <li>{i}</li>
                ))}
              </ul>
            </>
          ))}

          <h2 className="terms-heading">{refundPolicy.termsHeadingFirst}</h2>
          <h3>{refundPolicy.termsSubTitle}</h3>
          {refundPolicy.termsFirts.map((i) => (
            <>
              <h2 className="terms-heading">{i.termsHeading}</h2>
              <ul>
                {i.terms.map((j) => (
                  <li>{j}</li>
                ))}
              </ul>
            </>
          ))}
        </section>
      </main>
    </>
  );
}
