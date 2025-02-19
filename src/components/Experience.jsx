import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion"; 
const Timeline = () => {
  return (
    <section className="contact">
      <div className="about">Internships</div>
      <div className="about_design">
        <div className="about_1"></div>
        <div className="who">Hands-On Learning</div>
        <div className="about_1"></div>
      </div>

      <div style={{marginBottom:"2rem",width:'90%',margin:'auto'}}>      
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{  background: "linear-gradient(135deg,hsl(200, 89.70%, 58.20%), #0A74DA)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solidhsl(211, 100.00%, 55.90%)" }}
          date="June 2024 – July 2024"
          iconStyle={{ background: "#109EE6", color: "#fff" }}
          icon={<FaBriefcase />}
        >
         <motion.div 
              whileHover={{ scale: 1.02 }} 
              style={{cursor:'pointer'}}
              transition={{ duration: 0.5 }}
            >
              <h3 className="vertical-timeline-element-title">Frontend Developer Intern</h3>
              <h4 className="vertical-timeline-element-subtitle">Technical Hub</h4>
              <p>Developed and maintained responsive web applications using HTML, CSS, JavaScript, and React.js.</p>
            </motion.div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Nov 2023 – Dec 2023"
          contentStyle={{  background: "linear-gradient(to right, #6A11CB, #2575FC)", color: "#fff" }}
          iconStyle={{ background: "linear-gradient(to right, #6A11CB, #2575FC)", color: "#fff" }}
          icon={<FaBriefcase />}
        >
          <motion.div 
              whileHover={{ scale: 1.02 }} 
              transition={{ duration: 0.5 }}
              style={{cursor:'pointer'}}
            >
              <h3 className="vertical-timeline-element-title">Web Developer</h3>
              <h4 className="vertical-timeline-element-subtitle">Codsoft</h4>
              <p>Developed a deeper understanding of web technologies and best practices, contributing to the successful implementation of projects.</p>
        </motion.div>
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </section>
  );
};

export default Timeline;
