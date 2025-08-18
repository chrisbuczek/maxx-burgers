import mongoose from "mongoose";
import type { IUser } from "../types/User.js";
import { Roles } from "../types/Roles.js";

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
