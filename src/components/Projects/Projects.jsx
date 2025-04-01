import React, { useState } from 'react';
import styles from './Projects.module.css';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import FsLightbox from 'fslightbox-react';

const projectData = [
  {
    title: 'Farm Info System',
    description:
      'A system for managing agricultural data of a university farm. Built with React, Node.js, and MySQL.',
    images: [
      'https://scontent.fkkc4-2.fna.fbcdn.net/v/t1.15752-9/485209442_1206801070818870_133400766013769270_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=8FrRuEq1UM4Q7kNvgHXd8rI&_nc_oc=AdljqUj3bt4STKGB8QYub2sRU7nYvw1h82EyqiqDCzz9StPhRQVg7xpMSdn5LaJqdUAd9dDxifPOEgPXPAVw5p6C&_nc_zt=23&_nc_ht=scontent.fkkc4-2.fna&oh=03_Q7cD1wHE6PmVvLO7-KAWArxgjMAcZKpaIHj-3WQaEWljoXCJLQ&oe=6812E8B3',
      'https://scontent.fkkc4-2.fna.fbcdn.net/v/t1.15752-9/485209442_1206801070818870_133400766013769270_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=8FrRuEq1UM4Q7kNvgHXd8rI&_nc_oc=AdljqUj3bt4STKGB8QYub2sRU7nYvw1h82EyqiqDCzz9StPhRQVg7xpMSdn5LaJqdUAd9dDxifPOEgPXPAVw5p6C&_nc_zt=23&_nc_ht=scontent.fkkc4-2.fna&oh=03_Q7cD1wHE6PmVvLO7-KAWArxgjMAcZKpaIHj-3WQaEWljoXCJLQ&oe=6812E8B3'
    ],
    github: 'https://github.com/yourusername/farm-info-system'
  },
  {
    title: 'Student Dashboard',
    description:
      'An academic dashboard for students to view schedules, grades, and announcements.',
    images: [
      'https://scontent.fkkc4-2.fna.fbcdn.net/v/t1.15752-9/485209442_1206801070818870_133400766013769270_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=8FrRuEq1UM4Q7kNvgHXd8rI&_nc_oc=AdljqUj3bt4STKGB8QYub2sRU7nYvw1h82EyqiqDCzz9StPhRQVg7xpMSdn5LaJqdUAd9dDxifPOEgPXPAVw5p6C&_nc_zt=23&_nc_ht=scontent.fkkc4-2.fna&oh=03_Q7cD1wHE6PmVvLO7-KAWArxgjMAcZKpaIHj-3WQaEWljoXCJLQ&oe=6812E8B3', 'https://scontent.fkkc4-2.fna.fbcdn.net/v/t1.15752-9/485209442_1206801070818870_133400766013769270_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=8FrRuEq1UM4Q7kNvgHXd8rI&_nc_oc=AdljqUj3bt4STKGB8QYub2sRU7nYvw1h82EyqiqDCzz9StPhRQVg7xpMSdn5LaJqdUAd9dDxifPOEgPXPAVw5p6C&_nc_zt=23&_nc_ht=scontent.fkkc4-2.fna&oh=03_Q7cD1wHE6PmVvLO7-KAWArxgjMAcZKpaIHj-3WQaEWljoXCJLQ&oe=6812E8B3', 'https://scontent.fkkc4-2.fna.fbcdn.net/v/t1.15752-9/485209442_1206801070818870_133400766013769270_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=8FrRuEq1UM4Q7kNvgHXd8rI&_nc_oc=AdljqUj3bt4STKGB8QYub2sRU7nYvw1h82EyqiqDCzz9StPhRQVg7xpMSdn5LaJqdUAd9dDxifPOEgPXPAVw5p6C&_nc_zt=23&_nc_ht=scontent.fkkc4-2.fna&oh=03_Q7cD1wHE6PmVvLO7-KAWArxgjMAcZKpaIHj-3WQaEWljoXCJLQ&oe=6812E8B3',
      'https://scontent.fkkc4-2.fna.fbcdn.net/v/t1.15752-9/485209442_1206801070818870_133400766013769270_n.jpg?stp=dst-jpg_s2048x2048_tt6&_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=8FrRuEq1UM4Q7kNvgHXd8rI&_nc_oc=AdljqUj3bt4STKGB8QYub2sRU7nYvw1h82EyqiqDCzz9StPhRQVg7xpMSdn5LaJqdUAd9dDxifPOEgPXPAVw5p6C&_nc_zt=23&_nc_ht=scontent.fkkc4-2.fna&oh=03_Q7cD1wHE6PmVvLO7-KAWArxgjMAcZKpaIHj-3WQaEWljoXCJLQ&oe=6812E8B3',
    ],
    github: 'https://github.com/yourusername/student-dashboard'
  },
  {
    title: 'Rabbit Care Tracker (Pet Health Assistant)',
    description:
      'A responsive web app for managing pet care routines, including feeding logs, health tracking, and medication schedules. Built with React, Node.js, and Firebase. Designed to help pet owners ensure consistent daily care for their rabbits and other small animals.',
    images: [
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    github: 'https://github.com/yourusername/rabbit-care-tracker'
  }
];

function Projects() {
  const [lightboxToggler, setLightboxToggler] = useState(false);
  const [currentGallery, setCurrentGallery] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(1);

  const openLightbox = (images, index) => {
    setCurrentGallery(images);
    setCurrentSlide(index + 1);
    setLightboxToggler(!lightboxToggler);
  };

  return (
    <div className={styles.wrapper} id="project">
      <h3 className={styles.title}>My Projects</h3>
      <div className={styles.grid}>
        {projectData.map((proj, pIndex) => (
          <div key={pIndex} className={styles.card}>
            <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000}>
              {proj.images.map((img, i) => (
                <div key={i} onClick={() => openLightbox(proj.images, i)}>
                  <img
                    src={img}
                    alt={`${proj.title} ${i + 1}`}
                    className={styles.image}
                    style={{ cursor: 'zoom-in' }}
                  />
                </div>
              ))}
            </Carousel>
            <div className={styles.content}>
              <h4>{proj.title}</h4>
              <p>{proj.description}</p>
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                View on GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
      <FsLightbox toggler={lightboxToggler} sources={currentGallery} slide={currentSlide} />
    </div>
  );
}

export default Projects;
