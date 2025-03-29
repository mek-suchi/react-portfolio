import React from 'react';
import styles from './Skills.module.css';
import Tilt from 'react-parallax-tilt';

function Skills({ bgColor, title, icons }) {
  return (
    <div
      id="skills"
      className={styles.skills_con}
      style={{ background: bgColor }}
    >
      <h3 className={styles.skills_title}>{title}</h3>

      <ul className={styles.skills_list}>
        {icons.map(({ icon: IconComponent, color, label }, index) => (
          <li key={index} className={styles.skill_item}>
            <Tilt scale={1.1} transitionSpeed={2000} tiltReverse={true}>
              <div className={styles.icon_wrapper}>
                <IconComponent
                  style={{ color: color, width: '60px', height: '60px' }}
                />
                <p className={styles.icon_label}>{label}</p>
              </div>
            </Tilt>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;
