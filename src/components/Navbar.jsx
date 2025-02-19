import React, { useContext, useState } from 'react'
import { IoReorderThree } from "react-icons/io5";
import { AppContext } from '../context/AppContext';
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RxCross2 } from "react-icons/rx";
export default function Navbar() {
    const { togglerHandler, sidebar_ref, clossHandler,isvisible,setvisible } = useContext(AppContext);
    
    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1 }
        })
    };
    return (
        <div className='header_container'>
         
          <motion.div 
                className="sidebar" 
                ref={sidebar_ref} 
                animate={{ height: isvisible ? "240px" : "0" }}  
                transition={{ duration: 0.3 }}
                onClick={()=>setvisible(false)}
            >
                {isvisible && (
                    <motion.div className='sidebarrroption' initial="hidden" animate="visible" transition={{ staggerChildren: 0.08 }}>
                        {["Home", "About", "Skills", "Projects", "Certifications", "Contacts"].map((item, index) => (
                            <motion.div 
                                key={item} 
                                className="options"
                                custom={index}
                                variants={variants}
                                onClick={()=>setvisible(false)}
                            >
                                <Link to={item} smooth={true} duration={1000} style={{ cursor: "pointer" }}>
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </motion.div>

            <div className="header_inner">
                <div className="header_left"><span>Digital</span> <span style={{ color: "#109EE6" }}>Resume.</span></div>
                <div onClick={togglerHandler}>{isvisible?<RxCross2 fontSize={"36px"}/>:<IoReorderThree className='hamsburger' fontSize={"36px"} />}</div>
                <div className="header_right">
                    <Link to="Home" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>Home</div></Link>
                    <Link to="About" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>About</div></Link>
                    <Link to="Skills" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>Skills</div></Link>
                    <Link to="Projects" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>Projects</div></Link>
                    <Link to="Certifications" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>Certifications</div></Link>
                    <Link to="Contacts" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>Contacts</div></Link>
                 
                </div>
            </div>
        </div>
    );
}
