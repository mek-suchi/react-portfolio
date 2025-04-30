import React from 'react';
import styles from './Number.module.css';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

function Number() {
  return (
    <div className={styles.number_con}>
      <div className={styles.number_items}>
        <h3>
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? <CountUp start={0} end={4} duration={5} /> : null}+
              </div>
            )}
          </VisibilitySensor>
        </h3>
        <p>Internship Experience</p>
      </div>
      <div className={styles.number_items}>
        <h3>
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? <CountUp start={0} end={4} duration={5} /> : null}+
              </div>
            )}
          </VisibilitySensor>
        </h3>
        <p>Academic & Practice Projects</p>
      </div>
      <div className={styles.number_items}>
        <h3>
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? <CountUp start={0} end={21} duration={5} /> : null}+
              </div>
            )}
          </VisibilitySensor>
        </h3>
        <p>Completed Full-Stack Courses</p>
      </div>
      <div className={styles.number_items}>
        <h3>
          <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
            {({ isVisible }) => (
              <div>
                {isVisible ? <CountUp start={0} end={100} duration={5} /> : null}%+
              </div>
            )}
          </VisibilitySensor>
        </h3>
        <p>Motivation to Learn & Improve</p>
      </div>
    </div>
  );
}

export default Number;
