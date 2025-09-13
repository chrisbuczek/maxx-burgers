import express from "express";
import userRoutes from "./users.js";
import productRoutes from "./products.js";
import categoriesRoutes from "./categories.js";
import restaurantRoutes from "./restaurants.js";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/products", productRoutes);
router.use("/categories", categoriesRoutes);
router.use("/restaurant", restaurantRoutes);

export default router;
