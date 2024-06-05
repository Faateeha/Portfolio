import picture from "../assets/portfolio-img.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

function Home() {
    useEffect(() => {
        Aos.init({
            duration: 1000,
            easing: "ease-in"
        })
    });

    return (
        <section id="home" >
           <div className="flex-col space-y-10 md:flex md:flex-row justify-around items-center">
            <div className="text-center md:text-right">
                <p className="text-base md:text-xl">Hi, I am</p>
                <h2 className="text-3xl md:text-5xl font-semibold">Adeyemi Fathia</h2>
                <TypeAnimation
                 sequence={["Frontend Developer", "", 1000]}
                 repeat={Infinity}
                 className="text-base md:text-xl"
                />
            </div>
            <div data-aos="fade-left" className="flex justify-center">
                <img src={picture} alt="img" className="rounded-full h-72 md:h-96 object-contain shadow" />
            </div>
           </div> 

        </section>
    )
}

export default Home;