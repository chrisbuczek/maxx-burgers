import mongoose from "mongoose";
import { Roles } from "../types/Roles.js";
import type { RolesEnum } from "../types/Roles.js";

interface IUser extends mongoose.Document {
  name: string;
  email: string;
  passwordHash: string;
  roles: RolesEnum[];
  speak(): void;
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

userSchema.methods.speak = function speak() {
  const greeting = "User name is " + this.name;
  console.log(greeting);
};

export default mongoose.model<IUser>("User", userSchema);
