import React from 'react'
import styles from './Hero.module.css'
import { FaGithub, FaLinkedinIn, FaFacebookF } from 'react-icons/fa6'
import { TypeAnimation } from 'react-type-animation';
import Tilt from 'react-parallax-tilt';

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.container}>
        <div className={styles.hero_con}>
          <div className={styles.hero_info}>
            <p className={styles.text_1}>Hi, it's me</p>
            <h3 className={styles.text_2}>Suchichart Chuttale</h3>
            <p className={styles.text_3}>
              <span style={{ marginRight: '10px' }}>I'm a</span>
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  'Full-Stack Developer',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  'Web Developer',
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </p>
            <p className={styles.text_4}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"ผมรักการเรียนรู้และเปิดรับประสบการณ์ใหม่เสมอ ไม่ว่าท้าทายแค่ไหน ผมพร้อมสู้ มุ่งมั่น อดทน และรับผิดชอบเต็มที่ เชื่อว่าทุกโอกาสคือบทเรียน และทุกอุปสรรคคือแรงผลักดันให้พัฒนาตัวเอง ผมกระตือรือร้น มีมนุษยสัมพันธ์ดี ปรับตัวเก่ง และนำความรู้มาประยุกต์ใช้ให้เกิดประโยชน์สูงสุด"</p>
            <ul className={styles.hero_social}>
              <li><a href="https://github.com/mek-suchi" target='_blank'><FaGithub /></a></li>
              <li><a href="#"><FaLinkedinIn /></a></li>
              <li><a href="https://www.facebook.com/suchichart.chuttale/" target='_blank'><FaFacebookF /></a></li>
            </ul>
          </div>
          <Tilt scale={1.2} transitionSpeed={2500} tiltReverse={true}>
            <div className={styles.hero_img}></div>
          </Tilt>
        </div>
      </div>
    </div>
  )
}

export default Hero
