// Import libraries
import { Link } from "react-router-dom";

// Import componenents
import Button from "@components/shared/Button";

// Import constants
import routes from "@constants/route";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col items-center md:hidden mb-5">
        <div className="p-8 rounded-full   border-primary border-[1px] w-1/2 mb-4">
          <img
            src="/images/profile.webp"
            className="rounded-full w-full h-auto"
            alt="Profile Picture"
          />
        </div>
        <div className="flex gap-4 items-center">
          <a href="mailto:VinoshenSilva@gmail.com">
            <img
              className="h-6 w-6"
              src="/images/socials/mail.png"
              alt="email icon"
            />
          </a>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://github.com/VinoSilva"
          >
            <img
              className="h-6 w-6"
              src="/images/socials/github.png"
              alt="github icon"
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://www.linkedin.com/in/vino-silva/"
          >
            <img
              className="h-6 w-6"
              alt="LinkedIn icon"
              src="/images/socials/linkedin.png"
            />
          </Link>
        </div>
      </div>
      <div className="font-poppins w-full sm:w-2/3">
        <p className="text-xl">Hey I'm Vinoshen Silva</p>
        <div className="text-4xl md:text-7xl font-extrabold">
          <h2>
            <span className="text-primary">Full</span>Stack
          </h2>
          <h2>Developer</h2>
        </div>
        <div className="font-montserrat mt-4">
          I’m a full stack developer specializing in building robust, scalable
          applications — crafting seamless user experiences backed by efficient,
          secure, and reliable server logic.
        </div>
        <div className="mt-4 flex gap-4 flex-wrap">
          <Link to={routes.contact}>
            <Button>Get In Touch</Button>
          </Link>
          <Link to={routes.projects}>
            <Button variant="secondary">Browse Projects</Button>
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/resume/vino-resume-2025.pdf"
          >
            <Button variant="secondary">Resume</Button>
          </a>
        </div>
      </div>
      <div className="hidden md:flex md:flex-col gap-4 w-1/3 ">
        <div className="p-8 rounded-full border-primary border-[1px] w-full">
          <img
            src="/images/profile.webp"
            className="rounded-full w-full h-auto"
            alt="Profile Picture"
          />
        </div>
        <div className="flex gap-4 justify-center items-center">
          <a href="mailto:VinoshenSilva@gmail.com">
            <img
              className="h-6 w-6"
              src="/images/socials/mail.png"
              alt="email icon"
            />
          </a>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://github.com/VinoSilva"
          >
            <img
              className="h-6 w-6"
              src="/images/socials/github.png"
              alt="github icon"
            />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://www.linkedin.com/in/vino-silva/"
          >
            <img
              className="h-6 w-6"
              alt="LinkedIn icon"
              src="/images/socials/linkedin.png"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
