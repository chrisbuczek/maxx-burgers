import mongoose from "mongoose";

export interface IOrderItem extends mongoose.Document {
  quantity: number;
  product: mongoose.Types.ObjectId;
}

export interface IOrder extends mongoose.Document {
  user: mongoose.Types.ObjectId;
  orderItems: IOrderItem[];
  shippingAddress: {
    address: string;
    city: string;
    postalCode: string;
    country: string;
  };
}
