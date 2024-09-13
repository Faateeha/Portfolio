import  {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaLink } from 'react-icons/fa6';
import Carefinder from "../assets/carefinder-img1.png";
import GithubRepo from "../assets/vue-img1.png";

function Project() {
  useEffect(() => {
    Aos.init({duration: 1000})
  })
  return (
    <section id="projects" className="pt-24">
      <div>
        <div className='flex flex-col justify-center items-center mx-14'>
          <h1 className='py-2  font-bold text-lg md:text-2xl' data-aos="fade-up">
            Projects
          </h1>
          <p className="mt-2 text-base md:text-lg" data-aos="fade-up">
            These are some of my projects
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-14 gap-y-10 mx-14 md:mx-a6 py-10">
          <div className="projects-container" data-aos="fade-up">
            <img src={Carefinder} alt="carefinder-img" className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover" />
            <div>
              <h1 className="text-base md:text-lg font-semibold mb-1 px-2 text-black">Care Finder</h1>
              <p className="mb-3 px-2 text-sm md:text-base text-black">Carefinder helps you easily locate and connect with healthcare facilities in Nigeria.</p>
              <span className="flex flex-wrap gap-2 px-2">
                <p className="works-pill">Next.js</p>
                <p className="works-pill">Tailwindcss</p>
                <p className="works-pill">Chakra ui</p>
                <p className="works-pill">Typescript</p>
                <p className="works-pill">firebase</p>
              </span>
            </div>
            <span className='mt-3 mx-2 pt-2 border-t border-black flex items-center justify-between text-black'>
              <Link to='https://github.com/Faateeha/my-carefinder' >
                <FaGithub className="text-lg" />
              </Link>
              <a href='my-carefinder-r4vv.vercel.app/' target='blank'>
                <FaLink className="text-lg" />
              </a>
            </span>
          </div>
          <div className="projects-container" data-aos="fade-down">
            <img src={GithubRepo} alt="carefinder-img" className="mb-4 rounded-md rounded-b-none w-full h-52 object-center object-cover" />
            <div>
              <h1 className="text-base md:text-lg font-semibold mb-1 px-2 text-black">Github Repository</h1>
              <p className="mb-3 px-2 text-sm md:text-base text-black">Implementing a Web app using github API to retrive github repositories</p>
              <span className="flex flex-wrap gap-2 px-2">
                <p className="works-pill">Vue</p>
                <p className="works-pill">Tailwindcss</p>
                
              </span>
            </div>
            <span className='mt-3 mx-2 border-t border-black pt-2 flex items-center justify-between text-black'>
              <Link to='https://github.com/Faateeha/GithubRepo-vue' >
                <FaGithub className="text-lg" />
              </Link>
              <a href='vue-github-repo-three.vercel.app/' target='blank' >
                <FaLink className="text-lg" />
              </a>
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Project;