"use client"
// import MultiPointMap from "../components/multi-point-map/MultiPointMap";
import WHeader from "../components/wheader/WHeader";
import { campaign } from "./campaign";
import s from "./CampaignPage.module.scss";
import Link from "next/link";


export default function CampaignPage() {
  return (
    <>
    <WHeader />
    <div className={s["campaign-page"]}>
      <header className={s["center-heading"]}>
        <h1>{campaign.heading}</h1>
        <h2>{campaign.subHeading}</h2>
        <p className={s["date"]}>{campaign.date}</p>
      </header>

      <section className={s["two-images"]}>
        <img src={campaign.firstImageUrl} alt={campaign.firstImageAlt} />
        <img src={campaign.secondImageUrl} alt={campaign.secondImageAlt} />
      </section>

      <section className={s["sponsors"]}>
        {campaign.sponsorsImages.map((item) => (
          <img src={item.imageUrl} alt={item.imageAlt} key={item.imageUrl} />
        ))}
      </section>

      <div className={s["black-line"]}></div>

      <section className={s["large-center-text"]}>
        <p>{campaign.text}</p>
      </section>

      <footer className={s["bottom-section"]}>
        <div className={s["left"]}>
          <p className={s["title"]}>{campaign.imageHeading}</p>
          <div className={s["boxes"]}>
            <div className={s["box"]}>
              <img src="/stelaj-1.PNG" alt=""/>
            </div>
             <div className={s["box"]}>
              <img src="/stelaj-2.PNG" alt=""/>
            </div>
             <div className={s["box"]}>
              <img src="/stelaj-3.PNG" alt="" />
            </div>
          </div>
        </div>

        <div className={s["right"]}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2933.0853303401595!2d23.31137741190369!3d42.68073477104466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8504ce5058cb%3A0xdfffc7507b190164!2sNational%20Trade%20and%20Banking%20High%20School!5e0!3m2!1sen!2sbg!4v1762957409600!5m2!1sen!2sbg"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          {/* <MultiPointMap /> */}
          <Link href="/sneakblog" className={s["back-link"]}>
            {campaign.backButtonText}
          </Link>
        </div>
      </footer>
    </div>
    </>
  );
}
