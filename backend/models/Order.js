import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    items: {
      type: Array,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    shippingAddress: {
      type: Object,
      required: true,
    },
    paymentMethod: {
      type: String,
      default: "COD",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
