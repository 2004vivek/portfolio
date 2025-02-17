import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

const projects = [
  {
    title: "Skill Grow",
    description: "A full-stack learning platform with secure authentication and course management.",
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
    description: "A platform to connect blood donors with recipients.",
    image: "./blooddonation.jpg",
    technologies: ["HTML", "CSS", "JavaScript","React","Express","RESTful APIs" ,"Mongodb"],
     sourceUrl: "http://adityauniversity.in:7006/home",
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
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className='project_container'>
      <h2 className='about'>Projects</h2>
      <div className='project_inner'>
        <div className="card-container d-flex flex-wrap justify-content-center">
          {projects.map((project, index) => (
            <div className="card m-3" key={index} onClick={() => setSelectedProject(project)} style={{ width: '20rem', cursor: 'pointer',   backgroundColor: '#11152C', 
              color: 'white'  }}>
                <div className='meracard'>
              <img src={project.image} className="card-img-top" alt={project.title} style={{height:'100%' ,width:'100%'}} />
                </div>
              <div className="card-body">
                <h5 className="card-title" style={{color:'white',fontSize:'20px',fontWeight:'bold'}}>{project.title}</h5>
                <p className="card-text" style={{color:'hsl(0, 2.60%, 77.10%)',fontSize:'14px'}}>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal 
  show={!!selectedProject} 
  onHide={() => setSelectedProject(null)} 
  centered
  dialogClassName="modal-dialog-centered custom-modal"
  style={{zIndex:99999}}
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
    <img src={selectedProject?.image} alt={selectedProject?.title}  height='100%' width={'100%'}
    />
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
    <Button style={{color:'blue',background: '#a7defd', }} onClick={() => setSelectedProject(null)}>Close</Button>
  </Modal.Footer>
</Modal>

    </div>
  );
}
