import React from 'react'
import About from './About';
import Contact from './Contact';
import Introduction from './Introduction';
import Navbar from './Navbar';
import Skills from './Skills';
import Projects from './Projects';
import { useMemo } from 'react';
import { Element } from 'react-scroll';
import Certifications from './Certifications';
import Timeline from './Experience';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Footer from './Footer';
export default function Home() {
   //react particle package
    const particlesInit = async (engine) => {
      console.log(engine); 
      await loadSlim(engine); 
    };
  
    const particlesLoaded = (container) => {
      console.log(container);
    };
  
    const options = useMemo(() => ({
      background: {
        color: { value: "#212428" },
      },
      fpsLimit: 100,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: ["repulse", "bubble"] }, // Combines both effects
          resize: true,
        },
        modes: {
          push: { quantity: 6 },
          bubble: { distance: 250, size: 10, duration: 2, opacity: 0.9 },
          repulse: { distance: 200, duration: 0.6 },
        },
      },
      particles: {
        color: { value: ["#ffffff", "#00bfff", "#ff69b4", "#32cd32"] }, // Gradient Colors
        links: {
          enable: true,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
          blink: true,  // Glowing effect
        },
        collisions: { enable: true },
        move: { 
          enable: true, 
          speed: { min: 0.5, max: 3 }, 
          direction: "none",
          outMode: "bounce",
        },
        number: { density: { enable: true, area: 800 }, value: 100 },
        opacity: { value: { min: 0.3, max: 0.7 } }, // Twinkling effect
        shape: { type: "circle" },
        size: { value: { min: 1, max: 6 } },
      },
      detectRetina: true,
    }), []);
    
    


  return (
    <>
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />

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
      <Element name="Internships" className="element">
        <Timeline />
      </Element>
      <Element name="Certifications" className="element">
        <Certifications/>
      </Element>
      <Element name="Contacts" className="element">
        <Contact />
      </Element>
      <Footer></Footer>
     
    </>
  )
}
