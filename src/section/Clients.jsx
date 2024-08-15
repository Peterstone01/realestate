import React, { useEffect } from "react";
import { useDarkMode } from "../component/DarkModeContext";
import AOS from "aos";
import "aos/dist/aos.css";
import { client } from "../component/export";
import { FaStar } from "react-icons/fa";

const Clients = () => {
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
    <div className={`${darkMode ? "dark bg-black" : "light bg-transparent"}`}>
      <section
        id="testimonial"
        className="lg:w-[98%] w-full h-fit m-auto bg-cover bg-center rounded-lg flex-col flex justify-center items-start lg:px-20 px-6  py-20  gap-20"
      >
        <div className="">
          <h1 className="text-red-500 text-xl font-bold">CLIENTS</h1>
          <h1 className=" dark:text-white text-black font-semibold text-[40px]">
            what people say about us
          </h1>
        </div>
        <div
          id="client-box"
          className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center w-full items-center gap-8"
        >
          {client.map((item, index) => {
            const { image, name, text, feedback } = item;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 duration-300 transform transition-transform hover:scale-110 hover:bg-red-100 cursor-pointer p-12 flex flex-col justify-center gap-6 rounded-lg w-full"
              >
                <div className="flex justify-start items-center w-full gap-4">
                  <img src={image} alt="name" className="w-[70px]" />
                  <div className="flex justify-start flex-col gap-1">
                    <h1 className="text-lg font-semibold dark:text-black">
                      {name}
                    </h1>
                    <h1 className="text-slate-500 dark:text-white">{text}</h1>
                  </div>
                </div>
                <p className="text-slate-600 text-md dark:text-white">
                  {feedback}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Clients;
