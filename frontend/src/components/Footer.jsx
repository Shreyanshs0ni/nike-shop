import React from "react";
import { assets } from "../assets/assets";
const Footer = () => {
  return (
    <div>
      <div className="my-10 mt-20 flex grid-cols-[3fr_1fr_1fr] flex-col gap-14 text-sm sm:grid">
        <div>
          <img src={assets.logo} className="mb-5 w-28" alt="logo" />
          <p className="w-full text-xs text-gray-600 md:w-2/3">
            Beaverton, One Bowerman Dr, United States
          </p>
        </div>
        <div>
          <p className="mb-5 text-xl font-medium">Company</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="mb-5 text-xl font-medium">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>1-800-806-6453</li>
            <li>Nike.help@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="text-gray-500">
        <hr />{" "}
        <p className="py-5 text-center text-sm">
          © 2025 Nike, Inc. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
