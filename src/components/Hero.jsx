import React from "react";
import assets from "../assets/assets";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-white dark:bg-slate-950 text-black dark:text-white transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 xl:px-40 py-20 text-center">

        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="flex items-center gap-3 bg-white dark:bg-slate-800 shadow-md px-4 py-2 rounded-full">
            <img src={assets.group_profile} className="w-20" alt="" />
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Trusted by 10k+ people
            </p>
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-[84px] font-medium xl:leading-[95px] max-w-5xl mx-auto">
          Turning imagination into{" "}
          <span className="bg-gradient-to-r from-[#5044E5] to-[#4d8cea] bg-clip-text text-transparent">
            digital
          </span>{" "}
          impact.
        </h1>

        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mt-6">
          Creating meaningful connections and turning big ideas into
          interactive digital experiences.
        </p>

        <div className="mt-10">
          <img
            src={assets.hero_img}
            alt="hero"
            className="w-full max-w-6xl mx-auto rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;