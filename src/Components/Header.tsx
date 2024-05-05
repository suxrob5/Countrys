"use client";

import { useState } from "react";

const Header = () => {
  const [darkMode, setdarkMode] = useState(true);
  const handleDarkMode = () => {
    if (darkMode == true) {
      document.body.className = "dark-mode";
      setdarkMode(false);
    } else if (darkMode == false) {
      document.body.className = "light-mode";
      setdarkMode(true);
    }
  };
  return (
    <div className="w-full p-6 shadow-2xl">
      <div className="flex items-center justify-between w-11/12 mx-auto">
        <h1 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
          Welcome to the countries
        </h1>
        <button
          onClick={handleDarkMode}
          className="px-5 py-3 text-xl sm:text-2xl bg-gray-800 hover:scale-105 active:scale-95 text-white font-semibold rounded-lg btn-dark-mode"
        >
          {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </div>
  );
};

export default Header;