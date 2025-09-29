// Import libraries
import { NavLink, type NavLinkRenderProps } from "react-router-dom";
import { FaMessage } from "react-icons/fa6";
import routes from "@constants/route";

const Navbar = () => {
  const classNameFunc = ({ isActive }: NavLinkRenderProps) => {
    return `${
      isActive ? "text-primary" : ""
    } hover:underline font-semibold text-lg`;
  };

  return (
    // Navigation
    <nav className="flex gap-4 p-4 justify-between font-poppins items-center">
      <h1 className="text-xl font-bold">Vino Silva</h1>
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
      </div>
      <div>
        <NavLink to={routes.contact} className={classNameFunc}>
          <FaMessage />
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
