import styles from "./Loading.module.scss";

export default function Loader() {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.loader}>
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
        <span className={styles.circle}></span>
      </div>
    </div>
  );
}
