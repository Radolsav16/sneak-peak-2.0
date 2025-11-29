import Link from "next/link";
import s from "./WFooter.module.scss";
import { footer } from "./footer";

export default function WFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.footer__container}>
        <div className={s.footer__logo}>
          <Link href={"/"}>
            <img
              src={footer.logoUrl}
              width={180}
              height={80}
              alt={footer.logoAlt}
            />
          </Link>
        </div>

        <div className={s.footer__middle}>
          <div className={s.footer__column}>
            <h3>{footer.middleHeading}</h3>
            <ul>
              {footer.middleLinks.map((item,index) => (
                <Link href={item.href} key={index}>
                  <li>{item.label}</li>
                </Link>
              ))}
            </ul>
          </div>

          <div className={s.footer__column}>
            <h3>{footer.coloumnHeading}</h3>
            <ul>
              {footer.coloumnLinks.map((item,index) => (
                <Link href={item.href} key={index}>
                  <li>{item.label}</li>
                </Link>
              ))}
            </ul>
          </div>
        </div>

        <div className={s.footer__right}>
          <h3>{footer.rightHeading}</h3>

          <div className={s.footer__social}>
            <Link
              href={footer.instagramLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={footer.instagramImg} alt="Instagram" />
            </Link>
            <Link
              href={footer.tiktokLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={footer.tiktokImg} alt="TikTok" />
            </Link>

               <Link
              href={footer.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={footer.youtubeImg} alt="YouTube" />
            </Link>
            <Link
              href={footer.twitterLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={footer.twitterImg} alt="Twitter" />
            </Link>
          </div>

          <h3>КОНТАКТИ</h3>
          <p>{footer.contactEmail}</p>
          <p>{footer.contactNumber}</p>
          <p>{footer.contactText}</p>
        </div>
      </div>

      <div className={s.footer__bottom}>
        © 2025 Sneakpeak. All rights reserved.
      </div>
    </footer>
  );
}
