import express from "express";
import Category from "../models/Category.js";
import { slugify } from "../utils/slugify.js";
const router = express.Router();

router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json({ categories });
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const category = await Category.findById(id);
  if (!category) {
    res.status(404).json({ success: false, message: "Category not found" });
  }
  res.json({ category });
});

// TODO: role only for admin
router.get("/create", (req, res) => {
  const { name, image, isActive } = req.body;

  const createdCategory = Category.create({ name: name, slug: slugify(name), image: image, isActive: isActive });
  res.json({ createdCategory });
});

// TODO: role only for admin
router.put("/update/:id", async (req, res) => {
  const id = req.params.id;
  const { name, image, isActive } = req.body;
  const foundCategory = await Category.findById(id);
  if (!foundCategory) {
    return res.status(404).json({ success: false, message: "Failed to find category with provided id" });
  }
  if (name) foundCategory.name = name;
  foundCategory.slug = slugify(name);
  if (image) foundCategory.image = image;
  if (isActive !== undefined) foundCategory.isActive = isActive;

  const updatedCategory = await Category.findByIdAndUpdate(id, foundCategory, {
    new: true, // Return updated document
    runValidators: true, // Run schema validation
  });

  return res.status(201).json({ updatedCategory });
});

// TODO: role only for admin
router.put("/delete/:id", (req, res) => {
  res.json({ message: "List of users" });
});

export default router;
