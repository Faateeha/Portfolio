import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";	
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import vue from "../assets/vue.jpeg";
import typescript from "../assets/typescript.png";
import chakra from "../assets/chakra.jpeg";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import nextjs from "../assets/nextjs.png";

function Skills () {
   useEffect(() => {
    AOS.init({duration: 1000});
   }, []) ;

   return (
    <section className="pt-24" data-aos="fade-up" id="skills">
        <div className="mt-3 ml-14 md:ml-20">
            <h1 className="font-bold text-lg md:text-xl inline ">Skills</h1>
            <p className="text-base md:text-lg mt-2">Technologies I currently work with:</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-10 py-8 mx-14 md:mx-20">
            <div className="skills-container" data-aos="flip-right">
                <img src={html} alt="html-img" className="h-12 md:h-20" />
                <p className="skills-text">HTML</p>
            </div>
            <div className="skills-container" data-aos="flip-left">
                <img src={css} alt="css-img" className="h-12 md:h-20" />
                <p className="skills-text">CSS</p>
            </div>
            <div className="skills-container" data-aos="zoom-in-up">
                <img src={javascript} alt="javasript-img" className="h-12 md:h-20" />
                <p className="skills-text">JAVASCRIPT</p>
            </div>
            <div className="skills-container" data-aos="zoom-in">
                <img src={react} alt="react-img" className="h-12 md:h-20 animate-spin" />
                <p className="skills-text">REACT JS</p>
            </div>
            <div className="skills-container" data-aos="zoom-in-down">
                <img src={vue} alt="vue-img" className="h-12 md:h-20" />
                <p className="skills-text">VUE JS</p>
            </div>
            <div className="skills-container" data-aos="fade-up-right">
                <img src={typescript} alt="typescript-img" className="h-12 md:h-20" />
                <p className="skills-text">TYPESCRIPT</p>
            </div>
            {/*<div className="skills-container" data-aos="fade-up-left">
                <img src={nextjs} alt="nextjs-img" className="h-12 md:h-20" />
                <p className="skills-text">NEXT JS</p>
            </div>*/}
            
            <div className="skills-container" data-aos="zoom-out-down">
                <img src={chakra} alt="chakra-img" className="h-12 md:h-20" />
                <p className="skills-text">CHAKRA</p>
            </div>
            <div className="skills-container" data-aos="zoom-in">
                <img src={tailwind} alt="tailwind-img" className="h-12 md:h-20" />
                <p className="skills-text">TAILWIND</p>
            </div>
            <div className="skills-container" data-aos="zoom-in">
                <img src={github} alt="github-img" className="h-12 md:h-20" />
                <p className="skills-text">GITHUB</p>
            </div>
            
        </div>
    </section>
   )
}

export default Skills;