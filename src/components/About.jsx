import React, { useRef, useState, useEffect } from 'react';
import aboutdata from '../../aboutdata';
import AboutDetails from './AboutDetails';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

export default function About() {
  const ref1 = useRef(null);
  const isInView = useInView(ref1, { once: true });
  const [isVisible, setIsVisible] = useState(false);

  // Persist visibility once in view
  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    }
  }, [isInView]);

  const slideInVariant = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      className="about_container"
      ref={ref1}
      initial={{ opacity: 0, x: -100 }}
      animate={isVisible ? 'visible' : ''}
      variants={slideInVariant}
    >
      <div className="about">About Me</div>
      <div className="about_design">
        <div className="about_1"></div>
        <div className="who">Who I Am</div>
        <div className="about_1"></div>
      </div>
      <div className="about1_container">
        <motion.div className="abouts_left">
          <div className="img_frame">
            <div className="img_inner_frame">
              <img src="vivek.png" alt="vivek" />
            </div>
          </div>
        </motion.div>
        <motion.div className="abouts_right">
          {aboutdata.map((data, index) => (
            <AboutDetails key={index} data={data} index={index} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
