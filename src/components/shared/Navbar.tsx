// Import libraries
import { useState } from "react";
import { NavLink, type NavLinkRenderProps } from "react-router-dom";
import { FaMessage, FaBars, FaXmark } from "react-icons/fa6";

// Import constants
import routes from "@constants/route";

const Navbar = () => {
  const classNameFunc = ({ isActive }: NavLinkRenderProps) => {
    return `${
      isActive ? "text-primary" : ""
    } hover:underline font-semibold text-lg`;
  };

  const [showDropdown, setShowDropdown] = useState<boolean>(false);

  const closeDropdown = () => {
    setShowDropdown(false);
  };

  const openDropdown = () => {
    setShowDropdown(true);
  };

  return (
    // Navigation
    <>
      {/* Desktop navbar */}
      <nav className="hidden md:flex gap-4 p-4 justify-between font-poppins items-center">
        <h1 className="text-xl font-bold">Vino Silva</h1>
        <div className="hidden md:flex gap-4">
          <NavLink to={routes.home} className={classNameFunc}>
            Home
          </NavLink>
          {/* <NavLink to={routes.about} className={classNameFunc}>
            About
          </NavLink> */}
          <NavLink to={routes.projects} className={classNameFunc}>
            Projects
          </NavLink>
          <NavLink to={routes.favourite_books} className={classNameFunc}>
            Favourite Books
          </NavLink>
        </div>
        <div>
          <NavLink to={routes.contact} className={classNameFunc}>
            <FaMessage />
          </NavLink>
        </div>
      </nav>

      {/* Mobile navbar */}
      <nav className="flex md:hidden items-center justify-between p-4">
        <div>
          <h1 className="text-xl font-bold">Vino Silva</h1>
        </div>
        <div className="flex justify-center">
          <button onClick={openDropdown}>
            <FaBars className="text-primary text-lg font-bold cursor-pointer" />
          </button>
        </div>
      </nav>
      {showDropdown ? (
        <div className="flex md:hidden w-full h-full fixed top-0 flex-col gap-4 bg-white p-4 shadow-primary">
          <button
            onClick={() => {
              setShowDropdown(false);
            }}
            className="mb-5 ml-auto"
          >
            <FaXmark className="text-primary text-lg font-bold cursor-pointer" />
          </button>
          <NavLink
            onClick={closeDropdown}
            to={routes.home}
            className={classNameFunc}
          >
            Home
          </NavLink>
          {/* <NavLink to={routes.about} className={classNameFunc}>
            About
          </NavLink> */}
          <NavLink
            onClick={closeDropdown}
            to={routes.projects}
            className={classNameFunc}
          >
            Projects
          </NavLink>
          <NavLink
            onClick={closeDropdown}
            to={routes.favourite_books}
            className={classNameFunc}
          >
            Favourite Books
          </NavLink>
          <NavLink
            onClick={closeDropdown}
            to={routes.contact}
            className={classNameFunc}
          >
            Contact
          </NavLink>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
