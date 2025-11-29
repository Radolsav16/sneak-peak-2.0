"use client";
import Link from "next/link";
import { useState } from "react";
import styles from "./WHeader.module.scss";
import { headerData } from "./headerData";

export  default function WHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className={styles["navbar"]}>
        <Link href={"/"}>
          <img
            src={headerData.sneakpeakLogoUrlBlack}
            alt={headerData.sneakpeakLogoAlt}
            width={1000}
            height={1000}
          />
        </Link>

        <button
          className={`${styles["menu-toggle"]} ${
            menuOpen ? styles["open"] : ""
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`${styles.mobileMenu} ${menuOpen ? styles.show : ""}`}>
          <ul>
            {headerData.navigationLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} onClick={() => setMenuOpen(false)}>
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles["nav-container"]}>
          <ul className={styles["nav-links"]}>
            {headerData.navigationLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
