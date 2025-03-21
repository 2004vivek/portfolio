import React, { useContext, useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { LuInstagram } from "react-icons/lu";
import { VscGithub } from "react-icons/vsc";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiMinutemailer } from "react-icons/si";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { AppContext } from "../context/AppContext";
import { motion, useInView } from "framer-motion";
import { SiLeetcode } from "react-icons/si";
import Tilt from "react-parallax-tilt";

export default function Introduction() {
  const {
    IntroductionMoveHandler,
    IntoductionLeaveHandler,
    introduction,
    dynamiccolor1,
  } = useContext(AppContext);
  const ref = useRef(null);
  const inview = useInView(ref, { triggerOnce: true });
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      y: 20,
      transition: {
        type: "spring",
        stiffness: 900,
        damping: 20,
      },
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 900,
        damping: 20,
      },
    },
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/vivek.pdf";
    link.download = "Vivek_Kumar_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div style={{ width: "100%", overflow: "hidden", padding: "1rem 0" }}>
      <Tilt tiltAxis="y" tiltMaxAngleY={5} tiltReverse={true}>
        <div
          className="introduction_container"
          onMouseMove={(e) => IntroductionMoveHandler(e)}
          onMouseLeave={IntoductionLeaveHandler}
          ref={introduction}
        >
          <div className="dynamiccolor1" ref={dynamiccolor1}></div>
          <div className="introduction_left">
            <div className="introduction_hello" style={{zIndex:10}}>Hello It's Me</div>
            <div className="name" style={{zIndex:10}}>Vivek Kumar</div>
            <div className="description" style={{zIndex:10}}>
              And I'm a
              <span
                style={{
                  color: "#109EE6",
                  fontWeight: "bold",
                  marginLeft: "0.5rem",
                }}
              >
                <Typewriter
                  words={[
                    "Web Developer",
                    "Full Stack Developer",
                    "Problem Solver",
                    "React Native Developer",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </div>
            <div className="bio" style={{zIndex:10}}>
              Hello! My name is Vivek Kumar, a Computer Science undergraduate at
              Aditya College of Engineering with a CGPA of 8.64/10. I am a
              passionate full-stack web developer skilled in React.js, Node.js,
              MongoDB, and Express.js, with experience in various building
              projects.
            </div>
            <div className="icons">
              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/vivek-kumar-472592258/",
                    "_blank"
                  )
                }
              >
                <TiSocialLinkedinCircular
                  className="icon"
                  fontSize={"38px"}
                  color="#109EE6"
                />
              </div>
              <div
                onClick={() =>
                  window.open("https://github.com/2004vivek", "_blank")
                }
              >
                <VscGithub className="icon" fontSize={"36px"} color="#109EE6" />
              </div>
              <div
                onClick={() =>
                  (window.location.href = "mailto:vks7633a@gmail.com")
                }
              >
                <SiMinutemailer
                  className="icon"
                  fontSize={"36px"}
                  color="#109EE6"
                />
              </div>

              <div
                onClick={() =>
                  window.open("https://www.geeksforgeeks.org/user/vks76f0l1/", "_blank")
                }
              >
                <SiGeeksforgeeks className="icon" fontSize={"36px"} color="#109EE6" />
              </div>

              <div
                onClick={() =>
                  window.open("https://leetcode.com/u/vivekkumar_8102/", "_blank")
                }
              >
                <SiLeetcode className="icon" fontSize={"36px"} color="#109EE6" />
              </div>
            </div>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [-8, 8] }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                type: "spring",
                stiffness: 300,
                damping: 10,
              }}
              onClick={handleDownload} 
              style={{
                backgroundColor: "#0985E0",
                color: "white",
                padding: "8px 12px",
                borderRadius: "6px",
                fontWeight: "bold",
                width: "fit-content",
                display: "inline-block",
                cursor:'pointer',marginBottom:"1rem"
              }}
            >
              Download CV
            </motion.div>

            {/* <div  className='download_btn'  onClick={handleDownload} ><motion.button className='download_resume' ref={ref} animate={inview?'visible':'hidden'} variants={variants} initial="hidden">Download CV</motion.button></div> */}
          </div>
          <div className="introduction_right">
            <div className="img_frame">
              <div className="img_inner_frame">
                <img src="vivek.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
