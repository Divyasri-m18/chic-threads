import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

/* =======================
   ENV
======================= */
dotenv.config();
console.log("EMAIL_USER:", process.env.EMAIL_USER);
console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "LOADED" : "MISSING");
console.log("MONGO_URI:", process.env.MONGO_URI ? "LOADED" : "MISSING");

/* =======================
   APP
======================= */
const app = express();

/* =======================
   CORS (LOCAL + VERCEL)
======================= */
app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "http://localhost:3000",
      "https://chic-threads-seven.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());

/* =======================
   ROUTES
======================= */
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

/* =======================
   DB
======================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ Mongo error", err));

/* =======================
   TEST MAIL (ON SERVER START)
======================= */
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter
  .sendMail({
    from: `"Chic Threads" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject: "✅ Chic Threads – Local Test Mail",
    text: "Backend mail setup working perfectly 🎉",
  })
  .then(() => console.log("✅ Test mail sent (LOCAL)"))
  .catch((err) => console.error("❌ Mail error", err.message));

/* =======================
   START
======================= */
app.listen(5000, () => {
  console.log("🚀 Backend running at http://localhost:5000");
});
