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
      'https://images.unsplash.com/photo-1620325867502-221cfb5faa5f?q=80&w=2057&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ],
    github: 'https://github.com/yourusername/farm-info-system'
  },
  {
    title: 'Student Dashboard',
    description:
      'An academic dashboard for students to view schedules, grades, and announcements.',
    images: [
      'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://plus.unsplash.com/premium_photo-1661293879952-c5c093282801?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
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
