import React from "react";
import { SunIcon, MoonIcon } from "@heroicons/react/outline";

const Header = ({ title, toggleTheme, theme }) => {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition flex items-center"
      >
        {theme === "light" ? (
          <MoonIcon className="w-5 h-5 mr-2" />
        ) : (
          <SunIcon className="w-5 h-5 mr-2" />
        )}
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </header>
  );
};

export default Header;
