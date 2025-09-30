// Import libraries
import { Link, NavLink, type NavLinkRenderProps } from "react-router-dom";

// Import constants
import routes from "@constants/route";

const Footer = () => {
  const classNameFunc = ({ isActive }: NavLinkRenderProps) => {
    return `${
      isActive ? "text-primary" : ""
    } hover:underline font-semibold text-lg`;
  };

  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <NavLink to={routes.home} className={classNameFunc}>
            Home
          </NavLink>
          {/* <NavLink to={routes.about} className={classNameFunc}>
            About
          </NavLink> */}
          <NavLink to={routes.projects} className={classNameFunc}>
            Projects
          </NavLink>
          <NavLink to={routes.contact} className={classNameFunc}>
            Contact
          </NavLink>
        </div>
        <div className="flex gap-4 items-center">
          <Link to={routes.contact}>
            <img
              className="h-6 w-6"
              src="/images/socials/mail.png"
              alt="email icon"
            />
          </Link>
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
      <div className=" flex flex-col items-center justify-center p-5 pt-0">
        <h5 className="font-poppins font-semibold">Vinoshen Silva</h5>
        <p className="font-montserrat font-semibold text-xs">
          Turning coffee into the beautiful poetry called code since{" "}
          <span className="text-primary">2017</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
