import express from "express";
import type { Request, Response, NextFunction } from "express";

import Category from "./models/Category.js";
import categoriesMockData from "../data/Categories.js";

import Product from "./models/Product.js";
import productsMockData from "../data/Products.js";

import User from "./models/User.js";
import usersMockData from "../data/Users.js";

import Order from "./models/Order.js";
import ordersMockData from "../data/Orders.js";

import { slugify } from "./utils/slugify.js";

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
      slug: slugify(product.name),
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
      message: `${user.length} users seeded successfully`,
      data: user,
    });
  } catch (error) {
    next(error);
  }
});

// remember to add users before orders
router.post("/orders", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await Order.deleteMany({});

    const users = await User.find();
    const products = await Product.find();

    const userLookup = new Map(users.map((user) => [user.email, user._id]));
    const productLookup = new Map(products.map((product) => [product.name, product._id]));

    const ordersWithObjectIds = ordersMockData
      .map((order) => ({
        ...order,
        user: userLookup.get(order.user),
        orderItems: order.orderItems
          .map((item) => ({
            quantity: item.quantity,
            product: productLookup.get(item.product),
          }))
          .filter((item) => item.product),
      }))
      .filter((order) => order.user);

    const orders = await Order.insertMany(ordersWithObjectIds);

    res.status(201).json({
      success: true,
      message: `${orders.length} orders seeded successfully`,
      data: orders,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
