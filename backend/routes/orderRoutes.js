import express from "express";
import Order from "../models/Order.js";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/place", async (req, res) => {
  try {
    const { items, totalAmount, shippingAddress, paymentMethod } = req.body;

    if (!items || !items.length || !totalAmount || !shippingAddress) {
      return res.status(400).json({ message: "Missing order data" });
    }

    // 1️⃣ SAVE ORDER FIRST
    const order = new Order({
      items,
      totalAmount,
      shippingAddress,
      paymentMethod,
    });

    await order.save();

    // 2️⃣ RESPOND IMMEDIATELY (ORDER SUCCESS)
    res.status(201).json({
      message: "Order placed successfully",
      orderId: order._id,
    });

    // 3️⃣ CREATE TRANSPORTER HERE (IMPORTANT 🔥)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const itemList = items
      .map(
        (item) =>
          `${item.name} × ${item.quantity} — ₹${item.price * item.quantity}`
      )
      .join("\n");

    /* ======================
       CUSTOMER MAIL
    ====================== */
    if (shippingAddress.email) {
      transporter
        .sendMail({
          from: `"Chic Threads" <${process.env.EMAIL_USER}>`,
          to: shippingAddress.email,
          subject: "🛍️ Order Confirmed – Chic Threads",
          text: `
Hi ${shippingAddress.firstName},

Your order has been placed successfully 🎉

Order ID: ${order._id}

Items:
${itemList}

Total Amount: ₹${totalAmount}

Thank you for shopping with Chic Threads 💖
`,
        })
        .then(() => console.log("✅ Customer mail sent"))
        .catch((err) =>
          console.error("❌ Customer mail failed:", err.message)
        );
    }

    /* ======================
       ADMIN MAIL
    ====================== */
    transporter
      .sendMail({
        from: `"Chic Threads" <${process.env.EMAIL_USER}>`,
        to: process.env.ADMIN_EMAIL,
        subject: "📦 New Order Received – Chic Threads",
        text: `
New order received 🚨

Order ID: ${order._id}

Customer: ${shippingAddress.firstName} ${shippingAddress.lastName}
Email: ${shippingAddress.email}
Phone: ${shippingAddress.phone}

Address:
${shippingAddress.address},
${shippingAddress.city},
${shippingAddress.state} - ${shippingAddress.pincode}

Items:
${itemList}

Total Amount: ₹${totalAmount}
Payment Method: ${paymentMethod}
`,
      })
      .then(() => console.log("✅ Admin mail sent"))
      .catch((err) =>
        console.error("❌ Admin mail failed:", err.message)
      );

  } catch (error) {
    console.error("❌ Order error:", error);
  }
});

export default router;
