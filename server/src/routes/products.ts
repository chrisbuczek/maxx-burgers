import express from "express";
import type { Request, Response, NextFunction } from "express";
import mongoose from "mongoose";
const router = express.Router();
import Product from "../models/Product.js";
import Category from "../models/Category.js";
import { slugify } from "../utils/slugify.js";
import auth from "../middleware/auth.js";

router.get("/", async (req, res) => {
  /*  #swagger.tags = ['Products']  */
  const products = await Product.find();
  res.json({ products });
});

router.get("/:id", async (req: Request, res: Response) => {
  /*  #swagger.tags = ['Products']  */
  const id = req.params.id;
  const product = await Product.findById(id);
  if (!product) {
    return res.status(404).json({ success: false, message: "Product not found" });
  }
  res.json({ product });
});

router.post("/create", auth, async (req: Request, res: Response, next: NextFunction) => {
  /*  #swagger.tags = ['Products']  */
  try {
    const { name, categories, price, image, isActive } = req.body;

    if (!name || !price) {
      return res.status(400).json({
        success: false,
        message: "Name and price are required",
      });
    }

    let categoryIds: mongoose.Types.ObjectId[] = [];
    if (categories && categories.length > 0) {
      const foundCategories = await Category.find({
        $or: [{ slug: { $in: categories } }, { name: { $in: categories } }],
      });

      categoryIds = foundCategories.map((cat) => cat._id as mongoose.Types.ObjectId);
      if (foundCategories.length !== categories.length) {
        console.warn(
          `Some categories not found. Requested: ${categories}, Found: ${foundCategories.map((c) => c.slug)}`,
        );
      }
    }

    const slug = slugify(name);

    const newProduct = await Product.create({
      name,
      slug,
      categories: categoryIds, // Use ObjectIds instead of strings
      price,
      image: image || "",
      isActive: isActive !== undefined ? isActive : true,
    });

    res.status(201).json({
      success: true,
      data: newProduct,
      message: "Product created successfully",
    });
  } catch (error: unknown) {
    // Handle duplicate slug error
    if (error && typeof error === "object" && "code" in error && error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: "A product with this name already exists",
      });
    }

    // Handle validation errors
    if (error && typeof error === "object" && "name" in error && error.name === "ValidationError") {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: "Validation failed",
      });
    }

    next(error);
  }
});

// TODO: add role access only for admin
router.put("/update/:id", async (req, res) => {
  /*  #swagger.tags = ['Products']  */
  const id = req.params.id;
  const { name, categories, price, image, isActive } = req.body;
  //TODO: validate data
  const foundProduct = await Product.findById(id);
  if (!foundProduct) {
    return res.status(404).json({ success: false, message: "Failed to find product with provided id" });
  }
  if (name) {
    foundProduct.name = name;
    foundProduct.slug = slugify(name);
  }
  if (categories) foundProduct.categories = categories;
  if (price) foundProduct.price = price;
  if (image) foundProduct.image = image;
  if (isActive !== undefined) foundProduct.isActive = isActive;

  const updatedProduct = await Product.findByIdAndUpdate(id, foundProduct, {
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
  /*  #swagger.tags = ['Products']  */
  const deletedCount = await Product.deleteOne({ _id: req.params.id });
  res.json({ message: deletedCount });
});

export default router;
