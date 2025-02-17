import React, { useRef } from 'react'
import Carousel from './Carousel'
import skillsdata from '../../Skillsdata'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
export default function Skills() {
  const ref=useRef(null);
  const isInView = useInView(ref);
 
  const variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.7, 
      y: 100, 
      transition: {
        type: 'spring',
        stiffness: 700,
        damping: 30,
      }
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 700,
        damping: 30,
      },
    },
  };
  return (
    <>
    <div className='skills_container'>
         <div className='about'>Technical Skills</div>
         <div className='about_design'>
        <div className='about_1'></div>
        <div className='who'>What I Know</div>
        <div className='about_1'></div>
      </div>
      <div className="skills_inner">
        <Carousel/>
      </div>
    </div>
    </>
  )
}
