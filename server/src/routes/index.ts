import express from "express";
import userRoutes from "./users.js";
import productRoutes from "./products.js";

const router = express.Router();

router.use("/users", userRoutes);
router.use("/products", productRoutes);

export default router;
