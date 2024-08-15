import React, { useEffect } from "react";
import { useDarkMode } from "../component/DarkModeContext";
import heroImg from "../assets/images/hero3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <>
      <div className={`${darkMode ? "dark bg-black" : "light bg-white"}`}>
        <section
          id="hero"
          className=" w-[100%] h-[600px] m-auto  bg-center bg-cover  flex justify-center flex-col items-start gap-10 z-20 lg:px-28 px-10 "
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          <h5
            data-aos="fade-in"
            className=" font-semibold lowercase text-slate-400 -mb-10"
          >
            {" "}
            FRONTEND WEB DEVELOPER
          </h5>
          <h1
            data-aos="fade-in"
            className="text-white text-4xl  lg:text-6xl font-bold pr-0 md:pr-[500px] leading-[40px] lg:leading-[70px]"
          >
            Hi, I'am Peter<span className="text-red-400">stone</span>{" "}
            <span className="text-red-400"> Ogechuwkwu</span>
          </h1>
          <p
            data-aos="zoom-in"
            className="text-red-100 font-semibold text-md md:pr-[500px] pr-0"
          >
            this is just one of my FrontEnd web development projects, showcasing
            the us of react react.js foundamental and advanced state mamagement
            concept <span className="text-red-400"> (contextApi) </span> to
            build a real-Estate webpage
          </p>
          <button className="p-3 bg-orange-500 duration-300 rounded text-black hover:bg-black hover:text-white font-bold">
            <a href="https://peterstone01.github.io/pages/" target="_blank">
              SEE MY PORTFOLIO
            </a>
          </button>

          <a href="https://peterstone01.github.io/pages/" value="portfolio" />
        </section>
        {/* //////////////////////////form  */}
        <div
          className={`${
            darkMode ? "dark bg-black" : " light bg-transparent"
          } z-10 shadow-lg`}
        >
          <div
            data-aos="zoom-in"
            className={`${
              darkMode ? "dark bg-gray-800" : "light bg-white"
            } w-[98%] m-auto rounded grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 justify-center items-center gap-6 p-8 -mt-14`}
          >
            <div className="w-full">
              <h1 className="text-black dark:text-white font-semibold">
                LOCATION
              </h1>
              <input
                type="text"
                placeholder="Enter address, state, city or pincode"
                className="p-2 w-full mt-2 border-b-2"
              />
            </div>
            {/* //////////////////////TYPE */}
            <div className="w-full">
              <h1 className="text-black dark:text-white font-semibold">TYPE</h1>
              <select className="w-full p-2 mt-2 text-gray-500  text-md">
                <option value="" disabled selected>
                  select property
                </option>
                <option value="commercial">commercial</option>
                <option value="Rentals">Rentals</option>
                <option value="Sales">Sales</option>
              </select>
            </div>

            {/* ///////////////CATEGORY */}
            <div className="w-full">
              <h1 className="text-black dark:text-white font-semibold">
                Category
              </h1>
              <select className="w-full p-2 mt-2 text-gray-500  text-md">
                <option value="" disabled selected>
                  select category
                </option>
                <option value="option1">Duplex</option>
                <option value="option2">Detached</option>
                <option value="option3">Semi Detached</option>
              </select>
            </div>
            <div className="bg-red-600 dark:bg-red-700 hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-2 cursor-pointer  hover:scale-110  duration-300 mt-8 rounded-l text-center w-full">
              SUBMIT
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
