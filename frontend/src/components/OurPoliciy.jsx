import React from "react";
import { assets } from "../assets/assets";

const OurPoliciy = () => {
  return (
    <div className="flex flex-col justify-around gap-12 py-20 text-center text-xs text-gray-700 sm:flex-row sm:gap-2 sm:text-sm md:text-base">
      <div>
        <img
          src={assets.exchange_icon}
          alt="exchangeIcon"
          className="m-auto mb-5 w-12"
        />
        <p className="font-semibold">What Is Nike's Return Policy?</p>
        <p className="max-w-sm text-gray-400">
          We give you 60 days to try out your Nike purchase <br /> to make sure
          it works for you.{" "}
        </p>
      </div>
      <div>
        <img
          src={assets.quality_icon}
          alt="exchangeIcon"
          className="m-auto mb-5 w-12"
        />
        <p className="font-semibold">Nike Product Advice</p>
        <p className="max-w-sm text-gray-400">
          Make sport a daily habit with expert recommendations to help you find,
          style and get the most out of your Nike gear.
        </p>
      </div>
      <div>
        <img
          src={assets.support_img}
          alt="exchangeIcon"
          className="m-auto mb-5 w-12"
        />
        <p className="font-semibold">Call us</p>
        <p className="max-w-sm text-gray-400">
          1-800-806-6453 <br /> Products & Orders: 4 am - 11 pm PT, 7 days a
          week
        </p>
      </div>
    </div>
  );
};

export default OurPoliciy;
