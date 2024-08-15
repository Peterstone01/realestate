import React, { useEffect } from "react";
import { useDarkMode } from "../component/DarkModeContext";
import {
  FaBath,
  FaShareAlt,
  FaBed,
  FaUserCircle,
  FaMapMarkerAlt,
  FaPlus,
  FaVideo,
  FaCamera,
  FaHeart,
} from "react-icons/fa";
import { MdSpaceDashboard } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { property } from "../component/export";

const Properties = () => {
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
      <section className="lg:w-[98%] lg:px-[20px] p-6 m-auto w-full py-[20px]  flex justify-center items-start flex-col ">
        <div className="flex flex-col justify-center items-start gap-4">
          <h1 className="text-red-500 dark:text-white ">PROPERTIES</h1>
          <h1 className="text-black dark:text-white text-3xl pb-10">
            Explore our recent deployments
          </h1>
        </div>
        {/* /////////////////////rendering the property in grids */}
        <div className="grid w-full  lg:grid-cols-3 grid-cols-1 justify-center items-center gap-8">
          {property.map((item, index) => {
            const {
              images,
              address,
              name,
              price,
              about,
              bed,
              bath,
              area,
              owner,
            } = item;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg w-full"
              >
                <div
                  id="image-box"
                  data-aos="fade-in"
                  className="bg-cover bg-center h-[250px] p-4 rounded flex flex-col justify-between items-end "
                  style={{ backgroundImage: `url(${images})` }}
                >
                  <div
                    id="top"
                    className="flex justify-between items-end w-full"
                  >
                    <div>
                      <Button>features</Button>
                    </div>

                    <div className="flex justify-between items-center gap-3">
                      <Button>sales</Button>
                      <Button>active</Button>
                    </div>
                  </div>
                  <div
                    id="bottom"
                    className="flex justify-between items-end w-full"
                  >
                    <div className="flex justify-start  items-center gap-2">
                      <FaMapMarkerAlt className="size-4 text-white" />
                      <h1 className="text-white"> {address}</h1>
                    </div>

                    <div className="flex justify-center items-center gap-4">
                      <FaVideo className="text-white" />
                      <FaCamera className="text-white" />
                    </div>
                  </div>
                </div>
                {/* ////////////////////////CONTENTS SUCH AS TEXTS */}
                <div className="px-6 py-1 flex justify-center items-start flex-col  w-full">
                  <h1 className="text-black font-semibold dark:text-white text-lg">
                    {name}
                  </h1>
                  <h3 className="text-lg text-red-600 dark:text-white font-bold">
                    {price}
                  </h3>
                  <p className="dark:text-white">{about}</p>
                  <div
                    id="icon"
                    className="flex gap-4 justify-center items-start"
                  >
                    <div className="flex justify-center items-center gap-2">
                      <FaBath className="size-4 text-red-600" />
                      <h1 className="dark:text-white">{bath}</h1>
                    </div>

                    <div className="flex justify-center items-center gap-2">
                      <FaBed className="size-4 text-red-600" />
                      <h1 className="dark:text-white">{bed}</h1>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <MdSpaceDashboard className="size-4 text-red-600" />
                      <h1 className="dark:text-white">{area}</h1>
                    </div>
                  </div>
                  <div className="w-full h-[1px] mt-8 bg-gray-200"></div>
                  <div
                    id="owners-information"
                    className="flex justify-between items-center w-full mt-8"
                  >
                    <div className="flex justify-center items-center gap-2">
                      <FaUserCircle className="size-5 text-red-400" />
                      <h1 className="dark:text-white">{owner}</h1>
                    </div>

                    <div className="flex justify-center items-center gap-4">
                      <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <FaShareAlt className="size-4 text-red-500" />
                      </div>
                      <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <FaHeart className="size-4 text-red-500" />
                      </div>
                      <div className="p-2 border-2 border-gray-200 hover:bg-black cursor-pointer transform hover:scale-110 transition-transform duration-300">
                        <FaPlus className="size-4 text-red-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Properties;
const Button = ({ children }) => {
  return (
    <>
      <button className="px-2 py-1 rounded-xl  bg-red-500 hover:bg-black hover:text-white text-white ">
        {children}
      </button>
    </>
  );
};
