import mongoose from "mongoose";
import { Roles } from "../types/Roles.js";
import type { RolesEnum } from "../types/Roles.js";

interface IUser extends mongoose.Document {
  name: string;
  email: string;
  passwordHash: string;
  roles: RolesEnum[];
}

const userSchema = new mongoose.Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    roles: {
      type: [String],
      enum: Object.values(Roles),
      default: [Roles.USER],
    },
  },
  { timestamps: true },
);

export default mongoose.model<IUser>("User", userSchema);
