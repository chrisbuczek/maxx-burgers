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

    const product = await Product.insertMany(productsMockData);

    res.status(201).json({
      success: true,
      message: `${product.length} categories seeded successfully`,
      data: product,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/users", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await User.deleteMany({});

    const user = await Product.insertMany(usersMockData);

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
