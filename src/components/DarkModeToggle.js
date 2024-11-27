// components/DarkModeToggle.js
import React, { useState, useEffect } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <button
      className={`px-4 py-2 rounded-md transition-transform duration-300 ${
        darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
      }`}
      onClick={() => setDarkMode(!darkMode)}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
