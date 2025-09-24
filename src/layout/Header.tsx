import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Navigation menu items data
const navItems = [
  { title: "How it Works", path: "/how-it-works", active: false },
  { title: "What We Do", path: "/", active: false },
  { title: "Prices", path: "/prices", active: false },
  { title: "About", path: "/about", active: false },
  { title: "Contact", path: "/contact", active: false },
];

export const Header = () => {
  // Get current location to determine active nav item
  const location = useLocation();
  const currentPath = location.pathname;
  
  // State to track current language
  const [language, setLanguage] = useState("EN");
  
  // Function to toggle language
  const toggleLanguage = () => {
    setLanguage(language === "EN" ? "RU" : "EN");
  };

  return (
    <header className="flex items-center justify-between py-8 max-w-[1440px] mx-auto sm:px-10 lg:px-16">
      <Link to="/">
        <img
          className="w-[177px] h-[30px]"
          alt="Gisteck logo"
          src="https://c.animaapp.com/m8iud4j1MDo0FZ/img/gisteck-logo-1.svg"
        />
      </Link>

      <nav className="flex items-center gap-8">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`font-normal text-md ${currentPath === item.path ? "font-semibold text-[#00398e]" : "text-black"}`}
          >
            {item.title}
          </Link>
        ))}
        <button
            onClick={toggleLanguage}
            className={`font-normal text-md cursor-pointer bg-transparent border-none p-0`}
          >
            {language}
          </button>
      </nav>
    </header>
  );
};