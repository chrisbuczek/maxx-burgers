import express from "express";
import type { Request, Response } from "express";
const router = express.Router();
import Product from "../models/Product.js";
import { slugify } from "../utils/slugify.js";

router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json({ products });
});

router.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }
  res.json({ product });
});

// TODO: add role access for admin and user
router.post("/create", async (req, res) => {
  const { name, categories, price, image, isActive } = req.body;

  //TODO: validate fields, return required field error, DTO???

  const slug = slugify(name);
  const newProduct = await Product.create({
    name,
    slug,
    categories,
    price,
    image,
    isActive,
  });
  if (!newProduct) {
    return res.status(404).json({ success: false, message: "Failed to create the product" });
  }
  res.json({ message: "List of users" });
});

// TODO: add role access only for admin
router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { name, categories, price, image, isActive } = req.body;
  //TODO: validate data
  const updateData = await Product.findById(id);
  if (!updateData) {
    return res.status(404).json({ success: false, message: "Failed to find product with provided id" });
  }
  if (name) {
    updateData.name = name;
    updateData.slug = slugify(name);
  }
  if (categories) updateData.categories = categories;
  if (price) updateData.price = price;
  if (image) updateData.image = image;
  if (isActive !== undefined) updateData.isActive = isActive;

  const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
    new: true, // Return updated document
    runValidators: true, // Run schema validation
  });
  res.json({
    success: true,
    data: updatedProduct,
    message: "Product updated successfully",
  });
});

// TODO: add role access only for admin
router.delete("/delete/:id", async (req, res) => {
  const deletedCount = await Product.deleteOne({ _id: req.params.id });
  res.json({ message: deletedCount });
});

export default router;
