import express from "express";
import {
  placeOrder,
  placeOrderStrip,
  allOrders,
  userOrders,
  updateStatus,
  verifyStripe,
} from "../controllers/orderController.js";
import adminAuth from "../middleware/adminAuth.js";
import authUser from "../middleware/auth.js";

const orderRouter = express.Router();

//admin Features
orderRouter.post("/list", adminAuth, allOrders);
orderRouter.post("/status", adminAuth, updateStatus);

//Payment Features
orderRouter.post("/place", authUser, placeOrder);
orderRouter.post("/stripe", authUser, placeOrderStrip);

//User Feature
orderRouter.post("/user-orders", authUser, userOrders);

//verify payment
orderRouter.post("/verifyStripe", authUser, verifyStripe);
export default orderRouter;
