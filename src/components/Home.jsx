import React from 'react'
import About from './About';
import Contact from './Contact';
import Introduction from './Introduction';
import Navbar from './Navbar';
import Skills from './Skills';
import Projects from './Projects';
import { Element } from 'react-scroll';
import Certifications from './Certifications';
export default function Home() {
  return (
    <>
    <Navbar />
      <Element name="Home" className="element">
        <Introduction />
      </Element>
      <Element name="About" className="element">
        <About />
      </Element>
      <Element name="Skills" className="element">
        <Skills />
      </Element> 
      <Element name="Projects" className="element">
        <Projects />
      </Element>
      <Element name="Certifications" className="element">
        <Certifications/>
      </Element>
      <Element name="Contacts" className="element">
        <Contact />
      </Element>
     
    </>
  )
}
