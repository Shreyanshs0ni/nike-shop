import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItems,
    setCartItems,
    getCartAmount,
    delivery_fee,
    products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items),
            );
            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItems[items][item];

              orderItems.push(itemInfo);
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee,
      };

      switch (method) {
        //api calls for COD
        case "cod":
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } },
          );
          if (response.data.success) {
            setCartItems({});
            navigate("/orders");
          } else {
            toast.error(response.data.message);
          }
          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex min-h-[80vh] flex-col justify-between gap-4 border-t border-gray-400 pt-5 sm:flex-row sm:pt-14"
    >
      {/* Left Side */}
      <div className="flex w-full flex-col gap-4 sm:max-w-[480px]">
        <div className="sm:textt-2xl my-3 text-xl">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            type="text"
            placeholder="First Name"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          />

          <input
            required
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            type="text"
            placeholder="Last Name"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          type="email"
          placeholder="Email Address"
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
        />
        <input
          required
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          type="text"
          placeholder="Street"
          className="w-full rounded border border-gray-300 px-3.5 py-1.5"
        />
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            type="text"
            placeholder="City"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          />

          <input
            required
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            type="text"
            placeholder="State"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          />
        </div>
        <div className="flex gap-3">
          <input
            required
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            type="number"
            placeholder="Zipcode"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          />

          <input
            required
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            type="text"
            placeholder="Country"
            className="w-full rounded border border-gray-300 px-3.5 py-1.5"
          />
        </div>
        <input
          required
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
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
              type="submit"
              className="cursor-pointer border border-gray-300 px-12 py-4 text-sm font-medium shadow-gray-800 transition-shadow duration-300 hover:shadow-[-3px_5px_1px]"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
