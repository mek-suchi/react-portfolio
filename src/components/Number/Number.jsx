import React from "react";
import { useTranslation } from "react-i18next";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import styles from "./Number.module.css";

const stats = [
  { end: 4,  key: "number.intern"    }, // Internship Experience
  { end: 4,  key: "number.projects"  }, // Academic & Practice Projects
  { end: 21, key: "number.courses"   }, // Completed Courses
  { end: 100,key: "number.motivation"}  // Motivation %
];

function Number() {
  const { t } = useTranslation();

  return (
    <div className={styles.number_con}>
      {stats.map(({ end, key }) => (
        <div key={key} className={styles.number_items}>
          <h3>
            <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
              {({ isVisible }) => (
                <span>
                  {isVisible && <CountUp start={0} end={end} duration={4} />}+
                </span>
              )}
            </VisibilitySensor>
          </h3>
          <p>{t(key)}</p>
        </div>
      ))}
    </div>
  );
}

export default Number;
