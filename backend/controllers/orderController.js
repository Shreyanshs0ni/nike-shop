import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//placing order using cod method

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;
    const orderData = {
      userId,
      items,
      address,
      amount,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };
    const newOrder = new orderModel(orderData);
    await newOrder.save();

    await userModel.findByIdandUpdate(userId, { cartData: {} });
    res.json({ success: true, message: "order placed" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

//placing order using strip method

const placeOrderStrip = async (req, res) => {};

//placing order using razor pay

const placeOrderRazorPay = async (req, res) => {};

//all order data for admin panel

const allOrders = async (req, res) => {};

//user order data for frontend

const userOrders = async (req, res) => {};

//update order status from admin panel

const updateStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStrip,
  placeOrderRazorPay,
  allOrders,
  userOrders,
  updateStatus,
};
