import mongoose from "mongoose";

export interface ICategory extends mongoose.Document {
  name: string;
  slug: string;
  image: string;
  isActive: boolean;
}
