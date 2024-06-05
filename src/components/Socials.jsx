import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {FaXTwitter} from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi"; 
import { SiGithub } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";


function Socials() {
   useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-sine"});
   });

   return (
    <section className="mt-20 py-4" data-aos="fade-up">
        <h2 className="text-base md:text-lg ml-14 md:ml-20 font-semibold">Connect with me on:</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-10 md:gap-x-20 md:gap-y-0 px-14 md:px-20">
            <a href="mailto:fathiaomolara02@gmail.com" target="_blank" className="socials" data-aos="fade-right"><MdOutlineMailOutline className="socials-icon" /><p>Email</p></a>

            <a href="https://github.com/Faateeha" target="_blank" className="socials" data-aos="fade-right"><SiGithub className="socials-icon"/><p>Github</p></a>

            <a href="http://linkedin.com/in/adeyemi-fathia-a73908270" target="_blank" className="socials" data-aos="zoom-in"><FiLinkedin className="socials-icon"/><p>Linkedin</p></a>

            <a href="https://x.com/Adeyemi_fathia_" target="_blank" className="socials" data-aos="zoom-in"><FaXTwitter className="socials-icon"/><p>Twitter</p></a>
        </div>
    </section>
   )
}

export default Socials;