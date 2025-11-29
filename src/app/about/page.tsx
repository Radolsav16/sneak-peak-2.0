import TeamGoal from "../components/team-goal/TeamGoal";
import TeamSection from "../components/team-section/TeamSection";
import WHeader from "../components/wheader/WHeader";
import styles from "./About.module.scss";
import { aboutPage } from "./about";

export default function AboutUs() {
  return (
    <>
    <WHeader />
    <section className={styles.aboutSection}>
      <h2 className={styles.heading}>{aboutPage.heading}</h2>
      <div className={styles.contentWrapper}>
        <div className={styles.textSection}>
          <p>{aboutPage.text}</p>
        </div>

        <div className={styles.imageSection}>
          <img
            src={aboutPage.imageUrl}
            alt={aboutPage.imageAlt}
            width={600}
            height={300} />
        </div>
      </div>
      <TeamGoal />
      <TeamSection />
    </section></>
  );
}
