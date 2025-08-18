import mongoose from "mongoose";
import type { IOrderItem, IOrder } from "../types/Order.js";

const orderItemSchema = new mongoose.Schema<IOrderItem>({
  quantity: { type: Number, required: true },
  product: { type: mongoose.Schema.Types.ObjectId, required: true },
});

const orderSchema = new mongoose.Schema<IOrder>(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    orderItems: [orderItemSchema],
    shippingAddress: {
      address: { type: String, required: true },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true },
    },
  },
  { timestamps: true },
);

export default mongoose.model<IOrder>("Order", orderSchema);
