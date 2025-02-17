import React, { useContext } from 'react'
import { BsStars } from "react-icons/bs";
import { AppContext } from '../context/AppContext';
import { delay, motion } from 'framer-motion';
import { useInView } from 'framer-motion';
export default function AboutDetails({data,index}) {
    const  {handleMouseLeave,handleMouseMove,about_box,dynamiccolor}=useContext(AppContext)
    
    const isInView = useInView(about_box);
    const variants = {
      hidden: { opacity: 0, y: 50 }, 
      visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
          type: 'spring', 
          stiffness: 300, 
          damping: 30,
          delay:index*0.2
        }
      },
    };
  return (
    <motion.div  className='about_box' variants={variants} initial="hidden" animate={isInView?'visible':'hidden'} onMouseMove={(e) => handleMouseMove(e, index)} onMouseLeave={() => handleMouseLeave(index)} ref={(el) => (about_box.current[index] = el)}>
            <div className="dynamiccolor1" ref={(el) => (dynamiccolor.current[index] = el)}></div>
            <div style={{display:"flex",gap:"1rem",placeItems:"center"}}><span><BsStars fontSize={"24px"} color='#109EE6'/></span><span className='about-title'>{data.title}</span></div>
            <div className='about-para' style={{marginTop:"0.5rem"}}>{data.description}
            </div>
            </motion.div>
           
  )
}
