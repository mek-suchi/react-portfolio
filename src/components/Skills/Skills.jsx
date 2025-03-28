import React from 'react'
import styles from './Skills.module.css'
import { FaVuejs, FaReact, FaGitAlt, FaNode, FaPhp } from 'react-icons/fa6'
import { SiExpress, SiMysql, SiTailwindcss } from "react-icons/si";
import Tilt from 'react-parallax-tilt';

function Skills({ bgColor }) {
  return (
    <div
      id='skills'
      className={styles.skills_con}
      style={{ background: bgColor }}
    >
      <h3 className={styles.skills_title}>My Skill set</h3>
      <ul className={styles.skills_list}>
        <li>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <FaReact />
          </Tilt>
        </li>
        <li>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <FaVuejs />
          </Tilt>
        </li>
        <li>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <SiTailwindcss />
          </Tilt>
        </li>
        <li>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <FaNode />
          </Tilt>
        </li>
        <li>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <SiExpress />
          </Tilt>
        </li>
        <li>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <FaPhp />
          </Tilt>
        </li>
        <li>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <SiMysql />
          </Tilt>
        </li>
        <li>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <FaGitAlt />
          </Tilt>
        </li>
      </ul>
    </div>
  )
}

export default Skills
