import React, { useContext, useState } from 'react'
import { IoReorderThree } from "react-icons/io5";
import { AppContext } from '../context/AppContext';
import { RxCross1 } from "react-icons/rx";
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {
    const { togglerHandler, sidebar_ref, clossHandler } = useContext(AppContext);
    const [isvisible,setvisible]=useState(false)
    function MoreInfoHandler(){
      console.log("clicked")
      setvisible(!isvisible)
    }
    const navigate=useNavigate();
    return (
        <div className='header_container'>
            <div className="sidebar" ref={sidebar_ref}>
                <div style={{ alignSelf: "flex-start", paddingLeft: "1rem",marginTop:"1rem" }} onClick={clossHandler}><RxCross1 fontSize={"30px"} /></div>
                <Link to="home" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>Home</div></Link>
                <Link to="about" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>About</div></Link>
                <Link to="skills" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>Skills</div></Link>
                <Link to="projects" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>Projects</div></Link>
                <Link to="certifications" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>Certifications</div></Link>
                <Link to="contacts" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>Contacts</div></Link>
                
            </div>
            <div className="header_inner">
                <div className="header_left"><span>Digital</span> <span style={{ color: "#109EE6" }}>Resume.</span></div>
                <div onClick={togglerHandler}><IoReorderThree className='hamsburger' fontSize={"36px"} /></div>
                <div className="header_right">
                    <Link to="home" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>Home</div></Link>
                    <Link to="about" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>About</div></Link>
                    <Link to="skills" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>Skills</div></Link>
                    <Link to="projects" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>Projects</div></Link>
                    <Link to="certifications" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>Certifications</div></Link>
                    <Link to="contacts" smooth={true} duration={1000}><div style={{ cursor: "pointer" }} className='options'>Contacts</div></Link>
                 
                </div>
            </div>
        </div>
    );
}
