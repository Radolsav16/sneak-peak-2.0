import s from "./Treasure.module.scss";
import WHeader from "../components/wheader/WHeader";
import Link from "next/link";
import { treasure } from "./treasure";
export default function TreasureHuntPage() {
  return (
    <>
      <WHeader />
      <div className={s.page}>
        <header className={s.header}>
          <h1>{treasure.heading}</h1>
          <p className={s.date}>{treasure.date}</p>

          <div className={s["treasure-hunt-wrapper"]}>
            <div>
              <img src={treasure.imgUrl} alt={treasure.imgAlt} />
            </div>

            <div className={s["right-section"]}>
              <div className={s["logos"]}>
                {treasure.imgsLogos.map((i) => (
                  <img src={i.src} alt={i.alt} key={i.src}/>
                ))}
              </div>

              <div className={s["animal-bottom"]}>
                <img src={treasure.bottomImgUrl} alt={treasure.bottomImgAlt} />
              </div>
            </div>
          </div>
        </header>

        <section className={s.content}>
          <h2>{treasure.bottomHeading}</h2>

          <p>{treasure.bottomText}</p>

          <ul>
            {treasure.sponsorsTexts.map((t,i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>

          <p>{treasure.treasureBottomText}</p>

          <p>
            <b>{treasure.treasureNextEventText}</b>
          </p>
        </section>

        <div className={s.btnWrapper}>
          <Link href={"/sneakblock"} className={s.backBtn}>
            {treasure.treasureHuntBackLink}
          </Link>
        </div>
      </div>
    </>
  );
}
