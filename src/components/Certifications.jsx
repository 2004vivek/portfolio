import React, { useRef } from 'react';
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
      image: './greatlearning.jpg',
    },
    {
      title: 'Frontend Developer - Html',
      issuer: 'Great Learning',
      date: 'April 2023',
      image: './greatlearning.jpg',
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref,{once:true});

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
          >
            <motion.img
              src={cert.image}
              alt={cert.title}
              className="cert-image"
              // whileHover={{ filter: 'brightness(0.5)' }}
            />
            {/* <div className="cert-details">
              <motion.h3
                className="cert-title"
                // whileHover={{ scale: 1.1 }}
                // transition={{ duration: 0.3 }}
              >
                {cert.title}
              </motion.h3>
              <motion.p
                // className="cert-issuer"
                // whileHover={{ scale: 1.05 }}
                // transition={{ duration: 0.3 }}
              >
                {cert.issuer}
              </motion.p>
              <motion.p
                className="cert-date"
                // whileHover={{ scale: 1.05 }}
                // transition={{ duration: 0.3 }}
              >
                {cert.date}
              </motion.p>
            </div> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
