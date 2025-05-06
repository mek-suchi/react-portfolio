import React, { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Carousel } from "react-responsive-carousel";
import FsLightbox from "fslightbox-react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Projects.module.css";

function Projects() {
  const { t } = useTranslation();

  /* build project list after translation is ready */
  const projectData = useMemo(
    () => [
      {
        key: "work",
        title: t("projects.work.title"),
        description: t("projects.work.desc"),
        images: [
          "https://i.imgur.com/CIMBPEG.jpeg",
          "https://i.imgur.com/OR6grSJ.jpeg",
          "https://i.imgur.com/Sidf2aA.jpeg"
        ],
        github: "https://github.com/yourusername/work-progress-tracking-system"
      },
      {
        key: "farm",
        title: t("projects.farm.title"),
        description: t("projects.farm.desc"),
        images: [
          "https://i.imgur.com/1tW5esg.jpeg",
          "https://i.imgur.com/C6EFKKZ.jpeg",
          "https://i.imgur.com/5vr2J7w.jpeg",
          "https://i.imgur.com/h34BlDp.jpeg",
          "https://i.imgur.com/ZnqddvF.jpeg",
          "https://i.imgur.com/dlLEFGd.jpeg"
        ],
        github: "https://github.com/yourusername/farm-info-system"
      },
      {
        key: "qr",
        title: t("projects.qr.title"),
        description: t("projects.qr.desc"),
        images: [
          "https://i.imgur.com/k03Vf9Z.jpeg",
          "https://i.imgur.com/1ed3Ycj.jpeg",
          "https://i.imgur.com/0cKxL5W.jpeg",
          "https://i.imgur.com/RJygzLs.jpeg",
          "https://i.imgur.com/GqkJ36V.jpeg",
          "https://i.imgur.com/XZTHn35.jpeg",
          "https://i.imgur.com/UXJyDoH.jpeg",
          "https://i.imgur.com/KVSdiis.jpeg",
          "https://i.imgur.com/bKLHOft.jpeg",
          "https://i.imgur.com/dhoTUUc.jpeg"
        ],
        github: "https://github.com/yourusername/qr-food-ordering-system"
      }
    ],
    [t]
  );

  /* lightbox state */
  const [toggler, setToggler]     = useState(false);
  const [gallery,  setGallery]    = useState([]);
  const [startIdx, setStartIdx]   = useState(1);

  const openLightbox = (imgs, idx) => {
    setGallery(imgs);
    setStartIdx(idx + 1);
    setToggler(!toggler);
  };

  return (
    <div className={styles.wrapper} id="project">
      <h3 className={styles.title}>{t("projects.heading")}</h3>

      <div className={styles.grid}>
        {projectData.map((p) => (
          <div key={p.key} className={styles.card}>
            <Carousel
              autoPlay
              infiniteLoop
              interval={3000}
              showThumbs={false}
              showStatus={false}
            >
              {p.images.map((img, i) => (
                <div key={i} onClick={() => openLightbox(p.images, i)}>
                  <img
                    src={img}
                    alt={`${p.title} ${i + 1}`}
                    className={styles.image}
                    style={{ cursor: "zoom-in" }}
                  />
                </div>
              ))}
            </Carousel>

            <div className={styles.content}>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              <a
                href={p.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {t("projects.view")}
              </a>
            </div>
          </div>
        ))}
      </div>

      <FsLightbox toggler={toggler} sources={gallery} slide={startIdx} />
    </div>
  );
}

export default Projects;
