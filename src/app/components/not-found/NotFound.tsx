
import Link from "next/link";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
 <div className={styles.notFound}>
  <h1>404</h1>
  <h2>Страницата не е намерена</h2>
  <p>Изглежда, че страницата, която търсите, не съществува.</p>

  <div className={styles.links}>
    <Link href="/">Към началната страница</Link>
    <Link href="/about">За нас</Link>
  </div>
</div>
  );
}
