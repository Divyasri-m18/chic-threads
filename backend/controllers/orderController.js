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

    // ✅ SAVE ORDER FIRST (VERY IMPORTANT)
    const newOrder = new Order({
      orderId,
      userEmail,
      items,
      totalAmount,
      paymentMethod,
      shippingAddress
    });

    await newOrder.save();

    // 🔔 TRY EMAIL (BUT DON'T BREAK ORDER)
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });

      await transporter.sendMail({
        from: `"Chic Threads" <${process.env.EMAIL_USER}>`,
        to: userEmail,
        subject: "Order Confirmed 🎉",
        html: `
          <h2>Thank you for your order ❤️</h2>
          <p>Order ID: ${orderId}</p>
          <p>Total: ₹${totalAmount}</p>
        `
      });

    } catch (mailErr) {
      console.log("⚠️ Mail failed but order saved");
    }

    // ✅ ALWAYS SUCCESS RESPONSE
    res.status(201).json({
      success: true,
      message: "Order placed successfully"
    });

  } catch (err) {
    console.error("❌ Order error:", err);
    res.status(500).json({ success: false });
  }
};
