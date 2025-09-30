// Import libraries
import { Link } from "react-router-dom";

// Import componenents
import { Button } from "@components/shared/Button";

// Import constants
import routes from "@constants/route";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="p-8 rounded-full border-primary border-[1px] block md:hidden w-1/2 mb-4">
        <img
          src="/images/profile.webp"
          className="rounded-full w-full h-auto"
          alt="Profile Picture"
        />
      </div>
      <div className="font-poppins w-full sm:w-2/3">
        <p className="text-xl">Hey I'm Vinoshen Silva</p>
        <div className="text-7xl font-extrabold">
          <h2>
            <span className="text-primary">Front</span>end
          </h2>
          <h2>Developer</h2>
        </div>
        <div className="font-montserrat mt-4">
          I’m a frontend developer specializing in custom dashboards — building
          fast, clean, and scalable interfaces your users will trust.
        </div>
        <div className="mt-4 flex gap-4">
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
      <div className="p-8 rounded-full border-primary border-[1px] hidden md:block w-1/3">
        <img
          src="/images/profile.webp"
          className="rounded-full w-full h-auto"
          alt="Profile Picture"
        />
      </div>
    </div>
  );
};

export default Hero;
