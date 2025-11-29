import { teamGoalData } from "./teamGoalData";
import s from "./TeamGoal.module.scss";

const TeamGoal = () => {
  return (
    <section className={s["team-section"]}>
      <div className={s["container"]}>
        <h2 className={s["team-heading"]}>{teamGoalData.goalText}</h2>
        <div className={s["team-content"]}>
          <div className={s["team-image-wrapper"]}>
            <img
              src={teamGoalData.goalImgUrl}
              alt={teamGoalData.goalImgAlt}
              className={s["team-image"]}
            />
          </div>
          <div className={s["team-text"]}>
            <p>{teamGoalData.goalImageText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamGoal;
