import routes from "@constants/route";
import { Link, NavLink, type NavLinkRenderProps } from "react-router-dom";

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
        <div className="flex gap-4">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://github.com/VinoSilva"
          >
            <img className="h-6 w-6" src="/images/socials/github.png" />
          </Link>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            to="https://www.linkedin.com/in/vino-silva/"
          >
            <img className="h-6 w-6" src="/images/socials/linkedin.png" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
