import React from "react";
import { assets } from "../assets/assets";
const Navbar = ({ setToken }) => {
  return (
    <div className="flex items-center justify-between px-[4%] py-2">
      <img
        className="w-[max(8%,60px)] brightness-0 contrast-100"
        src={assets.logo}
        alt=""
      />
      <button
        onClick={() => setToken(" ")}
        className="cursor-pointer rounded-sm border border-gray-300 px-2 py-1 text-[12px] font-light shadow-orange-200 transition-shadow duration-300 hover:shadow-[-3px_5px_1px]"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
