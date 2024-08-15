import React, { useEffect } from "react";
import { service } from "../component/export";
import { useDarkMode } from "../component/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
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
    <div
      className={`${darkMode ? "dark bg-black" : "light bg-transparent"} pb-20`}
    >
      <section
        className={`${
          darkMode ? "dark bg-gray-800" : "light bg-red-100"
        } lg:w-[98%] h-fit w-fll rounded-lg m-auto flex justify-center items-start flex-col lg:px-20 px-6 py-20 gap-10`}
      >
        <div className="flex justify-center flex-col items-start gap-4">
          <h1 data-aos="zoom-in" className="text-red-500 dark:text-white">
            SERVICES
          </h1>
          <h1
            data-aos="zoom-in"
            className="text-black text-[40px] font-semibold leading-10 dark:text-white"
          >
            Real E-state tours
          </h1>
        </div>
        <div
          id="service-box"
          className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 justify-center items-center gap-8"
        >
          {service.map((item, index) => {
            const { icon, title, desc } = item;
            return (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay="200"
                className="bg-white dark:bg-black h-[350px] px-8 py-16 flex flex-col justify-center items-start gap-4 r rounded-lg border-b-[5px] dark:hover:bg-red-800 border-red-600 cursor-pointer hover:bg-red-300"
              >
                <div className="p-6 rounded-full bg-red-200">
                  <item.icon className="size-10 text-red-600 transform transition-transform hover:scale-110 duration-300 cursor-pointer " />
                </div>
                <h1 className="text-black text-[22px ] font-semibold dark:text-white">
                  {title}
                </h1>
                <p className="text-lg dark:text-white text-slate-700">{desc}</p>
                <button className="text-red-600 border-b-2 font-semibold dark:text-white border-red-600">
                  Read more
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Services;
