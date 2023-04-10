import express from "express";
import productRouter from "./routes/product";
import authRouter from "./routes/auth";
import categoryRouter from "./routes/catagory";
import mongoose from "mongoose";
import cors from "cors"


const app = express();
app.use(cors());
//middleware
app.use(express.json());

// router
app.use("/api", productRouter);
app.use("/api", categoryRouter);
app.use("/api", authRouter);


mongoose.connect("mongodb://127.0.0.1:27017/We17304");

export const viteNodeApp = app;