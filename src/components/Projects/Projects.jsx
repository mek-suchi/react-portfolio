import React, { useState } from "react";
import styles from "./Projects.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import FsLightbox from "fslightbox-react";

const projectData = [
  {
    title: "Work Progress Tracking System",
    description: [
      "Refactored and expanded the frontend using Vue.js and Nuxt.js",
      "Improved backend logic with Node.js and Express",
      "Collaborated with a mentor to align data display with user requirements",
      "Enhanced task tracking experience with a more intuitive UI",
    ].join("; "),
    images: [
      "/src/assets/img/project/ui-revel-soft/ui-search-id.jpg",
      "/src/assets/img/project/ui-revel-soft/ui-show-id.jpg",
      "/src/assets/img/project/ui-revel-soft/ui-view-show.jpg",
    ],
    github: "https://github.com/yourusername/work-progress-tracking-system",
  },
  {
    title: "SUT Farm Information System",
    description: [
      "Improved UI, search features, and data management using React.js, Node.js, and MySQL",
      "Conducted testing to ensure data accuracy and system usability",
      "Fixed inconsistencies and enhanced daily operation workflows",
    ].join("; "),
    images: [
      "/src/assets/img/project/ui-farm-base/add_employee.jpg",
      "/src/assets/img/project/ui-farm-base/confirm_delete_employee.jpg",
      "/src/assets/img/project/ui-farm-base/delete_success.jpg",
      "/src/assets/img/project/ui-farm-base/dropdown_employee.jpg",
      "/src/assets/img/project/ui-farm-base/view_employee.jpg",
      "/src/assets/img/project/ui-farm-base/component_date.jpg",
    ],
    github: "https://github.com/yourusername/farm-info-system",
  },
  {
    title: "QR-Code Food Ordering System",
    description: [
      "Built a fully responsive ordering interface with HTML, CSS, JavaScript, and Tailwind CSS",
      "Generated and scanned table-specific QR codes via PHP, storing orders in MySQL",
      "Implemented a dashboard for real-time order status tracking and kitchen management",
      "Optimized database queries and secured customer data for reliable, high-volume use",
    ].join("; "),
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
      "/src/assets/img/project/ui-food-ordering/table-manage.jpg",
    ],
    github: "https://github.com/yourusername/qr-food-ordering-system",
  },
];

function Projects() {
  const [lightboxToggler, setLightboxToggler] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);

  const openLightbox = (images, index) => {
    setCurrentGallery(images);
    setCurrentSlide(index + 1);
    setLightboxToggler(!lightboxToggler);
  };

  return (
    <div className={styles.wrapper} id="project">
      <h3 className={styles.title}>Projects</h3>
      <div className={styles.grid}>
        {projectData.map((proj, pIndex) => (
          <div key={pIndex} className={styles.card}>
            <Carousel
              autoPlay
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              interval={3000}
            >
              {proj.images.map((img, i) => (
                <div key={i} onClick={() => openLightbox(proj.images, i)}>
                  <img
                    src={img}
                    alt={`${proj.title} ${i + 1}`}
                    className={styles.image}
                    style={{ cursor: "zoom-in" }}
                  />
                </div>
              ))}
            </Carousel>
            <div className={styles.content}>
              <h4>{proj.title}</h4>
              <p>{proj.description}</p>
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <FsLightbox
        toggler={lightboxToggler}
        sources={currentGallery}
        slide={currentSlide}
      />
    </div>
  );
}

export default Projects;
