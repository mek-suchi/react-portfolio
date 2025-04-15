// Certificate.jsx
import React, { useState, useEffect } from "react";
import styles from "./Certificate.module.css";
import Tilt from "react-parallax-tilt";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const certificateData = [
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "/src/assets/img/certificate/ac2fde63-0d73-4d55-ab50-bd0302623bed.png",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
];

function Certificate() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
      if (window.innerWidth < 480) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(6);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [itemsPerPage]);

  const offset = currentPage * itemsPerPage;
  const currentItems = certificateData.slice(offset, offset + itemsPerPage);
  const totalPages = Math.ceil(certificateData.length / itemsPerPage);

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const handlePrevious = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const getMobilePageIndices = () => {
    if (totalPages <= 3) {
      return [...Array(totalPages).keys()];
    }
    return [0, 1, "dots", totalPages - 1];
  };

  const pageIndices = isMobile
    ? getMobilePageIndices()
    : [...Array(totalPages).keys()];

  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Certificates</h3>
      <TransitionGroup component={null}>
        <CSSTransition
          key={currentPage}
          timeout={500}
          classNames={{
            enter: styles.slideEnter,
            enterActive: styles.slideEnterActive,
            exit: styles.slideExit,
            exitActive: styles.slideExitActive,
          }}
        >
          <div className={styles.port_list}>
            {currentItems.map((cert, index) => (
              <div key={index} className={`${styles.port_items} glassCard`}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                  <img src={cert.src} alt={cert.title} />
                </Tilt>
                <div className={styles.cert_info}>
                  <p className={styles.cert_title}>{cert.title}</p>
                  <p className={styles.cert_meta}>
                    Issued by: <span>{cert.issuedBy}</span>
                    <br />
                    Instructor: <span>{cert.instructor}</span>
                    <br />
                    Completed: <span>{cert.completedDate}</span>
                  </p>
                  {cert.certificateLink && (
                    <a
                      href={cert.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cert_link}
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CSSTransition>
      </TransitionGroup>
      {totalPages > 1 && (
        <div className={styles.paginationWrapper}>
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={styles.pageButton}
          >
            Prev
          </button>
          {pageIndices.map((page, index) =>
            page === "dots" ? (
              <button key={index} className={styles.pageButton} disabled>
                ...
              </button>
            ) : (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={
                  page === currentPage
                    ? `${styles.pageButton} ${styles.activePage}`
                    : styles.pageButton
                }
              >
                {page + 1}
              </button>
            )
          )}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages - 1}
            className={styles.pageButton}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}

export default Certificate;
