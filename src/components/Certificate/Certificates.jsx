import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import styles from "./Certificate.module.css";

const certificateData = [
  {
    src: "https://i.imgur.com/BNX0S7z.gif",
    title: "เริ่มต้นสร้างและแสดงเนื้อหาของเว็บไซต์ด้วย HTML",
    issuedBy: "FutureSkill",
    instructor: "ธรรมฤทธิ์ ลิขิตธีรเมธ",
    completedDate: "24/11/2024",
    certificateLink:
      "https://app.futureskill.co/api/certificate?courseId=872&userId=209620",
  },
  {
    src: "https://i.imgur.com/2F73M7J.gif",
    title: "ปรับแต่งและจัดวางสไตล์ของเว็บไซต์ด้วย CSS",
    issuedBy: "FutureSkill",
    instructor: "ธรรมฤทธิ์ ลิขิตธีรเมธ",
    completedDate: "26/03/2025",
    certificateLink:
      "https://app.futureskill.co/api/certificate?courseId=873&userId=209620",
  },
  {
    src: "https://i.imgur.com/UGjtqE7.gif",
    title: "Basic​ Java​script​ for​ Frontend​ Developer​",
    issuedBy: "FutureSkill",
    instructor: "ณัฏฐชัย กุลธรรมนิตย์",
    completedDate: "26/03/2025",
    certificateLink:
      "https://app.futureskill.co/api/certificate?courseId=516&userId=209620",
  },
  {
    src: "https://i.imgur.com/XJ3YnRn.gif",
    title: "เชื่อมต่อเว็บไซต์กับข้อมูลจากแหล่งอื่นๆ โดยใช้ API​",
    issuedBy: "FutureSkill",
    instructor: "ธรรมฤทธิ์ ลิขิตธีรเมธ",
    completedDate: "26/03/2025",
    certificateLink:
      "https://app.futureskill.co/api/certificate?courseId=875&userId=209620",
  },
  {
    src: "https://i.imgur.com/JjLXDRq.gif",
    title: "Basic React 1 : ความรู้พื้นฐานสำ หรับ Components และ JSX​",
    issuedBy: "FutureSkill",
    instructor: "ณัฏฐชัย กุลธรรมนิตย์",
    completedDate: "22/01/2025",
    certificateLink:
      "https://app.futureskill.co/api/certificate?courseId=466&userId=209620",
  },
  {
    src: "https://i.imgur.com/wZhjJOx.gif",
    title: "Basic React 2 : การจัดการ State และ Events​",
    issuedBy: "FutureSkill",
    instructor: "ณัฏฐชัย กุลธรรมนิตย์",
    completedDate: "07/04/2025",
    certificateLink:
      "https://app.futureskill.co/api/certificate?courseId=467&userId=209620",
  },
  {
    src: "https://i.imgur.com/tm1wOzH.gif",
    title:
      "เริมต้นการใช้ Web Framework ด้วย Express และ รู้จักขันตอนการทํา REST API​",
    issuedBy: "FutureSkill",
    instructor: "จารุพงศ์ ปะจักโก",
    completedDate: "04/04/2025",
    certificateLink:
      "https://app.futureskill.co/api/certificate?courseId=380&userId=209620",
  },
  {
    src: "https://i.imgur.com/8NbcJ0B.gif",
    title: "Getting Started as C# Developer​",
    issuedBy: "FutureSkill",
    instructor: "ผู้ช่วยศาสตราจารย์ บัญญพนต์ พูลสวัสดิ์",
    completedDate: "17/04/2025",
    certificateLink:
      "https://app.futureskill.co/api/certificate?courseId=308&userId=209620",
  },
  {
    src: "https://i.imgur.com/IWAZ60Y.gif",
    title: "C#: การเขียนโปรแกรมเชิงวัตถุ (Object Oriented Programming-OOP)​",
    issuedBy: "FutureSkill",
    instructor: "ผู้ช่วยศาสตราจารย์ บัญญพนต์ พูลสวัสดิ์",
    completedDate: "17/04/2025",
    certificateLink:
      "https://app.futureskill.co/api/certificate?courseId=309&userId=209620",
  },
  {
    src: "https://i.imgur.com/DeKAEyu.gif",
    title: "Advanced For C# Programming​",
    issuedBy: "FutureSkill",
    instructor: "ผู้ช่วยศาสตราจารย์ บัญญพนต์ พูลสวัสดิ์",
    completedDate: "23/04/2025",
    certificateLink:
      "https://app.futureskill.co/api/certificate?courseId=310&userId=209620",
  },
];

function Certificate() {
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  /* responsive itemsPerPage */
  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 480;
      setIsMobile(mobile);
      setItemsPerPage(mobile ? 1 : 6);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* reset page if itemsPerPage changes */
  useEffect(() => setCurrentPage(0), [itemsPerPage]);

  /* paging helpers */
  const totalPages = Math.ceil(certificateData.length / itemsPerPage);
  const current = certificateData.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const pageList = () => {
    if (!isMobile) return [...Array(totalPages).keys()];
    if (totalPages <= 3) return [...Array(totalPages).keys()];
    return [0, 1, "dots", totalPages - 1];
  };

  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>{t("cert.heading")}</h3>

      <SwitchTransition mode="out-in">
        <CSSTransition
          key={currentPage}
          timeout={500}
          classNames={{
            enter: styles.slideEnter,
            enterActive: styles.slideEnterActive,
            exit: styles.slideExit,
            exitActive: styles.slideExitActive,
          }}
          unmountOnExit
        >
          <div className={styles.port_list}>
            {current.map((c, idx) => (
              <div key={idx} className={`${styles.port_items} glassCard`}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse>
                  <img src={c.src} alt={c.title} />
                </Tilt>

                <div className={styles.cert_info}>
                  <p className={styles.cert_title}>{c.title}</p>
                  <p className={styles.cert_meta}>
                    {t("cert.issued_by")}: <span>{c.issuedBy}</span>
                    <br />
                    {t("cert.instructor")}: <span>{c.instructor}</span>
                    <br />
                    {t("cert.completed")}: <span>{c.completedDate}</span>
                  </p>

                  {c.certificateLink && (
                    <a
                      href={c.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cert_link}
                    >
                      {t("cert.view")}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CSSTransition>
      </SwitchTransition>

      {totalPages > 1 && (
        <div className={styles.paginationWrapper}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            className={styles.pageButton}
          >
            {t("cert.prev")}
          </button>

          {pageList().map((p, i) =>
            p === "dots" ? (
              <button key={i} className={styles.pageButton} disabled>
                …
              </button>
            ) : (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={
                  p === currentPage
                    ? `${styles.pageButton} ${styles.activePage}`
                    : styles.pageButton
                }
              >
                {p + 1}
              </button>
            )
          )}

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(totalPages - 1, p + 1))
            }
            disabled={currentPage === totalPages - 1}
            className={styles.pageButton}
          >
            {t("cert.next")}
          </button>
        </div>
      )}
    </div>
  );
}

export default Certificate;
