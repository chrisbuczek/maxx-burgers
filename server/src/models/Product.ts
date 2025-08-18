import mongoose from "mongoose";
import type { IProduct } from "../types/Products.js";

const productSchema = new mongoose.Schema<IProduct>(
  {
    name: { type: String, required: true },
    categories: { type: [mongoose.Schema.Types.ObjectId], required: true, ref: "Category" },
    price: { type: Number, required: true },
    image: { type: String, required: false },
    isActive: { type: Boolean, required: false, default: true },
  },
  { timestamps: true },
);

export default mongoose.model<IProduct>("Product", productSchema);
