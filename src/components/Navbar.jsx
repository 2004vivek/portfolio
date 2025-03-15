import React, { useContext, useState } from 'react'
import { IoReorderThree } from "react-icons/io5";
import { AppContext } from '../context/AppContext';
import { RxCross1 } from "react-icons/rx";

import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RxCross2 } from "react-icons/rx";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function Navbar() {
    const { togglerHandler, sidebar_ref, clossHandler, isvisible, setvisible } = useContext(AppContext);
    console.log("this is invisible ", isvisible)

    const variants = {
        hidden: { opacity: 0, y: -20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1 }
        })
    };

    const activelinks = {
        color: "#109EE6",
        transition: "color 0.4s ease-in-out"
    };

    return (
        <div className='header_container'>
            <motion.div 
                className="sidebar" 
                ref={sidebar_ref} 
                animate={{ height: isvisible ? "240px" : "0" }}  
                transition={{ duration: 0.3 }}
            >
                {isvisible && (
                    <motion.div className='sidebarrroption' initial="hidden" animate="visible" transition={{ staggerChildren: 0.08 }} >
                        {["Home", "About", "Internships", "Skills", "Projects", "Certifications", "Contacts"].map((item, index) => (
                            <motion.div 
                                key={item} 
                                className="options"
                                custom={index}
                                variants={variants}
                            >
                                <Link 
                                    to={item} 
                                    smooth={true} 
                                    duration={500} 
                                    style={{ cursor: "pointer" }} 
                                    spy={true}  
                                    activeClass="active-link"  
                                    offset={-100}
                                    onClick={() => { 
                                        console.log("fds"); 
                                        setvisible((prev) => !prev);
                                    }}
                                >
                                    {item}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </motion.div>

            <div className="header_inner">
                <div className="header_left"><span>Digital</span> <span style={{ color: "#109EE6" }}>Resume.</span></div>
                <div onClick={togglerHandler}>
                    {isvisible ? <RxCross2 fontSize={"36px"} /> : <IoReorderThree className='hamsburger' fontSize={"36px"} />}
                </div>
                <div className="header_right">
                    <Link to="Home" smooth={true} duration={500} spy={true} activeClass="active-link" offset={-100}>
                        <div style={{ cursor: "pointer" }} className='options'>Home</div>
                    </Link>
                    <Link to="About" smooth={true} duration={500} spy={true} activeClass="active-link" offset={-100}>
                        <div style={{ cursor: "pointer" }} className='options'>About</div>
                    </Link>
                    <Link to="Skills" smooth={true} duration={500} spy={true} activeClass="active-link" offset={-130}>
                        <div style={{ cursor: "pointer" }} className='options'>Skills</div>
                    </Link>
                    <Link to="Projects" smooth={true} duration={500} spy={true} activeClass="active-link" offset={-150}>
                        <div style={{ cursor: "pointer" }} className='options'>Projects</div>
                    </Link>
                    <Link to="Internships" smooth={true} duration={500} spy={true} activeClass="active-link" offset={-170}>
                        <div style={{ cursor: "pointer" }} className='options'>Internships</div>
                    </Link>
                    <Link to="Certifications" smooth={true} duration={500} spy={true} activeClass="active-link" offset={-170}>
                        <div style={{ cursor: "pointer" }} className='options'>Certifications</div>
                    </Link>
                    <Link to="Contacts" smooth={true} duration={500} spy={true} activeClass="active-link" offset={-100}>
                        <div style={{ cursor: "pointer" }} className='options'>Contacts</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
