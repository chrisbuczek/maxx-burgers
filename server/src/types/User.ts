import mongoose from "mongoose";
import type { RolesEnum } from "../types/Roles.js";

export interface IUser extends mongoose.Document {
  name: string;
  email: string;
  passwordHash: string;
  roles: RolesEnum[];
  matchPassword(enteredPassword: string): Promise<boolean>;
}
