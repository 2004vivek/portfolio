import { createContext } from "react";
import { useRef } from "react";
export const AppContext=createContext();
export default function AppContextProvider({children}){

    const about_box=useRef([]);//use of array to store ref each card
    const dynamiccolor=useRef([]);
    const introduction=useRef(null);
    const  dynamiccolor1=useRef(null);
    const sidebar_ref=useRef('');
    const IntroductionMoveHandler=(e)=>{
        const introduction_ref = introduction.current;
        const dynamic_ref = dynamiccolor1.current;
        let rect = introduction_ref.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
    
        dynamic_ref.style.left = `${x}px`;
        dynamic_ref.style.top = `${y}px`;
        dynamic_ref.style.opacity = 1;
    
        const offsetX = Math.abs(rect.width / 2 - x);
        const offsetY = Math.abs(rect.height / 2 - y);
    
        // Reset borders
        introduction_ref.style.borderTop = "1px solid transparent";
        introduction_ref.style.borderRight = "1px solid transparent";
        introduction_ref.style.borderBottom = "1px solid transparent";
        introduction_ref.style.borderLeft = "1px solid transparent";
    
        if (offsetX > offsetY) {
          if (x < rect.width / 2) {
            introduction_ref.style.borderLeft = "2px solid #109EE6";
            introduction_ref.style.borderTop = "2px solid #109EE6";
            introduction_ref.style.transform = "rotateY(-6.25deg) rotateX(-4.24889deg)";
          } else {
            introduction_ref.style.borderRight = "2px solid #109EE6";
            introduction_ref.style.borderBottom = "2px solid #109EE6";
            introduction_ref.style.transform = "rotateY(-6.28deg) rotateX(3.24889deg)";
          }
        } else {
          if (y < rect.height / 2) {
            introduction_ref.style.borderTop = "2px solid #109EE6";
          } else {
            introduction_ref.style.borderBottom = "2px solid #109EE6";
          }
        }

    }
    const IntoductionLeaveHandler=()=>{
        const introduction_ref = introduction.current;
        const dynamic_ref = dynamiccolor1.current;
        dynamic_ref.style.opacity = 0;
        introduction_ref.style.borderLeft = "1px solid transparent";
        introduction_ref.style.borderTop = "1px solid transparent";
        introduction_ref.style.borderRight = "1px solid transparent";
        introduction_ref.style.borderBottom = "1px solid transparent";
    }
    const handleMouseMove=(e,index)=>{
        const about_box_ref = about_box.current[index];
    const dynamiccolor_ref = dynamiccolor.current[index];
    let rect = about_box_ref.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    dynamiccolor_ref.style.left = `${x}px`;
    dynamiccolor_ref.style.top = `${y}px`;
    dynamiccolor_ref.style.opacity = 1;

    const offsetX = Math.abs(rect.width / 2 - x);
    const offsetY = Math.abs(rect.height / 2 - y);
    
    about_box_ref.style.borderTop = "1px solid transparent";
    about_box_ref.style.borderRight = "1px solid transparent";
    about_box_ref.style.borderBottom = "1px solid transparent";
    about_box_ref.style.borderLeft = "1px solid transparent";

    if (offsetX > offsetY) {
      if (x < rect.width / 2) {
        about_box_ref.style.borderLeft = "2px solid #109EE6";
        about_box_ref.style.borderTop = "2px solid #109EE6";
        about_box_ref.style.transform = "rotateY(-6.25deg) rotateX(-4.24889deg)";
      } else {
        about_box_ref.style.borderRight = "2px solid #109EE6";
        about_box_ref.style.borderBottom = "2px solid #109EE6";
        about_box_ref.style.transform = "rotateY(-6.28deg) rotateX(3.24889deg)";
      }
    } else {
      if (y < rect.height / 2) {
        about_box_ref.style.borderTop = "2px solid #109EE6";
      } else {
        about_box_ref.style.borderBottom = "2px solid #109EE6";
      }
    }
    }
    function handleMouseLeave(index){
        const about_box_ref = about_box.current[index];
        const dynamiccolor_ref = dynamiccolor.current[index];
        dynamiccolor_ref.style.opacity = 0;
        about_box_ref.style.borderLeft = "1px solid transparent";
        about_box_ref.style.borderTop = "1px solid transparent";
        about_box_ref.style.borderRight = "1px solid transparent";
        about_box_ref.style.borderBottom = "1px solid transparent";
    }
    function togglerHandler(){
      console.log("yhidfk")
        sidebar_ref.current.style.width="200px"
    }
    function clossHandler(){
         sidebar_ref.current.style.width="0"
    }
    const value={
        handleMouseMove,handleMouseLeave,about_box,dynamiccolor,IntroductionMoveHandler,IntoductionLeaveHandler,introduction, dynamiccolor1,togglerHandler,sidebar_ref,clossHandler
    }
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}