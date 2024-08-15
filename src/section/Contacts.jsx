import React, { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import { useDarkMode } from "../component/DarkModeContext";
const Contacts = () => {
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
        id="contact"
        className={`${
          darkMode ? "bg-gray-900 dark" : "bg-red-100"
        } lg:w-[98%] w-full  h-fit m-auto  rounded-lg  justify-center items-center px-6 lg:px-36 py-20 gap-10`}
      >
        <div className="text-black lg:w-[60%]  dark:bg-gray-800 m-auto p-10 rounded flex flex-col justify-center items-start dark:text-white gap-4">
          <h1 className="text-2xl font-semibold dark:text-white">
            Send us a message
          </h1>
          <input
            type="text"
            placeholder="Enter your full name "
            className="border-2 border-gray-200 dark:bg-gray-800  w-full py-3 px-6"
          />
          <input
            type="email"
            placeholder="Enter email address "
            className="border-2 border-gray-200 w-full py-3 px-6 dark:bg-gray-800 "
          />
          <input
            type="number"
            placeholder="Enter phone number "
            className="border-2 border-gray-200 w-full py-3 px-6 dark:bg-gray-800 "
          />
          <textarea
            cols="30"
            rows="5"
            className="border-2 border-gray-200 w-full py-3 px-6 dark:bg-gray-800"
            placeholder="Enter your message"
          ></textarea>
          <button className="bg-red-600 w-full rounded dark:bg-black text-white cursor-pointer py-3 font-bold hover:bg-black dark:hover:bg-red-500 duration-300 transform ">
            SEND MESSAGE
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
