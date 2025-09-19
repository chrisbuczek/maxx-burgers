import mongoose from "mongoose";

export interface IRestaurant extends mongoose.Document {
  id: number;
  name: string;
  streetName: string;
  postalCode: string;
  city: string;
  countryIsoCode: string;
  phoneNumber: string;
  country: string;
  latitude: number;
  longitude: number;
  openingTime: string;
  closingTime: string;
  hideInStoreLists: boolean;
}
