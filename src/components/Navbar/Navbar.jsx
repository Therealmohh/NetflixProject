import React, { useState, useEffect } from "react";
import "./Navbar.scss";
import Netflix from "../images/Netflix_Logo_PMS.png";
import picture from "../images/megan.jpg";
import Search from "@mui/icons-material/Search";
import Notifications from "@mui/icons-material/Notifications";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";

const Navbar = () => {
  const [isScrolled, setIsscrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const handleScroll = () => {
    setIsscrolled(window.pageYOffset !== 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropDown = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav
      className={`navbar w-full z-20 fixed top-0 text-white text-lg  ${
        isScrolled ? "bg-black bg-opacity-" : "bg-custom-gradient"
      }`}
    >
      <div className="container mx-auto p-3 flex items-center justify-between">
        <div className="left flex items-center space-x-6">
          <img className="h-16" src={Netflix} alt="Netflix Logo" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and popular</span>
          <span>My List</span>
        </div>
        <div className="right flex items-center ml-auto">
          {" "}
          <Search className="cursor-pointer" />
          <span className="ml-4">KID</span> {/* Added ml-4 for spacing */}
          <Notifications className="ml-4 cursor-pointer" />
          <img
            className="w-8 h-8 object-cover cursor-pointer rounded-lg ml-4"
            src={picture}
            alt="Profile"
          />
          <div className="profile relative">
            {" "}
            <ArrowDropDown
              className=" icon ml-4 cursor-pointer"
              onClick={toggleDropDown}
            />
            {open && (
              <div className="options flex flex-col absolute bg-white shadow-lg rounded mt-2">
                <span className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer">
                  Settings
                </span>
                <span className="px-4 py-2 text-black hover:bg-gray-200 cursor-pointer">
                  Logout
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
