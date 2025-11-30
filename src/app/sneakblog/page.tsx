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
    <div className={s["header-row"]}>
      <Link href="/">
        <img
          src={sneakblog.sneakpeakImgUrl}
          alt={sneakblog.sneakpeakImgAlt}
          className={s["logo"]}
        />
      </Link>

      <h1 className={s["title"]}>{sneakblog.heading}</h1>

      <Link href="/">
        <img
          src={sneakblog.sneakpeakImgUrl}
          alt={sneakblog.sneakpeakImgAlt}
          className={s["logo"]}
        />
      </Link>
    </div>

    <p className={s["subtitle"]}>{sneakblog.followVibeText}</p>
  </header>

  
  <Link href="/campaign">
    <section className={s["blog-card"]}>
      <div className={s["text-area"]}>
        <p className={s["date"]}>{sneakblog.capmaignDate}</p>
        <h2>
          {sneakblog.campaignHeading}
          <br />
          {sneakblog.campaignSubHeading}
        </h2>
        <p className={s["desc"]}>{sneakblog.campaignDesc}</p>
      </div>

      <img className={s["card-image"]} src={sneakblog.blogImgSrc} />
    </section>
  </Link>


  <Link href="/sneakpeak-treasure">
    <section className={s["blog-card"]}>
      <div className={s["text-area"]}>
        <p className={s["date"]}>{sneakblog.treasureDate}</p>
        <h2>
          {sneakblog.treasureHuntHeading}
          <br />
          {sneakblog.treasureHuntSubHeading}
        </h2>
        <p className={s["desc"]}>{sneakblog.treasureHuntDesc}</p>
      </div>

      <img
        className={s["card-image"]}
        src={sneakblog.treasureHuntBlogImageUrl}
      />
    </section>
  </Link>
</div>

    </>
  );
}
