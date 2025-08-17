import mongoose from "mongoose";

interface IOrderItem extends mongoose.Document {
  quantity: number;
  product: string;
}

const orderItemSchema = new mongoose.Schema<IOrderItem>({
  quantity: { type: Number, required: true },
});

interface IOrder extends mongoose.Document {
  user: mongoose.Types.ObjectId;
  orderItems: IOrderItem[];
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
}

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
