import express from "express";
import type { Request, Response, NextFunction } from "express";
import Category from "./models/Category.js";
import categoriesMockData from "../data/Categories.js";

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

export default router;
