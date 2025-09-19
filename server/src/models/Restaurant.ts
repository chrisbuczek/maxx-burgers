import mongoose from "mongoose";
import type { IRestaurant } from "../types/Restaurant.js";

const restaurantSchema = new mongoose.Schema<IRestaurant>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  streetName: { type: String, required: true },
  postalCode: { type: String, required: true },
  city: { type: String, required: true },
  countryIsoCode: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  country: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  openingTime: { type: String, required: true },
  closingTime: { type: String, required: true },
  hideInStoreLists: { type: Boolean, required: true, default: false },
});

export default mongoose.model<IRestaurant>("Restaurant", restaurantSchema);
