// ---------------------- IMPORT ZONE ----------------------
import { useState } from 'react';
import './App.css';
import { createGlobalStyle } from 'styled-components';
import AnimatedCursor from "react-animated-cursor";

// Components
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Certificate from './components/Certificate/Certificates';
import Number from './components/Number/Number';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// Icons
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaPhp, FaNodeJs, FaGitAlt,
  FaReact, FaVuejs
} from 'react-icons/fa';

import {
  SiTypescript, SiMysql, SiMongodb, SiTailwindcss,
  SiBootstrap, SiNextdotjs, SiNuxtdotjs, SiVisualstudiocode,
  SiPostman, SiFigma, SiGithub
} from 'react-icons/si';

// ---------------------- STYLES ----------------------
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Prompt', sans-serif !important;
    scroll-behavior: smooth;
  }
`;

// ---------------------- DATA ----------------------
const skillsData = [
  {
    id: 1,
    title: "🧠 Programming Languages",
    description: "Languages I use to build fast, scalable applications.",
    bgColor: "linear-gradient(135deg, rgba(224,242,241,0.8), rgba(128,203,196,0.8))",
    icons: [
      { icon: FaHtml5, color: "#e44d26", label: "HTML" },
      { icon: FaCss3Alt, color: "#1572b6", label: "CSS" },
      { icon: FaJsSquare, color: "#f7df1e", label: "JavaScript" },
      { icon: SiTypescript, color: "#3178c6", label: "TypeScript" },
      { icon: FaPhp, color: "#777bb4", label: "PHP" },
      { icon: FaNodeJs, color: "#68a063", label: "Node.js" },
      { icon: SiMysql, color: "#00758f", label: "MySQL" }
    ]
  },
  {
    id: 2,
    title: "⚙️ Frameworks & Libraries",
    description: "I build modern UI and backend services using these tools.",
    bgColor: "linear-gradient(135deg, rgba(225,245,254,0.8), rgba(129,212,250,0.8))",
    icons: [
      { icon: SiBootstrap, color: "#7952b3", label: "Bootstrap" },
      { icon: SiTailwindcss, color: "#38bdf8", label: "Tailwind" },
      { icon: FaReact, color: "#61dafb", label: "React" },
      { icon: SiNextdotjs, color: "#000000", label: "Next.js" },
      { icon: FaVuejs, color: "#42b883", label: "Vue.js" },
      { icon: SiNuxtdotjs, color: "#00c58e", label: "Nuxt.js" }
    ]
  },
  {
    id: 3,
    title: "🛠️ Tools",
    description: "My daily toolkit for writing, testing, and shipping code.",
    bgColor: "linear-gradient(135deg, rgba(237,231,246,0.8), rgba(179,157,219,0.8))",
    icons: [
      { icon: SiVisualstudiocode, color: "#007acc", label: "VS Code" },
      { icon: SiPostman, color: "#ff6c37", label: "Postman" },
      { icon: SiGithub, color: "#181717", label: "GitHub" },
      { icon: SiFigma, color: "#f24e1e", label: "Figma" },
      { icon: SiMongodb, color: "#47A248", label: "MongoDB" }
    ]
  }
];

// ---------------------- APP COMPONENT ----------------------
function App() {
  return (
    <>
      <GlobalStyle />

      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='0, 65, 125'
        outerAlpha={0.2}
        innerScale={1.5}
        outerScale={5}
        outerStyle={{ border: '3px solid #fff', zIndex: 9999 }}
        clickables={['a', 'input', 'label', 'select', 'textarea', 'button', '.link']}
      />

      <Navbar />
      <Hero />

      <section id="skills">
        {skillsData.map(skill => (
          <Skills
            key={skill.id}
            bgColor={skill.bgColor}
            title={skill.title}
            icons={skill.icons}
            description={skill.description}
          />
        ))}
      </section>

      <section id="certificate">
        <Certificate />
      </section>

      <section id="number">
        <Number />
      </section>

      <section id="project">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default App;
