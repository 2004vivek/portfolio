import React, { useState, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import { motion, useInView } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
const projects = [
  {
    title: "Skill Grow",
    description: "A full-stack e-learning platform with secure authentication, seamless course management, and an intuitive user experience for students and instructors.",
    image: "./skillgrow.jpg", 
    technologies: ["Tailwind","Javascript","React","Express","RESTful APIs" ,"Mongodb"],
    sourceUrl: "https://github.com/2004vivek/SkillGroww",
    features: [
      "Secure authentication",
      "Course management system",
      "Payment integration",
      "Cloud deployment"
    ]
  },
  {
    title: "Blood Donation Website",
    description: "A Blood Donation website connects donors with recipients, featuring real-time tracking of live stats, including donor counts, making it more impactful.",
    image: "./blooddonation.jpg",
    technologies: ["HTML", "CSS", "JavaScript","React","Express","RESTful APIs" ,"Mongodb"],
    sourceUrl: "https://adityauniversity.in/blooddonation/home",
    features: [
      "Donor registration",
      "Real-time database",
      "Location-based donor search",
      "Pre Registeration Form"
    ]
  },
  {
    title: "Shopify E-Commerce App",
    description: "An online shopping platform with category-based navigation and a responsive cart.",
    image: "./shopify.jpg",
    sourceUrl: "https://github.com/2004vivek/Shopify",
    technologies: ["HTML", "CSS", "JavaScript","React"],
    features: [
      "Product categories",
      "Secure checkout",
      "User-friendly interface",
      "Mobile responsiveness"
    ]
  },
  {
    title: "Netflix Clone",
    description: "A Netflix clone built using React, featuring secure authentication for login and signup, with a fully responsive design optimized for all screen sizes.",
    image: "./netflix_logo.jpg",
    sourceUrl: "https://github.com/2004vivek/Netflix-clone",
    technologies: ["HTML", "CSS", "JavaScript","React"],
    features: [
      "Responsiveness",
      "Secure Authenication",
      "User-friendly interface",
      "Trending & Categories"
    ]
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className='project_container'>
      <h2 className='about'>Projects</h2>
      <div className="about_design">
        <div className="about_1"></div>
        <div className="who">Built by Me</div>
        <div className="about_1"></div>
      </div>
      <div className='project_inner'>
        <motion.div 
          className="card-container d-flex flex-wrap justify-content-center "
          ref={ref}
          
          initial={{ opacity: 0, y: 50 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {projects.map((project, index) => (
            <Tilt  tiltReverse={true} className='parallax-effect' perspective={500} tiltMaxAngleX={10}
            tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.5} glareColor="rgb(255,255,255,0.4)" glarePosition="all" glareBorderRadius="10px">
            <motion.div 
              key={index} 
              className="card" 
              onClick={() => setSelectedProject(project)} 
              style={{ 
                // width: '24rem', 
                cursor: 'pointer',   
                backgroundColor: '#11152C', 
                color: 'white',
                transform: 'translateZ(190px)'
              }}
              initial={{ opacity: 0, y: '100%' }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2}}
            
            >
              <div className='meracard'>
                <img src={project.image} className="card-img-top" alt={project.title} style={{height:'100%' ,width:'100%'}} />
              </div>
              <div className="card-body">
                <h5 className="card-title" style={{color:'white',fontSize:'20px',fontWeight:'bold'}}>{project.title}</h5>
                <p className="card-text" style={{color:'hsl(0, 2.60%, 77.10%)',fontSize:'14px'}}>{project.description}</p>
              </div>
            </motion.div>
          </Tilt>
          ))}
        </motion.div>
      </div>

      <Modal 
        show={!!selectedProject} 
        onHide={() => setSelectedProject(null)} 
        centered
      
        dialogClassName="modal-dialog-centered custom-modal"
        style={{zIndex:9999999,}}
      >
        <Modal.Header style={{ position: "relative" }}>
          <Modal.Title style={{ color: "black" }}>{selectedProject?.title}</Modal.Title>
          <Button
            variant="link"
            className="btn-close-custom"
            onClick={() => setSelectedProject(null)}
            style={{
              position: "absolute",
              top: "10px",
              right: "15px",
              fontSize: "24px",
              color: "black",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            &times;
          </Button>
        </Modal.Header>

        <Modal.Body>
          <div style={{width:'100%',height:'200px'}}>
            <img src={selectedProject?.image} alt={selectedProject?.title}  height='100%' width={'100%'}/>
          </div>
          <h5 style={{color:'black',marginTop:'10px'}}>Technologies Used</h5>
          <ul style={{
            display: 'flex', 
            listStyle: 'none', 
            gap: "0.5rem", 
            flexWrap: 'wrap',  
            padding: 0 
          }}>
            {selectedProject?.technologies.map((tech, idx) => (
              <li key={idx} style={{
                color: 'blue', 
                background: '#a7defd', 
                width: 'fit-content', 
                borderRadius: '7px', 
                padding: '5px 10px', 
                fontWeight: 'bold',   
                fontSize: '14px',     
              }}>
                {tech}
              </li>
            ))}
          </ul>

          <h5 style={{color:'black',marginTop:'10px'}}>Key Features</h5>
          <ul>
            {selectedProject?.features.map((feature, idx) => (
              <li key={idx} style={{color:'gray'}}>{feature}</li>
            ))}
          </ul>

          {selectedProject?.sourceUrl && (
            <div className=" mt-3">
              <a 
                href={selectedProject.sourceUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{
                  background: '#109EE6',
                  border: 'none',
                  fontWeight: 'bold',
                  padding: '10px 15px'
                }}
              >
                View Source Code
              </a>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <Button style={{color:'blue',background: '#a7defd'}} onClick={() => setSelectedProject(null)}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
