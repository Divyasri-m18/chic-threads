import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import nodemailer from "nodemailer";

import authRoutes from "./routes/authRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// ✅ ROUTES
app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

// ✅ DB CONNECTION
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");

    // 🔥 TEST EMAIL (ONCE)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // 👈 APP PASSWORD
      },
    });

    transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "Test Mail ✅ Chic Threads",
      text: "Mail setup working perfectly 🎉",
    })
    .then(() => {
      console.log("✅ Test mail sent successfully");
    })
    .catch((err) => {
      console.error("❌ Mail error:", err.message);
    });
  })
  .catch(err => console.error("❌ DB error", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
