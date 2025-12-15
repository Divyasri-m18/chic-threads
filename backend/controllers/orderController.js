import Order from "../models/Order.js";
import nodemailer from "nodemailer";

export const placeOrder = async (req, res) => {
  try {
    const {
      orderId,
      userEmail,
      items,
      totalAmount,
      paymentMethod,
      shippingAddress
    } = req.body;

    // 🔹 Save order in DB
    const newOrder = new Order({
      orderId,
      userEmail,
      items,
      totalAmount,
      paymentMethod,
      shippingAddress
    });

    await newOrder.save();

    // 🔹 Mail transporter (FIXED)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,      // admin gmail
        pass: process.env.EMAIL_PASS       // gmail APP PASSWORD
      },
      secure: false,
      tls: {
        rejectUnauthorized: false
      }
    });

    // 🔹 USER MAIL
    await transporter.sendMail({
      from: `"Chic Threads" <${process.env.EMAIL_USER}>`,
      to: userEmail,
      subject: "Order Confirmed - Chic Threads 🎉",
      html: `
        <h2>Thank you for your order ❤️</h2>
        <p><b>Order ID:</b> ${orderId}</p>
        <p><b>Total Amount:</b> ₹${totalAmount}</p>
        <p>We will notify you once shipped.</p>
      `
    });

    // 🔹 ADMIN MAIL
    await transporter.sendMail({
      from: `"Chic Threads" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "🛒 New Order Received",
      html: `
        <h3>New Order Alert</h3>
        <p><b>Customer:</b> ${userEmail}</p>
        <p><b>Order ID:</b> ${orderId}</p>
        <p><b>Amount:</b> ₹${totalAmount}</p>
      `
    });

    // ✅ SUCCESS RESPONSE
    res.status(201).json({
      success: true,
      message: "Order placed & email sent"
    });

  } catch (err) {
    console.error("❌ Order Error:", err);

    res.status(500).json({
      success: false,
      message: "Order failed. Email not sent."
    });
  }
};

