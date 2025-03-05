import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="my-10 flex flex-col gap-16 md:flex-row">
        <img
          src={assets.about_img}
          alt="aboutImg"
          className="w-full brightness-75 grayscale md:max-w-[450px]"
        />

        <div className="flex flex-col justify-center gap-6 text-gray-600 md:w-2/4">
          <div className="pt-2 text-4xl">
            <Title text1={"ABOUT"} text2={"US"} />
          </div>
          <p>
            NIKE, Inc. is a team comprised of the Nike, Jordan and Converse
            brands driven by a shared purpose to leave an enduring impact.
          </p>
          <p>
            With a global footprint, culture of innovation and team-first
            mentality, we take action to create a future of continual progress
            for athletes, sport and our world. Our purpose is to move the world
            forward through the power of sport. Worldwide, we're leveling the
            playing field, doing our part to protect our collective playground
            and expanding access to sport for everyone.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            MOVING FORWARD TOGETHER Our purpose is to move the world forward
            through the power of sport. Worldwide, we're leveling the playing
            field, doing our part to protect our collective playground and
            expanding access to sport for everyone.
          </p>
        </div>
      </div>
      <div className="py-4 text-2xl">
        <Title text1={"WHY"} text2={"CHOOSEUS"} />
      </div>
      <div className="mb-20 flex flex-col text-sm md:flex-row">
        <div className="flex w-1/3 flex-col gap-5 border border-gray-400 px-10 py-8 sm:py-20 md:px-16">
          <b className="text-center text-4xl font-bold">43%</b>
          <p className="text-center text-lg text-gray-600">
            of NIKE’s leadership positions are held by women.
          </p>
        </div>
        <div className="flex w-1/3 flex-col gap-5 border border-gray-400 px-10 py-8 sm:py-20 md:px-16">
          <b className="text-center text-4xl font-bold">78%</b>
          <p className="text-center text-lg text-gray-600">
            renewable energy in owned or operated facilities, up from 48% in
            FY20.
          </p>
        </div>
        <div className="flex w-1/3 flex-col gap-5 border border-gray-400 px-10 py-8 sm:py-20 md:px-16">
          <b className="text-center text-4xl font-bold">$97.7M</b>
          <p className="text-center text-lg text-gray-600">
            invested in NIKE, Inc.'s fiscal year 2021 to drive positive impact
            in communities around the world.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
