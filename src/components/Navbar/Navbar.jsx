import React, { useState, useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { FaBars } from "react-icons/fa6";
import styles from "./Navbar.module.css";

/* ------- menu config (id ต้องตรงกับ section) ------- */
const items = [
  { key: "home",         href: "#home"        }, // <section id="home">
  { key: "skills",       href: "#skills"      },
  { key: "certificates", href: "#certificate" },
  { key: "projects",     href: "#project"     },
  { key: "contact",      href: "#contact"     }
];

function Navbar() {
  const { t, i18n } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive]         = useState("home");

  /* ---------- scroll-spy, runs once ---------- */
  useEffect(() => {
    const sections = items.map(it => document.querySelector(it.href));
    const offset   = 120; // หลีกเลี่ยง navbar ทับหัวข้อ

    const handleScroll = () => {
      const pos = window.scrollY + offset;
      let current = "home";
      sections.forEach((sec, idx) => {
        if (sec && sec.offsetTop <= pos) current = items[idx].key;
      });
      setActive(current);
    };

    handleScroll();                       // รันทันทีตอน mount
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- language toggle ---------- */
  const toggleLang = () =>
    i18n.changeLanguage(i18n.language === "en" ? "th" : "en");
  const nextLabel = i18n.language === "en" ? "TH" : "EN";

  /* ---------- link renderer ---------- */
  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const LinkList = ({ mobile = false }) => (
    <ul className={mobile ? styles.mobileMenu : styles.links}>
      {items.map(it => (
        <li key={it.key} onClick={mobile ? closeMobile : undefined}>
          <a
            href={it.href}
            className={active === it.key ? styles.active : ""}
          >
            {t(`navbar.${it.key}`)}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="#home" className={styles.logo}>
          {t("navbar.portfolio")}
        </a>

        {/* desktop */}
        <LinkList />
        <button className={styles.langBtn} onClick={toggleLang}>
          {nextLabel}
        </button>

        {/* hamburger */}
        <FaBars
          className={styles.bars}
          onClick={() => setMobileOpen(!mobileOpen)}
        />

        {/* mobile panel */}
        {mobileOpen && (
          <div className={styles.mobilePanel}>
            <LinkList mobile />
            <button className={styles.mobileLang} onClick={toggleLang}>
              {nextLabel}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
