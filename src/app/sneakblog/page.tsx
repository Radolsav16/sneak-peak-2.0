import Link from "next/link";
import s from "./SneakBlog.module.scss";
import { sneakblog } from "./sneakblog";
import { Header } from "../components/header/Header";

export default function SneakBlog() {
  return (
    <>
      <Header />
      <div className={s["sneakblog"]}>
        <header className={s["blog-header"]}>
          <Link href={"/"}>
            <img
              src={sneakblog.sneakpeakImgUrl}
              alt={sneakblog.sneakpeakImgAlt}
              className={s["logo-left"]}
            />
          </Link>

          <h1>{sneakblog.heading}</h1>
          <Link href={"/"}>
            <img
              src={sneakblog.sneakpeakImgUrl}
              alt={sneakblog.sneakpeakImgAlt}
              className={s["logo-right"]}
            />
          </Link>

          <p>{sneakblog.followVibeText}</p>
        </header>
        <Link href="/campaign">
          <section className={s["blog-card"]}>
            <p className={s["date"]}>{sneakblog.capmaignDate}</p>
            <h2>
              {sneakblog.campaignHeading}
              <br />
              {sneakblog.campaignSubHeading}
            </h2>
            <p className={s["desc"]}>{sneakblog.campaignDesc}</p>
            <img className={s["blog-image"]} src={sneakblog.blogImgSrc} />
          </section>
        </Link>

        <Link href={"/sneakpeak-treasure"}>
          <section className={s["blog-card"]}>
            <p className={s["date"]}>{sneakblog.treasureDate}</p>
            <h2>
              {sneakblog.treasureHuntHeading}
              <br />
              {sneakblog.treasureHuntSubHeading}
            </h2>
            <p className={s["desc"]}>{sneakblog.treasureHuntDesc}</p>

            <img
              className={s["treasure-img"]}
              src={sneakblog.treasureHuntBlogImageUrl}
            />
          </section>
        </Link>
      </div>
    </>
  );
}
