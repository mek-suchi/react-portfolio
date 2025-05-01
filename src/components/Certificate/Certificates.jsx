import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Tilt from "react-parallax-tilt";
import { SwitchTransition, CSSTransition } from "react-transition-group";
import styles from "./Certificate.module.css";

const certificateData = [
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
  {
    src: "https://scontent.fbkk12-6.fna.fbcdn.net/v/t1.15752-9/454145457_1019682393155057_974241358229359546_n.png?stp=dst-png_s2048x2048&_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=H0DnXu7dH0wQ7kNvwFFMMp1&_nc_oc=AdlvWFbLeCKP91MwV05EM3JcsVd47TMRhFHA9RWG5migf4S_Xo_hj0CD9fplhrDMt_AEVDvzKbJ1Thy8k_vHBFOV&_nc_zt=23&_nc_ht=scontent.fbkk12-6.fna&oh=03_Q7cD2AF3WAlmPqKmEQ0Bu5CE7q1A92jy_sHDq7vnzaFcOCw2zQ&oe=68256E13",
    title: "Full-Stack Web Development",
    issuedBy: "FutureSkill",
    instructor: "ชื่อผู้สอนด",
    completedDate: "January 2025",
    certificateLink: "https://example.com",
  },
];

function Certificate() {
  const { t } = useTranslation();

  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 480);

  /* responsive itemsPerPage */
  useEffect(() => {
    const onResize = () => {
      const mobile = window.innerWidth < 480;
      setIsMobile(mobile);
      setItemsPerPage(mobile ? 1 : 6);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* reset page if itemsPerPage changes */
  useEffect(() => setCurrentPage(0), [itemsPerPage]);

  /* paging helpers */
  const totalPages = Math.ceil(certificateData.length / itemsPerPage);
  const current = certificateData.slice(
    currentPage * itemsPerPage,
    currentPage * itemsPerPage + itemsPerPage
  );

  const pageList = () => {
    if (!isMobile) return [...Array(totalPages).keys()];
    if (totalPages <= 3) return [...Array(totalPages).keys()];
    return [0, 1, "dots", totalPages - 1];
  };

  return (
    <div className={styles.port_con}>
      <h3 className={styles.port_title}>{t("cert.heading")}</h3>

      <SwitchTransition mode="out-in">
        <CSSTransition
          key={currentPage}
          timeout={500}
          classNames={{
            enter: styles.slideEnter,
            enterActive: styles.slideEnterActive,
            exit: styles.slideExit,
            exitActive: styles.slideExitActive,
          }}
          unmountOnExit
        >
          <div className={styles.port_list}>
            {current.map((c, idx) => (
              <div key={idx} className={`${styles.port_items} glassCard`}>
                <Tilt scale={1.1} transitionSpeed={2500} tiltReverse>
                  <img src={c.src} alt={c.title} />
                </Tilt>

                <div className={styles.cert_info}>
                  <p className={styles.cert_title}>{c.title}</p>
                  <p className={styles.cert_meta}>
                    {t("cert.issued_by")}: <span>{c.issuedBy}</span>
                    <br />
                    {t("cert.instructor")}: <span>{c.instructor}</span>
                    <br />
                    {t("cert.completed")}: <span>{c.completedDate}</span>
                  </p>

                  {c.certificateLink && (
                    <a
                      href={c.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cert_link}
                    >
                      {t("cert.view")}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CSSTransition>
      </SwitchTransition>

      {totalPages > 1 && (
        <div className={styles.paginationWrapper}>
          <button
            onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
            disabled={currentPage === 0}
            className={styles.pageButton}
          >
            {t("cert.prev")}
          </button>

          {pageList().map((p, i) =>
            p === "dots" ? (
              <button key={i} className={styles.pageButton} disabled>
                …
              </button>
            ) : (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={
                  p === currentPage
                    ? `${styles.pageButton} ${styles.activePage}`
                    : styles.pageButton
                }
              >
                {p + 1}
              </button>
            )
          )}

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(totalPages - 1, p + 1))
            }
            disabled={currentPage === totalPages - 1}
            className={styles.pageButton}
          >
            {t("cert.next")}
          </button>
        </div>
      )}
    </div>
  );
}

export default Certificate;