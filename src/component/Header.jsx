import React, { useState } from "react";
import { useDarkMode } from "../component/DarkModeContext";
import { Link } from "react-scroll";
import { FaXmark } from "react-icons/fa6";
import { FaBars, FaPhoneAlt, FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const navItems = [
    {
      link: "Home",
      path: "home",
    },
    {
      link: "About",
      path: "about",
    },
    {
      link: "Properties",
      path: "properties",
    },
    {
      link: "Services",
      path: "services",
    },
    {
      link: "Testimonial",
      path: "testimonial",
    },
    {
      link: "Contact",
      path: "contact",
    },
  ];

  return (
    <nav
      className={`${
        darkMode ? "dark bg-gray-900" : "light bg-[#f3f3f3]"
      } flex justify-center items-center gap-4 lg:px-28 py-3 sticky shadow-2xl top-0 z-50 w-full`}
    >
      <h1 className="text-6xl font-bold text-red-400">
        Stone <span className="text-xl">Webworks</span>
      </h1>

      <ul>
        {navItems.map((item) => {
          <li>{item.link}</li>;
        })}
      </ul>
    </nav>
  );
};

export default Header;
