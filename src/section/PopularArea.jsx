import React, { useEffect } from "react";
import { useDarkMode } from "../component/DarkModeContext";

import AOS from "aos";
import "aos/dist/aos.css";
import data from "../data.jsx";

const PopularArea = () => {
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
      <div
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } p-10 m-auto`}
      >
        <h1 className="text-red-400 font-extrabold textlgl">POPULAR AREA</h1>
        <p className="text-black text-2xl font-semibold dark:text-white">
          check out for some of our beautiful sites
        </p>
      </div>
      <div
        data-aos="fade-up"
        id="popular-area"
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } px-10 shadow-xl py-20 m-auto gap-10 grid md:grid-cols-2 lg:grid-cols-3`}
      >
        {data.map((item, index) => {
          const { image, location, price } = item;
          return (
            <div key={index} className="">
              <div className="">
                <img src={image} alt={location} className="w-full h-[400px]" />
                <h4 className="text-lg p-3 bg-white">{location}</h4>
                <h4>{price}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default PopularArea;
