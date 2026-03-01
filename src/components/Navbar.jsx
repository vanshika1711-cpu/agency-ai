import React, { useState } from "react";
import assets from "../assets/assets";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className="
      flex justify-between items-center 
      px-6 sm:px-12 lg:px-24 xl:px-40 
      py-4 sticky top-0 z-50 
      bg-white/80 dark:bg-slate-950/80
      backdrop-blur-md
      text-black dark:text-white
      shadow-md
      transition-colors duration-300
      "
    >
      {/* Logo */}
      <img
        src={assets.logo}
        className="w-32 sm:w-40 dark:invert"
        alt="logo"
      />

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        <a href="#home" className="hover:text-[#5044E5] transition">Home</a>
        <a href="#services" className="hover:text-[#5044E5] transition">Services</a>
        <a href="#work" className="hover:text-[#5044E5] transition">Our Work</a>
        <a href="#contact" className="hover:text-[#5044E5] transition">Contact</a>
      </div>

      {/* Connect Button Only */}
      <div className="hidden md:flex items-center">
        <a
          href="#contact"
          className="
          flex items-center gap-2
          bg-[#5044E5]
          text-white
          px-6 py-2
          rounded-full
          hover:scale-105
          transition
          "
        >
          Connect
          <img src={assets.arrow_icon} width={14} alt="arrow" />
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div
        className="md:hidden text-2xl cursor-pointer"
        onClick={() => setMenuOpen(true)}
      >
        ☰
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 
        bg-white dark:bg-slate-950 
        text-black dark:text-white
        transform ${menuOpen ? "translate-x-0" : "translate-x-full"} 
        transition-transform duration-300 z-50 shadow-lg`}
      >
        <div
          className="p-6 text-right text-xl cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </div>

        <div className="flex flex-col gap-6 px-8">
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Our Work</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>

          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="bg-[#5044E5] text-white px-6 py-2 rounded-full"
          >
            Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;