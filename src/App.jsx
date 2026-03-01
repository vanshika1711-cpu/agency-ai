import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Companies from "./components/Companies";
import Services from "./components/Services";
import Work from "./components/Work";
import CustomCursor from "./components/CustomCursor";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 dark:text-white transition-colors duration-300">
      <CustomCursor />
      <Navbar/>
      <Hero />
      <Companies />
      <Services />
      <Work />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;