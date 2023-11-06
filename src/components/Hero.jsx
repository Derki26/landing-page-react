import React from "react";
import "./hero.css";

import { RiPlayFill, RiStarFill } from "react-icons/ri";

const Hero = () => {
  return (
    <section id="home" className="min-h-[90vh] grid grid-cols-1 xl:grid-cols-8">
      <div className="md:col-span-5 flex items-center justify-center p-8 xl:p-16">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]">
            Venezuela creator of Misses{" "}
            <span className="text-primary py-2 px-6 border-8 border-primary relative inline-block ">
              Queens
            </span>
          </h1>
          <p className="text-gray-500 text-2xl leading-[2.5rem]">
            Venezuela is a rivaled winner in the pageant world, with seven Miss
            Universe titles. It is also home to eight Miss International titles,
            six Miss World titles, and two Miss Earths.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">
              watch us
            </button>

            <button className="w-full xl:w-auto flex flex-col items-center justify-start text-left gap-4 py-2 px-8 rounded-xl text-xl">
              <div className="post-video">
                <video controls>
                  <source src="./Download.mp4" type="video/mp4" />
                </video>
              </div>
              <p className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl items-centerclear">
                <a href="https://en.wikipedia.org/wiki/Miss_Venezuela_2020">
                  Learn Miss Venezuela
                </a>
              </p>
              </button>
              <button className="w-full xl:w-auto bg-primary text-white py-2 px-8 rounded-xl text-xl">
                <a href="https://www.thetravel.com/10-reasons-why-you-should-visit-venezuela/">
                13 Reasons To Visit Venezuela Right Now
                </a>
              </button>
            
          </div>
        </div>
      </div>

      <div className="md:col-span-3 flex items-center justify-center relative">
        <div>
          <img
            src="heroFirst.png"
            className="w-[350px] h-[550px] md:w-[550px] md:h-[450px] object-cover xl:-mt-28"
          />
        </div>
        <img
          src="scudo.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[12%] right-[20%] xl:right-[10%]"
        />
        <img
          src="adobeFirs.png"
          className="w-10 h-10 md:w-20 md:h-20 object-cover rounded-full border-l-8 border-gray-600 absolute top-[10%] xl:top-[2%] left-[20%] xl:left-[10%]"
        />
      </div>
    </section>
  );
};

export default Hero;
