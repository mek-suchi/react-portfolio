import { useState } from 'react'
import './App.css'
import { createGlobalStyle } from 'styled-components';

// External Libs
import AnimatedCursor from "react-animated-cursor"

// Components
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Services from './components/Services/Services'
import Portfolio from './components/Portfolio/Portfolio'
import Number from './components/Number/Number'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

// Global Styles
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Prompt', sans-serif !important;
  }
`;

function App() {
  return (
    <>
      {/* Apply Global Styles */}
      <GlobalStyle />

      {/* Custom Animated Cursor */}
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='0, 65, 125'
        outerAlpha={0.2}
        innerScale={1.5}
        outerStyle={{
          border: '3px solid #fff',
          zIndex: 9999,
        }}
        outerScale={5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />

      {/* Main Components */}
      <Navbar />
      <Hero />
      <Skills />
      <Skills bgColor="linear-gradient(to right, #f12711, #f5af19)" />
      <Skills />
      <Services />
      <Portfolio />
      <Number />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App;
