import React from "react";
import { useDarkMode } from "../component/DarkModeContext";
import {
  FaArrowUp,
  FaFacebookF,
  FaInstagram,
  FaMoon,
  FaPhone,
  FaSun,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-scroll";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <footer
        className={`${
          darkMode ? "dark bg-black" : "light bg-gray-800"
        } m-auto lg:px-20 p-10 py-20 grid w-full lg:grid-cols-2 grid-cols-1 items-start lg:gap-20 gap-10`}
      >
        <div className="flex flex-col justify-center items-start gap-5">
          <h1 className="text-white font-semibold text-2xl">ABOUT US</h1>
          <p className="text-slate-200 text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure, enim
            eum. In quis ipsum molestias, sed dignissimos aliquid odit nesciunt!
          </p>
          <div
            id="social-icon"
            className="flex justify-start items-center gap-4 mt-5"
          >
            <div className="p-3 rounded-full bg-white hover:bg-red-500 cursor-pointer transform hover:scale-110 hover:text-white duration-300">
              <FaFacebookF className="size-5" />
            </div>
            <div className="p-3 rounded-full bg-white hover:bg-red-500 cursor-pointer transform hover:scale-110 hover:text-white duration-300">
              <FaInstagram className="size-5" />
            </div>
            <div className="p-3 rounded-full bg-white hover:bg-red-500 cursor-pointer transform hover:scale-110 hover:text-white duration-300">
              <FaTwitter className="size-5" />
            </div>
            <div className="p-3 rounded-full bg-white hover:bg-red-500 cursor-pointer transform hover:scale-110 hover:text-white duration-300">
              <FaYoutube className="size-5" />
            </div>
          </div>
          <h1 className="text-white mt-8">copyrite@peterstone webpages</h1>
        </div>
        <div className="flex flex-col justify-start items-start">
          <h1 className="uppercase text-white text-xl font-semibold">
            Contact me
          </h1>
          <div className="text-white mt-5 flex justify-start items-center gap-5">
            <IoMdMail className="size-5" />
            <h1>peterogechukwu1@gmail.com</h1>
          </div>
          <div className="text-white mt-5 flex justify-center items-center gap-5">
            <FaPhone className="size-5" />
            <h1>08138979218</h1>
          </div>
        </div>
      </footer>
      {/* slide to top button starts here */}
      <div className="bg-red-600 lg:p-4 p-2 rounded-full hover:bg-black cursor-pointer fixed lg:bottom-12 bottom-6 right-6">
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="text-white size-4" />
        </Link>
      </div>
      {/* Dark mode botton starts here */}
      <div>
        <button
          onClick={toggleDarkMode}
          className="flex items-center lg:p-4 p-2 fixed bottom-16 lg:bottom-40  right-6 bg-orange-500 text-black rounded-full"
        >
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </>
  );
};

export default Footer;
