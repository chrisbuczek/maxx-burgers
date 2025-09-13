import mongoose from "mongoose";

export interface IRestaurant extends mongoose.Document {
  name: string;
  streetName: string;
  streetNumber: number;
  postalCode: string;
  city: string;
  country: string;
  openingTime: string;
  closingTime: string;
}
