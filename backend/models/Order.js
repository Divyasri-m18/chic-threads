import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  orderId: String,
  userEmail: String,
  items: Array,
  totalAmount: Number,
  paymentMethod: String,
  shippingAddress: Object,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Order", orderSchema);
