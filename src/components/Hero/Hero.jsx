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
            <p className={styles.text_4}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;“ผมเป็นคนที่รักการเรียนรู้และเปิดรับประสบการณ์ใหม่อยู่เสมอ ไม่ว่าจะเป็นเรื่องที่ท้าทายหรือมีข้อจำกัดมากเพียงใด ผมพร้อมจะสู้และมุ่งมั่นจนกว่าจะบรรลุเป้าหมายที่ตั้งไว้ ด้วยความไม่ย่อท้อ อดทน และมีความรับผิดชอบสูง ผมเชื่อว่าทุกโอกาสคือบทเรียนที่มีค่า และทุกอุปสรรคคือแรงผลักดันให้พัฒนาตัวเอง ผมมีความกระตือรือร้นในการทำงาน มีมนุษยสัมพันธ์ที่ดี สามารถปรับตัวเข้ากับสถานการณ์และผู้คนรอบข้างได้อย่างเหมาะสม พร้อมทั้งนำความรู้และประสบการณ์ที่ได้รับมาประยุกต์ใช้ให้เกิดประโยชน์สูงสุด”</p>
            <ul className={styles.hero_social}>
              <li><a href="https://github.com/MekHub-Stack" target='_blank'><FaGithub /></a></li>
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
