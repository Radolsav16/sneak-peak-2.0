"use client";
import { happySneakers } from "./happySneakers";
import s from "./HappySneakersSection.module.scss";

const HappySneakersSection = () => {
  return (
    <section className={s["sneakecorn-section"]}>
      <div className={s["sneakecorn-section__header"]}>
        <div className={s["sneakecorn-section__blog-from"]}>
          {happySneakers.firstBlogHeading}
        </div>
        <h2 className={s["sneakecorn-section__title"]}>
          {happySneakers.title}
        </h2>
      </div>

      <div className={s["sneakecorn-section__content"]}>
        <div className={s["sneakecorn-section__left"]}>
          <p>{happySneakers.text}</p>

          <button className={s["sneakecorn-section__cta-button"]}>
            {happySneakers.buttonText}
          </button>
        </div>

        <div className={s["sneakecorn-section__right"]}>
          <img
            src={happySneakers.campignImgUrl}
            alt={happySneakers.campaignImgAlt}
            className={s["sneakecorn-section__main-image"]}
          />

          <div className={s["sneakecorn-section__sponsors"]}>
            {happySneakers.sponsorsImgs.map((i) => (
              <img
                src={i.src}
                alt={i.alt}
                className={s["sneakecorn-section__sponsor-logo"]}
              />
            ))}
          </div>

          <div className={s["sneakecorn-section__map"]}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.0853303401595!2d23.31137741190369!3d42.68073477104466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8504ce5058cb%3A0xdfffc7507b190164!2sNational%20Trade%20and%20Banking%20High%20School!5e0!3m2!1sen!2sbg!4v1762957409600!5m2!1sen!2sbg"
              width="600"
              height="450"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HappySneakersSection;
