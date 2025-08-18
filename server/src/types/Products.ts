import mongoose from "mongoose";
export interface IProduct extends mongoose.Document {
  name: string;
  categories: mongoose.Types.ObjectId[];
  price: number;
  image: string;
  isActive: boolean;
}
