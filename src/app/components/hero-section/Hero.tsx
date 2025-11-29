import { heroData } from "./heroData";
import styles from "./Hero.module.scss";
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textSection}>
          <span>First Bulgarian</span>
          <span>Sneakercon</span>

          <h2>{heroData.thirthHeading}</h2>
        </div>

        <div className={styles.imageSection}>
          <img
            src={heroData.heroImgUrl}
            alt={heroData.heroImgAlt}
            width={30}
            height={30}
          />
        </div>
      </div>
    </section>
  );
}
