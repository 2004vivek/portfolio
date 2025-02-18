import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Certifications() {
  const certifications = [
    {
      title: 'Html and Css',
      issuer: 'Pearson',
      date: 'May 2023',
      image: './htmlandcss.png',
    },
    {
      title: 'C++',
      issuer: 'Cisco',
      date: 'May 2024',
      image: './c++.png',
    },
    {
      title: 'Frontend Developer - Html',
      issuer: 'Great Learning',
      date: 'April 2023',
      image: './greatlearning.jpg',
    },
    {
      title: 'Python',
      issuer: 'Pearson',
      date: 'May 2023',
      image: './it-specialist-python.jpg',
    },
    {
      title: 'JavaScript',
      issuer: 'Hackerrank',
      date: 'Sep 2024',
      image: './javascript-hack.png',
    },
    {
      title: 'Python',
      issuer: 'Hackerrank',
      date: 'May 2023',
      image: './python-hack.png',
    },

  ];

  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});

  const [hoveredcard,sethoveredcard]=useState(null)

  return (
    <section className="certifications">
      <div className="about">Certifications</div>
      <div className="about_design">
        <div className="about_1"></div>
        <div className="who">Expertise</div>
        <div className="about_1"></div>
      </div>

      <div className="certification-grid" ref={ref}>
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05 }}
            onMouseEnter={() => sethoveredcard(index)}
            onMouseLeave={() => sethoveredcard(null)}
          >
            <motion.img
              src={cert.image}
              alt={cert.title}
              className="cert-image"
            />
            <motion.div style={{width:'100%',height:'40%',background:'white',position:'absolute',bottom:'-100%',padding:'1rem',display:'flex',justifyContent:'center',alignItems:'center'}} 
            animate={{
              bottom: hoveredcard === index ? "0%" : "-40%", 
             background: hoveredcard === index ? "rgba(23, 111, 235, 0.7)" : "",
              transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
              },
            }}
            >
              <div style={{width:'80%'}}>
              <h3
                className="cert-title"
                style={{paddingTop:'1rem'}}
              >
                {cert.title}
              </h3>
              <div
                className="cert-issuer"
              >
                {cert.issuer}
              </div>
              <div
                className="cert-date"
          
              >
                {cert.date}
              </div>
              </div>
              
            </motion.div>
            
          </motion.div>
        ))}
      </div>
    </section>
  );
}
