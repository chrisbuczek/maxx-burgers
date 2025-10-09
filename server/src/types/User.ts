import mongoose from "mongoose";
import type { RolesEnumValues } from "../types/Roles.js";

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  passwordHash: string;
  roles: RolesEnumValues[];
  matchPassword(enteredPassword: string): Promise<boolean>;
}
