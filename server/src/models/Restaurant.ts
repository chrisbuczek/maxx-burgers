import mongoose from "mongoose";
import type { IRestaurant } from "../types/Restaurant.js";

const restaurantSchema = new mongoose.Schema<IRestaurant>({
  name: { type: String, required: true },
  streetName: { type: String, required: true },
  streetNumber: { type: Number, required: true },
  postalCode: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  openingTime: { type: String, required: true },
  closingTime: { type: String, required: true },
});

export default mongoose.model<IRestaurant>("Restaurant", restaurantSchema);
