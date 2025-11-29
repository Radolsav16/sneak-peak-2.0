"use client";
import styles from "@/app/faqs/Faqs.module.scss";
import { Header } from "../components/header/Header";
import useFaqs from "./useFaqs";
import { faqs } from "./faqs";

export default function Faqs() {
  const { activeQuestion, toggle } = useFaqs();

  return (
    <>
      <Header />
      <main className={styles["faqs-page"]}>
        <section className={styles["faqs-hero"]}>
          <h1 className={styles["faqs-title"]}>Sneakpeak Въпроси</h1>
        </section>

        <section className={styles["faqs-container"]}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={
                styles[
                  `faq-item ${activeQuestion === faq.question ? "active" : ""}`
                ]
              }
            >
              <div className={styles["faq-question"]}>
                <h3>{faq.question}</h3>
                <span
                  className={styles["faq-toggle"]}
                  onClick={() => toggle(faq.question)}
                >
                  {activeQuestion === faq.question ? "−" : "+"}
                </span>
              </div>
              {activeQuestion === faq.question && (
                <p className={styles["faq-answer"]}>{faq.answer}</p>
              )}
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
