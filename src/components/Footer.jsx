import { FaXTwitter } from "react-icons/fa6";
import { FiLinkedin } from "react-icons/fi";
import { SiGithub } from "react-icons/si";
import { MdOutlineMailOutline } from "react-icons/md";

function Footer() {
  return (
    <footer className="mt-24">
      <div className="flex flex-col items-center justify-center py-4 space-y-4">
        <span className="flex space-x-8 md:space-x-6">
          <a href="mailto:fathiaomolara02@gmail.com" target="_blank">
            <MdOutlineMailOutline className="socials-icon" />
          </a>

          <a href="https://github.com/Faateeha" target="_blank">
            <SiGithub className="socials-icon" />
          </a>

          <a
            href="http://linkedin.com/in/adeyemi-fathia-a73908270"
            target="_blank"
          >
            <FiLinkedin className="socials-icon" />
          </a>

          <a href="https://x.com/Adeyemi_fathia_" target="_blank">
            <FaXTwitter className="socials-icon" />
          </a>
        </span>
        <div className="font-semibold text-sm md:text-base">&copy; A.F 2024</div>
      </div>
    </footer>
  );
}

export default Footer;
