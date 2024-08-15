import React, { useEffect } from "react";

import { useDarkMode } from "../component/DarkModeContext";
import aboutImg from "../assets/images/about.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
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
      <section
        id="about"
        className={`${
          darkMode ? "dark bg-gray-900" : "light bg-transparent"
        } grid grid-cols-1 gap-5 md:grid-cols-2 justify-center m-auto lg:px-60 px-10 py-20 `}
      >
        <div>
          <img
            data-aos="fade-in"
            src={aboutImg}
            alt="about image"
            className="rounded-l md:w-[500px] md:h-[600px]"
          />
        </div>

        {/* ////////////////////////about goes here */}

        <div className="flex flex-col justify-center items-start">
          <h1 className="text-xl dark:text-white text-red-500 font-bold">
            ABOUT
          </h1>
          <p className="text-slate-800 dark:text-white">
            hello, am Peter Ogechukwu, a frontEnd web developer, (React.js). i
            make a responsive and user User-Friendly webpages for your business
            such as landing page, sales pages, co-operate webpages, consultants
            websites, etc. i deliver a well optimized and responsive websites
            written with HTML, CSS, Bootstrap library, Javascript and React.js
          </p>

          {/* <h1 data-aos="zoom-in" className="text-red-500  dark:text-white">
            WHO WE ARE
          </h1>
          <h1
            data-aos="fade-left"
            data-aos-delay-200
            className=" font-semibold dark:text-white text-xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p
            data-aos="fade-left"
            data-aos-delay-200
            className="mt-4 text-gray-600 text-l"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
            quos doloribus. Voluptates eveniet magni exercitationem eos natus
            veniam illo tempore officia! Similique dolorem earum amet?
          </p> */}
          <div className="bg-red-600 dark:bg-red-700 hover:text-white hover:bg-black dark:hover:bg-white dark:hover:text-black text-lg p-2 cursor-pointer  hover:scale-110  duration-300 mt-8 rounded text-center px-4">
            read more
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
