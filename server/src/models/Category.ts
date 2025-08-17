import mongoose from "mongoose";
// Admin can add/remove categories via API or Dashboard panel - reason for model, not enum
interface ICategory extends mongoose.Document {
  name: string;
  slug: string;
  image: string;
  isActive: boolean;
}

const categorySchema = new mongoose.Schema<ICategory>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    isActive: { type: Boolean, required: false, default: true },
  },
  { timestamps: true },
);

export default mongoose.model<ICategory>("Category", categorySchema);
