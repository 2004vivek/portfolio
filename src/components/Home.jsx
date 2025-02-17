import React from 'react'
import About from './About';
import Contact from './Contact';
import Introduction from './Introduction';
import Navbar from './Navbar';
import Skills from './Skills';
import Projects from './Projects';
import { Element } from 'react-scroll';
export default function Home() {
  return (
    <>
    <Navbar />
      <Element name="home" className="element">
        <Introduction />
      </Element>
      <Element name="about" className="element">
        <About />
      </Element>
      <Element name="skills" className="element">
        <Skills />
      </Element> 
      <Element name="projects" className="element">
        <Projects />
      </Element>
      <Element name="certifications" className="element">
        
      </Element>
      <Element name="contacts" className="element">
        <Contact />
      </Element>
      <Element name="moreInfo" className="element">
      </Element>
    </>
  )
}
