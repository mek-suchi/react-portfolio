// Certificate.jsx
import React, { useState } from 'react';
import styles from './Certificate.module.css';
import Tilt from 'react-parallax-tilt';
import ReactPaginate from 'react-paginate';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// ตัวอย่างข้อมูล Certificate (จำนวนเยอะ ๆ เพื่อทดสอบ)
const certificateData = [
  {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Lt18Snk5Q-AQ7kNvgGWrA5R&_nc_oc=Adlpp57F9sGW_QUgY2qVYe5iJiPNR6miYkjlOexf7DgXwuUcL7-wjHF0mJ1VIXKSYgXV8MA4ketv8ejO2oFbmIr0&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wH6q0d_XGrpNAM9FdbuNY_WB5bBmEmz4lB0paJL31lZJw&oe=68133153',
    title: 'Full-Stack Web Development',
    issuedBy: 'FutureSkill',
    instructor: 'ชื่อผู้สอนด',
    completedDate: 'January 2025',
    certificateLink: 'https://example.com'
  }, {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Lt18Snk5Q-AQ7kNvgGWrA5R&_nc_oc=Adlpp57F9sGW_QUgY2qVYe5iJiPNR6miYkjlOexf7DgXwuUcL7-wjHF0mJ1VIXKSYgXV8MA4ketv8ejO2oFbmIr0&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wH6q0d_XGrpNAM9FdbuNY_WB5bBmEmz4lB0paJL31lZJw&oe=68133153',
    title: 'Full-Stack Web Development',
    issuedBy: 'FutureSkill',
    instructor: 'ชื่อผู้สอนด',
    completedDate: 'January 2025',
    certificateLink: 'https://example.com'
  }, {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Lt18Snk5Q-AQ7kNvgGWrA5R&_nc_oc=Adlpp57F9sGW_QUgY2qVYe5iJiPNR6miYkjlOexf7DgXwuUcL7-wjHF0mJ1VIXKSYgXV8MA4ketv8ejO2oFbmIr0&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wH6q0d_XGrpNAM9FdbuNY_WB5bBmEmz4lB0paJL31lZJw&oe=68133153',
    title: 'Full-Stack Web Development',
    issuedBy: 'FutureSkill',
    instructor: 'ชื่อผู้สอนด',
    completedDate: 'January 2025',
    certificateLink: 'https://example.com'
  }, {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Lt18Snk5Q-AQ7kNvgGWrA5R&_nc_oc=Adlpp57F9sGW_QUgY2qVYe5iJiPNR6miYkjlOexf7DgXwuUcL7-wjHF0mJ1VIXKSYgXV8MA4ketv8ejO2oFbmIr0&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wH6q0d_XGrpNAM9FdbuNY_WB5bBmEmz4lB0paJL31lZJw&oe=68133153',
    title: 'Full-Stack Web Development',
    issuedBy: 'FutureSkill',
    instructor: 'ชื่อผู้สอนด',
    completedDate: 'January 2025',
    certificateLink: 'https://example.com'
  }, {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Lt18Snk5Q-AQ7kNvgGWrA5R&_nc_oc=Adlpp57F9sGW_QUgY2qVYe5iJiPNR6miYkjlOexf7DgXwuUcL7-wjHF0mJ1VIXKSYgXV8MA4ketv8ejO2oFbmIr0&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wH6q0d_XGrpNAM9FdbuNY_WB5bBmEmz4lB0paJL31lZJw&oe=68133153',
    title: 'Full-Stack Web Development',
    issuedBy: 'FutureSkill',
    instructor: 'ชื่อผู้สอนด',
    completedDate: 'January 2025',
    certificateLink: 'https://example.com'
  }, {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Lt18Snk5Q-AQ7kNvgGWrA5R&_nc_oc=Adlpp57F9sGW_QUgY2qVYe5iJiPNR6miYkjlOexf7DgXwuUcL7-wjHF0mJ1VIXKSYgXV8MA4ketv8ejO2oFbmIr0&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wH6q0d_XGrpNAM9FdbuNY_WB5bBmEmz4lB0paJL31lZJw&oe=68133153',
    title: 'Full-Stack Web Development',
    issuedBy: 'FutureSkill',
    instructor: 'ชื่อผู้สอนด',
    completedDate: 'January 2025',
    certificateLink: 'https://example.com'
  }, {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Lt18Snk5Q-AQ7kNvgGWrA5R&_nc_oc=Adlpp57F9sGW_QUgY2qVYe5iJiPNR6miYkjlOexf7DgXwuUcL7-wjHF0mJ1VIXKSYgXV8MA4ketv8ejO2oFbmIr0&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wH6q0d_XGrpNAM9FdbuNY_WB5bBmEmz4lB0paJL31lZJw&oe=68133153',
    title: 'Full-Stack Web Development',
    issuedBy: 'FutureSkill',
    instructor: 'ชื่อผู้สอนด',
    completedDate: 'January 2025',
    certificateLink: 'https://example.com'
  }, {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Lt18Snk5Q-AQ7kNvgGWrA5R&_nc_oc=Adlpp57F9sGW_QUgY2qVYe5iJiPNR6miYkjlOexf7DgXwuUcL7-wjHF0mJ1VIXKSYgXV8MA4ketv8ejO2oFbmIr0&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wH6q0d_XGrpNAM9FdbuNY_WB5bBmEmz4lB0paJL31lZJw&oe=68133153',
    title: 'Full-Stack Web Development',
    issuedBy: 'FutureSkill',
    instructor: 'ชื่อผู้สอนด',
    completedDate: 'January 2025',
    certificateLink: 'https://example.com'
  }, {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Lt18Snk5Q-AQ7kNvgGWrA5R&_nc_oc=Adlpp57F9sGW_QUgY2qVYe5iJiPNR6miYkjlOexf7DgXwuUcL7-wjHF0mJ1VIXKSYgXV8MA4ketv8ejO2oFbmIr0&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wH6q0d_XGrpNAM9FdbuNY_WB5bBmEmz4lB0paJL31lZJw&oe=68133153',
    title: 'Full-Stack Web Development',
    issuedBy: 'FutureSkill',
    instructor: 'ชื่อผู้สอนด',
    completedDate: 'January 2025',
    certificateLink: 'https://example.com'
  }, {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Lt18Snk5Q-AQ7kNvgGWrA5R&_nc_oc=Adlpp57F9sGW_QUgY2qVYe5iJiPNR6miYkjlOexf7DgXwuUcL7-wjHF0mJ1VIXKSYgXV8MA4ketv8ejO2oFbmIr0&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wH6q0d_XGrpNAM9FdbuNY_WB5bBmEmz4lB0paJL31lZJw&oe=68133153',
    title: 'Full-Stack Web Development',
    issuedBy: 'FutureSkill',
    instructor: 'ชื่อผู้สอนด',
    completedDate: 'January 2025',
    certificateLink: 'https://example.com'
  }, {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Lt18Snk5Q-AQ7kNvgGWrA5R&_nc_oc=Adlpp57F9sGW_QUgY2qVYe5iJiPNR6miYkjlOexf7DgXwuUcL7-wjHF0mJ1VIXKSYgXV8MA4ketv8ejO2oFbmIr0&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wH6q0d_XGrpNAM9FdbuNY_WB5bBmEmz4lB0paJL31lZJw&oe=68133153',
    title: 'Full-Stack Web Development',
    issuedBy: 'FutureSkill',
    instructor: 'ชื่อผู้สอนด',
    completedDate: 'January 2025',
    certificateLink: 'https://example.com'
  }, {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Lt18Snk5Q-AQ7kNvgGWrA5R&_nc_oc=Adlpp57F9sGW_QUgY2qVYe5iJiPNR6miYkjlOexf7DgXwuUcL7-wjHF0mJ1VIXKSYgXV8MA4ketv8ejO2oFbmIr0&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wH6q0d_XGrpNAM9FdbuNY_WB5bBmEmz4lB0paJL31lZJw&oe=68133153',
    title: 'Full-Stack Web Development',
    issuedBy: 'FutureSkill',
    instructor: 'ชื่อผู้สอนด',
    completedDate: 'January 2025',
    certificateLink: 'https://example.com'
  }, {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Lt18Snk5Q-AQ7kNvgGWrA5R&_nc_oc=Adlpp57F9sGW_QUgY2qVYe5iJiPNR6miYkjlOexf7DgXwuUcL7-wjHF0mJ1VIXKSYgXV8MA4ketv8ejO2oFbmIr0&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wH6q0d_XGrpNAM9FdbuNY_WB5bBmEmz4lB0paJL31lZJw&oe=68133153',
    title: 'Full-Stack Web Development',
    issuedBy: 'FutureSkill',
    instructor: 'ชื่อผู้สอนด',
    completedDate: 'January 2025',
    certificateLink: 'https://example.com'
  }, {
    src: 'https://scontent.fkkc4-1.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Lt18Snk5Q-AQ7kNvgGWrA5R&_nc_oc=Adlpp57F9sGW_QUgY2qVYe5iJiPNR6miYkjlOexf7DgXwuUcL7-wjHF0mJ1VIXKSYgXV8MA4ketv8ejO2oFbmIr0&_nc_zt=23&_nc_ht=scontent.fkkc4-1.fna&oh=03_Q7cD1wH6q0d_XGrpNAM9FdbuNY_WB5bBmEmz4lB0paJL31lZJw&oe=68133153',
    title: 'Full-Stack Web Development',
    issuedBy: 'FutureSkill',
    instructor: 'ชื่อผู้สอนด',
    completedDate: 'January 2025',
    certificateLink: 'https://example.com'
  },
];

