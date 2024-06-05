import { useEffect } from "react";
import {motion} from "framer-motion";
import Aos from "aos";
import "aos/dist/aos.css";

function About(){
    useEffect(() => {
        Aos.init({
            duration: 1000
        })
    });

    return(
        <section className="pt-16" id="about">
            <div>
                <h1 className="inline font-bold text-lg md:text-xl mt-3 ml-14 md:ml-20">About</h1>
                <div className="flex-col md:flex md:flex-row items-center md:justify-between mx-14 md:mx-20 py-6" data-aos="zoom-in">
                    <p className="w-full md:w-[50%]" data-aos="zoom-in-right">I'm Adeyemi Fathia, a frontend developer based in Lagos, Nigeria. With a passion for creating engaging user experiences, I specialize in crafting intuitive interfaces that make technology accessible to all. Excited to embark on new projects and opportunities in the dynamic world of web development!I'm open to connecting, working, and collaborating on exciting projects with others.</p>
                </div>
            </div>
        </section>
    )
}

export default About;