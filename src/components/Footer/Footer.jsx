import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>{t("footer.copyright", { year })}</p>
    </footer>
  );
}

export default Footer;
