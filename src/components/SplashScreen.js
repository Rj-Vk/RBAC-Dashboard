// components/SplashScreen.js
import React, { useEffect, useState } from "react";

const SplashScreen = ({ setSplashDone }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashDone(true);
    }, 2000); // Show splash for 2 seconds

    return () => clearTimeout(timer);
  }, [setSplashDone]);

  return (
    <div className="flex items-center justify-center h-screen bg-indigo-700">
      <h1 className="text-4xl font-bold text-white animate-pulse">
        Welcome to RBAC Dashboard
      </h1>
    </div>
  );
};

export default SplashScreen;
