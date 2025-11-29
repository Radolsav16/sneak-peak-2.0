"use client";

import s from "./ContactPage.module.scss";
import { Header } from "../components/header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useContact from "./useContact";
import { contact } from "./contact";

export default function ContactPage() {
  const { onSubmit } = useContact();
  return (
    <>
      <Header />
      <div className={s["contact-page"]}>
        <header className={s["contact-header"]}>
          <h1>{contact.heading}</h1>
          <div>{contact.headingText}</div>
          <div>{contact.headingDaysandHours}</div>
        </header>

        <form className={s["contact-form"]} onSubmit={onSubmit}>
          <label>{contact.headingQuestion}</label>
         <select name="question" >
        <option value=""></option>
        <option value="pricing">What are your pricing options?</option>
        <option value="timeline">What is the estimated project timeline?</option>
        <option value="consultation">Can I book a consultation?</option>
  </select>

          <div className={s["row"]}>
            <div className={s["col"]}>
              <label>{contact.nameLabel}</label>
              <input type={"text"} name="name" required />
            </div>
            <div className={s["col"]}>
              <label>{contact.emailLabel}</label>
              <input type={"email"} name="email" required />
            </div>
          </div>

          <div className={s["row"]}>
            <div className={s["col"]}>
              <label>{contact.numberLabel}</label>
              <input type={"text"} name="number" required />
            </div>
            <div className={s["col"]}>
              <label>{contact.websiteLabel}</label>
              <input type={s["text"]} name="website" />
            </div>
          </div>

          <label>{contact.messageLabel}</label>
          <textarea name="message"></textarea>

          <p className={s["info-text"]}>{contact.formBottomText}</p>

          <button type="submit" className={s["submit-btn"]}>
            {contact.buttonText}
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
