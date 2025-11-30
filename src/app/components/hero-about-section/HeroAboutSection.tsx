import Link from "next/link";
import styles from "./HeroAboutSection.module.scss";
import { heroData } from "../hero-section/heroData";
export default function HeroAboutSection() {
  return (
    <div className={styles.contentWrapper}>
      <div className={styles.imageSection}>
        <img
          src={heroData.heroAboutImage}
          alt={heroData.heroAboutImageAlt}
          width={180}
          height={180}
        />
      </div>
      <div className={styles.textSection}>
        <h2>{heroData.heroAboutSectionHeading}</h2>
        <p>{heroData.heroAboutSectionText}</p>
        <Link href="/about" className={styles.moreButton}>
          Още
        </Link>
      </div>
    </div>
  );
}
