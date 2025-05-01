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
          "/src/assets/img/project/ui-revel-soft/ui-search-id.jpg",
          "/src/assets/img/project/ui-revel-soft/ui-show-id.jpg",
          "/src/assets/img/project/ui-revel-soft/ui-view-show.jpg"
        ],
        github: "https://github.com/yourusername/work-progress-tracking-system"
      },
      {
        key: "farm",
        title: t("projects.farm.title"),
        description: t("projects.farm.desc"),
        images: [
          "/src/assets/img/project/ui-farm-base/add_employee.jpg",
          "/src/assets/img/project/ui-farm-base/confirm_delete_employee.jpg",
          "/src/assets/img/project/ui-farm-base/delete_success.jpg",
          "/src/assets/img/project/ui-farm-base/dropdown_employee.jpg",
          "/src/assets/img/project/ui-farm-base/view_employee.jpg",
          "/src/assets/img/project/ui-farm-base/component_date.jpg"
        ],
        github: "https://github.com/yourusername/farm-info-system"
      },
      {
        key: "qr",
        title: t("projects.qr.title"),
        description: t("projects.qr.desc"),
        images: [
          "/src/assets/img/project/ui-food-ordering/account-setting.jpg",
          "/src/assets/img/project/ui-food-ordering/dashboard.jpg",
          "/src/assets/img/project/ui-food-ordering/employee-manage.jpg",
          "/src/assets/img/project/ui-food-ordering/food-manage.jpg",
          "/src/assets/img/project/ui-food-ordering/mobile-food-ordering.jpg",
          "/src/assets/img/project/ui-food-ordering/order-status.jpg",
          "/src/assets/img/project/ui-food-ordering/profile.jpg",
          "/src/assets/img/project/ui-food-ordering/qr-code-status.jpg",
          "/src/assets/img/project/ui-food-ordering/qr-generator.jpg",
          "/src/assets/img/project/ui-food-ordering/table-manage.jpg"
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
