// src/components/Hero/Hero.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./Hero.module.css";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaDownload } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Tilt from "react-parallax-tilt";

function Hero() {
  const { t } = useTranslation();

  return (
    <div id="home" className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>{t("hero.greeting")}</p>
            <h3 className={styles.text_2}>{t("hero.name")}</h3>
            <p className={styles.text_3}>
              <span style={{ marginRight: "10px" }}>{t("hero.im_a")}</span>
              <TypeAnimation
                sequence={[
                  t("hero.roles.fullstack"),
                  1000,
                  t("hero.roles.frontend"),
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>
              {t("hero.description")}
            </p>
            <ul className={styles.hero_social}>
              <li>
                <a
                  href="https://github.com/mek-suchi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/suchichart-chuttale-8987b5357"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/suchichart.chuttale/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF />
                </a>
              </li>
            </ul>
            <div className={styles.actions}>
              <a
                className={styles.button}
                href="/src/assets/Resume-Suchichiart.pdf"
                download
              >
                <FaDownload style={{ marginRight: "8px" }}/>
                {t("hero.download_cv")}
              </a>
            </div>
          </div>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse>
            <div className={styles.hero_img}></div>
          </Tilt>
        </div>
      </div>
    </div>
  );
}

export default Hero;
