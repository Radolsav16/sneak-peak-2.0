"use client";

import s from "./TeamSection.module.scss";

const TeamSection = () => {
  return (
    <section className={s["team-section"]}>
      <div className={s["container"]}>
        <h2 className={s["team-heading"]}>Екипът</h2>
        <div className={s["team-image-wrapper"]}>
          <img src={'./team.jpg'} alt="Snekcorn Team" className={s["team-image"]} />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
