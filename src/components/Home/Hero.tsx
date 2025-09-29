import routes from "@constants/route";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="font-poppins w-2/3">
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
            <button className="bg-primary border-[1px] border-primary p-3 cursor-pointer text-white rounded-lg text-sm font-semibold hover:opacity-80">
              Get In Touch
            </button>
          </Link>
          <Link to={routes.projects}>
            <button className="bg-white border-[1px] p-3 cursor-pointer text-black rounded-lg text-sm font-semibold hover:bg-black hover:text-white">
              Browse Projects
            </button>
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="/resume/vino-resume-2025.pdf"
          >
            <button className="bg-white border-[1px] p-3 cursor-pointer text-black rounded-lg text-sm font-semibold hover:bg-black hover:text-white">
              Resume
            </button>
          </a>
        </div>
      </div>
      <div className="p-8 rounded-full border-primary border-[1px] w-1/3">
        <img
          src="/images/profile.webp"
          className="rounded-full w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Hero;
