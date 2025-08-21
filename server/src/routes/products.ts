import express from "express";
const router = express.Router();
import Product from "../models/Product.js";

router.get("/", async (req, res) => {
  const products = Product.find({});
  res.json({ products });
});

router.get("/:id", async (req, res) => {
  // const products = Product.find({req.params.id});
  // res.json({ products });
});

router.post("/create", (req, res) => {
  res.json({ message: "List of users" });
});

router.put("/update/:id", (req, res) => {
  res.json({ message: "List of users" });
});

router.delete("/delete/:id", async (req, res) => {
  const deletedCount = await Product.deleteOne({ _id: req.params.id });
  res.json({ message: deletedCount });
});

export default router;