function Certificate() {
  // แสดง 6 ใบต่อหน้า
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  // คำนวณ slice ข้อมูลตามหน้า
  const offset = currentPage * itemsPerPage;
  const currentItems = certificateData.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(certificateData.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>Certificates</h3>

      <TransitionGroup component={null}>
        <CSSTransition
          key={currentPage}
          timeout={500}
          classNames={{
            enter: styles.slideEnter,
            enterActive: styles.slideEnterActive,
            exit: styles.slideExit,
            exitActive: styles.slideExitActive
          }}
        >
          <div className={styles.port_list}>
            {currentItems.map((cert, index) => (
              <div key={index} className={`${styles.port_items} glassCard`}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse={true}>
                  <img src={cert.src} alt={cert.title} />
                </Tilt>
                <div className={styles.cert_info}>
                  <p className={styles.cert_title}>{cert.title}</p>
                  <p className={styles.cert_meta}>
                    Issued by: <span>{cert.issuedBy}</span>
                    <br />
                    Instructor: <span>{cert.instructor}</span>
                    <br />
                    Completed: <span>{cert.completedDate}</span>
                  </p>
                  {cert.certificateLink && (
                    <a
                      href={cert.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cert_link}
                    >
                      View Certificate
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CSSTransition>
      </TransitionGroup>

      {certificateData.length > itemsPerPage && (
        <ReactPaginate
          forcePage={currentPage}
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          pageClassName={styles.pageItem}
          pageLinkClassName={styles.pageLink}
          previousClassName={styles.pageItem}
          previousLinkClassName={styles.pageLink}
          nextClassName={styles.pageItem}
          nextLinkClassName={styles.pageLink}
          breakClassName={styles.pageItem}
          breakLinkClassName={styles.pageLink}
          activeClassName={styles.active}
        />
      )}
    </div>
  );
}

export default Certificate;
