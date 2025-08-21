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
    res.status(404).json({ success: false, message: "Product not found" });
  }
  res.json({ product });
});

router.post("/create", async (req, res) => {
  const { name, categories, price, image, isActive } = req.body;

  //TODO: validate fields, return required field error

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
    res.status(404).json({ success: false, message: "Failed to create the product" });
  }
  res.json({ message: "List of users" });
});

router.put("/update/:id", (req, res) => {
  res.json({ message: "List of users" });
});

// TODO: add role access only for admin
router.delete("/delete/:id", async (req, res) => {
  const deletedCount = await Product.deleteOne({ _id: req.params.id });
  res.json({ message: deletedCount });
});

export default router;
