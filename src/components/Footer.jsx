import React from "react";
import assets from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 pt-16 px-6 sm:px-12 lg:px-24 xl:px-40 transition">

      <div className="grid md:grid-cols-2 gap-12 pb-12">

        <div>
          <img src={assets.logo} className="w-32 mb-6 dark:invert" alt="logo" />

          <p className="text-gray-500 dark:text-gray-400 max-w-sm mb-6">
            From strategy to execution, we craft digital solutions that move your business forward.
          </p>

          <div className="flex gap-6 text-sm text-gray-600 dark:text-gray-400">
            <a href="#" className="hover:text-[#5044E5] transition">Home</a>
            <a href="#" className="hover:text-[#5044E5] transition">Services</a>
            <a href="#" className="hover:text-[#5044E5] transition">Our Work</a>
            <a href="#" className="hover:text-[#5044E5] transition">Contact Us</a>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-4 text-black dark:text-white">
            Subscribe to our newsletter
          </h3>

          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            The latest news, articles, and resources sent weekly.
          </p>

          <div className="flex max-w-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                border border-gray-300 dark:border-slate-700
                bg-white dark:bg-slate-800
                text-black dark:text-white
                placeholder-gray-400 dark:placeholder-gray-500
                rounded-l-xl px-4 py-3
                outline-none
                focus:ring-2 focus:ring-[#5044E5]
              "
            />
            <button className="bg-[#5044E5] text-white px-6 rounded-r-xl hover:opacity-90 transition">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-200 dark:border-slate-800 py-6 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
        <p>Copyright 2025 © GreatStack - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;