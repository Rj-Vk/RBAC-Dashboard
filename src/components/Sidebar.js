import React from "react";
import { HomeIcon, UserIcon, ShieldCheckIcon } from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-800 text-white flex flex-col shadow-lg">
      <div className="flex items-center justify-center p-4 border-b border-gray-700">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      <nav className="flex-1">
        <ul className="space-y-4">
          <li className="flex items-center p-4 hover:bg-gray-700 transition">
            <HomeIcon className="w-6 h-6 mr-3" />
            <span>Home</span>
          </li>
          <li className="flex items-center p-4 hover:bg-gray-700 transition">
            <UserIcon className="w-6 h-6 mr-3" />
            <span>Users</span>
          </li>
          <li className="flex items-center p-4 hover:bg-gray-700 transition">
            <ShieldCheckIcon className="w-6 h-6 mr-3" />
            <span>Roles</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
