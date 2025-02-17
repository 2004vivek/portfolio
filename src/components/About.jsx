import React from 'react'

import aboutdata from '../../aboutdata';
import AboutDetails from './AboutDetails';
import {motion} from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
export default function About() {
  const ref1=useRef(null)
    const inview=useInView(ref1);
    const slideinvariant={
      hidden:{opacity:0,x:-100},
      visible:{opacity:1,x:0,transition:{ type: 'spring', 
        stiffness: 300, 
        damping: 40,
        
       }}
    }
  return (
    <div className='about_container'>
      <div className='about'>About Me</div>
      <div className='about_design'>
        <div className='about_1'></div>
        <div className='who'>Who I Am</div>
        <div className='about_1'></div>
      </div>
      <div className='about1_container'>
        <motion.div className="abouts_left" ref={ref1} animate={inview?'visible':'hidden'} variants={slideinvariant}>
        <div className="img_frame">
            <div className="img_inner_frame">
                <img src="vivek.png" alt="vivek" />
            </div>
        </div>
        </motion.div>
        <motion.div className="abouts_right">
            {
                aboutdata.map((data,index)=>{
                    return <AboutDetails key={index} data={data} index={index}/>
                })
            }
        </motion.div>
      </div>
    </div>
  )
}
