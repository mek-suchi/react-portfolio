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
            <p className={styles.text_4}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"I love learning and always welcome new experiences. No matter how challenging, I’m ready to face them with determination, perseverance, and full responsibility. I believe every opportunity is a lesson, and every obstacle is a driving force for self-development. I am enthusiastic, adaptable, have strong interpersonal skills, and can apply my knowledge to create the most meaningful impact."

            </p>
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
