import express from "express";
import type { Request, Response, NextFunction } from "express";

import Category from "./models/Category.js";
import categoriesMockData from "../data/Categories.js";

import Product from "./models/Product.js";
import productsMockData from "../data/Products.js";

import User from "./models/User.js";
import usersMockData from "../data/Users.js";

const router = express.Router();

router.post("/categories", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Category.deleteMany({});

    const categories = await Category.insertMany(categoriesMockData);

    res.status(201).json({
      success: true,
      message: `${categories.length} categories seeded successfully`,
      data: categories,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/products", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Product.deleteMany({});

    const categories = await Category.find();
    const categoryLookup = new Map(
      categories.map((cat) => [cat.slug, cat._id]), // Map slug to ObjectId
    );

    // Convert product data with string categories to ObjectIds
    const productsWithObjectIds = productsMockData.map((product) => ({
      ...product,
      categories: product.categories.map((catSlug) => categoryLookup.get(catSlug)).filter(Boolean), // Remove any undefined values
    }));

    const products = await Product.insertMany(productsWithObjectIds);

    res.status(201).json({
      success: true,
      message: `${products.length} products seeded successfully`,
      data: products,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/users", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await User.deleteMany({});

    const user = await User.insertMany(usersMockData);

    res.status(201).json({
      success: true,
      message: `${user.length} categories seeded successfully`,
      data: user,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
