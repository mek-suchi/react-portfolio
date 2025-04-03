import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { FaBars } from "react-icons/fa6";

function Navbar() {

  const [isToggled, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!isToggled)
  }

  return (
    <nav>
      <div className={styles.container}>
        <div className={styles.nav_con}>
          <div className={styles.logo}>
            <a href="#">Portfolio</a>
          </div>
          
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#certificate">Certificates</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <div className={styles.button}>
            <a href="#">Download CV</a>
          </div>
        </div>

        {/* Mobile Menu */}
        <FaBars className={styles.bars} onClick={handleToggle} />
        {isToggled ? (
          <>
            <ul className={styles.mobile_menu}>
              <li><a href="#">Home</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#certificate">Certificates</a></li>
              <li><a href="#project">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className={styles.mobile_button}>
              <a href="#">Hire Me</a>
            </div>
          </>
        ) : null}

      </div>
    </nav>
  )
}

export default Navbar
