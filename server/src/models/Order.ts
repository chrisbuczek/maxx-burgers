import mongoose from "mongoose";

interface IOrder extends mongoose.Document {
  name: string;
  description: string;
  price: number;
  image?: string;
  isActive: boolean;
}

const orderSchema = new mongoose.Schema<IOrder>(
  {
    name: { type: String, required: true },
    image: { type: String, required: false },
    isActive: { type: Boolean, required: false, default: true },
  },
  { timestamps: true },
);

// const reviewSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   rating: { type: Number, required: true },
//   comment: { type: String, required: true },
//   user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
// });

export default mongoose.model<IOrder>("Order", orderSchema);
