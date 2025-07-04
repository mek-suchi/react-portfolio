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
  {
    src: "https://i.imghippo.com/files/BYg8088FSY.png",
    title: "MOS : MS Word 23013 (12 ชั่วโมงการเรียนรู้)​",
    issuedBy: "ThaiMOOC",
    instructor: "อาจารย์อรทัย พรหมเพศ",
    completedDate: "23/12/2023",
    certificateLink:
      "https://i.imghippo.com/files/BYg8088FSY.png",
  },
  {
    src: "https://i.imghippo.com/files/kHa7320HyI.png",
    title: "คอมพิวเตอร์กราฟิก (4 ชั่วโมงการเรียนรู้)​",
    issuedBy: "ThaiMOOC",
    instructor: "อาจารย์โกวิทย์ ชนะเคน",
    completedDate: "23/12/2023",
    certificateLink:
      "https://i.imghippo.com/files/kHa7320HyI.png",
  },
  {
    src: "https://i.imghippo.com/files/vg7871ga.png",
    title: "พื้นฐาน Internet of Things (IoTs) (8 ชั่วโมงการเรียนรู้)​",
    issuedBy: "ThaiMOOC",
    instructor: "อาจารย์จักรกฤษณ์ หมั่นวิชา",
    completedDate: "24/12/2023",
    certificateLink:
      "https://i.imghippo.com/files/vg7871ga.png",
  },
  {
    src: "https://i.imghippo.com/files/Lnz3008gCc.png",
    title: "การออกแบบ Infographic (6 ชั่วโมงการเรียนรู้)​",
    issuedBy: "ThaiMOOC",
    instructor: "อาจารย์นิพาดา ไตรรัตน์",
    completedDate: "24/12/2023",
    certificateLink:
      "https://i.imghippo.com/files/Lnz3008gCc.png",
  },
  {
    src: "https://i.imghippo.com/files/NXA5277YqU.png",
    title: "Cloud Techonology Tolls เพื่อการเรียนรู้ในศตวรรษที่ 21 (6 ชั่วโมงการเรียนรู้)",
    issuedBy: "ThaiMOOC",
    instructor: "ดร. รัฐพล ประดับเวทย์",
    completedDate: "25/12/2023",
    certificateLink:
      "https://i.imghippo.com/files/NXA5277YqU.png",
  },
  {
    src: "https://i.imghippo.com/files/YJbQ3876JK.jpg",
    title: "Generative AI และ ChatGPT ทำงานอย่างไร?",
    issuedBy: "CHULA MOOC",
    instructor: "Proadpran Punyabukkana, Ph.D.",
    completedDate: "25/12/2023",
    certificateLink:
      "https://i.imghippo.com/files/YJbQ3876JK.jpg",
  },
  {
    src: "https://i.imghippo.com/files/Tj5879xk.jpg",
    title: "Cybersecurity Awareness for Everyone​",
    issuedBy: "CHULA MOOC",
    instructor: "รองศาสตราจารย์ ดร.สุวิธิดา จรุงเกียรติกุล",
    completedDate: "25/12/2023",
    certificateLink:
      "https://i.imghippo.com/files/Tj5879xk.jpg",
  },
  {
    src: "https://i.imghippo.com/files/fLb9853ruc.jpg",
    title: "Mastering AI-Powered Design & Productivity​",
    issuedBy: "CHULA MOOC",
    instructor: "Proadpran Punyabukkana, Ph.D.",
    completedDate: "25/12/2023",
    certificateLink:
      "https://i.imghippo.com/files/fLb9853ruc.jpg",
  },
  {
    src: "https://i.imghippo.com/files/SRj4361zfc.jpg",
    title: "ได้เข้าร่วมอบรมเชิงปฏิบัติการเรื่อง การเขียนทางวิชาการและการเขียนอ้างอิง",
    issuedBy: "สำนักวิทยบริการและเทคโนโลยีสารสนเทศ มหาวิทยาลัยราชภัฏนครราชสีมา",
    instructor: "ผู้ช่วยศาสตราจารย์ ภณิดา แก้วกูร",
    completedDate: "10/01/2024",
    certificateLink:
      "https://i.imghippo.com/files/SRj4361zfc.jpg",
  },
  {
    src: "https://i.imghippo.com/files/OYT4029vs.png",
    title: "ได้ผ่านการทดสอบวัดทักษะ DIGITAL LITERACY​",
    issuedBy: "สำนักคอมพิวเตอร์ มหาวิทยาลัยราชภัฏนครราชสีมา",
    instructor: "ผู้ช่วยศาสตราจารย์ ดร. อดิศร เนาวนนท์",
    completedDate: "10/01/2024",
    certificateLink:
      "https://i.imghippo.com/files/OYT4029vs.png",
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
