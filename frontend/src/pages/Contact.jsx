import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";
const Contact = () => {
  return (
    <>
      <div className="border-t pt-10 text-center text-2xl">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="mt-10 mb-28 flex flex-col justify-center gap-10 md:flex-row">
        <img
          src={assets.contact_img}
          alt="contactImg"
          className="w-full brightness-110 grayscale md:max-w-[480px]"
        />
        <div className="flex flex-col items-start justify-center gap-6">
          <p className="text-xl font-semibold text-gray-800">Our Headquaters</p>
          <p className="text-gray-500">
            Beaverton
            <br />
            One Bowerman Dr, United States
          </p>
          <p className="text-gray-500">
            Tel: 1-800-806-6453 <br /> Email: nike.help@gmail.com
          </p>
          <p className="text-xl font-semibold text-gray-600">Careers at nike</p>
          <p className="text-gray-500">WHAT MOVES YOU MOVES OUR WORLD</p>
          <button className="border border-black px-8 py-4 text-sm shadow-gray-800 transition-shadow duration-300 hover:shadow-[-3px_5px_1px]">
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </>
  );
};

export default Contact;
