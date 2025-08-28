import React, { useState } from "react";
import { Home, Gift, Users, BarChart2, Settings } from "lucide-react";

const Sidebar = () => {
  const [open, setOpen] = useState(true);

  return (
    <div
      className={`${
        open ? "w-64" : "w-20"
      } bg-green-700 text-white min-h-screen p-4 pt-8 relative duration-300`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="absolute -right-3 top-9 w-7 h-7 bg-white rounded-full text-green-700 shadow-md flex items-center justify-center"
      >
        {open ? "<" : ">"}
      </button>

      {/* Logo */}
      <h1
        className={`text-2xl font-bold mb-10 text-center ${
          !open && "scale-0"
        }`}
      >
        Food4All
      </h1>

      {/* Menu */}
      <ul className="space-y-6">
        <li className="flex items-center gap-3 cursor-pointer hover:bg-green-600 p-2 rounded-lg">
          <Home size={22} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Dashboard
          </span>
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:bg-green-600 p-2 rounded-lg">
          <Gift size={22} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Donate Food
          </span>
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:bg-green-600 p-2 rounded-lg">
          <Users size={22} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Requests
          </span>
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:bg-green-600 p-2 rounded-lg">
          <BarChart2 size={22} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Analytics
          </span>
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:bg-green-600 p-2 rounded-lg">
          <Settings size={22} />
          <span className={`${!open && "hidden"} origin-left duration-200`}>
            Settings
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
