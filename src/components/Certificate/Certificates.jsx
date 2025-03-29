import React from 'react';
import styles from './Certificate.module.css';
import Tilt from 'react-parallax-tilt';

const certificateData = [
  {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=tPTG9e1alI0Q7kNvgHnrzi6&_nc_oc=AdmGYJYkTS2oIJeLgmnDIS92JhmzOrw9K19wOt4cIXFJly1YFJvuLIG0NYRNbbjT5a7hXOlIh_Od5fXoCoaX37A_&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wFqh-kbYeneKz65J7GhNO6y9wNT86cHzNf_j5gid8ZLcQ&oe=680FE593',
    title: 'Full-Stack Web Development'
  },
  {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=tPTG9e1alI0Q7kNvgHnrzi6&_nc_oc=AdmGYJYkTS2oIJeLgmnDIS92JhmzOrw9K19wOt4cIXFJly1YFJvuLIG0NYRNbbjT5a7hXOlIh_Od5fXoCoaX37A_&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wFqh-kbYeneKz65J7GhNO6y9wNT86cHzNf_j5gid8ZLcQ&oe=680FE593',
    title: 'DevOps with Git & GitHub'
  },
  {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=tPTG9e1alI0Q7kNvgHnrzi6&_nc_oc=AdmGYJYkTS2oIJeLgmnDIS92JhmzOrw9K19wOt4cIXFJly1YFJvuLIG0NYRNbbjT5a7hXOlIh_Od5fXoCoaX37A_&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wFqh-kbYeneKz65J7GhNO6y9wNT86cHzNf_j5gid8ZLcQ&oe=680FE593',
    title: 'JavaScript for Beginners'
  },
  {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=tPTG9e1alI0Q7kNvgHnrzi6&_nc_oc=AdmGYJYkTS2oIJeLgmnDIS92JhmzOrw9K19wOt4cIXFJly1YFJvuLIG0NYRNbbjT5a7hXOlIh_Od5fXoCoaX37A_&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wFqh-kbYeneKz65J7GhNO6y9wNT86cHzNf_j5gid8ZLcQ&oe=680FE593',
    title: 'Frontend UI Design'
  },
  {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=tPTG9e1alI0Q7kNvgHnrzi6&_nc_oc=AdmGYJYkTS2oIJeLgmnDIS92JhmzOrw9K19wOt4cIXFJly1YFJvuLIG0NYRNbbjT5a7hXOlIh_Od5fXoCoaX37A_&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wFqh-kbYeneKz65J7GhNO6y9wNT86cHzNf_j5gid8ZLcQ&oe=680FE593',
    title: 'Database Fundamentals'
  },
  {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=tPTG9e1alI0Q7kNvgHnrzi6&_nc_oc=AdmGYJYkTS2oIJeLgmnDIS92JhmzOrw9K19wOt4cIXFJly1YFJvuLIG0NYRNbbjT5a7hXOlIh_Od5fXoCoaX37A_&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wFqh-kbYeneKz65J7GhNO6y9wNT86cHzNf_j5gid8ZLcQ&oe=680FE593',
    title: 'React + Node Integration'
  }
];

function Certificate() {
  return (
    <div id="certificate" className={styles.port_con}>
      <h3 className={styles.port_title}>Certificates</h3>
      <div className={styles.port_list}>
        {certificateData.map((cert, index) => (
          <div key={index} className={`${styles.port_items} glassCard`}>
            <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
              <img src={cert.src} alt={cert.title} />
            </Tilt>
            <p>{cert.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certificate;
