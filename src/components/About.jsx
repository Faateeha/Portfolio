import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { HashLink as Link } from "react-router-hash-link";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
    });
  });

  return (
    <section className="pt-16" id="about">
      <div>
        <h1 className="flex justify-center font-bold text-2xl md:text-3xl mt-3 ">
          About
        </h1>
        <div
          className="flex-col md:flex md:flex-row justify-center  mx-14 md:mx-20 py-6 md:text-lg"
          data-aos="zoom-in"
        >
          <p className="w-full " data-aos="zoom-in-right">
            As a frontend developer, I craft intuitive interfaces that make
            technology accessible to all. With a passion for creating seamless
            user experiences, I specialize in building engaging web applications
            that drive results. With over one year of experience and expertise
            in Reactjs, vue.js, Nextjs, typescript, I&apos;ve delivered some
            innovative projects that push the boundaries of web development.
            Lets connect and build something amazing together.
            
          </p>
          
        </div>
        <div className="flex justify-between">
        <p className="max-w-fit  border mx-14 md:mx-20 rounded-md p-2 shadow-2xl hover:bg-white hover:text-black " data-aos="zoom-in-right">
            <Link smooth to={"#contact"}>
              Contact me
            </Link>
          </p>
        <p className="max-w-fit  border mx-14 md:mx-20 rounded-md p-2 shadow-2xl hover:bg-white hover:text-black " data-aos="zoom-in-right">
            <a href="/Adeyemii-CV.pdf" download="Adeyemii-CV">
              <button>Download CV</button>
            </a>
          </p>
        </div>
        
        
        
      </div>

    </section>
  );
}

export default About;
