import mongoose from "mongoose";

interface IBlacklistedToken extends mongoose.Document {
  token: string;
  expiresAt: Date;
  userId: string;
}

const blacklistedTokenSchema = new mongoose.Schema<IBlacklistedToken>(
  {
    token: { type: String, required: true, unique: true },
    expiresAt: { type: Date, required: true },
    userId: { type: String, required: true },
  },
  { timestamps: true },
);

blacklistedTokenSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

export default mongoose.model<IBlacklistedToken>("BlacklistedToken", blacklistedTokenSchema);
