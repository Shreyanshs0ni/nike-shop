import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useContext(ShopContext);
  return (
    <div className="flex min-h-[80vh] flex-col justify-between gap-4 border-t border-gray-400 pt-5 sm:flex-row sm:pt-14">
      {/* Left Side */}
      <div className="flex w-full flex-col gap-4 sm:max-w-[480px]">
        <div className="sm:textt-2xl my-3 text-xl">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="First Name"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          />

          <input
            type="text"
            placeholder="Last Name"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
        />
        <input
          type="text"
          placeholder="Street"
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
        />
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="City"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          />

          <input
            type="text"
            placeholder="State"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          />
        </div>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Zipcode"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          />

          <input
            type="text"
            placeholder="Country"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          />
        </div>
        <input
          type="number"
          placeholder="Phone Number"
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
        />
      </div>
      {/* Right Side */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          <div className="flex flex-col gap-3 lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex cursor-pointer items-center gap-3 border border-gray-300 p-2 px-3"
            >
              <p
                className={`h-3.5 min-w-3.5 rounded-full border border-gray-300 ${method === "stripe" ? "bg-green-400" : ""}`}
              ></p>
              <img
                src={assets.stripe_logo}
                alt="stripLogo"
                className="mx-4 h-5"
              />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex cursor-pointer items-center gap-3 border border-gray-300 p-2 px-3"
            >
              <p
                className={`h-3.5 min-w-3.5 rounded-full border border-gray-300 ${method === "razorpay" ? "bg-green-400" : ""}`}
              ></p>
              <img
                src={assets.razorpay_logo}
                alt="razorpayLogo"
                className="mx-4 h-5"
              />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex cursor-pointer items-center gap-3 border border-gray-300 p-2 px-3"
            >
              <p
                className={`h-3.5 min-w-3.5 rounded-full border border-gray-300 ${method === "cod" ? "bg-green-400" : ""}`}
              ></p>
              <p className="mx-4 text-sm font-medium text-gray-500">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="mt-8 w-full text-end">
            <button
              className="my-8 bg-black px-16 py-3 text-sm text-white"
              onClick={() => navigate("/orders")}
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
