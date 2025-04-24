import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";

//app config
const app = express();
const port = process.env.PORT || 4000;
connectDB();
connectCloudinary();

//midllewares
app.use(express.json());
app.use(cors());

//api Endpoints
app.use("/api/user", userRouter);

//api endpoints
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log("Server Started on Port :" + port));
